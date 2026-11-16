# Compute a perpendicular point-line distance

*Medium · [Geometry and trigonometry problems](index.md)*

Find the distance from $(0,0)$ to line $3x+4y-10=0$.

```answer
{"answer":{"kind":"integer","expected":"2","checker_scope":"The exact requested finite result only; a correct entry does not certify a geometric argument or award reviewed evidence."}}
```

<details>
<summary>Hint 1</summary>

Use $|ax_0+by_0+c|/\sqrt{a^2+b^2}$.

</details>

<details>
<summary>Hint 2</summary>

The denominator normalizes the coefficient normal vector.

</details>

<details>
<summary>Worked solution</summary>

Normalize the line equation to a unit normal.

1. The normal vector $(3,4)$ has length $5$.
2. The absolute residual at $(0,0)$ is $10$.
3. The perpendicular distance is $10/5=2$.

</details>
