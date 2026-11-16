# Appendix D — Python laboratory {#sec-topology-python-lab}

Every block is standalone and finite. The laboratory emphasizes exact
combinatorial representations; floating-point sampling appears only when its
resolution assumptions are explicit.

## Power set

```python
from itertools import combinations

def power_set(values: set[str]) -> set[frozenset[str]]:
    ordered = sorted(values)
    return {
        frozenset(selection)
        for size in range(len(ordered) + 1)
        for selection in combinations(ordered, size)
    }

print(len(power_set({"a", "b", "c", "d"})))
```

## Closure in a finite topology

```python
def closure(
    subset: frozenset[str],
    points: frozenset[str],
    opens: set[frozenset[str]],
) -> frozenset[str]:
    closed = {points - open_set for open_set in opens}
    supersets = [candidate for candidate in closed if subset <= candidate]
    if not supersets:
        raise ValueError("declared opens do not include the empty set")
    return frozenset.intersection(*supersets)

points = frozenset({"a", "b", "c"})
opens = {frozenset(), frozenset({"a"}), frozenset({"a", "b"}), frozenset({"a", "c"}), points}
print(closure(frozenset({"b"}), points, opens))
```

## Euler characteristic of a complex

```python
from collections import Counter

def euler_from_simplices(simplices: set[frozenset[int]]) -> int:
    if any(not simplex for simplex in simplices):
        raise ValueError("simplices must be nonempty")
    if any(
        frozenset(face) not in simplices
        for simplex in simplices
        for vertex in simplex
        for face in [simplex - {vertex}]
        if face
    ):
        raise ValueError("complex is not closed under codimension-one faces")
    counts = Counter(len(simplex) - 1 for simplex in simplices)
    return sum((-1) ** dimension * count for dimension, count in counts.items())

complex_ = {frozenset({"a"}), frozenset({"b"}), frozenset({"c"}), frozenset({"a", "b"}), frozenset({"b", "c"}), frozenset({"a", "c"})}
print(euler_from_simplices(complex_))
```

## A filtration ledger

```python
from math import isfinite

def lifetimes(intervals: list[tuple[float, float]]) -> list[float]:
    if any(
        not isfinite(birth) or not isfinite(death) or birth < 0.0 or death < birth
        for birth, death in intervals
    ):
        raise ValueError("require finite endpoints with 0 <= birth <= death")
    return [death - birth for birth, death in intervals]

bars = [(0.0, 0.2), (0.0, 1.0), (0.15, 0.72), (0.4, 0.48)]
print(sorted(lifetimes(bars), reverse=True))
```

The last block ranks declared finite bars. It does not select a significance
threshold or infer the topology of a population.

## Advanced laboratory routes

The deeper chapters keep code beside the formula it interprets:

- [Chapter 23](23-paracompactness-dimension.md) normalizes finite bump weights;
- [Chapter 24](24-relative-homology-mayer-vietoris.md) audits exactness over
  $\mathbb F_2$;
- [Chapter 25](25-homological-algebra-coefficients.md) convolves Betti vectors;
- [Chapter 26](26-degree-intersection-lefschetz.md) evaluates Lefschetz traces;
- [Chapter 27](27-higher-homotopy-fibrations-obstructions.md) evaluates a
  cellular obstruction cochain; and
- [Chapter 28](28-local-coefficients-orientation.md) computes rational circle
  homology from a monodromy matrix.

Each routine validates its finite input and has bounded termination. None
claims to decide a quantified theorem about arbitrary covers, continuous maps,
or higher homotopies.
