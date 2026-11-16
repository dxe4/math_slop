# Dilate relative to a nonzero center

*Medium · [Geometry and trigonometry problems](index.md)*

Dilate $P=(3,2)$ about center $C=(1,-1)$ by scale factor $-2$. Enter the image coordinates.

<figure class="geometry"><svg viewBox="0 0 480 300" width="480" role="img" aria-label="A dilation with center C=(1,-1) and factor -2 is applied to P=(3,2)." style="max-width:100%;height:auto"><line x1="60" y1="150" x2="420" y2="150" stroke="currentColor" stroke-width="2"/><line x1="240" y1="270" x2="240" y2="30" stroke="currentColor" stroke-width="2"/><circle cx="240" cy="150" r="3" fill="currentColor"/><text x="247" y="142" fill="currentColor" font-size="16">O</text><circle cx="420" cy="150" r="3" fill="currentColor"/><text x="427" y="142" fill="currentColor" font-size="16">x</text><circle cx="240" cy="30" r="3" fill="currentColor"/><text x="247" y="22" fill="currentColor" font-size="16">y</text><circle cx="330" cy="90" r="3" fill="currentColor"/><text x="337" y="82" fill="currentColor" font-size="16">P</text><circle cx="270" cy="180" r="3" fill="currentColor"/><text x="277" y="172" fill="currentColor" font-size="16">C</text></svg><figcaption>Schematic, not drawn to scale. Use the stated data rather than measuring the image.</figcaption></figure>

```answer
{"answer":{"kind":"vector","expected":["-3","-7"],"checker_scope":"Exact requested geometric value only; the supplied schematic is not a measurement tool and an exact value does not certify the explanatory argument."}}
```

<details>
<summary>Hint 1</summary>

Apply the scale to the displacement from the center.

</details>

<details>
<summary>Hint 2</summary>

A negative factor reverses the direction of that displacement.

</details>

<details>
<summary>Worked solution</summary>

A centered dilation acts on P-C before restoring the center.

1. The displacement is $P-C=(2,3)$.
2. Scaling gives $-2(P-C)=(-4,-6)$.
3. Adding the center gives $C+(-4,-6)=(-3,-7)$.

</details>
