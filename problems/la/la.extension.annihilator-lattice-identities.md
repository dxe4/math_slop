# Prove the sum and intersection dual identities

*Medium · [Linear algebra problems](index.md)*

Work over $\mathbb R$ in finite dimension; all coordinate entries are dimensionless. For subspaces $U,W\subset V$, prove $(U+W)^0=U^0\cap W^0$ and $(U\cap W)^0=U^0+W^0$. State where finite dimension is used.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific rubric reflection only; no automatic grading or evidence is supplied."}}
```

<details>
<summary>Hint 1</summary>

Vanishing on a sum is equivalent to vanishing on both summands.

</details>

<details>
<summary>Hint 2</summary>

For the second identity prove containment and compare dimensions using the first identity and the dimension formula.

</details>

<details>
<summary>Model proof</summary>

Containment plus a finite dimension calculation proves the less immediate identity.

1. A functional vanishes on $U+W$ exactly when it vanishes separately on $U$ and $W$, proving the first equality.
2. Any sum of a functional annihilating $U$ and one annihilating $W$ annihilates the intersection, so $U^0+W^0\subseteq(U\cap W)^0$.
3. Writing $n=\dim V$, the dimension of the left side is $(n-\dim U)+(n-\dim W)-(n-\dim(U+W))=n-\dim(U\cap W)$, equal to the right side. Finite dimension is used in the annihilator dimension formula and in concluding equality from equal dimensions.

**Self-assessment rubric**

- Prove both directions of the first identity directly.
- Establish the correct containment for the second identity.
- Compute dimensions and identify the precise finite-dimensional inference.

</details>
