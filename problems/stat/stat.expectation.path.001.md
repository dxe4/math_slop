# Calculate an expectation with a negative outcome

*Medium · [Statistics and probability](index.md)*

X takes values−$2,2$ and $6$ with probabilities $1/4,1/2$ and $1/4$ respectively. Find E(X).

| Given information | Value |
| --- | --- |
| values | \[-2,2,6\] |
| probabilities | \["1/4","1/2","1/4"\] |

```answer
{"answer":{"kind":"rational","expected":{"numerator":2,"denominator":1},"checker_scope":"Checks the requested exact quantities under the stated conventions and model. It does not certify an inferential assumption or assess an open explanation."}}
```

<details>
<summary>Hint 1</summary>

Each value contributes its value multiplied by its probability.

</details>

<details>
<summary>Hint 2</summary>

Keep the negative sign on the contribution from−$2$.

</details>

<details>
<summary>Worked solution</summary>

Probability weights determine the contribution of each outcome.

1. $E(X)=(-2) (1/4)+2$($1/2$)+$6$($1/4$).
2. The sum is−1/2+1+3/2=2.

</details>
