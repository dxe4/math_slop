# Discard an interior point when finding a hull

*Medium · [Geometry and trigonometry problems](index.md)*

Find the area of the convex hull of $(0,0),(6,0),(0,4),(1,1)$.

```answer
{"answer":{"kind":"integer","expected":"12","checker_scope":"The exact requested finite result only; a correct entry does not certify a geometric argument or award reviewed evidence."}}
```

<details>
<summary>Hint 1</summary>

Check whether $(1,1)$ is inside the triangle formed by the other three points.

</details>

<details>
<summary>Hint 2</summary>

That triangle is given by $x\ge0,y\ge0,x/6+y/4\le1$.

</details>

<details>
<summary>Worked solution</summary>

Identify the actual hull before measuring it.

1. The point $(1,1)$ has positive coordinates and $1/6+1/4=5/12<1$, so it lies strictly inside the triangle of the other three points.
2. Adding an interior point does not enlarge a convex hull.
3. The hull is the right triangle with perpendicular legs $6,4$, of area $6\cdot4/2=12$.

</details>
