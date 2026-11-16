# Regression confounding example

*Medium · [Statistics and probability](index.md)*

Let $U\sim\operatorname{Bernoulli}(1/2)$, $X=U$, and observed $Y=U$. Potential outcomes under intervention on $X$ satisfy $Y(0)=Y(1)=U$. Prove that the observational population least-squares slope of $Y$ on $X$ with an intercept is $1$, while the average causal effect $E[Y(1)-Y(0)]$ is zero.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Use the population slope formula for a nonconstant predictor, and compute its covariance and variance.

</details>

<details>
<summary>Hint 2</summary>

The potential-outcome contrast compares the two values for the same unit, keeping its value of $U$ fixed.

</details>

<details>
<summary>Model proof</summary>

The observational association and intervention contrast refer to different comparisons.

1. The fair bit has $E[U]=1/2$ and $\operatorname{Var}(U)=1/4$. Since $X=Y=U$, $\operatorname{Cov}(X,Y)=1/4$.
2. The population slope is $\operatorname{Cov}(X,Y)/\operatorname{Var}(X)=1$; its intercept is $E[Y]-E[X]=0$.
3. For each unit, $Y(1)-Y(0)=U-U=0$, so its expectation is zero. Observed consistency also holds: $Y=Y(X)=U$.
4. The observed difference compares units with different values of the common cause $U$. Setting $X$ for one unit does not change $U$, so the observed slope is not that causal effect.

**Self-assessment rubric**

- Compute the observational slope and show its denominator is nonzero.
- Compute the potential-outcome contrast for each unit.
- Explain the distinct observational and intervention comparisons.

</details>
