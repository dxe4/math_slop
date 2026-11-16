# Derive a trivariate Gaussian orthant law geometrically

*Hard · [Probability problems](index.md)*

Let $(X_1,X_2,X_3)$ be a centred nonsingular Gaussian vector with unit variances and correlations $\rho_{12},\rho_{13},\rho_{23}$. Derive an exact formula for $P(X_1>0,X_2>0,X_3>0)$ using only the three correlations and inverse trigonometric functions. Prove the required two-dimensional sign identity from rotational symmetry and explain why no third-order sign term remains.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft with task-specific semantic rubric; no automatic correctness verdict or checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

For two correlated normals, represent the two signs as half-plane tests of an isotropic two-dimensional normal vector.

</details>

<details>
<summary>Hint 2</summary>

Expand the product of three positive-half-line indicators in sign variables and use central symmetry.

</details>

<details>
<summary>Model proof</summary>

Angular disagreement gives pair sign moments, and symmetry removes all odd sign moments.

1. For a standard Gaussian pair of correlation $\rho$, write $(X,Y)=(A,\rho A+\sqrt{1-\rho^2}B)$ with independent standard $A,B$. The direction of $(A,B)$ is uniform on the circle, as follows from its radial density. The two unit normal vectors defining the half-planes have angle $\alpha=\arccos\rho$.
2. The two signs disagree on two wedges of total angle $2\alpha$, so $P(\operatorname{sgn}X\ne\operatorname{sgn}Y)=\alpha/\pi$. Thus $E[\operatorname{sgn}X\operatorname{sgn}Y]=1-2\alpha/\pi=(2/\pi)\arcsin\rho$.
3. Put $S_i=\operatorname{sgn}X_i$. Nonsingularity ensures no zero-coordinate atoms. The target indicator is $(1+S_1)(1+S_2)(1+S_3)/8$. Central symmetry of the Gaussian vector gives $ES_i=0$ and $E[S_1S_2S_3]=0$.
4. Only the three pair moments survive. Substituting the angular identity yields $P(X_1>0,X_2>0,X_3>0)=1/8+[\arcsin\rho_{12}+\arcsin\rho_{13}+\arcsin\rho_{23}]/(4\pi)$. The input correlations must come from the stated positive-definite covariance matrix; arbitrary three numbers in $(-1,1)$ need not define such a law.

**Self-assessment rubric**

- Justify the uniform direction and count the sign-disagreement wedge angles.
- Derive the pair sign expectation with its correct constant.
- Eliminate the odd terms by joint central symmetry.
- Assemble the three pair contributions under the stated covariance hypotheses.

</details>
