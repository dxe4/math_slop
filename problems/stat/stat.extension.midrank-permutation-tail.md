# Inclusive permutation tail with ties

*Easy · [Statistics and probability](index.md)*

An exact permutation reference consists of $6$ equally likely assignments with statistic values $0,0,1,1,1,2$. The observed value is $1$. Using the inclusive upper tail $P(T\ge1)$, what is the exact $p$-value?

```answer
{"answer":{"kind":"rational","expected":{"numerator":2,"denominator":3},"checker_scope":"Checks only the requested exact finite answer under the stated model; it does not certify the reasoning or modeling assumptions."}}
```

<details>
<summary>Hint 1</summary>

Inclusive means that ties with the observed value are included in full.

</details>

<details>
<summary>Hint 2</summary>

Count assignments, keeping repeated statistic values with their multiplicities.

</details>

<details>
<summary>Worked solution</summary>

The exact inclusive tail includes the complete tied block, not half of it.

1. The three assignments with value $1$ and the one with value $2$ meet $T\ge1$.
2. There are $4$ favourable assignments out of $6$ equally likely assignments.
3. The exact p-value is $4/6=2/3$. A mid-p or randomized-tie convention would be a different definition.

</details>
