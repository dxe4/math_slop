# Project using a plane normal

*Medium · [Linear algebra problems](index.md)*

Find the Euclidean orthogonal projection of $(1,2,3)$ onto the plane $x+y+z=0$.

```answer
{"answer":{"kind":"vector","expected":[-1,0,1],"checker_scope":"Exact stated finite-dimensional answer only; optional personal reasoning is not graded."}}
```

<details>
<summary>Hint 1</summary>

Identify a normal vector to the plane.

</details>

<details>
<summary>Hint 2</summary>

Subtract the component in the normal direction rather than projecting onto the normal line itself.

</details>

<details>
<summary>Worked solution</summary>

A plane projection removes the perpendicular component.

1. A normal is $n=(1,1,1)$, with squared norm $3$. The input $v=(1,2,3)$ has $v\cdot n=6$.
2. The normal component is $(6/3)n=(2,2,2)$.
3. Subtraction gives $v-(2,2,2)=(-1,0,1)$, which lies in the plane. The residual is parallel to its normal, proving the projection claim.

</details>
