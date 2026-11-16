"""A09 numerical model and checks. No fitting or artifact writes on import.

The bivariate LKJ law is implemented exactly by (rho+1)/2 ~ Beta(eta, eta).
This identity is special to dimension two. Data are original synthetic givens.
"""
from dataclasses import dataclass

from common import np
from scipy import stats
from scipy.special import betaln

DEFAULT_SEED = 2323
PRIOR = dict(alpha_mean=2.8, alpha_sd=.6, within_mean=.18, within_sd=.3,
             between_mean=.25, between_sd=.4, tau_sd=[.65, .45],
             eta=2., sigma_sd=.5)
SAMPLER = dict(chains=4, tune=1000, draws=1000, cores=1, blas_cores=1,
               target_accept=.90, max_treedepth=12)
FIT_IDS = ("weak_centered", "weak_noncentered", "strong_centered", "strong_noncentered")
ESTIMANDS = ("alpha", "beta_within", "beta_between", "tau", "rho", "sigma",
             "existing_logmean", "new_logmean", "new_logvariance")


@dataclass(frozen=True)
class DepotData:
    regime: str
    group: np.ndarray
    within: np.ndarray
    between: np.ndarray
    response: np.ndarray
    counts: np.ndarray
    truth: dict


def valid_seed(seed: int) -> int:
    if isinstance(seed, (bool, np.bool_)) or not isinstance(seed, (int, np.integer)) or not 0 <= seed < 2**32:
        raise ValueError("seed must be an integer in [0, 2**32), not a boolean")
    return int(seed)


def covariance(tau: np.ndarray, rho: float) -> np.ndarray:
    tau = np.asarray(tau, dtype=float)
    if tau.shape != (2,) or not np.all(np.isfinite(tau)) or np.any(tau <= 0):
        raise ValueError("Require two positive finite effect scales")
    if not np.isfinite(rho) or abs(rho) >= 1:
        raise ValueError("Correlation must be finite and strictly between -1 and 1")
    return np.outer(tau, tau) * np.array([[1., rho], [rho, 1.]])


def lkj2_logpdf(rho: float, eta: float) -> float:
    """Normalized LKJ density with respect to d rho, dimension exactly two."""
    if not np.isfinite(eta) or eta <= 0 or not np.isfinite(rho) or abs(rho) >= 1:
        raise ValueError("Require eta > 0 and -1 < rho < 1")
    return float((eta-1)*np.log1p(-rho*rho) - betaln(.5, eta))


def make_data(regime: str, seed: int = DEFAULT_SEED) -> DepotData:
    """Same 12 depot effects and means; independently generated visit panels.

    w=(workload-depot mean)/10 jobs, q=(depot mean-50)/10 jobs.
    Each group's deviations sum to zero. No response is used to center x.
    """
    if regime not in {"weak", "strong"}:
        raise ValueError("regime must be weak or strong")
    rng = np.random.default_rng(valid_seed(seed))
    effects = rng.multivariate_normal([0., 0.], covariance([.30, .18], .55), 12)
    between = np.linspace(-1.4, 1.4, 12)
    counts = (np.array([2, 3, 4, 5, 6, 8, 10, 12, 15, 18, 22, 28]) if regime == "weak"
              else np.array([40, 45, 50, 55, 60, 65, 70, 75, 80, 90, 100, 120]))
    rng = np.random.default_rng(valid_seed(seed) + (101 if regime == "weak" else 202))
    group = np.repeat(np.arange(12), counts)
    within = np.concatenate([rng.uniform(-(.35+.04*j), .35+.04*j, n) if regime == "weak"
                             else rng.uniform(-2.2, 2.2, n) for j, n in enumerate(counts)])
    for j in range(12):
        within[group == j] -= within[group == j].mean()
    sigma = .65 if regime == "weak" else .28
    response = (2.8 + effects[group, 0] + (.22+effects[group, 1])*within
                + .35*between[group] + rng.normal(0., sigma, len(group)))
    return DepotData(regime, group, within, between, response, counts,
                     dict(alpha=2.8, beta_within=.22, beta_between=.35,
                          tau=[.30, .18], rho=.55, sigma=sigma, b=effects.tolist()))


def conditional_effect(y: np.ndarray, design: np.ndarray, mean: np.ndarray,
                       sigma: float, cov: np.ndarray) -> tuple[np.ndarray, np.ndarray]:
    """b | y, fixed population mean/covariance/noise; y = mean + X b + error."""
    y, design, mean, cov = (np.asarray(a, dtype=float) for a in (y, design, mean, cov))
    if (y.ndim != 1 or mean.shape != y.shape or design.shape != (len(y), 2)
            or cov.shape != (2, 2) or not np.allclose(cov, cov.T, atol=1e-14, rtol=0)
            or not all(np.all(np.isfinite(a)) for a in (y, design, mean, cov))
            or not np.isfinite(sigma) or sigma <= 0):
        raise ValueError("Require compatible finite observations/design, symmetric covariance and positive noise")
    np.linalg.cholesky(cov)  # Reject indefinite input; do not silently add jitter.
    precision = np.linalg.solve(cov, np.eye(2)) + design.T @ design / sigma**2
    post_cov = np.linalg.solve(precision, np.eye(2))
    post_mean = np.linalg.solve(precision, design.T @ (y-mean) / sigma**2)
    return post_mean, post_cov


def coordinate_logdensities(b: np.ndarray, tau: np.ndarray, rho: float) -> dict:
    """Conditional densities in b and z coordinates, including their Jacobian."""
    cov = covariance(tau, rho)
    b = np.asarray(b, dtype=float)
    if b.ndim != 2 or b.shape[1] != 2 or not np.all(np.isfinite(b)):
        raise ValueError("b must be a finite groups-by-2 matrix")
    chol = np.linalg.cholesky(cov)
    z = np.linalg.solve(chol, b.T).T
    log_b = float(np.sum(stats.multivariate_normal.logpdf(b, cov=cov)))
    log_z = float(stats.norm.logpdf(z).sum())
    log_jac = len(b)*float(np.log(np.diag(chol)).sum())
    return dict(log_density_b=log_b, log_density_z=log_z,
                log_abs_det_db_dz=log_jac, difference=log_b+log_jac-log_z)


def niw_fixture() -> dict:
    """Small conjugate reference ONLY; different prior/likelihood than the hierarchy."""
    y = np.array([[1., 0.], [0., 1.], [1., 1.]])
    n, d = y.shape
    kappa, nu = 1+n, 4+n
    ybar = y.mean(axis=0)
    scatter = (y-ybar).T @ (y-ybar)
    psi = np.eye(d) + scatter + n/(1+n)*np.outer(ybar, ybar)
    df = nu-d+1
    scale = (kappa+1)*psi/(kappa*df)
    return dict(mean=(y.sum(axis=0)/kappa).tolist(), kappa=kappa, nu=nu,
                psi=psi.tolist(), df=df, t_scale=scale.tolist(),
                predictive_covariance=(scale*df/(df-2)).tolist(),
                scope="Only the declared normal-inverse-Wishart model; not LKJ validation")


def build_model(data: DepotData, coordinates: str):
    """Identical target across coordinates, with no sum-to-zero restriction."""
    import pymc as pm
    import pytensor.tensor as pt
    if coordinates not in {"centered", "noncentered"}:
        raise ValueError("coordinates must be centered or noncentered")
    with pm.Model(coords={"depot": np.arange(len(data.counts)), "effect": ["intercept", "slope"]}) as model:
        alpha = pm.Normal("alpha", PRIOR["alpha_mean"], PRIOR["alpha_sd"])
        bw = pm.Normal("beta_within", PRIOR["within_mean"], PRIOR["within_sd"])
        bb = pm.Normal("beta_between", PRIOR["between_mean"], PRIOR["between_sd"])
        tau = pm.HalfNormal("tau", PRIOR["tau_sd"], dims="effect")
        p = pm.Beta("p_rho", PRIOR["eta"], PRIOR["eta"])
        rho = pm.Deterministic("rho", 2*p-1)
        chol = pt.stack([pt.stack([tau[0], 0.]),
                         pt.stack([rho*tau[1], tau[1]*pt.sqrt(1-rho*rho)])])
        if coordinates == "centered":
            b = pm.MvNormal("b", mu=pt.zeros(2), chol=chol, dims=("depot", "effect"))
        else:
            z = pm.Normal("z", 0, 1, dims=("depot", "effect"))
            b = pm.Deterministic("b", z @ chol.T, dims=("depot", "effect"))
        sigma = pm.HalfNormal("sigma", PRIOR["sigma_sd"])
        mean = alpha+b[data.group, 0]+(bw+b[data.group, 1])*data.within+bb*data.between[data.group]
        pm.Normal("y", mean, sigma, observed=data.response)
        # Fixed scientific functionals, not freshly randomized predictive draws.
        pm.Deterministic("existing_logmean", alpha+b[0, 0]+bw+b[0, 1]+bb*data.between[0])
        pm.Deterministic("new_logmean", alpha+bw+bb*.5)
        pm.Deterministic("new_logvariance", tau[0]**2+tau[1]**2+2*rho*tau[0]*tau[1]+sigma**2)
    return model


def draw_visits(posterior: dict, within: np.ndarray, between: np.ndarray,
                group: np.ndarray, rng: np.random.Generator, *, new_groups: bool) -> dict:
    """One effect vector per distinct depot per draw, reused across visits.

    posterior values have flattened leading draw axis; group is integer-coded.
    For existing groups codes index posterior['b']; for new groups they index
    between, which supplies the *known/planned* group average workload.
    """
    within, between, raw_group = np.asarray(within, float), np.asarray(between, float), np.asarray(group)
    if (within.ndim != 1 or between.ndim != 1 or raw_group.shape != within.shape
            or not np.issubdtype(raw_group.dtype, np.integer) or len(within) == 0
            or np.any(raw_group < 0) or np.any(raw_group >= len(between))
            or not np.all(np.isfinite(within)) or not np.all(np.isfinite(between))):
        raise ValueError("Require finite covariates and valid integer depot indices")
    group = raw_group.astype(int)
    draws = len(posterior["alpha"])
    if new_groups:
        tau, rho = posterior["tau"], posterior["rho"]
        z = rng.normal(size=(draws, len(between), 2))
        effects = np.empty_like(z)
        effects[:, :, 0] = tau[:, 0, None]*z[:, :, 0]
        effects[:, :, 1] = tau[:, 1, None]*(rho[:, None]*z[:, :, 0]
                              + np.sqrt(1-rho*rho)[:, None]*z[:, :, 1])
    else:
        effects = posterior["b"]
        if effects.shape != (draws, len(between), 2):
            raise ValueError("Existing depot effects must match all supplied depot averages")
    mean = (posterior["alpha"][:, None] + effects[:, group, 0]
            + (posterior["beta_within"][:, None]+effects[:, group, 1])*within
            + posterior["beta_between"][:, None]*between[group])
    return dict(log_mean=mean, log_response=mean+rng.normal(size=mean.shape)*posterior["sigma"][:, None],
                effects=effects)


def prior_draws(seed: int, draws: int = 5000, *, eta: float = 2., scale_multiplier: float = 1.) -> dict:
    if draws < 1 or eta <= 0 or scale_multiplier <= 0:
        raise ValueError("Require positive draws, eta and scale multiplier")
    rng = np.random.default_rng(valid_seed(seed))
    return dict(alpha=rng.normal(PRIOR["alpha_mean"], PRIOR["alpha_sd"], draws),
                beta_within=rng.normal(PRIOR["within_mean"], PRIOR["within_sd"], draws),
                beta_between=rng.normal(PRIOR["between_mean"], PRIOR["between_sd"], draws),
                tau=np.abs(rng.normal(size=(draws, 2)))*np.array(PRIOR["tau_sd"])*scale_multiplier,
                rho=2*rng.beta(eta, eta, draws)-1,
                sigma=np.abs(rng.normal(0, PRIOR["sigma_sd"], draws)))


def prior_predictive(seed: int) -> dict:
    """Design-conditional prior predictions; alternatives are target changes."""
    output = {}
    for label, eta, multiplier in [("base", 2., 1.), ("uniform_correlation", 1., 1.),
                                   ("double_effect_scales", 2., 2.)]:
        draws = prior_draws(seed, eta=eta, scale_multiplier=multiplier)
        prediction = draw_visits(draws, np.array([-1., 0., 1.]), np.array([.5]),
                                 np.zeros(3, int), np.random.default_rng(seed+2), new_groups=True)
        time = np.exp(prediction["log_response"])
        output[label] = dict(eta=eta, scale_multiplier=multiplier,
                            minutes_quantiles=np.quantile(time, [.05, .5, .95], axis=0).T.tolist(),
                            probability_outside_2_120_minutes=float(np.mean((time < 2) | (time > 120))),
                            probability_abs_rho_above_08=float(np.mean(abs(draws["rho"]) > .8)),
                            exact_probability_abs_rho_above_08=float(2*stats.beta.sf(.9, eta, eta)),
                            interpretation="Prior sensitivity changes the model, not its coordinates")
    return output


def summarize_fit(posterior: dict, sample_stats: dict) -> dict:
    import arviz as az
    idata = az.from_dict(posterior=posterior, sample_stats=sample_stats)
    names = [*ESTIMANDS, "b"] + (["z"] if "z" in posterior else [])
    summary = az.summary(idata, var_names=names, round_to="none")
    rows = {}
    for name, row in summary.iterrows():
        values = {key: float(row[key]) for key in ("mean", "sd", "mcse_mean", "ess_bulk", "ess_tail", "r_hat")}
        if not all(np.isfinite(list(values.values()))):
            raise ArithmeticError(f"Nonfinite diagnostic for {name}; cannot certify fit")
        rows[name] = values
    bfmi = np.asarray(az.bfmi(idata))
    divergence = np.asarray(sample_stats["diverging"])
    energy = sample_stats["energy"]
    screen = dict(max_rhat=float(summary.r_hat.max()), min_bulk_ess=float(summary.ess_bulk.min()),
                  min_tail_ess=float(summary.ess_tail.min()), divergences=int(divergence.sum()),
                  min_bfmi=float(bfmi.min()), bfmi_by_chain=bfmi.tolist(),
                  divergences_by_chain=divergence.sum(axis=1).tolist(),
                  max_treedepth_hits=int(np.sum(sample_stats["reached_max_treedepth"])),
                  energy_mean_by_chain=energy.mean(axis=1).tolist(),
                  energy_sd_by_chain=energy.std(axis=1).tolist(),
                  energy_quantiles=np.quantile(energy, [.05, .5, .95], axis=1).T.tolist())
    scientific = {name: row for name, row in rows.items() if name.split("[")[0] in ESTIMANDS}
    # Precision in log minutes, covariance scales and correlation: declared before fitting.
    limits = {name: (.03 if name == "rho" else .02) for name in scientific}
    screen["estimand_precision_passed"] = all(row["mcse_mean"] <= limits[name] for name, row in scientific.items())
    screen["passed"] = bool(screen["max_rhat"] < 1.01 and screen["min_bulk_ess"] > 400
                            and screen["min_tail_ess"] > 400 and screen["min_bfmi"] > .3
                            and screen["divergences"] == 0 and screen["max_treedepth_hits"] == 0
                            and screen["estimand_precision_passed"])
    return dict(screen=screen, estimands=scientific, all_parameters=rows,
                mcse_limits=limits, scope="Numerical screens can detect problems; passing does not prove exploration or model truth")


def flatten(posterior: dict) -> dict:
    return {name: value.reshape((-1, *value.shape[2:])) for name, value in posterior.items()}


def posterior_predictive(data: DepotData, posterior: dict, seed: int) -> dict:
    p = flatten(posterior)
    rng = np.random.default_rng(seed)
    prediction = draw_visits(p, data.within, data.between, data.group, rng, new_groups=False)
    yrep, mu = prediction["log_response"], prediction["log_mean"]
    discrepancies = {}
    for name, observed, replicated in [
            ("mean_log_minutes", data.response.mean(), yrep.mean(axis=1)),
            ("sd_log_minutes", data.response.std(), yrep.std(axis=1)),
            ("max_log_minutes", data.response.max(), yrep.max(axis=1))]:
        discrepancies[name] = dict(observed=float(observed), replicated_quantiles=np.quantile(replicated, [.05, .5, .95]).tolist(),
                                   tail_probability=float(np.mean(replicated >= observed)))
    group_checks = []
    for j, n in enumerate(data.counts):
        sel = data.group == j
        band = np.quantile(yrep[:, sel], [.05, .95], axis=0)
        residual = data.response[sel]-mu[:, sel].mean(axis=0)
        group_checks.append(dict(depot=j, n=int(n), within_sum_squares=float(np.sum(data.within[sel]**2)),
                                 effect_quantiles=np.quantile(p["b"][:, j], [.05, .5, .95], axis=0).T.tolist(),
                                 mean_log_minutes=float(data.response[sel].mean()),
                                 replicated_mean_quantiles=np.quantile(yrep[:, sel].mean(axis=1), [.05, .5, .95]).tolist(),
                                 in_sample_90_coverage=float(np.mean((data.response[sel] >= band[0]) & (data.response[sel] <= band[1]))),
                                 residual_mean=float(residual.mean()), residual_sd=float(residual.std())))
    visits = np.array([-1., 0., 1.])
    existing = draw_visits(p, visits, data.between, np.zeros(3, int), rng, new_groups=False)
    new = draw_visits(p, visits, np.array([.5]), np.zeros(3, int), rng, new_groups=True)
    return dict(discrepancies=discrepancies, by_depot=group_checks,
                existing_depot0_minutes_quantiles=np.quantile(np.exp(existing["log_response"]), [.05, .5, .95], axis=0).T.tolist(),
                new_depot_q05_minutes_quantiles=np.quantile(np.exp(new["log_response"]), [.05, .5, .95], axis=0).T.tolist(),
                new_depot_log_response_covariance=np.cov(new["log_response"], rowvar=False).tolist(),
                rho_interval=np.quantile(p["rho"], [.05, .5, .95]).tolist(),
                tau_intervals=np.quantile(p["tau"], [.05, .5, .95], axis=0).T.tolist(),
                covariance_01_interval=np.quantile(p["rho"]*p["tau"][:, 0]*p["tau"][:, 1], [.05, .5, .95]).tolist(),
                scope="In-sample predictive criticism, not held-out calibration or evidence of causal workload effects")


def posterior_agreement(first: dict, second: dict) -> dict:
    """Independent chains, five combined mean MCSE; not a test of model truth."""
    rows = {}
    for name, a in first["estimands"].items():
        b = second["estimands"][name]
        combined = float(np.hypot(a["mcse_mean"], b["mcse_mean"]))
        delta = abs(a["mean"]-b["mean"])
        rows[name] = dict(mean_difference=delta, combined_mcse=combined,
                          tolerance=5*combined, passed=bool(delta <= 5*combined))
    return dict(estimands=rows, passed=all(row["passed"] for row in rows.values()),
                both_screens_passed=first["screen"]["passed"] and second["screen"]["passed"],
                caution="MCSE agreement is conditional on adequate exploration; failing screens limit its interpretation")
