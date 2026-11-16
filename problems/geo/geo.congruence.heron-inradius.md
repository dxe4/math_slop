# Combine Heron area with an incircle decomposition

*Hard · [Geometry and trigonometry problems](index.md)*

A triangle has sides $13$, $14$ and $15$. Find its inradius.

<figure class="geometry"><svg viewBox="0 0 480 300" width="480" role="img" aria-label="A triangle has side lengths 13, 14 and 15; its incircle radius is requested." style="max-width:100%;height:auto"><line x1="70" y1="240" x2="230" y2="60" stroke="currentColor" stroke-width="2"/><line x1="230" y1="60" x2="410" y2="240" stroke="currentColor" stroke-width="2"/><line x1="410" y1="240" x2="70" y2="240" stroke="currentColor" stroke-width="2"/><circle cx="70" cy="240" r="3" fill="currentColor"/><text x="77" y="232" fill="currentColor" font-size="16">A</text><circle cx="230" cy="60" r="3" fill="currentColor"/><text x="237" y="52" fill="currentColor" font-size="16">B</text><circle cx="410" cy="240" r="3" fill="currentColor"/><text x="417" y="232" fill="currentColor" font-size="16">C</text></svg><figcaption>Schematic, not drawn to scale. Use the stated data rather than measuring the image.</figcaption></figure>

```answer
{"answer":{"kind":"integer","expected":"4","checker_scope":"Exact requested geometric value only; the supplied schematic is not a measurement tool and an exact value does not certify the explanatory argument."}}
```

<details>
<summary>Hint 1</summary>

Compute the semiperimeter and use Heron formula for the area.

</details>

<details>
<summary>Hint 2</summary>

Splitting the triangle at its incenter gives area equal to inradius times semiperimeter.

</details>

<details>
<summary>Worked solution</summary>

Two area formulas determine the inradius from the three sides.

1. The semiperimeter is $s=(13+14+15)/2=21$.
2. Heron formula gives area $\sqrt{21\cdot8\cdot7\cdot6}=\sqrt{7056}=84$.
3. The incenter decomposition gives area $rs$, so $r=84/21=4$.

</details>
