# %% [markdown]
# # Lab 23 — Correlated depot effects and an observed computation ledger
#
# Read A09 first. The data are original synthetic teaching givens, generated with
# unequal numbers of visits and different within-depot workload ranges. Workload
# is in ten-job units; the response is log(service minutes / one minute).
#
# This notebook explicitly **replays verified full sampling evidence**. It does
# not resample merely because you run all cells. First create a full record with
# `.venv/bin/python -B artifacts/expansion/hierarchy_record.py` from the repository
# root. That command runs four chains per fit, both coordinates in both regimes,
# and the prespecified repairs. It can take several minutes. Every attempt stays
# in `artifacts/expansion/hierarchy_runs/`. Changed sources, model, seed, inputs
# or installed versions invalidate replay; missing/corrupt evidence is an error.
#
# `compute(seed)` reads and verifies that evidence, recomputes diagnostics and
# predictive summaries, and returns finite schema-1 data without writing files.
# The last cell writes the result and accessible figure. Notebook execution is
# real computation, but it is **not a second MCMC execution**.
# %%
from html import escape
import re

from common import ROOT, np, plt, save_figure, save_result
from extension_common import check, envelope
from hierarchy_common import (DEFAULT_SEED, FIT_IDS, PRIOR, SAMPLER, conditional_effect,
                              coordinate_logdensities, covariance, make_data, niw_fixture,
                              posterior_agreement, posterior_predictive, prior_predictive)
from hierarchy_evidence import EXTRA_INPUTS, POINTER, load_evidence

STEM = "23_multivariate_hierarchy"
FIGURE_TITLE = "Depot predictions and observed computation"
FIGURE_DESCRIPTION = (
    "Top left: posterior 90 percent intervals for depot intercept-slope correlation "
    "for every initial and repair fit, with the synthetic generating correlation "
    "marked. Top right: energy BFMI by chain with the 0.3 screen line; labels also "
    "report divergence counts. Bottom panels: existing depot zero and new depot "
    "predictive median and 90 percent bands at workload deviations minus one, "
    "zero and one in ten-job units, for weak and strong information. These depots "
    "have different mean workloads. Values, all diagnostics and limitations are "
    "also in the result JSON and reading. Passing screens does not prove model truth."
)


# %% [markdown]
# ## Known-covariance conditional reference and the coordinate Jacobian
#
# Given population coefficients, Sigma and sigma, each depot effect is Gaussian:
# V = (Sigma^-1 + X'X/sigma^2)^-1, m = V X'(y-mu)/sigma^2.
# The fixture below compares that precision update to conditioning one joint
# Gaussian. Both describe this hierarchy at fixed hyperparameters; neither
# replaces integration over the learned covariance in the real fit.
#
# With b_j=L z_j, db/dz has determinant |L|^J. Therefore
# log p_z(z) = log p_b(Lz) + J log|L|. Comparing the densities without the
# determinant tests the wrong claim. The small NIW example at the end describes
# an entirely different conjugate model and cannot validate the LKJ posterior.
# %%
def reference_checks() -> list[dict]:
    cov = covariance([.7, .25], -.4)
    x = np.column_stack([np.ones(3), [-1., .5, 1.5]])
    y, mean, sigma = np.array([.3, -.2, .8]), np.array([.1, .2, .3]), .6
    m, v = conditional_effect(y, x, mean, sigma, cov)
    observation_cov = x @ cov @ x.T + sigma*sigma*np.eye(3)
    reference_m = cov @ x.T @ np.linalg.solve(observation_cov, y-mean)
    reference_v = cov-cov @ x.T @ np.linalg.solve(observation_cov, x @ cov)
    density = coordinate_logdensities(np.array([[.2, -.3], [.8, .1], [-.1, .2]]), [.7, .25], -.4)
    niw = niw_fixture()
    checks = [check("conditional_mean_joint_gaussian", np.max(abs(m-reference_m)), 0),
              check("conditional_cov_joint_gaussian", np.max(abs(v-reference_v)), 0),
              check("coordinate_density_with_jacobian", density["difference"], 0),
              check("niw_mean", np.max(abs(np.array(niw["mean"])-.5)), 0),
              check("niw_df", niw["df"], 6),
              check("niw_t_scale", np.max(abs(np.array(niw["t_scale"])-5*np.eye(2)/12)), 0),
              check("niw_predictive_covariance", np.max(abs(np.array(niw["predictive_covariance"])-5*np.eye(2)/8)), 0)]
    for regime in ("weak", "strong"):
        data = make_data(regime)
        checks.append(check(regime+"_within_centering", max(abs(data.within[data.group == j].sum()) for j in range(12)), 0))
    return checks


# %% [markdown]
# ## Recompute the ledger, not just a green status
#
# Each retained fit has energy, divergences, rank-normalized R-hat, bulk/tail
# ESS, and mean MCSE for scientific estimands. Prior and posterior predictive
# summaries use one shared effect per depot and draw. In-sample prediction is
# criticism, not an independent validation score. The base LKJ(2) prior and
# its alternatives are compared *before* interpreting a weakly identified rho.
# %%
def compute(seed: int = DEFAULT_SEED) -> dict:
    manifest, fits = load_evidence(seed)
    all_runs, latest = [], {}
    for fit in fits:
        meta = fit["metadata"]
        latest[meta["fit_id"]] = fit
        prediction = posterior_predictive(make_data(meta["regime"], seed), fit["posterior"], meta["seed"]+11)
        all_runs.append(dict(fit_id=meta["fit_id"], phase=meta["phase"], seed=meta["seed"],
                             sampler=meta["sampler"], seconds=meta["seconds"], diagnostics=fit["diagnostics"],
                             cpu_seconds=meta["cpu_seconds"],
                             diagnosis=meta["diagnosis"], posterior_predictive=prediction,
                             arrays=meta["arrays"], arrays_sha256=meta["arrays_sha256"]))
    agreement = {regime: posterior_agreement(latest[regime+"_centered"]["diagnostics"],
                                           latest[regime+"_noncentered"]["diagnostics"])
                 for regime in ("weak", "strong")}
    ledger = []
    for regime in ("weak", "strong"):
        original = [f for f in fits if f["metadata"]["regime"] == regime and f["metadata"]["phase"] == "initial"]
        before, after = original
        ledger.append(dict(regime=regime, before=before["metadata"]["fit_id"],
                           diagnosis=before["diagnostics"]["screen"],
                           intervention="Replace b by Lz, z~N(0,I); same target, different coordinates",
                           after=after["metadata"]["fit_id"], reevaluation=after["diagnostics"]["screen"],
                           posterior_agreement=posterior_agreement(before["diagnostics"], after["diagnostics"])))
    for fit in fits:
        meta = fit["metadata"]
        if meta["phase"] == "repair":
            original = next(f for f in fits if f["metadata"]["fit_id"] == meta["fit_id"] and f["metadata"]["phase"] == "initial")
            ledger.append(dict(before=meta["fit_id"]+"/initial", diagnosis=original["diagnostics"]["screen"],
                               intervention="Keep target and coordinates; target_accept .99, warmup and retained draws 2000 per chain",
                               after=meta["fit_id"]+"/repair", reevaluation=fit["diagnostics"]["screen"],
                               posterior_agreement=posterior_agreement(original["diagnostics"], fit["diagnostics"])))
    inputs = (*EXTRA_INPUTS, POINTER.relative_to(ROOT).as_posix())
    return envelope(STEM, seed, "PyMC NUTS full-run evidence with explicit verified replay; exact bivariate LKJ prior",
        dict(prior=PRIOR, initial_sampler=SAMPLER, regimes=["weak", "strong"],
             units=dict(response="log(service_minutes / one minute)", within="(jobs - depot mean jobs)/10", between="(depot mean jobs - 50)/10"),
             provenance="Original synthetic teaching data; known design/group means, no external data", estimated_covariance=True),
        dict(execution=dict(mode="verified_replay", actual_sampling_execution_id=manifest["execution_id"],
                            full_run_seconds=manifest["seconds"], process_peak_rss_bytes=manifest["process_peak_rss_bytes"],
                            cpu_seconds=manifest["cpu_seconds"], previous_attempts=manifest["previous_attempts"],
                            retained_fit_bytes=manifest["retained_fit_bytes"], hardware=manifest["hardware"],
                            versions=manifest["binding"]["versions"]),
             data={r: dict(n=len(make_data(r, seed).response), counts=make_data(r, seed).counts.tolist(),
                           generating_parameters=make_data(r, seed).truth) for r in ("weak", "strong")},
             prior_predictive=prior_predictive(seed+90), runs=all_runs, repair_ledger=ledger,
             final_coordinate_agreement=agreement, niw_reference=niw_fixture(),
             all_final_screens_passed=all(f["diagnostics"]["screen"]["passed"] for f in latest.values())),
        reference_checks()+[check("all_four_initial_fits_retained", sum(f["metadata"]["phase"] == "initial" for f in fits), 4)],
        ["The twelve synthetic depots are one teaching realization; the generating rho is not a posterior acceptance threshold.",
         "Weak within-depot workload spread and few groups limit slope/correlation identification, even with excellent NUTS screens.",
         "Shared Gaussian effects assume exchangeable depots conditional on their mean workload; effects are associations, not causal responses.",
         "New-depot predictions condition on a specified group mean workload; uncertain or shifted group means need a larger model.",
         "All initial failures remain visible; comparison MCSE is unreliable when chains have not explored the target adequately.",
         "Predictive intervals are conditional on the selected model; in-sample PPC cannot establish external calibration.",
         "Changing LKJ eta, scale priors, or imposing an unadjusted sum-to-zero constraint changes the target.",
         "NIW fixture verifies only its stated conjugate model; it does not certify this learned LKJ hierarchy.",
         "Replay is not fresh sampling. Any source/input/version/seed change requires a new explicit full recording."], inputs=inputs)


# %% [markdown]
# ## Read the figure and make a repair memo
#
# Compare both regimes. Which intervention changed computation, which changed
# assumptions, and which scientific quantities remain weakly learned? Use the
# actual ledger, including a failed repair if one occurs. Do not search seeds
# to manufacture a divergence or declare success solely from its absence.
#
# Investigation: calculate Cov(Y_a,Y_b | population parameters) for two visits
# to one new depot, then compare with two different new depots. Predict what
# happens if the effect vector is mistakenly redrawn at every visit. To change
# the fitted model, edit the numerical source, make a new explicit recording,
# and retain the earlier run. Merely changing a displayed plot is not a refit.
# %%
def render(result: dict) -> None:
    metrics = result["metrics"]
    runs = metrics["runs"]
    fig, axes = plt.subplots(2, 2, figsize=(12, 8.5))
    labels = [r["fit_id"].replace("noncentered", "NC").replace("centered", "C")+" "+r["phase"] for r in runs]
    for i, run in enumerate(runs):
        low, mid, high = run["posterior_predictive"]["rho_interval"]
        axes[0, 0].errorbar(mid, i, xerr=[[mid-low], [high-mid]], fmt="o", color="#087f8c", capsize=3)
        screen = run["diagnostics"]["screen"]
        axes[0, 1].scatter(screen["bfmi_by_chain"], [i]*4, marker="|", s=160, color="#6254a3")
        axes[0, 1].annotate(f"{screen['divergences']} divergences", (.03, i+.13), fontsize=8)
    axes[0, 0].axvline(.55, color="gray", linestyle="--", label="Generating rho")
    axes[0, 0].set(xlim=(-1, 1), yticks=range(len(runs)), yticklabels=labels, xlabel="Correlation: median and 90% interval")
    axes[0, 0].legend(fontsize=8)
    axes[0, 1].axvline(.3, color="gray", linestyle="--", label="BFMI screen")
    axes[0, 1].set(yticks=range(len(runs)), yticklabels=labels, xlabel="Energy BFMI: one mark per chain")
    axes[0, 1].legend(fontsize=8)
    for ax, regime in zip(axes[1], ("weak", "strong")):
        candidates = [r for r in runs if r["fit_id"].startswith(regime)]
        passing = [r for r in candidates if r["diagnostics"]["screen"]["passed"]]
        selected = (passing or candidates)[-1]
        for key, label, style, color in [("existing_depot0_minutes_quantiles", "Existing depot 0", "o-", "#087f8c"),
                                        ("new_depot_q05_minutes_quantiles", "New depot, q=0.5", "s--", "#d47c45")]:
            interval = np.array(selected["posterior_predictive"][key])
            ax.plot([-1, 0, 1], interval[:, 1], style, color=color, label=label)
            ax.fill_between([-1, 0, 1], interval[:, 0], interval[:, 2], color=color, alpha=.14)
        ax.set(title=regime.capitalize()+" information: "+selected["fit_id"].split("_")[1],
               xlabel="Within-depot deviation (10 jobs)", ylabel="Service minutes (90% prediction)")
        ax.legend(fontsize=8)
    fig.suptitle(FIGURE_TITLE)
    save_figure(STEM)
    # Accessible even before shared teaching-registry integration; idempotent after it.
    path = ROOT / "artifacts/figures" / f"{STEM}.svg"
    svg = re.sub(r"<(title|desc)\b[^>]*>.*?</\1>", "", path.read_text(), flags=re.S)
    svg = re.sub(r'\s(?:role|aria-labelledby)="[^"]*"', "", svg)
    semantics = (f' role="img" aria-labelledby="{STEM}-title {STEM}-description">'
                 f'<title id="{STEM}-title">{escape(FIGURE_TITLE)}</title>'
                 f'<desc id="{STEM}-description">{escape(FIGURE_DESCRIPTION)}</desc>')
    svg = re.sub(r"(<svg\b[^>]*?)>", lambda match: match[1]+semantics, svg, count=1)
    path.write_text(svg)


def main() -> None:
    result = compute()
    if not all(c["passed"] for c in result["checks"]):
        raise ArithmeticError("A09 independent reference check failed; inspect the returned check values")
    render(result)
    save_result(STEM, result, verbose=False)
    print(f"A09 verified replay of {result['metrics']['execution']['actual_sampling_execution_id']}; "
          f"{len(result['metrics']['runs'])} actual fitted runs retained. Not fresh sampling.")


if __name__ == "__main__":
    main()
