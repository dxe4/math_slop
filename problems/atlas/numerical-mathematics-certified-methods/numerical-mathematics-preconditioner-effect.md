# Quantify a diagonal preconditioner

*Difficulty 4 of 5 · [Numerical mathematics and certified optimization](index.md) · exercise 10 of 16*

Let `A=diag(1,100,10000)` and use left preconditioner `M=diag(1,100,100)`. Compute the spectra and 2-norm condition numbers of A and `M^(-1)A`. Explain why this comparison is incomplete as a performance claim.

<details>
<summary>Hint 1</summary>

The matrices are diagonal and positive definite

</details>

<details>
<summary>Hint 2</summary>

Include setup and application cost and check the original residual

</details>

<details>
<summary>Worked solution</summary>

The eigenvalues and singular values of A are `1,100,10000`, so `kappa_2(A)=10000`. Since `M^(-1)=diag(1,0.01,0.01)`, the preconditioned matrix is `diag(1,1,100)`, with condition number 100. The spectral spread is reduced by a factor of 100, so worst-case CG-style bounds would improve substantially under an SPD-compatible formulation. But iteration count is not the whole cost. One must include construction, storage, and application of M; verify that symmetry and positive definiteness are preserved in the actual preconditioned method; and compute the residual of the original system. An exact preconditioner M=A would give identity and one-step convergence in exact arithmetic but may cost as much as solving the system directly.

**Answer.** Condition number falls from 10000 to 100; performance still depends on preconditioner cost, preserved structure, finite precision, and original residual.

</details>

*Tags: numerical-linear-algebra, preconditioning, conditioning*
