# Justify a compass perpendicular-bisector construction

*Medium · [Geometry and trigonometry problems](index.md)*

For $A\ne B$, choose a compass radius $r>AB/2$. Circles of radius $r$ centered at $A,B$ meet at distinct points $P,Q$. Prove line $PQ$ is the perpendicular bisector of $AB$, and explain why the strict radius condition matters.

<figure class="geometry"><svg viewBox="0 0 480 300" width="480" role="img" aria-label="Equal-radius circles centered at distinct A and B meet at P and Q. Their radius r is greater than half AB. The constructed line passes through P and Q." style="max-width:100%;height:auto"><circle cx="180" cy="200" r="100" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="300" cy="200" r="100" fill="none" stroke="currentColor" stroke-width="2"/><line x1="180" y1="200" x2="300" y2="200" stroke="currentColor" stroke-width="2"/><line x1="240" y1="120" x2="240" y2="280" stroke="currentColor" stroke-width="2"/><circle cx="180" cy="200" r="3" fill="currentColor"/><text x="187" y="192" fill="currentColor" font-size="16">A</text><circle cx="300" cy="200" r="3" fill="currentColor"/><text x="307" y="192" fill="currentColor" font-size="16">B</text><circle cx="240" cy="120" r="3" fill="currentColor"/><text x="247" y="112" fill="currentColor" font-size="16">P</text><circle cx="240" cy="280" r="3" fill="currentColor"/><text x="247" y="272" fill="currentColor" font-size="16">Q</text><text x="120" y="345" fill="currentColor" font-size="15">Same compass radius r; r &gt; AB/2</text></svg><figcaption>Construction schematic, not drawn to scale. The supplied hypothesis is r greater than half AB; no length is inferred from the drawing.</figcaption></figure>

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only. No automatic verdict, graded evidence or checkpoint credit is awarded."}}
```

<details>
<summary>Hint 1</summary>

Both intersections are equidistant from $A,B$.

</details>

<details>
<summary>Hint 2</summary>

The equal-radius circle centers are symmetric about the midpoint of $AB$; use the right-triangle height to distinguish two intersections from one.

</details>

<details>
<summary>Model proof</summary>

Apply the equidistance locus to both constructed points.

1. The intersections satisfy $PA=PB=r$ and $QA=QB=r$. Every point equidistant from distinct $A,B$ lies on their perpendicular bisector, as follows by subtracting squared distances.
2. Thus the distinct points $P,Q$ both lie on that line and determine it.
3. If $M$ is the midpoint, each intersection height above or below $AB$ has square $r^2-(AB/2)^2>0$. Therefore there are two distinct points on opposite sides.
4. At equality $r=AB/2$ the circles touch only at $M$, so no line $PQ$ is determined; below it the circles do not meet.

**Self-assessment rubric**

- Show both constructed points belong to the exact perpendicular-bisector locus.
- Use distinctness to identify the whole line.
- Explain both failure cases when the strict radius inequality is removed.

</details>
