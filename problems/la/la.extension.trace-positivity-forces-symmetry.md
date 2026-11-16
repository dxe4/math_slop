# Prove a matrix identity forces real symmetry

*Hard · [Linear algebra problems](index.md)*

Work over $\mathbb R$; vectors are columns and all data are dimensionless. Let a real square matrix satisfy $A^TA=A^2$. Prove $A=A^T$, explaining why a positive norm is essential to the argument.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic verdict, demonstration or checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Compare the traces of the given two matrices.

</details>

<details>
<summary>Hint 2</summary>

Expand the squared Frobenius norm of $A-A^T$.

</details>

<details>
<summary>Model proof</summary>

An algebraic trace equality becomes rigidity through a sum of squares.

1. The hypothesis gives $\operatorname{tr}(A^TA)=\operatorname{tr}(A^2)$.
2. Expanding and using cyclic trace and transpose invariance yields $\|A-A^T\|_F^2=2\operatorname{tr}(A^TA)-2\operatorname{tr}(A^2)=0$.
3. This squared Frobenius norm is the sum of the real squares of all entries of $A-A^T$. Every entry must vanish, proving symmetry. The implication from zero sum of squares uses the real positive norm and is not justified by the same formula over an arbitrary field.

**Self-assessment rubric**

- Extract the trace equality supplied by the matrix identity.
- Expand the squared Frobenius norm with the correct transpose and trace terms.
- Use positivity of real entry squares to conclude equality, stating the field scope.

</details>
