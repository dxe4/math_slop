# Normalize a given direction

*Easy · [Geometry and trigonometry problems](index.md)*

Vector $v=(3,4)$ has length $5$. Enter the unit vector in its direction as $[x,y]$.

```answer
{"answer":{"kind":"vector","expected":["3/5","4/5"],"checker_scope":"The exact requested finite result only; a correct entry does not certify a geometric argument or award reviewed evidence."}}
```

<details>
<summary>Hint 1</summary>

A positive scalar multiple preserves direction.

</details>

<details>
<summary>Hint 2</summary>

Divide each component by the supplied length.

</details>

<details>
<summary>Worked solution</summary>

Divide by the nonzero norm.

1. The unit vector is $v/|v|$.
2. Its components are $3/5,4/5$.
3. Their squared sum is $9/25+16/25=1$, confirming unit length.

</details>
