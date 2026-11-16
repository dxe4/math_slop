# Read trace with the declared polynomial sign

*Easy · [Linear algebra problems](index.md)*

Work over $\mathbb R$; vectors are columns and all data are dimensionless. The characteristic polynomial is defined as $\det(xI-A)$ and equals $x^3-5x^2+2x+7$. Find $\operatorname{tr}A$.

```answer
{"answer":{"kind":"integer","expected":5,"checker_scope":"Only the requested bounded exact result is checked; no unrestricted proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

For a monic characteristic polynomial the next coefficient is minus the trace.

</details>

<details>
<summary>Hint 2</summary>

Keep the convention $xI-A$ rather than $A-xI$.

</details>

<details>
<summary>Worked solution</summary>

Use the signed coefficient convention.

1. For a three-by-three matrix, the coefficient of $x^2$ in $\det(xI-A)$ is the negative sum of the diagonal entries.
2. That coefficient is minus five in the supplied polynomial.
3. The trace is therefore five, independent of whether the matrix is diagonalizable.

</details>
