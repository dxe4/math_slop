# Change between two coordinate bases

*Medium · [Linear algebra problems](index.md)*

Let $B=((1,1),(1,-1))$ and $C=((2,0),(1,1))$. Find the matrix $M$ satisfying $[w]_C=M[w]_B$ for every $w\in\mathbb R^2$.

```answer
{"answer":{"kind":"matrix","expected":[[0,1],[1,-1]],"checker_scope":"Exact stated finite-dimensional answer only; optional personal reasoning is not graded.","rows":2,"columns":2}}
```

<details>
<summary>Hint 1</summary>

The columns of the change-of-coordinate matrix are the new coordinates of the old basis vectors.

</details>

<details>
<summary>Hint 2</summary>

Expand each vector of the first ordered basis using the second ordered basis.

</details>

<details>
<summary>Worked solution</summary>

Express the source basis in target coordinates, one column at a time.

1. The first vector of $B$ is $(1,1)=0(2,0)+1(1,1)$, so its $C$-coordinates are $(0,1)^T$.
2. The second is $(1,-1)=1(2,0)-1(1,1)$, giving coordinates $(1,-1)^T$.
3. Using those coordinate columns gives $M=\begin{pmatrix}0&1\\1&-1\end{pmatrix}$.

</details>
