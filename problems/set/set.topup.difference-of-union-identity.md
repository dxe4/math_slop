# Prove a relative difference identity without a universal complement

*Medium · [Set theory](index.md)*

For arbitrary sets A,B,C prove $A\setminus(B\cup C)=(A\setminus B)\cap(A\setminus C)$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

The left side requires membership in A and failure of two alternative memberships.

</details>

<details>
<summary>Hint 2</summary>

Write the exclusion from the union as two separate exclusions.

</details>

<details>
<summary>Model proof</summary>

Relative difference supplies an ambient A without assuming a universal set.

1. For arbitrary x, membership in the left side is equivalent to x in A, x not in B and x not in C.
2. These conditions are equivalent to x in A minus B and x in A minus C.
3. The latter is exactly membership in the right-side intersection, proving the identity for all sets.

**Self-assessment rubric**

- Keep membership in A in both directions.
- Negate union membership as exclusion from both sets.
- Use the resulting iff statement to establish equality.

</details>
