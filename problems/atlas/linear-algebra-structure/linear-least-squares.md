# A best constant fit

*Difficulty 4 of 5 · [Linear algebra as structure](index.md) · exercise 5 of 11*

Find the constant $c$ minimizing $(1-c)^2+(2-c)^2+(6-c)^2$. Solve by calculus, then explain it as an orthogonal projection.

<details>
<summary>Hint 1</summary>

Differentiate with respect to $c$

</details>

<details>
<summary>Hint 2</summary>

Project $(1,2,6)$ onto the span of $(1,1,1)$

</details>

<details>
<summary>Worked solution</summary>

Differentiate $E(c)$: $E'(c)=2(c-1)+2(c-2)+2(c-6)=6c-18$, so $c=3$. Since $E''(c)=6>0$ this is the minimum. Geometrically, fitted vectors have form $c(1,1,1)$. At $c=3$ the residual $(-2,-1,3)$ has dot product $-2-1+3=0$ with $(1,1,1)$, so the residual is orthogonal to the model subspace. Thus $(3,3,3)$ is the orthogonal projection of the data.

**Answer.** $c=3$; the residual $(-2,-1,3)$ is orthogonal to $(1,1,1)$.

</details>

*Tags: least squares, projection, optimization*
