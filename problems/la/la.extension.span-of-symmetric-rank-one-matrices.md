# Find a matrix-space span through rank-one generators

*Medium · [Linear algebra problems](index.md)*

Work over $\mathbb R$. Coordinates are dimensionless and ordered as stated. For $u_1=e_1$, $u_2=e_2$, $u_3=e_1+e_2$, $u_4=e_1-e_2$ in $\mathbb R^2$, find the dimension of the span of $u_ju_j^T$ inside $M_2(\mathbb R)$.

```answer
{"answer":{"kind":"integer","expected":3,"checker_scope":"Only the requested exact finite answer is checked; explanatory reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

All four matrices are symmetric, giving an ambient dimension bound.

</details>

<details>
<summary>Hint 2</summary>

The first two provide independent diagonal directions; subtract them from the third.

</details>

<details>
<summary>Worked solution</summary>

Distinguish independence of vectors from independence of their outer products.

1. All the outer products are symmetric, so their span has dimension at most three.
2. The first two are $E_{11}$ and $E_{22}$; the third minus those two is $E_{12}+E_{21}$.
3. These three matrices occupy independent symmetric coordinate directions and span the full symmetric space, so the dimension is three.

</details>
