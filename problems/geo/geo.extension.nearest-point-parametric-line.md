# Find the foot on a parametric line

*Medium · [Geometry and trigonometry problems](index.md)*

Find the point of the line $(x,y)=(3,1)+t(2,-1)$ nearest to the origin. Enter $[x,y]$.

```answer
{"answer":{"kind":"vector","expected":["1","2"],"checker_scope":"The exact requested finite result only; a correct entry does not certify a geometric argument or award reviewed evidence."}}
```

<details>
<summary>Hint 1</summary>

At the nearest point, its position vector is perpendicular to the line direction.

</details>

<details>
<summary>Hint 2</summary>

Solve $((3,1)+t(2,-1))\cdot(2,-1)=0$.

</details>

<details>
<summary>Worked solution</summary>

Use a perpendicular residual to identify the closest point.

1. The orthogonality equation is $5+5t=0$, giving $t=-1$.
2. The corresponding point is $(3,1)-(2,-1)=(1,2)$.
3. Every other line point is this foot plus a multiple of $(2,-1)$; the squared distance adds a nonnegative term, proving minimality.

</details>
