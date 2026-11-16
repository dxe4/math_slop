# Rotate with an explicit direction

*Easy · [Geometry and trigonometry problems](index.md)*

Rotate $P=(2,-1)$ through $90^\circ$ counterclockwise about the origin. Enter the image coordinates.

<figure class="geometry"><svg viewBox="0 0 480 300" width="480" role="img" aria-label="Point P=(2,-1) is rotated counterclockwise by 90 degrees about O." style="max-width:100%;height:auto"><line x1="60" y1="150" x2="420" y2="150" stroke="currentColor" stroke-width="2"/><line x1="240" y1="270" x2="240" y2="30" stroke="currentColor" stroke-width="2"/><circle cx="240" cy="150" r="3" fill="currentColor"/><text x="247" y="142" fill="currentColor" font-size="16">O</text><circle cx="420" cy="150" r="3" fill="currentColor"/><text x="427" y="142" fill="currentColor" font-size="16">x</text><circle cx="240" cy="30" r="3" fill="currentColor"/><text x="247" y="22" fill="currentColor" font-size="16">y</text><circle cx="300" cy="180" r="3" fill="currentColor"/><text x="307" y="172" fill="currentColor" font-size="16">P</text></svg><figcaption>Schematic, not drawn to scale. Use the stated data rather than measuring the image.</figcaption></figure>

```answer
{"answer":{"kind":"vector","expected":["1","2"],"checker_scope":"Exact requested geometric value only; the supplied schematic is not a measurement tool and an exact value does not certify the explanatory argument."}}
```

<details>
<summary>Hint 1</summary>

Use the ordered coordinate rule for a positive quarter-turn.

</details>

<details>
<summary>Hint 2</summary>

The first image coordinate is the negative of the old y-coordinate.

</details>

<details>
<summary>Worked solution</summary>

A positive quarter-turn has coordinate rule (-y,x).

1. The rotation sends $(x,y)$ to $(-y,x)$.
2. For $(2,-1)$, the first coordinate is $-(-1)=1$ and the second is $2$.
3. The image is $(1,2)$.

</details>
