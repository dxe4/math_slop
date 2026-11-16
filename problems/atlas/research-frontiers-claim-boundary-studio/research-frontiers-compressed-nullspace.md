# Residual zero is not recovery

*Difficulty 3 of 5 · [Research frontiers claim-boundary studio](index.md) · exercise 10 of 12*

Let A be an `m by n` matrix with `m<n`. A reconstruction satisfies `A xhat=y` exactly, and the paper concludes `xhat is the true signal`. Give a counterargument, then state the kind of hypothesis that could support recovery.

<details>
<summary>Hint 1</summary>

Use a nonzero vector in the nullspace

</details>

<details>
<summary>Hint 2</summary>

Sparse recovery needs both a signal model and measurement geometry

</details>

<details>
<summary>Worked solution</summary>

Because `m<n`, the nullspace is nontrivial: choose nonzero h with `Ah=0`. Then `A(xhat+h)=y` as well, so exact residual cannot identify xhat among arbitrary vectors. A recovery theorem can add that the true signal is k-sparse or compressible in a stated basis and that A satisfies an appropriate nullspace, restricted-isometry, incoherence, or probabilistic design condition. In noise it must also state the error level and model-mismatch term. Solver optimality and physical calibration remain additional layers.

**Answer.** Any nullspace shift fits equally well. Recovery requires a sparse/structured signal class plus compatible measurement geometry and, in noise, a scoped stability bound.

</details>

*Tags: compressed-sensing, nullspace, recovery-guarantee*
