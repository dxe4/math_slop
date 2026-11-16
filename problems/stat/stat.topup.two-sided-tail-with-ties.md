# Retain all assignments in a two-sided randomization tail

*Medium · [Statistics and probability](index.md)*

Four labeled fixed outcomes are $0,0,2,4$. Assign exactly two labels to treatment uniformly among six pairs; under the sharp null let T be treatment mean minus control mean. Observed treatment outcomes are one zero and four, giving T=1. Find the prespecified two-sided p-value P(\|T\|&gt;=1).

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":1},"checker_scope":"Checks only the requested result under the explicitly stated finite model or convention; does not certify a modeling assumption, causal claim or open argument."}}
```

<details>
<summary>Hint 1</summary>

The total outcome sum is six. Express T using the treated sum.

</details>

<details>
<summary>Hint 2</summary>

List pairs by labels, so equal-valued zeros still give different assignments.

</details>

<details>
<summary>Worked solution</summary>

A nonextreme observed difference can put every assignment in the stated tail.

1. If the treated sum is s, its mean is s/2 and the control mean is $(6-s)/2$, so $T=s-3$.
2. The six treated sums are 0,2,2,4,4,6, giving T values -3,-1,-1,1,1,3.
3. Every assignment has absolute T at least one, so the p-value is one.

</details>
