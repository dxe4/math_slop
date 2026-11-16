# Prove primary orthogonality for an indefinite Hermitian adjoint

*Hard · [Linear algebra problems](index.md)*

Let $G=G^*$ be invertible over $\mathbb C$ and $A^*G=GA$. With $B(x,y)=x^*Gy$, prove the generalized lambda- and mu-eigenspaces of A are B-orthogonal whenever $\mu\ne\overline\lambda$. Deduce total isotropy of a nonreal primary space and give a real two-dimensional example with nonreal spectrum. Preparation: primary decomposition and indefinite adjoints.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific semantic rubric reflection only. No automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Moving $A-\lambda I$ across the first slot changes lambda to its conjugate in the second slot.

</details>

<details>
<summary>Hint 2</summary>

The shifted operator is invertible on a primary space for a different eigenvalue; transfer a sufficiently high annihilating power.

</details>

<details>
<summary>Model proof</summary>

Nilpotent primary information and nondegenerate adjoint duality survive even without positivity.

1. The adjoint identity yields $B((A-\lambda I)x,y)=B(x,(A-\overline\lambda I)y)$, and iteration gives the same identity for powers.
2. Choose k killing x in the generalized lambda-space. On the generalized mu-space, $A-\overline\lambda I$ is invertible when mu differs from the conjugate, because it is a nonzero scalar plus a nilpotent map. For any y there write $y=(A-\overline\lambda I)^kz$; the pairing becomes $B((A-\lambda I)^kx,z)=0$.
3. If lambda is nonreal, take mu=lambda to see that its whole primary space is totally isotropic.
4. For a real example use $G=\operatorname{diag}(1,-1)$ and $A=\begin{pmatrix}0&1\\-1&0\end{pmatrix}$. Direct multiplication gives $A^TG=GA$, while its characteristic polynomial is $t^2+1$. Thus the nonreal pair is compatible with indefinite self-adjointness.

**Self-assessment rubric**

- Track conjugation correctly in the shifted adjoint identity.
- Prove the needed inverse exists on the other primary space.
- Transfer an annihilating power to prove orthogonality and total isotropy.
- Verify both the form-adjoint equation and nonreal spectrum in a valid example.

</details>
