# An efficiency gain from a known covariate mean

*Medium · [Statistics and probability](index.md)*

In a model with $E[X]=0$ known, $0<E[X^2]<\infty$, and $E[Y^2]<\infty$, the target is $\mu=E[Y]$. Assume the tangent closure is exactly $\mathcal T=\{s\in L_0^2(P):E[Xs]=0\}$. Use Hilbert-space projection of the unrestricted gradient to derive the canonical gradient and efficiency bound. Explain why no joint Gaussian assumption is needed.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Graduate derivation and personal task-specific rubric reflection only; no automatic proof verdict or required checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

A known moment removes one score direction from the full tangent space.

</details>

<details>
<summary>Hint 2</summary>

Subtract a multiple of the covariate from the unrestricted gradient so that the remainder belongs to the stated tangent space.

</details>

<details>
<summary>Model proof</summary>

The efficiency gain is an orthogonal projection onto the constrained tangent space.

1. For an admissible score $s$, the target derivative is $E[(Y-\mu)s]$. The unrestricted gradient is therefore $Y-\mu$, while $\mathcal T^\perp$ within $L_0^2(P)$ is the span of $X$.
2. Choose $\beta=E[X(Y-\mu)]/E[X^2]$. Then $g=Y-\mu-\beta X$ is centered and satisfies $E[Xg]=0$, so it is the projection onto $\mathcal T$. For every admissible score, $E[gs]=E[(Y-\mu)s]$.
3. The canonical variance is $E[g^2]=\operatorname{Var}(Y)-\operatorname{Cov}(X,Y)^2/\operatorname{Var}(X)$. Orthogonal projection makes it the smallest gradient norm, with nonnegativity following from $E[g^2]\ge0$.
4. This is a tangent-space efficiency statement under the known moment restriction. It follows from second moments and the stated tangent closure, not from a Gaussian conditional-variance formula or a claim that a linear conditional mean is correct.

**Self-assessment rubric**

- Identify the unrestricted gradient and excluded score direction.
- Compute and verify the projected gradient.
- Derive its norm and distinguish the model restriction from Gaussian conditioning.

</details>
