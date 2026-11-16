# Locate the invalid premise in a universal-set argument

*Hard · [Set theory](index.md)*

Assume bounded separation is available. Prove there cannot be a set $U$ containing every set as an element. Distinguish the universal-set assumption from the valid separated subset construction.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Inside a proposed U, separation can form the elements that are not members of themselves.

</details>

<details>
<summary>Hint 2</summary>

The universal-set assumption would force that newly formed subset to be an element of U.

</details>

<details>
<summary>Model proof</summary>

Separation inside a fixed set is valid; assuming that fixed set contains all sets creates the contradiction.

1. If a universal set U existed, bounded separation would form $R=\{x\in U:x\notin x\}$. This step alone is legitimate because it starts from the set U.
2. Since R is a set and U is assumed to contain every set, R would belong to U.
3. The defining equivalence then gives R in R exactly when R not in R, a contradiction. Thus the impossible premise is the universal set, not bounded separation.

**Self-assessment rubric**

- Form the subset only inside the hypothesized set U.
- State exactly where containment of every set is used.
- Derive the self-membership equivalence and identify the premise that fails.

</details>
