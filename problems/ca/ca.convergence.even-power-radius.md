# A radius from an even-power series

*Medium · [Complex analysis problems](index.md)*

Let $R$ be the radius of convergence of $\sum_{n=0}^{\infty}z^{2n}/3^n$. Find $R^2$.

```answer
{"answer":{"kind":"integer","expected":3,"checker_scope":"Exact requested complex value, polynomial, coefficient, radius or domain only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Treat the whole even-power expression as a geometric ratio.

</details>

<details>
<summary>Hint 2</summary>

Express the convergence condition in terms of the squared modulus.

</details>

<details>
<summary>Worked solution</summary>

The lacunary series is geometric in the square of the variable.

1. The ratio is $z^2/3$.
2. Convergence requires $|z|^2<3$, so the radius is $\sqrt3$.
3. The requested squared radius is $R^2=3$.

</details>
