# %% [markdown]
# # Lab 11 — Sensitivity, missingness, and computational calibration
# A small exact SBC demonstration checks rank behaviour under a known model. A
# deliberately biased posterior calculation provides a visible negative control.
# %%
from common import np, plt, normalise_log_weights, save_figure, save_result
from scipy import stats

rng = np.random.default_rng(1111)
replications, draws = 500, 200
truth = rng.beta(2,2,replications)
y = rng.binomial(20,truth)
posterior = rng.beta((2+y)[:,None], (22-y)[:,None], (replications,draws))
ranks = (posterior < truth[:,None]).sum(axis=1)
wrong = rng.beta((2+y+8)[:,None], (22-y)[:,None], (replications,draws))
wrong_ranks = (wrong < truth[:,None]).sum(axis=1)
fig, axes = plt.subplots(1,2,figsize=(10,3))
bins = np.linspace(-0.5,draws+0.5,11)
axes[0].hist(ranks,bins=bins)
axes[1].hist(wrong_ranks,bins=bins,color="#d47c45")
for ax,title in zip(axes,["Correct exact posterior", "Biased implementation"]):
    ax.axhline(replications/10,ls="--",color="black")
    ax.set(xlabel="Rank of generating θ",ylabel="Count",title=title)
save_figure("11_sbc")
# Robust location model with known scale 1; original artificial outlier.
values = np.array([0.1,-0.4,0.2,0.6,-0.2,0.0,8.0])
grid = np.linspace(-3,4,7001)
prior = stats.norm.logpdf(grid,0,2)
normal_w = normalise_log_weights(prior + stats.norm.logpdf(values[:,None],grid,1).sum(axis=0))
t_w = normalise_log_weights(prior + stats.t.logpdf(values[:,None],df=4,loc=grid,scale=1).sum(axis=0))
# Selection depending on unobserved response creates a biased observed sample.
population = rng.normal(0,1,20000)
observed = population[population < 0.7]
save_result("11_robustness", {"sbc_mean_rank": float(ranks.mean()), "expected_mean_rank": draws/2,
    "biased_sbc_mean_rank": float(wrong_ranks.mean()),
    "normal_location_mean": float(grid@normal_w), "student_t_location_mean": float(grid@t_w),
    "population_mean": float(population.mean()), "observed_mean_after_selection": float(observed.mean())})
# %% [markdown]
# **Investigate:** remove the outlier, double the prior scale, and compare location
# estimates. Increase SBC replications and discuss random histogram variation.
# Specify why observed data alone cannot reveal the missing high responses here.
