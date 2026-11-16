# Solve a three-circle contact condition

*Hard · [Original olympiad-style problems](index.md)*

Two circles of radii $1$ and $4$ lie above a line, tangent to it and externally tangent to each other. A third circle lies in the gap between them and the line and is tangent to all three boundaries. Find its radius.

<figure class="geometry"><svg viewBox="0 0 480 300" width="480" role="img" aria-label="Circles of radii 1 and 4 are externally tangent above a common tangent line. A third circle fits the bounded gap and touches both circles and the line." style="max-width:100%;height:auto"><circle cx="80" cy="225" r="25" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="180" cy="150" r="100" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="113.333" cy="238.889" r="11.111" fill="none" stroke="currentColor" stroke-width="2"/><line x1="30" y1="250" x2="430" y2="250" stroke="currentColor" stroke-width="2"/><text x="20" y="280" fill="currentColor" font-size="15">Common tangent line; given radii 1 and 4</text></svg><figcaption>Schematic, not drawn to scale. Use the stated data rather than measuring the image.</figcaption></figure>

```answer
{"answer":{"kind":"rational","expected":{"numerator":4,"denominator":9},"checker_scope":"Exact short answer only; the complete argument remains a worked solution, not an automatically certified proof or contest result."}}
```

<details>
<summary>Hint 1</summary>

Two externally tangent circles on one line have horizontal center separation twice the square root of the radius product.

</details>

<details>
<summary>Hint 2</summary>

In the gap, the two separations from the smaller new circle add to the original separation.

</details>

<details>
<summary>Worked solution</summary>

Pythagoras turns tangency into an equation in the square root of the new radius.

1. For two tangent circles of radii u,v above the same line, the horizontal center separation is $\sqrt{(u+v)^2-(u-v)^2}=2\sqrt{uv}$.
2. Let the gap radius be r. The original separation is $2\sqrt{1\cdot4}=4$, and the gap condition gives $2\sqrt r+2\sqrt{4r}=4$.
3. Thus $6\sqrt r=4$, so $r=4/9$. The gap chooses the solution whose center lies between the original centers.

</details>
