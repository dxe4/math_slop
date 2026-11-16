# Express a geometric vector in an oblique basis

*Medium · [Geometry and trigonometry problems](index.md)*

Let $u=(2,1)$ and $v=(1,2)$. Find coefficients $[\alpha,\beta]$ such that $(5,4)=\alpha u+\beta v$.

```answer
{"answer":{"kind":"vector","expected":["2","1"],"checker_scope":"The exact requested finite result only; a correct entry does not certify a geometric argument or award reviewed evidence."}}
```

<details>
<summary>Hint 1</summary>

Equate both components to form two independent equations.

</details>

<details>
<summary>Hint 2</summary>

Eliminate one coefficient, then substitute back.

</details>

<details>
<summary>Worked solution</summary>

Use the two coordinate equations of a basis expansion.

1. The equations are $2\alpha+\beta=5$ and $\alpha+2\beta=4$.
2. Twice the second minus the first gives $3\beta=3$, so $\beta=1$.
3. Then $\alpha=2$. The basis determinant is $3\ne0$, so the coefficients are unique.

</details>
