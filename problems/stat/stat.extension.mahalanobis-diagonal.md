# Mahalanobis diagonal

*Easy · [Statistics and probability](index.md)*

For mean vector $\mu=(0,0)^{\mathsf T}$ and covariance $\Sigma=\operatorname{diag}(1,4)$, what is the squared Mahalanobis distance of $z=(1,2)^{\mathsf T}$, defined by $(z-\mu)^{\mathsf T}\Sigma^{-1}(z-\mu)$?

```answer
{"answer":{"kind":"integer","expected":"2","checker_scope":"Checks only the requested exact finite answer under the stated model; it does not certify the reasoning or modeling assumptions."}}
```

<details>
<summary>Hint 1</summary>

An invertible diagonal matrix is inverted by reciprocating each diagonal entry.

</details>

<details>
<summary>Hint 2</summary>

Apply the quadratic form, keeping the requested squared distance rather than taking its square root.

</details>

<details>
<summary>Worked solution</summary>

Measure squared coordinate deviations in their variance units.

1. The inverse covariance is $\Sigma^{-1}=\operatorname{diag}(1,1/4)$.
2. The squared distance is $1\cdot1^2+(1/4)\cdot2^2=1+1=2$.
3. The requested result is $2$. The unsquared distance would be $\sqrt2$; no Gaussian assumption is needed for this calculation.

</details>
