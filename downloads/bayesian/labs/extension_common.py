"""Output contracts and small numerical routines shared by extension labs only.

No model runs or artifacts are written on import. Normal parameters use variance
inside the Kalman/forecast routines. The original common.py API is unchanged.
"""
from hashlib import sha256

from common import ROOT, np, normalise_log_weights
from scipy.linalg import cho_factor, cho_solve
from scipy import stats


def check(name: str, actual: float, expected: float, atol: float = 1e-10,
          rtol: float = 0.0) -> dict:
    actual, expected = float(actual), float(expected)
    return dict(id=name, actual=actual, expected=expected, atol=atol, rtol=rtol,
                passed=bool(abs(actual - expected) <= atol + rtol * abs(expected)))


def source_hashes(stem: str, inputs: tuple[str, ...] = ()) -> dict:
    paths = (f"labs/{stem}.py", "labs/common.py", "labs/extension_common.py",
             "requirements.lock", "llm/teaching.json", *inputs)
    return {p: sha256((ROOT / p).read_bytes()).hexdigest() for p in paths}


def envelope(stem: str, seed: int, method: str, parameters: dict, metrics: dict,
             checks: list[dict], limitations: list[str],
             inputs: tuple[str, ...] = ()) -> dict:
    return dict(schema_version=1, lab_id=stem, seed=seed, method=method,
                source_hashes=source_hashes(stem, inputs), parameters=parameters,
                metrics=metrics, checks=checks, limitations=limitations)


def midpoint_grid(low: float, high: float, cells: int) -> tuple:
    """Equal-width quadrature; return locations and log cell widths."""
    if not low < high or cells < 2:
        raise ValueError("Require ordered bounds and at least two cells")
    width = (high - low) / cells
    return low + (np.arange(cells) + .5) * width, np.full(cells, np.log(width))


def ar_moments(phi: np.ndarray, last: float | np.ndarray, horizons: np.ndarray,
               innovation_var: float, state_var: float | np.ndarray = 0.0,
               measurement_var: float = 0.0) -> tuple:
    phi = np.atleast_1d(phi)[:, None]
    h = np.asarray(horizons)[None, :]
    power = phi ** h
    mean = power * np.asarray(last).reshape(-1, 1)
    variance = power**2 * np.asarray(state_var).reshape(-1, 1)
    variance = variance + innovation_var * (1 - phi**(2*h)) / (1 - phi**2)
    return mean, variance, variance + measurement_var


def mixture_moments(weights: np.ndarray, means: np.ndarray,
                    variances: np.ndarray) -> tuple:
    mean = weights @ means
    variance = weights @ (variances + means**2) - mean**2
    return mean, variance


def kalman(y: np.ndarray, phi: np.ndarray, process_var: float,
           measurement_var: float) -> tuple:
    """Stationary initial law; vectorised independent filters, one per phi.

    Returns log likelihood, final filtered mean and variance. Data are centred
    before entry; y[0] is included in the likelihood.
    """
    phi = np.atleast_1d(phi).astype(float)
    y = np.asarray(y, dtype=float)
    if (np.any(abs(phi) >= 1) or process_var <= 0 or measurement_var < 0
            or not np.all(np.isfinite(y)) or y.ndim != 1 or len(y) == 0):
        raise ValueError("Require a finite series, stationary phi and valid variances")
    mean, var = np.zeros_like(phi), process_var / (1 - phi**2)
    loglik = np.zeros_like(phi)
    for t, observation in enumerate(y):
        if t:
            mean, var = phi * mean, phi**2 * var + process_var
        residual, predictive_var = observation - mean, var + measurement_var
        loglik += stats.norm.logpdf(residual, scale=np.sqrt(predictive_var))
        gain = var / predictive_var
        mean = mean + gain * residual
        var = (1 - gain) * var
    return loglik, mean, var


def gp_predict(x: np.ndarray, y: np.ndarray, new: np.ndarray, length: float,
               noise_var: float, jitter: float = 0.0) -> tuple:
    """Unit-amplitude squared-exponential GP; marginal predictive variances."""
    if length <= 0 or noise_var < 0 or jitter < 0:
        raise ValueError("Invalid kernel, noise or jitter setting")
    kernel = lambda a, b: np.exp(-.5 * ((a[:, None] - b[None, :]) / length)**2)
    covariance = kernel(x, x) + (noise_var + jitter) * np.eye(len(x))
    factor = cho_factor(covariance, lower=True)
    cross = kernel(x, new)
    mean = cross.T @ cho_solve(factor, y)
    raw_var = 1 - np.sum(cross * cho_solve(factor, cross), axis=0)
    if np.min(raw_var) < -1e-9:
        raise ArithmeticError("Negative GP variance beyond rounding tolerance")
    return mean, np.maximum(raw_var, 0), np.maximum(raw_var, 0) + noise_var
