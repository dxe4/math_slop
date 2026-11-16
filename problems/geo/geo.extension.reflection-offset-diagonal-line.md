# Reflect in a translated diagonal line

*Medium · [Geometry and trigonometry problems](index.md)*

Reflect $P=(1,1)$ in line $x+y=4$. Enter the reflected point as $[x,y]$.

```answer
{"answer":{"kind":"vector","expected":["3","3"],"checker_scope":"The exact requested finite result only; a correct entry does not certify a geometric argument or award reviewed evidence."}}
```

<details>
<summary>Hint 1</summary>

The perpendicular through $P$ has direction $(1,1)$.

</details>

<details>
<summary>Hint 2</summary>

Find its intersection with the mirror, then double that foot and subtract $P$.

</details>

<details>
<summary>Worked solution</summary>

Use the perpendicular foot as a midpoint.

1. The perpendicular line through $P$ is $y=x$. Its intersection with $x+y=4$ is $M=(2,2)$.
2. Reflection makes $M$ the midpoint of $P$ and its image.
3. The image is $2M-P=(3,3)$, giving $[3,3]$.

</details>
