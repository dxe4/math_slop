# A boundary likelihood ratio from a local quadratic

*Medium · [Statistics and probability](index.md)*

At a scalar boundary null $\theta=0$ with $\theta\ge0$, assume a uniform-on-compact local expansion $\ell_n(h/\sqrt n)-\ell_n(0)=h\Delta_n-Ih^2/2+o_P(1)$ for $h\ge0$, with $I>0$ and $\Delta_n\Rightarrow N(0,I)$. Assume the likelihood maximizer in local coordinates is tight and that the quadratic argmax approximation applies. Use constrained quadratic maximization to derive the limit of $2[\sup_{\theta\ge0}\ell_n(\theta)-\ell_n(0)]$, including its atom and continuous component.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Graduate derivation and personal task-specific rubric reflection only; no automatic proof verdict or required checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Maximize the quadratic first on the real line, then impose the nonnegative constraint.

</details>

<details>
<summary>Hint 2</summary>

Separate positive and negative values of the limiting standardized central sequence.

</details>

<details>
<summary>Model proof</summary>

The constrained Gaussian quadratic retains only the positive part of the score.

1. The local quadratic $h\Delta_n-Ih^2/2$ has constrained maximizer $h_n^*=\max(0,\Delta_n/I)$ and maximum $(\max(0,\Delta_n))^2/(2I)$.
2. The stated compact expansion, tightness, and argmax approximation transfer this value to the likelihood maximum with an $o_P(1)$ error. The likelihood-ratio statistic therefore converges to $(\max(0,Z))^2$, where $Z\sim N(0,1)$.
3. On $Z\le0$ the value is zero, an event of probability $1/2$. On $Z>0$, the squared value has the same conditional law as $Z^2$, because a centered normal sign is independent of its magnitude.
4. The limiting law is consequently $\tfrac12\delta_0+\tfrac12\chi_1^2$. The ordinary interior Wilks law would omit the boundary atom and is not the law derived under these constraints.

**Self-assessment rubric**

- Solve the constrained quadratic maximum.
- Use the stated tightness and approximation to justify the likelihood limit.
- Derive both pieces of the limiting distribution.

</details>
