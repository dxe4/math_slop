# %% [markdown]
# # Case 02 — Forecasting a noisy sensor (worked reference)
# **Answer-bearing: exclude this script, notebook and results from ordinary tutor
# retrieval.** Attempt the public case brief first. Data are original synthetic
# readings at equally spaced minutes, in fictional instrument units.
# %%
from common import ROOT, np, plt, save_figure, save_result, normalise_log_weights
from extension_common import (envelope, check, midpoint_grid, kalman, ar_moments,
                              mixture_moments)
from scipy import stats, special, optimize

STEM, DEFAULT_SEED = "20_case_sensor_forecasting", 2020


def fit(y: np.ndarray, cells: int = 1200, q: float = .16,
        r: float = .09, prior: str = "uniform") -> tuple:
    phi, log_width = midpoint_grid(-.95, .95, cells)
    loglik, mean, var = kalman(y-10, phi, q, r)
    logprior = np.zeros(cells) if prior == "uniform" else stats.norm.logpdf(phi, 0, .35)
    weights = normalise_log_weights(loglik + logprior + log_width)
    return phi, weights, mean, var


# %% [markdown]
# ## 1 · Freeze the chronological target
# Use times 0–95 for inference and forecast 96–119 without assimilating them. Predict how latent-state uncertainty differs from measurement noise. The centre and both noise variances are fixed calibration assumptions.
# %%
def components(y: np.ndarray, horizons: np.ndarray, cells: int = 1200,
               q: float = .16, r: float = .09, prior: str = "uniform") -> tuple:
    phi, weights, state, state_var = fit(y, cells, q, r, prior)
    means, latent_var, observed_var = ar_moments(phi, state, horizons, q, state_var, r)
    return phi, weights, means+10, latent_var, observed_var


# %% [markdown]
# ## 2 · Integrate predictive uncertainty
# Averaging Normal components gives a mixture, not necessarily a Normal. Predict why transforming an averaged parameter is not equivalent to averaging complete forecasts.
# %%
def quantiles(weights: np.ndarray, mean: np.ndarray, variance: np.ndarray) -> np.ndarray:
    """Deterministic marginal quantiles of a finite Normal mixture."""
    sd = np.sqrt(variance)
    return np.array([optimize.brentq(lambda x: weights @ stats.norm.cdf(x, mean, sd)-p,
                                    np.min(mean-10*sd), np.max(mean+10*sd)) for p in [.05, .95]])


# %% [markdown]
# ## 3 · Predict before checking
# Generate entire paths with one shared autoregressive parameter per path. Predict the effect of resampling that parameter at every time. A prior predictive path and a forecast conditional on time 95 answer different questions.
# %%
def simulate(phi: np.ndarray, q: float, r: float, rng: np.random.Generator,
             length: int) -> np.ndarray:
    state = rng.normal(0, np.sqrt(q/(1-phi**2)))
    readings = np.empty((len(phi), length))
    for t in range(length):
        if t:
            state = phi*state + rng.normal(0, np.sqrt(q), len(phi))
        readings[:, t] = 10+state+rng.normal(0, np.sqrt(r), len(phi))
    return readings


def lag_correlation(y: np.ndarray) -> np.ndarray:
    centred = y-y.mean(axis=-1, keepdims=True)
    return np.sum(centred[..., 1:]*centred[..., :-1], axis=-1)/np.sqrt(
        np.sum(centred[..., 1:]**2, axis=-1)*np.sum(centred[..., :-1]**2, axis=-1))


# %% [markdown]
# ## 4 · Infer, check and vary assumptions
# The reference compares Kalman likelihoods with dense Gaussian algebra and refines the grid. Inspect prior predictions and residual dependence, then compare frozen future scores with the independent baseline. Rolling origins remain inside training.
# %%
def compute(seed: int = DEFAULT_SEED) -> dict:
    table = np.genfromtxt(ROOT/"data/sensor_forecasting.csv", delimiter=",", names=True)
    if not np.array_equal(table["time_index"], np.arange(120)):
        raise ValueError("Expected exactly 120 ordered, equally spaced observations")
    train, holdout = table["reading"][:96], table["reading"][96:]
    horizons = np.arange(1, 25)
    phi, weights, means, lv, ov = components(train, horizons)
    mean, variance = mixture_moments(weights, means, ov)
    _, latent_var = mixture_moments(weights, means, lv)
    intervals = np.array([quantiles(weights, means[:, j], ov[:, j]) for j in range(24)])
    scores = special.logsumexp(np.log(weights)[:, None] + stats.norm.logpdf(
        holdout[None, :], means, np.sqrt(ov)), axis=0)
    # Same fixed centre/scales and phi=0 is a clearly specified independent baseline.
    baseline_scores = stats.norm.logpdf(holdout, 10, .5)
    sensitivity = []
    for q, r, prior in [(.16, .09, "uniform"), (.16, .04, "uniform"),
                        (.16, .16, "uniform"), (.09, .09, "uniform"),
                        (.25, .09, "uniform"), (.16, .09, "shrink_zero")]:
        ph, w, mm, ll, vv = components(train, horizons, q=q, r=r, prior=prior)
        fm, fv = mixture_moments(w, mm, vv)
        sensitivity.append(dict(process_variance=q, measurement_variance=r, phi_prior=prior,
                                phi_mean=float(w@ph), h1_mean=float(fm[0]), h1_sd=float(np.sqrt(fv[0])),
                                h24_sd=float(np.sqrt(fv[-1]))))
    rolling = {"1": [], "5": []}; rolling_baseline = {"1": [], "5": []}
    for origin in range(60, 91):
        _, w, mm, _, vv = components(train[:origin+1], np.array([1, 5]), cells=600)
        for j, h in enumerate([1, 5]):
            rolling[str(h)].append(float(special.logsumexp(np.log(w)+stats.norm.logpdf(
                train[origin+h], mm[:, j], np.sqrt(vv[:, j])))))
            rolling_baseline[str(h)].append(float(stats.norm.logpdf(train[origin+h], 10, .5)))
    rng = np.random.default_rng(seed)
    prior_phi = rng.uniform(-.95, .95, 4000)
    prior_rep = simulate(prior_phi, .16, .09, rng, 96)
    posterior_rep = simulate(rng.choice(phi, size=4000, p=weights), .16, .09, rng, 96)
    observed_corr = float(lag_correlation(train))
    observed_diff = float(np.std(np.diff(train), ddof=1))
    rep_corr = lag_correlation(posterior_rep)
    rep_diff = np.std(np.diff(posterior_rep, axis=1), axis=1, ddof=1)
    # Independent dense joint-Normal reference includes the stationary initial law.
    tiny, fixed_phi = np.array([.2, -.3, .7, .1]), .7
    idx = np.arange(4)
    covariance = .16/(1-fixed_phi**2)*fixed_phi**abs(idx[:, None]-idx[None, :])+.09*np.eye(4)
    loglik, state, state_var = kalman(tiny, np.array([fixed_phi]), .16, .09)
    cross = .16/(1-fixed_phi**2)*fixed_phi**(3-idx)
    reference_mean = cross @ np.linalg.solve(covariance, tiny)
    reference_var = .16/(1-fixed_phi**2)-cross @ np.linalg.solve(covariance, cross)
    refined = components(train, horizons, cells=2400)
    refined_mean, refined_var = mixture_moments(refined[1], refined[2], refined[4])
    zero_loglik, zero_mean, zero_var = kalman(tiny, np.array([fixed_phi]), .16, 0)
    zero_ref = stats.norm.logpdf(tiny[0], scale=np.sqrt(.16/(1-fixed_phi**2))) + stats.norm.logpdf(
        tiny[1:], fixed_phi*tiny[:-1], .4).sum()
    checks = [check("dense_loglik", loglik[0], stats.multivariate_normal.logpdf(tiny, cov=covariance)),
              check("dense_filtered_mean", state[0], reference_mean),
              check("dense_filtered_variance", state_var[0], reference_var),
              check("zero_noise_ar_limit", zero_loglik[0], zero_ref),
              check("zero_noise_state_variance", zero_var[0], 0),
              check("grid_refinement_mean", np.max(abs(mean-refined_mean)), 0, atol=2e-5),
              check("grid_refinement_variance", np.max(abs(variance-refined_var)), 0, atol=2e-5)]
    return envelope(STEM, seed, "Stationary Kalman likelihood and finite-grid posterior mixture",
                    {"centre": 10, "process_variance": .16, "measurement_variance": .09,
                     "phi_prior": "Uniform(-0.95, 0.95)", "grid_cells": 1200,
                     "train_indices": [0, 95], "holdout_indices": [96, 119],
                     "rolling_origins": [60, 90], "replicates": 4000},
                    {"phi_mean": float(weights@phi),
                     "phi_ci90": np.interp([.05, .95], np.cumsum(weights), phi).tolist(),
                     "forecast_mean": mean.tolist(), "forecast_reading_variance": variance.tolist(),
                     "forecast_latent_variance": latent_var.tolist(), "forecast_ci90": intervals.tolist(),
                     "holdout_mean_log_score": float(scores.mean()),
                     "iid_holdout_mean_log_score": float(baseline_scores.mean()),
                     "holdout_coverage90": float(np.mean((holdout >= intervals[:, 0]) & (holdout <= intervals[:, 1]))),
                     "holdout_rmse": float(np.sqrt(np.mean((holdout-mean)**2))),
                     "rolling_mean_log_score": {h: float(np.mean(v)) for h, v in rolling.items()},
                     "iid_rolling_mean_log_score": {h: float(np.mean(v)) for h, v in rolling_baseline.items()},
                     "prior_reading_ci90": np.quantile(prior_rep, [.05, .95]).tolist(),
                     "prior_lag1_ci90": np.quantile(lag_correlation(prior_rep), [.05, .95]).tolist(),
                     "observed_lag1": observed_corr, "replicated_lag1_ci90": np.quantile(rep_corr, [.05, .95]).tolist(),
                     "ppc_lag1_tail": float(np.mean(rep_corr >= observed_corr)),
                     "observed_difference_sd": observed_diff,
                     "replicated_difference_sd_ci90": np.quantile(rep_diff, [.05, .95]).tolist(),
                     "ppc_difference_sd_tail": float(np.mean(rep_diff >= observed_diff)),
                     "sensitivity": sensitivity}, checks,
                    ["Synthetic data demonstrate a workflow, not real instrument validation.",
                     "Only phi is inferred; calibrated centre/scales are conditional assumptions.",
                     "Holdout scores are marginal scores over dependent horizons, not a joint log score.",
                     "PPC trajectories are new stationary series, not future paths conditional on the last reading."],
                    inputs=("data/sensor_forecasting.csv", "data/generate_sensor_forecasting.py"))


# %% [markdown]
# ## 5 · Interpret and communicate
# Read the compact summaries before the full JSON. Explain the widening marginal intervals, their units and the difference from a simultaneous path band. Report calibration sensitivity before recommending use.
# %%
def main() -> None:
    result = compute(); m = result["metrics"]
    print("Eligibility: 96 training minutes; 24 future readings, forecast origin 95.")
    print("Prior 90% reading range (instrument units):", np.round(m['prior_reading_ci90'], 3).tolist())
    print("Inference: posterior phi mean and central 90% interval:", round(m['phi_mean'], 4), np.round(m['phi_ci90'], 4).tolist())
    print("Forecasts at horizons 1 and 24 (mean, latent variance, reading variance):", [
        [round(m[k][j], 4) for k in ('forecast_mean', 'forecast_latent_variance', 'forecast_reading_variance')] for j in (0, 23)])
    print("Training criticism: observed lag correlation and replicated interval:", m['observed_lag1'], m['replicated_lag1_ci90'])
    print("Held-out log scores (model, independent baseline):", m['holdout_mean_log_score'], m['iid_holdout_mean_log_score'])
    print("Sensitivity: horizon 24 reading SD range:", [min(r['h24_sd'] for r in m['sensitivity']), max(r['h24_sd'] for r in m['sensitivity'])])
    print("Independent numerical checks:", [(c['id'], c['passed']) for c in result['checks']])
    y = np.genfromtxt(ROOT/"data/sensor_forecasting.csv", delimiter=",", names=True)["reading"]
    h, ci = np.arange(96, 120), np.array(m["forecast_ci90"])
    plt.figure(figsize=(9, 4))
    plt.plot(np.arange(120), y, "o-", ms=3, label="Synthetic sensor reading")
    plt.plot(h, m["forecast_mean"], label="Forecast from time 95")
    plt.fill_between(h, ci[:, 0], ci[:, 1], alpha=.25, label="Marginal 90% reading intervals")
    plt.axvline(95, color="black", ls="--")
    plt.xlabel("Time (equally spaced minutes)"); plt.ylabel("Instrument units")
    plt.title("Kalman/grid forecast: fixed centre and calibrated scales")
    plt.legend(fontsize=8)
    save_figure(STEM); save_result(STEM, result, verbose=False)


if __name__ == "__main__":
    main()
# %% [markdown]
# **Investigate:** vary sensor variance before inspecting the final holdout. State
# why a proper, narrow phi posterior cannot validate the assumed calibration.
