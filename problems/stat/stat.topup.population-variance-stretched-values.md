# Recompute population spread after two replacements

*Medium · [Statistics and probability](index.md)*

Treat each list as a complete population. Start with $-1,-1,3,3$, then replace both 3s by 7s. Return variance\_before, sd\_before, variance\_after and sd\_after, dividing by 4 for both variances.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"variance_before":"4","sd_before":"2","variance_after":"16","sd_after":"4"},"checker_scope":"Checks only the requested result under the explicitly stated finite model or convention; does not certify a modeling assumption, causal claim or open argument."}}
```

<details>
<summary>Hint 1</summary>

Find each mean before calculating deviations.

</details>

<details>
<summary>Hint 2</summary>

Each list has two equally frequent values equally far from its mean.

</details>

<details>
<summary>Worked solution</summary>

Variance follows the squared distance from the mean in these balanced populations.

1. The first mean is one and every deviation has magnitude two, so variance is four and standard deviation two.
2. The second mean is three and every deviation has magnitude four.
3. Its variance is sixteen and standard deviation four, giving the four requested values.

</details>
