# Boundary of an interval and an isolated point

*Medium · [Topology problems](index.md)*

In the usual real line, find the boundary of $[0,1)\cup\{2\}$.

```answer
{"answer":{"kind":"set","expected":[0,1,2],"checker_scope":"Exact finite set, interval or count requested in the stated topology only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Compute closure and interior, then take their set difference.

</details>

<details>
<summary>Hint 2</summary>

An isolated included point can still be a boundary point.

</details>

<details>
<summary>Worked solution</summary>

Boundary is the closure after the interior has been removed.

1. The closure is $[0,1]\cup\{2\}$.
2. The interior is $(0,1)$; the isolated point has no open interval contained in the set.
3. The difference is $\{0,1,2\}$, the boundary.

</details>
