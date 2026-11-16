# Find a tangent length from secant power

*Medium · [Geometry and trigonometry problems](index.md)*

From an exterior point $P$, a secant meets a circle first at $A$ and then at $B$, with $PA=3$ and $PB=12$. A tangent from $P$ touches at $T$. Find $PT$.

<figure class="geometry"><svg viewBox="0 0 480 300" width="480" role="img" aria-label="A secant from P meets near point A then far point B, with external length PA 3 and full length PB 12. PT is tangent." style="max-width:100%;height:auto"><circle cx="240" cy="150" r="100" fill="none" stroke="currentColor" stroke-width="2"/><line x1="50" y1="150" x2="340" y2="150" stroke="currentColor" stroke-width="2"/><line x1="50" y1="150" x2="190" y2="65" stroke="currentColor" stroke-width="2"/><circle cx="50" cy="150" r="3" fill="currentColor"/><text x="57" y="142" fill="currentColor" font-size="16">P</text><circle cx="140" cy="150" r="3" fill="currentColor"/><text x="147" y="142" fill="currentColor" font-size="16">A</text><circle cx="340" cy="150" r="3" fill="currentColor"/><text x="347" y="142" fill="currentColor" font-size="16">B</text><circle cx="190" cy="65" r="3" fill="currentColor"/><text x="197" y="57" fill="currentColor" font-size="16">T</text><text x="30" y="280" fill="currentColor" font-size="15">PA = 3; PB = 12</text></svg><figcaption>Schematic, not drawn to scale. Use the stated data rather than measuring the image.</figcaption></figure>

```answer
{"answer":{"kind":"integer","expected":"6","checker_scope":"Exact requested geometric value only; the supplied schematic is not a measurement tool and an exact value does not certify the explanatory argument."}}
```

<details>
<summary>Hint 1</summary>

The secant theorem uses the external length and the entire secant length.

</details>

<details>
<summary>Hint 2</summary>

The tangent length is positive, so take the positive square root of its squared value.

</details>

<details>
<summary>Worked solution</summary>

Equal powers from one exterior point relate the tangent square to the secant product.

1. The tangent-secant theorem gives $PT^2=PA\cdot PB$.
2. Thus $PT^2=3\cdot12=36$.
3. Since $PT>0$, the tangent length is $6$.

</details>
