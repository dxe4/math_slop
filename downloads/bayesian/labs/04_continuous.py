# %% [markdown]
# # Lab 4 — Rates, means, and parameterisation
# Gamma uses a rate in the lesson; SciPy takes scale=1/rate. Normal distributions
# use standard deviations here. These differences are part of the model contract.
# %%
from common import np, plt, normal_update, save_figure, save_result
from scipy import stats

counts = np.array([3, 5, 4])
exposure = np.array([1.0, 2.0, 1.0])
shape, rate = 2 + counts.sum(), 1 + exposure.sum()
mean, sd = normal_update(10, 2, 2, np.array([11, 13, 12, 12]))
grid = np.linspace(0.001, 7, 500)
plt.plot(grid, stats.gamma.pdf(grid, 2, scale=1), label="Prior")
plt.plot(grid, stats.gamma.pdf(grid, shape, scale=1/rate), label="Posterior")
plt.xlabel("Events per unit exposure λ")
plt.ylabel("Density")
plt.legend()
save_figure("04_gamma")
save_result("04_continuous", {"gamma_shape": int(shape), "gamma_rate": float(rate),
    "rate_mean": float(shape/rate), "normal_mean": mean, "normal_sd": sd,
    "normal_predictive_sd": float(np.sqrt(4 + sd**2))})
# %% [markdown]
# **Investigate:** convert the exposure unit from hours to minutes and transform
# the prior rate consistently. Check that predicted counts do not change. Explain
# why density values change under reparameterisation while event probabilities do not.
