# Continuous maps from a connected finite space

*Medium · [Topology problems](index.md)*

The domain $X=\{0,1\}$ has topology $\{\varnothing,\{1\},X\}$. The codomain is the discrete space $Y=\{a,b\}$. How many maps $X\to Y$ are continuous?

```answer
{"answer":{"kind":"integer","expected":2,"checker_scope":"Exact finite set, interval, distance or count requested in the stated topology only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Both codomain singletons are open, so both fibers of a continuous map must be open.

</details>

<details>
<summary>Hint 2</summary>

Inspect whether a nonconstant map could have both of its singleton fibers open in the domain.

</details>

<details>
<summary>Worked solution</summary>

Continuity to a discrete target requires every fiber to be open.

1. A nonconstant map between these two-point sets has singleton fibers $\{0\}$ and $\{1\}$.
2. The first of those fibers is not open in the stated topology, so no nonconstant map is continuous.
3. Both constant maps are continuous. The total is $2$.

</details>
