# Compute a moment from a density

*Medium · [Probability problems](index.md)*

A random variable has density $f(x)=2x$ on $[0,1]$ and zero elsewhere. Find $E[X]$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":2,"denominator":3},"checker_scope":"Exact answer for the stated probability model only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Weight the integration variable by the density.

</details>

<details>
<summary>Hint 2</summary>

The expectation integrand contains one factor from the variable and another from the density.

</details>

<details>
<summary>Worked solution</summary>

The expectation is the integral of the value against its probability density.

1. The density is normalized because $\int_0^1 2x\,dx=1$.
2. The expectation is $\int_0^1x(2x)\,dx=2\int_0^1x^2\,dx$.
3. This gives $E[X]=2/3$.

</details>
