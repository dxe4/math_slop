# Prove the midpoint quadrilateral area relation

*Medium · [Geometry and trigonometry problems](index.md)*

Let $A,B,C,D$ be a strictly convex quadrilateral and $E,F,G,H$ the midpoints of $AB,BC,CD,DA$. Prove $[EFGH]=[ABCD]/2$. Use a partition into the central quadrilateral and four corner triangles.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only. No automatic verdict, graded evidence or checkpoint credit is awarded."}}
```

<details>
<summary>Hint 1</summary>

Each corner triangle has one quarter the area of the triangle formed by its corner and the two neighboring original vertices.

</details>

<details>
<summary>Hint 2</summary>

The four larger triangles have total area twice the original quadrilateral.

</details>

<details>
<summary>Model proof</summary>

Use a supplied area partition with midpoint scale factors.

1. Triangles $AEH,BFE,CGF,DHG$ each have both adjacent sides halved, so their areas are one quarter of $[DAB],[ABC],[BCD],[CDA]$, respectively.
2. The diagonal $AC$ shows $[ABC]+[CDA]=[ABCD]$. The diagonal $BD$ shows $[DAB]+[BCD]=[ABCD]$.
3. The four corner areas therefore total $[ABCD]/2$.
4. Convexity makes the central region and corner triangles a partition without overlaps. Subtracting the corners leaves $[EFGH]=[ABCD]/2$.

**Self-assessment rubric**

- Establish the quarter-area factor for all four corners.
- Use both diagonal partitions to sum the larger triangles.
- Justify the disjoint partition and subtract the corner total.

</details>
