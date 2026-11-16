# Diameter under a transformed-coordinate metric

*Medium · [Topology problems](index.md)*

For positive reals let $d(x,y)=|1/x-1/y|$. Find the diameter of $\{1,2,4\}$ in this metric.

```answer
{"answer":{"kind":"rational","expected":{"numerator":3,"denominator":4},"checker_scope":"Exact finite set, interval, distance or count requested in the stated topology only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

The reciprocal map turns this metric into an ordinary distance between image coordinates.

</details>

<details>
<summary>Hint 2</summary>

For a finite real image set, the largest pairwise distance is the gap between its extremes.

</details>

<details>
<summary>Worked solution</summary>

Compute a finite image diameter under the defining coordinate transformation.

1. The reciprocal images are $1,1/2,1/4$.
2. The greatest difference is between $1$ and $1/4$.
3. The diameter is $1-1/4=3/4$.

</details>
