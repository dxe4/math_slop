# Characterise independence of positive Gaussian quadratic forms

*Hard · [Probability problems](index.md)*

Let $Z\sim N(0,I_d)$ and let $A,B$ be real symmetric positive semidefinite matrices. Prove that $Z^TAZ$ and $Z^TBZ$ are independent if and only if $AB=0$. Derive the required covariance formula from scalar normal moments. Then show that zero covariance alone is insufficient when the positive-semidefinite assumption is dropped, using explicit symmetric $2\times2$ matrices and a mixed-moment calculation.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft with task-specific semantic rubric; no automatic correctness verdict or checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

For positive matrices, a zero trace of their product has stronger consequences than for indefinite matrices.

</details>

<details>
<summary>Hint 2</summary>

Orthogonal matrix ranges give independent Gaussian coordinates. For a counterexample, compare two different quadratic expressions in the same two coordinates.

</details>

<details>
<summary>Model proof</summary>

Positivity turns a covariance identity into orthogonal support, which yields full independence.

1. Independence of standard coordinates and $EZ_i^4=3$ give $E[Z_iZ_jZ_kZ_l]=\delta_{ij}\delta_{kl}+\delta_{ik}\delta_{jl}+\delta_{il}\delta_{jk}$. Expanding both forms yields $E[(Z^TAZ)(Z^TBZ)]=\operatorname{tr}(A)\operatorname{tr}(B)+2\operatorname{tr}(AB)$, hence covariance $2\operatorname{tr}(AB)$.
2. If the forms are independent, their covariance is zero. The matrix $A^{1/2}BA^{1/2}$ is positive semidefinite with trace zero, hence zero. It equals $(B^{1/2}A^{1/2})^T(B^{1/2}A^{1/2})$, so $B^{1/2}A^{1/2}=0$, implying $BA=0$ and $AB=0$.
3. Conversely $AB=0$ makes the ranges of $A$ and $B$ orthogonal. Choose an orthonormal basis adapted to those ranges and their remaining complement. The corresponding coordinates of $Z$ are independent standard normals, and the two forms depend on disjoint coordinate groups, proving independence.
4. Without positivity take $A=\operatorname{diag}(1,-1)$ and $B=\begin{pmatrix}0&1\\1&0\end{pmatrix}$. The forms are $Q_1=Z_1^2-Z_2^2$ and $Q_2=2Z_1Z_2$. Their covariance is zero and each second moment is four, but $E[Q_1^2Q_2^2]=4(15-2\cdot9+15)=48\ne16=E[Q_1^2]E[Q_2^2]$. Thus they are dependent.

**Self-assessment rubric**

- Derive the trace covariance from scalar Gaussian moments.
- Use positive semidefiniteness to pass from trace zero to matrix product zero.
- Prove sufficiency using independent orthogonal Gaussian coordinates.
- Verify zero covariance but a conflicting mixed second-square moment.

</details>
