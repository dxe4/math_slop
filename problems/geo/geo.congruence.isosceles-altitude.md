# Bisect an isosceles base with its altitude

*Medium · [Geometry and trigonometry problems](index.md)*

An isosceles triangle has equal sides of length $13$ and base length $10$. Find the perpendicular altitude to the base.

<figure class="geometry"><svg viewBox="0 0 480 300" width="480" role="img" aria-label="An isosceles triangle has equal sides 13 and base 10; its altitude to the base is requested." style="max-width:100%;height:auto"><line x1="70" y1="240" x2="230" y2="60" stroke="currentColor" stroke-width="2"/><line x1="230" y1="60" x2="410" y2="240" stroke="currentColor" stroke-width="2"/><line x1="410" y1="240" x2="70" y2="240" stroke="currentColor" stroke-width="2"/><circle cx="70" cy="240" r="3" fill="currentColor"/><text x="77" y="232" fill="currentColor" font-size="16">A</text><circle cx="230" cy="60" r="3" fill="currentColor"/><text x="237" y="52" fill="currentColor" font-size="16">B</text><circle cx="410" cy="240" r="3" fill="currentColor"/><text x="417" y="232" fill="currentColor" font-size="16">C</text></svg><figcaption>Schematic, not drawn to scale. Use the stated data rather than measuring the image.</figcaption></figure>

```answer
{"answer":{"kind":"integer","expected":"12","checker_scope":"Exact requested geometric value only; the supplied schematic is not a measurement tool and an exact value does not certify the explanatory argument."}}
```

<details>
<summary>Hint 1</summary>

The altitude from the apex bisects the base by triangle congruence.

</details>

<details>
<summary>Hint 2</summary>

Use one resulting right triangle with half the base.

</details>

<details>
<summary>Worked solution</summary>

Congruent halves reduce the altitude to a Pythagorean calculation.

1. The altitude creates two congruent right triangles, each with base leg $5$ and hypotenuse $13$.
2. The height satisfies $h^2=13^2-5^2=144$.
3. The positive height is $12$.

</details>
