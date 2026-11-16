# %% [markdown]
# # Lab 16 — Standardisation under explicit identification assumptions
# Read A04. The fixed table is illustrative, not a random seeded sample. Known
# generator probabilities support validation only in this fictional experiment.
# %%
from common import np, plt, save_figure, save_result
from extension_common import envelope, check
from scipy.special import expit, logit

STEM, DEFAULT_SEED = "16_causal", 1616


def cell_posterior(totals, successes, prior_alpha=1.0, prior_beta=1.0) -> tuple:
    """Independent beta updates, shape (strata, A=0/1); absent cells keep priors.

    Priors may be scalars or arrays broadcastable to the cell shape. Invalid
    counts/shapes or nonpositive/nonfinite prior parameters raise ValueError.
    """
    n, y = np.asarray(totals, dtype=float), np.asarray(successes, dtype=float)
    if (n.ndim != 2 or n.shape[1] != 2 or n.shape[0] == 0 or y.shape != n.shape
            or not np.all(np.isfinite(n)) or not np.all(np.isfinite(y))
            or np.any(n < 0) or np.any(y < 0) or np.any(y > n)
            or np.any(n != np.floor(n)) or np.any(y != np.floor(y))):
        raise ValueError("Require integer counts (strata, 2), with 0 <= successes <= totals")
    a = np.broadcast_to(np.asarray(prior_alpha, dtype=float), n.shape)
    b = np.broadcast_to(np.asarray(prior_beta, dtype=float), n.shape)
    if not np.all(np.isfinite(a) & np.isfinite(b) & (a > 0) & (b > 0)):
        raise ValueError("Beta prior shapes must be finite and positive")
    return a+y, b+n-y


def sensitivity_effect(probabilities, propensities, weights, delta0=0.0,
                       delta1=0.0) -> np.ndarray:
    """Target risk difference with missing-minus-observed log-odds shifts.

    probabilities has shape (..., strata, 2), columns A=0,1; e and w are
    (strata,). Each delta is scalar or (strata,). delta0 shifts Y(0) among
    treated; delta1 shifts Y(1) among untreated. e,w,deltas are fixed assumptions.
    Endpoints p=0/1 use the continuous extension of expit(logit(p)+delta).
    Structural e=0/1 is rejected: specify missing risks separately instead.
    Invalid/nonfinite inputs raise ValueError. No inputs are modified.
    """
    p = np.asarray(probabilities, dtype=float)
    e, w = np.asarray(propensities, dtype=float), np.asarray(weights, dtype=float)
    if (p.ndim < 2 or p.shape[-1] != 2 or p.shape[-2] == 0
            or not np.all(np.isfinite(p)) or np.any((p < 0) | (p > 1))):
        raise ValueError("Probabilities must be finite in [0,1] with shape (..., strata, 2)")
    shape = (p.shape[-2],)
    if (e.shape != shape or not np.all(np.isfinite(e)) or np.any((e <= 0) | (e >= 1))):
        raise ValueError("Propensities must have shape (strata,) and lie strictly between 0 and 1")
    if (w.shape != shape or not np.all(np.isfinite(w)) or np.any(w < 0)
            or not np.isclose(w.sum(), 1.0, atol=1e-12, rtol=0)):
        raise ValueError("Target weights must be finite, nonnegative and sum to one")
    shifts = []
    for delta in (delta0, delta1):
        d = np.asarray(delta, dtype=float)
        if d.shape not in ((), shape) or not np.all(np.isfinite(d)):
            raise ValueError("Each shift must be finite and scalar or shape (strata,)")
        shifts.append(d)
    # Only missing counterfactual risks are shifted; observed risks stay fixed.
    q0 = expit(logit(p[..., 0])+shifts[0])
    q1 = expit(logit(p[..., 1])+shifts[1])
    m1 = e*p[..., 1]+(1-e)*q1
    m0 = (1-e)*p[..., 0]+e*q0
    return np.sum(w*(m1-m0), axis=-1)


def scenario_summary(contrasts, baseline) -> dict:
    """Summarise iid joint posterior draws and paired changes from zero shifts.

    The probability MCSE is a plug-in binomial estimate, unreliable at 0 or 1.
    These simulation errors are distinct from posterior SD or the 90% interval.
    """
    x, base = np.asarray(contrasts, dtype=float), np.asarray(baseline, dtype=float)
    if (x.ndim != 1 or len(x) < 2 or base.shape != x.shape
            or not np.all(np.isfinite(x)) or not np.all(np.isfinite(base))
            or np.any(abs(x) > 1+1e-12) or np.any(abs(base) > 1+1e-12)):
        raise ValueError("Require matching finite risk-difference vectors with at least two draws")
    probability = float(np.mean(x > 0))
    variance = float(np.var(x, ddof=1))
    change = x-base
    return dict(mean=float(x.mean()), variance=variance,
                ci90=np.quantile(x, [.05, .95]).tolist(),
                probability_positive=probability, mean_mcse=float(np.sqrt(variance/len(x))),
                probability_mcse=float(np.sqrt(probability*(1-probability)/len(x))),
                paired_change_mean=float(change.mean()),
                paired_change_mcse=float(np.std(change, ddof=1)/np.sqrt(len(x))))


def sensitivity_analysis(seed: int = DEFAULT_SEED, draws: int = 80000) -> dict:
    """Original A04 table; shared draws across fixed scenarios, no shift fitting."""
    if isinstance(draws, bool) or not isinstance(draws, (int, np.integer)) or draws < 2:
        raise ValueError("draws must be an integer of at least two")
    n, y = np.array([[80, 20], [20, 80]]), np.array([[8, 6], [12, 56]])
    a, b = cell_posterior(n, y)
    p = np.random.default_rng(seed).beta(a, b, size=(draws, 2, 2))
    e, w = np.array([.2, .8]), np.array([.5, .5])
    baseline = sensitivity_effect(p, e, w)
    surface = []
    for d0 in (0.0, .5, 1.0):
        for d1 in (0.0, -.5, -1.0):
            values = sensitivity_effect(p, e, w, d0, d1)
            surface.append(dict(delta0=d0, delta1=d1, **scenario_summary(values, baseline)))
    target_change = []
    for d0, d1 in ((0.0, 0.0), (1.0, -1.0)):
        original = sensitivity_effect(p, e, w, d0, d1)
        changed = sensitivity_effect(p, e, [.8, .2], d0, d1)
        target_change.append(dict(delta0=d0, delta1=d1, weights=[.8, .2],
                                  **scenario_summary(changed, original)))
    # Deliberately omit a sampled cell while retaining the source e, NOT a new
    # population with e_1=1. This is outcome extrapolation after data deletion.
    missing_n, missing_y = n.copy(), y.copy()
    missing_n[1, 0] = missing_y[1, 0] = 0
    absent = []
    for pa, pb in ((1, 1), (2, 8), (8, 2)):
        prior_a, prior_b = np.ones((2, 2)), np.ones((2, 2))
        prior_a[1, 0], prior_b[1, 0] = pa, pb
        ma, mb = cell_posterior(missing_n, missing_y, prior_a, prior_b)
        mp = np.random.default_rng(seed+1).beta(ma, mb, size=(draws, 2, 2))
        zero = sensitivity_effect(mp, e, w)
        values = sensitivity_effect(mp, e, w, 1.0, -1.0)
        absent.append(dict(absent_cell_prior=[pa, pb], absent_cell_posterior=[float(ma[1, 0]), float(mb[1, 0])],
                           extrapolation_required=True, delta0=1.0, delta1=-1.0,
                           **scenario_summary(values, zero)))
    return dict(model="Missing-minus-observed counterfactual log odds; fixed scenarios",
                draws=draws, seed=seed, propensities=e.tolist(), weights=w.tolist(),
                shift_order=["delta0: Y(0) among treated", "delta1: Y(1) among untreated"],
                surface=surface, target_change=target_change, absent_sampled_cell=absent,
                limitations=["Shifts are not learned from the observed outcome likelihood.",
                             "Propensities and target weights are stipulated, with no estimated uncertainty.",
                             "Intervals condition on a scenario; the grid has no posterior probabilities.",
                             "Probability MCSE is a plug-in estimate, unreliable at observed 0 or 1.",
                             "Structural propensity endpoints are rejected by sensitivity_effect."])


def compute(seed: int = DEFAULT_SEED) -> dict:
    n, successes = np.array([80, 20, 20, 80]), np.array([8, 6, 12, 56])
    a, b = 1+successes, 1+n-successes
    coefficients = np.array([-.5, .5, -.5, .5])
    means, variances = a/(a+b), a*b/((a+b)**2*(a+b+1))
    exact_mean, exact_var = coefficients @ means, coefficients**2 @ variances
    draws = np.random.default_rng(seed).beta(a, b, size=(80000, 4)) @ coefficients
    pooled = (1+successes[1::2].sum())/(2+n[1::2].sum()) - (
        1+successes[::2].sum())/(2+n[::2].sum())
    # Enumerate P(Z,A,Y) rather than infer a causal target from the observed table.
    risks = np.array([[.1, .3], [.6, .7]])
    treatment = np.array([.2, .8])
    joint_a = .5 * np.column_stack([1-treatment, treatment])
    crude = ((joint_a*risks).sum(axis=0)/joint_a.sum(axis=0)) @ np.array([-1, 1])
    known_effect = np.mean(risks[:, 1]-risks[:, 0])
    missing_cell = []
    for pa, pb in [(1, 1), (2, 8), (8, 2)]:
        changed = means.copy(); changed[2] = pa/(pa+pb)
        missing_cell.append(dict(absent_cell_prior=[pa, pb], effect_mean=float(coefficients @ changed)))
    mcse = np.sqrt(exact_var / len(draws))
    return envelope(STEM, seed, "Independent Beta posteriors and g-formula standardisation",
                    {"row_order": ["Z0_A0", "Z0_A1", "Z1_A0", "Z1_A1"],
                     "totals": n.tolist(), "successes": successes.tolist(),
                     "target_stratum_weights": [.5, .5], "draws": len(draws)},
                    {"adjusted_mean": float(exact_mean), "adjusted_variance": float(exact_var),
                     "adjusted_ci90": np.quantile(draws, [.05, .95]).tolist(),
                     "draw_mean": float(draws.mean()), "draw_mean_mcse": float(mcse),
                     "pooled_mean": float(pooled), "generator_effect": float(known_effect),
                     "generator_crude_association": float(crude), "overlap_failure": missing_cell,
                     "sensitivity": sensitivity_analysis(seed)},
                    [check("draw_mean", draws.mean(), exact_mean, atol=6*mcse),
                     check("generator_effect", known_effect, .15), check("crude_enumeration", crude, .42)],
                    ["Consistency, conditional exchangeability and positivity are assumptions.",
                     "An absent high-stratum control cell remains prior-driven; propriety does not identify it."])


def main() -> None:
    result = compute(); m = result["metrics"]
    plt.bar(["Generator\ncausal", "Adjusted\nposterior", "Pooled\nposterior", "Generator\nassociation"],
            [m["generator_effect"], m["adjusted_mean"], m["pooled_mean"], m["generator_crude_association"]])
    ci = m["adjusted_ci90"]
    plt.errorbar(1, m["adjusted_mean"], yerr=[[m["adjusted_mean"]-ci[0]], [ci[1]-m["adjusted_mean"]]],
                 color="black", capsize=6)
    plt.ylabel("Absolute risk difference")
    plt.title("Known fictional generator; adjusted interval is posterior central 90%")
    save_figure(STEM); save_result(STEM, result)


if __name__ == "__main__":
    main()
# %% [markdown]
# **Investigate:** change target stratum weights to [0.8, 0.2], then remove the
# high-stratum control cell. Separate population change from overlap failure.
# %% [markdown]
# ## Sensitivity to selection within the measured strata
# Now relax exchangeability while retaining the same observed binomial model.
# Let delta0 shift the log odds of Y(0) among treated people relative to controls;
# let delta1 shift Y(1) among untreated people relative to treated people.
# Positive delta0 lowers the effect; positive delta1 raises it. These shifts are
# fixed assumptions about missing counterfactuals, not fitted coefficients.
#
# Mix observed and missing risks using source propensities e=(0.2,0.8), then
# average with target weights w=(0.5,0.5). Keep the source e when changing only w.
# The observed likelihood contains neither shift. See A04 for a full joint-law
# construction and the derivation. Zero shifts recover ordinary standardisation.
# %%
if __name__ == "__main__":
    scenarios = sensitivity_analysis()
    print("Fixed scenarios; risk differences, conditional 90% intervals and iid MCSEs")
    print("delta0 delta1    mean       90% interval       P(effect>0)  mean MCSE  prob MCSE")
    for row in scenarios["surface"]:
        lo, hi = row["ci90"]
        print(f"{row['delta0']:5.1f} {row['delta1']:6.1f} {row['mean']:9.4f}  "
              f"[{lo:7.4f}, {hi:7.4f}]     {row['probability_positive']:7.4f}  "
              f"{row['mean_mcse']:.6f}   {row['probability_mcse']:.6f}")
# %% [markdown]
# ### Predict, change assumptions, then interpret
# Along delta0=t, delta1=-t, compare t=0, 0.5 and 1. Locate where the posterior
# mean changes sign. This is a mean-tipping scenario, not a claim that benefit
# is impossible or that this selection strength is credible in a real service.
# Which interval crosses zero first? Why is that a different criterion?
#
# Every row uses the SAME posterior cell draws. The MCSE of a difference uses
# the paired draw differences; treating rows as independent discards covariance.
# A conditional posterior interval describes outcome uncertainty within one
# scenario. The range over the grid describes changing unlearned assumptions.
#
# For an unscored changed-givens investigation, use totals [[45,35],[25,55]],
# successes [[9,14],[13,39]], Beta(2,3) priors, e=[0.35,0.65], w=[0.6,0.4].
# These propensities are stipulated, not ratios of the cell totals. Use seed
# 2616 and 60000 draws. Predict the signs before applying delta0=[0.4,0.8],
# delta1=[-0.6,-0.2]. Compare w=[0.3,0.7], then omit the Z=1,A=0 cell and
# vary its prior. Explain what data could inform the shifts and which causal
# assumptions remain unsupported. Report estimates, conditional intervals and
# MCSEs separately. There is no supplied answer and no scored assessment ID.
