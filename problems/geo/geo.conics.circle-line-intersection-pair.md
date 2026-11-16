# List both circle-line intersections

*Medium · [Geometry and trigonometry problems](index.md)*

Find both intersections of $x^2+y^2=25$ with $y=3$. Enter the two points as matrix rows ordered by increasing x-coordinate.

<figure class="geometry"><svg viewBox="0 0 480 300" width="480" role="img" aria-label="The circle x squared plus y squared equals 25 is crossed by the horizontal line y=3; intersection coordinates are not labeled." style="max-width:100%;height:auto"><circle cx="240" cy="170" r="100" fill="none" stroke="currentColor" stroke-width="2"/><line x1="80" y1="110" x2="410" y2="110" stroke="currentColor" stroke-width="2"/><circle cx="240" cy="170" r="3" fill="currentColor"/><text x="247" y="162" fill="currentColor" font-size="16">O</text><text x="95" y="40" fill="currentColor" font-size="15">Circle: x^2 + y^2 = 25</text><text x="365" y="95" fill="currentColor" font-size="15">y = 3</text></svg><figcaption>Schematic, not drawn to scale. Use the stated data rather than measuring the image.</figcaption></figure>

```answer
{"answer":{"kind":"matrix","rows":2,"columns":2,"expected":[["-4","3"],["4","3"]],"checker_scope":"Exact requested geometric value only; the supplied schematic is not a measurement tool and an exact value does not certify the explanatory argument."}}
```

<details>
<summary>Hint 1</summary>

Substitute the line equation into the circle equation.

</details>

<details>
<summary>Hint 2</summary>

Keep both signs of the resulting nonzero square root and preserve the stated row order.

</details>

<details>
<summary>Worked solution</summary>

Substitution reduces the intersection to a quadratic in one coordinate.

1. With $y=3$, the circle equation becomes $x^2+9=25$.
2. Thus $x^2=16$ and $x=\pm4$.
3. The ordered rows are $(-4,3)$ and $(4,3)$.

</details>
