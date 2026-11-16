# Recover a length scale from volume

*Medium · [Geometry and trigonometry problems](index.md)*

Two similar right circular cones have volume ratio $27:8$, larger to smaller. The smaller base radius is $4$. Find the larger base radius.

<figure class="geometry"><svg viewBox="0 0 480 300" width="480" role="img" aria-label="Axial schematics of two similar cones. The small radius is 4; the larger-to-smaller volume ratio is 27 to 8." style="max-width:100%;height:auto"><line x1="30" y1="240" x2="110" y2="80" stroke="currentColor" stroke-width="2"/><line x1="110" y1="80" x2="190" y2="240" stroke="currentColor" stroke-width="2"/><line x1="190" y1="240" x2="30" y2="240" stroke="currentColor" stroke-width="2"/><line x1="245" y1="240" x2="345" y2="40" stroke="currentColor" stroke-width="2"/><line x1="345" y1="40" x2="455" y2="240" stroke="currentColor" stroke-width="2"/><line x1="455" y1="240" x2="245" y2="240" stroke="currentColor" stroke-width="2"/><circle cx="30" cy="240" r="3" fill="currentColor"/><text x="37" y="232" fill="currentColor" font-size="16">A</text><circle cx="110" cy="80" r="3" fill="currentColor"/><text x="117" y="72" fill="currentColor" font-size="16">B</text><circle cx="190" cy="240" r="3" fill="currentColor"/><text x="197" y="232" fill="currentColor" font-size="16">C</text><circle cx="245" cy="240" r="3" fill="currentColor"/><text x="252" y="232" fill="currentColor" font-size="16">D</text><circle cx="345" cy="40" r="3" fill="currentColor"/><text x="352" y="32" fill="currentColor" font-size="16">E</text><circle cx="455" cy="240" r="3" fill="currentColor"/><text x="462" y="232" fill="currentColor" font-size="16">F</text><text x="30" y="275" fill="currentColor" font-size="15">Small radius 4</text><text x="250" y="275" fill="currentColor" font-size="15">Volume ratio 27:8</text></svg><figcaption>Schematic, not drawn to scale. Use the stated data rather than measuring the image.</figcaption></figure>

```answer
{"answer":{"kind":"integer","expected":"6","checker_scope":"Exact requested geometric value only; the supplied schematic is not a measurement tool and an exact value does not certify the explanatory argument."}}
```

<details>
<summary>Hint 1</summary>

Volumes scale as the cube of a length scale.

</details>

<details>
<summary>Hint 2</summary>

Take the positive cube root of the volume ratio before scaling the radius.

</details>

<details>
<summary>Worked solution</summary>

Similar solids use the same linear scale in every direction.

1. Let the positive length ratio be $s$. Then $s^3=27/8$.
2. Thus $s=3/2$.
3. The larger radius is $(3/2)\cdot4=6$.

</details>
