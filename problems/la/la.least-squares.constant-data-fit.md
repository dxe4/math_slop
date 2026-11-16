# Fit a constant to three observations

*Easy · [Linear algebra problems](index.md)*

Choose a real constant $c$ to minimize $(1-c)^2+(2-c)^2+(6-c)^2$. Find $c$.

```answer
{"answer":{"kind":"integer","expected":3,"checker_scope":"Exact stated finite-dimensional answer only; optional personal reasoning is not graded."}}
```

<details>
<summary>Hint 1</summary>

The least-squares constant is the arithmetic mean of the observed values.

</details>

<details>
<summary>Hint 2</summary>

Use every observation once in that mean.

</details>

<details>
<summary>Worked solution</summary>

The normal equation for a constant fit sets the sum of residuals to zero.

1. The normal equation is $(1-c)+(2-c)+(6-c)=0$.
2. This simplifies to $9-3c=0$, so $c=3$.
3. The objective is a strictly convex quadratic, with positive leading coefficient $3$, so this stationary point is the unique minimum.

</details>
