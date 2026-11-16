# Renormalize unequal probabilities

*Medium · [Statistics and probability](index.md)*

Outcomes A,B and C have probabilities $1/2,1/3$ and $1/6$. Given that the outcome is A or B, find the probability it is A.

| Given information | Value |
| --- | --- |
| weights | {"A":"1/2","B":"1/3","C":"1/6"} |
| condition | \["A","B"\] |
| event | \["A"\] |

```answer
{"answer":{"kind":"rational","expected":{"numerator":3,"denominator":5},"checker_scope":"Checks the requested exact quantities under the stated conventions and model. It does not certify an inferential assumption or assess an open explanation."}}
```

<details>
<summary>Hint 1</summary>

Find the total probability retained by the condition.

</details>

<details>
<summary>Hint 2</summary>

Divide the weight of A by the combined weight of A and B.

</details>

<details>
<summary>Worked solution</summary>

Conditioning rescales retained weights to sum to one.

1. The condition has probability $1/2+1/3=5/6$.
2. The conditional probability of A is($1/2$)/$(5/6)=3/5$.

</details>
