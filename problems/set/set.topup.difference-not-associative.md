# Construct a counterexample to an operation association

*Hard · [Set theory](index.md)*

Refute the proposed identity $(A\setminus B)\setminus C=A\setminus(B\setminus C)$ by giving finite sets and computing both sides.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

The right side can recover an element when C removes it from B.

</details>

<details>
<summary>Hint 2</summary>

Try a nonempty element that occurs in all three supplied sets.

</details>

<details>
<summary>Model proof</summary>

One concrete membership disagreement disproves the universal identity.

1. Take A=B=C={1}.
2. Then A minus B is empty, so the left side is empty. But B minus C is empty, so the right side is A={1}.
3. The sides differ, refuting the identity. Parentheses cannot be freely changed for set difference.

**Self-assessment rubric**

- Give finite sets in a common explicit context.
- Compute both grouped expressions under their actual operation order.
- Identify a member of one result absent from the other.

</details>
