# Count distinct triangulations of a convex pentagon

*Hard · [Geometry and trigonometry problems](index.md)*

How many different triangulations of a convex $5$-gon can be made with noncrossing diagonals between its vertices? Triangulations are distinguished by their diagonal sets.

<figure class="geometry"><svg viewBox="0 0 480 300" width="480" role="img" aria-label="A convex pentagon is labeled A,B,C,D,E in cyclic order; its diagonals are initially absent." style="max-width:100%;height:auto"><line x1="100" y1="230" x2="80" y2="110" stroke="currentColor" stroke-width="2"/><line x1="80" y1="110" x2="240" y2="40" stroke="currentColor" stroke-width="2"/><line x1="240" y1="40" x2="400" y2="110" stroke="currentColor" stroke-width="2"/><line x1="400" y1="110" x2="380" y2="230" stroke="currentColor" stroke-width="2"/><line x1="380" y1="230" x2="100" y2="230" stroke="currentColor" stroke-width="2"/><circle cx="100" cy="230" r="3" fill="currentColor"/><text x="107" y="222" fill="currentColor" font-size="16">A</text><circle cx="80" cy="110" r="3" fill="currentColor"/><text x="87" y="102" fill="currentColor" font-size="16">B</text><circle cx="240" cy="40" r="3" fill="currentColor"/><text x="247" y="32" fill="currentColor" font-size="16">C</text><circle cx="400" cy="110" r="3" fill="currentColor"/><text x="407" y="102" fill="currentColor" font-size="16">D</text><circle cx="380" cy="230" r="3" fill="currentColor"/><text x="387" y="222" fill="currentColor" font-size="16">E</text></svg><figcaption>Schematic, not drawn to scale. Use the stated data rather than measuring the image.</figcaption></figure>

```answer
{"answer":{"kind":"integer","expected":"5","checker_scope":"Exact requested geometric value only; the supplied schematic is not a measurement tool and an exact value does not certify the explanatory argument."}}
```

<details>
<summary>Hint 1</summary>

Fix one boundary edge and consider the third vertex of its adjacent triangle.

</details>

<details>
<summary>Hint 2</summary>

The three possible third vertices split the remaining regions into polygons with known small triangulation counts.

</details>

<details>
<summary>Worked solution</summary>

Fixing a boundary edge partitions triangulations into disjoint cases.

1. Label the pentagon cyclically A,B,C,D,E and fix edge AE. The adjacent triangle has third vertex B, C or D.
2. For B, the remaining quadrilateral has two triangulations; for C there are two triangular regions and one choice; for D the remaining quadrilateral again has two choices.
3. The disjoint total is $2+1+2=5$.

</details>
