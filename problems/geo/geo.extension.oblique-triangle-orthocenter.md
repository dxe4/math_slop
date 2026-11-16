# Intersect two triangle altitudes

*Medium · [Geometry and trigonometry problems](index.md)*

$A=(0,0)$, $B=(6,0)$, $C=(2,4)$. Find the orthocenter as $[x,y]$.

```answer
{"answer":{"kind":"vector","expected":["2","2"],"checker_scope":"The exact requested finite result only; a correct entry does not certify a geometric argument or award reviewed evidence."}}
```

<details>
<summary>Hint 1</summary>

The altitude from $C$ is vertical.

</details>

<details>
<summary>Hint 2</summary>

Use the negative reciprocal of the slope of $BC$ for the altitude from $A$.

</details>

<details>
<summary>Worked solution</summary>

Intersect an axis-aligned altitude and an oblique altitude.

1. The altitude from $C$ has equation $x=2$.
2. $BC$ has slope $-1$, so its perpendicular through $A$ is $y=x$.
3. Their intersection is $[2,2]$.

</details>
