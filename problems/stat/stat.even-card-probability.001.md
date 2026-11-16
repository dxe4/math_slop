# Count favorable equally likely cards

*Easy · [Statistics and probability](index.md)*

Six cards carry the distinct labels $1, 2, 3, 4, 5$ and $6$. One card is selected, and every card is equally likely. What is the probability that its label is even? Give an exact fraction.

| Possible card label |
| --- |
| 1 |
| 2 |
| 3 |
| 4 |
| 5 |
| 6 |

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":2},"checker_scope":"Exact arithmetic for the stated finite data or explicitly specified probability model. This check does not assess a written justification or a population inference."}}
```

<details>
<summary>Hint 1</summary>

Identify all labels in the requested event before counting them.

</details>

<details>
<summary>Hint 2</summary>

For equally likely cards, divide the number of favorable cards by the number of all possible cards.

</details>

<details>
<summary>Worked solution</summary>

Counting favorable outcomes gives a probability when all individual outcomes in the model are equally likely.

1. The possible labels are $\{1, 2, 3, 4, 5, 6\}$; the even labels are $\{2, 4, 6\}$.
2. Three of six equally likely labels are favorable, so the probability is $3/6 = 1/2$.

</details>
