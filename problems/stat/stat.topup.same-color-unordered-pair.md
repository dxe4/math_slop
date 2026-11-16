# Count equally likely labeled pairs

*Medium · [Statistics and probability](index.md)*

A bag has labeled tokens $R_1,R_2,B_1,B_2,B_3$. Draw two distinct tokens uniformly, so all ten unordered labeled pairs are equally likely. Find the probability of matching colors.

```answer
{"answer":{"kind":"rational","expected":{"numerator":2,"denominator":5},"checker_scope":"Checks only the requested result under the explicitly stated finite model or convention; does not certify a modeling assumption, causal claim or open argument."}}
```

<details>
<summary>Hint 1</summary>

Count red-red and blue-blue pairs separately.

</details>

<details>
<summary>Hint 2</summary>

Labels distinguish the three different blue-blue pairs.

</details>

<details>
<summary>Worked solution</summary>

A uniform pair model gives probability as favorable pair count over total pair count.

1. There is one red-red pair and three blue-blue pairs.
2. These four favorable pairs are disjoint among the ten equally likely pairs.
3. The probability is $4/10=2/5$.

</details>
