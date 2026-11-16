# Condition on a die result range

*Easy · [Probability problems](index.md)*

A fair die is rolled. Given that its result exceeds $3$, find the probability that the result is even.

```answer
{"answer":{"kind":"rational","expected":{"numerator":2,"denominator":3},"checker_scope":"Exact answer for the stated probability model only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Replace the sample space by the observed event.

</details>

<details>
<summary>Hint 2</summary>

The retained faces remain equally likely.

</details>

<details>
<summary>Worked solution</summary>

Conditioning restricts the uniform model to the retained outcomes.

1. The conditioning event leaves faces $4,5,6$.
2. Two of these three faces, $4,6$, are even.
3. The conditional probability is $2/3$.

</details>
