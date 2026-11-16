# Find an upper intersection of two circles

*Medium · [Geometry and trigonometry problems](index.md)*

Two circles have equations $x^2+y^2=25$ and $(x-6)^2+y^2=25$. Find their intersection with positive $y$ as $[x,y]$.

```answer
{"answer":{"kind":"vector","expected":["3","4"],"checker_scope":"The exact requested finite result only; a correct entry does not certify a geometric argument or award reviewed evidence."}}
```

<details>
<summary>Hint 1</summary>

Subtract the equations to eliminate both squared variables.

</details>

<details>
<summary>Hint 2</summary>

Substitute the resulting $x$ into either circle and choose the positive root for $y$.

</details>

<details>
<summary>Worked solution</summary>

Use the radical axis to reduce to one coordinate.

1. Subtraction gives $-12x+36=0$, hence $x=3$.
2. The first equation then gives $y^2=25-9=16$.
3. The specified positive ordinate gives the point $[3,4]$.

</details>
