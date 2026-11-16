# Appendix D — Python laboratory {#sec-pp-python-lab}

## Stable categorical sampling weights

```python
from math import exp

def softmax(logits: list[float]) -> list[float]:
    if not logits:
        raise ValueError("logits must be nonempty")
    maximum = max(logits)
    values = [exp(logit - maximum) for logit in logits]
    total = sum(values)
    return [value / total for value in values]

print(softmax([1_000.0, 999.0, 995.0]))
```

## Welford streaming moments

```python
def streaming_moments(values: list[float]) -> tuple[float, float]:
    if len(values) < 2:
        raise ValueError("at least two values are required")
    mean = 0.0
    sum_squares = 0.0
    for count, value in enumerate(values, start=1):
        delta = value - mean
        mean += delta / count
        sum_squares += delta * (value - mean)
    return mean, sum_squares / (len(values) - 1)

print(streaming_moments([1.0, 2.0, 4.0, 8.0]))
```

## Systematic resampling {#sec-systematic-lab}

Use the half-open convention from the [Chapter 18 investigation](18-state-space-smc.md#sec-resampling-variance):
particle $i$ owns $[C_i,C_{i+1})$, with zero-based indices and cumulative
weights $C_0=0$. The inverse CDF therefore chooses the first upper cumulative
weight **strictly greater** than the point. A point exactly on a boundary
belongs to the interval on its right; a zero-weight interval is never
selected, including when the supplied offset is zero.

This teaching implementation uses exact rational arithmetic internally so its
boundary decisions can be inspected. Integers, `Fraction` values, and finite
floats are accepted; floats denote their exact binary values, not an intended
decimal rational. A weight sum within $10^{-12}$ of one is accepted and
normalized exactly before constructing the CDF. Other totals, negative
weights, nonfinite inputs, and offsets outside $[0,1/N)$ raise errors. The
function supplies a deterministic offset-to-indices map; to perform random
systematic resampling, the caller must draw the offset uniformly in that
first stratum. A fixed offset is not a randomized resampling scheme.

```python
from fractions import Fraction
from itertools import accumulate
from math import isfinite

def systematic_indices(
    weights: list[int | float | Fraction],
    offset: int | float | Fraction,
) -> list[int]:
    """Map one first-stratum offset to indices using a half-open exact CDF."""
    if not weights:
        raise ValueError("weights must be nonempty")
    entries = [*weights, offset]
    if any(type(value) not in (int, float, Fraction) for value in entries):
        raise TypeError("use int, float, or Fraction values, excluding bool")
    if any(type(value) is float and not isfinite(value) for value in entries):
        raise ValueError("weights and offset must be finite")
    exact_weights = [Fraction(weight) for weight in weights]
    if any(weight < 0 for weight in exact_weights):
        raise ValueError("weights must be nonnegative")
    total = sum(exact_weights, Fraction(0))
    if abs(total - 1) > Fraction(1, 10**12):
        raise ValueError("weight sum must be within 1e-12 of one")
    step = Fraction(1, len(weights))
    exact_offset = Fraction(offset)
    if not 0 <= exact_offset < step:
        raise ValueError("offset must lie in the half-open first stratum")
    cumulative = list(accumulate(weight / total for weight in exact_weights))
    result = []
    index = 0
    for point in (exact_offset + position * step for position in range(len(weights))):
        while point >= cumulative[index]:
            index += 1
        result.append(index)
    return result

print(systematic_indices([0.1, 0.2, 0.5, 0.2], 0.05))
print(systematic_indices([0.0, 1.0], 0.0))
print(systematic_indices([Fraction(1, 2), 0, Fraction(1, 2), 0], 0))
```

The last two outputs are `[1, 1]` and `[0, 0, 2, 2]`: leading, interior,
and trailing zero-weight particles are skipped. Exact normalization makes
the final cumulative endpoint one, and every grid point is strictly below
one, so the loop cannot walk beyond the CDF. Rational arithmetic has a bit
cost; this laboratory emphasizes a checked mathematical contract rather
than throughput. It does not establish a variance advantage for systematic
resampling.

## Posterior decision threshold

```python
def treatment_threshold(benefit: float, harm: float) -> float:
    if benefit <= 0.0 or harm <= 0.0:
        raise ValueError("benefit and harm magnitudes must be positive")
    return harm / (benefit + harm)

print(treatment_threshold(8.0, 5.0))
```

## Paired pointwise predictive comparison

For pointwise score differences $d_i$, the total difference is $\sum_i d_i$
and the exchangeable-unit standard error is
$\sqrt{n\operatorname{Var}_i(d_i)}$.

```python
from math import isfinite, sqrt
from statistics import variance

def paired_predictive_difference(
    first_pointwise_scores: list[float], second_pointwise_scores: list[float]
) -> tuple[float, float]:
    if len(first_pointwise_scores) != len(second_pointwise_scores):
        raise ValueError("pointwise score lists must have equal length")
    if len(first_pointwise_scores) < 2:
        raise ValueError("at least two validation units are required")
    all_scores = first_pointwise_scores + second_pointwise_scores
    if any(not isfinite(value) for value in all_scores):
        raise ValueError("pointwise scores must be finite")
    differences = [
        first - second
        for first, second in zip(
            first_pointwise_scores, second_pointwise_scores, strict=True
        )
    ]
    total_difference = sum(differences)
    standard_error = sqrt(len(differences) * variance(differences))
    return total_difference, standard_error

print(paired_predictive_difference([-1.1, -0.4, -1.8], [-1.3, -0.6, -1.2]))
```

Each block computes a finite mathematical object. The pointwise standard error
uses validation units as exchangeable replicates; grouped or time-dependent
data require a corresponding unit-level calculation. None of the blocks
validates a scientific model or replaces posterior diagnostics.
