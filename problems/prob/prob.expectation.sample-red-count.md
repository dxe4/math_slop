# Expected count without replacement

*Medium · [Probability problems](index.md)*

An urn contains $5$ red and five blue balls. Three balls are sampled uniformly without replacement. Find the expected number of red balls in the sample.

```answer
{"answer":{"kind":"rational","expected":{"numerator":3,"denominator":2},"checker_scope":"Exact answer for the stated probability model only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Write the count as a sum of indicators for the sample positions.

</details>

<details>
<summary>Hint 2</summary>

Linearity of expectation does not require those indicators to be independent.

</details>

<details>
<summary>Worked solution</summary>

Each position has the same marginal colour probability even without replacement.

1. Let $I_j$ indicate that draw $j$ is red. By symmetry, each marginal probability is $5/10=1/2$.
2. The red count is $I_1+I_2+I_3$.
3. Linearity gives expected count $1/2+1/2+1/2=3/2$, without assuming independence.

</details>
