# Combine two exact angle ratios

*Medium · [Geometry and trigonometry problems](index.md)*

Acute angles $\alpha,\beta$ satisfy $\sin\alpha=3/5$ and $\sin\beta=5/13$. Find $\cos(\alpha+\beta)$.

<figure class="geometry"><svg viewBox="0 0 480 300" width="480" role="img" aria-label="Two acute angles alpha and beta have respective sines 3/5 and 5/13." style="max-width:100%;height:auto"><line x1="180" y1="230" x2="380" y2="230" stroke="currentColor" stroke-width="2"/><line x1="180" y1="230" x2="330" y2="70" stroke="currentColor" stroke-width="2"/><circle cx="180" cy="230" r="3" fill="currentColor"/><text x="187" y="222" fill="currentColor" font-size="16">O</text><circle cx="380" cy="230" r="3" fill="currentColor"/><text x="387" y="222" fill="currentColor" font-size="16">A</text><circle cx="330" cy="70" r="3" fill="currentColor"/><text x="337" y="62" fill="currentColor" font-size="16">B</text><text x="30" y="35" fill="currentColor" font-size="15">sin alpha = 3/5; sin beta = 5/13</text></svg><figcaption>Schematic, not drawn to scale. Use the stated data rather than measuring the image.</figcaption></figure>

```answer
{"answer":{"kind":"rational","expected":{"numerator":33,"denominator":65},"checker_scope":"Exact requested geometric value only; the supplied schematic is not a measurement tool and an exact value does not certify the explanatory argument."}}
```

<details>
<summary>Hint 1</summary>

Both cosines are positive because the angles are acute.

</details>

<details>
<summary>Hint 2</summary>

Use the cosine sum formula with its subtraction sign.

</details>

<details>
<summary>Worked solution</summary>

Exact Pythagorean ratios combine through the angle-sum identity.

1. The positive cosines are $\cos\alpha=4/5$ and $\cos\beta=12/13$.
2. The sum identity gives $\cos(\alpha+\beta)=(4/5)(12/13)-(3/5)(5/13)$.
3. This is $(48-15)/65=33/65$.

</details>
