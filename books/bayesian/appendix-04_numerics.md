# Appendix 4 · Numerical stability, simulation, and reproducibility

## How to use this bridge

A mathematically correct expression can still produce a misleading numerical answer. Products can underflow, arrays can align along unintended axes, and a simulation can return many dependent draws without estimating the desired quantity precisely. This appendix supplies practical habits for converting the course's probability statements into inspectable computations.

**Required bridge.** The log-weight and grid sections support [Chapter 0, Stable computation and a readiness check](./00_preparation.md#stable-computation-and-a-readiness-check) and [Chapter 2, Grid inference: densities become cell masses](./02_beta_binomial.md#grid-inference-densities-become-cell-masses). Simulation error supports [Chapter 5, Two uncertainties with different remedies](./05_monte_carlo.md#two-uncertainties-with-different-remedies). Read the reproducibility section before any lab. The final error-budget discussion is optional depth. Examples use the repository's pinned NumPy/SciPy environment; the code is short enough to inspect before running.

## A notation crosswalk for computation

| Mathematical object | Numerical representation and interpretation |
|---|---|
| $\ell_j=\log q_j$ | Log unnormalised weight, which may be a log mass or log density |
| $w_j$ | Normalised discrete mass; nonnegative entries sum to one |
| $\Delta_j$ | Grid cell width, with the parameter's units |
| $S$ | Number of simulation draws, distinct from the observed sample size $n$ |
| $g(\theta^{(s)})$ | The quantity calculated from one draw; choose it before estimating MCSE |
| MCSE | Monte Carlo standard error, measured in the same units as the estimated expectation |
| ESS | Effective sample size for a particular estimate; definitions depend on sampling method |

Posterior standard deviation describes uncertainty under the model. MCSE describes error from estimating a posterior summary with finite simulation. Grid resolution and floating-point rounding introduce other approximation errors. Recording these separately prevents an increase in computer effort from being mistaken for an increase in real-world information.

## Worked example: likelihoods that underflow

Floating-point numbers cover only a finite range. Imagine three hypotheses with equal prior weights and log likelihoods minus one thousand, minus one thousand and one, and minus one thousand and three. Their likelihood ratios are meaningful, but directly exponentiating these numbers in ordinary float64 arithmetic yields zeros. Dividing those zeros by their sum produces an invalid posterior.

Let $a=\max_j\ell_j$. Factoring out $e^a$ gives

$$\log\sum_j e^{\ell_j}
=a+\log\sum_j e^{\ell_j-a},\qquad
w_j=\exp\left(\ell_j-\operatorname{logsumexp}(\ell)\right).$$

At least one shifted exponent is zero, so its exponential is one. The normalisation calculation remains on a useful scale. For the example, the log normaliser is approximately minus 999.650988 and the posterior weights are approximately 0.705385, 0.259496, and 0.035119. Subtracting any common finite constant from the log weights leaves those probabilities unchanged. SciPy's [`logsumexp`](https://docs.scipy.org/doc/scipy/reference/generated/scipy.special.logsumexp.html) implements the stable reduction.

```python
import numpy as np
from scipy.special import logsumexp

def normalise_log_weights(log_weights):
    values = np.asarray(log_weights, dtype=float)
    if values.ndim != 1 or values.size == 0:
        raise ValueError("Expected a nonempty vector of log weights")
    if np.isnan(values).any() or np.isposinf(values).any():
        raise ValueError("NaN and positive infinity need investigation")
    if not np.isfinite(values).any():
        raise ValueError("No finite positive-mass candidate remains")
    return np.exp(values - logsumexp(values))

weights = normalise_log_weights([-1000., -1001., -1003.])
assert np.isclose(weights.sum(), 1.0)
```

Negative infinity legitimately represents zero mass, so the function accepts it alongside finite entries. An entirely negative-infinite vector cannot be normalised. Positive infinity may indicate an endpoint singularity in a density or an overflow; neither is a finite cell mass to normalise blindly. A NaN is an undefined computation, not evidence for zero probability. Replacing all such values with zero would erase information about the failure.

## Evaluate log densities directly

Use a distribution's `logpdf` or `logpmf` instead of taking the logarithm of an already-underflowed density. For conditionally independent observations, add log likelihood contributions along the observation axis. Constants may be dropped when they are independent of the inferred parameter and only posterior shape is required. Keep them for normalised predictive densities and marginal likelihoods.

For example, a Normal log density is

$$\log p(y\mid\mu,\sigma)
=-\frac12\log(2\pi)-\log\sigma
-\frac12\left(\frac{y-\mu}{\sigma}\right)^2.$$

Standardising the residual makes its square dimensionless. The density still has inverse outcome units. Log-density values use a chosen numerical measurement unit; comparing models is meaningful only when they describe the same observations on a consistent scale. Changing minutes to seconds shifts the density normalisation even though matched event probabilities remain unchanged. [Appendix 2](./appendix-02_calculus.md#transformations-preserve-probability-not-density-height) explains the corresponding Jacobian.

Stable links matter as well. For a Bernoulli observation with linear predictor $\eta$, evaluate the probability with `scipy.special.expit`. The log success probability is `-np.logaddexp(0, -eta)` and the log failure probability is `-np.logaddexp(0, eta)`. Choose the appropriate branch for the observed zero or one. At a predictor of one thousand, the success probability rounds to one, but the failure log probability remains about minus one thousand. Taking the log of one minus that rounded success probability would lose this information.

**Check your understanding.** Why is a negative-infinite log mass sometimes valid, while a vector containing only negative infinities is not a posterior? What separate problem remains if a stable calculation normalises a likelihood from the wrong model?

## Worked example: a nonuniform grid and an exact reference

Approximate a Beta(4,7) density on the unit interval. Its exact mean is $4/11\approx0.363636364$. Construct cell edges by squaring equally spaced numbers, creating narrower cells near zero. If $q_j$ is the density at cell midpoint $\theta_j$, use

$$\log \widetilde w_j=\log q_j+\log\Delta_j,\qquad
E[\Theta]\approx\sum_j w_j\theta_j.$$

The width converts density into approximate cell mass. Normalising density heights alone gives each grid point equal geometric weight and overrepresents the region with more points. Refining that wrong rule does not repair its target.

```python
import numpy as np
from scipy import stats
from scipy.special import logsumexp

def grid_mean(cells):
    edges = np.linspace(0.0, 1.0, cells + 1) ** 2
    widths = np.diff(edges)
    midpoint = (edges[:-1] + edges[1:]) / 2
    log_mass = stats.beta.logpdf(midpoint, 4, 7) + np.log(widths)
    mass = np.exp(log_mass - logsumexp(log_mass))
    return midpoint @ mass

means = [grid_mean(cells) for cells in (8, 16, 32)]
```

| Cells | Mean using cell widths | Mean if widths are omitted |
|---:|---:|---:|
| 8 | 0.363745555 | 0.332862315 |
| 16 | 0.363637071 | 0.333202526 |
| 32 | 0.363636367 | 0.333300722 |

The correct result approaches the exact mean quickly in this smooth example. The incorrect calculation approaches a different value. Under this edge construction, point density is proportional to the inverse square root of the parameter, effectively tilting the beta density to a Beta(3.5,7), whose mean is one third.

An accurate mean alone does not establish accurate tail probabilities. A cell can straddle a decision threshold, and midpoint classification of the whole cell can distort a tail estimate. Refine near the threshold, split that cell, or integrate its contribution. Likewise, a grid limited to a convenient interval can miss substantial posterior mass outside it while still normalising perfectly within its truncated domain.

## Independent simulation and Monte Carlo error

For independent draws from a target distribution and a finite-variance function $g$, the sample average estimates its expectation:

$$\widehat E[g]=\frac1S\sum_{s=1}^Sg(\theta^{(s)}),\qquad
\operatorname{Var}(\widehat E[g])=\frac{\operatorname{Var}(g(\Theta))}{S}.$$

Estimate MCSE by the sample standard deviation of the function values divided by the square root of the number of draws. These are the values of the function being averaged, not necessarily the raw parameter draws. For a tail probability the function is an indicator; for expected utility it is utility.

```python
import numpy as np
from scipy import stats

rng = np.random.default_rng(42017)
draws = rng.beta(4, 7, size=40_000)
estimate = draws.mean()
mcse = draws.std(ddof=1) / np.sqrt(draws.size)
tail_estimate = (draws > 0.5).mean()
exact_tail = stats.beta.sf(0.5, 4, 7)
```

In the checked pinned environment, the mean estimate is approximately 0.364587 with MCSE 0.000698. Its difference from the exact mean is about 1.36 MCSEs. The estimated tail probability is 0.174925, compared with the exact 0.171875. The posterior's own standard deviation is about 0.139; it does not shrink just because the computer generates more draws. Four times as many independent draws approximately halves MCSE, leaving the target distribution unchanged.

For MCMC, consecutive draws are dependent, so this independent-draw formula can be optimistic. Preserve chains and draw order for the diagnostics in [Chapter 6, Read agreement, efficiency, and precision separately](./06_hmc.md#read-agreement-efficiency-and-precision-separately). Use an appropriate ESS or direct MCSE estimator for the actual summary. Good numerical precision within one visited mode does not prove that a sampler found all modes.

## Random streams and array axes carry assumptions {#random-streams-and-array-axes-carry-assumptions}

A pseudorandom generator has state; each call advances it. Recreating a generator with the same seed inside every loop restarts the same sequence. Such repeated output is not new independent simulation. Passing a generator explicitly makes ownership of that state visible.

For reproducible separate tasks, spawn child seed sequences and keep a stable mapping from task labels to children. NumPy's [parallel random-generation documentation](https://numpy.org/doc/stable/reference/random/parallel.html) describes spawning streams intended to be independent with very high probability. This is an algorithmic construction, not a proof of mathematical independence for every finite output.

```python
import numpy as np

children = np.random.SeedSequence(31029).spawn(4)
generators = [np.random.default_rng(child) for child in children]
# Independent toy draws, arranged like chain, draw, and group axes.
theta = np.stack([rng.beta(3, 2, size=(100, 3)) for rng in generators])
group_means = theta.mean(axis=(0, 1))
assert theta.shape == (4, 100, 3)
assert group_means.shape == (3,)
```

This layout imitates sampling output; it does not run four Markov chains or establish convergence. Averaging over the last axis would combine groups and answer another question. In a real hierarchical posterior, group components within one draw may be dependent and must stay together. For repeated future visits in the same new group, generate one group effect per posterior draw and share it across those visits. Independent residual draws then represent variation within that group.

## What reproducibility can and cannot guarantee

A seed helps replay a random stream under a specified generator and execution pattern. It does not by itself guarantee identical results across package versions, hardware, compiler settings, numerical libraries, or changed sequences of calls. NumPy's [random compatibility policy](https://numpy.org/doc/stable/reference/random/compatibility.html) states the conditions and limitations of stream reproducibility. Adaptive samplers can follow different trajectories after small floating-point differences even when their resulting distributions agree to useful precision.

Keep enough context to reconstruct the analysis: data provenance and preprocessing, source code, dependency lock, root seed and child mapping, sampler configuration, retained draws or summaries, and the exact command used. A source or data SHA-256 hash identifies a particular byte sequence. It can reveal that today's inputs differ from those used for a saved output; it does not certify model correctness, provenance claims, or execution by itself.

There are several useful standards of reproduction. An identical-environment rerun may reproduce exact arrays. A different supported environment may reproduce summary statistics within declared numerical tolerances. An independent implementation may reproduce the inferential conclusion while using different random draws. State which standard a check addresses, and set tolerances from mathematical error or Monte Carlo precision rather than adjusting them to accept a preferred result.

For notebooks, start a fresh kernel and run cells in order. An output created before a model edit can look plausible while referring to a different analysis. The course's source scripts are the maintainable authority; regenerate derived notebooks and reports after source changes. Record failures and diagnostic warnings as part of the evidence instead of repeatedly changing seeds until an attractive run appears.

## Optional depth: budget error for the question

**Extended route.** Suppose a probability estimate informs an action near a threshold. Reducing MCSE below the distance to that threshold may clarify the calculation under the chosen model, but uncertainty in costs or a plausible alternative likelihood can still change the action. Report these sensitivity changes separately from numerical error. [Chapter 12, Freeze, check, and examine sensitivity](./12_decisions.md#freeze-check-and-examine-sensitivity) puts those checks into the decision workflow.

Rare events need particular care. Zero occurrences among simulated draws does not establish zero probability, and the naive indicator-based MCSE estimate is then zero as well. Seek an analytic tail calculation, a justified rare-event method, or more informative simulation before claiming precision. Heavy-tailed functions may lack finite variance, invalidating the usual square-root error argument even when a finite run looks stable.

**Check your understanding.** For a reported posterior mean, name one check for arithmetic stability, one for Monte Carlo precision, one for model sensitivity, and one for input reproducibility. Explain why passing any one of those checks cannot substitute for the others.
