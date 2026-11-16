# Account for a concave indentation

*Medium · [Geometry and trigonometry problems](index.md)*

A simple polygon has boundary-order vertices $(0,0),(6,0),(6,4),(3,2),(0,4)$. Find its area.

```answer
{"answer":{"kind":"integer","expected":"18","checker_scope":"The exact requested finite result only; a correct entry does not certify a geometric argument or award reviewed evidence."}}
```

<details>
<summary>Hint 1</summary>

View the polygon as a rectangle with a triangular notch.

</details>

<details>
<summary>Hint 2</summary>

The notch has base $6$ along the top edge and perpendicular height $2$.

</details>

<details>
<summary>Worked solution</summary>

Subtract the missing triangle from the bounding rectangle.

1. The bounding rectangle is $6$ by $4$, of area $24$.
2. The notch triangle has base $6$ and height $4-2=2$, so its area is $6$.
3. The polygon area is $24-6=18$; taking its convex hull would incorrectly keep the notch.

</details>
