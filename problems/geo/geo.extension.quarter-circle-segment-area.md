# Subtract a chord triangle from a sector

*Medium · [Geometry and trigonometry problems](index.md)*

A circle has radius $2$. A chord subtends a smaller central angle of $90^\circ$. The minor circular segment between chord and arc has area $a\pi+b$. Enter $[a,b]$.

```answer
{"answer":{"kind":"vector","expected":["1","-2"],"checker_scope":"The exact requested finite result only; a correct entry does not certify a geometric argument or award reviewed evidence."}}
```

<details>
<summary>Hint 1</summary>

The smaller segment is a quarter-disk sector minus the triangle of the two radii.

</details>

<details>
<summary>Hint 2</summary>

That radius triangle is right with legs $2,2$.

</details>

<details>
<summary>Worked solution</summary>

Subtract the triangular part of the sector.

1. The quarter-sector area is $(1/4)\pi\cdot2^2=\pi$.
2. The central right triangle has area $(1/2)\cdot2\cdot2=2$.
3. The segment area is $\pi-2$, so the vector is $[1,-2]$.

</details>
