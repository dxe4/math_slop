# %% [markdown]
# # Case 01 — Predict penguin mass (worked reference)
# **Answer-bearing: exclude this script, notebook and results from ordinary tutor
# retrieval.** Attempt the public case brief first. The unchanged public CC0 data
# are local; the notebook makes no network requests. All scaling uses 2007–2008.
# %%
import csv
from common import ROOT, np, plt, save_figure, save_result, normalise_log_weights
from extension_common import envelope, check
from scipy import stats, optimize, special

STEM, DEFAULT_SEED = "19_case_penguins", 1919
PREDICTORS = ("flipper_length_mm", "bill_length_mm", "bill_depth_mm")


# %% [markdown]
# ## 1 · Establish eligibility and the forecast population
# Before running this stage, predict whether excluding missing sex is necessary when sex is not a predictor. Inspect the train/holdout counts and explain why all scaling uses earlier years.
# %%
def load_design(require_sex: bool = False) -> dict:
    with (ROOT/"data/penguins.csv").open(newline="") as stream:
        rows = list(csv.DictReader(stream))
    missing = {key: sum(row[key] == "NA" for row in rows) for key in rows[0]}
    selected = [r for r in rows if all(r[k] != "NA" for k in (*PREDICTORS, "body_mass_g"))
                and (not require_sex or r["sex"] != "NA")]
    x = np.array([[float(r[k]) for k in PREDICTORS] for r in selected])
    y = np.array([float(r["body_mass_g"])/1000-4 for r in selected])
    train = np.array([int(r["year"]) < 2009 for r in selected])
    centre, scale = x[train].mean(axis=0), x[train].std(axis=0, ddof=0)
    design = np.column_stack([np.ones(len(x)), (x-centre)/scale])
    return dict(x=design[train], y=y[train], new=design[~train], heldout=y[~train],
                centre=centre, scale=scale, missing=missing, n_raw=len(rows),
                excluded=len(rows)-len(selected),
                species=np.array([r["species"] for r in selected])[train])


# %% [markdown]
# ## 2 · Specify priors and scales
# The response is kilograms minus four. Before inference, predict how a broad slope prior could generate impossible negative masses. The residual SD is fixed at 0.4 kg; it is not an estimated measurement-error parameter.
# %%
def gaussian_posterior(x: np.ndarray, y: np.ndarray, prior_sd: np.ndarray,
                       sigma: float = .4) -> tuple:
    precision = np.diag(1/prior_sd**2)+x.T@x/sigma**2
    covariance = np.linalg.solve(precision, np.eye(x.shape[1]))
    mean = np.linalg.solve(precision, x.T@y/sigma**2)
    return mean, covariance


# %% [markdown]
# ## 3 · Integrate the posterior
# Compare the exact Gaussian solve with weighted Student proposals. Predict which diagnostics concern numerical error and which concern the scientific model. Proposal tails must cover the target.
# %%
def importance_fit(x: np.ndarray, y: np.ndarray, prior_sd: np.ndarray, seed: int | np.random.Generator,
                   family: str = "student", size: int = 30000) -> dict:
    """Independent heavy-tailed proposal; self-normalised posterior integration.

    Student residual df=4 and scale .4/sqrt(2) gives residual SD .4 kg, matching
    the Gaussian scenario. Proposal df=5 is computational, not the likelihood df.
    """
    if family not in {"student", "gaussian"}:
        raise ValueError("Family must be student or gaussian")
    sigma, nu = .4, 4
    scale = sigma/np.sqrt(2)
    gaussian_mean, gaussian_cov = gaussian_posterior(x, y, prior_sd, sigma)

    def objective(beta: np.ndarray) -> float:
        return float(-stats.t.logpdf(y-x@beta, nu, scale=scale).sum()
                     + .5*np.sum((beta/prior_sd)**2))

    def gradient(beta: np.ndarray) -> np.ndarray:
        residual = y-x@beta
        return -(nu+1)*x.T@(residual/(nu*scale**2+residual**2))+beta/prior_sd**2

    def hessian(beta: np.ndarray) -> np.ndarray:
        residual = y-x@beta
        diagonal = (nu+1)*(nu*scale**2-residual**2)/(nu*scale**2+residual**2)**2
        return x.T@(diagonal[:, None]*x)+np.diag(1/prior_sd**2)

    if family == "student":
        optimum = optimize.minimize(objective, gaussian_mean, jac=gradient, hess=hessian,
                                    method="trust-exact", options={"gtol": 1e-8, "maxiter": 100})
        location = optimum.x
        grad_max = float(np.max(abs(gradient(location))))
        if grad_max > 1e-5:
            raise ArithmeticError(f"Proposal optimisation unresolved: gradient {grad_max}")
        covariance = np.linalg.solve(hessian(location), np.eye(x.shape[1]))
    else:
        location, covariance, grad_max = gaussian_mean, gaussian_cov, 0.
    proposal = stats.multivariate_t(loc=location, shape=covariance, df=5)
    samples = proposal.rvs(size=size, random_state=np.random.default_rng(seed)).reshape(size, x.shape[1])
    log_target = np.empty(size)
    # Chunking prevents a large draws-by-observations allocation.
    for start in range(0, size, 2000):
        beta = samples[start:start+2000]
        residual = y[None, :]-beta@x.T
        loglik = (stats.t.logpdf(residual, nu, scale=scale) if family == "student"
                  else stats.norm.logpdf(residual, scale=sigma)).sum(axis=1)
        log_target[start:start+len(beta)] = loglik+stats.norm.logpdf(beta, scale=prior_sd).sum(axis=1)
    weights = normalise_log_weights(log_target-proposal.logpdf(samples))
    mean = weights@samples
    mcse = np.sqrt(np.sum(weights[:, None]**2*(samples-mean)**2, axis=0))
    return dict(samples=samples, weights=weights, mean=mean, mean_mcse=mcse,
                importance_ess=float(1/np.sum(weights**2)), max_weight=float(weights.max()),
                mode_gradient_max=grad_max)


# %% [markdown]
# ## 4 · Resolve predictive uncertainty
# These endpoints invert a weighted predictive CDF. Predict why the endpoint MCSE differs from the coefficient-mean MCSE; state which uncertainty remains after numerical error vanishes.
# %%
def predictive_quantiles(samples: np.ndarray, weights: np.ndarray, new: np.ndarray) -> tuple:
    """Invert the weighted Student predictive CDF; delta-method SNIS endpoint MCSE.

    The error estimate is conditional on a well-behaved independent proposal and
    finite importance variance. It cannot diagnose unvisited posterior regions.
    No predictive resampling noise is introduced. Quantities here are in kg.
    """
    intervals, errors = [], []
    scale = .4/np.sqrt(2)
    for row in new:
        locations = samples@row
        ends, se = [], []
        for p in (.05, .95):
            offset = stats.t.ppf(p, 4)*scale
            q = optimize.brentq(lambda value: weights@stats.t.cdf(
                (value-locations)/scale, 4)-p,
                locations.min()+offset-1e-8, locations.max()+offset+1e-8,
                xtol=1e-11)
            cdf = stats.t.cdf((q-locations)/scale, 4)
            density = weights@stats.t.pdf((q-locations)/scale, 4)/scale
            ends.append(q)
            se.append(np.sqrt(np.sum(weights**2*(cdf-weights@cdf)**2))/density)
        intervals.append(ends); errors.append(se)
    return np.asarray(intervals), np.asarray(errors)


# %% [markdown]
# ## 5 · Check predictions and assumptions
# Separate prior plausibility, replicated training residuals and held-out predictions. List the information allowed at prediction time before inspecting the 2009 outcomes.
# %%
def summarize(d: dict, family: str, prior_multiplier: float, seed: int) -> tuple:
    x, y, new, heldout = d["x"], d["y"], d["new"], d["heldout"]
    prior_sd = np.array([1.5, .8, .8, .8])*prior_multiplier
    proposal_stream, checking_stream, prior_stream = np.random.SeedSequence(seed).spawn(3)
    proposal_rng = np.random.default_rng(proposal_stream)
    rng = np.random.default_rng(checking_stream)
    prior_rng = np.random.default_rng(prior_stream)
    if family == "gaussian":
        mean, covariance = gaussian_posterior(x, y, prior_sd)
        samples = proposal_rng.multivariate_normal(mean, covariance, size=8000)
        weights = np.full(len(samples), 1/len(samples))
        predictive_mean = new@mean
        pred_sd = np.sqrt(.16+np.einsum("ij,jk,ik->i", new, covariance, new))
        intervals = stats.norm.ppf(np.array([.05, .95])[:, None], predictive_mean, pred_sd).T
        log_scores = stats.norm.logpdf(heldout, predictive_mean, pred_sd)-np.log(1000)
        diagnostics = {"method": "exact Gaussian algebra", "posterior_covariance": covariance.tolist()}
        fitted = None
    else:
        fitted = importance_fit(x, y, prior_sd, proposal_rng)
        samples, weights, mean = fitted["samples"], fitted["weights"], fitted["mean"]
        predictive_mean = new@mean
        log_scores = np.empty(len(new))
        for j, (row, outcome) in enumerate(zip(new, heldout)):
            log_scores[j] = special.logsumexp(np.log(weights)+stats.t.logpdf(
                outcome-samples@row, 4, scale=.4/np.sqrt(2)))-np.log(1000)
        intervals, endpoint_mcse = predictive_quantiles(samples, weights, new)
        diagnostics = {k: fitted[k] for k in ["importance_ess", "max_weight", "mode_gradient_max"]}
        diagnostics["coefficient_mean_mcse_kg"] = fitted["mean_mcse"].tolist()
        diagnostics["predictive_endpoint_mcse_g"] = (1000*endpoint_mcse).tolist()
        diagnostics["predictive_interval_method"] = "weighted Student CDF inversion; root tolerance 1e-11 kg"
        diagnostics["method"] = "30000 independent proposal draws; self-normalised importance weights"
    diagnostics["random_streams"] = {"root_seed": seed, "child_spawn_keys": {
        "proposal": list(proposal_stream.spawn_key), "posterior_check": list(checking_stream.spawn_key),
        "prior_check": list(prior_stream.spawn_key)}}
    chosen = samples[rng.choice(len(samples), size=4000, p=weights)]
    residual = y-chosen@x.T
    replicate_residual = (rng.normal(0, .4, residual.shape) if family == "gaussian"
                          else rng.standard_t(4, residual.shape)*.4/np.sqrt(2))
    ppc_max = np.mean(np.max(abs(replicate_residual), axis=1) >= np.max(abs(residual), axis=1))
    ppc_sd = np.mean(np.std(replicate_residual, axis=1) >= np.std(residual, axis=1))
    prior_beta = prior_rng.normal(0, prior_sd, size=(4000, 4))
    prior_noise = (prior_rng.normal(0, .4, (4000, len(x))) if family == "gaussian"
                   else prior_rng.standard_t(4, (4000, len(x)))*.4/np.sqrt(2))
    prior_y = 1000*(4+prior_beta@x.T+prior_noise)
    group_residuals = {s: float(1000*np.mean((y-x@mean)[d["species"] == s]))
                       for s in sorted(set(d["species"]))}
    summary = dict(family=family, prior_multiplier=prior_multiplier,
                   coefficient_mean_kg=mean.tolist(), diagnostics=diagnostics,
                   holdout_mean_log_score_per_gram=float(log_scores.mean()),
                   holdout_rmse_g=float(1000*np.sqrt(np.mean((heldout-predictive_mean)**2))),
                   holdout_coverage90=float(np.mean((heldout >= intervals[:, 0]) & (heldout <= intervals[:, 1]))),
                   holdout_mean_interval_width_g=float(1000*np.mean(intervals[:, 1]-intervals[:, 0])),
                   holdout_prediction_g=(1000*(4+predictive_mean)).tolist(),
                   holdout_ci90_g=(1000*(4+intervals)).tolist(),
                   ppc_max_absolute_residual_tail=float(ppc_max), ppc_residual_sd_tail=float(ppc_sd),
                   observed_residual_sd_g=float(1000*np.std(y-x@mean, ddof=1)),
                   mean_residual_g_by_species=group_residuals,
                   prior_prediction_g_ci90=np.quantile(prior_y, [.05, .95]).tolist(),
                   prior_probability_negative_mass=float(np.mean(prior_y < 0)))
    return summary, fitted


# %% [markdown]
# ## 6 · Compare sensitivity and independent references
# Keep eligibility, units and holdout roles fixed. Predict how changing a prior width differs from changing residual tails. Check endpoint precision as well as mean precision.
# %%
def compute(seed: int = DEFAULT_SEED) -> dict:
    d = load_design()
    gaussian, _ = summarize(d, "gaussian", 1, seed)
    student, fit = summarize(d, "student", 1, seed+1)
    # Independent integration benchmark: Gaussian target has an exact answer.
    prior_sd = np.array([1.5, .8, .8, .8])
    benchmark = importance_fit(d["x"], d["y"], prior_sd, seed+2, "gaussian")
    exact_mean, exact_cov = gaussian_posterior(d["x"], d["y"], prior_sd)
    repeat = importance_fit(d["x"], d["y"], prior_sd, seed+3)
    # Endpoint precision is checked separately from coefficient-mean precision.
    probe = np.array([0, len(d["new"])//2, len(d["new"])-1])
    repeated_q, repeated_se = predictive_quantiles(repeat["samples"], repeat["weights"], d["new"][probe])
    primary_q = np.asarray(student["holdout_ci90_g"])[probe]/1000-4
    primary_se = np.asarray(student["diagnostics"]["predictive_endpoint_mcse_g"])[probe]/1000
    endpoint_z = abs(primary_q-repeated_q)/np.sqrt(primary_se**2+repeated_se**2)
    checks = [check("gaussian_importance_max_standard_errors", np.max(abs(
        benchmark["mean"]-exact_mean)/benchmark["mean_mcse"]), 0, atol=6),
        check("student_repeat_max_standard_errors", np.max(abs(fit["mean"]-repeat["mean"])/np.sqrt(
            fit["mean_mcse"]**2+repeat["mean_mcse"]**2)), 0, atol=6),
        check("student_ess_shortfall_below_1000", max(0, 1000-fit["importance_ess"]), 0),
        check("student_weight_excess_over_0.01", max(0, fit["max_weight"]-.01), 0),
        check("student_predictive_endpoint_repeat_max_standard_errors", np.max(endpoint_z), 0, atol=6)]
    # Independently condition the joint Gaussian (coefficient, observations).
    prior_cov = np.diag(prior_sd**2)
    cross = prior_cov@d["x"].T
    joint_cov = d["x"]@cross+.16*np.eye(len(d["y"]))
    conditioned = cross@np.linalg.solve(joint_cov, d["y"])
    checks.append(check("joint_gaussian_mean", np.max(abs(conditioned-exact_mean)), 0, atol=1e-9))
    sensitivity = []
    for family, scale in [("gaussian", .5), ("gaussian", 2.), ("student", .5), ("student", 2.)]:
        summary, _ = summarize(d, family, scale, seed+10+len(sensitivity))
        sensitivity.append({k: summary[k] for k in ["family", "prior_multiplier", "holdout_mean_log_score_per_gram",
                            "holdout_rmse_g", "holdout_mean_interval_width_g", "diagnostics"]})
    strict_d = load_design(require_sex=True)
    strict, _ = summarize(strict_d, "gaussian", 1, seed+20)
    return envelope(STEM, seed, "Exact Gaussian regression and Student-t importance integration",
                    {"predictors": list(PREDICTORS), "training_years": [2007, 2008], "holdout_year": 2009,
                     "training_centres_mm": d["centre"].tolist(), "training_scales_mm": d["scale"].tolist(),
                     "response": "body_mass_g/1000 - 4", "prior_sd_kg": prior_sd.tolist(),
                     "gaussian_residual_sd_kg": .4, "student_df": 4, "student_residual_scale_kg": .4/np.sqrt(2),
                     "importance_draws": 30000,
                     "rng_ownership": "Each scenario seed spawns proposal=0, posterior_check=1, prior_check=2"},
                    {"raw_rows": d["n_raw"], "missing_by_column": d["missing"], "excluded_required_measurements": d["excluded"],
                     "training_rows": len(d["y"]), "holdout_rows": len(d["heldout"]),
                     "gaussian": gaussian, "student": student, "prior_sensitivity": sensitivity,
                     "complete_sex_sensitivity": {"excluded": strict_d["excluded"], "training_rows": len(strict_d["y"]),
                         "holdout_rows": len(strict_d["heldout"]), "holdout_rmse_g": strict["holdout_rmse_g"],
                         "holdout_mean_log_score_per_gram": strict["holdout_mean_log_score_per_gram"]},
                     "student_repeat_coefficient_mean_kg": repeat["mean"].tolist(),
                     "endpoint_repeat_check": {"holdout_indices": probe.tolist(),
                         "difference_g": (1000*(primary_q-repeated_q)).tolist(),
                         "combined_mcse_g": (1000*np.sqrt(primary_se**2+repeated_se**2)).tolist()}}, checks,
                    ["Prediction is restricted to populations resembling sampled adults and measured predictor support.",
                     "Residual scales and Student degrees of freedom are fixed sensitivity assumptions.",
                     "Independent errors ignore possible nest/year dependence; no grouping invented from row order.",
                     "Importance ESS is not MCMC ESS; repeats do not certify all posterior tails.",
                     "Robust intervals invert a weighted predictive CDF; endpoint MCSE estimates only importance integration error."],
                    inputs=("data/penguins.csv", "data/provenance.json", "data/PENGUINS_LICENSE.md"))


# %% [markdown]
# ## 7 · Read the evidence and communicate
# After execution, use the compact summaries and figure to write a recommendation. State the model’s systematic species residuals and limited transport population. Do not choose a model from RMSE alone.
# %%
def main() -> None:
    result = compute(); d = load_design(); m = result["metrics"]
    print(f"Eligibility: {m['raw_rows']} raw, {m['training_rows']} training, {m['holdout_rows']} held out; scaling uses training only.")
    for family in ('gaussian', 'student'):
        row = m[family]
        print(f"{family}: prior negative-mass probability {row['prior_probability_negative_mass']:.3f}; prior central 90% mass range (g) {np.round(row['prior_prediction_g_ci90']).tolist()}")
        print(f"  Inference: coefficients (kg) {np.round(row['coefficient_mean_kg'], 4).tolist()}")
        print(f"  Held out: RMSE {row['holdout_rmse_g']:.1f} g, coverage {row['holdout_coverage90']:.3f}, mean interval width {row['holdout_mean_interval_width_g']:.1f} g")
        print(f"  Criticism: mean residuals by species (g) {row['mean_residual_g_by_species']}")
    print("Predictive endpoint importance MCSE range (g):", np.round([
        np.min(m['student']['diagnostics']['predictive_endpoint_mcse_g']),
        np.max(m['student']['diagnostics']['predictive_endpoint_mcse_g'])], 3).tolist())
    print("Sensitivity (family, prior multiplier, RMSE g):", [(r['family'], r['prior_multiplier'], round(r['holdout_rmse_g'], 1)) for r in m['prior_sensitivity']])
    print("Independent numerical checks:", [(c['id'], c['passed']) for c in result['checks']])
    observed = 1000*(4+d["heldout"])
    fig, axes = plt.subplots(1, 2, figsize=(10, 4), sharex=True, sharey=True)
    for ax, family in zip(axes, ["gaussian", "student"]):
        prediction = np.array(m[family]["holdout_prediction_g"])
        ci = np.array(m[family]["holdout_ci90_g"])
        ax.vlines(observed, ci[:, 0], ci[:, 1], alpha=.25)
        ax.scatter(observed, prediction, s=12)
        ax.plot([2500, 6500], [2500, 6500], "k--", lw=1)
        ax.set(xlabel="Observed 2009 mass (g)", title=family.capitalize())
    axes[0].set_ylabel("Predicted mass (g), central 90% interval")
    fig.suptitle("Earlier-year training; fixed residual SD 400 g; marginal intervals")
    save_figure(STEM); save_result(STEM, result, verbose=False)


if __name__ == "__main__":
    main()
# %% [markdown]
# **Investigate:** propose a species-aware model using only training information.
# Reserve a genuinely new validation set before using its results to choose models.
