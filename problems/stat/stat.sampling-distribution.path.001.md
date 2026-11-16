# Enumerate a sample-mean distribution

*Medium · [Statistics and probability](index.md)*

Draw twice independently with replacement from values $0$ and $4$, each equally likely. The four ordered samples are equally likely. What is the probability that the sample mean is $2$?

| Given information | Value |
| --- | --- |
| population | \[0,4\] |
| draw count | 2 |
| replacement | true |
| independent | true |
| event mean | 2 |

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":2},"checker_scope":"Checks the requested exact quantities under the stated conventions and model. It does not certify an inferential assumption or assess an open explanation."}}
```

<details>
<summary>Hint 1</summary>

Compute the mean for each ordered pair.

</details>

<details>
<summary>Hint 2</summary>

Mixed pairs have the same mean but are distinct outcomes.

</details>

<details>
<summary>Worked solution</summary>

Repeated samples, rather than distinct statistic labels, determine the statistic’s probability weights.

1. The ordered pairs($0,0$),$(0,4),(4,0),(4,4)$ have means $0,2,2,4$.
2. Two of four equally likely samples have mean 2, so the probability is $1/2$.

</details>
