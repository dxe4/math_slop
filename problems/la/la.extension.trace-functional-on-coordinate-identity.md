# Evaluate a matrix-space functional

*Easy · [Linear algebra problems](index.md)*

Work over $\mathbb R$. Coordinates are dimensionless and ordered as stated. For the functional $\tau:M_3(\mathbb R)\to\mathbb R$ defined by $\tau(A)=\operatorname{tr}A$, compute $\tau(2E_{11}-E_{22}+4E_{13})$.

```answer
{"answer":{"kind":"integer","expected":1,"checker_scope":"Only the requested exact finite answer is checked; explanatory reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Trace ignores off-diagonal matrix units.

</details>

<details>
<summary>Hint 2</summary>

Add only the coefficients on diagonal positions.

</details>

<details>
<summary>Worked solution</summary>

Recognize a functional on a matrix vector space.

1. The matrix units $E_{11}$ and $E_{22}$ each have trace one.
2. $E_{13}$ has trace zero because its nonzero entry is off the diagonal.
3. Linearity gives $2-1+0=1$.

</details>
