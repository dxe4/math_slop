# %% [markdown]
# # Lab 5 — A sampler you can inspect
# The target is Beta(16,8). Out-of-support proposals receive log density −∞ and are
# rejected. Repeated values are required; discarding them biases the chain.
# %%
from common import np, plt, metropolis, save_figure, save_result
from scipy import stats
import arviz as az

chains = []
rates = []
for i, initial in enumerate([0.2, 0.4, 0.7, 0.9]):
    chain, accepted = metropolis(lambda t: stats.beta.logpdf(t, 16, 8), initial,
                                0.12, 14000, np.random.default_rng(505+i))
    chains.append(chain[2000:])
    rates.append(accepted)
chains = np.array(chains)
idata = az.from_dict(posterior={"theta": chains})
summary = az.summary(idata, round_to="none")
fig, axes = plt.subplots(1, 2, figsize=(10, 3))
axes[0].plot(chains[:, :300].T, alpha=0.7)
axes[0].set(xlabel="Retained iteration", ylabel="θ", title="Four chains")
axes[1].hist(chains.ravel(), bins=50, density=True, alpha=0.5)
grid = np.linspace(0.2, 0.98, 300)
axes[1].plot(grid, stats.beta.pdf(grid, 16, 8), color="black")
axes[1].set(xlabel="θ", ylabel="Density", title="Sample and exact target")
save_figure("05_metropolis")
save_result("05_monte_carlo", {"mean": float(chains.mean()), "exact_mean": 16/24,
    "acceptance": rates, "rhat": float(summary.loc["theta", "r_hat"]),
    "ess_bulk": float(summary.loc["theta", "ess_bulk"]),
    "mcse_mean": float(summary.loc["theta", "mcse_mean"])})
# %% [markdown]
# **Investigate:** compare proposals 0.005, 0.12, and 1.0. A high acceptance rate is
# not necessarily efficient. Estimate P(θ>0.7) and its MCSE using the indicator
# sequence and `az.mcse(..., method="mean")`; the mean's ESS is not a universal ESS.
