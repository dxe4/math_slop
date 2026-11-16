# The interior geometry of empirical likelihood

*Hard · [Statistics and probability](index.md)*

For nonconstant fixed real data $x_1,\ldots,x_n$, consider maximizing $\sum_i\log(nw_i)$ over strictly positive weights satisfying $\sum_iw_i=1$ and $\sum_iw_ix_i=\mu$. Determine exactly when this problem is feasible. When feasible, derive a unique scalar dual equation, prove it has a unique root in the interval where all weights are positive, and prove that the resulting weights are the unique maximizer.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific rubric reflection only; no automatic correctness verdict or required checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

A strictly positive weighted mean must lie between the extreme observations.

</details>

<details>
<summary>Hint 2</summary>

Use the constrained first-order equations to express weights through one multiplier, then examine a monotone scalar function near its two singular endpoints.

</details>

<details>
<summary>Model proof</summary>

The convex-hull condition and a monotone dual equation solve the constrained likelihood.

1. Write $z_i=x_i-\mu$. Strictly positive weights are feasible only if $\min_i x_i<\mu<\max_i x_i$, since the data are nonconstant. In that case $z_{\min}<0<z_{\max}$.
2. Consider $f(\lambda)=\sum_i z_i/(1+\lambda z_i)$ on $(-1/z_{\max},-1/z_{\min})$. All denominators are positive there, $f'(\lambda)=-\sum_i z_i^2/(1+\lambda z_i)^2<0$, and its endpoint limits are respectively positive and negative infinity.
3. There is therefore exactly one root $\widehat\lambda$. Define $w_i=1/[n(1+\widehat\lambda z_i)]$. These are strictly positive and satisfy $\sum_iw_iz_i=f(\widehat\lambda)/n=0$. Also $\sum_i1/(1+\lambda z_i)=n-\lambda f(\lambda)$, so their sum is one. This proves sufficiency of the interior condition.
4. The objective is strictly concave in the weights. At the proposed weights its gradient components are $1/w_i=n+n\widehat\lambda z_i$, a linear combination of the two constraint gradients.
5. For every other feasible weight vector, the concave tangent inequality bounds its objective above by the proposed objective plus the gradient dotted with the feasible difference; that dot product is zero. Strict concavity makes equality possible only at the proposed weights. Thus the maximum is attained and unique.

**Self-assessment rubric**

- Identify the exact feasibility condition for positive weights.
- Derive the positive-denominator interval and unique dual root.
- Verify both constraints for the resulting weights.
- Prove global attainment and uniqueness from the constrained gradient.

</details>
