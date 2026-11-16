# Find a chord from its distance to the center

*Medium · [Geometry and trigonometry problems](index.md)*

A chord of a radius-$5$ circle is at perpendicular distance $3$ from the center. Find the chord length.

<figure class="geometry"><svg viewBox="0 0 480 300" width="480" role="img" aria-label="Chord AB lies at perpendicular distance OM equal to 3 from center O; the circle radius is 5." style="max-width:100%;height:auto"><circle cx="240" cy="150" r="100" fill="none" stroke="currentColor" stroke-width="2"/><line x1="160" y1="210" x2="320" y2="210" stroke="currentColor" stroke-width="2"/><line x1="240" y1="150" x2="240" y2="210" stroke="currentColor" stroke-width="2"/><line x1="240" y1="150" x2="160" y2="210" stroke="currentColor" stroke-width="2"/><circle cx="240" cy="150" r="3" fill="currentColor"/><text x="247" y="142" fill="currentColor" font-size="16">O</text><circle cx="160" cy="210" r="3" fill="currentColor"/><text x="167" y="202" fill="currentColor" font-size="16">A</text><circle cx="320" cy="210" r="3" fill="currentColor"/><text x="327" y="202" fill="currentColor" font-size="16">B</text><circle cx="240" cy="210" r="3" fill="currentColor"/><text x="247" y="202" fill="currentColor" font-size="16">M</text><text x="170" y="160" fill="currentColor" font-size="15">Radius 5</text><text x="250" y="190" fill="currentColor" font-size="15">OM = 3; OM perpendicular to AB</text></svg><figcaption>Schematic, not drawn to scale. Use the stated data rather than measuring the image.</figcaption></figure>

```answer
{"answer":{"kind":"integer","expected":"8","checker_scope":"Exact requested geometric value only; the supplied schematic is not a measurement tool and an exact value does not certify the explanatory argument."}}
```

<details>
<summary>Hint 1</summary>

The perpendicular from the center bisects a chord.

</details>

<details>
<summary>Hint 2</summary>

Apply Pythagoras to half the chord, the distance and the radius.

</details>

<details>
<summary>Worked solution</summary>

The radius and perpendicular bisector form a right triangle.

1. Let $h$ be half the chord length. Then $h^2+3^2=5^2$.
2. Thus $h^2=16$ and the positive half-length is $4$.
3. The full chord length is $8$.

</details>
