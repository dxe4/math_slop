# Solve a cyclic-quadrilateral angle equation

*Medium · [Geometry and trigonometry problems](index.md)*

In a convex cyclic quadrilateral, one pair of opposite interior angles measures $x^\circ$ and $(3x-20)^\circ$. Find $x$.

<figure class="geometry"><svg viewBox="0 0 480 300" width="480" role="img" aria-label="A convex cyclic quadrilateral has opposite angles x degrees and 3x minus 20 degrees." style="max-width:100%;height:auto"><circle cx="240" cy="150" r="100" fill="none" stroke="currentColor" stroke-width="2"/><line x1="140" y1="150" x2="180" y2="70" stroke="currentColor" stroke-width="2"/><line x1="180" y1="70" x2="340" y2="150" stroke="currentColor" stroke-width="2"/><line x1="340" y1="150" x2="240" y2="250" stroke="currentColor" stroke-width="2"/><line x1="240" y1="250" x2="140" y2="150" stroke="currentColor" stroke-width="2"/><circle cx="140" cy="150" r="3" fill="currentColor"/><text x="147" y="142" fill="currentColor" font-size="16">A</text><circle cx="180" cy="70" r="3" fill="currentColor"/><text x="187" y="62" fill="currentColor" font-size="16">B</text><circle cx="340" cy="150" r="3" fill="currentColor"/><text x="347" y="142" fill="currentColor" font-size="16">C</text><circle cx="240" cy="250" r="3" fill="currentColor"/><text x="247" y="242" fill="currentColor" font-size="16">D</text><text x="90" y="130" fill="currentColor" font-size="15">x degrees</text><text x="335" y="180" fill="currentColor" font-size="15">3x - 20 degrees</text></svg><figcaption>Schematic, not drawn to scale. Use the stated data rather than measuring the image.</figcaption></figure>

```answer
{"answer":{"kind":"integer","expected":"50","checker_scope":"Exact requested geometric value only; the supplied schematic is not a measurement tool and an exact value does not certify the explanatory argument."}}
```

<details>
<summary>Hint 1</summary>

Opposite angles of a convex cyclic quadrilateral are supplementary.

</details>

<details>
<summary>Hint 2</summary>

Set the sum of the two displayed expressions equal to a straight angle.

</details>

<details>
<summary>Worked solution</summary>

The cyclic condition supplies the equation for the unknown angle.

1. Opposite angles sum to $180^\circ$.
2. Thus $x+(3x-20)=180$, so $4x=200$.
3. Therefore $x=50$, with opposite angle $130^\circ$.

</details>
