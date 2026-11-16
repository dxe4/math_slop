# Prove a real symplectic determinant is one rather than either sign

*Hard · [Linear algebra problems](index.md)*

Let S preserve a nondegenerate alternating form on $\mathbb R^{2n}$: $S^TJS=J$. Prove $\det S=1$, not merely $(\det S)^2=1$, using the top exterior power. Preparation: alternating forms and exterior powers.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific semantic rubric reflection only. No automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

In a symplectic basis, take the nth wedge power of the two-form.

</details>

<details>
<summary>Hint 2</summary>

The preservation condition fixes this nonzero top form; the top action multiplies by the determinant.

</details>

<details>
<summary>Model proof</summary>

The oriented symplectic volume resolves the sign left ambiguous by determinants of the matrix identity.

1. Let omega be the preserved two-form. In a symplectic dual basis it is the sum of n independent paired coordinate wedges.
2. Its nth wedge power is $n!$ times their ordered top wedge, hence nonzero over the real field. No repeated paired term survives; the surviving pair permutations have positive signs.
3. Preservation gives $S^*\omega=\omega$ and therefore $S^*(\omega^n)=\omega^n$. On a top-dimensional form pullback acts by $\det S$. Since that form is nonzero, $\det S=1$.

**Self-assessment rubric**

- Compute why the nth wedge power is nonzero in the real symplectic setting.
- Pass the two-form preservation to its top wedge.
- Use the determinant action on the nonzero volume form to obtain the sign-specific result.

</details>
