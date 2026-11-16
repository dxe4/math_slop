# Average three vertices

*Medium · [Geometry and trigonometry problems](index.md)*

Find the centroid of the triangle with vertices $A=(0,0)$, $B=(6,0)$ and $C=(0,9)$. Enter $(x,y)$.

<figure class="geometry"><svg viewBox="0 0 480 300" width="480" role="img" aria-label="A triangle has vertices A=(0,0), B=(6,0) and C=(0,9)." style="max-width:100%;height:auto"><line x1="100" y1="240" x2="380" y2="240" stroke="currentColor" stroke-width="2"/><line x1="380" y1="240" x2="100" y2="50" stroke="currentColor" stroke-width="2"/><line x1="100" y1="50" x2="100" y2="240" stroke="currentColor" stroke-width="2"/><circle cx="100" cy="240" r="3" fill="currentColor"/><text x="107" y="232" fill="currentColor" font-size="16">A</text><circle cx="380" cy="240" r="3" fill="currentColor"/><text x="387" y="232" fill="currentColor" font-size="16">B</text><circle cx="100" cy="50" r="3" fill="currentColor"/><text x="107" y="42" fill="currentColor" font-size="16">C</text><text x="110" y="280" fill="currentColor" font-size="15">A=(0,0), B=(6,0), C=(0,9)</text></svg><figcaption>Schematic, not drawn to scale. Use the stated data rather than measuring the image.</figcaption></figure>

```answer
{"answer":{"kind":"vector","expected":["2","3"],"checker_scope":"Exact requested geometric value only; the supplied schematic is not a measurement tool and an exact value does not certify the explanatory argument."}}
```

<details>
<summary>Hint 1</summary>

The centroid is the average of the three position vectors.

</details>

<details>
<summary>Hint 2</summary>

Average all three coordinates in each coordinate direction, including zeros.

</details>

<details>
<summary>Worked solution</summary>

The centroid has equal barycentric weights at the vertices.

1. The x-coordinate is $(0+6+0)/3=2$.
2. The y-coordinate is $(0+0+9)/3=3$.
3. The centroid is $(2,3)$.

</details>
