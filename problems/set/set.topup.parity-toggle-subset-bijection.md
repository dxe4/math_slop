# Construct an involutive pairing of subset families

*Hard · [Set theory](index.md)*

For a finite set A of size $n\geq1$, prove that its even-sized subsets and odd-sized subsets are equinumerous by giving an explicit bijection. Deduce that each family has $2^{n-1}$ members.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Fix one element of the nonempty set A.

</details>

<details>
<summary>Hint 2</summary>

Toggle that element membership; doing the operation twice returns the starting subset.

</details>

<details>
<summary>Model proof</summary>

One fixed membership toggle pairs the two subset families exactly.

1. Choose a in A and define h(S) by adding a if absent and removing it if present.
2. Toggling changes subset size by one, so it exchanges even and odd families. It is its own inverse, hence a bijection between them.
3. The two disjoint families together contain all 2^n subsets. Since their sizes are equal, each has $2^{n-1}$ members.

**Self-assessment rubric**

- Define a membership toggle using a fixed available element.
- Prove it switches parity and is bijective.
- Use the disjoint total subset count to obtain each family size.

</details>
