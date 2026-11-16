# Profile a nuisance block in a LAN experiment

*Medium · [Statistics and probability](index.md)*

In a LAN limit, a scalar interest coordinate $h$ and nuisance vector $k$ have quadratic log likelihood $Q(h,k)=h\Delta_\psi+k^{\mathsf T}\Delta_\eta-\tfrac12(I_{\psi\psi}h^2+2hI_{\psi\eta}k+k^{\mathsf T}I_{\eta\eta}k)$. Assume $\Delta\sim N(0,I)$, $I_{\eta\eta}$ positive definite, and $J=I_{\psi\psi}-I_{\psi\eta}I_{\eta\eta}^{-1}I_{\eta\psi}>0$. By completing the nuisance square, derive the efficient central sequence and the null profile likelihood-ratio law. Work in this limit experiment; no unproved finite-sample maximizer approximation is requested.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Graduate derivation and personal task-specific rubric reflection only; no automatic proof verdict or required checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Optimize the nuisance coordinate while holding the interest coordinate fixed.

</details>

<details>
<summary>Hint 2</summary>

Separate the resulting expression into a constant, a linear interest term, and a quadratic interest term.

</details>

<details>
<summary>Model proof</summary>

Eliminating the nuisance block subtracts its score projection and information.

1. For fixed $h$, the unique nuisance maximizer is $k^*(h)=I_{\eta\eta}^{-1}(\Delta_\eta-I_{\eta\psi}h)$. Substitution gives $\sup_kQ(h,k)=\tfrac12\Delta_\eta^{\mathsf T}I_{\eta\eta}^{-1}\Delta_\eta+h\Delta_{\mathrm{eff}}-Jh^2/2$.
2. Here $\Delta_{\mathrm{eff}}=\Delta_\psi-I_{\psi\eta}I_{\eta\eta}^{-1}\Delta_\eta$. Its variance, by the joint covariance blocks, is $J$, and it is centered Gaussian.
3. The null $h=0$ leaves only the constant nuisance term. Maximizing over all real $h$ adds $\Delta_{\mathrm{eff}}^2/(2J)$, attained at $h=\Delta_{\mathrm{eff}}/J$.
4. Twice the profile improvement is $\Delta_{\mathrm{eff}}^2/J\sim\chi_1^2$. Using $I_{\psi\psi}$ instead of $J$ would ignore the fitted nuisance information loss.

**Self-assessment rubric**

- Complete and optimize the nuisance quadratic.
- Identify the efficient sequence and compute its variance.
- Derive the profile improvement and its null distribution.

</details>
