# Combine two polynomial sums

*Medium · [Computational arithmetic problems](index.md)*

Find the exact integer $\sum_{k=1}^{100}k(k+1)$.

```answer
{"answer":{"kind":"integer","expected":"343400","checker_scope":"Exact requested integer only; no learner program or unrestricted proof is executed or certified."}}
```

<details>
<summary>Hint 1</summary>

Expand each adjacent product.

</details>

<details>
<summary>Hint 2</summary>

Combine the square sum and the arithmetic sum before simplifying.

</details>

<details>
<summary>Worked solution</summary>

Linearity combines two standard finite identities.

1. The sum is $\sum k^2+\sum k$.
2. For general $n$, this is $n(n+1)(2n+1)/6+n(n+1)/2=n(n+1)(n+2)/3$.
3. At $n=100$ the value is $100\cdot101\cdot102/3=343400$.

</details>
