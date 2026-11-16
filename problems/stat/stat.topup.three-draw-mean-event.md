# Count ordered samples giving a specified mean

*Medium · [Statistics and probability](index.md)*

Draw independently three times from $\{0,2\}$, each value equally likely on each draw. Find the probability that the sample mean equals $4/3$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":3,"denominator":8},"checker_scope":"Checks only the requested result under the explicitly stated finite model or convention; does not certify a modeling assumption, causal claim or open argument."}}
```

<details>
<summary>Hint 1</summary>

Translate the mean condition to a condition on the total.

</details>

<details>
<summary>Hint 2</summary>

Count positions for the required number of twos among three draws.

</details>

<details>
<summary>Worked solution</summary>

The sample-mean event is a binomial count event under independent replacement draws.

1. A mean of four thirds requires total four, hence exactly two twos and one zero.
2. There are three positions for the zero among eight equally likely ordered samples.
3. The probability is therefore three eighths.

</details>
