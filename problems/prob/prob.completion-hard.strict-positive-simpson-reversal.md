# Construct a strict dependence reversal without zero cells

*Hard · [Probability problems](index.md)*

Construct Bernoulli variables $A,B,Z$ with $P(Z=0)=P(Z=1)=1/2$ and all eight joint cell probabilities positive, such that $\operatorname{Cov}(A,B\mid Z=z)<0$ for both $z=0,1$, but the marginal correlation of $A,B$ is greater than $3/5$. Give exact rational cell probabilities and prove the inequalities.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft with task-specific semantic rubric; no automatic correctness verdict or checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Give the two strata very different common marginal success rates, while keeping a small negative covariance inside each.

</details>

<details>
<summary>Hint 2</summary>

The between-stratum variation of the conditional means can outweigh the two negative within-stratum covariances.

</details>

<details>
<summary>Model proof</summary>

Positive mixtures can reverse association when group means move together more strongly than the within-group effects.

1. Given $Z=0$, use the conditional table with rows $A=0,1$ and columns $B=0,1$: $\frac1{200}\begin{pmatrix}161&19\\19&1\end{pmatrix}$. Given $Z=1$, reverse the two coordinates to obtain $\frac1{200}\begin{pmatrix}1&19\\19&161\end{pmatrix}$. Multiply each table by $1/2$ for joint probabilities.
2. All entries are positive and each conditional table sums to one. The conditional marginal success rates are both $1/10$ in the first stratum and both $9/10$ in the second.
3. The conditional covariances are $1/200-(1/10)^2=-1/200$ and $161/200-(9/10)^2=-1/200$, both strictly negative.
4. Marginally both means are $1/2$ and $E[AB]=81/200$. Covariance is $31/200$, and both variances are $1/4$, so correlation is $31/50>3/5$. The construction satisfies every strictness condition without support zeros.

**Self-assessment rubric**

- Provide two normalised rational conditional tables with every cell positive.
- Compute and verify negative covariance separately in both strata.
- Derive the marginal means and joint success probability from the mixture.
- Normalise by the actual marginal variances and prove the required strict threshold.

</details>
