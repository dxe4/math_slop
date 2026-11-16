# Decompose a regular hexagon

*Medium · [Geometry and trigonometry problems](index.md)*

A regular hexagon has side length $4$. Find its area divided by $\sqrt3$.

<figure class="geometry"><svg viewBox="0 0 480 300" width="480" role="img" aria-label="A regular hexagon has all side lengths 4; radii from its center divide it into six central triangles." style="max-width:100%;height:auto"><line x1="190" y1="63.397" x2="290" y2="63.397" stroke="currentColor" stroke-width="2"/><line x1="290" y1="63.397" x2="340" y2="150" stroke="currentColor" stroke-width="2"/><line x1="340" y1="150" x2="290" y2="236.603" stroke="currentColor" stroke-width="2"/><line x1="290" y1="236.603" x2="190" y2="236.603" stroke="currentColor" stroke-width="2"/><line x1="190" y1="236.603" x2="140" y2="150" stroke="currentColor" stroke-width="2"/><line x1="140" y1="150" x2="190" y2="63.397" stroke="currentColor" stroke-width="2"/><line x1="240" y1="150" x2="190" y2="63.397" stroke="currentColor" stroke-width="2"/><line x1="240" y1="150" x2="290" y2="63.397" stroke="currentColor" stroke-width="2"/><line x1="240" y1="150" x2="340" y2="150" stroke="currentColor" stroke-width="2"/><line x1="240" y1="150" x2="290" y2="236.603" stroke="currentColor" stroke-width="2"/><line x1="240" y1="150" x2="190" y2="236.603" stroke="currentColor" stroke-width="2"/><line x1="240" y1="150" x2="140" y2="150" stroke="currentColor" stroke-width="2"/><circle cx="190" cy="63.397" r="3" fill="currentColor"/><text x="197" y="55.397" fill="currentColor" font-size="16">A</text><circle cx="290" cy="63.397" r="3" fill="currentColor"/><text x="297" y="55.397" fill="currentColor" font-size="16">B</text><circle cx="340" cy="150" r="3" fill="currentColor"/><text x="347" y="142" fill="currentColor" font-size="16">C</text><circle cx="290" cy="236.603" r="3" fill="currentColor"/><text x="297" y="228.603" fill="currentColor" font-size="16">D</text><circle cx="190" cy="236.603" r="3" fill="currentColor"/><text x="197" y="228.603" fill="currentColor" font-size="16">E</text><circle cx="140" cy="150" r="3" fill="currentColor"/><text x="147" y="142" fill="currentColor" font-size="16">F</text><circle cx="240" cy="150" r="3" fill="currentColor"/><text x="247" y="142" fill="currentColor" font-size="16">O</text><text x="160" y="45" fill="currentColor" font-size="15">Every side is 4</text></svg><figcaption>Schematic, not drawn to scale. Use the stated data rather than measuring the image.</figcaption></figure>

```answer
{"answer":{"kind":"integer","expected":"24","checker_scope":"Exact requested geometric value only; the supplied schematic is not a measurement tool and an exact value does not certify the explanatory argument."}}
```

<details>
<summary>Hint 1</summary>

Join its center to all six vertices.

</details>

<details>
<summary>Hint 2</summary>

The six resulting triangles are equilateral.

</details>

<details>
<summary>Worked solution</summary>

A regular hexagon decomposes into six equal equilateral triangles.

1. Each central triangle is equilateral of side $4$.
2. Its area is $\sqrt3\cdot4^2/4=4\sqrt3$.
3. Six such triangles give $24\sqrt3$, so the requested ratio is $24$.

</details>
