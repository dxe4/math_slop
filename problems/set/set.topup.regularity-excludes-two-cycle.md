# Use a stated axiom to rule out membership cycles

*Hard · [Set theory](index.md)*

Assume regularity in this form: every nonempty set S has some y in S with $y\cap S=\varnothing$. Prove there are no sets x,y with x in y and y in x, allowing the possibility x=y.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Apply regularity to the finite set containing the proposed cycle members.

</details>

<details>
<summary>Hint 2</summary>

For either possible chosen member, the other cycle member witnesses a nonempty intersection.

</details>

<details>
<summary>Model proof</summary>

A membership cycle prevents every member of its finite carrier from being disjoint from that carrier.

1. Suppose x in y and y in x, and form the nonempty set S={x,y}.
2. For member x, the object y lies in both x and S, so x cap S is nonempty. For member y, the object x lies in both y and S, so y cap S is nonempty.
3. Thus no member of S is disjoint from S, contradicting regularity. If x=y the same witness argument gives a self-member in the intersection, so that case is excluded too.

**Self-assessment rubric**

- Form a nonempty set containing the proposed cycle.
- For every possible chosen member exhibit an intersection witness.
- Apply the exact regularity statement and include the self-cycle possibility.

</details>
