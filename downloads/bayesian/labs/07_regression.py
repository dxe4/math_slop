# %% [markdown]
# # Lab 7 — Uncertainty about a line and a future visit
# The initial regression deliberately omits centre effects. Inspect what it misses
# before introducing partial pooling in lab 9. Predict within the observed range.
# %%
from common import np, plt, data, sample_model, diagnostics, save_figure, save_result
import pymc as pm

d = data("waiting.csv")
x, y = d["load_z"], d["wait_minutes"]
with pm.Model() as model:
    alpha = pm.Normal("alpha", 10, 3)
    beta = pm.Normal("beta", 0, 2)
    sigma = pm.HalfNormal("sigma", 2)
    pm.Normal("y", mu=alpha + beta*x, sigma=sigma, observed=y)
    prior = pm.sample_prior_predictive(draws=500, random_seed=707)
    idata = sample_model(707)
    pm.sample_posterior_predictive(idata, extend_inferencedata=True,
                                  random_seed=708, progressbar=False)
a = idata.posterior.alpha.values.ravel()
b = idata.posterior.beta.values.ravel()
s = idata.posterior.sigma.values.ravel()
xnew = np.linspace(-2, 2, 80)
mu = a[:, None] + b[:, None]*xnew
predictive = np.random.default_rng(709).normal(mu, s[:, None])
lo, hi = np.quantile(predictive, [0.05,0.95], axis=0)
mlo, mhi = np.quantile(mu, [0.05,0.95], axis=0)
plt.scatter(x, y, alpha=0.25, s=12, color="#555555")
plt.fill_between(xnew, lo, hi, alpha=0.15, label="90% predictive interval")
plt.fill_between(xnew, mlo, mhi, alpha=0.6, label="90% interval for mean")
plt.plot(xnew, mu.mean(axis=0))
plt.xlabel("Workload index")
plt.ylabel("Waiting time (minutes)")
plt.legend()
save_figure("07_regression")
result = diagnostics(idata, ["alpha", "beta", "sigma"])
result.update({"slope_mean": float(b.mean()), "slope_ci90": np.quantile(b,[.05,.95]).tolist(),
    "sigma_mean": float(s.mean()), "residual_means_by_centre":
    [float(np.mean(y[d['centre']==j] - (a.mean()+b.mean()*x[d['centre']==j]))) for j in range(8)]})
save_result("07_regression", result)
# %% [markdown]
# **Investigate:** plot the residual mean for each centre. Compare the prior
# predictive range with plausible waiting times. Explain why an interval for the
# mean is unsuitable for promising a waiting-time range to one future visitor.
