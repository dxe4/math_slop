# Retain every inclusion pair in a design variance

*Medium · [Statistics and probability](index.md)*

A finite population has fixed outcomes $y_1,\ldots,y_N$. Inclusion indicators satisfy $P(I_i=1)=\pi_i>0$ and $P(I_i=I_j=1)=\pi_{ij}$, with $\pi_{ii}=\pi_i$. Prove $\operatorname{Var}(\sum_iI_iy_i/\pi_i)=\sum_{i,j}(\pi_{ij}-\pi_i\pi_j)y_iy_j/(\pi_i\pi_j)$. No independence assumption is available.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or required graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Expand the square of the centered estimator as a finite double sum.

</details>

<details>
<summary>Hint 2</summary>

Keep diagonal pairs in the same notation rather than treating $pi_{ii}$ as $pi_i^2$.

</details>

<details>
<summary>Model proof</summary>

The exact design variance is the quadratic form in the full indicator covariance matrix.

1. Write $a_i=y_i/\pi_i$. Then $\widehat T-E\widehat T=\sum_i a_i(I_i-\pi_i)$.
2. Squaring and taking expectations gives $\operatorname{Var}(\widehat T)=\sum_{i,j}a_ia_jE[(I_i-\pi_i)(I_j-\pi_j)]$. All exchanges are finite.
3. The covariance is $\pi_{ij}-\pi_i\pi_j$, including the diagonal value $\pi_i(1-\pi_i)$. Substituting the $a_i$ proves the result without discarding design dependence.

**Self-assessment rubric**

- Express the centered total estimate in terms of centered indicators.
- Expand the variance retaining cross-covariances.
- Use the joint inclusion convention correctly on diagonal and off-diagonal pairs.

</details>
