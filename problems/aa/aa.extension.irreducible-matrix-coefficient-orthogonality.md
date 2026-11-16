# Derive matrix-coefficient orthogonality by averaging intertwiners

*Hard · [Abstract algebra problems](index.md)*

Let $\rho:G\to U(V)$ and $\tau:G\to U(W)$ be irreducible complex unitary representations of a finite group. Prove, in orthonormal bases, $\frac1{|G|}\sum_g\rho(g)_{ij}\overline{\tau(g)_{k\ell}}=0$ if the representations are inequivalent; if $\rho=\tau$ of degree $d$, prove the value is $\delta_{ik}\delta_{j\ell}/d$. You may use Schur's lemma.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Average $ho(g)A\tau(g)^{-1}$ for a matrix unit $A:W\to V$.

</details>

<details>
<summary>Hint 2</summary>

In the equal-representation case determine the scalar average by its trace.

</details>

<details>
<summary>Model proof</summary>

Averaged rank-one maps isolate the desired pair of matrix coefficients.

1. For $A:W\to V$, the average $T(A)=|G|^{-1}\sum_g\rho(g)A\tau(g)^{-1}$ is an intertwiner. Schur's lemma makes it zero for inequivalent representations. For the same representation it is scalar, and trace invariance yields $T(A)=\operatorname{tr}(A)I/d$.
2. Choose $A$ to have its only nonzero entry, equal to $1$, in row $j$ and column $\ell$. Since the representations are unitary, the $(i,k)$ entry of the average is exactly $|G|^{-1}\sum_g\rho(g)_{ij}\overline{\tau(g)_{k\ell}}$.
3. For equal representations the trace of this matrix unit is $\delta_{j\ell}$, and the $(i,k)$ entry of the scalar identity is $\delta_{j\ell}\delta_{ik}/d$. This proves both cases with the stated normalization.

**Self-assessment rubric**

- Apply Schur's lemma to the averaged map between the two representations.
- Identify the exact pair of matrix coefficients from the chosen matrix unit.
- Derive the scalar and both Kronecker deltas with the correct factor.

</details>
