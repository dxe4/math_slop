# Sum unequal outcome weights

*Easy · [Statistics and probability](index.md)*

A device outputs red, blue or green with probabilities $1/5,1/2$ and $3/10$ respectively. Find the probability of red or green.

| Given information | Value |
| --- | --- |
| weights | {"red":"1/5","blue":"1/2","green":"3/10"} |
| event | \["red","green"\] |

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":2},"checker_scope":"Checks the requested exact quantities under the stated conventions and model. It does not certify an inferential assumption or assess an open explanation."}}
```

<details>
<summary>Hint 1</summary>

The outcomes are mutually exclusive, so add their probabilities.

</details>

<details>
<summary>Hint 2</summary>

Use tenths as a common denominator.

</details>

<details>
<summary>Worked solution</summary>

Use the stated weights when outcomes are not equally likely.

1. Red or green has weight $1/5+3/10$.
2. This is $2/10+3/10=1/2$.

</details>
