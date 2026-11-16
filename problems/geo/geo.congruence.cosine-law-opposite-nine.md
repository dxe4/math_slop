# Determine an angle through its exact cosine

*Medium · [Geometry and trigonometry problems](index.md)*

A triangle has side lengths $7$, $8$ and $9$. Find the cosine of the angle opposite the side of length $9$.

<figure class="geometry"><svg viewBox="0 0 480 300" width="480" role="img" aria-label="A triangle has side lengths 7, 8 and 9. The cosine of the angle opposite the side of length 9 is requested." style="max-width:100%;height:auto"><line x1="70" y1="240" x2="230" y2="60" stroke="currentColor" stroke-width="2"/><line x1="230" y1="60" x2="410" y2="240" stroke="currentColor" stroke-width="2"/><line x1="410" y1="240" x2="70" y2="240" stroke="currentColor" stroke-width="2"/><circle cx="70" cy="240" r="3" fill="currentColor"/><text x="77" y="232" fill="currentColor" font-size="16">A</text><circle cx="230" cy="60" r="3" fill="currentColor"/><text x="237" y="52" fill="currentColor" font-size="16">B</text><circle cx="410" cy="240" r="3" fill="currentColor"/><text x="417" y="232" fill="currentColor" font-size="16">C</text></svg><figcaption>Schematic, not drawn to scale. Use the stated data rather than measuring the image.</figcaption></figure>

```answer
{"answer":{"kind":"rational","expected":{"numerator":2,"denominator":7},"checker_scope":"Exact requested geometric value only; the supplied schematic is not a measurement tool and an exact value does not certify the explanatory argument."}}
```

<details>
<summary>Hint 1</summary>

The adjacent sides to the requested angle have lengths seven and eight.

</details>

<details>
<summary>Hint 2</summary>

Use the cosine law with the opposite side squared on the other side of the equation.

</details>

<details>
<summary>Worked solution</summary>

The side lengths determine the angle cosine without needing an inverse cosine.

1. Let the requested angle be $C$. The cosine law gives $9^2=7^2+8^2-2\cdot7\cdot8\cos C$.
2. Thus $\cos C=(49+64-81)/112=32/112$.
3. Reduction gives $\cos C=2/7$.

</details>
