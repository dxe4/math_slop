# Accumulate divisor weights by quotient blocks

*Medium · [Computational arithmetic problems](index.md)*

For $\sigma(n)=\sum_{d\mid n}d$, compute $\sum_{n=1}^{24}\sigma(n)$.

```answer
{"answer":{"kind":"integer","expected":"491","checker_scope":"Only the requested exact finite algorithmic result is checked. No learner program is executed and no unrestricted written proof is automatically certified. This original draft is ineligible for checkpoint evidence pending independent human review."}}
```

<details>
<summary>Hint 1</summary>

Count how often one fixed divisor $d$ contributes across the whole outer sum.

</details>

<details>
<summary>Hint 2</summary>

Group the resulting terms when $\lfloor24/d\rfloor$ is constant, retaining the weight $d$.

</details>

<details>
<summary>Worked solution</summary>

Interchanging the divisor and integer loops gives a weighted quotient-block algorithm.

1. Each $d$ contributes to $\lfloor24/d\rfloor$ multiples, so the sum is $\sum_{d=1}^{24}d\lfloor24/d\rfloor$.
2. The terms for $d=1,\ldots,8$ are $24,24,24,24,20,24,21,24$, totaling $185$.
3. For $d=9,\ldots,12$ the quotient is $2$, contributing $2(9+10+11+12)=84$; for $d=13,\ldots,24$ it is $1$, contributing $222$.
4. The total is $185+84+222=491$.

</details>
