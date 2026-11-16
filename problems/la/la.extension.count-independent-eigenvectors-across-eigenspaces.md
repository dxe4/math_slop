# Combine geometric multiplicities

*Easy · [Linear algebra problems](index.md)*

Work over $\mathbb R$; vectors are columns and all data are dimensionless. A real $4\times4$ matrix has characteristic polynomial $(x-2)^3(x+1)$, with $\dim\ker(A-2I)=2$. Find the maximum number of linearly independent real eigenvectors.

```answer
{"answer":{"kind":"integer","expected":3,"checker_scope":"Only the requested bounded exact result is checked; no unrestricted proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

The eigenspace of the simple eigenvalue has dimension one.

</details>

<details>
<summary>Hint 2</summary>

Eigenspaces belonging to distinct eigenvalues form a direct sum.

</details>

<details>
<summary>Worked solution</summary>

Use geometric rather than algebraic multiplicity to count eigenvectors.

1. The eigenvalue minus one has algebraic multiplicity one, hence a one-dimensional eigenspace.
2. The two-dimensional eigenspace for two is independent of that line.
3. Their direct sum has dimension three and contains every eigenvector, so three is the maximum; the matrix is not diagonalizable.

</details>
