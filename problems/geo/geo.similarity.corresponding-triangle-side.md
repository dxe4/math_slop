# Match corresponding sides

*Easy · [Geometry and trigonometry problems](index.md)*

Triangles $ABC$ and $DEF$ are similar in the stated vertex order. If $AB=6$, $AC=8$ and $DE=9$, find $DF$.

<figure class="geometry"><svg viewBox="0 0 480 300" width="480" role="img" aria-label="Two triangles with vertex correspondence A-D, B-E, C-F; AB is 6, AC is 8 and DE is 9." style="max-width:100%;height:auto"><line x1="30" y1="240" x2="110" y2="90" stroke="currentColor" stroke-width="2"/><line x1="110" y1="90" x2="190" y2="240" stroke="currentColor" stroke-width="2"/><line x1="190" y1="240" x2="30" y2="240" stroke="currentColor" stroke-width="2"/><line x1="250" y1="240" x2="340" y2="50" stroke="currentColor" stroke-width="2"/><line x1="340" y1="50" x2="450" y2="240" stroke="currentColor" stroke-width="2"/><line x1="450" y1="240" x2="250" y2="240" stroke="currentColor" stroke-width="2"/><circle cx="30" cy="240" r="3" fill="currentColor"/><text x="37" y="232" fill="currentColor" font-size="16">A</text><circle cx="110" cy="90" r="3" fill="currentColor"/><text x="117" y="82" fill="currentColor" font-size="16">B</text><circle cx="190" cy="240" r="3" fill="currentColor"/><text x="197" y="232" fill="currentColor" font-size="16">C</text><circle cx="250" cy="240" r="3" fill="currentColor"/><text x="257" y="232" fill="currentColor" font-size="16">D</text><circle cx="340" cy="50" r="3" fill="currentColor"/><text x="347" y="42" fill="currentColor" font-size="16">E</text><circle cx="450" cy="240" r="3" fill="currentColor"/><text x="457" y="232" fill="currentColor" font-size="16">F</text><text x="30" y="65" fill="currentColor" font-size="15">AB = 6; AC = 8</text><text x="275" y="280" fill="currentColor" font-size="15">DE = 9</text></svg><figcaption>Schematic, not drawn to scale. Use the stated data rather than measuring the image.</figcaption></figure>

```answer
{"answer":{"kind":"integer","expected":"12","checker_scope":"Exact requested geometric value only; the supplied schematic is not a measurement tool and an exact value does not certify the explanatory argument."}}
```

<details>
<summary>Hint 1</summary>

The vertex order identifies the corresponding sides.

</details>

<details>
<summary>Hint 2</summary>

Use the ratio of the two known corresponding sides as the common length scale.

</details>

<details>
<summary>Worked solution</summary>

Similarity scales corresponding lengths by one common factor.

1. The correspondence is $A\leftrightarrow D$, $B\leftrightarrow E$, $C\leftrightarrow F$.
2. The scale from the first triangle to the second is $DE/AB=9/6=3/2$.
3. Thus $DF=(3/2)AC=12$.

</details>
