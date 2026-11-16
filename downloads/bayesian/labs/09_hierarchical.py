# %% [markdown]
# # Lab 9 — Partial pooling and new-centre prediction
# Centre intercepts are exchangeable conditional on their population parameters.
# The non-centred parameterisation separates standardised offsets from their scale.
# %%
from common import np, plt, data, sample_model, diagnostics, save_figure, save_result
import pymc as pm

d = data("waiting.csv")
j = d["centre"].astype(int)
x, y = d["load_z"], d["wait_minutes"]
with pm.Model(coords={"centre": np.arange(8)}) as model:
    mu_a = pm.Normal("mu_a", 10, 3)
    tau = pm.HalfNormal("tau", 1.5)
    z = pm.Normal("z", 0, 1, dims="centre")
    alpha = pm.Deterministic("alpha", mu_a + tau*z, dims="centre")
    beta = pm.Normal("beta", 0, 2)
    sigma = pm.HalfNormal("sigma", 2)
    pm.Normal("y", mu=alpha[j]+beta*x, sigma=sigma, observed=y)
    prior = pm.sample_prior_predictive(draws=500, random_seed=909)
    idata = sample_model(909)
    pm.sample_posterior_predictive(idata, extend_inferencedata=True,
                                  random_seed=910, progressbar=False)
post = idata.posterior
alphas = post.alpha.values.reshape(-1, 8)
bmean = float(post.beta.mean())
raw = np.array([np.mean(y[j==k]-bmean*x[j==k]) for k in range(8)])
lo, hi = np.quantile(alphas,[.05,.95],axis=0)
mean = alphas.mean(axis=0)
plt.errorbar(np.arange(8), mean, yerr=[mean-lo,hi-mean],fmt="o",label="Partially pooled, 90%")
plt.scatter(np.arange(8),raw,marker="x",label="Adjusted group means")
plt.axhline(float(post.mu_a.mean()),ls="--",color="grey",label="Population mean")
plt.xlabel("Centre")
plt.ylabel("Mean wait at workload zero")
plt.legend()
save_figure("09_pooling")
rng = np.random.default_rng(911)
new_alpha = rng.normal(post.mu_a.values.ravel(), post.tau.values.ravel())
result = diagnostics(idata,["mu_a","tau","alpha","beta","sigma"])
result.update({"centre_intercepts": mean.tolist(), "tau_mean": float(post.tau.mean()),
    "existing_centre0_interval": np.quantile(alphas[:,0],[.05,.95]).tolist(),
    "new_centre_interval": np.quantile(new_alpha,[.05,.95]).tolist()})

# Prior extremes concern all eight centres and the observed workload/visit design.
prior_alphas = prior.prior.alpha.values.reshape(-1, 8)
prior_waits = prior.prior_predictive.y.values.reshape(-1, len(y))
result["prior_checks"] = {
    "centre_mean_range_interval": np.quantile(np.ptp(prior_alphas, axis=1), [.05,.95]).tolist(),
    "minimum_wait_interval": np.quantile(prior_waits.min(axis=1), [.05,.95]).tolist(),
    "maximum_wait_interval": np.quantile(prior_waits.max(axis=1), [.05,.95]).tolist(),
}


def group_discrepancies(waits: np.ndarray, slopes: np.ndarray) -> tuple[np.ndarray, np.ndarray]:
    """Workload-adjusted centre range and pooled within-centre residual SD."""
    adjusted = waits - slopes[:, None]*x
    centre_means = np.stack([adjusted[:, j==k].mean(axis=1) for k in range(8)], axis=1)
    residuals = adjusted - centre_means[:, j]
    return np.ptp(centre_means, axis=1), np.sqrt((residuals**2).sum(axis=1)/(len(y)-8))


# Compare data and replications using the same beta from each joint draw.
# The replicated draws were retained by extend_inferencedata=True above.
slopes = post.beta.values.ravel()
replicated = idata.posterior_predictive.y.values.reshape(-1, len(y))
observed_checks = group_discrepancies(y, slopes)
replicated_checks = group_discrepancies(replicated, slopes)
result["posterior_predictive_checks"] = {}
for name, observed, rep in zip(["adjusted_centre_range", "within_centre_residual_sd"],
                               observed_checks, replicated_checks):
    result["posterior_predictive_checks"][name] = {
        "observed_interval": np.quantile(observed, [.05,.95]).tolist(),
        "replicated_interval": np.quantile(rep, [.05,.95]).tolist(),
        "replicated_ge_observed_fraction": float(np.mean(rep >= observed)),
    }
# All intervals above are central 90% intervals in minutes. Observed discrepancies
# vary with posterior beta; tail fractions are descriptive checks, not test p-values.
save_result("09_hierarchical",result)
# %% [markdown]
# **Investigate:** distinguish a new visit at centre 0 from a visit at an unseen
# centre. The latter needs a new group effect AND observation noise. Refit after
# reducing the smallest centre to two observations; discuss shrinkage and uncertainty.
