# Use outcome weights rather than outcome counts

*Easy · [Statistics and probability](index.md)*

A machine displays exactly one symbol, with probabilities $P(A) = 1/10, P(B) = 2/5, P(C) = 1/5$ and $P(D) = 3/10$. What is P(A or C)? The symbols are mutually exclusive outcomes.

| Outcome | Stated probability |
| --- | --- |
| A | 1/10 |
| B | 2/5 |
| C | 1/5 |
| D | 3/10 |

```answer
{"answer":{"kind":"rational","expected":{"numerator":3,"denominator":10},"checker_scope":"Exact arithmetic for the stated finite data or explicitly specified probability model. This check does not assess a written justification or a population inference."}}
```

<details>
<summary>Hint 1</summary>

Combine the weights assigned to A and C, rather than dividing the number of requested symbols by four.

</details>

<details>
<summary>Hint 2</summary>

Write $1/5$ in tenths before adding it to $1/10$.

</details>

<details>
<summary>Worked solution</summary>

A finite event probability is the sum of its specified outcome probabilities.

1. The event {A, C} consists of two mutually exclusive outcomes, so its probability is $P(A) + P(C)$.
2. The sum is $1/10 + 1/5 = 1/10 + 2/10 = 3/10$.

</details>
