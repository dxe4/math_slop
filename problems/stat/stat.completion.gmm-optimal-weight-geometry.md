# Optimal GMM weighting as a covariance projection

*Medium · [Statistics and probability](index.md)*

Let $D\in\mathbb R^{q\times p}$ have full column rank and let $\Omega,W$ be positive-definite symmetric $q\times q$ matrices. For a GMM estimator assume the usual linearized moment equations and $\sqrt n\,g_n(\theta_0)\Rightarrow N_q(0,\Omega)$. Set $A_W=(D^{\mathsf T}WD)^{-1}D^{\mathsf T}W$. Use the influence matrices to prove $A_W\Omega A_W^{\mathsf T}-(D^{\mathsf T}\Omega^{-1}D)^{-1}$ is positive semidefinite, and characterize equality. Explicitly connect this matrix to the GMM asymptotic covariance.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Graduate derivation and personal task-specific rubric reflection only; no automatic proof verdict or required checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

The linearized first-order equation maps the moment fluctuation through a left inverse of the derivative.

</details>

<details>
<summary>Hint 2</summary>

Subtract the optimal-weight left inverse and expand the covariance; the derivative-annihilating difference makes the cross terms disappear.

</details>

<details>
<summary>Model proof</summary>

Every other GMM influence matrix adds an orthogonal covariance component.

1. The linearized equation is $0=D^{\mathsf T}W[\sqrt n\,g_n(\theta_0)+D\sqrt n(\widehat\theta_W-\theta_0)]+o_P(1)$. Thus $\sqrt n(\widehat\theta_W-\theta_0)=-A_W\sqrt n\,g_n(\theta_0)+o_P(1)$ and its covariance limit is $A_W\Omega A_W^{\mathsf T}$.
2. Put $M=(D^{\mathsf T}\Omega^{-1}D)^{-1}$, $A_*=MD^{\mathsf T}\Omega^{-1}$, and $B=A_W-A_*$. Both left inverses satisfy $A_WD=A_*D=I_p$, so $BD=0$.
3. Then $A_*\Omega A_*^{\mathsf T}=M$ and $A_*\Omega B^{\mathsf T}=MD^{\mathsf T}B^{\mathsf T}=0$. Expanding gives $A_W\Omega A_W^{\mathsf T}=M+B\Omega B^{\mathsf T}$.
4. The additional matrix is positive semidefinite and vanishes exactly when $B=0$, since $\Omega$ is positive definite. Equality therefore means the influence matrix equals $A_*$; the numerical weight matrix itself need not be unique.

**Self-assessment rubric**

- Derive the influence matrix from the moment first-order equation.
- Establish the derivative-annihilating difference.
- Expand and cancel the covariance cross terms.
- State equality in terms of the influence matrix rather than a unique weight.

</details>
