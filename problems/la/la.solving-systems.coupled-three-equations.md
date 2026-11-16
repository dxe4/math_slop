# Solve a coupled three-variable system

*Medium · [Linear algebra problems](index.md)*

Solve $x+y+z=6$, $x+2y+3z=14$ and $2x-y+z=2$. Enter $[x,y,z]$ with exact entries.

```answer
{"answer":{"kind":"vector","expected":["4/5","12/5","14/5"],"checker_scope":"Exact stated finite-dimensional answer only; optional personal reasoning is not graded."}}
```

<details>
<summary>Hint 1</summary>

Subtract the first equation from the second to obtain a relation between the last two variables.

</details>

<details>
<summary>Hint 2</summary>

Express the first two variables in terms of the last, then use the third equation.

</details>

<details>
<summary>Worked solution</summary>

Eliminate variables until one equation determines the remaining coordinate.

1. Subtracting the first equation from the second yields $y+2z=8$, so $y=8-2z$.
2. The first equation then gives $x=z-2$. Substitute both expressions into the third: $2(z-2)-(8-2z)+z=2$.
3. This simplifies to $5z=14$. Hence $z=14/5$, $y=12/5$, $x=4/5$, giving $[4/5,12/5,14/5]$.

</details>
