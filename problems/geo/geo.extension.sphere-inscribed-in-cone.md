# Find a cone insphere radius

*Medium · [Geometry and trigonometry problems](index.md)*

A right circular cone has base radius $6$ and perpendicular height $8$. A sphere inside it is tangent to the base and to the curved surface. Find the sphere radius.

```answer
{"answer":{"kind":"integer","expected":"3","checker_scope":"The exact requested finite result only; a correct entry does not certify a geometric argument or award reviewed evidence."}}
```

<details>
<summary>Hint 1</summary>

An axial section is an isosceles triangle with base $12$, altitude $8$ and equal sides found by Pythagoras.

</details>

<details>
<summary>Hint 2</summary>

The sphere cuts to its incircle; use triangle area divided by semiperimeter.

</details>

<details>
<summary>Worked solution</summary>

Reduce the solid tangencies to an axial incircle.

1. The slant height is $\sqrt{6^2+8^2}=10$, so the axial triangle has sides $10,10,12$.
2. Its area is $12\cdot8/2=48$ and semiperimeter is $16$.
3. The incircle radius is $48/16=3$. Rotating this axial incircle about the symmetry axis gives the stated tangent sphere.

</details>
