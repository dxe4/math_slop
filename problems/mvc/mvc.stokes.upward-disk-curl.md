# Compute curl flux through an oriented disk

*Medium · [Multivariable calculus problems](index.md)*

Let $F=(-y/2,x/2,0)$ and $S=\{(x,y,0):x^2+y^2\leq1\}$ with upward unit normal. Compute $\frac1\pi\iint_S(\nabla\times F)\cdot n\,dS$.

```answer
{"answer":{"kind":"integer","expected":"1","checker_scope":"Exact requested integral value only; orientation and theorem hypotheses are explained in the model solution, not automatically certified by the scalar verdict."}}
```

<details>
<summary>Hint 1</summary>

Compute the curl before integrating.

</details>

<details>
<summary>Hint 2</summary>

The surface is flat and its chosen normal points in the positive $z$ direction.

</details>

<details>
<summary>Worked solution</summary>

The smooth field has constant curl aligned with the chosen disk normal.

1. The curl is $(0,0,1)$, since $\partial_x(x/2)-\partial_y(-y/2)=1$.
2. The upward normal is $(0,0,1)$, so the flux density is $1$.
3. The disk area is $\pi$, yielding normalized flux $1$; Stokes theorem gives the same positively oriented boundary circulation.

</details>
