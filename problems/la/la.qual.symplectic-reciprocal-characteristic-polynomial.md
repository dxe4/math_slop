# Prove reciprocal spectral multiplicity for a symplectic map

*Hard · [Linear algebra problems](index.md)*

For real symplectic $S\in M_{2n}(\mathbb R)$, prove $p(t)=t^{2n}p(1/t)$ for $p(t)=\det(tI-S)$, interpreted as a polynomial identity. Deduce the reciprocal-conjugate orbit rule with algebraic multiplicities. Preparation: symplectic determinant one and similarity invariance.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific semantic rubric reflection only. No automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

The defining form identity makes the inverse similar to the transpose.

</details>

<details>
<summary>Hint 2</summary>

Combine this with determinant one and the even dimension, then use real polynomial coefficients for conjugate pairing.

</details>

<details>
<summary>Model proof</summary>

A bilinear duality relates inverse spectrum to the original characteristic polynomial.

1. From $S^TJS=J$ obtain $S^{-1}=J^{-1}S^TJ$, so the inverse and transpose, hence S itself, have the same characteristic polynomial.
2. Using $\det S=1$ gives $p(t)=\det(tI-S^{-1})=\det(tS-I)=\det(I-tS)$, with the last sign positive in even dimension.
3. For nonzero t, the last determinant is $t^{2n}p(1/t)$; equality as polynomials includes zero without treating $1/0$ as a value. Thus nonzero eigenvalues and their reciprocals have equal algebraic multiplicities.
4. Reality also pairs each eigenvalue with its conjugate. The resulting orbit is $\lambda,\overline\lambda,\lambda^{-1},\overline\lambda^{-1}$ with multiplicities; entries may coincide on the real axis or unit circle, so four distinct values are not always implied.

**Self-assessment rubric**

- Derive the inverse/transpose similarity from the symplectic identity.
- Use determinant one and even dimension with correct signs.
- Explain the reciprocal multiplicities from the polynomial relation.
- Include conjugation and describe possible coincident orbit members.

</details>
