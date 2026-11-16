# Recover an input from a residual

*Medium · [Statistics and probability](index.md)*

A supplied line is ŷ=$10-2$ x. An observation has $y=3$ and residual−$1$, defined as y−ŷ. Find prediction and x.

| Given information | Value |
| --- | --- |
| intercept | 10 |
| slope | -2 |
| observed y | 3 |
| residual | -1 |

```answer
{"answer":{"kind":"record_of_rationals","expected":{"prediction":"4","x":"3"},"checker_scope":"Checks the requested exact quantities under the stated conventions and model. It does not certify an inferential assumption or assess an open explanation."}}
```

<details>
<summary>Hint 1</summary>

First solve $3$−ŷ=$-1$ for the prediction.

</details>

<details>
<summary>Hint 2</summary>

Then substitute the recovered prediction into $10-2$ x.

</details>

<details>
<summary>Worked solution</summary>

The residual definition can constrain an unknown input through a known prediction rule.

1. The residual equation $3$−ŷ=$-1$ gives ŷ=$4$.
2. Solving $4=10-2$ xgives $2$ $x=6$ and $x=3$.

</details>
