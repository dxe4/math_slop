# A binomial point probability

*Easy · [Probability problems](index.md)*

Four independent trials each succeed with probability $1/2$. Find the probability of exactly two successes.

```answer
{"answer":{"kind":"rational","expected":{"numerator":3,"denominator":8},"checker_scope":"Exact answer for the stated probability model only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Choose the positions of the successful trials.

</details>

<details>
<summary>Hint 2</summary>

Each complete four-trial pattern has the same probability.

</details>

<details>
<summary>Worked solution</summary>

Count success-position patterns under the independent Bernoulli model.

1. There are $\binom42=6$ patterns with exactly two successes.
2. Each pattern has probability $(1/2)^4=1/16$.
3. The required probability is $6/16=3/8$.

</details>
