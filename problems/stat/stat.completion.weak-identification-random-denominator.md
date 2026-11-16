# A weakly identified ratio does not have a regular root-n limit

*Medium · [Statistics and probability](index.md)*

A scalar weak-instrument moment experiment yields $\widehat\theta_n-\theta_0=A_n/B_n$ when $B_n\ne0$, with any fixed convention otherwise. Assume $\sqrt n(A_n,B_n)\Rightarrow(Z_1,c+Z_2)$, where $c$ is fixed and $(Z_1,Z_2)$ is centered bivariate Gaussian with positive-definite covariance. Use the continuous mapping theorem and conditional Gaussian variance to derive the estimator limit, prove it is nondegenerate and has infinite second moment, and explain why a regular root-$n$ consistency claim fails.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Graduate derivation and personal task-specific rubric reflection only; no automatic proof verdict or required checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Both numerator and denominator are of the same vanishing order; rescale them together before taking a ratio.

</details>

<details>
<summary>Hint 2</summary>

Condition on the limiting denominator near zero. The numerator retains a strictly positive conditional variance.

</details>

<details>
<summary>Model proof</summary>

A random first-stage limit creates a ratio law whose denominator can approach zero.

1. The limiting denominator $D=c+Z_2$ is nondegenerate normal, so $P(D=0)=0$. The continuous mapping theorem gives $\widehat\theta_n-\theta_0\Rightarrow R=Z_1/D$. Events $B_n=0$ have probability tending to zero, so the stated convention does not affect the weak limit.
2. Positive-definite covariance implies $\operatorname{Var}(Z_1\mid D)=v>0$. Consequently $E[Z_1^2\mid D=d]\ge v$ for every $d$, and the conditional numerator law is nondegenerate.
3. The density of $D$ is continuous and positive at zero. Tonelli therefore gives $E[R^2]\ge v\int d^{-2}f_D(d)\,dd=\infty$. The conditional randomness also prevents $R$ from being a constant, so in particular it is not a point mass at zero.
4. If the estimator were consistent for $\theta_0$, its error would converge weakly to zero, contradicting this nondegenerate limit. Thus regular root-$n$ consistency and its usual Gaussian Wald justification fail in this weak-identification experiment. This differs from a delta-method ratio whose denominator converges to a nonzero constant.

**Self-assessment rubric**

- Apply continuous mapping with the correct common scale and zero convention.
- Use positive definiteness to retain conditional numerator randomness.
- Prove divergence using the denominator density near zero.
- Explain the inconsistency and distinguish the regular denominator case.

</details>
