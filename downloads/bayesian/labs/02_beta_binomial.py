# %% [markdown]
# # Lab 2 — Exact inference as a check on computation
# We observe 14 completions in 20 visits and use Beta(2, 2). Evaluate a midpoint
# grid to avoid endpoints, and compare its moments to the conjugate solution.
# %%
from common import np, plt, beta_update, normalise_log_weights, save_figure, save_result
from scipy import stats

a, b = beta_update(2, 2, 14, 20)
grid = (np.arange(5000) + 0.5) / 5000
weights = normalise_log_weights(stats.beta.logpdf(grid, 2, 2)
                               + stats.binom.logpmf(14, 20, grid))
grid_mean = float(grid @ weights)
interval = stats.beta.ppf([0.05, 0.95], a, b)
plt.plot(grid, stats.beta.pdf(grid, 2, 2), label="Prior")
plt.plot(grid, stats.beta.pdf(grid, a, b), label="Posterior")
plt.xlabel("Completion probability θ")
plt.ylabel("Density")
plt.legend()
save_figure("02_update")
save_result("02_beta_binomial", {"alpha": a, "beta": b,
    "mean": a / (a+b), "grid_mean": grid_mean, "ci90": interval.tolist(),
    "prob_above_half": float(stats.beta.sf(0.5, a, b))})
assert abs(grid_mean - a / (a + b)) < 1e-6
# %% [markdown]
# **Investigate:** split the observations into 6/10 and 8/10 and update sequentially.
# Compare grid sizes 20, 100, and 5000. Distinguish probability mass per grid cell
# from probability density. Report the 90% interval and its conditional meaning.
