# A maximal area with one side fixed

*Hard · [Original olympiad-style problems](index.md)*

On a circle of radius $R$, fix distinct nonantipodal points $A,B$ whose minor arc has measure $2\alpha$, where $0<\alpha<\pi/2$. Among convex cyclic quadrilaterals $ABCD$ with $A,B,C,D$ in that order and with the minor arc $AB$ as a side arc, prove that area is maximized when the other three successive arcs are equal. Determine the maximum in terms of $R,\alpha$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

If the other successive arc measures are $x,y,z>0$, their sum is $S=2\pi-2\alpha\in(\pi,2\pi)$. The signed triangle area formula gives area $R^2(\sin2\alpha+\sin x+\sin y+\sin z)/2$.

</details>

<details>
<summary>Hint 2</summary>

If one of $x,y,z$ is at least $\pi$, their sine sum is at most $2$, less than the equal-arc candidate. Otherwise use strict concavity of sine on $(0,\pi)$.

</details>

<details>
<summary>Model proof</summary>

A large-arc case must be excluded before applying concavity to all three arcs.

1. Triangulate with the center using signed areas; the formula in the first hint remains valid even if the center is outside the quadrilateral. The fixed arc contributes $\sin2\alpha$, so only the remaining sine sum varies.
2. If an arc is at least $\pi$, its sine is nonpositive and the other two contribute at most $2$. At equality of all three arcs the sum is $3\sin(S/3)$; since $S/3\in(\pi/3,2\pi/3)$, this is greater than $3\sqrt3/2>2$. Such a large arc therefore cannot maximize.
3. When all three arcs belong to $(0,\pi)$, strict concavity yields $\sin x+\sin y+\sin z\le3\sin(S/3)$, with equality exactly when $x=y=z=S/3$. These arc values give distinct points in the allowed cyclic order.
4. The maximum is consequently $\frac{R^2}{2}[\sin(2\alpha)+3\sin((2\pi-2\alpha)/3)]$, with precisely the equal-arc configuration as equality.

**Self-assessment rubric**

- Use a formula valid even when the center is outside the quadrilateral.
- Exclude the region where sine concavity cannot be applied.
- Apply concavity on its correct interval and derive equal arcs.
- State the exact area and verify a valid cyclic equality configuration.

</details>
