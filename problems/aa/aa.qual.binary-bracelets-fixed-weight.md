# Apply Burnside with both reflection cycle types

*Hard · [Abstract algebra problems](index.md)*

The dihedral group of a regular octagon acts on binary vertex colorings with exactly $4$ black vertices. Rotations and reflections both identify colorings. How many orbits are there?

```answer
{"answer":{"kind":"integer","expected":"8","checker_scope":"Exact requested finite invariant only. Graduate algebra reasoning, classification hypotheses and proofs are supplied for personal study and are not automatically certified. This new skill does not expand any existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

A fixed coloring is a union of cycles of the acting vertex permutation.

</details>

<details>
<summary>Hint 2</summary>

Separate the two reflection types, and retain the weight-four restriction in every fixed-point count.

</details>

<details>
<summary>Worked solution</summary>

Weighted fixed-point counts distinguish bracelets from necklaces.

1. For the eight rotations, the identity fixes seventy colorings; quarter-turns fix two each, the half-turn fixes six, and the four odd eighth-turns fix none. Their fixed-point total is eighty.
2. Each of four vertex-axis reflections has two fixed vertices and three paired cycles. Weight four occurs by choosing two paired cycles and no fixed vertices, or one paired cycle and both fixed vertices, giving six. Each of four edge-axis reflections has four pairs and also fixes six weight-four colorings.
3. The reflection total is forty-eight, so Burnside gives (80+48)/16=8 orbits.

</details>
