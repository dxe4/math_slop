# Count how often each eigenvalue enters exterior volume

*Medium · [Linear algebra problems](index.md)*

For an invertible real $4\times4$ matrix with determinant three, find $\det(\Lambda^2 A)$. Use the usual ordered exterior-square basis.

```answer
{"answer":{"kind":"integer","expected":27,"checker_scope":"Only the specified finite invariant or rational coordinate object is checked. Tensor and operator reasoning are not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

The exterior-square eigenvalues are the pairwise products of the original four eigenvalues.

</details>

<details>
<summary>Hint 2</summary>

Count the number of pairs containing any fixed eigenvalue.

</details>

<details>
<summary>Worked solution</summary>

The induced exterior determinant has a predictable multiplicity exponent.

1. Over the complex field triangularize A; the exterior-square matrix is triangular with six diagonal entries $\lambda_i\lambda_j$ for $i<j$.
2. Each of the four original eigenvalues occurs in three such pairs, so the determinant is $(\prod_i\lambda_i)^3=(\det A)^3$.
3. Thus the result is $3^3=27$, with no assumption that A is diagonalizable.

</details>
