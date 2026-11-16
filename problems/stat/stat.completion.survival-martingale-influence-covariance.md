# Survival covariance from a martingale influence expansion

*Medium · [Statistics and probability](index.md)*

Let event and censoring times be independent with continuous hazards on $[0,t_*]$. Write event survival $S$, censor survival $G$, event hazard $\lambda$, and $H(u)=S(u)G(u)$, bounded away from zero there. For one record define $Y(u)=1_{\{\min(T,C)\ge u\}}$, $N(u)=1_{\{T\le u,T\le C\}}$, and $M(u)=N(u)-\int_0^uY(v)\lambda(v)\,dv$. Assume the joint Nelson–Aalen expansion $\sqrt n(\widehat\Lambda(t)-\Lambda(t))=n^{-1/2}\sum_i\int_0^tH(u)^{-1}dM_i(u)+o_P(1)$ for fixed times. Use the delta method for $\widehat S=e^{-\widehat\Lambda}$ and martingale isometry to derive its influence function and covariance at two times. You may use $d\langle M\rangle(u)=Y(u)\lambda(u)du$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Graduate derivation and personal task-specific rubric reflection only; no automatic proof verdict or required checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Differentiate the exponential survival map at the cumulative hazard.

</details>

<details>
<summary>Hint 2</summary>

For two stochastic integrals, their covariance uses only their common time range and the expected predictable variation.

</details>

<details>
<summary>Model proof</summary>

The hazard influence is transformed by the survival derivative and integrated against the at-risk law.

1. The derivative of $e^{-\Lambda(t)}$ is $-S(t)$. Hence the survival influence at $t$ is $\phi_t=-S(t)\int_0^t H(u)^{-1}dM(u)$, with the stated fixed-time joint remainder preserved by the delta method.
2. For $s,t\le t_*$, martingale isometry and zero means give $E[\phi_s\phi_t]=S(s)S(t)E\int_0^{s\wedge t}H(u)^{-2}Y(u)\lambda(u)du$.
3. Independence of event and censoring times gives $E Y(u)=H(u)$, so the covariance is $S(s)S(t)\int_0^{s\wedge t}\lambda(u)/H(u)\,du$. At a single time the variance is $S(t)^2\int_0^t\lambda(u)/H(u)\,du$.
4. The positive at-risk bound makes these integrals finite on the stated interval. This fixed-time calculation neither extends follow-up beyond censoring support nor proves the assumed Nelson–Aalen expansion.

**Self-assessment rubric**

- Apply the survival-map derivative to the supplied hazard expansion.
- Compute covariance using the common time range.
- Substitute the at-risk mean, establish finiteness, and retain the assumed scope.

</details>
