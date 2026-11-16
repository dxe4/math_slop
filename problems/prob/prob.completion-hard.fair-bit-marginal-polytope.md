# Characterise feasible pair disagreements of three fair bits

*Hard · [Probability problems](index.md)*

For three fair Bernoulli variables, let $d_{ij}=P(X_i\ne X_j)$. Characterise exactly which triples $(d_{12},d_{13},d_{23})\in[0,1]^3$ are jointly realisable, giving an explicit construction whenever feasible. Then exhibit a positive-definite proposed correlation matrix with unit diagonal that cannot be the correlation matrix of three fair bits. Prove both the feasibility obstruction and the matrix claim.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft with task-specific semantic rubric; no automatic correctness verdict or checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

A deterministic binary triple either has no disagreeing pairs or has exactly two. Identify the four disagreement patterns.

</details>

<details>
<summary>Hint 2</summary>

Symmetrise each pattern with its global bit complement to obtain fair marginals without changing disagreements.

</details>

<details>
<summary>Model proof</summary>

The feasible disagreement vectors form the convex hull of four cut patterns, which is smaller than the positive-semidefinite correlation region.

1. Every binary outcome produces one of the disagreement vectors $(0,0,0),(1,1,0),(1,0,1),(0,1,1)$ in coordinates $(12,13,23)$. If their probabilities are $w_0,w_1,w_2,w_3$, solving the three disagreement equations gives $w_1=(d_{12}+d_{13}-d_{23})/2$, $w_2=(d_{12}+d_{23}-d_{13})/2$, $w_3=(d_{13}+d_{23}-d_{12})/2$, and $w_0=1-(d_{12}+d_{13}+d_{23})/2$.
2. Thus feasibility requires the three triangle inequalities and $d_{12}+d_{13}+d_{23}\le2$. Conversely these inequalities make all four weights nonnegative and sum to one. Choose the corresponding disagreement pattern, then choose uniformly between a representative binary string and its complement. This gives fair marginals and exactly the prescribed disagreements.
3. For fair bits, equivalently for signs $2X_i-1$, correlations are $\rho_{ij}=1-2d_{ij}$. Propose all three off-diagonal correlations equal to $-2/5$. The matrix has eigenvalues $1+2(-2/5)=1/5$ and $1-(-2/5)=7/5$ twice, hence is positive definite.
4. But all disagreements would be $7/10$, whose sum $21/10$ exceeds two. No joint fair-bit law has that correlation matrix. Positive definiteness is necessary for a covariance matrix but is not sufficient for these prescribed discrete marginals.

**Self-assessment rubric**

- Enumerate the four possible disagreement patterns and solve for their weights.
- Show that the inequalities suffice via complement symmetrisation.
- Verify both eigenvalue positivity and violation of the discrete marginal constraint.

</details>
