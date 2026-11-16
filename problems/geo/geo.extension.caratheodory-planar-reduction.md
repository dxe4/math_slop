# Reduce a planar convex combination to three points

*Hard · [Geometry and trigonometry problems](index.md)*

Prove that every point in the convex hull of an arbitrary subset $S\subseteq\mathbb R^2$ is a convex combination of at most three points of $S$. Do not assume $S$ is finite or closed.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only. No automatic verdict, graded evidence or checkpoint credit is awarded."}}
```

<details>
<summary>Hint 1</summary>

A convex-hull point is, by definition, some finite convex combination.

</details>

<details>
<summary>Hint 2</summary>

If more than three coefficients are positive, the corresponding augmented vectors $(p_i,1)$ are linearly dependent. Perturb coefficients while preserving both sums.

</details>

<details>
<summary>Model proof</summary>

Remove redundant coefficients through an affine dependence.

1. Write the point as $p=\sum_{i=1}^m\lambda_i p_i$, with $p_i\in S$, $\lambda_i>0$, and $\sum\lambda_i=1$, discarding zero coefficients. This representation is finite even when $S$ is infinite.
2. If $m>3$, choose a nonzero dependence $\sum\mu_i p_i=0$, $\sum\mu_i=0$ of the augmented vectors. It has both positive and negative coefficients.
3. Let $t=\min_{\mu_i>0}\lambda_i/\mu_i>0$ and set $\lambda_i^\prime=\lambda_i-t\mu_i$. All new coefficients are nonnegative, at least one is zero, their sum is still one, and their weighted point sum is still $p$.
4. Discard the zero coefficients. Repeat whenever more than three remain; the finite number of positive coefficients decreases each time, so the process terminates.
5. The resulting representation uses at most three points. No compactness, closure or infinite limiting combination was used.

**Self-assessment rubric**

- Start with a finite convex combination even for an infinite set.
- Obtain a dependence preserving both the point sum and coefficient sum.
- Choose the perturbation so all coefficients remain nonnegative and one vanishes.
- Prove finite termination with no closure assumption.

</details>
