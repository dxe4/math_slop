# Read three dimensions from exactness

*Medium · [Linear algebra problems](index.md)*

Work over $\mathbb R$ in finite dimension; all coordinate entries are dimensionless. Let $A:\mathbb R^4\to\mathbb R^7$ and $B:\mathbb R^7\to\mathbb R^5$ satisfy $\ker B=\operatorname{im}A$ and $\dim\ker A=1$. Return \[rank A, rank B, dimension of $\mathbb R^5/\operatorname{im}B$\].

```answer
{"answer":{"kind":"vector","expected":["3","4","1"],"checker_scope":"Only the requested exact finite object is checked; the derivation does not receive an automatic proof verdict."}}
```

<details>
<summary>Hint 1</summary>

Apply rank-nullity first to A.

</details>

<details>
<summary>Hint 2</summary>

Exactness determines the kernel of B; its image dimension then determines its cokernel.

</details>

<details>
<summary>Worked solution</summary>

Exactness links two separate rank-nullity calculations.

1. The first map has rank $4-1=3$.
2. Its image is the kernel of $B$, so the second map has rank $7-3=4$.
3. The target quotient has dimension $5-4=1$, giving the ordered vector $[3,4,1]$.

</details>
