# Determine an orthogonal square from trace and orientation

*Hard · [Linear algebra problems](index.md)*

Work over $\mathbb R$; vectors are columns and all data are dimensionless. An unknown real $3\times3$ orthogonal matrix $Q$ has $\det Q=1$ and $\operatorname{tr}Q=-1$. Find $Q^2$.

```answer
{"answer":{"kind":"matrix","expected":[["1","0","0"],["0","1","0"],["0","0","1"]],"checker_scope":"Only the requested bounded exact result is checked; no unrestricted proof is automatically assessed.","rows":3,"columns":3}}
```

<details>
<summary>Hint 1</summary>

Use the conjugate pairing and unit modulus of nonreal orthogonal eigenvalues.

</details>

<details>
<summary>Hint 2</summary>

The determinant fixes a real eigenvalue, after which the trace fixes the remaining pair.

</details>

<details>
<summary>Worked solution</summary>

Combine orthogonal normality, orientation and the extremal trace.

1. An orthogonal matrix has complex eigenvalues of modulus one, and its nonreal eigenvalues pair with their conjugates. In odd real dimension at least one eigenvalue is real; determinant one forces an eigenvalue one.
2. The other two eigenvalues have sum minus two and modulus one. Equality in this real-part bound forces both to be minus one.
3. Orthogonal matrices are normal and diagonalizable over the complex field. Their squared eigenvalues are all one, so $Q^2=I_3$ regardless of the orthogonal eigenbasis.

</details>
