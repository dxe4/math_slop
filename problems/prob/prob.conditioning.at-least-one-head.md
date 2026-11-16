# Condition on at least one head

*Medium · [Probability problems](index.md)*

$2$ independent fair coins are tossed. Given that at least one head occurs, find the probability that both are heads.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":3},"checker_scope":"Exact answer for the stated probability model only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Remove the outcome that contradicts the observation.

</details>

<details>
<summary>Hint 2</summary>

The observation is about the pair as a whole, not about a particular coin.

</details>

<details>
<summary>Worked solution</summary>

An event about the pair leaves three equally likely outcomes.

1. The full outcomes are $HH,HT,TH,TT$, each with probability $1/4$.
2. Conditioning removes only $TT$, leaving three equal-probability outcomes.
3. Only $HH$ has two heads, so the conditional probability is $1/3$.

</details>
