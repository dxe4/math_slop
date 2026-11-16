# DQM under a curved parameterization

*Medium · [Statistics and probability](index.md)*

A $d$-parameter model is DQM at $\theta_0$ with score vector $\ell\in L^2(P_0)^d$ and information $I=E_0[\ell\ell^{\mathsf T}]$. Let $\theta=\phi(u)$, where $\phi(0)=\theta_0$ and $\phi(u)=\theta_0+Ju+o(\|u\|)$ for $u\in\mathbb R^k$; the model is defined on a neighborhood containing these images. Use the $L^2$ DQM expansion to derive the new score and information. Characterize directions of zero information, including when $J$ is rank deficient.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Graduate derivation and personal task-specific rubric reflection only; no automatic proof verdict or required checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Insert the differentiable parameter map into the original square-root-density expansion.

</details>

<details>
<summary>Hint 2</summary>

Control the new linearization error using the finite second moments of the original score, then examine the resulting quadratic form.

</details>

<details>
<summary>Model proof</summary>

The information transforms by the tangent map, even when that map is not invertible.

1. Let $v(u)=\phi(u)-\theta_0=Ju+o(\|u\|)$. The DQM expansion is $q_{\theta_0+v}-q_0=\tfrac12v^{\mathsf T}\ell q_0+o_{L^2}(\|v\|)$. Here $\|v(u)\|=O(\|u\|)$, so the original remainder is $o_{L^2}(\|u\|)$.
2. The replacement of $v(u)$ by $Ju$ also has $L^2$ norm $o(\|u\|)$, since $\|(v-Ju)^{\mathsf T}\ell q_0\|_2^2=(v-Ju)^{\mathsf T}I(v-Ju)$. The new score is therefore $J^{\mathsf T}\ell$.
3. The new information is $J^{\mathsf T}IJ$. A direction $a$ has zero information exactly when $I^{1/2}Ja=0$. If $I$ is positive definite, this is equivalent to $Ja=0$; otherwise a nonzero image may itself lie in an uninformative original direction.
4. Zero tangent information does not identify a higher-order rate or establish global nonidentifiability. The conclusion concerns this first-order local experiment.

**Self-assessment rubric**

- Control both reparameterization and original DQM remainders.
- Derive the transformed score and information.
- Characterize zero-information directions without a global identification claim.

</details>
