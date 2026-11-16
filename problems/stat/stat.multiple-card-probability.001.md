# Identify an event in a finite model

*Easy · [Statistics and probability](index.md)*

Eight cards carry the distinct labels $1$ through $8$. One card is selected uniformly, meaning that each of the eight cards has the same probability. What is the probability that its label is divisible by $3$? Give an exact fraction.

| Possible card label |
| --- |
| 1 |
| 2 |
| 3 |
| 4 |
| 5 |
| 6 |
| 7 |
| 8 |

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":4},"checker_scope":"Exact arithmetic for the stated finite data or explicitly specified probability model. This check does not assess a written justification or a population inference."}}
```

<details>
<summary>Hint 1</summary>

List the multiples of $3$ that appear among the eight possible labels.

</details>

<details>
<summary>Hint 2</summary>

The denominator counts all eight possible cards, including those outside the event.

</details>

<details>
<summary>Worked solution</summary>

The event is the subset satisfying the condition; the sample space is the full list of possible outcomes.

1. Only labels $3$ and $6$ are divisible by $3$ among $\{1, 2, 3, 4, 5, 6, 7, 8\}$.
2. The event contains two of eight equally likely outcomes, giving probability $2/8 = 1/4$.

</details>
