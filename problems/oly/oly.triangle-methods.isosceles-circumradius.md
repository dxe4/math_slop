# Use altitude area to obtain a circumradius

*Hard · [Original olympiad-style problems](index.md)*

An isosceles triangle has sides $5,5,6$. Find its circumradius.

<figure class="geometry"><svg viewBox="0 0 480 300" width="480" role="img" aria-label="An isosceles triangle has equal sides 5 and base 6; the circumradius is requested." style="max-width:100%;height:auto"><line x1="240" y1="50" x2="80" y2="250" stroke="currentColor" stroke-width="2"/><line x1="80" y1="250" x2="400" y2="250" stroke="currentColor" stroke-width="2"/><line x1="400" y1="250" x2="240" y2="50" stroke="currentColor" stroke-width="2"/><circle cx="240" cy="50" r="3" fill="currentColor"/><text x="247" y="42" fill="currentColor" font-size="16">A</text><circle cx="80" cy="250" r="3" fill="currentColor"/><text x="87" y="242" fill="currentColor" font-size="16">B</text><circle cx="400" cy="250" r="3" fill="currentColor"/><text x="407" y="242" fill="currentColor" font-size="16">C</text></svg><figcaption>Schematic, not drawn to scale. Use the stated data rather than measuring the image.</figcaption></figure>

```answer
{"answer":{"kind":"rational","expected":{"numerator":25,"denominator":8},"checker_scope":"Exact short answer only; the complete argument remains a worked solution, not an automatically certified proof or contest result."}}
```

<details>
<summary>Hint 1</summary>

The altitude to the base bisects it and determines the area.

</details>

<details>
<summary>Hint 2</summary>

Use the product-of-sides formula for the circumradius.

</details>

<details>
<summary>Worked solution</summary>

The triangle area connects side data to its circumcircle radius.

1. The altitude to the side of length six is $\sqrt{5^2-3^2}=4$, so the area is $6\cdot4/2=12$.
2. The circumradius identity is $R=abc/(4\Delta)$.
3. Thus $R=5\cdot5\cdot6/(4\cdot12)=25/8$.

</details>
