# %% [markdown]
# # Lab 12 — A complete decision analysis
# Estimate the improvement for an equal mixture of eight centres. Compare a pooled
# analysis to independent centre/arm beta models; lab 9 supplies the multilevel
# extension. Use only training counts for inference and reserve holdout for checking.
# %%
from common import np, plt, data, save_figure, save_result
from scipy import stats

d = data("experiment.csv")
assert len(d) == 16 and len(np.unique(d['centre'])) == 8
assert np.all((d['successes'] >= 0) & (d['successes'] <= d['trials']))
assert np.all((d['holdout_successes'] >= 0) & (d['holdout_successes'] <= d['holdout_trials']))
assert np.array_equal(d['arm'], np.tile([0,1],8))
rng = np.random.default_rng(1212)
S = 80000
results = {}
for prior_name, a0, b0 in [("uniform",1,1),("regularised",4,4),("low_completion",2,6)]:
    a = a0+d["successes"]
    b = b0+d["trials"]-d["successes"]
    theta = rng.beta(a,b,size=(S,len(d)))
    # Columns alternate A, B within each centre; retain paired Monte Carlo draws.
    uplift = (theta[:,1::2]-theta[:,0::2]).mean(axis=1)
    # 10,000 future users, value 5 per extra completion, rollout cost 1,000 units.
    net = 10000*5*uplift - 1000
    expected_net = float(net.mean())
    current_value = max(0,expected_net)
    evpi = float(np.maximum(net,0).mean()-current_value)
    results[prior_name] = {"uplift_mean": float(uplift.mean()),
        "uplift_ci90": np.quantile(uplift,[.05,.95]).tolist(),
        "prob_positive": float(np.mean(uplift>0)), "prob_profitable": float(np.mean(net>0)),
        "expected_net_value": expected_net, "mcse_net_value": float(net.std(ddof=1)/np.sqrt(S)),
        "expected_loss_if_rollout": float(np.maximum(-net,0).mean()),
        "expected_loss_if_keep": float(np.maximum(net,0).mean()), "evpi": evpi,
        "action": "rollout B" if expected_net > 0 else "keep A"}
    if prior_name == "uniform":
        primary_uplift = uplift
        cell_means = a/(a+b)
        cell_vars = a*b/((a+b)**2*(a+b+1))
        exact_mean = float((cell_means[1::2]-cell_means[0::2]).mean())
        exact_variance = float(cell_vars.sum()/64)
        results[prior_name]['analytic_uplift_mean'] = exact_mean
        results[prior_name]['analytic_uplift_sd'] = float(np.sqrt(exact_variance))
        assert abs(uplift.mean()-exact_mean) < 5*np.sqrt(exact_variance/S)
        weights = d['trials'][0::2]/d['trials'][0::2].sum()
        weighted = (theta[:,1::2]-theta[:,0::2])@weights
        results[prior_name]['training_weighted_uplift_mean'] = float(weighted.mean())
        results[prior_name]['net_value_at_cost_5000'] = expected_net-4000
        results[prior_name]['action_at_cost_5000'] = 'rollout B' if expected_net > 4000 else 'keep A'
        # Marginal predictive scoring for held-out counts at each centre/arm.
        log_score = stats.betabinom.logpmf(d["holdout_successes"],d["holdout_trials"],a,b)
        predictive_intervals = stats.betabinom.ppf(np.array([.05,.95])[:,None],d["holdout_trials"],a,b)
        results[prior_name]["holdout_log_score"] = float(log_score.sum())
        results[prior_name]["holdout_covered_of_16"] = int(np.sum(
            (d['holdout_successes']>=predictive_intervals[0]) & (d['holdout_successes']<=predictive_intervals[1])))
        # Prior and posterior check on the range across centre rates, each arm separately.
        prior_theta = rng.beta(a0,b0,size=(S,len(d)))
        prior_y = rng.binomial(d['trials'].astype(int),prior_theta)
        replicate = rng.binomial(d['trials'].astype(int),theta)
        obs_range = np.ptp((d['successes']/d['trials']).reshape(8,2),axis=0)
        rep_range = np.ptp((replicate/d['trials']).reshape(S,8,2),axis=1)
        results[prior_name]["ppc_range_tail_by_arm"] = (rep_range>=obs_range).mean(axis=0).tolist()
        results[prior_name]["prior_total_completion_fraction_ci90"] = np.quantile(
            prior_y.sum(axis=1)/d['trials'].sum(),[.05,.95]).tolist()
pooled_draws = []
pooled_holdout_log_score = 0.0
for arm in [0,1]:
    arm_data = d[d['arm']==arm]
    ap = 1+arm_data['successes'].sum()
    bp = 1+(arm_data['trials']-arm_data['successes']).sum()
    pooled_draws.append(rng.beta(ap,bp,S))
    # Sum marginal heldout cell scores, using the same scoring unit as above.
    # Shared-parameter cells are dependent jointly: this is not a joint log score.
    pooled_holdout_log_score += stats.betabinom.logpmf(
        arm_data['holdout_successes'],arm_data['holdout_trials'],ap,bp).sum()
pooled = pooled_draws[1]-pooled_draws[0]
results['pooled'] = {"uplift_mean": float(pooled.mean()), "uplift_ci90": np.quantile(pooled,[.05,.95]).tolist(),
    "holdout_marginal_log_score_sum": float(pooled_holdout_log_score),
    "note": "Common arm rates; this assumption ignores centre heterogeneity."}
plt.hist(primary_uplift,bins=80,density=True,alpha=.65,label="Equal-centre posterior")
plt.axvline(0,color="black",ls="--",label="No improvement")
plt.axvline(.02,color="#d47c45",label="Break-even improvement")
plt.xlabel("Absolute completion-rate improvement, B − A")
plt.ylabel("Density")
plt.legend()
save_figure("12_decision")
save_result("12_capstone",results)
# %% [markdown]
# **Investigate:** target the training-size mixture instead of equal centres, then
# change the rollout cost to 5,000. State which assumptions changed. Propose a
# hierarchical extension and an unseen-centre validation design. EVPI is an upper
# bound on the value of further information, not the value of a specific experiment.
