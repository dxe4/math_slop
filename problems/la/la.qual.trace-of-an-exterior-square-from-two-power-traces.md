# Recover an exterior trace from power sums

*Medium · [Linear algebra problems](index.md)*

A real matrix A satisfies $\operatorname{tr}A=5$ and $\operatorname{tr}(A^2)=13$. Find $\operatorname{tr}(\Lambda^2 A)$. Assume its dimension is at least two.

```answer
{"answer":{"kind":"integer","expected":6,"checker_scope":"Only the specified finite invariant or rational coordinate object is checked. Tensor and operator reasoning are not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

After triangularization over the complex field, exterior-square diagonal entries are all pairwise eigenvalue products.

</details>

<details>
<summary>Hint 2</summary>

Expand the square of the sum of eigenvalues and separate the repeated-index terms.

</details>

<details>
<summary>Worked solution</summary>

An exterior trace records unordered pairs rather than all ordered pairs.

1. If the eigenvalues with algebraic multiplicity are $\lambda_i$, the exterior-square trace is $\sum_{i<j}\lambda_i\lambda_j$, also valid for nondiagonalizable matrices by triangularization.
2. The identity $(\sum\lambda_i)^2=\sum\lambda_i^2+2\sum_{i<j}\lambda_i\lambda_j$ gives half the difference of the two supplied traces.
3. The value is $(25-13)/2=6$.

</details>
