# Square residues: rule out nonresidue

*Medium · [Number theory](index.md)*

Find every x in $\{0,1,...,6\}$ satisfying $x^{2}$ ≡ $3$ (mod 7). Return {} when there are no roots.

```answer
{"answer":{"kind":"finite_integer_set","expected":[],"checker_scope":"Checks the authored exact structured answer for this instance. Selection and proof scaffolds assess only the stated narrow task; no unrestricted proof validity is certified."}}
```

<details>
<summary>Hint 1</summary>

Enumerate the seven square residues.

</details>

<details>
<summary>Hint 2</summary>

The target must occur in that complete output set to admit a root.

</details>

<details>
<summary>Worked solution</summary>

A complete residue enumeration can prove absence of roots in this finite system.

1. The residues are $0,1,4,2,2,4,1$. None equals $3$.
2. Thus $3$ is not a square residue modulo $7$ and the root set is {}.

</details>
