# Use the radius difference at a common tangent

*Hard · [Original olympiad-style problems](index.md)*

Two circles with disjoint interiors have radii $9$ and $4$. A common external tangent has distance $12$ between its contact points. Find the distance between the circle centers.

<figure class="geometry"><svg viewBox="0 0 480 300" width="480" role="img" aria-label="Two circles with disjoint interiors have radii 9 and 4; contact points on a common external tangent are 12 units apart." style="max-width:100%;height:auto"><circle cx="140" cy="160" r="90" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="260" cy="210" r="40" fill="none" stroke="currentColor" stroke-width="2"/><line x1="140" y1="160" x2="140" y2="250" stroke="currentColor" stroke-width="2"/><line x1="260" y1="210" x2="260" y2="250" stroke="currentColor" stroke-width="2"/><line x1="140" y1="250" x2="260" y2="250" stroke="currentColor" stroke-width="2"/><line x1="140" y1="160" x2="260" y2="210" stroke="currentColor" stroke-width="2"/><circle cx="140" cy="160" r="3" fill="currentColor"/><text x="147" y="152" fill="currentColor" font-size="16">O</text><circle cx="260" cy="210" r="3" fill="currentColor"/><text x="267" y="202" fill="currentColor" font-size="16">P</text><circle cx="140" cy="250" r="3" fill="currentColor"/><text x="147" y="242" fill="currentColor" font-size="16">A</text><circle cx="260" cy="250" r="3" fill="currentColor"/><text x="267" y="242" fill="currentColor" font-size="16">B</text><text x="150" y="275" fill="currentColor" font-size="15">Tangent contact distance 12; radii 9 and 4</text></svg><figcaption>Schematic, not drawn to scale. Use the stated data rather than measuring the image.</figcaption></figure>

```answer
{"answer":{"kind":"integer","expected":"13","checker_scope":"Exact short answer only; the complete argument remains a worked solution, not an automatically certified proof or contest result."}}
```

<details>
<summary>Hint 1</summary>

The radii to contact points are parallel and perpendicular to the tangent.

</details>

<details>
<summary>Hint 2</summary>

The relevant right triangle uses the difference of radii, not their sum.

</details>

<details>
<summary>Worked solution</summary>

Offset parallel radii produce a right triangle between the centers.

1. The radius difference is $9-4=5$.
2. Projecting one center parallel to the tangent gives a right triangle with legs 12 and 5 and hypotenuse equal to the center distance.
3. The distance is $\sqrt{12^2+5^2}=13$.

</details>
