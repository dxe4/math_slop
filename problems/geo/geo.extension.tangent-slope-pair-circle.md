# Find both slopes with a fixed tangent intercept

*Medium · [Geometry and trigonometry problems](index.md)*

Find all real slopes $m$ for which $y=mx+25/4$ is tangent to $x^2+y^2=25$. Enter the finite set of rational slopes.

```answer
{"answer":{"kind":"set","expected":["-3/4","3/4"],"checker_scope":"The exact requested finite result only; a correct entry does not certify a geometric argument or award reviewed evidence."}}
```

<details>
<summary>Hint 1</summary>

Tangency means the center-to-line distance equals radius $5$.

</details>

<details>
<summary>Hint 2</summary>

Square the distance equation; all quantities before squaring are nonnegative.

</details>

<details>
<summary>Worked solution</summary>

Express tangency as one distance equation.

1. The line is $mx-y+25/4=0$, at distance $(25/4)/\sqrt{m^2+1}$ from the origin.
2. Equating this to $5$ gives $m^2+1=25/16$, so $m^2=9/16$.
3. The slopes are $-3/4,3/4$. Both satisfy the original positive distance equation, so no extraneous slope was introduced.

</details>
