# Detect semisimplicity through the commutator action

*Hard · [Linear algebra problems](index.md)*

For complex A, define $\operatorname{ad}_A(X)=AX-XA$ on the full matrix space. Prove $\operatorname{ad}_A$ is diagonalizable if and only if A is diagonalizable. Preparation: additive Jordan-Chevalley uniqueness and polynomial nilpotence.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific semantic rubric reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Apply the additive decomposition $A=S+N$ and analyze the two induced commutator actions.

</details>

<details>
<summary>Hint 2</summary>

A matrix commuting with every matrix is scalar; a nilpotent scalar matrix must be zero.

</details>

<details>
<summary>Model proof</summary>

Functorial semisimple and nilpotent parts expose the original nilpotent obstruction.

1. Write $A=S+N$ with commuting semisimple S and nilpotent N. The actions $\operatorname{ad}_S$ and $\operatorname{ad}_N$ commute and add to $\operatorname{ad}_A$.
2. In an eigenbasis for S, each matrix unit $E_{ij}$ is an eigenvector for $\operatorname{ad}_S$ with eigenvalue $\lambda_i-\lambda_j$, so this action is diagonalizable.
3. If $N^r=0$, left and right multiplication by N commute and are each nilpotent of exponent at most r. The binomial expansion of their difference to exponent $2r-1$ vanishes, proving $\operatorname{ad}_N$ nilpotent.
4. By uniqueness of Jordan-Chevalley, diagonalizability of $\operatorname{ad}_A$ forces $\operatorname{ad}_N=0$. Thus N commutes with all matrix units. Commutation with diagonal units makes N diagonal, and with off-diagonal units makes its diagonal entries equal. Nilpotence then forces N zero, so A is semisimple. The converse is already the eigenbasis calculation.

**Self-assessment rubric**

- Derive the commuting induced decomposition.
- Diagonalize the semisimple action on matrix units.
- Prove nilpotence with the correct binomial exponent.
- Use uniqueness and the scalar center to conclude the original nilpotent part is zero.

</details>
