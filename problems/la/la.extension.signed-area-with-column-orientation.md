# Keep the orientation in a two-vector determinant

*Easy · [Linear algebra problems](index.md)*

Work over $\mathbb R$ unless a scalar extension is explicitly stated; all coordinates are dimensionless. For ordered vectors $u=(1,2)^T$, $v=(3,1)^T$, find their signed area $\det[u\ v]$ relative to the standard orientation.

```answer
{"answer":{"kind":"integer","expected":-5,"checker_scope":"Only the requested bounded exact value or coordinate object is checked; proof correctness is not automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

The ordered vectors are columns, not rows to be rearranged.

</details>

<details>
<summary>Hint 2</summary>

Use the two-by-two determinant before taking any absolute value.

</details>

<details>
<summary>Worked solution</summary>

An oriented volume can be negative.

1. The column matrix is $\begin{pmatrix}1&3\\2&1\end{pmatrix}$.
2. Its determinant is $1\cdot1-3\cdot2=-5$.
3. Thus the signed area is minus five; the ordinary area would instead be five.

</details>
