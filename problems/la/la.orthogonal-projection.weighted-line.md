# Project in a weighted geometry

*Medium · [Linear algebra problems](index.md)*

On $\mathbb R^2$, use $\langle u,v\rangle=u_1v_1+2u_2v_2$. Find the orthogonal projection of $(3,0)$ onto $\operatorname{span}\{(1,1)\}$ for this inner product.

```answer
{"answer":{"kind":"vector","expected":[1,1],"checker_scope":"Exact stated finite-dimensional answer only; optional personal reasoning is not graded."}}
```

<details>
<summary>Hint 1</summary>

The one-dimensional projection formula uses the stated inner product in both numerator and denominator.

</details>

<details>
<summary>Hint 2</summary>

Compute a weighted residual orthogonality condition as a final check.

</details>

<details>
<summary>Worked solution</summary>

The projection formula adapts to any positive definite inner product.

1. With $v=(3,0)$ and $u=(1,1)$, $\langle v,u\rangle=3$ and $\langle u,u\rangle=3$.
2. The coefficient is $1$, so the projection is $(1,1)$.
3. The residual $(2,-1)$ satisfies $\langle(2,-1),(1,1)\rangle=2-2=0$. Enter $[1,1]$.

</details>
