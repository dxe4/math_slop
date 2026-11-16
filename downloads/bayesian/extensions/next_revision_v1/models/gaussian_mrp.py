"""Pure conditional Gaussian MRP and full-support pooling-scale integration.

Arrays use specification cell order; draws are rows. No I/O or fits at import.
Normal covariance arguments are variances, sigma/tau are standard deviations.
"""
from __future__ import annotations

import numpy as np
from scipy.linalg import cho_factor, cho_solve
from scipy.optimize import brentq
from scipy.special import logsumexp, ndtr, roots_legendre


def _vector(value, name: str) -> np.ndarray:
    result = np.asarray(value, dtype=float)
    if result.ndim != 1 or not np.all(np.isfinite(result)):
        raise ValueError(f"{name} must be a finite vector")
    return result


def conditional_gaussian(y, cell_index, cell_x, *, sigma: float, tau: float,
                         beta_mean, beta_cov) -> dict:
    """Condition in observation space, including tau=0 and zero observations.

    Returns theta_mean (J+2), theta_cov (J+2,J+2), cell_mean (J),
    cell_cov (J,J), log_likelihood and cell_design. Invalid inputs raise ValueError.
    """
    y = _vector(y, "y")
    x = _vector(cell_x, "cell_x")
    index = _vector(cell_index, "cell_index")
    mean = _vector(beta_mean, "beta_mean")
    covariance = np.asarray(beta_cov, dtype=float)
    if not len(x) or index.shape != y.shape or np.any(index != np.floor(index)):
        raise ValueError("Require cells and one integer cell_index per response")
    if np.any((index < 0) | (index >= len(x))):
        raise ValueError("cell_index outside cell range")
    if mean.shape != (2,) or covariance.shape != (2, 2):
        raise ValueError("beta_mean and beta_cov must have shapes (2,) and (2,2)")
    if not np.all(np.isfinite(covariance)) or not np.allclose(covariance, covariance.T):
        raise ValueError("beta_cov must be finite and symmetric")
    try:
        cho_factor(covariance)
    except np.linalg.LinAlgError as exc:
        raise ValueError("beta_cov must be positive definite") from exc
    if not np.isfinite(sigma) or sigma <= 0 or not np.isfinite(tau) or tau < 0:
        raise ValueError("sigma must be positive and tau nonnegative, both finite")
    h = np.column_stack((np.ones(len(x)), x, np.eye(len(x))))
    a = h[index.astype(int)]
    prior_mean = np.r_[mean, np.zeros(len(x))]
    d = np.zeros((len(x) + 2, len(x) + 2))
    d[:2, :2] = covariance
    d[2:, 2:] = tau**2 * np.eye(len(x))
    if len(y):
        c = sigma**2 * np.eye(len(y)) + a @ d @ a.T
        chol = cho_factor(c, lower=True)
        residual = y - a @ prior_mean
        gain_t = cho_solve(chol, a @ d)
        m = prior_mean + gain_t.T @ residual
        v = d - d @ a.T @ gain_t
        log_likelihood = -0.5 * (len(y) * np.log(2 * np.pi)
                                  + 2 * np.log(np.diag(chol[0])).sum()
                                  + residual @ cho_solve(chol, residual))
    else:
        m, v, log_likelihood = prior_mean, d, 0.0
    v = (v + v.T) / 2
    return dict(theta_mean=m, theta_cov=v, cell_mean=h @ m,
                cell_cov=h @ v @ h.T, log_likelihood=float(log_likelihood), cell_design=h)


def validate_spec(spec: dict) -> tuple[np.ndarray, np.ndarray]:
    """Validate population accounting and redundant literal data; return N,n."""
    data = spec["data"]
    counts = _vector(data["population_counts"], "population_counts")
    x = _vector(data["cell_x"], "cell_x")
    if counts.shape != x.shape or np.any(counts < 0) or np.any(counts != np.floor(counts)) or counts.sum() <= 0:
        raise ValueError("population_counts must be nonnegative integers with positive total")
    conditional_gaussian(data["y"], data["cell_index"], x,
                         sigma=spec["known_quantities"]["sigma"], tau=0,
                         beta_mean=spec["priors"]["beta_mean"], beta_cov=spec["priors"]["beta_cov"])
    n = np.bincount(np.asarray(data["cell_index"], dtype=int), minlength=len(x))
    if np.any(n > counts):
        raise ValueError("sample counts cannot exceed population counts")
    scale = spec["priors"]["tau"]["scale"]
    if not np.isfinite(scale) or scale <= 0:
        raise ValueError("tau prior scale must be positive and finite")
    if "responses_by_cell" in data:
        expected = [[v for v, c in zip(data["y"], data["cell_index"]) if c == j] for j in range(len(x))]
        if data["responses_by_cell"] != expected:
            raise ValueError("responses_by_cell disagrees with y/cell_index")
    return counts, n


def integrate_mrp(spec: dict, *, order: int) -> dict:
    """Integrate tau on [0,infinity) via t/(1-t), using Legendre nodes.

    Fit includes nodes (Q), weights (Q), conditional cell means (Q,J),
    covariances (Q,J,J), total cell moments and within/between scale covariance.
    """
    counts, n = validate_spec(spec)
    if isinstance(order, bool) or not isinstance(order, (int, np.integer)) or order < 2:
        raise ValueError("order must be an integer >=2")
    z, weight = roots_legendre(order)
    t = (z + 1) / 2
    tau = t / (1 - t)
    log_measure = np.log(weight / 2) - 2 * np.log1p(-t)
    data, prior = spec["data"], spec["priors"]
    scale = prior["tau"]["scale"]
    conditional = [conditional_gaussian(data["y"], data["cell_index"], data["cell_x"],
                   sigma=spec["known_quantities"]["sigma"], tau=q,
                   beta_mean=prior["beta_mean"], beta_cov=prior["beta_cov"]) for q in tau]
    log_density = np.array([c["log_likelihood"] for c in conditional]) + np.log(2 / np.pi) / 2 - np.log(scale) - (tau / scale)**2 / 2
    log_evidence = logsumexp(log_density + log_measure)
    weights = np.exp(log_density + log_measure - log_evidence)
    means = np.array([c["cell_mean"] for c in conditional])
    covs = np.array([c["cell_cov"] for c in conditional])
    mean = weights @ means
    centered = means - mean
    within = np.einsum("q,qij->ij", weights, covs)
    between = np.einsum("q,qi,qj->ij", weights, centered, centered)
    return dict(nodes=tau, weights=weights, conditional_mean=means, conditional_cov=covs,
                cell_mean=mean, cell_cov=within + between, within_cov=within, between_cov=between,
                tau_mean=float(weights @ tau), tau_second=float(weights @ tau**2),
                log_evidence=float(log_evidence), order=int(order), counts=counts, sample_counts=n,
                interval_probabilities=spec["interval_probabilities"],
                interval_settings=spec["quadrature"]["intervals"])


def linear_summary(fit: dict, weights, *, offset: float = 0, residual_variance: float = 0) -> dict:
    """Moments and integrated-CDF intervals for offset + weights.T mu + noise.

    The noise is independent Normal(0,residual_variance); weights may be contrasts.
    """
    w = _vector(weights, "weights")
    if w.shape != fit["cell_mean"].shape or not np.isfinite(offset) or not np.isfinite(residual_variance) or residual_variance < 0:
        raise ValueError("Invalid target weights, offset or residual variance")
    means = fit["conditional_mean"] @ w + offset
    variances = np.einsum("i,qij,j->q", w, fit["conditional_cov"], w) + residual_variance
    if np.any(variances[fit["weights"] > 1e-16] < -1e-10):
        raise ArithmeticError("Negative conditional target variance")
    sd = np.sqrt(np.maximum(variances, 0))
    active = fit["weights"] > 0
    def cdf(value):
        p = np.empty_like(means)
        positive = sd > 0
        p[positive] = ndtr((value - means[positive]) / sd[positive])
        p[~positive] = value >= means[~positive]
        return float(fit["weights"][active] @ p[active])
    settings = fit["interval_settings"]
    intervals = []
    for probability in fit["interval_probabilities"]:
        if np.all(sd[active] == 0) and np.ptp(means[active]) == 0:
            intervals.append(float(means[active][0]))
            continue
        low, high = settings["initial_bracket"]
        for _ in range(settings["max_bracket_doublings"] + 1):
            if cdf(low) <= probability <= cdf(high):
                break
            low, high = low * 2, high * 2
        else:
            raise ArithmeticError("Target quantile bracket exhausted")
        intervals.append(float(brentq(lambda v: cdf(v) - probability, low, high, xtol=settings["xtol"])))
    within = float(w @ fit["within_cov"] @ w)
    between = float(w @ fit["between_cov"] @ w)
    variance = within + between + residual_variance
    return dict(mean=float(w @ fit["cell_mean"] + offset), sd=float(np.sqrt(max(0, variance))),
                variance=variance, interval=intervals, interval_probabilities=fit["interval_probabilities"],
                within_scale_variance=within, between_scale_variance=between,
                residual_variance=float(residual_variance))


def finite_population_summary(fit: dict, spec: dict, *, counts) -> dict:
    """Condition on observed population members; simulate only remaining members."""
    counts = _vector(counts, "counts")
    n = fit["sample_counts"]
    if counts.shape != n.shape or np.any(counts != np.floor(counts)) or np.any(counts < n) or counts.sum() <= 0:
        raise ValueError("counts must be integer, positive total and >= sample counts")
    total = counts.sum()
    return linear_summary(fit, (counts - n) / total, offset=sum(spec["data"]["y"]) / total,
                          residual_variance=(total - n.sum()) * spec["known_quantities"]["sigma"]**2 / total**2)


def sample_mrp(fit: dict, *, rng: np.random.Generator, size: int) -> dict:
    """Independent joint cell draws from the quadrature approximation; never split cells."""
    if isinstance(size, bool) or not isinstance(size, (int, np.integer)) or size < 1:
        raise ValueError("size must be a positive integer")
    indexes = rng.choice(len(fit["nodes"]), size=size, p=fit["weights"])
    cells = np.empty((size, len(fit["cell_mean"])))
    for index in np.unique(indexes):
        selected = indexes == index
        cells[selected] = rng.multivariate_normal(fit["conditional_mean"][index],
                                                  fit["conditional_cov"][index], size=selected.sum(),
                                                  check_valid="raise")
    return dict(cell_mean=cells, tau=fit["nodes"][indexes], node_index=indexes)
