# Find all second residues compatible with a first congruence

*Medium · [Number theory](index.md)*

For which b in $0\le b<15$ is the system x congruent to 7 modulo 10 and x congruent to b modulo 15 solvable? Return a set.

```answer
{"answer":{"kind":"set","expected":["2","7","12"],"checker_scope":"Exact requested finite result, set or polynomial identity only. Worked number-theoretic reasoning is not automatically certified; no new same-version checkpoint objective is introduced."}}
```

<details>
<summary>Hint 1</summary>

The gcd of the two moduli controls agreement of the residues.

</details>

<details>
<summary>Hint 2</summary>

Reduce the fixed residue seven modulo that gcd.

</details>

<details>
<summary>Worked solution</summary>

Noncoprime CRT compatibility is equality modulo the common gcd.

1. The common gcd is five, so b must be congruent to seven modulo five, or two modulo five.
2. The allowed canonical b are two, seven and twelve.
3. They are all feasible: x=7,17,27 respectively has first residue seven and second residues seven, two, twelve, so no candidate is merely a necessary condition.

</details>
