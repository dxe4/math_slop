# Count success positions in a binomial model

*Medium · [Statistics and probability](index.md)*

Three independent trials each succeed with probability $1/2$. Find the probability of exactly two successes.

| Given information | Value |
| --- | --- |
| n | 3 |
| p | 1/2 |
| k | 2 |

```answer
{"answer":{"kind":"rational","expected":{"numerator":3,"denominator":8},"checker_scope":"Checks the requested exact quantities under the stated conventions and model. It does not certify an inferential assumption or assess an open explanation."}}
```

<details>
<summary>Hint 1</summary>

There are three possible positions for the one failure.

</details>

<details>
<summary>Hint 2</summary>

Each ordered three-trial pattern has probability($1/2$)^$3$.

</details>

<details>
<summary>Worked solution</summary>

The binomial coefficient counts the possible success positions.

1. Exactly two successes occur in SSF,SFSor FSS.
2. Each has probability 1/8, so the total is $3/8$.

</details>
