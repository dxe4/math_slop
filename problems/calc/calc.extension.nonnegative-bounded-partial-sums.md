# Apply monotone convergence to partial sums

*Easy · [Calculus](index.md)*

All a\_n≥0 and the partial sums $S_N=\sum_{n=1}^Na_n$ are bounded above. Must the series converge? Return {yes} or {no}.

```answer
{"answer":{"kind":"set","expected":["yes"],"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Nonnegative terms make partial sums nondecreasing.

</details>

<details>
<summary>Hint 2</summary>

A bounded nondecreasing real sequence has a finite limit.

</details>

<details>
<summary>Worked solution</summary>

The series question becomes a monotone sequence question.

1. Each added term is nonnegative, so S\_N is nondecreasing.
2. It is bounded above by hypothesis and hence converges.
3. Therefore the series converges; return {yes}.

</details>
