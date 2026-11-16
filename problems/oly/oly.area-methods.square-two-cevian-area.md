# Calculate a small region from intersecting side constructions

*Hard · [Original olympiad-style problems](index.md)*

In square ABCD of area $1$, labeled cyclically, E is the midpoint of AB and F lies on BC with $BF:FC=1:3$. Let P be the intersection of CE and DF. Find the area of triangle DCP.

<figure class="geometry"><svg viewBox="0 0 480 300" width="480" role="img" aria-label="Unit-area square ABCD is labeled cyclically. E is midpoint of AB, F divides BC with BF:FC=1:3, and CE meets DF at P." style="max-width:100%;height:auto"><line x1="100" y1="260" x2="340" y2="260" stroke="currentColor" stroke-width="2"/><line x1="340" y1="260" x2="340" y2="20" stroke="currentColor" stroke-width="2"/><line x1="340" y1="20" x2="100" y2="20" stroke="currentColor" stroke-width="2"/><line x1="100" y1="20" x2="100" y2="260" stroke="currentColor" stroke-width="2"/><line x1="340" y1="20" x2="220" y2="260" stroke="currentColor" stroke-width="2"/><line x1="100" y1="20" x2="340" y2="200" stroke="currentColor" stroke-width="2"/><circle cx="100" cy="260" r="3" fill="currentColor"/><text x="107" y="252" fill="currentColor" font-size="16">A</text><circle cx="340" cy="260" r="3" fill="currentColor"/><text x="347" y="252" fill="currentColor" font-size="16">B</text><circle cx="340" cy="20" r="3" fill="currentColor"/><text x="347" y="12" fill="currentColor" font-size="16">C</text><circle cx="100" cy="20" r="3" fill="currentColor"/><text x="107" y="12" fill="currentColor" font-size="16">D</text><circle cx="220" cy="260" r="3" fill="currentColor"/><text x="227" y="252" fill="currentColor" font-size="16">E</text><circle cx="340" cy="200" r="3" fill="currentColor"/><text x="347" y="192" fill="currentColor" font-size="16">F</text><circle cx="274.545" cy="150.909" r="3" fill="currentColor"/><text x="281.545" y="142.909" fill="currentColor" font-size="16">P</text></svg><figcaption>Schematic, not drawn to scale. Use the stated data rather than measuring the image.</figcaption></figure>

```answer
{"answer":{"kind":"rational","expected":{"numerator":3,"denominator":11},"checker_scope":"Exact short answer only; the complete argument remains a worked solution, not an automatically certified proof or contest result."}}
```

<details>
<summary>Hint 1</summary>

Assign unit-square coordinates to the cyclic vertices.

</details>

<details>
<summary>Hint 2</summary>

Solve the two parametric segment equations, then use DC as the triangle base.

</details>

<details>
<summary>Worked solution</summary>

Coordinate intersections identify the perpendicular height of the requested triangle.

1. Take A=(0,0), B=(1,0), C=(1,1), D=(0,1). Then E=(1/2,0) and F=(1,1/4).
2. Write P on CE as $(1-t/2,1-t)$ and on DF as $(s,1-3s/4)$. Thus s=1-t/2 and t=3s/4, giving t=6/11 and P\_y=5/11.
3. Triangle DCP has base one and height $1-5/11=6/11$. Its area is $3/11$.

</details>
