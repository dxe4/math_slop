# Count a prespecified inclusive randomization tail

*Medium · [Statistics and probability](index.md)*

Under a sharp null, each of three paired differences with magnitudes $1,2,3$ independently receives a fair plus or minus sign. Let T be their signed sum. The observed signs are plus, plus, minus, so T=0. With the prespecified inclusive upper tail T&gt;=0, find the exact randomization p-value.

```answer
{"answer":{"kind":"rational","expected":{"numerator":5,"denominator":8},"checker_scope":"Checks only the requested result under the explicitly stated finite model or convention; does not certify a modeling assumption, causal claim or open argument."}}
```

<details>
<summary>Hint 1</summary>

All eight sign assignments are equally likely under the stated null.

</details>

<details>
<summary>Hint 2</summary>

Include both assignments producing zero because the tail is inclusive.

</details>

<details>
<summary>Worked solution</summary>

Tail conventions and ties matter in a finite randomization distribution.

1. For signs +++, ++-, +-+, +--, -++, -+-, --+, --- the sums are 6,0,2,-4,4,-2,0,-6.
2. Five of these eight sums are at least zero, including the two zeros.
3. The specified upper-tail p-value is five eighths; this is a null-tail probability, not the probability that the null is true.

</details>
