# Reflect across the diagonal line

*Easy · [Geometry and trigonometry problems](index.md)*

Reflect the point $P=(3,-2)$ across the line $y=x$. Enter the image coordinates.

<figure class="geometry"><svg viewBox="0 0 480 300" width="480" role="img" aria-label="Point P=(3,-2) is reflected across the diagonal line y=x." style="max-width:100%;height:auto"><line x1="60" y1="150" x2="420" y2="150" stroke="currentColor" stroke-width="2"/><line x1="240" y1="270" x2="240" y2="30" stroke="currentColor" stroke-width="2"/><line x1="150" y1="240" x2="330" y2="60" stroke="currentColor" stroke-width="2"/><circle cx="240" cy="150" r="3" fill="currentColor"/><text x="247" y="142" fill="currentColor" font-size="16">O</text><circle cx="420" cy="150" r="3" fill="currentColor"/><text x="427" y="142" fill="currentColor" font-size="16">x</text><circle cx="240" cy="30" r="3" fill="currentColor"/><text x="247" y="22" fill="currentColor" font-size="16">y</text><circle cx="330" cy="210" r="3" fill="currentColor"/><text x="337" y="202" fill="currentColor" font-size="16">P</text><text x="330" y="45" fill="currentColor" font-size="15">y=x</text></svg><figcaption>Schematic, not drawn to scale. Use the stated data rather than measuring the image.</figcaption></figure>

```answer
{"answer":{"kind":"vector","expected":["-2","3"],"checker_scope":"Exact requested geometric value only; the supplied schematic is not a measurement tool and an exact value does not certify the explanatory argument."}}
```

<details>
<summary>Hint 1</summary>

The reflecting line exchanges the coordinate directions.

</details>

<details>
<summary>Hint 2</summary>

The image swaps the two coordinates without changing their signs separately.

</details>

<details>
<summary>Worked solution</summary>

Reflection in the main diagonal interchanges x and y.

1. The reflection map is $(x,y)\mapsto(y,x)$.
2. Apply it to $(3,-2)$.
3. The image is $(-2,3)$.

</details>
