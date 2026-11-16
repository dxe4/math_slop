# Find a diagonal product without individual diagonals

*Hard · [Original olympiad-style problems](index.md)*

In a convex cyclic quadrilateral ABCD, $AB=2$, $BC=5$, $CD=3$ and $DA=4$. Find $AC\cdot BD$.

<figure class="geometry"><svg viewBox="0 0 480 300" width="480" role="img" aria-label="A convex cyclic quadrilateral has side lengths AB=2, BC=5, CD=3, DA=4; both diagonals are shown without lengths." style="max-width:100%;height:auto"><circle cx="240" cy="150" r="100" fill="none" stroke="currentColor" stroke-width="2"/><line x1="140" y1="150" x2="180" y2="70" stroke="currentColor" stroke-width="2"/><line x1="180" y1="70" x2="340" y2="150" stroke="currentColor" stroke-width="2"/><line x1="340" y1="150" x2="240" y2="250" stroke="currentColor" stroke-width="2"/><line x1="240" y1="250" x2="140" y2="150" stroke="currentColor" stroke-width="2"/><line x1="140" y1="150" x2="340" y2="150" stroke="currentColor" stroke-width="2"/><line x1="180" y1="70" x2="240" y2="250" stroke="currentColor" stroke-width="2"/><circle cx="140" cy="150" r="3" fill="currentColor"/><text x="147" y="142" fill="currentColor" font-size="16">A</text><circle cx="180" cy="70" r="3" fill="currentColor"/><text x="187" y="62" fill="currentColor" font-size="16">B</text><circle cx="340" cy="150" r="3" fill="currentColor"/><text x="347" y="142" fill="currentColor" font-size="16">C</text><circle cx="240" cy="250" r="3" fill="currentColor"/><text x="247" y="242" fill="currentColor" font-size="16">D</text></svg><figcaption>Schematic, not drawn to scale. Use the stated data rather than measuring the image.</figcaption></figure>

```answer
{"answer":{"kind":"integer","expected":"26","checker_scope":"Exact short answer only; the complete argument remains a worked solution, not an automatically certified proof or contest result."}}
```

<details>
<summary>Hint 1</summary>

Ptolemy relates the diagonal product to products of opposite sides.

</details>

<details>
<summary>Hint 2</summary>

The cyclic vertex order fixes which side pairs are opposite.

</details>

<details>
<summary>Worked solution</summary>

Ptolemy gives exactly the requested product.

1. For cyclic ABCD, $AC\cdot BD=AB\cdot CD+BC\cdot DA$.
2. The side products are $2\cdot3=6$ and $5\cdot4=20$.
3. The diagonal product is $26$.

</details>
