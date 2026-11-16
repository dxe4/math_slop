# Invert a product transform

*Medium · [Differential equations problems](index.md)*

A causal function has Laplace transform $1/(s(s+2))$. Find its value at $t=\log2$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":3,"denominator":8},"checker_scope":"Requested bounded solution observation, spectrum or polynomial representation only, with the stated tolerance where applicable; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Separate the two simple fractions.

</details>

<details>
<summary>Hint 2</summary>

Use the constant and exponential inverse transforms with the coefficients from that decomposition.

</details>

<details>
<summary>Worked solution</summary>

Partial fractions reduce the inverse to two elementary causal functions.

1. $1/(s(s+2))=(1/2)(1/s-1/(s+2))$.
2. Thus $f(t)=(1-e^{-2t})/2$ for $t\ge0$; its transform recombines to the prescribed rational function.
3. At $\log2$, the value is $(1-1/4)/2=3/8$.

</details>
