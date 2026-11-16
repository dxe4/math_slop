# Measure a three-dimensional point-plane distance

*Medium · [Geometry and trigonometry problems](index.md)*

In Euclidean three-space, find the perpendicular distance from the origin to plane $2x-y+2z=9$.

```answer
{"answer":{"kind":"integer","expected":"3","checker_scope":"The exact requested finite result only; a correct entry does not certify a geometric argument or award reviewed evidence."}}
```

<details>
<summary>Hint 1</summary>

The coefficient normal is $(2,-1,2)$.

</details>

<details>
<summary>Hint 2</summary>

Divide the absolute residual at the origin by the normal length.

</details>

<details>
<summary>Worked solution</summary>

Use the unit-normal coordinate of the plane.

1. The normal length is $\sqrt{4+1+4}=3$.
2. The origin has residual $-9$ in $2x-y+2z-9=0$.
3. The distance is $|-9|/3=3$.

</details>
