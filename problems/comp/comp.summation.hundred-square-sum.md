# Sum one hundred squares

*Easy · [Computational arithmetic problems](index.md)*

Compute the exact integer $\sum_{k=1}^{100}k^2$.

```answer
{"answer":{"kind":"integer","expected":"338350","checker_scope":"Exact requested integer only; no learner program or unrestricted proof is executed or certified."}}
```

<details>
<summary>Hint 1</summary>

Use the finite sum-of-squares identity.

</details>

<details>
<summary>Hint 2</summary>

Cancel the factor six before multiplying the three factors.

</details>

<details>
<summary>Worked solution</summary>

The sum-of-squares identity avoids term-by-term accumulation.

1. For $n\geq1$, $\sum_{k=1}^n k^2=n(n+1)(2n+1)/6$.
2. At $n=100$ this is $100\cdot101\cdot201/6=50\cdot101\cdot67$.
3. The product is $338350$.

</details>
