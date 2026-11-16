# %% [markdown]
# # Lab 0 — Probability by simulation
# Predict the mean of 10,000 Bernoulli(0.3) draws before running this lab.
# A fixed seed reproduces a computation; it does not remove sampling variation.
# %%
from common import np, plt, save_figure, save_result

rng = np.random.default_rng(100)
draws = rng.binomial(1, 0.3, 10000)
running = np.cumsum(draws) / np.arange(1, len(draws) + 1)
plt.plot(np.arange(1, len(draws) + 1), running, label="Running proportion")
plt.axhline(0.3, color="black", ls="--", label="Generating probability")
plt.xlabel("Number of trials")
plt.ylabel("Proportion of successes")
plt.legend()
save_figure("00_sampling")
save_result("00_preparation", {"proportion": float(draws.mean()),
                              "theoretical_se": float(np.sqrt(0.3 * 0.7 / len(draws)))})
# %% [markdown]
# **Investigate:** use seeds 101–105 and compare errors to the theoretical standard
# error. Then reduce the number of trials to 100. Explain why a running average need
# not approach 0.3 monotonically. Submit a table and a three-sentence interpretation.
