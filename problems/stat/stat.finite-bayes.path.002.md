# Normalize three competing hypotheses

*Medium · [Statistics and probability](index.md)*

Mutually exclusive, exhaustive hypotheses A,B and C have priors $1/2,1/3$ and $1/6$. The observed evidence has likelihoods $1/5,3/5$ and $3/5$ respectively. Find P(B given E).

| Given information | Value |
| --- | --- |
| hypotheses form partition | true |
| priors | {"A":"1/2","B":"1/3","C":"1/6"} |
| likelihoods | {"A":"1/5","B":"3/5","C":"3/5"} |
| target | B |

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":2},"checker_scope":"Checks the requested exact quantities under the stated conventions and model. It does not certify an inferential assumption or assess an open explanation."}}
```

<details>
<summary>Hint 1</summary>

Compute one product for every hypothesis, including those not requested.

</details>

<details>
<summary>Hint 2</summary>

The normalization denominator includes all three products.

</details>

<details>
<summary>Worked solution</summary>

A posterior probability is one weight relative to the full evidence-weight total.

1. The unnormalized weights are $1/10,1/5$ and $1/10$.
2. Their sum is 2/5, so P(B given E)=(1/5)/(2/5)=1/2.

</details>
