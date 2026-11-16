# Determine a circle from two points and a center line

*Medium · [Geometry and trigonometry problems](index.md)*

A circle passes through $(0,0)$ and $(4,0)$, and its center lies on $y=x+1$. Find $[h,k,r^2]$ for its center and squared radius.

```answer
{"answer":{"kind":"vector","expected":["2","3","13"],"checker_scope":"The exact requested finite result only; a correct entry does not certify a geometric argument or award reviewed evidence."}}
```

<details>
<summary>Hint 1</summary>

The center is on the perpendicular bisector of the given chord.

</details>

<details>
<summary>Hint 2</summary>

Intersect that bisector with the prescribed center line.

</details>

<details>
<summary>Worked solution</summary>

Use two independent center constraints.

1. The perpendicular bisector of the horizontal chord is $x=2$.
2. The center-line condition then gives $y=3$.
3. The squared radius is the squared distance to $(0,0)$, namely $2^2+3^2=13$. Thus the vector is $[2,3,13]$.

</details>
