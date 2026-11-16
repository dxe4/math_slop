# Keep the full interior angle at a concave vertex

*Medium · [Geometry and trigonometry problems](index.md)*

Find the sum in degrees of the interior angles of a simple concave $7$-gon with no holes. Include its reflex interior angle.

<figure class="geometry"><svg viewBox="0 0 480 300" width="480" role="img" aria-label="A simple concave seven-sided polygon has no holes; its full interior angle at the indentation is included." style="max-width:100%;height:auto"><line x1="70" y1="230" x2="130" y2="60" stroke="currentColor" stroke-width="2"/><line x1="130" y1="60" x2="240" y2="40" stroke="currentColor" stroke-width="2"/><line x1="240" y1="40" x2="350" y2="70" stroke="currentColor" stroke-width="2"/><line x1="350" y1="70" x2="410" y2="230" stroke="currentColor" stroke-width="2"/><line x1="410" y1="230" x2="290" y2="260" stroke="currentColor" stroke-width="2"/><line x1="290" y1="260" x2="220" y2="155" stroke="currentColor" stroke-width="2"/><line x1="220" y1="155" x2="70" y2="230" stroke="currentColor" stroke-width="2"/><circle cx="70" cy="230" r="3" fill="currentColor"/><text x="77" y="222" fill="currentColor" font-size="16">A</text><circle cx="130" cy="60" r="3" fill="currentColor"/><text x="137" y="52" fill="currentColor" font-size="16">B</text><circle cx="240" cy="40" r="3" fill="currentColor"/><text x="247" y="32" fill="currentColor" font-size="16">C</text><circle cx="350" cy="70" r="3" fill="currentColor"/><text x="357" y="62" fill="currentColor" font-size="16">D</text><circle cx="410" cy="230" r="3" fill="currentColor"/><text x="417" y="222" fill="currentColor" font-size="16">E</text><circle cx="290" cy="260" r="3" fill="currentColor"/><text x="297" y="252" fill="currentColor" font-size="16">F</text><circle cx="220" cy="155" r="3" fill="currentColor"/><text x="227" y="147" fill="currentColor" font-size="16">G</text></svg><figcaption>Schematic, not drawn to scale. Use the stated data rather than measuring the image.</figcaption></figure>

```answer
{"answer":{"kind":"integer","expected":"900","checker_scope":"Exact requested geometric value only; the supplied schematic is not a measurement tool and an exact value does not certify the explanatory argument."}}
```

<details>
<summary>Hint 1</summary>

The interior-angle sum formula applies to simple polygons even when one angle is reflex.

</details>

<details>
<summary>Hint 2</summary>

Triangulation uses two fewer triangles than the number of vertices.

</details>

<details>
<summary>Worked solution</summary>

A simple polygon triangulation preserves the full interior region.

1. A simple heptagon can be triangulated into $7-2=5$ triangles without adding exterior area.
2. Adding the triangle angles recovers every full polygon interior angle, including the reflex one.
3. The sum is $5\cdot180=900^\circ$.

</details>
