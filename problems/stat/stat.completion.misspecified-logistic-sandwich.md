# The meat and bread of a misspecified binary likelihood

*Medium · [Statistics and probability](index.md)*

Let iid $(X,Y)$ have $Y\in\{0,1\}$ and true conditional mean $m(X)$. Fit the working model $p_\beta(X)=(1+e^{-\beta X})^{-1}$. A consistent interior score root $\widehat\beta$ targets $\beta_0$ satisfying $E[X(m(X)-p_{\beta_0}(X))]=0$. Assume the score CLT, a uniform law for its derivative near $\beta_0$, finite score variance, and $H=E[X^2p_{\beta_0}(1-p_{\beta_0})]>0$. Use M-estimation linearization to derive its asymptotic variance and express the meat using $m$. Identify the correctly specified special case.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Graduate derivation and personal task-specific rubric reflection only; no automatic proof verdict or required checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Differentiate the working score to identify its population slope.

</details>

<details>
<summary>Hint 2</summary>

Condition the squared score on the predictor; both conditional response variance and conditional mean discrepancy contribute.

</details>

<details>
<summary>Model proof</summary>

A working score has separate derivative and variability matrices under misspecification.

1. The working score is $\psi_\beta=X(Y-p_\beta(X))$, with derivative $-X^2p_\beta(1-p_\beta)$. The assumed derivative law and consistency give $\sqrt n(\widehat\beta-\beta_0)=H^{-1}n^{-1/2}\sum_i\psi_{\beta_0}(X_i,Y_i)+o_P(1)$.
2. The target equation makes the score mean zero. Its variance is therefore $J=E[X^2(Y-p_{\beta_0})^2]=E[X^2\{m(1-m)+(m-p_{\beta_0})^2\}]$, using conditional variance plus squared conditional bias.
3. The score CLT yields limit $N(0,J/H^2)$. The inverse Hessian alone, $H^{-1}$, need not be the limiting variance.
4. If $m=p_{\beta_0}$ almost surely, the discrepancy term vanishes and $J=H$, recovering $H^{-1}$. Under misspecification equality may occur accidentally, but cannot be inferred from the working likelihood form.

**Self-assessment rubric**

- Differentiate and linearize the misspecified score equation.
- Compute the score variance with both conditional contributions.
- Derive the sandwich limit and its correct-specification special case.

</details>
