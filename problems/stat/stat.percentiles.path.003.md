# Interpret a nearest-rank percentile with possible ties

*Medium · [Statistics and probability](index.md)*

Under the nearest-rank convention, a nonempty dataset has $75$th percentile $20$. What is the greatest universal lower bound on the proportion of observations at or below $20$? Enter it as an exact fraction.

```answer
{"answer":{"kind":"rational","expected":{"numerator":3,"denominator":4},"checker_scope":"Checks the complete displayed exact mathematical answer under the original finite givens. Any written explanation remains separate from this bounded automatic result."}}
```

<details>
<summary>Hint 1</summary>

The selected observation is at rank equal to the ceiling of the percentile fraction times the sample size.

</details>

<details>
<summary>Hint 2</summary>

For sharpness, consider a sample size divisible by four with distinct values near the selected rank.

</details>

<details>
<summary>Worked solution</summary>

A percentile controls rank, not the number of observations equal to its value.

1. For sample size $n$, the percentile rank is $r=\lceil3n/4\rceil$.
2. At least $r$ observations are at or below its value, so their proportion is at least $r/n\geq3/4$.
3. With four distinct observations and third value $20$, exactly three are at or below $20$. Hence $3/4$ is the greatest universal bound.

</details>
