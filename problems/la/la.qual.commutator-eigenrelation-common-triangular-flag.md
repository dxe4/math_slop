# Build a common triangular flag from a commutator relation

*Hard · [Linear algebra problems](index.md)*

For complex square matrices satisfying $AB-BA=B$, prove they are simultaneously upper triangular in some basis and B is nilpotent. Do not assume a general Lie-algebra triangularization theorem.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific semantic rubric reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

If B were invertible, multiply the relation by its inverse and take a trace.

</details>

<details>
<summary>Hint 2</summary>

The kernel of B is a nonzero A-invariant subspace. Find a common eigenline there and pass to a quotient.

</details>

<details>
<summary>Model proof</summary>

A trace obstruction supplies an invariant starting line, and induction supplies the whole flag.

1. B cannot be invertible: right multiplication would give $A-BAB^{-1}=I$, whose trace is impossible in positive complex dimension.
2. Thus $\ker B\ne0$. The relation gives $BA=AB-B$, so this kernel is A-invariant. Over the complex field the restriction of A has an eigenvector there, giving a common invariant line on which B is zero.
3. The quotient by that line inherits the same commutator relation. Induct on dimension, lift a common upper-triangular quotient basis and begin with the common eigenvector.
4. The resulting A and B are upper triangular together, and each diagonal entry of B is zero by the inductive construction. Hence B is strictly upper triangular and its dimension-th power is zero.

**Self-assessment rubric**

- Exclude invertible B with the exact trace contradiction.
- Prove invariance of its nonzero kernel and find a complex eigenline.
- Carry the relation to the quotient and construct the full common flag.
- Identify the zero diagonal of B and conclude nilpotence.

</details>
