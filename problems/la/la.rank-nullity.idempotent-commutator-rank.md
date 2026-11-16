# Bound an idempotent commutator

*Hard · [Linear algebra problems](index.md)*

Let $A,B$ be real $3\times3$ matrices with $A^2=A$ and $\operatorname{rank}A=1$. What is the largest possible rank of $AB-BA$?

```answer
{"answer":{"kind":"integer","expected":2,"checker_scope":"Exact stated finite-dimensional answer only; optional personal reasoning is not graded."}}
```

<details>
<summary>Hint 1</summary>

Split the space into the image and kernel of the idempotent map.

</details>

<details>
<summary>Hint 2</summary>

In a basis adapted to that splitting, identify the blocks that cancel in the commutator.

</details>

<details>
<summary>Worked solution</summary>

The idempotent splitting limits the commutator to two off-diagonal blocks.

1. Since $A^2=A$, every vector splits as $Ax+(x-Ax)$, in $\operatorname{im}A$ and $\ker A$ respectively; their intersection is zero.
2. In an adapted basis, $A=\operatorname{diag}(1,0,0)$. Write $B=\begin{pmatrix}b&r\\c&D\end{pmatrix}$ in blocks of sizes $1,2$.
3. Then $AB-BA=\begin{pmatrix}0&r\\-c&0\end{pmatrix}$. Each off-diagonal block contributes rank at most one, so the total rank is at most two.
4. Take $A=\operatorname{diag}(1,0,0)$ and $B=\begin{pmatrix}0&1&0\\1&0&0\\0&0&0\end{pmatrix}$. The commutator is $\begin{pmatrix}0&1&0\\-1&0&0\\0&0&0\end{pmatrix}$, which has rank two.
5. The bound is attained, so the largest possible rank is $2$.

</details>
