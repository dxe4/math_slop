# Minimum square double integral

*Medium · [Original Putnam-style training](index.md)*

Evaluate $\int_0^1\int_0^1\min(x,y)^2\,dy\,dx$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":6},"checker_scope":"Checks only the exact bounded result; derivation and domain assumptions are not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Split the unit square along $y=x$.

</details>

<details>
<summary>Hint 2</summary>

Use symmetry to integrate only the region $0\le y\le x$.

</details>

<details>
<summary>Worked solution</summary>

The inner integral is $x^3/3$; therefore the value is $2\int_0^1x^3/3\,dx=1/6$.

1. The diagonal has area zero, and the regions $y<x$ and $x<y$ contribute equally by swapping coordinates.
2. On $0\le y\le x\le1$, the minimum is $y$, so the full integral is $2\int_0^1\int_0^x y^2\,dy\,dx$.
3. The inner integral is $x^3/3$; therefore the value is $2\int_0^1x^3/3\,dx=1/6$.

</details>
