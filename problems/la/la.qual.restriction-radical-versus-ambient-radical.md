# Find degeneracy created by restriction

*Medium · [Linear algebra problems](index.md)*

Use $G=\operatorname{diag}(1,1,-1,-1)$ on $\mathbb R^4$ and $W=\operatorname{span}(e_1+e_3,e_2+e_4)$. Return \[dimension of the ambient radical, dimension of the radical of the restricted form on W\].

```answer
{"answer":{"kind":"vector","expected":["0","2"],"checker_scope":"Only the requested finite invariant or rational coordinate result is checked; form classification and reasoning are not automatically certified."}}
```

<details>
<summary>Hint 1</summary>

The ambient matrix is invertible.

</details>

<details>
<summary>Hint 2</summary>

Compute all pairings of the two displayed generators inside W.

</details>

<details>
<summary>Worked solution</summary>

Restriction can be degenerate even when the ambient form is nondegenerate.

1. The determinant of G is one, so its ambient radical is zero.
2. Each generator has square zero and their mutual pairing is zero because they occupy disjoint coordinate pairs.
3. The restricted form is identically zero on the two-dimensional W, whose entire space is therefore its radical. The result is $[0,2]$.

</details>
