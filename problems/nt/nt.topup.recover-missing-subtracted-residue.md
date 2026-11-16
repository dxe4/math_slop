# Solve a residue relation with a signed input

*Medium · [Number theory](index.md)*

Given $x\equiv-3\pmod {17}$ and 4x-y congruent to 9 modulo 17, find the canonical residue of y.

```answer
{"answer":{"kind":"integer","expected":"13","checker_scope":"Exact requested finite result, set or polynomial identity only. Worked number-theoretic reasoning is not automatically certified; no new same-version checkpoint objective is introduced."}}
```

<details>
<summary>Hint 1</summary>

Substitute the supplied residue of x into the relation.

</details>

<details>
<summary>Hint 2</summary>

Move the subtracted y carefully before reducing the final value.

</details>

<details>
<summary>Worked solution</summary>

Residue equations obey the same additive rearrangements as integer equations.

1. The relation becomes $-12-y\equiv9\pmod {17}$.
2. Thus y is congruent to negative twenty-one.
3. Adding thirty-four gives the canonical residue thirteen.

</details>
