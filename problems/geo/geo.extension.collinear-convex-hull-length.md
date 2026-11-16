# Measure a collinear convex hull

*Easy · [Geometry and trigonometry problems](index.md)*

Points on the horizontal axis have abscissae $-2,1,5$. Find the length of their convex hull.

```answer
{"answer":{"kind":"integer","expected":"7","checker_scope":"The exact requested finite result only; a correct entry does not certify a geometric argument or award reviewed evidence."}}
```

<details>
<summary>Hint 1</summary>

The convex hull of collinear points is the segment between the extreme points.

</details>

<details>
<summary>Hint 2</summary>

Take the largest coordinate minus the smallest.

</details>

<details>
<summary>Worked solution</summary>

Use the extreme endpoints of a one-dimensional hull.

1. The leftmost coordinate is $-2$ and the rightmost $5$.
2. The middle point already lies in the segment joining them.
3. The hull length is $5-(-2)=7$.

</details>
