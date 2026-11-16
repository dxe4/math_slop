# Group a gcd sum by its gcd value

*Hard · [Computational arithmetic problems](index.md)*

Compute $\sum_{k=1}^{100}\gcd(k,100)$.

```answer
{"answer":{"kind":"integer","expected":"520","checker_scope":"Exact requested integer only; no learner program or unrestricted proof is executed or certified."}}
```

<details>
<summary>Hint 1</summary>

Group terms according to the divisor $d=\gcd(k,100)$.

</details>

<details>
<summary>Hint 2</summary>

For each $d\mid100$, the number of terms in that group is $\varphi(100/d)$.

</details>

<details>
<summary>Worked solution</summary>

The gcd grouping turns the sum into a multiplicative divisor expression.

1. The sum is $\sum_{d\mid100}d\varphi(100/d)=100\sum_{e\mid100}\varphi(e)/e$.
2. For a prime power $p^a$, the local factor in the last sum is $1+a(1-1/p)$. Since $100=2^2\cdot5^2$, the factors are $2$ and $13/5$.
3. The result is $100\cdot2\cdot13/5=520$.

</details>
