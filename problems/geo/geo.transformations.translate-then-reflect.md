# Respect the order of two transformations

*Medium · [Geometry and trigonometry problems](index.md)*

Start with $P=(1,2)$. First translate by $(3,-1)$, then reflect across the y-axis. Enter the final point.

<figure class="geometry"><svg viewBox="0 0 480 300" width="480" role="img" aria-label="Point P=(1,2) is translated by (3,-1), then reflected in the vertical y-axis." style="max-width:100%;height:auto"><line x1="60" y1="150" x2="420" y2="150" stroke="currentColor" stroke-width="2"/><line x1="240" y1="270" x2="240" y2="30" stroke="currentColor" stroke-width="2"/><circle cx="240" cy="150" r="3" fill="currentColor"/><text x="247" y="142" fill="currentColor" font-size="16">O</text><circle cx="420" cy="150" r="3" fill="currentColor"/><text x="427" y="142" fill="currentColor" font-size="16">x</text><circle cx="240" cy="30" r="3" fill="currentColor"/><text x="247" y="22" fill="currentColor" font-size="16">y</text><circle cx="270" cy="90" r="3" fill="currentColor"/><text x="277" y="82" fill="currentColor" font-size="16">P</text></svg><figcaption>Schematic, not drawn to scale. Use the stated data rather than measuring the image.</figcaption></figure>

```answer
{"answer":{"kind":"vector","expected":["-4","1"],"checker_scope":"Exact requested geometric value only; the supplied schematic is not a measurement tool and an exact value does not certify the explanatory argument."}}
```

<details>
<summary>Hint 1</summary>

Compute the translated point before reflecting.

</details>

<details>
<summary>Hint 2</summary>

Reflection in the y-axis negates only the current x-coordinate.

</details>

<details>
<summary>Worked solution</summary>

Transformation order matters because the reflection acts on the translated point.

1. The translation gives $(1+3,2-1)=(4,1)$.
2. The y-axis reflection maps $(x,y)$ to $(-x,y)$.
3. The final point is $(-4,1)$.

</details>
