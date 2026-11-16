# %% [markdown]
# # Lab 6 — NUTS with an exact reference
# PyMC handles the constrained parameter internally. Prior predictive draws are
# simulated before the data update. Sampling diagnostics assess computation only.
# %%
from common import np, plt, sample_model, diagnostics, save_figure, save_result
from scipy import stats
import pymc as pm
import arviz as az

with pm.Model() as model:
    theta = pm.Beta("theta", alpha=2, beta=2)
    y = pm.Binomial("y", n=20, p=theta, observed=14)
    prior = pm.sample_prior_predictive(draws=1000, random_seed=606)
    idata = sample_model(606)
    pm.sample_posterior_predictive(idata, extend_inferencedata=True,
                                  random_seed=607, progressbar=False)
az.plot_trace(idata, var_names=["theta"])
save_figure("06_trace")
plt.figure(figsize=(7, 3.8))
count_bins = np.arange(-.5, 21.5, 1)
plt.hist(prior.prior_predictive.y.values.ravel(), bins=count_bins, density=True,
         alpha=.45, label="Prior predictive: before seeing 14/20")
plt.hist(idata.posterior_predictive.y.values.ravel(), bins=count_bins, density=True,
         alpha=.45, label="Posterior predictive: new 20 after seeing 14/20")
plt.axvline(14, color="black", ls="--", label="Observed training count")
plt.xlabel("Completion count in 20 trials")
plt.ylabel("Predictive probability (simulated)")
plt.title("Different conditioning: prior and posterior predictive counts")
plt.legend(fontsize=8)
save_figure("06_predictive")
draws = idata.posterior.theta.values.ravel()
result = diagnostics(idata, ["theta"])
result.update({"sample_mean": float(draws.mean()), "exact_mean": 16/24,
               "ci90": np.quantile(draws, [0.05,0.95]).tolist(),
               "exact_ci90": stats.beta.ppf([0.05,0.95],16,8).tolist(),
               "quantile_mcse": [float(az.mcse(idata, var_names=['theta'], method='quantile', prob=p).theta)
                                  for p in (.05, .95)]})
save_result("06_hmc", result)
assert abs(draws.mean()-16/24) < 6*result['max_mcse_mean']
assert np.all(abs(np.array(result['ci90'])-result['exact_ci90']) < 6*np.array(result['quantile_mcse']))
# %% [markdown]
# **Investigate:** fit a narrow and a diffuse prior and re-check predictions.
# Inspect rank plots with `az.plot_rank`. Explain why increasing draws cannot
# repair a wrongly specified likelihood. Record R-hat, both ESSs, MCSE and divergences.
