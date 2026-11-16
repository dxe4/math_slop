# Why pointwise density is not a regular nonparametric target

*Medium · [Statistics and probability](index.md)*

At the uniform density on $[0,1]$, consider the target $\Psi(p)=p(1/2)$ in a model of positive continuous densities. Use bounded continuous score paths $p_t=1+ts$ and the triangular bumps $b_h(x)=(1-|x-1/2|/h)_+$, $0<h<1/4$, to prove that no $L^2$ influence gradient represents all path derivatives. Center and normalize each bump in $L^2$. Explain why using continuous densities removes ambiguity from pointwise density versions.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Graduate derivation and personal task-specific rubric reflection only; no automatic proof verdict or required checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Compute the integral and squared integral of the triangular bump.

</details>

<details>
<summary>Hint 2</summary>

A unit-norm sequence of valid scores with unbounded target derivative contradicts the bounded linear functional required by an influence gradient.

</details>

<details>
<summary>Model proof</summary>

Point evaluation is unbounded in the score norm, even on continuous bounded-score paths.

1. The bump satisfies $\int_0^1b_h=h$ and $\int_0^1b_h^2=2h/3$. Set $s_h=(b_h-h)/\sqrt{2h/3-h^2}$. It is continuous, bounded for each fixed $h$, mean zero, and has $L^2$ norm one.
2. For sufficiently small two-sided $t$, $p_t=1+ts_h$ is a positive continuous density. A bounded-score square-root Taylor expansion makes it a DQM path with score $s_h$. Its target derivative is $s_h(1/2)=(1-h)/\sqrt{2h/3-h^2}\to\infty$.
3. If a gradient $g\in L_0^2$ represented every such derivative, Cauchy–Schwarz would give $|s_h(1/2)|=|E[gs_h]|\le\|g\|_2$ for all $h$, a contradiction. Thus no such influence gradient exists in this model.
4. The model uses continuous versions: two continuous densities equal almost everywhere must agree everywhere. Point evaluation is therefore a well-defined functional here, but it still fails the required continuity in the tangent norm.

**Self-assessment rubric**

- Construct valid unit-norm continuous scores.
- Verify the score path and compute the diverging target derivative.
- Use the influence-gradient norm bound to obtain a contradiction.
- Separate well-defined point evaluation from pathwise regularity.

</details>
