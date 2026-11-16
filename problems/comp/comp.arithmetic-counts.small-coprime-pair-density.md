# Compute an exact coprime-pair proportion

*Hard · [Computational arithmetic problems](index.md)*

Choose an ordered pair $(a,b)$ uniformly from $\{1,\ldots,10\}^2$. What exact fraction of the pairs satisfy $\gcd(a,b)=1$?

```answer
{"answer":{"kind":"rational","expected":{"numerator":63,"denominator":100},"checker_scope":"Exact requested integer or rational only; no learner program or unrestricted proof is executed or certified."}}
```

<details>
<summary>Hint 1</summary>

Count pairs above the diagonal using Euler totients.

</details>

<details>
<summary>Hint 2</summary>

The only coprime pair on the diagonal must be added separately.

</details>

<details>
<summary>Worked solution</summary>

Totient counts and reflection symmetry determine the exact finite proportion.

1. For $b=2,\ldots,10$, the number of coprime pairs with $1\leq a<b$ is $\varphi(b)$. Their sum is $1+2+2+4+2+6+4+6+4=31$.
2. Reflection across the diagonal doubles this count. The diagonal contributes only $(1,1)$, so there are $2\cdot31+1=63$ coprime pairs.
3. The sample space has $100$ pairs, giving fraction $63/100$.

</details>
