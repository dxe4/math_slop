# %% [markdown]
# # Lab 17 — Forecast from the past available at the origin
# Read A05. The baseline and innovation SD are fixed. The likelihood conditions
# on the initial observation; it does not use its stationary density in fitting.
# %%
from common import np, plt, save_figure, save_result, normalise_log_weights
from extension_common import envelope, check, midpoint_grid, ar_moments, mixture_moments
from scipy import stats, special

STEM, DEFAULT_SEED = "17_time_series", 1717


def generate(seed: int, size: int = 60) -> np.ndarray:
    rng = np.random.default_rng(seed)
    y = np.empty(size); y[0] = rng.normal(0, .4/np.sqrt(1-.7**2))
    for t in range(1, size):
        y[t] = .7*y[t-1] + rng.normal(0, .4)
    return y


def fit(y: np.ndarray, cells: int = 1200) -> tuple:
    phi, log_width = midpoint_grid(-.95, .95, cells)
    loglik = stats.norm.logpdf(y[None, 1:], phi[:, None]*y[None, :-1], .4).sum(axis=1)
    return phi, normalise_log_weights(loglik + log_width)


def forecast(y: np.ndarray, horizons: np.ndarray, cells: int = 1200) -> tuple:
    phi, weights = fit(y, cells)
    means, variances, _ = ar_moments(phi, y[-1], horizons, .16)
    mean, variance = mixture_moments(weights, means, variances)
    return mean, variance, phi, weights, means, variances


def compute(seed: int = DEFAULT_SEED) -> dict:
    y, horizons = generate(seed), np.arange(1, 6)
    mean, variance, phi, weights, _, _ = forecast(y[:40], horizons)
    refined = forecast(y[:40], horizons, 2400)
    pm, pv, _ = ar_moments(np.array([weights @ phi]), y[39], horizons, .16)
    scores = {str(h): [] for h in [1, 5]}
    leaked = {str(h): [] for h in [1, 5]}
    full_phi, full_weights = fit(y)
    for origin in range(39, 55):
        _, _, _, w, means, variances = forecast(y[:origin+1], np.array([1, 5]))
        lm, lv, _ = ar_moments(full_phi, y[origin], np.array([1, 5]), .16)
        for j, h in enumerate([1, 5]):
            scores[str(h)].append(float(special.logsumexp(np.log(w) + stats.norm.logpdf(
                y[origin+h], means[:, j], np.sqrt(variances[:, j])))))
            leaked[str(h)].append(float(special.logsumexp(np.log(full_weights) + stats.norm.logpdf(
                y[origin+h], lm[:, j], np.sqrt(lv[:, j])))))
    ref_mean, ref_var, _ = ar_moments(np.array([.7]), 2., np.arange(1, 4), .16)
    rng = np.random.default_rng(seed+1)
    simulated = np.full(100000, 2.)
    for _ in range(3):
        simulated = .7*simulated + rng.normal(0, .4, len(simulated))
    _, latent_var, reading_var = ar_moments(np.array([.7]), 2., np.array([1]), .16, .25, .09)
    checks = [check("reference_mean", ref_mean[0, -1], .686),
              check("reference_variance", ref_var[0, -1], .276816),
              check("simulation_mean_h3", simulated.mean(), .686,
                    atol=6*np.sqrt(.276816/len(simulated))),
              check("refinement_forecast_mean", np.max(abs(mean-refined[0])), 0, atol=2e-6),
              check("refinement_forecast_variance", np.max(abs(variance-refined[1])), 0, atol=2e-6),
              check("state_reference_variance", reading_var[0, 0], .3725)]
    return envelope(STEM, seed, "Conditional AR likelihood on midpoint quadrature grid",
                    {"phi_prior_bounds": [-.95, .95], "innovation_sd": .4, "baseline": 0,
                     "train_indices": [0, 39], "rolling_origins": [39, 54], "grid_cells": 1200},
                    {"series": y.tolist(), "phi_mean": float(weights @ phi),
                     "horizons": horizons.tolist(), "integrated_forecast_mean": mean.tolist(),
                     "integrated_forecast_variance": variance.tolist(),
                     "plugin_forecast_mean": pm[0].tolist(), "plugin_forecast_variance": pv[0].tolist(),
                     "rolling_mean_log_score": {h: float(np.mean(v)) for h, v in scores.items()},
                     "invalid_future_fitted_mean_log_score": {h: float(np.mean(v)) for h, v in leaked.items()},
                     "reference_latent_variance": float(latent_var[0, 0])}, checks,
                    ["Leaked scores deliberately fit phi on all 60 values and are invalid validation.",
                     "Integrated variance need not exceed plug-in variance at every horizon.",
                     "Only phi uncertainty is inferred; scales and baseline are fixed."])


def main() -> None:
    result = compute(); m = result["metrics"]
    y = m["series"]; h = np.arange(40, 45)
    mean, sd = np.array(m["integrated_forecast_mean"]), np.sqrt(m["integrated_forecast_variance"])
    plt.plot(np.arange(60), y, "o-", ms=3, label="Synthetic series")
    plt.plot(h, mean, "o-", label="Integrated forecast at time 39")
    plt.fill_between(h, mean-1.645*sd, mean+1.645*sd, alpha=.2,
                     label="Moment band ±1.645 SD (not exact mixture quantiles)")
    plt.axvline(39, color="black", ls="--")
    plt.xlabel("Time index"); plt.ylabel("Reading (units)")
    plt.title("Chronological forecast; baseline and innovation variance fixed")
    plt.legend(fontsize=8)
    save_figure(STEM); save_result(STEM, result)


if __name__ == "__main__":
    main()
# %% [markdown]
# **Investigate:** make the last five observations extreme. Confirm that the
# origin-39 forecast is unchanged, while the deliberately leaked fit moves.
