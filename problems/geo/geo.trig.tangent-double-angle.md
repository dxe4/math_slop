# Allow a negative doubled-angle tangent

*Medium · [Geometry and trigonometry problems](index.md)*

For an acute angle $\theta$ with $\tan\theta=2$, find $\tan(2\theta)$.

<figure class="geometry"><svg viewBox="0 0 480 300" width="480" role="img" aria-label="An acute angle theta has tangent 2; the tangent of twice that angle is requested." style="max-width:100%;height:auto"><line x1="180" y1="230" x2="380" y2="230" stroke="currentColor" stroke-width="2"/><line x1="180" y1="230" x2="330" y2="70" stroke="currentColor" stroke-width="2"/><circle cx="180" cy="230" r="3" fill="currentColor"/><text x="187" y="222" fill="currentColor" font-size="16">O</text><circle cx="380" cy="230" r="3" fill="currentColor"/><text x="387" y="222" fill="currentColor" font-size="16">A</text><circle cx="330" cy="70" r="3" fill="currentColor"/><text x="337" y="62" fill="currentColor" font-size="16">B</text><text x="30" y="35" fill="currentColor" font-size="15">tan theta = 2</text></svg><figcaption>Schematic, not drawn to scale. Use the stated data rather than measuring the image.</figcaption></figure>

```answer
{"answer":{"kind":"rational","expected":{"numerator":-4,"denominator":3},"checker_scope":"Exact requested geometric value only; the supplied schematic is not a measurement tool and an exact value does not certify the explanatory argument."}}
```

<details>
<summary>Hint 1</summary>

Use the tangent double-angle identity.

</details>

<details>
<summary>Hint 2</summary>

The doubled angle need not remain acute, so retain the denominator sign.

</details>

<details>
<summary>Worked solution</summary>

The exact identity handles the doubled-angle quadrant correctly.

1. The formula is $\tan(2\theta)=2\tan\theta/(1-\tan^2\theta)$, with nonzero denominator here.
2. Substituting gives $4/(1-4)$.
3. The result is $-4/3$.

</details>
