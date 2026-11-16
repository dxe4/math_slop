# %% [markdown]
# # E01: population targets with a learned pooling scale
# This executable reference lab contains worked results, not assessment keys.
# The chapter explains assumptions; the frozen JSON supplies all data and settings.
# Importing this file does not fit, render, read a file, or write a file.

# %%
from __future__ import annotations

import argparse
from copy import deepcopy
from hashlib import sha256
import json
from pathlib import Path
import time

import numpy as np
from scipy.integrate import quad_vec
from scipy.linalg import cho_factor, cho_solve
from scipy.stats import multivariate_normal

from extensions.next_revision_v1.models.gaussian_mrp import (
    conditional_gaussian, finite_population_summary, integrate_mrp,
    linear_summary, sample_mrp,
)


def precision_reference(spec: dict, tau: float) -> dict:
    """Independent coefficient-precision update and scipy density check (tau>0)."""
    d = spec["data"]
    x = np.asarray(d["cell_x"])
    h = np.column_stack([np.ones(len(x)), x, np.eye(len(x))])
    a = h[np.asarray(d["cell_index"], dtype=int)]
    prior_cov = np.zeros((len(x) + 2, len(x) + 2))
    prior_cov[:2, :2] = spec["priors"]["beta_cov"]
    prior_cov[2:, 2:] = tau**2 * np.eye(len(x))
    prior_mean = np.r_[spec["priors"]["beta_mean"], np.zeros(len(x))]
    prior_precision = cho_solve(cho_factor(prior_cov), np.eye(len(x) + 2))
    precision = prior_precision + a.T @ a / spec["known_quantities"]["sigma"]**2
    v = cho_solve(cho_factor(precision), np.eye(len(x) + 2))
    m = v @ (prior_precision @ prior_mean + a.T @ np.asarray(d["y"]) / spec["known_quantities"]["sigma"]**2)
    c = spec["known_quantities"]["sigma"]**2 * np.eye(len(a)) + a @ prior_cov @ a.T
    log_likelihood = multivariate_normal.logpdf(d["y"], mean=a @ prior_mean, cov=c)
    return dict(cell_mean=h @ m, cell_cov=h @ v @ h.T, theta_mean=m, theta_cov=v,
                log_likelihood=float(log_likelihood))


def moment_vector(fit: dict) -> np.ndarray:
    second = fit["cell_cov"] + np.outer(fit["cell_mean"], fit["cell_mean"])
    return np.r_[1, fit["tau_mean"], fit["tau_second"], fit["cell_mean"], second.ravel()]


def adaptive_reference(spec: dict, log_scale: float) -> tuple[np.ndarray, float, float]:
    """Integrate on tau directly, using a separate precision-space formulation."""
    scale = spec["priors"]["tau"]["scale"]
    def integrand(tau):
        # Underflowed prior tails contribute exactly zero at machine precision.
        log_prior = np.log(2 / np.pi) / 2 - np.log(scale) - 0.5 * (tau / scale)**2
        if log_prior - log_scale < -700:
            return np.zeros(3 + len(spec["data"]["cell_x"]) + len(spec["data"]["cell_x"])**2)
        ref = precision_reference(spec, tau)
        mass = np.exp(log_prior + ref["log_likelihood"] - log_scale)
        second = ref["cell_cov"] + np.outer(ref["cell_mean"], ref["cell_mean"])
        return mass * np.r_[1, tau, tau**2, ref["cell_mean"], second.ravel()]
    q = spec["quadrature"]["independent_adaptive"]
    value, error = quad_vec(integrand, 0, np.inf, epsabs=q["epsabs"], epsrel=q["epsrel"],
                            limit=q["limit"], workers=q["workers"])
    return value / value[0], float(np.log(value[0]) + log_scale), float(error)


def _check(name: str, method: str, reference: str, actual, expected, *, atol: float, rtol: float = 0) -> dict:
    error = np.abs(np.asarray(actual) - np.asarray(expected))
    allowed = atol + rtol * np.abs(expected)
    return dict(name=name, method=method, reference=reference, discrepancy=float(np.max(error)),
                tolerance=dict(atol=atol, rtol=rtol), passed=bool(np.all(error <= allowed)))


def _target(summary: dict, definition: str) -> dict:
    return {**summary, "definition": definition, "conditioning": "all 18 observed responses; fixed memberships, counts, sigma and priors",
            "units": "degrees Celsius", "method": "deterministic tau integration; Normal mixture CDF inversion"}


def compute(*, settings: dict, seed: int) -> dict:
    """Fit all prospectively specified scenarios; in-memory outputs only."""
    if seed != settings["seeds"]["posterior"]:
        raise ValueError("Use the frozen posterior seed; no seed search")
    start = time.perf_counter()
    orders = settings["quadrature"]["orders"]
    coarse, fit = [integrate_mrp(settings, order=o) for o in orders]
    tol = settings["tolerances"]
    checks = [_check("quadrature_refinement", "full-support Legendre moments", str(orders),
                     moment_vector(coarse), moment_vector(fit), atol=tol["moment_atol"], rtol=tol["moment_rtol"])]
    if not checks[-1]["passed"]:
        # This prospective fallback retains the failed lower-order check.
        previous = fit
        fit = integrate_mrp(settings, order=settings["quadrature"]["fallback_order"])
        checks.append(_check("fallback_refinement", "full-support Legendre moments", "384 vs 768",
                             moment_vector(previous), moment_vector(fit), atol=tol["moment_atol"], rtol=tol["moment_rtol"]))
    adaptive, log_evidence, adaptive_error = adaptive_reference(settings, fit["log_evidence"])
    checks.extend([
        _check("adaptive_moments", "quad_vec on tau; independent coefficient precision", "adaptive first/second moments", moment_vector(fit), adaptive, atol=tol["moment_atol"], rtol=tol["moment_rtol"]),
        _check("adaptive_log_evidence", "independent scipy density plus quad_vec", "adaptive normalizer", fit["log_evidence"], log_evidence, atol=tol["moment_atol"], rtol=tol["moment_rtol"]),
        _check("normalization", "sum normalized quadrature weights", "one", fit["weights"].sum(), 1, atol=tol["normalization_atol"]),
    ])
    d = settings["data"]
    fixed = conditional_gaussian(d["y"], d["cell_index"], d["cell_x"], sigma=settings["known_quantities"]["sigma"], tau=.75,
                                 beta_mean=settings["priors"]["beta_mean"], beta_cov=settings["priors"]["beta_cov"])
    ref = precision_reference(settings, .75)
    for name in ("theta_mean", "theta_cov", "log_likelihood"):
        checks.append(_check("fixed_scale_" + name, "observation space versus independent precision/scipy density", "tau=0.75",
                             fixed[name], ref[name], atol=tol["fixed_scale_atol"], rtol=tol["fixed_scale_rtol"]))
    n, counts = fit["sample_counts"], fit["counts"]
    w = counts / counts.sum()
    new_counts = np.asarray(settings["investigations"][0]["population_counts"])
    wp = new_counts / new_counts.sum()
    targets = {
        "population_parameter": _target(linear_summary(fit, w), "M=sum N_j mu_j/900"),
        "sample_composition": _target(linear_summary(fit, n / n.sum()), "sum n_j mu_j/18"),
        "finite_population": _target(finite_population_summary(fit, settings, counts=counts), "observed members fixed; predict 882 unobserved outcomes; divide total by 900"),
        "changed_population": _target(linear_summary(fit, wp), "M_prime with N_prime=(80,120,100,180,120,300); same posterior"),
        "changed_contrast": _target(linear_summary(fit, wp - w), "M_prime-M using paired joint cells"),
        "individual_empty_cell": _target(linear_summary(fit, np.eye(len(w))[-1], residual_variance=settings["known_quantities"]["sigma"]**2), "new individual outcome in cell C/1"),
    }
    for name, weight in (("population", w), ("sample", n/n.sum()), ("changed", wp), ("contrast", wp-w)):
        checks.append(_check(name + "_interval_refinement", "integrated CDF inversion at both orders", "192 vs final order",
                             linear_summary(coarse, weight)["interval"], linear_summary(fit, weight)["interval"],
                             atol=tol["moment_atol"], rtol=tol["moment_rtol"]))
    cells = [linear_summary(fit, np.eye(len(w))[j]) for j in range(len(w))]
    sensitivity_spec = deepcopy(settings)
    sensitivity_spec["priors"]["tau"]["scale"] = settings["investigations"][2]["tau_prior_scale"]
    sensitivity = integrate_mrp(sensitivity_spec, order=orders[-1])
    sensitivity_low = integrate_mrp(sensitivity_spec, order=orders[0])
    sa, se, serr = adaptive_reference(sensitivity_spec, sensitivity["log_evidence"])
    checks.extend([
        _check("prior_sensitivity_refinement", "Legendre moments", "192 vs 384", moment_vector(sensitivity_low), moment_vector(sensitivity), atol=tol["moment_atol"], rtol=tol["moment_rtol"]),
        _check("prior_sensitivity_adaptive", "quad_vec independent precision", "adaptive moments", moment_vector(sensitivity), sa, atol=tol["moment_atol"], rtol=tol["moment_rtol"]),
        _check("prior_sensitivity_evidence", "quad_vec independent density", "adaptive log normalizer", sensitivity["log_evidence"], se, atol=tol["moment_atol"], rtol=tol["moment_rtol"]),
    ])
    draws = sample_mrp(fit, rng=np.random.default_rng(seed), size=settings["draw_count"])
    mu = draws["cell_mean"]
    finite_draw = (sum(d["y"]) + mu @ (counts-n)) / counts.sum()
    finite_draw += np.random.default_rng(settings["seeds"]["predictive"]).normal(0, np.sqrt(targets["finite_population"]["residual_variance"]), len(mu))
    samples = dict(population_parameter=mu @ w, changed_population=mu @ wp,
                   changed_contrast=mu @ (wp-w), sample_composition=mu @ (n/n.sum()),
                   finite_population=finite_draw, tau=draws["tau"])
    draw_summaries = {}
    for name, values in samples.items():
        mean = float(values.mean())
        mcse = float(values.std(ddof=1) / np.sqrt(len(values)))
        expected = fit["tau_mean"] if name == "tau" else targets[name]["mean"]
        draw_summaries[name] = dict(mean=mean, mcse=mcse, discrepancy=abs(mean-expected), size=len(values), method="independent joint draws from quadrature mixture")
        checks.append(_check("draw_" + name, "independent draws", "deterministic mean; six MCSE", mean, expected,
                             atol=6*mcse + tol["moment_atol"]))
    metrics = dict(raw_sample_mean=float(np.mean(d["y"])), counts=counts, sample_counts=n, cell_x=d["cell_x"],
                   raw_cell_means=[float(np.mean(v)) if v else None for v in d["responses_by_cell"]],
                   cell_summaries=cells, cell_covariance=fit["cell_cov"], within_scale_covariance=fit["within_cov"],
                   between_scale_covariance=fit["between_cov"], tau_mean=fit["tau_mean"],
                   tau_sd=float(np.sqrt(fit["tau_second"]-fit["tau_mean"]**2)), tau_prior_mean=float(np.sqrt(2/np.pi)),
                   log_evidence=fit["log_evidence"], adaptive_error_estimate=adaptive_error,
                   selected_order=fit["order"], draw_summaries=draw_summaries,
                   diagonal_only_population_variance=float(w**2 @ np.diag(fit["cell_cov"])),
                   population_changed_covariance=float(w @ fit["cell_cov"] @ wp),
                   empty_cell_changed_mean_contribution=float((wp[-1]-w[-1])*fit["cell_mean"][-1]),
                   selection_shift=settings["investigations"][1]["unsampled_shift"]*(counts.sum()-n.sum())/counts.sum(),
                   prior_sensitivity=dict(scale=sensitivity_spec["priors"]["tau"]["scale"], tau_mean=sensitivity["tau_mean"],
                       population_parameter=linear_summary(sensitivity, w), empty_cell=linear_summary(sensitivity, np.eye(len(w))[-1]), adaptive_error_estimate=serr),
                   elapsed_seconds=time.perf_counter()-start)
    return dict(targets=targets, checks=checks, metrics=metrics, draws=draws)

# %% [markdown]
# Exact integration supplies the main results. Independent draws check propagation
# through the population weights; their error is reported separately from quadrature.
# Rendering uses only the computed result, with equivalent tables in the chapter.

# %%
def render(result: dict, *, output_dir: Path) -> list[Path]:
    """Render two original figures from measured JSON-compatible summaries."""
    import matplotlib
    matplotlib.use("Agg")
    import matplotlib.pyplot as plt
    output_dir.mkdir(parents=True, exist_ok=True)
    m = result["metrics"]
    labels = ["A/0", "A/1", "B/0", "B/1", "C/0", "C/1 (empty)"]
    pos = np.arange(6)
    fig, axes = plt.subplots(1, 2, figsize=(11, 4.6), layout="constrained")
    axes[0].barh(pos-.18, np.asarray(m["sample_counts"])/18, height=.35, label="Sample", color="#286c8e")
    axes[0].barh(pos+.18, np.asarray(m["counts"])/900, height=.35, label="Population", color="#ca6c26")
    axes[0].set(yticks=pos, yticklabels=labels, xlabel="Proportion", title="Composition changes the question")
    axes[0].legend()
    means = np.array([c["mean"] for c in m["cell_summaries"]])
    bounds = np.array([c["interval"] for c in m["cell_summaries"]])
    axes[1].errorbar(means, pos, xerr=np.array([means-bounds[:,0], bounds[:,1]-means]), fmt="o", color="#286c8e", label="Posterior mean and 90% interval")
    axes[1].scatter([v if v is not None else np.nan for v in m["raw_cell_means"]], pos, marker="x", color="#ca6c26", label="Observed cell mean")
    axes[1].set(yticks=pos, yticklabels=labels, xlabel="Temperature deviation (°C)", title="Empty does not mean zero")
    axes[1].legend(loc="upper center", bbox_to_anchor=(0.5, -0.18), fontsize=8)
    paths = []
    for suffix in ("svg", "png"):
        path = output_dir / f"E01_01.{suffix}"
        fig.savefig(path, dpi=150)
        paths.append(path)
    plt.close(fig)
    names = ["sample_composition", "population_parameter", "finite_population", "changed_population", "changed_contrast"]
    labels = ["Sample composition", "Population parameter M", "Realised finite population", "Changed population M′", "Paired contrast M′ − M"]
    summaries = [result["targets"][k] for k in names]
    fig, axes = plt.subplots(1, 2, figsize=(11, 4.6), layout="constrained")
    means = np.array([s["mean"] for s in summaries])
    bounds = np.array([s["interval"] for s in summaries])
    axes[0].errorbar(means, range(5), xerr=[means-bounds[:,0],bounds[:,1]-means], fmt="o", color="#286c8e")
    axes[0].axvline(m["raw_sample_mean"], ls=":", color="#ca6c26", label="Observed sample mean")
    axes[0].set(yticks=range(5), yticklabels=labels, xlabel="Temperature deviation (°C)", title="Means and central 90% intervals")
    axes[0].legend(loc="upper center", bbox_to_anchor=(0.5, -0.18), fontsize=8)
    left = np.zeros(5)
    for key, label, color in [("within_scale_variance", "Conditional on scale", "#286c8e"), ("between_scale_variance", "Across scale means", "#ca6c26"), ("residual_variance", "Unobserved outcomes", "#777777")]:
        values = np.array([s[key] for s in summaries])
        axes[1].barh(range(5), values, left=left, label=label, color=color)
        left += values
    axes[1].set(yticks=range(5), yticklabels=[], xlabel="Variance (°C²)", title="Sources of target uncertainty")
    axes[1].legend(loc="upper center", bbox_to_anchor=(0.5, -0.18), fontsize=8)
    for suffix in ("svg", "png"):
        path = output_dir / f"E01_02.{suffix}"
        fig.savefig(path, dpi=150)
        paths.append(path)
    plt.close(fig)
    return paths


def _json_value(value):
    if isinstance(value, np.ndarray):
        return value.tolist()
    if isinstance(value, np.generic):
        return value.item()
    raise TypeError(f"Cannot serialize {type(value).__name__}")


def run(*, spec_path: Path, output_dir: Path, run_id: str) -> dict:
    """Explicit file boundary, shared by CLI and fresh-kernel notebook."""
    extension = Path(__file__).resolve().parents[1]
    root = extension.parents[1]
    output_dir = output_dir.resolve()
    if not output_dir.is_relative_to(extension):
        raise ValueError("Output directory must remain inside extension")
    settings = json.loads(spec_path.read_text())
    result = compute(settings=settings, seed=settings["seeds"]["posterior"])
    draws = result.pop("draws")
    inputs = [spec_path.resolve(), Path(__file__).resolve(), extension / "models/gaussian_mrp.py", extension / "evidence/environment.json"]
    result.update(schema_version=1, module_id="E01", status="measured",
                  specification=dict(path=str(spec_path.resolve().relative_to(extension)), sha256=sha256(spec_path.read_bytes()).hexdigest()),
                  settings=dict(quadrature=settings["quadrature"], draw_count=settings["draw_count"], interval_probabilities=settings["interval_probabilities"], tolerances=settings["tolerances"]),
                  seeds=settings["seeds"],
                  figures=[dict(path="outputs/figures/E01_01.svg", alt="Sample and population proportions differ; the empty cell retains broad posterior uncertainty.", equivalent="Chapter cell table and metrics.cell_summaries in E01.json"),
                           dict(path="outputs/figures/E01_02.svg", alt="Population targets are higher and less precise than the sample-composition mean; contrast uses paired cells.", equivalent="Chapter target and variance tables; targets in E01.json")],
                  provenance=dict(input_hashes={str(p.relative_to(root)): dict(sha256=sha256(p.read_bytes()).hexdigest(), size=p.stat().st_size) for p in inputs}, run_ids=[run_id]),
                  limitations=["Continuous Gaussian outcome; known residual SD; no fitted logistic MRP.", "Within-cell selection independence and exchangeable cell effects are assumed.", "Known population counts; no census-count uncertainty or spatial/district correlation.", "An empty sampled cell is extrapolated through priors/regression; no local response evidence."])
    for directory in ("results", "draws", "figures"):
        (output_dir / directory).mkdir(parents=True, exist_ok=True)
    (output_dir / "results/E01.json").write_text(json.dumps(result, default=_json_value, indent=2, allow_nan=False) + "\n")
    np.savez_compressed(output_dir / "draws/E01.npz", **draws)
    render(result, output_dir=output_dir / "figures")
    print(json.dumps({"population_parameter": result["targets"]["population_parameter"], "checks": result["checks"]}, default=_json_value, indent=2))
    if not all(c["passed"] for c in result["checks"]):
        raise ArithmeticError("Scientific check failed; preserve result and command evidence")
    return result


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--spec", type=Path, required=True)
    parser.add_argument("--output-dir", type=Path, required=True)
    parser.add_argument("--run-id", required=True)
    args = parser.parse_args()
    run(spec_path=args.spec, output_dir=args.output_dir, run_id=args.run_id)


if __name__ == "__main__":
    main()
