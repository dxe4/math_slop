# Use a block determinant to count graph trees

*Hard · [Original Putnam-style training](index.md)*

How many spanning trees does the complete bipartite graph $K_{3,4}$ have? Vertices are individually labeled.

```answer
{"answer":{"kind":"integer","expected":"432","checker_scope":"Exact requested bounded value only; a correct numerical answer does not certify the full university-level argument or a contest result."}}
```

<details>
<summary>Hint 1</summary>

Use the matrix-tree theorem on a Laplacian minor.

</details>

<details>
<summary>Hint 2</summary>

Delete a vertex from the four-vertex part and take a Schur complement of the diagonal block for the other part.

</details>

<details>
<summary>Worked solution</summary>

The graph symmetry reduces the tree determinant to a scalar-plus-ones matrix.

1. Deleting one vertex of the four-vertex part leaves the Laplacian minor $\begin{pmatrix}4I_3&-J_3\\-J_3&3I_3\end{pmatrix}$, where J\_3 is all ones.
2. The matrix-tree theorem counts spanning trees by this determinant. The Schur complement gives $4^3\det(3I_3-(3/4)J_3)$.
3. J\_3 has eigenvalues three, zero, zero, so the last matrix has eigenvalues 3/4,3,3. The count is $64\cdot(3/4)\cdot9=432$.

</details>
