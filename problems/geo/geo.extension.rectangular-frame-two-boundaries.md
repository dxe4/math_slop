# Count both boundaries of a frame

*Medium · [Geometry and trigonometry problems](index.md)*

A rectangular frame has outer dimensions $8$ cm by $6$ cm and a uniform border width $1$ cm measured perpendicular to each side. The inner hole is rectangular. Find the sum of the outer and inner boundary lengths in centimetres.

<figure class="geometry"><svg viewBox="0 0 480 300" width="480" role="img" aria-label="A rectangular frame has outer dimensions 8 cm by 6 cm and a uniform 1 cm border. Both outside and hole boundaries are part of the requested length." style="max-width:100%;height:auto"><line x1="40" y1="40" x2="400" y2="40" stroke="currentColor" stroke-width="2"/><line x1="400" y1="40" x2="400" y2="280" stroke="currentColor" stroke-width="2"/><line x1="400" y1="280" x2="40" y2="280" stroke="currentColor" stroke-width="2"/><line x1="40" y1="280" x2="40" y2="40" stroke="currentColor" stroke-width="2"/><line x1="80" y1="80" x2="360" y2="80" stroke="currentColor" stroke-width="2"/><line x1="360" y1="80" x2="360" y2="240" stroke="currentColor" stroke-width="2"/><line x1="360" y1="240" x2="80" y2="240" stroke="currentColor" stroke-width="2"/><line x1="80" y1="240" x2="80" y2="80" stroke="currentColor" stroke-width="2"/><text x="160" y="25" fill="currentColor" font-size="15">Outer width 8 cm</text><text x="405" y="160" fill="currentColor" font-size="15">6 cm</text><text x="130" y="65" fill="currentColor" font-size="15">Uniform border 1 cm</text><text x="180" y="160" fill="currentColor" font-size="15">Rectangular hole</text></svg><figcaption>Schematic, not drawn to scale. Use the stated outer dimensions and border width; do not measure the image.</figcaption></figure>

```answer
{"answer":{"kind":"integer","expected":"48","checker_scope":"The exact requested finite result only; a correct entry does not certify a geometric argument or award reviewed evidence."}}
```

<details>
<summary>Hint 1</summary>

The border removes its width at both ends of each inner dimension.

</details>

<details>
<summary>Hint 2</summary>

Compute the two perimeters separately before adding.

</details>

<details>
<summary>Worked solution</summary>

Distinguish the boundary of the material from the outside alone.

1. The inner dimensions are $8-2=6$ cm and $6-2=4$ cm.
2. The outer perimeter is $2(8+6)=28$ cm.
3. The inner perimeter is $2(6+4)=20$ cm.
4. The total boundary length is $28+20=48$ cm.

</details>
