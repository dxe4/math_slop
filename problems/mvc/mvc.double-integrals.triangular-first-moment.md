# Integrate over a triangular region

*Medium · [Multivariable calculus problems](index.md)*

Let $D=\{(x,y):0\leq y\leq x\leq1\}$. Compute $\iint_D x\,dA$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":3},"checker_scope":"Exact requested value, vector or matrix only; a numerical answer does not automatically certify the accompanying extremum or integration argument."}}
```

<details>
<summary>Hint 1</summary>

At a fixed $x$, the vertical slice has length $x$.

</details>

<details>
<summary>Hint 2</summary>

The integrand is constant along that slice.

</details>

<details>
<summary>Worked solution</summary>

The triangular slice length becomes a factor in the outer integral.

1. The integral is $\int_0^1\int_0^x x\,dy\,dx$.
2. The inner integral is $x^2$.
3. Thus the answer is $\int_0^1x^2\,dx=1/3$.

</details>
