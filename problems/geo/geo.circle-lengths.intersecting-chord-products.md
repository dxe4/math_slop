# Use intersecting chord segment products

*Medium · [Geometry and trigonometry problems](index.md)*

Chords $AB$ and $CD$ meet at $P$ inside a circle. Given $AP=4$, $PB=9$ and $CP=6$, find $PD$.

<figure class="geometry"><svg viewBox="0 0 480 300" width="480" role="img" aria-label="Chords AB and CD intersect inside at P. The given segment lengths are AP 4, PB 9 and CP 6." style="max-width:100%;height:auto"><circle cx="240" cy="150" r="97.5" fill="none" stroke="currentColor" stroke-width="2"/><line x1="142.5" y1="150" x2="337.5" y2="150" stroke="currentColor" stroke-width="2"/><line x1="202.5" y1="60" x2="202.5" y2="240" stroke="currentColor" stroke-width="2"/><circle cx="142.5" cy="150" r="3" fill="currentColor"/><text x="149.5" y="142" fill="currentColor" font-size="16">A</text><circle cx="337.5" cy="150" r="3" fill="currentColor"/><text x="344.5" y="142" fill="currentColor" font-size="16">B</text><circle cx="202.5" cy="60" r="3" fill="currentColor"/><text x="209.5" y="52" fill="currentColor" font-size="16">C</text><circle cx="202.5" cy="240" r="3" fill="currentColor"/><text x="209.5" y="232" fill="currentColor" font-size="16">D</text><circle cx="202.5" cy="150" r="3" fill="currentColor"/><text x="209.5" y="142" fill="currentColor" font-size="16">P</text><text x="25" y="275" fill="currentColor" font-size="15">AP = 4; PB = 9; CP = 6</text></svg><figcaption>Schematic, not drawn to scale. Use the stated data rather than measuring the image.</figcaption></figure>

```answer
{"answer":{"kind":"integer","expected":"6","checker_scope":"Exact requested geometric value only; the supplied schematic is not a measurement tool and an exact value does not certify the explanatory argument."}}
```

<details>
<summary>Hint 1</summary>

The products of the two segments on each chord are equal.

</details>

<details>
<summary>Hint 2</summary>

Use the segment on the other side of P on the same chord, rather than a whole chord length.

</details>

<details>
<summary>Worked solution</summary>

Intersecting chords give an equality of segment products.

1. The chord theorem gives $AP\cdot PB=CP\cdot PD$.
2. Thus $4\cdot9=6PD$.
3. Dividing by $6$ gives $PD=6$.

</details>
