# Use two side fractions in an area ratio

*Medium · [Original olympiad-style problems](index.md)*

Triangle ABC has area $60$. Point D is the midpoint of AB, and E lies on AC with $AE:EC=1:2$. Find the area of triangle ADE.

<figure class="geometry"><svg viewBox="0 0 480 300" width="480" role="img" aria-label="Triangle ABC has area 60. D is the midpoint of AB, and E divides AC with AE:EC=1:2." style="max-width:100%;height:auto"><line x1="80" y1="240" x2="240" y2="50" stroke="currentColor" stroke-width="2"/><line x1="240" y1="50" x2="410" y2="240" stroke="currentColor" stroke-width="2"/><line x1="410" y1="240" x2="80" y2="240" stroke="currentColor" stroke-width="2"/><line x1="160" y1="145" x2="190" y2="240" stroke="currentColor" stroke-width="2"/><circle cx="80" cy="240" r="3" fill="currentColor"/><text x="87" y="232" fill="currentColor" font-size="16">A</text><circle cx="240" cy="50" r="3" fill="currentColor"/><text x="247" y="42" fill="currentColor" font-size="16">B</text><circle cx="410" cy="240" r="3" fill="currentColor"/><text x="417" y="232" fill="currentColor" font-size="16">C</text><circle cx="160" cy="145" r="3" fill="currentColor"/><text x="167" y="137" fill="currentColor" font-size="16">D</text><circle cx="190" cy="240" r="3" fill="currentColor"/><text x="197" y="232" fill="currentColor" font-size="16">E</text></svg><figcaption>Schematic, not drawn to scale. Use the stated data rather than measuring the image.</figcaption></figure>

```answer
{"answer":{"kind":"integer","expected":"10","checker_scope":"Exact short answer only; the complete argument remains a worked solution, not an automatically certified proof or contest result."}}
```

<details>
<summary>Hint 1</summary>

The smaller and larger triangles share the included angle at A.

</details>

<details>
<summary>Hint 2</summary>

Their area ratio is the product of the two side-length ratios from A.

</details>

<details>
<summary>Worked solution</summary>

The sine area formula gives a ratio without requiring any parallel segments.

1. The side ratios are $AD/AB=1/2$ and $AE/AC=1/3$.
2. Because the included angle at A is common, the area ratio is $(1/2)(1/3)=1/6$.
3. The area of ADE is $60/6=10$.

</details>
