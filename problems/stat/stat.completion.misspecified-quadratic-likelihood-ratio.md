# A likelihood ratio with unequal curvature and score variance

*Medium · [Statistics and probability](index.md)*

At an interior pseudo-true scalar parameter, suppose a working log likelihood has the uniform-on-compact expansion $\ell_n(\theta_0+h/\sqrt n)-\ell_n(\theta_0)=hZ_n-Hh^2/2+o_P(1)$, with $H>0$ and $Z_n\Rightarrow N(0,J)$ for $J>0$. Assume tight local maximizers and valid quadratic argmax approximation. Use quadratic maximization to derive the estimator limit and the unadjusted likelihood-ratio limit. Find a scalar adjustment giving a $\chi_1^2$ limit when $H,J$ can be consistently estimated.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Graduate derivation and personal task-specific rubric reflection only; no automatic proof verdict or required checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Optimize the quadratic using its curvature, which need not equal the score variance.

</details>

<details>
<summary>Hint 2</summary>

Express the maximized improvement in units of the actual normal score fluctuation before deciding the adjustment direction.

</details>

<details>
<summary>Model proof</summary>

Misspecification separates likelihood curvature from score variability, changing the likelihood-ratio scale.

1. The quadratic optimizer is $h_n^*=Z_n/H$. Under the stated approximation, $\sqrt n(\widehat\theta-\theta_0)=Z_n/H+o_P(1)\Rightarrow N(0,J/H^2)$.
2. Twice the maximized quadratic improvement is $Z_n^2/H$, so the unadjusted likelihood ratio converges to $(J/H)\chi_1^2$.
3. If $\widehat H\to H$ and $\widehat J\to J$, multiplying that statistic by $\widehat H/\widehat J$ gives a $\chi_1^2$ limit by Slutsky. Multiplying by the inverse factor would compound the scale error.
4. The ordinary Wilks limit is recovered if $J=H$. That equality is not supplied by a working likelihood under misspecification; the assumed expansion and maximizer control remain necessary.

**Self-assessment rubric**

- Derive the root-n estimator limit from the quadratic.
- Compute the nonstandard likelihood-ratio scale.
- Determine the correct adjustment and its assumptions.

</details>
