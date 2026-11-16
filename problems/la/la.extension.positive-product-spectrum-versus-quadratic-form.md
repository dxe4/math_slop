# Separate a positive spectrum from a positive quadratic form

*Hard · [Linear algebra problems](index.md)*

Work over $\mathbb R$; vectors are columns and all data are dimensionless. For real symmetric positive definite matrices $A,B$, prove $AB$ is diagonalizable with positive real eigenvalues. Then give explicit $2\times2$ such matrices and a vector $v$ with $v^TABv<0$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic verdict, demonstration or checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Conjugate the product using the positive square root of one factor.

</details>

<details>
<summary>Hint 2</summary>

For the counterexample, try a diagonal factor with unequal entries and a second positive matrix with large off-diagonal entries.

</details>

<details>
<summary>Model proof</summary>

Similarity controls eigenvalues, while a nonsymmetric quadratic form sees its symmetric part.

1. The symmetric matrix $C=A^{1/2}BA^{1/2}$ is positive definite because $x^TCx=(A^{1/2}x)^TB(A^{1/2}x)>0$.
2. One has $AB=A^{1/2}CA^{-1/2}$, so $AB$ is similar to a symmetric positive definite matrix. The real spectral theorem gives its positive eigenvalues and diagonalizability.
3. Take $A=\operatorname{diag}(4,1)$, $B=\begin{pmatrix}1&2\\2&5\end{pmatrix}$ and $v=(1,-1)^T$. Both factors are positive definite, with the second having positive first principal minor and determinant one. But $AB=\begin{pmatrix}4&8\\2&5\end{pmatrix}$ and $v^TABv=4-10+5=-1$.

**Self-assessment rubric**

- Construct the symmetric positive definite conjugate and prove its positivity.
- Use the correct similarity relation to derive the product spectrum and diagonalizability.
- Verify both explicit factors satisfy positive definiteness.
- Compute a genuinely negative quadratic value for their nonsymmetric product.

</details>
