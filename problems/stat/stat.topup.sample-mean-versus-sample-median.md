# Compare distributions of two statistics

*Medium · [Statistics and probability](index.md)*

Three independent draws are fair values in $\{0,1\}$. Return prob\_mean\_zero and prob\_median\_zero, where the median is the middle of the three sorted draws.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"prob_mean_zero":"1/8","prob_median_zero":"1/2"},"checker_scope":"Checks only the requested result under the explicitly stated finite model or convention; does not certify a modeling assumption, causal claim or open argument."}}
```

<details>
<summary>Hint 1</summary>

The mean is zero only when every draw is zero.

</details>

<details>
<summary>Hint 2</summary>

The median is zero when at least two draws are zero.

</details>

<details>
<summary>Worked solution</summary>

Different statistics of the same sample need not have the same distribution.

1. Only the ordered sample zero-zero-zero has mean zero, giving probability one eighth.
2. The median is zero for that sample and for the three samples with exactly two zeros.
3. Thus its zero probability is four eighths, or one half.

</details>
