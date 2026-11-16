# Expose growth hidden by every instantaneous spectrum

*Hard · [Differential equations problems](index.md)*

A piecewise-constant periodic linear system alternates for one time unit each between $A_1=\begin{pmatrix}-1&4\\0&-1\end{pmatrix}$ and A\_2=\[\[-1,0\],\[4,-1\]\], beginning with A\_1. Prove every instantaneous matrix has eigenvalues -1 but the system has exponentially growing solutions at times 2n.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Exponentiate each nilpotent perturbation of -I exactly.

</details>

<details>
<summary>Hint 2</summary>

The two-step map is a product in chronological order, with the second interval's map on the left.

</details>

<details>
<summary>Model proof</summary>

Stable separate spectra do not control noncommuting periodic evolution.

1. Each matrix is triangular with both diagonal entries -1, so each has only eigenvalue -1. Their one-unit maps are exp(A\_1)=e^(-1)\*\[\[1,4\],\[0,1\]\] and exp(A\_2)=e^(-1)\*\[\[1,0\],\[4,1\]\].
2. The two-step map is M=exp(A\_2)\*exp(A\_1)=e^(-2)\*\[\[1,4\],\[4,17\]\]. The inner matrix has trace eighteen and determinant one, hence eigenvalues 9+4\*sqrt(5) and 9-4\*sqrt(5).
3. Its larger multiplier mu=e^(-2)\*(9+4\*sqrt(5)) exceeds one; indeed e&lt;3 gives e^2&lt;9. Starting in an eigenvector for mu gives u(2n)=mu^n\*u(0), proving exponential growth along the stroboscopic times despite the instantaneous spectra.

**Self-assessment rubric**

- Check the individual matrices and exact interval exponentials.
- Compute the correctly ordered two-step evolution matrix.
- Find a multiplier larger than one and a corresponding growing trajectory.

</details>
