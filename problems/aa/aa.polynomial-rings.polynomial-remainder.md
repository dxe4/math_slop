# Reduce a polynomial modulo a quadratic

*Medium · [Abstract algebra problems](index.md)*

Find the constant remainder when $x^4+1$ is divided by $x^2-1$ in $\mathbb Q[x]$.

```answer
{"answer":{"kind":"integer","expected":2,"checker_scope":"Exact stated finite group, polynomial or field answer only; optional personal reasoning is not graded."}}
```

<details>
<summary>Hint 1</summary>

Work with the equality of residue classes imposed by the divisor.

</details>

<details>
<summary>Hint 2</summary>

Replace a square by its equivalent constant and repeat for the fourth power.

</details>

<details>
<summary>Worked solution</summary>

The quotient relation reduces the high power without a long division table.

1. Modulo $x^2-1$, we have $x^2\equiv1$.
2. Hence $x^4+1\equiv1^2+1=2$.
3. The constant $2$ has degree below the divisor, so it is the unique remainder.

</details>
