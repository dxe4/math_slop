# Find a rectangle diameter

*Medium · [Geometry and trigonometry problems](index.md)*

Find the greatest distance between any two points of the closed rectangle $[0,8]\times[0,6]$.

```answer
{"answer":{"kind":"integer","expected":"10","checker_scope":"The exact requested finite result only; a correct entry does not certify a geometric argument or award reviewed evidence."}}
```

<details>
<summary>Hint 1</summary>

The coordinate differences satisfy $|\Delta x|\le8$, $|\Delta y|\le6$.

</details>

<details>
<summary>Hint 2</summary>

Use their squared sum, then check opposite corners attain the bound.

</details>

<details>
<summary>Worked solution</summary>

Bound the entire point pair domain.

1. For any pair, squared distance is $(\Delta x)^2+(\Delta y)^2\le64+36=100$.
2. Therefore every distance is at most $10$.
3. The opposite corners $(0,0),(8,6)$ have distance $10$, proving the maximum is attained.

</details>
