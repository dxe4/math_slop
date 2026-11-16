# Count unordered nonadjacent vertex pairs

*Medium · [Geometry and trigonometry problems](index.md)*

How many diagonals does a convex $10$-gon have?

<figure class="geometry"><svg viewBox="0 0 480 300" width="480" role="img" aria-label="A convex polygon has ten vertices; no diagonals have been added to the schematic." style="max-width:100%;height:auto"><line x1="190" y1="40" x2="280" y2="40" stroke="currentColor" stroke-width="2"/><line x1="280" y1="40" x2="350" y2="80" stroke="currentColor" stroke-width="2"/><line x1="350" y1="80" x2="390" y2="150" stroke="currentColor" stroke-width="2"/><line x1="390" y1="150" x2="350" y2="220" stroke="currentColor" stroke-width="2"/><line x1="350" y1="220" x2="280" y2="260" stroke="currentColor" stroke-width="2"/><line x1="280" y1="260" x2="190" y2="260" stroke="currentColor" stroke-width="2"/><line x1="190" y1="260" x2="120" y2="220" stroke="currentColor" stroke-width="2"/><line x1="120" y1="220" x2="80" y2="150" stroke="currentColor" stroke-width="2"/><line x1="80" y1="150" x2="120" y2="80" stroke="currentColor" stroke-width="2"/><line x1="120" y1="80" x2="190" y2="40" stroke="currentColor" stroke-width="2"/><circle cx="190" cy="40" r="3" fill="currentColor"/><text x="197" y="32" fill="currentColor" font-size="16">A</text><circle cx="280" cy="40" r="3" fill="currentColor"/><text x="287" y="32" fill="currentColor" font-size="16">B</text><circle cx="350" cy="80" r="3" fill="currentColor"/><text x="357" y="72" fill="currentColor" font-size="16">C</text><circle cx="390" cy="150" r="3" fill="currentColor"/><text x="397" y="142" fill="currentColor" font-size="16">D</text><circle cx="350" cy="220" r="3" fill="currentColor"/><text x="357" y="212" fill="currentColor" font-size="16">E</text><circle cx="280" cy="260" r="3" fill="currentColor"/><text x="287" y="252" fill="currentColor" font-size="16">F</text><circle cx="190" cy="260" r="3" fill="currentColor"/><text x="197" y="252" fill="currentColor" font-size="16">G</text><circle cx="120" cy="220" r="3" fill="currentColor"/><text x="127" y="212" fill="currentColor" font-size="16">H</text><circle cx="80" cy="150" r="3" fill="currentColor"/><text x="87" y="142" fill="currentColor" font-size="16">I</text><circle cx="120" cy="80" r="3" fill="currentColor"/><text x="127" y="72" fill="currentColor" font-size="16">J</text></svg><figcaption>Schematic, not drawn to scale. Use the stated data rather than measuring the image.</figcaption></figure>

```answer
{"answer":{"kind":"integer","expected":"35","checker_scope":"Exact requested geometric value only; the supplied schematic is not a measurement tool and an exact value does not certify the explanatory argument."}}
```

<details>
<summary>Hint 1</summary>

Each vertex connects by diagonals to all but itself and its two neighbors.

</details>

<details>
<summary>Hint 2</summary>

Every diagonal is counted once at each of its two endpoints.

</details>

<details>
<summary>Worked solution</summary>

An endpoint count needs a factor of one-half.

1. A decagon has ten vertices, each incident to $10-3=7$ diagonals.
2. The endpoint count is therefore $10\cdot7=70$.
3. Each diagonal has two endpoints, so there are $70/2=35$ diagonals.

</details>
