# Prove the odd skew-symmetric determinant obstruction

*Medium · [Linear algebra problems](index.md)*

Work over $\mathbb R$ unless a scalar extension is explicitly stated; all coordinates are dimensionless. Prove a real skew-symmetric matrix of odd size is singular. Give a one-dimensional characteristic-two example showing why the same sign proof does not establish that claim over every field.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific rubric reflection only; no automatic verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Compare determinants of $A$, $A^T$ and $-A$.

</details>

<details>
<summary>Hint 2</summary>

In characteristic two a number and its negative agree.

</details>

<details>
<summary>Model proof</summary>

An alternating sign argument depends on scalar characteristic.

1. If $A^T=-A$ and its size is odd, then $\det A=\det A^T=\det(-A)=-\det A$.
2. Over the reals this forces the determinant to vanish, hence singularity.
3. Over $\mathbb F_2$, the one-by-one matrix $(1)$ satisfies $A^T=-A$ because minus one equals one, but is invertible. Thus skew-symmetry alone is not the same as an alternating form in characteristic two.

**Self-assessment rubric**

- Derive the determinant sign reversal for odd size.
- Use the real characteristic to force determinant zero.
- Verify an explicit invertible skew-symmetric example and explain the scope of the failed sign argument.

</details>
