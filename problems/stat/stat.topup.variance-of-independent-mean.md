# Distinguish observation variance from mean variance

*Medium · [Statistics and probability](index.md)*

Four independent identically distributed observations each have variance $16$. Return observation\_variance, mean\_variance and mean\_sd for their arithmetic mean.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"observation_variance":"16","mean_variance":"4","mean_sd":"2"},"checker_scope":"Checks only the requested result under the explicitly stated finite model or convention; does not certify a modeling assumption, causal claim or open argument."}}
```

<details>
<summary>Hint 1</summary>

Independent variances add before dividing the sum by four.

</details>

<details>
<summary>Hint 2</summary>

Standard deviation is the nonnegative square root of variance.

</details>

<details>
<summary>Worked solution</summary>

Averaging independent observations reduces the variance by the sample size.

1. The sum has variance $4\cdot16=64$ by independence.
2. The mean divides the sum by four, so its variance is $64/16=4$.
3. Its standard deviation is two, while each individual observation still has variance sixteen.

</details>
