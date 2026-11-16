# Find a convex quadrilateral among five points

*Hard · [Geometry and trigonometry problems](index.md)*

Five distinct plane points $P_1,\ldots,P_5$ are given, with no three collinear. Prove that four of them are the vertices of a strictly convex quadrilateral. Give a proof covering both possible sizes of the outer convex hull.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only. No automatic verdict, graded evidence or checkpoint credit is awarded."}}
```

<details>
<summary>Hint 1</summary>

If the outer hull has at least four vertices, select four of those vertices in boundary order.

</details>

<details>
<summary>Hint 2</summary>

If the hull is a triangle, draw the line through the two interior points and choose two outer vertices on the same side of that line.

</details>

<details>
<summary>Model proof</summary>

Use a supporting line of a four-point subset in the triangular-hull case.

1. The full convex hull has at least three vertices because no three points are collinear. If it has four or five vertices, any four hull vertices in boundary order form a strictly convex quadrilateral: each remains extreme in the chosen subset.
2. Otherwise the outer hull is a triangle with vertices $A,B,C$, and the remaining points $D,E$ lie strictly inside it. No outer vertex lies on line $DE$ by the no-three-collinear condition.
3. Among the three outer vertices, at least two, say $A,B$, lie in the same open half-plane bounded by $DE$. Thus line $DE$ supports the convex hull of the subset $A,B,D,E$, and its intersection with that hull is exactly segment $DE$.
4. The endpoints $D,E$ of this supporting segment are extreme points of the subset hull. The points $A,B$ are also extreme, because they were already extreme points of the full five-point hull.
5. The four points are therefore all vertices of their convex hull. No three are collinear, so this hull is a strictly convex quadrilateral. This completes the triangular-hull case and the proof.

**Self-assessment rubric**

- Justify the selection from a hull with four or more vertices.
- Locate the remaining two points strictly inside the hull triangle.
- Choose two outer vertices in one open half-plane of their line.
- Prove all four selected points are extreme and hence form a strict quadrilateral.

</details>
