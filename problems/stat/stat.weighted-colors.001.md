# Add probabilities for a combined event

*Easy · [Statistics and probability](index.md)*

A device produces exactly one of three colors. Its stated probabilities are P(red) = 1/2, P(blue) = 1/3 and P(green) = 1/6. What is the probability that the result is blue or green? The colors are distinct possible outcomes; they are not equally likely.

| Outcome | Stated probability |
| --- | --- |
| Red | 1/2 |
| Blue | 1/3 |
| Green | 1/6 |

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":2},"checker_scope":"Exact arithmetic for the stated finite data or explicitly specified probability model. This check does not assess a written justification or a population inference."}}
```

<details>
<summary>Hint 1</summary>

The event consists of two mutually exclusive outcomes. Add their stated probabilities.

</details>

<details>
<summary>Hint 2</summary>

Use a common denominator for $1/3$ and $1/6$; counting colors alone would ignore the unequal probabilities.

</details>

<details>
<summary>Worked solution</summary>

For a finite probability model with unequal outcome weights, sum the weights of event outcomes.

1. Because a single result cannot be both blue and green, add their probabilities: $1/3 + 1/6$.
2. Using sixths gives $2/6 + 1/6 = 3/6 = 1/2$.

</details>
