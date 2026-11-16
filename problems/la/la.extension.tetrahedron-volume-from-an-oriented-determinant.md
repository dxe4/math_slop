# Convert a signed determinant to simplex volume

*Medium · [Linear algebra problems](index.md)*

Work over $\mathbb R$ unless a scalar extension is explicitly stated; all coordinates are dimensionless. Find the ordinary volume of the tetrahedron with vertices $0$, $(1,0,1)$, $(0,2,1)$ and $(1,1,0)$ in standard Euclidean coordinates.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":2},"checker_scope":"Only the requested bounded exact value or coordinate object is checked; proof correctness is not automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

The three nonzero vertices are edge columns from the origin.

</details>

<details>
<summary>Hint 2</summary>

A tetrahedron occupies one sixth of the corresponding parallelepiped volume.

</details>

<details>
<summary>Worked solution</summary>

Keep signed determinant, absolute volume and simplex normalization separate.

1. The edge determinant is $\det\begin{pmatrix}1&0&1\\0&2&1\\1&1&0\end{pmatrix}=-3$.
2. The parallelepiped has ordinary volume three after taking the absolute value.
3. The tetrahedron volume is $3/6=1/2$. The determinant sign records orientation and does not make an ordinary volume negative.

</details>
