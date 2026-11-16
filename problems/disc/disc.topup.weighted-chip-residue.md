# Choose a weighted residue invariant for two move types

*Hard · [Discrete mathematics](index.md)*

Begin with $7$ black chips and $4$ white chips. A move replaces two black chips by one white chip, or two white chips by one black chip, whenever the selected chips exist. Prove that a single black chip cannot be the final state.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required objective slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

The total chip count decreases, so it is not a preserved value.

</details>

<details>
<summary>Hint 2</summary>

Try assigning different weights to the two colors and comparing weighted sums modulo three.

</details>

<details>
<summary>Model proof</summary>

A residue invariant survives both replacement rules.

1. Give a black chip weight one and a white chip weight two. The weighted sum is black count plus twice white count, considered modulo three.
2. Replacing two black by one white changes the weight by zero. Replacing two white by one black changes it by -3. Thus the residue is invariant.
3. The initial weight is 7+8=15, of residue zero. One black chip has residue one, so that target state cannot occur.

**Self-assessment rubric**

- Define a quantity whose residue is meaningful for every valid state.
- Check preservation separately for both allowed move types.
- Compare the initial and target residues to prove impossibility.

</details>
