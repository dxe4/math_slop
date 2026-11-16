# Find where Gaussian conditional independence ceases to be closed

*Hard · [Probability problems](index.md)*

Construct nonsingular centred Gaussian triples $(X_n,Y_n,Z_n)$ with strictly positive densities on $\mathbb R^3$ such that $X_n\perp Y_n\mid Z_n$ for every $n$, yet their almost-sure limit $(X,Y,Z)$ fails $X\perp Y\mid Z$. Then prove that for any weakly convergent sequence of centred Gaussian triples with convergent covariance matrices, conditional independence is preserved if the limiting variance of the conditioning coordinate is strictly positive. Degeneracy of $X$ or $Y$ may be allowed in this second assertion.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft with task-specific semantic rubric; no automatic correctness verdict or checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

A conditioning variable can reveal a full latent Gaussian even when its scale tends to zero.

</details>

<details>
<summary>Hint 2</summary>

For the positive-variance assertion, express Gaussian conditional independence by a conditional covariance and pass to the limit.

</details>

<details>
<summary>Model proof</summary>

Vanishing conditioning variance can destroy information discontinuously, whereas a nondegenerate Gaussian conditioner gives a continuous covariance criterion.

1. Let $G,E_1,E_2$ be independent standard normals, and set $X_n=G+E_1/n$, $Y_n=G+E_2/n$, $Z_n=G/n$. This invertible linear transform of $(G,E_1,E_2)$ has a positive-definite covariance and a strictly positive Gaussian density for every $n$.
2. Given $Z_n$, the latent $G=nZ_n$ is known exactly, leaving independent noises in $X_n,Y_n$. Thus conditional independence holds. Almost surely the triples tend to $(G,G,0)$, whose first two variables are not independent given the constant zero; for example their positive-sign events have joint probability $1/2$ rather than $1/4$.
3. For a centred Gaussian triple with $\operatorname{Var}(Z)>0$, the residuals $X-aZ,Y-bZ$, with $a=\operatorname{Cov}(X,Z)/\operatorname{Var}(Z)$ and analogously for $b$, are jointly Gaussian and independent of $Z$. Their covariance is $\operatorname{Cov}(X,Y)-\operatorname{Cov}(X,Z)\operatorname{Cov}(Y,Z)/\operatorname{Var}(Z)$. Conditional independence is equivalent to its vanishing, including degenerate residuals.
4. If the covariance matrices converge and the limiting conditioning variance is positive, the conditioning variances are positive eventually and this expression is continuous. Each expression is zero by the hypotheses, so its limit is zero. The limiting Gaussian triple therefore has the claimed conditional independence. In the constructed counterexample the denominator tends to zero, exactly where this continuity argument is unavailable.

**Self-assessment rubric**

- Give a nonsingular Gaussian construction at every finite index.
- Prove finite-index conditional independence and its failure in the almost-sure limit.
- Derive the conditional covariance characterisation with a nondegenerate conditioner.
- Pass to the limit under the precise denominator hypothesis.

</details>
