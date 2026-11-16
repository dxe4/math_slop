# Use chord geometry with two tangents

*Hard · [Original olympiad-style problems](index.md)*

In a circle centered at O, chord AB has length $10$ and perpendicular distance $5$ from O. The tangents at A and B meet at P on the side of the chord opposite O. Find OP.

<figure class="geometry"><svg viewBox="0 0 480 300" width="480" role="img" aria-label="Chord AB has length 10 and center distance OM=5. Tangents at A and B meet at P beyond the chord, away from O." style="max-width:100%;height:auto"><circle cx="200" cy="160" r="84.853" fill="none" stroke="currentColor" stroke-width="2"/><line x1="260" y1="100" x2="260" y2="220" stroke="currentColor" stroke-width="2"/><line x1="200" y1="160" x2="320" y2="160" stroke="currentColor" stroke-width="2"/><line x1="260" y1="100" x2="320" y2="160" stroke="currentColor" stroke-width="2"/><line x1="260" y1="220" x2="320" y2="160" stroke="currentColor" stroke-width="2"/><line x1="200" y1="160" x2="260" y2="100" stroke="currentColor" stroke-width="2"/><circle cx="200" cy="160" r="3" fill="currentColor"/><text x="207" y="152" fill="currentColor" font-size="16">O</text><circle cx="260" cy="100" r="3" fill="currentColor"/><text x="267" y="92" fill="currentColor" font-size="16">A</text><circle cx="260" cy="220" r="3" fill="currentColor"/><text x="267" y="212" fill="currentColor" font-size="16">B</text><circle cx="260" cy="160" r="3" fill="currentColor"/><text x="267" y="152" fill="currentColor" font-size="16">M</text><circle cx="320" cy="160" r="3" fill="currentColor"/><text x="327" y="152" fill="currentColor" font-size="16">P</text><text x="20" y="280" fill="currentColor" font-size="15">AB = 10; OM = 5; OM perpendicular to AB</text></svg><figcaption>Schematic, not drawn to scale. Use the stated data rather than measuring the image.</figcaption></figure>

```answer
{"answer":{"kind":"integer","expected":"10","checker_scope":"Exact short answer only; the complete argument remains a worked solution, not an automatically certified proof or contest result."}}
```

<details>
<summary>Hint 1</summary>

Let M be the chord midpoint and first find the squared radius.

</details>

<details>
<summary>Hint 2</summary>

The right triangles OMA and OAP give the relation OM times OP equals the radius squared.

</details>

<details>
<summary>Worked solution</summary>

Similar right triangles relate the chord distance and the tangent-intersection distance.

1. We have AM=5 and OM=5, so $OA^2=5^2+5^2=50$.
2. The equal tangent lengths and equal radii put O,M,P on the perpendicular bisector of AB. Right triangles OMA and OAP are similar, giving $OM/OA=OA/OP$.
3. Hence $OP=OA^2/OM=50/5=10$.

</details>
