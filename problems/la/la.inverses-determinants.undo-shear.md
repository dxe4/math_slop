# Undo a shear

*Easy · [Linear algebra problems](index.md)*

Find the inverse of $\begin{pmatrix}1&2\\0&1\end{pmatrix}$.

```answer
{"answer":{"kind":"matrix","expected":[[1,-2],[0,1]],"checker_scope":"Exact stated finite-dimensional answer only; optional personal reasoning is not graded.","rows":2,"columns":2}}
```

<details>
<summary>Hint 1</summary>

Describe the original map as an operation on coordinates.

</details>

<details>
<summary>Hint 2</summary>

An inverse must undo the added multiple while retaining the unchanged coordinate.

</details>

<details>
<summary>Worked solution</summary>

A shear is reversed by subtracting the same multiple.

1. The original map sends $(x,y)$ to $(x+2y,y)$.
2. Given output $(u,v)$, recover $y=v$ and $x=u-2v$.
3. The inverse matrix is $\begin{pmatrix}1&-2\\0&1\end{pmatrix}$; multiplication in either order gives the identity.

</details>
