# Count empirical bootstrap samples with a given mean

*Hard · [Statistics and probability](index.md)*

The observed sample is $0,2,4$. An ordinary empirical bootstrap draws three times independently with replacement from these three observations, each with probability 1/3. Find the exact bootstrap probability that the resampled mean is 2.

```answer
{"answer":{"kind":"rational","expected":{"numerator":7,"denominator":27},"checker_scope":"Checks only the requested result under the explicitly stated finite model or convention; does not certify a modeling assumption, causal claim or open argument."}}
```

<details>
<summary>Hint 1</summary>

The resampled total must be six.

</details>

<details>
<summary>Hint 2</summary>

Classify ordered triples as all twos or as permutations of zero, two and four.

</details>

<details>
<summary>Worked solution</summary>

Bootstrap probabilities refer to the supplied empirical distribution.

1. There are twenty-seven equally likely ordered resamples.
2. Total six occurs for the all-two resample and for the six permutations of zero, two and four.
3. The empirical bootstrap probability is seven twenty-sevenths; it is not a claim about population coverage.

</details>
