# Compute mean variance without replacement

*Hard · [Statistics and probability](index.md)*

Four labeled population members have values $0,0,4,4$. Select two distinct members by simple random sampling without replacement, so all six unordered pairs are equally likely. Find the variance of the sample mean.

```answer
{"answer":{"kind":"rational","expected":{"numerator":4,"denominator":3},"checker_scope":"Checks only the requested result under the explicitly stated finite model or convention; does not certify a modeling assumption, causal claim or open argument."}}
```

<details>
<summary>Hint 1</summary>

The labels make the two zeros distinct sampling units.

</details>

<details>
<summary>Hint 2</summary>

Tabulate the means zero, two and four and their pair counts.

</details>

<details>
<summary>Worked solution</summary>

Dependence from sampling without replacement changes the mean variance.

1. One pair contains both zeros, four pairs contain one of each value, and one pair contains both fours.
2. The sample means zero, two and four therefore have probabilities one sixth, four sixths and one sixth, with expected mean two.
3. The variance is $4/6+0+4/6=4/3$. The independent replacement formula would describe a different design.

</details>
