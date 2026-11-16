# Cancel adjacent terms in a finite reciprocal sum

*Medium · [Foundations bridge](index.md)*

Evaluate $\sum_{k=1}^{8}(1/k-1/(k+1))$ exactly.

```answer
{"answer":{"kind":"rational","expected":{"numerator":8,"denominator":9},"checker_scope":"Only the requested exact result in the stated domain and units is checked; the reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Write the first two summands to expose the cancellation pattern.

</details>

<details>
<summary>Hint 2</summary>

Only the initial positive term and final negative term survive.

</details>

<details>
<summary>Worked solution</summary>

Telescoping uses matching terms at adjacent indices.

1. The expansion starts (1−1/2)+(1/2−1/3) and ends with (1/8−1/9).
2. All intermediate fractions cancel in pairs.
3. The remaining value is 1−1/9=8/9.

</details>
