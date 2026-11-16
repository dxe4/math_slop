# Count a residue class by a cyclic action

*Medium · [Original olympiad-style problems](index.md)*

How many four-element subsets of $\{1,2,\ldots,10\}$ have element sum divisible by five?

```answer
{"answer":{"kind":"integer","expected":"42","checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

Cycle the labels within each block of five so every residue increases by one modulo five.

</details>

<details>
<summary>Hint 2</summary>

Each application changes a four-element sum by four modulo five, covering every residue in an orbit.

</details>

<details>
<summary>Worked solution</summary>

Use a residue-shifting permutation to divide the total equally.

1. Use cycles $(1\ 2\ 3\ 4\ 5)$ and $(6\ 7\ 8\ 9\ 10)$. The induced action increases each subset sum by four modulo five.
2. Every subset orbit has five distinct members, since a shorter return would force a nonzero multiple of four below five to vanish modulo five. Those members have all five sum residues.
3. There are $\binom{10}4=210$ subsets, so one fifth, namely forty-two, have residue zero.

</details>
