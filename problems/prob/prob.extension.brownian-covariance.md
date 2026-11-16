# Covariance of two Brownian times

*Easy · [Probability problems](index.md)*

For standard Brownian motion starting at zero, find $\operatorname{Cov}(B_2,B_5)$.

```answer
{"answer":{"kind":"integer","expected":"2","checker_scope":"Checks the covariance at these two times under standard Brownian normalisation only."}}
```

<details>
<summary>Hint 1</summary>

Separate the later value into the earlier value plus a subsequent increment.

</details>

<details>
<summary>Hint 2</summary>

The subsequent increment is independent of the earlier value; only their shared initial increment contributes covariance.

</details>

<details>
<summary>Worked solution</summary>

The two values share the path increment up to the earlier time.

1. Write $B_5=B_2+(B_5-B_2)$.
2. The future increment $B_5-B_2$ is independent of $B_2$ and both variables have finite second moments, so their covariance is zero.
3. Therefore $\operatorname{Cov}(B_2,B_5)=\operatorname{Var}(B_2)=2$, also equal to $\min(2,5)$.

Their shared variance gives covariance two.

</details>
