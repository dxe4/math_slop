# Use perpendicular kite diagonals

*Medium · [Geometry and trigonometry problems](index.md)*

A convex kite has perpendicular diagonals of lengths $10$ and $24$. Find its area.

<figure class="geometry"><svg viewBox="0 0 480 300" width="480" role="img" aria-label="A convex kite has perpendicular diagonals AC 24 and BD 10." style="max-width:100%;height:auto"><line x1="240" y1="40" x2="360" y2="200" stroke="currentColor" stroke-width="2"/><line x1="360" y1="200" x2="240" y2="260" stroke="currentColor" stroke-width="2"/><line x1="240" y1="260" x2="120" y2="200" stroke="currentColor" stroke-width="2"/><line x1="120" y1="200" x2="240" y2="40" stroke="currentColor" stroke-width="2"/><line x1="240" y1="40" x2="240" y2="260" stroke="currentColor" stroke-width="2"/><line x1="360" y1="200" x2="120" y2="200" stroke="currentColor" stroke-width="2"/><circle cx="240" cy="40" r="3" fill="currentColor"/><text x="247" y="32" fill="currentColor" font-size="16">A</text><circle cx="360" cy="200" r="3" fill="currentColor"/><text x="367" y="192" fill="currentColor" font-size="16">B</text><circle cx="240" cy="260" r="3" fill="currentColor"/><text x="247" y="252" fill="currentColor" font-size="16">C</text><circle cx="120" cy="200" r="3" fill="currentColor"/><text x="127" y="192" fill="currentColor" font-size="16">D</text><text x="245" y="100" fill="currentColor" font-size="15">AC = 24</text><text x="155" y="225" fill="currentColor" font-size="15">BD = 10; diagonals perpendicular</text></svg><figcaption>Schematic, not drawn to scale. Use the stated data rather than measuring the image.</figcaption></figure>

```answer
{"answer":{"kind":"integer","expected":"120","checker_scope":"Exact requested geometric value only; the supplied schematic is not a measurement tool and an exact value does not certify the explanatory argument."}}
```

<details>
<summary>Hint 1</summary>

The diagonals split the kite into four right triangles.

</details>

<details>
<summary>Hint 2</summary>

Adding those four areas gives one-half the product of the full diagonal lengths.

</details>

<details>
<summary>Worked solution</summary>

Perpendicular diagonals supply a four-triangle area decomposition.

1. Let the diagonal pieces at their intersection be $a,b$ and $c,d$. The four areas sum to $(ac+ad+bc+bd)/2$.
2. This factors as $(a+b)(c+d)/2$, one-half the product of the diagonal lengths.
3. The area is $10\cdot24/2=120$.

</details>
