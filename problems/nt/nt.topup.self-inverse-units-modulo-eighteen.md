# Filter unit residues by their inverse relation

*Medium · [Number theory](index.md)*

Find every unit residue u with $0\le u<18$ that is its own inverse modulo 18. Return a set.

```answer
{"answer":{"kind":"set","expected":["1","17"],"checker_scope":"Exact requested finite result, set or polynomial identity only. Worked number-theoretic reasoning is not automatically certified; no new same-version checkpoint objective is introduced."}}
```

<details>
<summary>Hint 1</summary>

First list every residue coprime to eighteen.

</details>

<details>
<summary>Hint 2</summary>

A unit is its own inverse exactly when its square is congruent to one.

</details>

<details>
<summary>Worked solution</summary>

Unit classification supplies a complete finite search rather than an unrestricted guess.

1. The units are $1,5,7,11,13,17$, since the modulus has prime divisors two and three.
2. Their squares have residues $1,7,13,13,7,1$ respectively.
3. Thus exactly one and seventeen are their own inverses.

</details>
