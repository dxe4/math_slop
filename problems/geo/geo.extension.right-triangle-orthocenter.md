# Locate a right triangle orthocenter

*Easy · [Geometry and trigonometry problems](index.md)*

$A=(0,0)$, $B=(4,0)$, $C=(0,7)$. Find the orthocenter as $[x,y]$.

```answer
{"answer":{"kind":"vector","expected":["0","0"],"checker_scope":"The exact requested finite result only; a correct entry does not certify a geometric argument or award reviewed evidence."}}
```

<details>
<summary>Hint 1</summary>

The axis-aligned sides at $A$ are perpendicular.

</details>

<details>
<summary>Hint 2</summary>

Those sides themselves are two of the altitude lines.

</details>

<details>
<summary>Worked solution</summary>

Intersect the altitude lines.

1. $AB$ is horizontal and $AC$ is vertical.
2. The altitude through $B$ lies on $BA$, and the one through $C$ on $CA$.
3. They meet at $A$, giving orthocenter $[0,0]$.

</details>
