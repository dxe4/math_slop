# Prescribe a least-squares residual size

*Hard · [Linear algebra problems](index.md)*

Let $A=\begin{pmatrix}1&0\\1&1\\1&2\end{pmatrix}$ and $b(t)=(1,0,t)^T$ for real $t$. Find every $t$ for which $\min_{x\in\mathbb R^2}\|Ax-b(t)\|^2=3/2$.

```answer
{"answer":{"kind":"set","expected":[-4,2],"checker_scope":"Exact stated finite-dimensional answer only; optional personal reasoning is not graded."}}
```

<details>
<summary>Hint 1</summary>

The best residual is the component of the data perpendicular to the column space.

</details>

<details>
<summary>Hint 2</summary>

Find a nonzero vector annihilated by the transpose, then use its norm to compute that perpendicular component.

</details>

<details>
<summary>Worked solution</summary>

Use the one-dimensional orthogonal complement of the model space to avoid solving a parameterized fit.

1. The columns of $A$ are independent, so their orthogonal complement in $\mathbb R^3$ is one-dimensional.
2. The vector $w=(1,-2,1)$ is perpendicular to both columns, and $\|w\|^2=6$.
3. The orthogonal component of $b(t)$ is $\frac{b(t)\cdot w}{6}w=\frac{1+t}{6}w$. Thus the minimum squared residual is $(1+t)^2/6$.
4. Setting this equal to $3/2$ gives $(1+t)^2=9$, so $1+t=3$ or $1+t=-3$.
5. The complete set is $\{-4,2\}$. Both choices yield the required minimum squared residual.

</details>
