# Telescope a multiplicative recurrence

*Medium · [Computational arithmetic problems](index.md)*

Let $b_1=1$ and $b_n=\frac{n+1}{n-1}b_{n-1}$ for every integer $n\geq2$. Find $b_{1000}$.

```answer
{"answer":{"kind":"integer","expected":"500500","checker_scope":"Exact requested integer or rational only; no learner program or unrestricted proof is executed or certified."}}
```

<details>
<summary>Hint 1</summary>

Write the recurrence as a product of successive ratios.

</details>

<details>
<summary>Hint 2</summary>

The numerator and denominator factors cancel except at the two ends.

</details>

<details>
<summary>Worked solution</summary>

A telescoping product gives an integer closed form despite the rational recurrence coefficients.

1. Iterating from $b_1$ gives $b_n=\prod_{k=2}^n(k+1)/(k-1)$.
2. The product is $(3\cdot4\cdots(n+1))/(1\cdot2\cdots(n-1))=n(n+1)/2$.
3. Thus $b_{1000}=1000\cdot1001/2=500500$.

</details>
