# Randomization tail

*Easy · [Statistics and probability](index.md)*

Under a sharp null, the complete randomization reference has $8$ equally likely assignments, including the observed assignment. For exactly $2$ assignments, the statistic is at least its observed value. What is the inclusive one-sided randomization $p$-value?

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":4},"checker_scope":"Checks only the requested exact finite answer under the stated model; it does not certify the reasoning or modeling assumptions."}}
```

<details>
<summary>Hint 1</summary>

A complete randomization reference uses all allowed assignments, not a fresh simulation correction.

</details>

<details>
<summary>Hint 2</summary>

Use the probability of the stated inclusive upper-tail event.

</details>

<details>
<summary>Worked solution</summary>

The exact p-value is the randomization probability of the inclusive tail.

1. The upper-tail event contains $2$ of the $8$ allowed assignments.
2. Uniform assignment gives each reference point probability $1/8$.
3. The tail probability is $2/8=1/4$. This is not the probability that the sharp null is true.

</details>
