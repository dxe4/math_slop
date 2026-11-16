# Use the sample convention

*Medium · [Statistics and probability](index.md)*

Treat $1,4,7$ as a sample. Define sample variance by dividing squared deviations from the sample mean by $n-1$. Find variance and standard\_deviation.

| Given information | Value |
| --- | --- |
| observations | \[1,4,7\] |
| convention | sample divide by n-1 |

```answer
{"answer":{"kind":"record_of_rationals","expected":{"variance":"9","standard_deviation":"3"},"checker_scope":"Checks the requested exact quantities under the stated conventions and model. It does not certify an inferential assumption or assess an open explanation."}}
```

<details>
<summary>Hint 1</summary>

The sample mean is $4$.

</details>

<details>
<summary>Hint 2</summary>

There are three observations, so the required denominator is two.

</details>

<details>
<summary>Worked solution</summary>

The same squared-deviation total yields different quantities under different conventions.

1. The squared deviations are $9,0,9$, totaling $18$.
2. Sample variance is $18/(3-1)=9$ and standard deviation is√$9=3$.

</details>
