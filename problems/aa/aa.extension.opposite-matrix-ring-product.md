# Reverse the two factors in an opposite-ring multiplication

*Easy · [Abstract algebra problems](index.md)*

Let E\_ij be the standard two-by-two matrix units over Q. In the opposite ring, $A\star B=BA$. Find E\_12 star E\_21 as a two-row matrix.

```answer
{"answer":{"kind":"matrix","expected":[["0","0"],["0","1"]],"rows":2,"columns":2,"checker_scope":"Exact requested finite ring invariant only; no radical or classification proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

The opposite product uses E21\*E12 in the usual matrix order.

</details>

<details>
<summary>Hint 2</summary>

Use E\_ij\*E\_kl=delta\_(j,k)\*E\_il.

</details>

<details>
<summary>Worked solution</summary>

Changing the ring multiplication changes the order, not the underlying matrices.

1. By definition E12 star E21 is the usual product E21\*E12.
2. The matrix-unit rule gives E22.
3. Its rows are\[0,0\] and\[0,1\].

</details>
