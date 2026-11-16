# Count chosen interval-basis neighborhoods

*Easy · [Topology problems](index.md)*

How many open intervals containing $0$ have both endpoints in $\{-2,-1,0,1,2\}$? Count each pair of endpoints once.

```answer
{"answer":{"kind":"integer","expected":4,"checker_scope":"Exact finite set, interval or count requested in the stated topology only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

The left endpoint must lie strictly below the point and the right endpoint strictly above it.

</details>

<details>
<summary>Hint 2</summary>

Choose the two endpoints independently from their permitted sides.

</details>

<details>
<summary>Worked solution</summary>

Strict containment separates the endpoint choices into two finite sets.

1. The left endpoint is either $-2$ or $-1$.
2. The right endpoint is either $1$ or $2$; an endpoint at zero would not include the point.
3. There are $2\cdot2=4$ intervals.

</details>
