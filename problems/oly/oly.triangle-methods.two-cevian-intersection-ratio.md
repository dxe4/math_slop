# Find an intersection ratio from two side divisions

*Hard · [Original olympiad-style problems](index.md)*

In triangle ABC, D lies on AB with $AD:DB=1:2$, and E lies on AC with $AE:EC=2:1$. Let P be the intersection of CD and BE. Find $CP/PD$.

<figure class="geometry"><svg viewBox="0 0 480 300" width="480" role="img" aria-label="D divides AB in ratio 1:2 and E divides AC in ratio 2:1. Cevians CD and BE meet at P." style="max-width:100%;height:auto"><line x1="80" y1="240" x2="240" y2="50" stroke="currentColor" stroke-width="2"/><line x1="240" y1="50" x2="410" y2="240" stroke="currentColor" stroke-width="2"/><line x1="410" y1="240" x2="80" y2="240" stroke="currentColor" stroke-width="2"/><line x1="410" y1="240" x2="133.333" y2="176.667" stroke="currentColor" stroke-width="2"/><line x1="240" y1="50" x2="300" y2="240" stroke="currentColor" stroke-width="2"/><circle cx="80" cy="240" r="3" fill="currentColor"/><text x="87" y="232" fill="currentColor" font-size="16">A</text><circle cx="240" cy="50" r="3" fill="currentColor"/><text x="247" y="42" fill="currentColor" font-size="16">B</text><circle cx="410" cy="240" r="3" fill="currentColor"/><text x="417" y="232" fill="currentColor" font-size="16">C</text><circle cx="133.333" cy="176.667" r="3" fill="currentColor"/><text x="140.333" y="168.667" fill="currentColor" font-size="16">D</text><circle cx="300" cy="240" r="3" fill="currentColor"/><text x="307" y="232" fill="currentColor" font-size="16">E</text><circle cx="291.429" cy="212.857" r="3" fill="currentColor"/><text x="298.429" y="204.857" fill="currentColor" font-size="16">P</text></svg><figcaption>Schematic, not drawn to scale. Use the stated data rather than measuring the image.</figcaption></figure>

```answer
{"answer":{"kind":"rational","expected":{"numerator":3,"denominator":4},"checker_scope":"Exact short answer only; the complete argument remains a worked solution, not an automatically certified proof or contest result."}}
```

<details>
<summary>Hint 1</summary>

Write D and E as affine combinations of the vertices.

</details>

<details>
<summary>Hint 2</summary>

Look for one point expressed on both cevians using compatible vertex weights.

</details>

<details>
<summary>Worked solution</summary>

Compatible affine weights give the intersection without needing any side lengths.

1. The side divisions give $D=(2A+B)/3$ and $E=(A+2C)/3$ in position-vector notation.
2. The point $P=(2A+B+4C)/7=(3D+4C)/7=(B+6E)/7$ lies on both segments CD and BE.
3. Along CD it has weights 4 on C and 3 on D, so $CP/PD=3/4$.

</details>
