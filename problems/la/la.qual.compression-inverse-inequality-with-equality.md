# Prove inverse compression and identify its equality geometry

*Hard · [Linear algebra problems](index.md)*

Let A be real symmetric positive definite and let V have k orthonormal columns, with $1\le k<n$. Prove $(V^TAV)^{-1}\le V^TA^{-1}V$. Prove equality holds exactly when the range of V is A-invariant. Preparation: Schur complements and inverse order.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific semantic rubric reflection only. No automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Complete V to an orthogonal basis and write A in blocks.

</details>

<details>
<summary>Hint 2</summary>

The corner of the inverse is the inverse Schur complement; determine when the subtracted positive term vanishes.

</details>

<details>
<summary>Model proof</summary>

Compression loses coupling information that inversion restores positively.

1. In an orthogonal basis beginning with V, write $A=\begin{pmatrix}B&C\\C^T&D\end{pmatrix}$. Here B and D are positive definite and $B=V^TAV$.
2. The corresponding inverse corner is $(B-CD^{-1}C^T)^{-1}$, and the Schur complement is positive definite. Since it is at most B, inverse order gives this corner at least $B^{-1}$. This is the desired inequality.
3. Equality holds exactly when $CD^{-1}C^T=0$, since equality of the two inverses implies equality before inversion. Positivity makes this equivalent to $C=0$.
4. The off-diagonal block C vanishes exactly when the first coordinate subspace, the range of V, is A-invariant. Symmetry then also makes its orthogonal complement invariant, completing the equality characterization.

**Self-assessment rubric**

- Complete the isometry and identify the positive diagonal blocks.
- Use the positive Schur complement and correctly reversed inverse order.
- Prove equality is equivalent to vanishing of the off-diagonal block.
- Translate that block condition into precisely the stated invariant range.

</details>
