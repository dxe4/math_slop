# Shear preserves triangle area

*Medium · [Original Putnam-style training](index.md)*

The linear shear $T(x,y)=(x+2y,y)$ maps a triangle of area $7/2$ to another triangle. Find the image area.

```answer
{"answer":{"kind":"rational","expected":{"numerator":7,"denominator":2},"checker_scope":"Only the exact bounded answer is checked; the argument and assumptions are not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Write the matrix of $T$ and compute its determinant.

</details>

<details>
<summary>Hint 2</summary>

Area scales by the absolute determinant.

</details>

<details>
<summary>Worked solution</summary>

The image area is $7/2$.

1. The shear matrix is $\begin{pmatrix}1&2\\0&1\end{pmatrix}$ with determinant one.
2. Every triangle area scales by the absolute determinant of the linear map, so this shear preserves area.
3. The image area is $7/2$.

</details>
