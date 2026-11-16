# Normalize a nonaxial ellipse tangent

*Medium · [Geometry and trigonometry problems](index.md)*

Find the tangent to $x^2/100+y^2/25=1$ at $(6,4)$. Write it as $3x+by=c$ and enter $[b,c]$.

```answer
{"answer":{"kind":"vector","expected":["8","50"],"checker_scope":"The exact requested finite result only; a correct entry does not certify a geometric argument or award reviewed evidence."}}
```

<details>
<summary>Hint 1</summary>

The tangent to $x^2/a^2+y^2/b^2=1$ at $(x_0,y_0)$ is $xx_0/a^2+yy_0/b^2=1$.

</details>

<details>
<summary>Hint 2</summary>

Clear denominators and use the requested coefficient $3$ of $x$.

</details>

<details>
<summary>Worked solution</summary>

Use the ellipse tangent form and normalize consistently.

1. The point is on the ellipse because $36/100+16/25=1$.
2. The tangent equation is $6x/100+4y/25=1$.
3. Multiplying by $50$ gives $3x+8y=50$, so the vector is $[8,50]$.

</details>
