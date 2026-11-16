"""Small shared numerical and output helpers; model code lives in each lab."""
import json
import os
import re
from html import escape
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
os.environ.setdefault("MPLCONFIGDIR", str(ROOT / ".cache" / "matplotlib"))
os.environ.setdefault("PYTENSOR_FLAGS", f"base_compiledir={ROOT / '.cache' / 'pytensor'}")
os.environ.setdefault("NUMBA_CACHE_DIR", str(ROOT / ".cache" / "numba"))
os.environ.setdefault("MPLBACKEND", "Agg")

import matplotlib.pyplot as plt
import numpy as np
from scipy.special import logsumexp

plt.rcParams.update({"figure.dpi": 130, "svg.fonttype": "none", "axes.spines.top": False,
                     "axes.spines.right": False, "axes.prop_cycle":
                     plt.cycler(color=["#087f8c", "#d47c45", "#6254a3", "#648b45"])})


def save_figure(name):
    folder = ROOT / "artifacts" / "figures"
    folder.mkdir(parents=True, exist_ok=True)
    plt.tight_layout()
    plt.savefig(folder / f"{name}.svg", bbox_inches="tight")
    registry = json.loads((ROOT / 'llm/teaching.json').read_text())
    figures = [f for item in registry['lessons'] + registry['readings']
               for f in item.get('figures', []) if Path(f['path']).stem == name]
    if figures:
        figure = figures[0]
        path = folder / f'{name}.svg'
        svg = path.read_text()
        semantics = (f' role="img" aria-labelledby="{name}-title {name}-description">'
                     f'<title id="{name}-title">{escape(figure["alt"])}</title>'
                     f'<desc id="{name}-description">{escape(figure.get("description", figure["alt"]))}</desc>')
        svg = re.sub(r'(<svg\b[^>]*?)>', lambda m: m[1] + semantics, svg, count=1)
        path.write_text(svg)
    from IPython import get_ipython
    if get_ipython() is not None:
        from IPython.display import SVG, display
        display(SVG(filename=str(folder / f"{name}.svg")))
    plt.close()


def save_result(name, result, *, verbose=True):
    folder = ROOT / "artifacts" / "results"
    folder.mkdir(parents=True, exist_ok=True)
    text = json.dumps(result, indent=2, allow_nan=False)
    (folder / f"{name}.json").write_text(text + "\n")
    if verbose:
        print(text)


def data(name):
    return np.genfromtxt(ROOT / "data" / name, delimiter=",", names=True)


def normalise_log_weights(log_weights):
    values = np.asarray(log_weights, dtype=float)
    if np.any(np.isnan(values)) or np.any(np.isposinf(values)) or not np.any(np.isfinite(values)):
        raise ValueError("Log weights must contain finite mass and no NaN or positive infinity")
    return np.exp(values - logsumexp(values))


def beta_update(alpha, beta, successes, trials):
    if not (np.isfinite(alpha) and np.isfinite(beta) and alpha > 0 and beta > 0):
        raise ValueError("Beta shape parameters must be positive and finite")
    if not (isinstance(successes, (int, np.integer)) and isinstance(trials, (int, np.integer))
            and 0 <= successes <= trials):
        raise ValueError("Require integer counts with 0 <= successes <= trials")
    return alpha + successes, beta + trials - successes


def normal_update(prior_mean, prior_sd, observation_sd, observations):
    y = np.asarray(observations, dtype=float)
    if (not np.all(np.isfinite([prior_mean, prior_sd, observation_sd]))
            or prior_sd <= 0 or observation_sd <= 0 or y.ndim != 1 or not np.all(np.isfinite(y))):
        raise ValueError("Require positive standard deviations and finite 1D observations")
    variance = 1 / (1 / prior_sd**2 + len(y) / observation_sd**2)
    mean = variance * (prior_mean / prior_sd**2 + y.sum() / observation_sd**2)
    return float(mean), float(np.sqrt(variance))


def metropolis(log_density, initial, proposal_sd, draws, rng):
    """Symmetric Gaussian random walk; rejected steps must remain in the chain."""
    if proposal_sd <= 0 or draws < 1:
        raise ValueError("Require positive proposal scale and number of draws")
    values = np.empty(draws)
    current = float(initial)
    current_logp = float(log_density(current))
    accepted = 0
    for i in range(draws):
        candidate = current + rng.normal(0, proposal_sd)
        proposed_logp = float(log_density(candidate))
        if np.log(rng.uniform()) < proposed_logp - current_logp:
            current, current_logp = candidate, proposed_logp
            accepted += 1
        values[i] = current
    return values, accepted / draws


def sample_model(seed=606):
    import pymc as pm
    return pm.sample(draws=1200, tune=1200, chains=4, cores=1,
                     random_seed=seed, target_accept=0.95, progressbar=False,
                     idata_kwargs={"log_likelihood": True})


def diagnostics(idata, variables):
    import arviz as az
    summary = az.summary(idata, var_names=variables, round_to="none")
    result = {
        "max_rhat": float(summary.r_hat.max()),
        "min_bulk_ess": float(summary.ess_bulk.min()),
        "min_tail_ess": float(summary.ess_tail.min()),
        "max_mcse_mean": float(summary.mcse_mean.max()),
        "divergences": int(idata.sample_stats.diverging.sum()),
        "min_bfmi": float(np.min(az.bfmi(idata))),
    }
    if "reached_max_treedepth" in idata.sample_stats:
        result["max_treedepth_hits"] = int(idata.sample_stats.reached_max_treedepth.sum())
    result["screen_passed"] = bool(result["max_rhat"] < 1.01
        and result["min_bulk_ess"] > 400 and result["min_tail_ess"] > 400
        and result["divergences"] == 0 and result["min_bfmi"] > 0.3)
    return result
