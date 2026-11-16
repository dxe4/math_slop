# Hypergeometric two red seven

*Medium · [Original Putnam-style training](index.md)*

A box contains $3$ red and $4$ blue labelled balls. Three are drawn uniformly without replacement. Find the probability of exactly two red balls.

```answer
{"answer":{"kind":"rational","expected":{"numerator":12,"denominator":35},"checker_scope":"Only the exact bounded answer is checked; the argument and assumptions are not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Count unordered labelled three-ball sets.

</details>

<details>
<summary>Hint 2</summary>

Choose two red labels and one blue label independently.

</details>

<details>
<summary>Worked solution</summary>

The probability is $12/35$.

1. All $\binom73=35$ three-ball subsets are equally likely.
2. Exactly two red and one blue can be chosen in $\binom32\binom41=3\cdot4=12$ ways.
3. The probability is $12/35$.

</details>
