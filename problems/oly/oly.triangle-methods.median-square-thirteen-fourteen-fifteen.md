# Find a median through a squared identity

*Hard · [Original olympiad-style problems](index.md)*

A triangle has side lengths $13,14,15$. Let m be the median length to the side of length $14$. Find $m^2$.

<figure class="geometry"><svg viewBox="0 0 480 300" width="480" role="img" aria-label="A triangle has sides 13, 14 and 15. The median to the side of length 14 is the requested construction." style="max-width:100%;height:auto"><line x1="240" y1="50" x2="80" y2="250" stroke="currentColor" stroke-width="2"/><line x1="80" y1="250" x2="400" y2="250" stroke="currentColor" stroke-width="2"/><line x1="400" y1="250" x2="240" y2="50" stroke="currentColor" stroke-width="2"/><circle cx="240" cy="50" r="3" fill="currentColor"/><text x="247" y="42" fill="currentColor" font-size="16">A</text><circle cx="80" cy="250" r="3" fill="currentColor"/><text x="87" y="242" fill="currentColor" font-size="16">B</text><circle cx="400" cy="250" r="3" fill="currentColor"/><text x="407" y="242" fill="currentColor" font-size="16">C</text></svg><figcaption>Schematic, not drawn to scale. Use the stated data rather than measuring the image.</figcaption></figure>

```answer
{"answer":{"kind":"integer","expected":"148","checker_scope":"Exact short answer only; the complete argument remains a worked solution, not an automatically certified proof or contest result."}}
```

<details>
<summary>Hint 1</summary>

Apply the median identity with the other two side lengths.

</details>

<details>
<summary>Hint 2</summary>

The identity gives a squared median directly, so no radical needs to be evaluated.

</details>

<details>
<summary>Worked solution</summary>

Apollonius identity relates a median square to the three side squares.

1. For a median to side c, $4m^2=2a^2+2b^2-c^2$.
2. Here $4m^2=2\cdot13^2+2\cdot15^2-14^2=338+450-196=592$.
3. Thus $m^2=148$.

</details>
