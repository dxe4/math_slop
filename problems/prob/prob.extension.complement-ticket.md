# An unmarked ticket

*Easy · [Probability problems](index.md)*

A ticket is selected uniformly from $10$ distinct labels. Exactly $4$ labels are marked. Find the probability that the selected label is unmarked.

```answer
{"answer":{"kind":"rational","expected":{"numerator":3,"denominator":5},"checker_scope":"Checks the exact probability for this finite model only; written reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Marked and unmarked labels partition the sample space.

</details>

<details>
<summary>Hint 2</summary>

Subtract the marked count from the total, then divide the remaining count by the total count.

</details>

<details>
<summary>Worked solution</summary>

Uniform selection turns a probability into a favourable-count ratio.

1. Every label has probability $1/10$ because selection is uniform.
2. The unmarked set contains $10-4=6$ labels; there are no other label categories.
3. Its probability is $6/10=3/5$, equivalently $1-4/10$.

There are $10-4=6$ unmarked labels among $10$ equally likely labels, giving probability $6/10=3/5$.

</details>
