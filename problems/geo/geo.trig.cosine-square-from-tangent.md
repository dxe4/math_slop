# Use a square identity without finding the angle

*Medium · [Geometry and trigonometry problems](index.md)*

An acute angle $\theta$ has $\tan\theta=3/4$. Find $\cos^2\theta$.

<figure class="geometry"><svg viewBox="0 0 480 300" width="480" role="img" aria-label="An acute angle theta has tangent 3/4; its squared cosine is requested." style="max-width:100%;height:auto"><line x1="180" y1="230" x2="380" y2="230" stroke="currentColor" stroke-width="2"/><line x1="180" y1="230" x2="330" y2="70" stroke="currentColor" stroke-width="2"/><circle cx="180" cy="230" r="3" fill="currentColor"/><text x="187" y="222" fill="currentColor" font-size="16">O</text><circle cx="380" cy="230" r="3" fill="currentColor"/><text x="387" y="222" fill="currentColor" font-size="16">A</text><circle cx="330" cy="70" r="3" fill="currentColor"/><text x="337" y="62" fill="currentColor" font-size="16">B</text><text x="30" y="35" fill="currentColor" font-size="15">tan theta = 3/4</text></svg><figcaption>Schematic, not drawn to scale. Use the stated data rather than measuring the image.</figcaption></figure>

```answer
{"answer":{"kind":"rational","expected":{"numerator":16,"denominator":25},"checker_scope":"Exact requested geometric value only; the supplied schematic is not a measurement tool and an exact value does not certify the explanatory argument."}}
```

<details>
<summary>Hint 1</summary>

Use the identity relating tangent squared and secant squared.

</details>

<details>
<summary>Hint 2</summary>

Invert the resulting positive secant square.

</details>

<details>
<summary>Worked solution</summary>

The requested square avoids any inverse trigonometric calculation.

1. The identity is $1+\tan^2\theta=1/\cos^2\theta$.
2. The left side is $1+9/16=25/16$.
3. Thus $\cos^2\theta=16/25$.

</details>
