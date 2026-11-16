# Square residues: enumerate all square residues

*Medium · [Number theory](index.md)*

List every canonical square residue modulo $11$, including $0$: compute $x^{2}$ mod $11$ for x in $\{0,1,...,10\}$ and return the distinct residues.

```answer
{"answer":{"kind":"finite_integer_set","expected":[0,1,3,4,5,9],"checker_scope":"Checks the authored exact structured answer for this instance. Selection and proof scaffolds assess only the stated narrow task; no unrestricted proof validity is certified."}}
```

<details>
<summary>Hint 1</summary>

Enumerate all eleven representatives, then remove duplicates.

</details>

<details>
<summary>Hint 2</summary>

The residues for x and $11-x$ agree.

</details>

<details>
<summary>Worked solution</summary>

A residue image is a set of output classes, so repeated outputs count once.

1. For $x=0$ through $5$ the square residues are $0,1,4,9,5,3$; the remaining representatives repeat these by symmetry.
2. The complete distinct set is $\{0,1,3,4,5,9\}$.

</details>
