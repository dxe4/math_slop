# Prove a geometric maximum by completing a square

*Hard · [Original olympiad-style problems](index.md)*

An isosceles triangle has base $8$ and perpendicular height $6$. A rectangle has its bottom side on the base and its two top vertices on the other triangle sides. Find the greatest possible rectangle area.

<figure class="geometry"><svg viewBox="0 0 480 300" width="480" role="img" aria-label="A triangle has base 8 and height 6. A rectangle rests on the base with its top two vertices on the triangle sides; its height is free." style="max-width:100%;height:auto"><line x1="240" y1="50" x2="80" y2="250" stroke="currentColor" stroke-width="2"/><line x1="80" y1="250" x2="400" y2="250" stroke="currentColor" stroke-width="2"/><line x1="400" y1="250" x2="240" y2="50" stroke="currentColor" stroke-width="2"/><line x1="120" y1="250" x2="360" y2="250" stroke="currentColor" stroke-width="2"/><line x1="360" y1="250" x2="360" y2="200" stroke="currentColor" stroke-width="2"/><line x1="360" y1="200" x2="120" y2="200" stroke="currentColor" stroke-width="2"/><line x1="120" y1="200" x2="120" y2="250" stroke="currentColor" stroke-width="2"/><circle cx="240" cy="50" r="3" fill="currentColor"/><text x="247" y="42" fill="currentColor" font-size="16">A</text><circle cx="80" cy="250" r="3" fill="currentColor"/><text x="87" y="242" fill="currentColor" font-size="16">B</text><circle cx="400" cy="250" r="3" fill="currentColor"/><text x="407" y="242" fill="currentColor" font-size="16">C</text><circle cx="120" cy="250" r="3" fill="currentColor"/><text x="127" y="242" fill="currentColor" font-size="16">D</text><circle cx="360" cy="250" r="3" fill="currentColor"/><text x="367" y="242" fill="currentColor" font-size="16">E</text><circle cx="360" cy="200" r="3" fill="currentColor"/><text x="367" y="192" fill="currentColor" font-size="16">F</text><circle cx="120" cy="200" r="3" fill="currentColor"/><text x="127" y="192" fill="currentColor" font-size="16">G</text><text x="130" y="285" fill="currentColor" font-size="15">Triangle base 8; height 6</text></svg><figcaption>Schematic, not drawn to scale. Use the stated data rather than measuring the image.</figcaption></figure>

```answer
{"answer":{"kind":"integer","expected":"12","checker_scope":"Exact short answer only; the complete argument remains a worked solution, not an automatically certified proof or contest result."}}
```

<details>
<summary>Hint 1</summary>

At a fixed rectangle height, similar triangles determine the available width.

</details>

<details>
<summary>Hint 2</summary>

The area is a concave quadratic in the rectangle height.

</details>

<details>
<summary>Worked solution</summary>

Similarity expresses the width, and a sharp quadratic bound gives the maximal area.

1. For rectangle height h between zero and six, the width at that level is $8(1-h/6)$.
2. The area is $8h-(4/3)h^2=12-(4/3)(h-3)^2$.
3. The maximum is $12$, attained at height three and width four.

</details>
