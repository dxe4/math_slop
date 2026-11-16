# Characterize real square roots of invertible matrices

*Hard · [Linear algebra problems](index.md)*

Let $A$ be an invertible real matrix. Prove it has a real square root if and only if, for each negative real eigenvalue and each Jordan block size, the number of blocks of that size is even. Preparation: real and complex Jordan forms and truncated polynomial functions on a block. Do not include singular A in the claim.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific semantic rubric reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Squaring a nonzero-eigenvalue Jordan block preserves its size because the first derivative of the square function is nonzero there.

</details>

<details>
<summary>Hint 2</summary>

Negative eigenvalues require imaginary roots; pair their conjugate blocks for a real construction, and use finite binomial expansions for the other blocks.

</details>

<details>
<summary>Model proof</summary>

Conjugate pairing gives necessity, while block polynomial calculus constructs sufficiency.

1. If $A=B^2$, then B is invertible. On a complex block $\mu I+N$ with $\mu\ne0$, its squared nilpotent correction is $N(2\mu I+N)$. The second factor is invertible and commutes with N, so all kernel-power dimensions, and therefore block sizes, are preserved.
2. For a negative real lambda, the possible eigenvalues of B are the conjugate imaginary pair $\pm i\sqrt{|\lambda|}$. A real B has equally many conjugate blocks of every size, forcing the stated even count for A.
3. Conversely, a nonzero complex block $J_s(\lambda)=\lambda I+N$ has a square root $R=\mu\sum_{k=0}^{s-1}\binom{1/2}{k}(N/\lambda)^k$, with $\mu^2=\lambda$. The formal binomial square identity modulo $N^s=0$ proves $R^2=J_s(\lambda)$. Positive real lambda gives a real root block.
4. For nonreal conjugate blocks choose conjugate roots and realify the pair. For paired negative-real blocks, write a chosen complex root $R=X+iY$; its realification $\begin{pmatrix}X&-Y\\Y&X\end{pmatrix}$ squares to $\operatorname{diag}(J_s(\lambda),J_s(\lambda))$. Assemble all permitted blocks and conjugate by the real canonical basis change. This yields a real square root.

**Self-assessment rubric**

- Prove squaring preserves each nonzero Jordan block size.
- Use real conjugate pairing to derive necessity for every size separately.
- Construct and verify the finite root polynomial on a nonzero block.
- Explain all real, conjugate and paired-negative constructions and why singular matrices were excluded.

</details>
