# Recover a rotation center

*Medium · [Geometry and trigonometry problems](index.md)*

A counterclockwise quarter-turn sends $(1,0)$ to $(0,1)$. Find its center as $[h,k]$.

```answer
{"answer":{"kind":"vector","expected":["0","0"],"checker_scope":"The exact requested finite result only; a correct entry does not certify a geometric argument or award reviewed evidence."}}
```

<details>
<summary>Hint 1</summary>

Relative to the center, a counterclockwise quarter-turn sends $(u,v)$ to $(-v,u)$.

</details>

<details>
<summary>Hint 2</summary>

Apply that rule to $(1-h,-k)$ and equate the final coordinates.

</details>

<details>
<summary>Worked solution</summary>

Solve the two center constraints from the rotation rule.

1. The image relative displacement is $(k,1-h)$, so its absolute coordinates are $(h+k,k+1-h)$.
2. Equating with $(0,1)$ gives $h+k=0$ and $k-h=0$.
3. Thus $h=k=0$, yielding center $[0,0]$.

</details>
