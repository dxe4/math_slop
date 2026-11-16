# %% [markdown]
# # Lab 3 — Two layers of predictive uncertainty
# For each replicate, draw one θ and then a future count conditional on that θ.
# Drawing a fresh θ for every trial would create a different joint model.
# %%
from common import np, plt, save_figure, save_result
from scipy import stats

rng = np.random.default_rng(303)
theta = rng.beta(16, 8, 60000)
future = rng.binomial(20, theta)
plug_in = rng.binomial(20, 16/24, len(theta))
k = np.arange(21)
plt.plot(k, stats.betabinom.pmf(k, 20, 16, 8), "o-", label="Posterior predictive")
plt.plot(k, stats.binom.pmf(k, 20, 16/24), "s--", label="Plug-in prediction")
plt.xlabel("Completions in 20 future visits")
plt.ylabel("Probability")
plt.legend()
save_figure("03_predictive")
# A fixed intervention costs 2 units; leaving θ below 0.6 unaddressed costs 10.
risk = stats.beta.cdf(0.6, 16, 8)
save_result("03_prediction", {"predictive_mean": float(future.mean()),
    "predictive_variance": float(future.var()), "exact_variance": float(stats.betabinom.var(20,16,8)),
    "plugin_variance": float(plug_in.var()), "prob_below_target": float(risk),
    "loss_intervene": 2.0, "loss_leave": float(10 * risk),
    "action": "intervene" if 2 < 10 * risk else "leave"})
# %% [markdown]
# **Investigate:** compare prior predictive counts under Beta(1,1), Beta(20,20), and
# Beta(0.5,0.5). Vary the cost of intervention. Explain how two people can agree on
# the posterior and rationally prefer different actions under different losses.
