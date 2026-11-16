# Orthogonality and the product remainder in partialling out

*Medium · [Statistics and probability](index.md)*

Let $E[Y\mid D,X]=\theta_0D+f(X)$, $m(X)=E[D\mid X]$, and $\ell(X)=E[Y\mid X]$. Nuisance estimates $\widehat m,\widehat\ell$ are trained on independent data. On an iid validation sample define $\psi_\theta=(D-\widehat m)[Y-\widehat\ell-\theta(D-\widehat m)]$ and solve $P_n\psi_{\widehat\theta}=0$. Put $A=E(D-m)^2>0$. Assume finite score variance, $P_n(D-\widehat m)^2\to A$, $\|\psi_{\theta_0}(\widehat m,\widehat\ell)-\psi_{\theta_0}(m,\ell)\|_2=o_P(1)$, and $\|\widehat m-m\|_2(\|\widehat\ell-\ell\|_2+\|\widehat m-m\|_2)=o_P(n^{-1/2})$. Use orthogonal-score expansion and conditional validation-sample variance to derive the influence representation and its variance.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Graduate derivation and personal task-specific rubric reflection only; no automatic proof verdict or required checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Compute the population score at the estimated nuisances by expanding around the conditional means.

</details>

<details>
<summary>Hint 2</summary>

Independence of training and validation controls the centered empirical score difference; the population bias is a separate product remainder.

</details>

<details>
<summary>Model proof</summary>

Conditional mean-zero residuals remove all linear nuisance bias terms.

1. Write $v=D-m$, $\varepsilon=Y-\ell-\theta_0v$, $a=\widehat m-m$, and $b=\widehat\ell-\ell$. Then $E[v\mid X]=0$ and $E[\varepsilon\mid D,X]=0$. Expanding gives $E[\psi_{\theta_0}\mid\text{training}]=E[ab-\theta_0a^2]$, with all first-order nuisance terms zero.
2. Cauchy–Schwarz bounds this bias by $\|a\|_2\|b\|_2+|\theta_0|\|a\|_2^2=o_P(n^{-1/2})$. This exact quadratic remainder establishes the relevant Neyman orthogonality.
3. Conditionally on training, the variance of $\sqrt n(P_n-P)$ applied to the score difference is at most its squared $L^2$ norm, which tends to zero in probability. Conditional Chebyshev, with the probability bound capped by one, yields an $o_P(1)$ centered empirical remainder.
4. The equation is linear in $\theta$, so $\sqrt n(\widehat\theta-\theta_0)=A^{-1}n^{-1/2}\sum_i v_i\varepsilon_i+o_P(1)$. The CLT gives limiting variance $E[v^2\varepsilon^2]/A^2$. The validation independence and product rate are substantive assumptions, not consequences of fitting nuisance regressions.

**Self-assessment rubric**

- Expand the score and cancel every linear nuisance contribution.
- Bound the remaining population bias at the required rate.
- Use independent training and conditional variance for the empirical remainder.
- Solve the score and identify the limiting influence variance.

</details>
