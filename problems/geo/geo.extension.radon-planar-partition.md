# Prove a four-point convex-hull intersection theorem

*Hard · [Geometry and trigonometry problems](index.md)*

Given any four labeled points $P_1,P_2,P_3,P_4$ in the plane, prove that their labels can be partitioned into two nonempty disjoint sets whose convex hulls intersect. Repeated or collinear points are allowed. Your proof must construct convex combinations with nonnegative coefficients.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only. No automatic verdict, graded evidence or checkpoint credit is awarded."}}
```

<details>
<summary>Hint 1</summary>

Augment each point vector $(x_i,y_i)$ to $(x_i,y_i,1)$ in three-dimensional space.

</details>

<details>
<summary>Hint 2</summary>

A nontrivial linear dependence has coefficients summing to zero; separate its positive and negative coefficients.

</details>

<details>
<summary>Model proof</summary>

Convert affine dependence into two equal convex combinations.

1. Four vectors $(x_i,y_i,1)$ in three-dimensional space are linearly dependent. Choose real coefficients $\lambda_i$, not all zero, with $\sum\lambda_i p_i=0$ and $\sum\lambda_i=0$.
2. There must be at least one positive and at least one negative coefficient. Let $I_+$ and $I_-$ be their index sets and $s=\sum_{I_+}\lambda_i=-\sum_{I_-}\lambda_i>0$.
3. Rearranging and dividing by $s$ gives $\sum_{I_+}(\lambda_i/s)p_i=\sum_{I_-}(-\lambda_i/s)p_i$. Each side is a convex combination with positive coefficients summing to one.
4. The common point lies in both convex hulls. Assign any zero-coefficient labels arbitrarily to either set with coefficient zero; this yields a partition of all four labels without emptying either set.
5. The argument uses no general-position assumption, so coincident and collinear inputs are covered.

**Self-assessment rubric**

- Produce a nonzero dependence of augmented point vectors.
- Prove both sign groups are nonempty and have equal positive total magnitude.
- Normalize both groups into convex combinations of one point.
- Assign zero coefficients and cover repeated or collinear points.

</details>
