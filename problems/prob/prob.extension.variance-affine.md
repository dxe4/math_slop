# Variance after scaling and shifting

*Easy · [Probability problems](index.md)*

A square-integrable variable $X$ has $\operatorname{Var}(X)=3$. Find $\operatorname{Var}(2X+7)$.

```answer
{"answer":{"kind":"integer","expected":"12","checker_scope":"Checks the affine-transformed variance only."}}
```

<details>
<summary>Hint 1</summary>

A constant shift changes the mean but not centred deviations.

</details>

<details>
<summary>Hint 2</summary>

Scaling a centred deviation also scales its square; use the squared scale factor.

</details>

<details>
<summary>Worked solution</summary>

Only the scale changes the spread.

1. Linearity gives $E[2X+7]=2E[X]+7$.
2. Subtracting this mean leaves $2X+7-(2E[X]+7)=2(X-E[X])$.
3. Squaring and averaging gives $\operatorname{Var}(2X+7)=4\operatorname{Var}(X)=4\cdot3=12$. The shift seven contributes no variance.

The variance scales by $2^2$, giving $12$.

</details>
