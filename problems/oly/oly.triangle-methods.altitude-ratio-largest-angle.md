# Read side ratios from altitude ratios

*Hard · [Original olympiad-style problems](index.md)*

A triangle has altitudes of lengths $12,15,20$. Find its largest angle in degrees.

<figure class="geometry"><svg viewBox="0 0 480 300" width="480" role="img" aria-label="A triangle has three altitudes of lengths 12, 15 and 20. No angle sizes are supplied." style="max-width:100%;height:auto"><line x1="240" y1="50" x2="80" y2="250" stroke="currentColor" stroke-width="2"/><line x1="80" y1="250" x2="400" y2="250" stroke="currentColor" stroke-width="2"/><line x1="400" y1="250" x2="240" y2="50" stroke="currentColor" stroke-width="2"/><circle cx="240" cy="50" r="3" fill="currentColor"/><text x="247" y="42" fill="currentColor" font-size="16">A</text><circle cx="80" cy="250" r="3" fill="currentColor"/><text x="87" y="242" fill="currentColor" font-size="16">B</text><circle cx="400" cy="250" r="3" fill="currentColor"/><text x="407" y="242" fill="currentColor" font-size="16">C</text></svg><figcaption>Schematic, not drawn to scale. Use the stated data rather than measuring the image.</figcaption></figure>

```answer
{"answer":{"kind":"integer","expected":"90","checker_scope":"Exact short answer only; the complete argument remains a worked solution, not an automatically certified proof or contest result."}}
```

<details>
<summary>Hint 1</summary>

All three base-altitude products equal twice the same area.

</details>

<details>
<summary>Hint 2</summary>

The side lengths are therefore inversely proportional to the altitude lengths.

</details>

<details>
<summary>Worked solution</summary>

Altitude ratios determine a familiar side-ratio triple.

1. The sides are proportional to $1/12:1/15:1/20=5:4:3$.
2. These satisfy $3^2+4^2=5^2$.
3. The converse Pythagorean theorem shows the triangle is right, so its largest angle is $90$ degrees.

</details>
