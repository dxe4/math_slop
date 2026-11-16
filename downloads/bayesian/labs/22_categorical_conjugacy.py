# %% [markdown]
# # Lab 22 — Categorical updating and prediction
# A fictional repair service classifies each completed job, after seven days,
# as resolved, revisit, or replacement. Categories are exhaustive and mutually
# exclusive: a replacement takes precedence over a revisit. Eight comparable
# jobs have counts (5, 3, 0). Start with Dirichlet(2, 1, 1) and predict three
# more jobs under the same operating conditions. No external data are used.
#
# Read A08 first. Predict whether zero replacements implies zero future risk,
# and whether drawing a fresh probability vector for each job changes the law.
# %%
from collections import defaultdict
from collections.abc import Sequence
from fractions import Fraction
from itertools import permutations, product
from math import comb
from numbers import Real

from common import ROOT, np, plt, save_figure, save_result
from extension_common import check, envelope
from scipy import stats
from scipy.special import gammaln

STEM = "22_categorical_conjugacy"
DEFAULT_SEED = 2222
LABELS = ("Resolved", "Revisit", "Replacement")
FIGURE_TITLE = "Three future repairs: joint counts and replacement risk"
FIGURE_DESCRIPTION = (
    "Left: all ten count vectors in resolved, revisit, replacement order, with "
    "Dirichlet-multinomial probabilities from posterior (7, 4, 1). The most likely "
    "vector is (2, 1, 0), probability 4/13. Right: replacement counts 0 to 3 under "
    "shared uncertainty and a plug-in binomial. Shared probabilities are 11/14, "
    "33/182, 11/364, 1/364. At least one replacement has probability 3/14; the "
    "plug-in value is 397/1728. Labels, outlines and hatching distinguish models."
)


def _alpha(values: Sequence[float]) -> np.ndarray:
    raw = np.asarray(values, dtype=object)
    if raw.ndim != 1 or any(isinstance(x, (bool, np.bool_)) or not isinstance(x, Real) for x in raw):
        raise ValueError("Shapes must be a vector of real numbers, not booleans or strings")
    a = np.asarray(raw, dtype=float)
    if (a.ndim != 1 or a.size < 2 or not np.all(np.isfinite(a))
            or np.any(a <= 0) or not np.isfinite(a.sum())):
        raise ValueError("Require at least two positive finite Dirichlet shapes")
    return a


def _nonnegative_integer(value: int, name: str) -> int:
    if isinstance(value, (bool, np.bool_)) or not isinstance(value, (int, np.integer)) or value < 0:
        raise ValueError(f"{name} must be a nonnegative integer, not a boolean")
    return int(value)


def _counts(values: Sequence[int], size: int) -> np.ndarray:
    # Object conversion retains booleans in mixed lists so True cannot become 1.
    raw = np.asarray(values, dtype=object)
    if raw.ndim != 1 or raw.size != size:
        raise ValueError("Counts must be a vector matching the shapes")
    integers = [_nonnegative_integer(x, "count") for x in raw]
    if sum(integers) > np.iinfo(np.int64).max:
        raise ValueError("Count total exceeds supported int64 range")
    return np.array(integers, dtype=np.int64)


# %% [markdown]
# ## Implement the normalizer, update and moments
# B(a) = product Gamma(a_j) / Gamma(sum a_j). Work on the log scale.
# For mean vector q=a/A, covariance is (diag(q)-q q')/(A+1).
# This singular covariance has row sums zero because probabilities sum to one.
# %%
def log_multivariate_beta(alpha: Sequence[float]) -> float:
    """Log simplex integral B(alpha), for strictly positive shapes."""
    a = _alpha(alpha)
    value = float(gammaln(a).sum() - gammaln(a.sum()))
    if not np.isfinite(value):
        raise ValueError("Shapes exceed the numerical range of the log normalizer")
    return value


def posterior_update(alpha: Sequence[float], counts: Sequence[int]) -> np.ndarray:
    """Update one common categorical vector with nonnegative integer counts."""
    a = _alpha(alpha)
    return _alpha(a + _counts(counts, len(a)))


def dirichlet_moments(alpha: Sequence[float]) -> tuple[np.ndarray, np.ndarray]:
    a = _alpha(alpha)
    q = a / a.sum()
    return q, (np.diag(q) - np.outer(q, q)) / (a.sum() + 1)


def predictive_moments(alpha: Sequence[float], n: int) -> tuple[np.ndarray, np.ndarray]:
    """Mean and full covariance of n future counts sharing one random vector."""
    n = _nonnegative_integer(n, "n")
    a = _alpha(alpha)
    q, covariance = dirichlet_moments(a)
    return n*q, n*(a.sum()+n)*covariance


def predictive_logpmf(counts: Sequence[int], alpha: Sequence[float]) -> float:
    """Dirichlet-multinomial log mass; n is the sum of the count vector."""
    a = _alpha(alpha)
    c = _counts(counts, len(a))
    # Convert before adding one: int64 addition can wrap at its maximum.
    return float(gammaln(float(c.sum())+1) - gammaln(c.astype(float)+1).sum()
                 + log_multivariate_beta(a+c) - log_multivariate_beta(a))


def count_vectors(n: int, categories: int) -> list[tuple[int, ...]]:
    """All weak compositions in lexicographic order; intended for small n and K."""
    n = _nonnegative_integer(n, "n")
    categories = _nonnegative_integer(categories, "categories")
    if categories < 2:
        raise ValueError("Require at least two categories")

    def compositions(total: int, k: int) -> list[tuple[int, ...]]:
        if k == 1:
            return [(total,)]
        return [(first, *rest) for first in range(total+1)
                for rest in compositions(total-first, k-1)]

    return compositions(n, categories)


# %% [markdown]
# ## An independent exact reference
# Enumerate ordered jobs, using each previous job as one additional count in
# the next predictive probability. Fractions keep every path exact. This uses
# neither Gamma functions nor the count-vector generator nor SciPy's PMF.
# It is deliberately a tiny fixture (3**3 paths), not a large-n algorithm.
# %%
def exact_three_job_reference() -> dict[tuple[int, int, int], Fraction]:
    masses = defaultdict(Fraction)
    for sequence in product(range(3), repeat=3):
        seen = [0, 0, 0]
        probability = Fraction(1)
        for t, category in enumerate(sequence):
            probability *= Fraction((7, 4, 1)[category] + seen[category], 12+t)
            seen[category] += 1
        masses[tuple(seen)] += probability
    return dict(masses)


def _array_checks(name: str, actual: np.ndarray, expected: np.ndarray) -> list[dict]:
    return [check(f"{name}.{'.'.join(map(str, index))}", actual[index], expected[index])
            for index in np.ndindex(actual.shape)]


def _invariance_checks(prior: np.ndarray, observed: np.ndarray,
                       posterior: np.ndarray, vectors: np.ndarray,
                       probabilities: np.ndarray) -> list[dict]:
    checks = []
    sequential = prior.copy()
    for category in (0, 1, 0, 0, 1, 0, 1, 0):
        one = np.zeros(3, dtype=int)
        one[category] = 1
        sequential = posterior_update(sequential, one)
    checks.extend(_array_checks("sequential_batch_shapes", sequential, posterior))
    checks.extend(_array_checks("split_batch_shapes",
                               posterior_update(posterior_update(prior, [2, 1, 0]), [3, 2, 0]), posterior))
    for permutation in permutations(range(3)):
        p = list(permutation)
        name = "relabel_" + "".join(map(str, p))
        checks.extend(_array_checks(name+".update", posterior_update(prior[p], observed[p]), posterior[p]))
        mean, cov = dirichlet_moments(posterior[p])
        original_mean, original_cov = dirichlet_moments(posterior)
        checks.extend(_array_checks(name+".mean", mean, original_mean[p]))
        checks.extend(_array_checks(name+".covariance", cov, original_cov[np.ix_(p, p)]))
        relabelled = np.array([np.exp(predictive_logpmf(v[p], posterior[p])) for v in vectors])
        checks.extend(_array_checks(name+".prediction", relabelled, probabilities))
    return checks


def _aggregation_checks(vectors: np.ndarray, probabilities: np.ndarray,
                        posterior: np.ndarray) -> list[dict]:
    checks = []
    # Every nonempty proper subset of the three categories is checked.
    for mask in range(1, 7):
        selected = [j for j in range(3) if mask & (1 << j)]
        successes = vectors[:, selected].sum(axis=1)
        a = posterior[selected].sum()
        b = posterior.sum() - a
        for k in range(4):
            aggregated = probabilities[successes == k].sum()
            checks.append(check(f"aggregate_{mask}.count_{k}", aggregated,
                                stats.betabinom.pmf(k, 3, a, b)))
            checks.append(check(f"two_category_{mask}.count_{k}",
                                np.exp(predictive_logpmf([k, 3-k], [a, b])), aggregated))
    return checks


# %% [markdown]
# ## Compute the worked example and disclose the comparison model
# The plug-in model fixes theta at the posterior mean. Redrawing theta for
# every job has the same marginal law as that plug-in model. Drawing it once
# for all three jobs preserves shared uncertainty and gives different tails.
# For two separate groups of three jobs, shared-theta count covariance is
# 3*3*Cov(theta); independent batch vectors with fixed hyperparameters give 0.
# %%
def compute(seed: int = DEFAULT_SEED) -> dict:
    """Pure deterministic calculation (apart from reading source hashes); no writes."""
    seed = _nonnegative_integer(seed, "seed")
    prior, observed = np.array([2., 1., 1.]), np.array([5, 3, 0])
    posterior = posterior_update(prior, observed)
    mean, covariance = dirichlet_moments(posterior)
    count_mean, count_covariance = predictive_moments(posterior, 3)
    vectors = np.array(count_vectors(3, 3))
    probabilities = np.array([np.exp(predictive_logpmf(v, posterior)) for v in vectors])
    exact = exact_three_job_reference()
    ref_probabilities = np.array([float(exact[tuple(v)]) for v in vectors])
    ref_mean = ref_probabilities @ vectors
    centered = vectors - ref_mean
    ref_covariance = centered.T @ (ref_probabilities[:, None]*centered)
    replacement = np.array([probabilities[vectors[:, 2] == k].sum() for k in range(4)])
    plugin = stats.binom.pmf(np.arange(4), 3, mean[2])
    checks = [check("count_vectors", len(vectors), comb(5, 2)),
              check("ordered_reference_states", len(exact), 10),
              check("exact_normalization", float(sum(exact.values())), 1),
              check("normalization", probabilities.sum(), 1),
              check("replacement_at_least_one", replacement[1:].sum(), 3/14),
              check("replacement_none_beta_ratio", replacement[0], 11/14),
              check("replacement_plugin", plugin[1:].sum(), 397/1728),
              check("prior_log_normalizer", log_multivariate_beta(prior), -np.log(6)),
              check("posterior_log_normalizer", log_multivariate_beta(posterior), -np.log(9240))]
    checks.extend(_array_checks("posterior_shapes", posterior, np.array([7., 4., 1.])))
    checks.extend(_array_checks("pmf_exact_paths", probabilities, ref_probabilities))
    checks.extend(_array_checks("pmf_scipy", probabilities, stats.dirichlet_multinomial.pmf(vectors, posterior, 3)))
    checks.extend(_array_checks("theta_mean_scipy", mean, stats.dirichlet.mean(posterior)))
    checks.extend(_array_checks("theta_covariance_scipy", covariance, stats.dirichlet.cov(posterior)))
    checks.extend(_array_checks("count_mean_enumeration", count_mean, ref_mean))
    checks.extend(_array_checks("count_covariance_enumeration", count_covariance, ref_covariance))
    checks.extend(_array_checks("count_covariance_scipy", count_covariance, stats.dirichlet_multinomial.cov(posterior, 3)))
    checks.extend(_array_checks("theta_covariance_row_sums", covariance.sum(axis=1), np.zeros(3)))
    checks.extend(_array_checks("count_covariance_row_sums", count_covariance.sum(axis=1), np.zeros(3)))
    checks.extend(_aggregation_checks(vectors, probabilities, posterior))
    checks.extend(_invariance_checks(prior, observed, posterior, vectors, probabilities))
    multinomial_kernel = np.diag(mean) - np.outer(mean, mean)
    conditional_component = 3*(multinomial_kernel-covariance)
    parameter_component = 9*covariance
    checks.extend(_array_checks("total_covariance_decomposition",
                               conditional_component+parameter_component, count_covariance))
    return envelope(
        STEM, seed, "Exact conjugacy; log-gamma PMF; independent rational ordered-path enumeration and SciPy references",
        dict(prior=prior.tolist(), observed_counts=observed.tolist(), future_n=3,
             category_order=list(LABELS), seed_used_for_sampling=False,
             provenance=dict(fictional=True, population="Comparable repairs under unchanged service conditions",
                             classification="Status at seven days; replacement overrides revisit; otherwise resolved",
                             horizon="Next three completed repairs assessed at the same seven-day horizon",
                             prior_basis="Stipulated teaching prior, not elicited or estimated from the eight jobs")),
        dict(posterior=posterior.tolist(), posterior_total=float(posterior.sum()),
             theta_mean=mean.tolist(), theta_covariance=covariance.tolist(),
             future_count_mean=count_mean.tolist(), future_count_covariance=count_covariance.tolist(),
             count_vectors=[dict(counts=v.tolist(), probability=float(p), exact_probability=str(exact[tuple(v)]))
                            for v, p in zip(vectors, probabilities)],
             replacement_count_pmf=replacement.tolist(), replacement_at_least_one=float(replacement[1:].sum()),
             replacement_beta_shapes=[1., 11.],
             plugin_replacement_count_pmf=plugin.tolist(), plugin_at_least_one=float(plugin[1:].sum()),
             predictive_inflation=15/13,
             expected_conditional_count_covariance=conditional_component.tolist(),
             covariance_of_conditional_count_mean=parameter_component.tolist(),
             shared_theta_cross_batch_covariance=(9*covariance).tolist(),
             independent_batch_vectors_cross_batch_covariance=np.zeros((3, 3)).tolist(),
             batch_comparison_condition="Both groups have size 3; independent batch vectors assume fixed shapes (7,4,1); no hierarchy fitted",
             replacement_probability_equal_tail_95=stats.beta.ppf([.025, .975], 1, 11).tolist()),
        checks,
        ["Fictional illustration with a stipulated prior; no operational service recommendation or empirical calibration claim.",
         "One common probability vector assumes conditional independence and stable, exhaustive, exclusive categories.",
         "The Dirichlet is restricted to positive shapes; a structural zero requires an explicitly reduced support model.",
         "A marginal Dirichlet-multinomial alone cannot identify uncertainty versus physical batch heterogeneity.",
         "Independent batch comparison fixes hyperparameters; learning shared hyperparameters also induces cross-batch dependence.",
         "Enumeration is for small totals; no MCMC or random simulation is required and the seed is metadata only."])


# %% [markdown]
# ## Plot joint predictions and the replacement marginal
# Read the exact-probability table in the result as a text alternative to the
# figure. Wider tails do not imply a higher probability for every tail event:
# here the shared model gives MORE zero replacements and MORE two-or-three.
# %%
def main() -> None:
    result = compute()
    if not all(item["passed"] for item in result["checks"]):
        raise ArithmeticError("Categorical reference checks failed")
    metrics = result["metrics"]
    rows = metrics["count_vectors"]
    fig, axes = plt.subplots(1, 2, figsize=(12, 5.8), gridspec_kw={"width_ratios": [1.25, 1]})
    y = np.arange(len(rows))
    axes[0].barh(y, [row["probability"] for row in rows], color="#087f8c", edgecolor="black", linewidth=.5)
    axes[0].set(yticks=y, yticklabels=[str(tuple(row["counts"])) for row in rows],
                xlabel="Predictive probability", ylabel="(Resolved, Revisit, Replacement)",
                title="All 10 future count vectors", xlim=(0, .39))
    axes[0].invert_yaxis()
    for i, row in enumerate(rows):
        axes[0].text(row["probability"]+.005, i, row["exact_probability"], va="center", fontsize=9)
    k = np.arange(4)
    axes[1].bar(k-.18, metrics["replacement_count_pmf"], width=.36,
                color="#087f8c", edgecolor="black", label="Shared uncertain θ")
    axes[1].bar(k+.18, metrics["plugin_replacement_count_pmf"], width=.36,
                color="white", hatch="///", edgecolor="#6254a3", label="Fixed θ = posterior mean")
    axes[1].set(xticks=k, xlabel="Replacement count in 3 future repairs", ylabel="Predictive probability",
                title="Aggregation recovers the beta-binomial", ylim=(0, .96))
    axes[1].legend(fontsize=9)
    axes[1].text(.97, .66, "P(at least one)\nShared: 3/14 ≈ 0.2143\nFixed: 397/1728 ≈ 0.2297",
                 transform=axes[1].transAxes, ha="right", va="top", fontsize=10)
    fig.suptitle("Fictional repair service: Dirichlet(2, 1, 1) + counts (5, 3, 0)")
    save_figure(STEM)
    # Supply accessible semantics before registration, replacing later registry
    # semantics idempotently. Shared common.py remains unchanged.
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
# **Investigate:** choose another small prediction horizon and merge two
# categories. Before running, predict which moments change. Compare the
# aggregated enumeration with a beta-binomial reference. Describe what evidence
# would justify removing a category rather than simply observing none of it.
# Finally write two simulation recipes: a shared vector and batch-specific
# vectors. Explain which dependence each recipe retains. These explorations
# use the worked example and are separate from the assessed questions.
