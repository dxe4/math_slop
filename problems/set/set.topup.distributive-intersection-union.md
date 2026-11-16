# Prove distributivity from membership definitions

*Medium · [Set theory](index.md)*

For arbitrary sets A,B,C prove $A\cap(B\cup C)=(A\cap B)\cup(A\cap C)$ using an arbitrary element.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Intersection means both conditions, while union means at least one.

</details>

<details>
<summary>Hint 2</summary>

The common A condition can be combined with either of the two alternatives.

</details>

<details>
<summary>Model proof</summary>

The set identity follows from a complete elementwise logical equivalence.

1. For arbitrary x, left-side membership means x is in A and is in B or C.
2. This is equivalent to x being in both A,B or being in both A,C.
3. That is exactly right-side membership. The equivalence for every x proves equality.

**Self-assessment rubric**

- Start with a completely arbitrary object and the membership definitions.
- Distribute the common conjunction across the disjunction correctly.
- Establish both directions rather than only one inclusion.

</details>
