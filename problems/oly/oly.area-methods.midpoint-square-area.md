# Subtract four corner triangles

*Medium · [Original olympiad-style problems](index.md)*

Join the midpoints of consecutive sides of a square of side length $12$ to form an inner quadrilateral. Find its area.

<figure class="geometry"><svg viewBox="0 0 480 300" width="480" role="img" aria-label="A square has side 12; the four side midpoints are joined consecutively." style="max-width:100%;height:auto"><line x1="120" y1="30" x2="360" y2="30" stroke="currentColor" stroke-width="2"/><line x1="360" y1="30" x2="360" y2="270" stroke="currentColor" stroke-width="2"/><line x1="360" y1="270" x2="120" y2="270" stroke="currentColor" stroke-width="2"/><line x1="120" y1="270" x2="120" y2="30" stroke="currentColor" stroke-width="2"/><line x1="240" y1="30" x2="360" y2="150" stroke="currentColor" stroke-width="2"/><line x1="360" y1="150" x2="240" y2="270" stroke="currentColor" stroke-width="2"/><line x1="240" y1="270" x2="120" y2="150" stroke="currentColor" stroke-width="2"/><line x1="120" y1="150" x2="240" y2="30" stroke="currentColor" stroke-width="2"/><circle cx="120" cy="30" r="3" fill="currentColor"/><text x="127" y="22" fill="currentColor" font-size="16">A</text><circle cx="360" cy="30" r="3" fill="currentColor"/><text x="367" y="22" fill="currentColor" font-size="16">B</text><circle cx="360" cy="270" r="3" fill="currentColor"/><text x="367" y="262" fill="currentColor" font-size="16">C</text><circle cx="120" cy="270" r="3" fill="currentColor"/><text x="127" y="262" fill="currentColor" font-size="16">D</text><circle cx="240" cy="30" r="3" fill="currentColor"/><text x="247" y="22" fill="currentColor" font-size="16">E</text><circle cx="360" cy="150" r="3" fill="currentColor"/><text x="367" y="142" fill="currentColor" font-size="16">F</text><circle cx="240" cy="270" r="3" fill="currentColor"/><text x="247" y="262" fill="currentColor" font-size="16">G</text><circle cx="120" cy="150" r="3" fill="currentColor"/><text x="127" y="142" fill="currentColor" font-size="16">H</text></svg><figcaption>Schematic, not drawn to scale. Use the stated data rather than measuring the image.</figcaption></figure>

```answer
{"answer":{"kind":"integer","expected":"72","checker_scope":"Exact short answer only; the complete argument remains a worked solution, not an automatically certified proof or contest result."}}
```

<details>
<summary>Hint 1</summary>

The four excluded corner triangles are congruent.

</details>

<details>
<summary>Hint 2</summary>

Each has perpendicular legs equal to half the square side.

</details>

<details>
<summary>Worked solution</summary>

An area subtraction gives the inner quadrilateral without finding its side lengths.

1. The outer square has area $12^2=144$.
2. Each excluded corner triangle has legs six and six, so area $18$. The four together have area $72$.
3. The inner quadrilateral area is $144-72=72$.

</details>
