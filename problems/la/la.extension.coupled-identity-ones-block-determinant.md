# Evaluate a coupled six-dimensional determinant structurally

*Hard · [Linear algebra problems](index.md)*

Work over $\mathbb R$ unless a scalar extension is explicitly stated; all coordinates are dimensionless. Let $J$ be the $3\times3$ all-ones matrix. Find $\det\begin{pmatrix}4I_3&-J\\-J&3I_3\end{pmatrix}$ without expanding a six-by-six determinant entry by entry.

```answer
{"answer":{"kind":"integer","expected":432,"checker_scope":"Only the requested bounded exact value or coordinate object is checked; proof correctness is not automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

Eliminate the invertible first diagonal block.

</details>

<details>
<summary>Hint 2</summary>

The resulting three-by-three matrix is a scalar identity plus an all-ones term; separate the constant direction from its sum-zero complement.

</details>

<details>
<summary>Worked solution</summary>

Combine a Schur complement with a two-subspace spectral decomposition.

1. The determinant equals $4^3\det(3I_3-J^2/4)$ by block elimination.
2. Since $J^2=3J$, the remaining matrix is $3I_3-(3/4)J$. It acts by $3/4$ on the constant line and by three on the two-dimensional sum-zero subspace.
3. The determinant is therefore $64\cdot(3/4)\cdot3^2=432$. The smaller nonconstant block is invertible, so no zero mode was discarded in the reduction.

</details>
