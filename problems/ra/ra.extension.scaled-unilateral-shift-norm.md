# Separate norm preservation of a shift from its scalar scaling

*Easy · [Real analysis](index.md)*

On bounded real sequences with the supremum norm, let $S(x_1,x_2,\ldots)=(0,x_1/2,x_2/2,\ldots)$. Find \|\|S\|\|.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":2},"checker_scope":"Exact requested norm observation only; no functional-analytic theorem is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

The new leading zero does not change the supremum of the other coordinates.

</details>

<details>
<summary>Hint 2</summary>

Include the factor one half.

</details>

<details>
<summary>Worked solution</summary>

A coordinate shift can preserve the supremum before a separate scaling.

1. For every bounded sequence x, \|\|Sx\|\|\_infinity=(1/2)\*\|\|x\|\|\_infinity.
2. Thus the operator norm is at most one half.
3. Any nonzero bounded sequence gives equality in the ratio, so \|\|S\|\|=1/2.

</details>
