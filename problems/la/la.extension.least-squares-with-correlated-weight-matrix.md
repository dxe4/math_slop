# Fit with a nondiagonal positive metric

*Medium · [Linear algebra problems](index.md)*

All data are dimensionless. Work over $\mathbb R$ with column vectors and the Euclidean inner product unless another one is specified. Use the squared residual norm $r^TGr$ with $G=\begin{pmatrix}2&1\\1&3\end{pmatrix}$. Find the real constant $c$ minimizing this quantity for $r=(1,3)^T-c(1,1)^T$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":15,"denominator":7},"checker_scope":"Only the requested exact scalar or structured answer is checked; an optional mathematical argument is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

The normal equation is $u^TG(b-cu)=0$ for $u=(1,1)^T$.

</details>

<details>
<summary>Hint 2</summary>

Compute the metric-weighted numerator and denominator, including cross terms.

</details>

<details>
<summary>Worked solution</summary>

Correlated weights are not merely separate weights on observations.

1. The matrix $G$ is positive definite because its first principal minor is two and its determinant is five.
2. One has $u^TGb=15$ and $u^TGu=7$, giving the unique normal-equation solution $c=15/7$.
3. The squared objective is a strictly convex quadratic with positive leading coefficient seven, so this stationary value is the unique minimum.

</details>
