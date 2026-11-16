# Average the two intercepted arcs

*Medium · [Geometry and trigonometry problems](index.md)*

Chords $AB$ and $CD$ intersect at $P$ inside a circle. The arcs intercepted by $\angle APC$ and its vertical angle $BPD$ have measures $80^\circ$ and $140^\circ$. Find $\angle APC$ in degrees.

<figure class="geometry"><svg viewBox="0 0 480 300" width="480" role="img" aria-label="Two chords AB and CD meet inside at P. The intercepted arcs AC and BD measure 80 and 140 degrees." style="max-width:100%;height:auto"><circle cx="240" cy="150" r="100" fill="none" stroke="currentColor" stroke-width="2"/><line x1="140" y1="150" x2="300" y2="230" stroke="currentColor" stroke-width="2"/><line x1="240" y1="50" x2="240" y2="250" stroke="currentColor" stroke-width="2"/><circle cx="140" cy="150" r="3" fill="currentColor"/><text x="147" y="142" fill="currentColor" font-size="16">A</text><circle cx="300" cy="230" r="3" fill="currentColor"/><text x="307" y="222" fill="currentColor" font-size="16">B</text><circle cx="240" cy="50" r="3" fill="currentColor"/><text x="247" y="42" fill="currentColor" font-size="16">C</text><circle cx="240" cy="250" r="3" fill="currentColor"/><text x="247" y="242" fill="currentColor" font-size="16">D</text><circle cx="240" cy="200" r="3" fill="currentColor"/><text x="247" y="192" fill="currentColor" font-size="16">P</text><text x="40" y="160" fill="currentColor" font-size="15">Arc AC: 80 degrees</text><text x="325" y="160" fill="currentColor" font-size="15">Arc BD: 140 degrees</text></svg><figcaption>Schematic, not drawn to scale. Use the stated data rather than measuring the image.</figcaption></figure>

```answer
{"answer":{"kind":"integer","expected":"110","checker_scope":"Exact requested geometric value only; the supplied schematic is not a measurement tool and an exact value does not certify the explanatory argument."}}
```

<details>
<summary>Hint 1</summary>

An angle formed by intersecting chords inside a circle uses two arcs.

</details>

<details>
<summary>Hint 2</summary>

Use half their sum, not half their difference.

</details>

<details>
<summary>Worked solution</summary>

The interior chord-angle theorem averages the two specified intercepted arcs.

1. The relevant intercepted arcs are explicitly the ones for the angle and its vertical angle.
2. The theorem gives $\angle APC=(80+140)/2$.
3. Therefore the angle is $110^\circ$.

</details>
