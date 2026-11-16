# Square residues: all roots in canonical range

*Medium · [Number theory](index.md)*

Find every x in $\{0,1,...,12\}$ satisfying $x^{2}$ ≡ $10$ (mod 13). Return all roots.

```answer
{"answer":{"kind":"finite_integer_set","expected":[6,7],"checker_scope":"Checks the authored exact structured answer for this instance. Selection and proof scaffolds assess only the stated narrow task; no unrestricted proof validity is certified."}}
```

<details>
<summary>Hint 1</summary>

Make a complete square-residue table.

</details>

<details>
<summary>Hint 2</summary>

Once a nonzero root is found, its negative modulo $13$ is another root.

</details>

<details>
<summary>Worked solution</summary>

A complete root set is a preimage, distinct from the image set of all squares.

1. The squares for $x=0$ through $6$ have residues $0,1,4,9,3,12,10$; symmetry covers $x=7$ through $12$.
2. Exactly $x=6$ and $x=7$ give residue 10, so the set is $\{6,7\}$.

</details>
