# Calculate the probability of no successes

*Medium · [Statistics and probability](index.md)*

Four independent trials each succeed with probability $1/3$. Find the probability of zero successes.

| Given information | Value |
| --- | --- |
| n | 4 |
| p | 1/3 |
| k | 0 |

```answer
{"answer":{"kind":"rational","expected":{"numerator":16,"denominator":81},"checker_scope":"Checks the requested exact quantities under the stated conventions and model. It does not certify an inferential assumption or assess an open explanation."}}
```

<details>
<summary>Hint 1</summary>

Zero successes means four failures.

</details>

<details>
<summary>Hint 2</summary>

Each failure has probability $2/3$, and independence allows multiplication.

</details>

<details>
<summary>Worked solution</summary>

An extreme binomial count can have only one success-position pattern.

1. The only relevant pattern is FFFF.
2. Its probability is($2/3$)^$4=16/81$.

</details>
