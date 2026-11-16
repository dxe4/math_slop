# Pair inclusion probability

*Easy · [Statistics and probability](index.md)*

Choose $2$ units uniformly without replacement from $5$ labelled units. What is the probability that two specified distinct units are both selected?

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":10},"checker_scope":"Checks only the requested exact finite answer under the stated model; it does not certify the reasoning or modeling assumptions."}}
```

<details>
<summary>Hint 1</summary>

Identify the equally likely unordered samples.

</details>

<details>
<summary>Hint 2</summary>

Exactly one sample contains both specified units when the sample size is two.

</details>

<details>
<summary>Worked solution</summary>

Count the favourable sample among all equally likely unordered pairs.

1. The number of possible samples is $\binom52=10$.
2. The specified two units form exactly one of those samples.
3. The joint inclusion probability is therefore $1/10$, not the product of the two marginal inclusion probabilities.

</details>
