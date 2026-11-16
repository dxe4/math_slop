# Which contrasts remain estimable in a singular design

*Hard · [Statistics and probability](index.md)*

Observe $Y\sim N_n(X\beta,\sigma^2I_n)$ with fixed possibly rank-deficient $X$, known $\sigma^2>0$, and unrestricted $\beta\in\mathbb R^p$. For squared loss in estimating $c^{\mathsf T}\beta$, characterize exactly when finite worst-case risk is possible and determine its minimax value. You may use the Moore–Penrose inverse and proper normal-prior lower bounds, but justify the lower bound against arbitrary estimators.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific rubric reflection only; no automatic correctness verdict or required checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

A null-space direction leaves the entire data law unchanged; examine what it does to the target.

</details>

<details>
<summary>Hint 2</summary>

For an estimable contrast, find the minimum-norm observation coefficient and restrict the model to a one-dimensional signal aligned with it.

</details>

<details>
<summary>Model proof</summary>

Row-space identification and a scalar Gaussian subexperiment determine the minimax risk.

1. If $c$ is not in the row space of $X$, there is a unit $v\in\ker X$ with $c^{\mathsf T}v\ne0$. Parameters $\beta=tv$ and $-tv$ give the same data law but opposite targets. Averaging their squared risks gives $E[D(Y)^2]+t^2(c^{\mathsf T}v)^2\ge t^2(c^{\mathsf T}v)^2$. Thus every estimator has infinite supremum risk.
2. If $c=0$, the zero estimator has minimax risk zero. Otherwise suppose $c\in\operatorname{row}(X)$ and set $a_0=X(X^{\mathsf T}X)^+c$, $v_0=c^{\mathsf T}(X^{\mathsf T}X)^+c=\|a_0\|^2>0$. Then $X^{\mathsf T}a_0=c$.
3. The estimator $a_0^{\mathsf T}Y$ is unbiased for the target and has constant risk $\sigma^2v_0$, giving an upper bound.
4. For a lower bound, restrict to $\beta_t=t(X^{\mathsf T}X)^+c/v_0$. The target is $t$ and the mean observation vector is $ta_0/v_0$. The statistic $Z=a_0^{\mathsf T}Y$ has law $N(t,\sigma^2v_0)$; the orthogonal Gaussian residual is independent and parameter free.
5. A proper prior $t\sim N(0,\tau^2)$ therefore gives posterior variance $\sigma^2v_0\tau^2/(\sigma^2v_0+\tau^2)$ even given the full data. Every estimator has worst-case risk at least this Bayes risk. Letting $\tau\to\infty$ yields the matching bound $\sigma^2v_0$, proving the claimed minimax value.

**Self-assessment rubric**

- Prove infinite worst-case risk for nonestimable contrasts.
- Construct the observation coefficient and constant-risk estimator.
- Identify a submodel with the target as its scalar parameter.
- Use a proper-prior bound on the full observation to prove minimaxity.

</details>
