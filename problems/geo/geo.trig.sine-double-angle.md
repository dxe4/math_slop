# Use an exact double-angle identity

*Medium · [Geometry and trigonometry problems](index.md)*

An acute angle $\theta$ has $\sin\theta=3/5$. Find $\sin(2\theta)$.

<figure class="geometry"><svg viewBox="0 0 480 300" width="480" role="img" aria-label="An acute angle theta has sine 3/5." style="max-width:100%;height:auto"><line x1="180" y1="230" x2="380" y2="230" stroke="currentColor" stroke-width="2"/><line x1="180" y1="230" x2="330" y2="70" stroke="currentColor" stroke-width="2"/><circle cx="180" cy="230" r="3" fill="currentColor"/><text x="187" y="222" fill="currentColor" font-size="16">O</text><circle cx="380" cy="230" r="3" fill="currentColor"/><text x="387" y="222" fill="currentColor" font-size="16">A</text><circle cx="330" cy="70" r="3" fill="currentColor"/><text x="337" y="62" fill="currentColor" font-size="16">B</text><text x="30" y="35" fill="currentColor" font-size="15">sin theta = 3/5</text></svg><figcaption>Schematic, not drawn to scale. Use the stated data rather than measuring the image.</figcaption></figure>

```answer
{"answer":{"kind":"rational","expected":{"numerator":24,"denominator":25},"checker_scope":"Exact requested geometric value only; the supplied schematic is not a measurement tool and an exact value does not certify the explanatory argument."}}
```

<details>
<summary>Hint 1</summary>

First recover the positive cosine using the acute-angle hypothesis.

</details>

<details>
<summary>Hint 2</summary>

Apply the sine double-angle identity.

</details>

<details>
<summary>Worked solution</summary>

The quadrant condition fixes the square-root sign.

1. The acute-angle condition gives $\cos\theta=\sqrt{1-9/25}=4/5$.
2. Use $\sin(2\theta)=2\sin\theta\cos\theta$.
3. The result is $2\cdot3\cdot4/25=24/25$.

</details>
