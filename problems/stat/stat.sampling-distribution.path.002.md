# Compare observation variance with mean variance

*Easy · [Statistics and probability](index.md)*

Independent identically distributed observations each have variance $9$. A sample mean uses $n=3$ observations. Use Var(mean)=Var(observation)/n. Find observation\_variance and mean\_variance.

| Given information | Value |
| --- | --- |
| observation variance | 9 |
| n | 3 |
| independent identically distributed | true |

```answer
{"answer":{"kind":"record_of_rationals","expected":{"observation_variance":"9","mean_variance":"3"},"checker_scope":"Checks the requested exact quantities under the stated conventions and model. It does not certify an inferential assumption or assess an open explanation."}}
```

<details>
<summary>Hint 1</summary>

The supplied formula concerns the variance of the mean, not its expected value.

</details>

<details>
<summary>Hint 2</summary>

Divide the observation variance by the sample size.

</details>

<details>
<summary>Worked solution</summary>

Averages of independent observations are less variable than individual observations.

1. The individual observation variance is given as $9$.
2. The mean variance is $9/3=3$ under the stated independence.

</details>
