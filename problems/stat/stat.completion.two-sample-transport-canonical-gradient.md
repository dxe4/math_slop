# A transported mean with two free covariate laws

*Medium · [Statistics and probability](index.md)*

Observe iid records from a known mixture: with probability $\rho\in(0,1)$, a source record contains $(Z,Y)\sim P$; otherwise a target record contains $Z\sim Q$. Write the source indicator as $A$. The source conditional mean is $m(Z)=E_P[Y\mid Z]$ and the target is $\Psi=E_Qm(Z)$. Assume bounded $Y$, $Q\ll P_Z$, and bounded $w=dQ/dP_Z$. In the unrestricted two-law model, use source-conditional and target-marginal score decomposition to derive the canonical gradient and its variance. The mixture proportion is known and not a parameter.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Graduate derivation and personal task-specific rubric reflection only; no automatic proof verdict or required checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Changing the source covariate marginal alone does not change the target if the source conditional outcome law and target law stay fixed.

</details>

<details>
<summary>Hint 2</summary>

Represent the source outcome derivative under its own sampling law using the density ratio, and account separately for how frequently each record type is observed.

</details>

<details>
<summary>Model proof</summary>

Transport involves one outcome-regression derivative and one target-population derivative.

1. The source-outcome derivative for score $s_{Y\mid Z}$ is $E_Q[E_P[(Y-m)s_{Y\mid Z}\mid Z]]=E_P[w(Y-m)s_{Y\mid Z}]$. The source-covariate score contributes zero. The target derivative is $E_Q[(m-\Psi)s_Q]$.
2. The observed-record gradient is $\phi=A\,w(Z)(Y-m(Z))/\rho+(1-A)(m(Z)-\Psi)/(1-\rho)$. It has conditional mean zero within each record type. Multiplying by the corresponding mixture score cancels its sampling-proportion denominator and gives exactly the two derivatives. The source summand is defined to be zero on target records, so no unobserved outcome is evaluated.
3. The source residual is orthogonal to every source-covariate score. Boundedness gives square integrability. The unrestricted source and target tangent spaces, with their record-type proportions fixed, make this derivative representation canonical.
4. As the two terms never occur on the same record and are centered, $E\phi^2=E_P[w^2(Y-m)^2]/\rho+\operatorname{Var}_Q(m)/(1-\rho)$. Omitting either free law or the sampling proportions would describe a different efficiency problem.

**Self-assessment rubric**

- Differentiate the source conditional and target marginal components.
- Derive the observed-record gradient with correct sampling proportions.
- Verify source-marginal orthogonality and canonical tangent membership.
- Compute the variance and state which laws are free.

</details>
