# Break a Gaussian conditional independence by common scaling

*Hard · [Probability problems](index.md)*

Let $G,\varepsilon_1,\varepsilon_3$ be independent standard normals, let $|\rho|<1$, and set $X_2=G$, $X_1=\rho G+\sqrt{1-\rho^2}\varepsilon_1$, $X_3=\rho G+\sqrt{1-\rho^2}\varepsilon_3$. Independently choose $S\in\{1,2\}$ with equal probabilities and put $W=SX$. Show that $X_1\perp X_3\mid X_2$ and that the $(1,3)$ entry of the inverse covariance of $W$ is zero, yet $W_1$ and $W_3$ are not conditionally independent given $W_2$. Prove the failure for every real conditioning value using a conditional squared-residual covariance.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft with task-specific semantic rubric; no automatic correctness verdict or checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Common scaling preserves the covariance matrix up to a scalar, but introduces hidden uncertainty about residual scale.

</details>

<details>
<summary>Hint 2</summary>

Condition first on both the observed middle coordinate and the scale. The two residuals are then independent, while their squared conditional means share the scale.

</details>

<details>
<summary>Model proof</summary>

A zero precision entry is a conditional-independence certificate only within the joint Gaussian family.

1. Given $X_2=G$, the two remaining coordinates have independent noise terms, proving the first conditional independence. The Gaussian density exponent is $x_2^2+[(x_1-\rho x_2)^2+(x_3-\rho x_2)^2]/(1-\rho^2)$, which has no $x_1x_3$ term. Hence its inverse covariance has zero $(1,3)$ entry.
2. All variables are centred and $S$ is independent, so $\operatorname{Cov}(W)=E[S^2]\operatorname{Cov}(X)$. Both matrices are nonsingular; inversion multiplies by $1/E[S^2]$ and retains that zero entry.
3. Let $R_1=W_1-\rho W_2$ and $R_3=W_3-\rho W_2$. Given $(S,W_2=w)$ these equal $S\sqrt{1-\rho^2}\varepsilon_1$ and $S\sqrt{1-\rho^2}\varepsilon_3$, with the independent noises still independent of the conditioning variables. Thus $E[R_j^2\mid S,W_2]=(1-\rho^2)S^2$ and $E[R_1^2R_3^2\mid S,W_2]=(1-\rho^2)^2S^4$.
4. Both possible scales have strictly positive posterior probability for every $w$, since their $N(0,S^2)$ middle-coordinate densities are everywhere positive. Therefore $\operatorname{Cov}(R_1^2,R_3^2\mid W_2=w)=(1-\rho^2)^2\operatorname{Var}(S^2\mid W_2=w)>0$. Conditional independence would force this finite covariance to vanish, so it fails for each $w$ for the natural density version.

**Self-assessment rubric**

- Verify the original conditional independence and precision zero.
- Show that scaling preserves the precision sparsity pattern.
- Justify nondegenerate conditional scale probabilities at every observed value.
- Derive a strictly positive conditional covariance contradicting independence.

</details>
