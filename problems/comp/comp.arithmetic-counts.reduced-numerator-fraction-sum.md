# Sum fractions by complementary pairing

*Medium · [Computational arithmetic problems](index.md)*

Find $\sum_{1\leq a<1001,\ \gcd(a,1001)=1}a/1001$. Enter its exact value.

```answer
{"answer":{"kind":"integer","expected":"360","checker_scope":"Exact requested integer or rational only; no learner program or unrestricted proof is executed or certified."}}
```

<details>
<summary>Hint 1</summary>

Pair each allowed numerator with its complement to the denominator.

</details>

<details>
<summary>Hint 2</summary>

Count the allowed numerators using the prime factorization of $1001$.

</details>

<details>
<summary>Worked solution</summary>

Complementary reduced fractions add to one.

1. The denominator is $1001=7\cdot11\cdot13$, so there are $\varphi(1001)=6\cdot10\cdot12=720$ allowed numerators.
2. The map $a\mapsto1001-a$ preserves coprimality and has no fixed allowed numerator; each pair of fractions sums to one.
3. There are $720/2=360$ pairs, so the sum is $360$.

</details>
