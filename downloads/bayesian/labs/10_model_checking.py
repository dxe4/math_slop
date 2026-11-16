# %% [markdown]
# # Lab 10 — Exact LOO, PSIS, and a failed predictive check
# First refit a conjugate model with each observation excluded. Then compare
# intercept-only and linear regression on the same observations and likelihood units.
# %%
from common import np, plt, data, normal_update, sample_model, diagnostics, save_figure, save_result
from scipy import stats
import arviz as az
import pymc as pm

small_y = np.array([1., 2., 0., 3.])
exact_loo = []
for i in range(len(small_y)):
    m, s = normal_update(0, 2, 1, np.delete(small_y,i))
    exact_loo.append(stats.norm.logpdf(small_y[i], m, np.sqrt(1+s*s)))
d = data("waiting.csv")
x, y = d["load_z"], d["wait_minutes"]
fits, screens, loos = {}, {}, {}
for name, include_x, seed in [("intercept", False, 1001), ("linear", True, 1002)]:
    with pm.Model() as model:
        alpha = pm.Normal("alpha",10,3)
        sigma = pm.HalfNormal("sigma",2)
        mu = alpha
        variables = ["alpha","sigma"]
        if include_x:
            beta = pm.Normal("beta",0,2)
            mu = alpha + beta*x
            variables += ["beta"]
        pm.Normal("y",mu=mu,sigma=sigma,observed=y)
        fit = sample_model(seed)
        pm.sample_posterior_predictive(fit, extend_inferencedata=True,
                                      random_seed=seed+10,progressbar=False)
    fits[name] = fit
    screens[name] = diagnostics(fit, variables)
    loos[name] = az.loo(fit, pointwise=True)
delta = loos["linear"].loo_i.values - loos["intercept"].loo_i.values
ppc = fits["linear"].posterior_predictive.y.values.reshape(-1,len(y))
beta_mean = float(fits["linear"].posterior.beta.mean())
# Range across workload-adjusted centre means reveals omitted group structure.
def discrepancy(values):
    adjusted = values - beta_mean*x
    group_means = np.array([adjusted[...,d['centre']==k].mean(axis=-1) for k in range(8)])
    return np.ptp(group_means,axis=0)
observed = float(discrepancy(y))
replicated = discrepancy(ppc)
plt.hist(replicated,bins=40,alpha=0.6,label="Replicated discrepancy")
plt.axvline(observed,color="#d47c45",label="Observed discrepancy")
plt.xlabel("Range of adjusted centre means")
plt.ylabel("Replicate count")
plt.legend()
save_figure("10_check")
save_result("10_model_checking", {"exact_loo_elpd": float(np.sum(exact_loo)),
    "linear_minus_intercept_elpd": float(delta.sum()),
    "difference_se_iid_approx": float(np.sqrt(len(delta)*np.var(delta,ddof=1))),
    "max_pareto_k": {k: float(v.pareto_k.max()) for k,v in loos.items()},
    "pareto_threshold": {k: float(v.good_k) for k,v in loos.items()},
    "observed_discrepancy": observed, "ppc_tail_fraction": float(np.mean(replicated>=observed)),
    "diagnostics": screens})
# %% [markdown]
# **Investigate:** explain how linear regression can improve prediction and still
# fail the centre check. The reported difference SE assumes independent pointwise
# contributions; grouping weakens that approximation. Design leave-one-centre-out
# validation for an unseen-centre target. Do not treat LOO weights as model truth.
