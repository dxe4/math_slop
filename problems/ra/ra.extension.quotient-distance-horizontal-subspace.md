# Evaluate a quotient norm by minimizing over a subspace

*Easy · [Real analysis](index.md)*

Let M be the horizontal axis in Euclidean R^2. The quotient norm is $||x+M||=\inf_{m\in M}||x-m||_2$. Find the quotient norm of (3,-4)+M.

```answer
{"answer":{"kind":"integer","expected":4,"checker_scope":"Exact requested norm observation only; no functional-analytic theorem is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

The horizontal coordinate can be cancelled by choosing m.

</details>

<details>
<summary>Hint 2</summary>

The vertical coordinate remains unchanged by every such subtraction.

</details>

<details>
<summary>Worked solution</summary>

A quotient norm measures distance to the discarded subspace.

1. Every m has form (a,0), so the squared distance is (3-a)^2+16.
2. This is minimized at a=3, where the horizontal term is zero.
3. The minimal distance is sqrt16=4.

</details>
