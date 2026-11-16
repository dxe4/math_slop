# Prove a coordinatewise product identity

*Medium · [Set theory](index.md)*

For arbitrary sets A,B,C,D prove $(A\times B)\cap(C\times D)=(A\cap C)\times(B\cap D)$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Begin with an arbitrary ordered pair, not an arbitrary scalar element.

</details>

<details>
<summary>Hint 2</summary>

Both product conditions constrain the first coordinate separately from the second.

</details>

<details>
<summary>Model proof</summary>

An arbitrary-pair membership equivalence proves both inclusions at once.

1. For any ordered pair (x,y), membership in the left side means x is in A and C and y is in B and D.
2. This is equivalent to x in A cap C and y in B cap D, precisely membership in the right side.
3. Both sides contain only ordered pairs, so the equivalence proves equality, including cases where one of the factors is empty.

**Self-assessment rubric**

- Use arbitrary ordered coordinates and state both product conditions.
- Group the two requirements on each coordinate correctly.
- Conclude equality from the complete membership equivalence, including empty factors.

</details>
