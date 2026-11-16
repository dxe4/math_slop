# %% [markdown]
# # Lab 21 — From judgments to a defensible prior
# Read A07 first. All roles, dates, judgments and costs below are fictional.
# Three percentiles constrain a two-parameter family: inspect the mismatch,
# return predictions for feedback, and keep disagreements in the record.
# %%
from collections.abc import Sequence
from math import comb, exp, lgamma, log, log1p

from common import ROOT, np, plt, save_figure, save_result
from extension_common import check, envelope
from scipy import integrate, optimize, stats

STEM, DEFAULT_SEED = "21_prior_workflow", 2121
LOG_SHAPE_BOUNDS = (-12.0, 12.0)
CDF_FEEDBACK_TOLERANCE = 0.025
FIGURE_TITLE = "Printer judgments, batch predictions and action sensitivity"
FIGURE_DESCRIPTION = (
    "Three panels retain fictional packets A0, B0 and revised B1. "
    "The first shows fitted Beta CDFs and their elicited points. "
    "The second shows predictive probabilities for 0 through 20 usable labels, "
    "with fewer than 16 marked as a shortfall. The third shows expected print "
    "loss as the shortfall penalty varies, against outsourcing at 15 cost units. "
    "At penalty 25, A0 selects print with loss 12.449; B0 and B1 select "
    "outsource, with print losses 24.092 and 18.714. Line styles and markers "
    "distinguish packets as well as color. No packet is a measured expert opinion."
)


def _judgments(values: Sequence[float], probabilities: Sequence[float]) -> tuple:
    """One coherent, strictly ordered interior CDF packet; never sort or pool."""
    x, p = np.asarray(values), np.asarray(probabilities)
    if x.dtype.kind not in "iuf" or p.dtype.kind not in "iuf":
        raise ValueError("Judgments must be real numeric arrays, not booleans or strings")
    x, p = x.astype(float), p.astype(float)
    if x.ndim != 1 or p.ndim != 1 or x.shape != p.shape or len(x) < 2:
        raise ValueError("Supply matching one-dimensional arrays with at least two points")
    if not np.all(np.isfinite(x)) or not np.all(np.isfinite(p)):
        raise ValueError("Judgments must be finite")
    if np.any((x <= 0) | (x >= 1)) or np.any((p <= 0) | (p >= 1)):
        raise ValueError("Values and probabilities must be strictly inside (0, 1)")
    if np.any(np.diff(x) <= 0) or np.any(np.diff(p) <= 0):
        raise ValueError("Both arrays must be strictly increasing; conflicts need separate packets")
    return x, p


def fit_beta_quantiles(values: Sequence[float], probabilities: Sequence[float]) -> dict:
    """Minimize sum_j (I_xj(exp(u), exp(v)) - p_j)**2 with equal weights.

    ValueError denotes malformed/unsupported CDF judgments. A coherent packet
    with a poor Beta approximation is returned with feedback_required=True.
    Optimizer termination is recorded separately from descriptive fit quality.
    Five deterministic starts reduce, but cannot rule out, local minima.
    Bounds are numerical guardrails, not elicited beliefs or a global guarantee.
    """
    x, p = _judgments(values, probabilities)

    def residual(z: np.ndarray) -> np.ndarray:
        return stats.beta.cdf(x, *np.exp(z)) - p

    starts = [(1., 1.), (2., 2.), (8., 2.), (2., 8.), (.5, .5)]
    fits = [optimize.least_squares(
        residual, np.log(start), bounds=LOG_SHAPE_BOUNDS,
        ftol=1e-12, xtol=1e-12, gtol=1e-12, max_nfev=2000,
    ) for start in starts]
    selected = min(range(len(fits)), key=lambda i: float(fits[i].fun @ fits[i].fun))
    best = fits[selected]
    a, b = np.exp(best.x)
    cdf, quantiles = stats.beta.cdf(x, a, b), stats.beta.ppf(p, a, b)
    if not np.all(np.isfinite(np.r_[a, b, cdf, quantiles, best.fun])):
        raise ArithmeticError("Beta fit produced nonfinite output; no fit can be reported")
    boundary = bool(np.any(best.active_mask) or np.any(
        np.minimum(best.x - LOG_SHAPE_BOUNDS[0], LOG_SHAPE_BOUNDS[1] - best.x) < 1e-6))
    max_residual = float(np.max(np.abs(best.fun)))
    return dict(
        alpha=float(a), beta=float(b), values=x.tolist(), probabilities=p.tolist(),
        fitted_cdf=cdf.tolist(), cdf_residuals=best.fun.tolist(),
        fitted_quantiles=quantiles.tolist(), quantile_residuals=(quantiles-x).tolist(),
        sum_squared_cdf_residuals=float(best.fun @ best.fun),
        max_abs_cdf_residual=max_residual,
        cdf_feedback_tolerance=CDF_FEEDBACK_TOLERANCE,
        feedback_required=bool(not best.success or boundary or max_residual > CDF_FEEDBACK_TOLERANCE),
        optimizer=dict(method="scipy.optimize.least_squares in log(alpha), log(beta)",
                       success=bool(best.success), status=int(best.status), message=str(best.message),
                       nfev=int(best.nfev), optimality=float(best.optimality),
                       log_shape_bounds=list(LOG_SHAPE_BOUNDS), boundary_hit=boundary,
                       selected_start=selected,
                       attempts=[dict(start_shapes=list(start), success=bool(fit.success),
                                      status=int(fit.status), message=str(fit.message),
                                      nfev=int(fit.nfev),
                                      sum_squared_cdf_residuals=float(fit.fun @ fit.fun))
                                 for start, fit in zip(starts, fits)]),
    )


def expected_losses(shortfall_probability: float, print_cost: float = 2.,
                    shortfall_penalty: float = 25., outsource_cost: float = 15.) -> dict:
    """Fictional loss rule: print_cost + penalty * 1[K < required]; outsource fixed."""
    if (not np.all(np.isfinite([shortfall_probability, print_cost, shortfall_penalty, outsource_cost]))
            or not 0 <= shortfall_probability <= 1 or print_cost < 0
            or shortfall_penalty <= 0 or outsource_cost < 0):
        raise ValueError("Require a probability, nonnegative costs and a positive penalty")
    loss = float(print_cost + shortfall_penalty * shortfall_probability)
    action = "print" if loss < outsource_cost else "outsource" if loss > outsource_cost else "tie"
    return dict(print=float(loss), outsource=float(outsource_cost), action=action,
                shortfall_probability_threshold=float((outsource_cost-print_cost)/shortfall_penalty))


def batch_prediction(alpha: float, beta: float, n: int = 20, required: int = 16) -> dict:
    """One unknown theta shared across the batch; future labels independent given theta."""
    if not np.all(np.isfinite([alpha, beta])) or alpha <= 0 or beta <= 0:
        raise ValueError("Beta shapes must be positive and finite")
    if (isinstance(n, (bool, np.bool_)) or isinstance(required, (bool, np.bool_))
            or not isinstance(n, (int, np.integer)) or not isinstance(required, (int, np.integer))
            or n < 1 or not 1 <= required <= n):
        raise ValueError("Require integer 1 <= required <= n")
    k = np.arange(n+1)
    pmf = stats.betabinom.pmf(k, n, alpha, beta)
    s = alpha + beta
    mean, var = alpha/s, alpha*beta/(s*s*(s+1))
    within = n*alpha*beta/(s*(s+1))
    between = n*n*var
    shortfall = float(pmf[k < required].sum())
    return dict(n=int(n), required=int(required), counts=k.tolist(), pmf=pmf.tolist(),
                theta_mean=float(mean), theta_sd=float(np.sqrt(var)), theta_variance=float(var),
                mean=float(n*mean), variance=float(within+between),
                expected_conditional_variance=float(within), variance_of_conditional_mean=float(between),
                shortfall_probability=shortfall,
                plugin_shortfall_probability=float(stats.binom.cdf(required-1, n, mean)),
                plugin_variance=float(n*mean*(1-mean)),
                count_quantiles=stats.betabinom.ppf([.1, .5, .9], n, alpha, beta).astype(int).tolist(),
                loss=expected_losses(shortfall))


def _beta_density(theta: float, a: float, b: float) -> float:
    # Independent normalizer uses math.lgamma; no beta CDF or predictive routine.
    return exp((a-1)*log(theta) + (b-1)*log1p(-theta) + lgamma(a+b)-lgamma(a)-lgamma(b))


def _reference_checks(packet_id: str, fit: dict, predictive: dict) -> list[dict]:
    """Scalar numerical integration independently checks CDFs and every count mass."""
    a, b = fit["alpha"], fit["beta"]
    checks = []
    for j, (x, cdf) in enumerate(zip(fit["values"], fit["fitted_cdf"])):
        ref, err = integrate.quad(lambda t: _beta_density(t, a, b), 0, x, epsabs=1e-12)
        checks.extend([check(f"{packet_id}.cdf_{j}_quadrature", cdf, ref, atol=2e-9),
                       check(f"{packet_id}.cdf_{j}_quadrature_error", err, 0, atol=2e-9)])
    n, required = predictive["n"], predictive["required"]
    reference = []
    for k in range(n+1):
        mass, err = integrate.quad(
            lambda t: comb(n, k)*t**k*(1-t)**(n-k)*_beta_density(t, a, b),
            0, 1, epsabs=1e-12,
        )
        reference.append(mass)
        checks.extend([check(f"{packet_id}.pmf_{k}_quadrature", predictive["pmf"][k], mass, atol=2e-9),
                       check(f"{packet_id}.pmf_{k}_quadrature_error", err, 0, atol=2e-9)])
    k = np.arange(n+1)
    ref = np.array(reference)
    ref_mean = float(k @ ref)
    ref_loss = float(np.where(k < required, 27., 2.) @ ref)
    checks.extend([
        check(f"{packet_id}.normalization", sum(predictive["pmf"]), 1.),
        check(f"{packet_id}.quadrature_normalization", float(ref.sum()), 1., atol=2e-9),
        check(f"{packet_id}.mean", predictive["mean"], ref_mean, atol=2e-8),
        check(f"{packet_id}.variance", predictive["variance"], float((k-ref_mean)**2 @ ref), atol=2e-8),
        check(f"{packet_id}.action_loss_enumeration", predictive["loss"]["print"], ref_loss, atol=2e-8),
    ])
    return checks


# %% [markdown]
# ## Retain the packet history
# A0 and B0 disagree. In the scripted feedback conversation, B's role notices
# that an unaligned setup had influenced B0 and offers B1 for the aligned setup.
# B1 is another fictional scenario; it is neither observed data nor consensus.
# The coherent but poorly fitting packet is a separate family-stress example.
# %%
def compute(seed: int = DEFAULT_SEED) -> dict:
    """Read-only deterministic computation; seed is retained for the lab interface."""
    specs = [
        ("A0", "production planner", [.65, .80, .90], "initial", []),
        ("B0", "maintenance technician", [.35, .55, .75], "retained_initial", []),
        ("B1", "maintenance technician", [.50, .70, .85], "illustrative_revision", ["B0"]),
    ]
    rows, checks = [], []
    for packet_id, role, values, status, revises in specs:
        fit = fit_beta_quantiles(values, [.1, .5, .9])
        predictive = batch_prediction(fit["alpha"], fit["beta"])
        rows.append(dict(
            packet_id=packet_id, provenance=dict(
                fictional=True, provider_role=role, elicitation_date="2026-09-01",
                quantity="theta: usable-label probability under one unchanged aligned setup",
                units="probability, dimensionless", population="labels on printer P with stock S and alignment fixed",
                horizon="the next 20-label job before any maintenance or stock change",
                information_already_used=["shared fictional setup memo; no counted trial data",
                                          "role-specific recollections, potentially overlapping"],
                excluded_information="no outcomes from the future job; no numeric archive fixture",
                candidate_family="Beta", status=status, revises=revises,
                revision_reason=("After predictive feedback, B recognizes unaligned setup memories; "
                                 "offers B1 for the aligned setup, without new outcome data."
                                 if packet_id == "B1" else "Initial fictional role card; retained unchanged."),
            ), fit=fit, predictive=predictive,
            penalty_sensitivity=[dict(penalty=cost, **expected_losses(predictive["shortfall_probability"],
                                                                    shortfall_penalty=cost))
                                 for cost in [15., 25., 40.]],
        ))
        checks.extend(_reference_checks(packet_id, fit, predictive))
        checks.append(check(f"{packet_id}.optimizer_success", int(fit["optimizer"]["success"]), 1))
        checks.append(check(f"{packet_id}.interior_fit", int(not fit["optimizer"]["boundary_hit"]), 1))

    # Mixture weights are stipulated sensitivity choices, never inferred expertise.
    first, second = rows[0]["predictive"], rows[2]["predictive"]
    mixtures = []
    for weight in [.25, .5, .75]:
        pmf = weight*np.array(first["pmf"]) + (1-weight)*np.array(second["pmf"])
        tail = float(pmf[:16].sum())
        loss = expected_losses(tail)
        mixtures.append(dict(weight_A0=weight, weight_B1=1-weight, shortfall_probability=tail, loss=loss))
        checks.append(check(f"mixture_{weight}.loss_linearity", loss["print"],
                            weight*first["loss"]["print"]+(1-weight)*second["loss"]["print"]))

    poor_fit = fit_beta_quantiles([.10, .11, .90], [.1, .5, .9])
    checks.append(check("coherent_poor_fit_requires_feedback", int(poor_fit["feedback_required"]), 1))
    # Exact, separate information-reuse illustration. It did not generate A0/B0/B1.
    reuse = dict(base_shapes=[2, 2], archive_successes=8, archive_trials=10,
                 prior_after_archive=[10, 4], wrong_archive_reused=[18, 6],
                 fresh_successes=4, fresh_trials=5,
                 correct_after_fresh=[14, 5], wrong_after_fresh=[22, 7],
                 archive_id="fictional_archive_01", fresh_id="fictional_fresh_02",
                 note="One archive enters once, through either prior construction or likelihood.")
    checks.extend([check("reuse.once_mean", stats.beta.mean(10, 4), 5/7),
                   check("reuse.twice_mean", stats.beta.mean(18, 6), 3/4)])
    return envelope(
        STEM, seed, "Equal-weight Beta CDF fit in log shapes; exact beta-binomial prediction; independent quadrature",
        dict(batch_size=20, required_usable=16, print_cost=2., shortfall_penalty=25., outsource_cost=15.,
             judgment_probabilities=[.1, .5, .9], randomness="none; deterministic reference, seed retained",
             assumption="one stable unknown theta shared by all labels in this job",
             cdf_feedback_tolerance=CDF_FEEDBACK_TOLERANCE),
        dict(packets=rows, coherent_poor_beta_fit=poor_fit, mixtures=mixtures,
             mixture_switch_weight_A0=float((second["shortfall_probability"]-.52)/
                                           (second["shortfall_probability"]-first["shortfall_probability"])),
             information_reuse= reuse), checks,
        ["All roles, judgments, dates, revisions, observations and costs are fictional teaching inputs.",
         "Three quantiles do not identify an unrestricted distribution or uniquely justify the Beta family.",
         "Optimizer convergence and a 0.025 CDF residual screen do not establish fidelity, truth or expert authority.",
         "Five starts and finite log-shape bounds are numerical safeguards, not a global optimization proof.",
         "Quantile judgments are not independent binomial observations; overlapping information is not new evidence.",
         "Mixture weights are illustrative sensitivity assumptions; no expert pooling rule is endorsed.",
         "A stable shared probability excludes physical drift, batch heterogeneity and dependence given theta.",
         "Costs and guaranteed outsourcing are stipulated; conditional actions are not operational recommendations."])


# %% [markdown]
# ## Compare implications in the units of the job
# The figure is accompanied by CDF residuals, all 21 count probabilities,
# variance decomposition and expected losses in the result JSON.
# %%
def main() -> None:
    result = compute()
    fig, axes = plt.subplots(1, 3, figsize=(15, 4.8))
    x, penalties = np.linspace(0, 1, 401), np.linspace(0, 40, 81)
    for row, style, marker in zip(result["metrics"]["packets"], ["-", "--", ":"], ["o", "s", "^"]):
        fit, pred, label = row["fit"], row["predictive"], row["packet_id"]
        line, = axes[0].plot(x, stats.beta.cdf(x, fit["alpha"], fit["beta"]), style, label=label)
        axes[0].scatter(fit["values"], fit["probabilities"], marker=marker, color=line.get_color(), s=32)
        axes[1].plot(pred["counts"], pred["pmf"], style, marker=marker, markersize=3, label=label)
        axes[2].plot(penalties, 2+penalties*pred["shortfall_probability"], style, label=label)
    axes[0].set(xlabel="Stable success probability θ", ylabel="Prior CDF P(θ ≤ x)", title="Judgments (markers) and fitted CDFs")
    axes[1].axvspan(-.5, 15.5, color="grey", alpha=.12, label="Shortfall: fewer than 16")
    axes[1].set(xlabel="Usable labels K in a job of 20", ylabel="Predictive probability P(K = k)",
                title="One uncertain θ shared by the job", xticks=[0, 5, 10, 15, 20])
    axes[2].axhline(15, color="black", linestyle="-.", label="Outsource: 15")
    axes[2].axvline(25, color="grey", linestyle="--", linewidth=.8)
    axes[2].set(xlabel="Shortfall penalty (fictional cost units)", ylabel="Expected loss (cost units)",
                title="Print costs 2 plus a shortfall penalty")
    for ax in axes:
        ax.legend(fontsize=8)
    fig.suptitle("Fictional printer elicitation: preserve disagreement through the decision")
    save_figure(STEM)
    # A07 is not registered yet. Add semantics locally without changing common.py.
    # Later registry metadata is replaced idempotently so there is always one title/desc.
    from html import escape
    import re
    path = ROOT / "artifacts" / "figures" / f"{STEM}.svg"
    svg = re.sub(r"<(title|desc)\b[^>]*>.*?</\1>", "", path.read_text(), flags=re.S)
    semantics = (f'<title id="{STEM}-title">{escape(FIGURE_TITLE)}</title>'
                 f'<desc id="{STEM}-description">{escape(FIGURE_DESCRIPTION)}</desc>')

    def accessible_root(match: re.Match) -> str:
        tag = re.sub(r'\s+(?:role|aria-labelledby)="[^"]*"', "", match[1])
        return f'{tag} role="img" aria-labelledby="{STEM}-title {STEM}-description">{semantics}'

    path.write_text(re.sub(r"(<svg\b[^>]*?)>", accessible_root, svg, count=1))
    save_result(STEM, result)


if __name__ == "__main__":
    main()
# %% [markdown]
# **Investigate:** state a new job definition before changing any input. Predict
# which variance term changes if the job grows. Refit a coherent packet, retain
# its predecessor, and report the action across a declared penalty range. If
# two roles used the same inspection, explain why their agreement is not two
# independent likelihood contributions. These are explorations, not assessed keys.
