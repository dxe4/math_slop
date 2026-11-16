# Mean of a symmetric gain

*Easy · [Probability problems](index.md)*

A gain $D$ equals $+2$ or $-2$ with probability $1/2$ each. Find $E[D]$.

```answer
{"answer":{"kind":"integer","expected":"0","checker_scope":"Checks this single expected gain only; no martingale or strategy claim is inferred."}}
```

<details>
<summary>Hint 1</summary>

Use the probability-weighted mean of the two possible gains.

</details>

<details>
<summary>Hint 2</summary>

Retain the sign of the loss when adding the two contributions.

</details>

<details>
<summary>Worked solution</summary>

The symmetric positive and negative contributions cancel.

1. The positive gain contributes $2(1/2)=1$ to the mean.
2. The negative gain contributes $(-2)(1/2)=-1$.
3. Hence $E[D]=1-1=0$. The variable is bounded and therefore integrable.

The expected gain is zero.

</details>
