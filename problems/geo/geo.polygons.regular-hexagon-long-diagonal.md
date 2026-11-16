# Use opposite vertices of a regular hexagon

*Medium · [Geometry and trigonometry problems](index.md)*

A regular hexagon has side length $5$. Find the length of its longest diagonal.

<figure class="geometry"><svg viewBox="0 0 480 300" width="480" role="img" aria-label="A regular hexagon has all side lengths 5; a longest diagonal is requested but not drawn." style="max-width:100%;height:auto"><line x1="190" y1="63.397" x2="290" y2="63.397" stroke="currentColor" stroke-width="2"/><line x1="290" y1="63.397" x2="340" y2="150" stroke="currentColor" stroke-width="2"/><line x1="340" y1="150" x2="290" y2="236.603" stroke="currentColor" stroke-width="2"/><line x1="290" y1="236.603" x2="190" y2="236.603" stroke="currentColor" stroke-width="2"/><line x1="190" y1="236.603" x2="140" y2="150" stroke="currentColor" stroke-width="2"/><line x1="140" y1="150" x2="190" y2="63.397" stroke="currentColor" stroke-width="2"/><circle cx="190" cy="63.397" r="3" fill="currentColor"/><text x="197" y="55.397" fill="currentColor" font-size="16">A</text><circle cx="290" cy="63.397" r="3" fill="currentColor"/><text x="297" y="55.397" fill="currentColor" font-size="16">B</text><circle cx="340" cy="150" r="3" fill="currentColor"/><text x="347" y="142" fill="currentColor" font-size="16">C</text><circle cx="290" cy="236.603" r="3" fill="currentColor"/><text x="297" y="228.603" fill="currentColor" font-size="16">D</text><circle cx="190" cy="236.603" r="3" fill="currentColor"/><text x="197" y="228.603" fill="currentColor" font-size="16">E</text><circle cx="140" cy="150" r="3" fill="currentColor"/><text x="147" y="142" fill="currentColor" font-size="16">F</text></svg><figcaption>Schematic, not drawn to scale. Use the stated data rather than measuring the image.</figcaption></figure>

```answer
{"answer":{"kind":"integer","expected":"10","checker_scope":"Exact requested geometric value only; the supplied schematic is not a measurement tool and an exact value does not certify the explanatory argument."}}
```

<details>
<summary>Hint 1</summary>

Join the center to the vertices.

</details>

<details>
<summary>Hint 2</summary>

The central triangles are equilateral, and the most distant vertices are opposite.

</details>

<details>
<summary>Worked solution</summary>

The regular hexagon circumradius equals its side length.

1. The six equal central angles are $60^\circ$, so each central triangle is equilateral.
2. The circumradius is therefore $5$. The longest diagonal joins opposite vertices through the center.
3. Its length is the diameter, $2\cdot5=10$.

</details>
