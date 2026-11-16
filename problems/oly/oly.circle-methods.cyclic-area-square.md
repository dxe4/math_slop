# Evaluate a cyclic area without a radical

*Hard · [Original olympiad-style problems](index.md)*

A convex cyclic quadrilateral has successive side lengths $2,3,4,5$. Find the square of its area.

<figure class="geometry"><svg viewBox="0 0 480 300" width="480" role="img" aria-label="A convex cyclic quadrilateral has side lengths AB=2, BC=3, CD=4 and DA=5." style="max-width:100%;height:auto"><circle cx="240" cy="150" r="100" fill="none" stroke="currentColor" stroke-width="2"/><line x1="140" y1="150" x2="180" y2="70" stroke="currentColor" stroke-width="2"/><line x1="180" y1="70" x2="340" y2="150" stroke="currentColor" stroke-width="2"/><line x1="340" y1="150" x2="240" y2="250" stroke="currentColor" stroke-width="2"/><line x1="240" y1="250" x2="140" y2="150" stroke="currentColor" stroke-width="2"/><circle cx="140" cy="150" r="3" fill="currentColor"/><text x="147" y="142" fill="currentColor" font-size="16">A</text><circle cx="180" cy="70" r="3" fill="currentColor"/><text x="187" y="62" fill="currentColor" font-size="16">B</text><circle cx="340" cy="150" r="3" fill="currentColor"/><text x="347" y="142" fill="currentColor" font-size="16">C</text><circle cx="240" cy="250" r="3" fill="currentColor"/><text x="247" y="242" fill="currentColor" font-size="16">D</text></svg><figcaption>Schematic, not drawn to scale. Use the stated data rather than measuring the image.</figcaption></figure>

```answer
{"answer":{"kind":"integer","expected":"120","checker_scope":"Exact short answer only; the complete argument remains a worked solution, not an automatically certified proof or contest result."}}
```

<details>
<summary>Hint 1</summary>

Use the cyclic-quadrilateral area formula.

</details>

<details>
<summary>Hint 2</summary>

The question requests the square, so multiply the four semiperimeter differences directly.

</details>

<details>
<summary>Worked solution</summary>

Brahmagupta formula gives the area square from the cyclic condition.

1. The semiperimeter is $s=(2+3+4+5)/2=7$.
2. For a convex cyclic quadrilateral, $K^2=(s-a)(s-b)(s-c)(s-d)$.
3. Therefore $K^2=5\cdot4\cdot3\cdot2=120$.

</details>
