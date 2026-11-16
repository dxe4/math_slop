# Expand in a translated polynomial basis

*Easy · [Linear algebra problems](index.md)*

Work over $\mathbb R$. Coordinates are dimensionless and ordered as stated. In the ordered basis $B=(1,x+1,(x+1)^2)$ of $P_2(\mathbb R)$, find the coordinates of $x^2+3x+2$.

```answer
{"answer":{"kind":"vector","expected":["0","1","1"],"checker_scope":"Only the requested exact finite answer is checked; explanatory reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Expand the basis functions in ordinary powers first.

</details>

<details>
<summary>Hint 2</summary>

Subtract the square term and identify the remaining translated linear term.

</details>

<details>
<summary>Worked solution</summary>

Match polynomial coefficients in a triangular basis.

1. The quadratic basis function is $(x+1)^2=x^2+2x+1$.
2. Subtracting it leaves $x+1$, exactly the second basis function.
3. There is no remaining constant basis contribution, so the coordinate vector is $[0,1,1]$.

</details>
