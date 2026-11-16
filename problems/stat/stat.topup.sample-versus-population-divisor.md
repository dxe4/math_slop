# Keep the two variance conventions distinct

*Medium · [Statistics and probability](index.md)*

For $-2,2,6$, return sample\_variance, sample\_sd and population\_variance. Define sample variance with divisor n-1 and population variance with divisor n.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"sample_variance":"16","sample_sd":"4","population_variance":"32/3"},"checker_scope":"Checks only the requested result under the explicitly stated finite model or convention; does not certify a modeling assumption, causal claim or open argument."}}
```

<details>
<summary>Hint 1</summary>

Use the same squared-deviation sum for both conventions.

</details>

<details>
<summary>Hint 2</summary>

Only the divisor changes between the requested variances.

</details>

<details>
<summary>Worked solution</summary>

The variance labels determine the denominator.

1. The mean is two, and the squared deviations are sixteen, zero and sixteen, totaling thirty-two.
2. The sample variance is $32/(3-1)=16$, with sample standard deviation four.
3. The population variance of this three-value list is $32/3$.

</details>
