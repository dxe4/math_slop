# Cancel whole multiples before modular multiplication

*Medium · [Number theory](index.md)*

For arbitrary integers a,b,c, find the canonical residue modulo $13$ of (13a+5)(13b-4)-(13c-7).

```answer
{"answer":{"kind":"integer","expected":"0","checker_scope":"Exact requested finite result, set or polynomial identity only. Worked number-theoretic reasoning is not automatically certified; no new same-version checkpoint objective is introduced."}}
```

<details>
<summary>Hint 1</summary>

Replace each bracket by its residue before multiplying.

</details>

<details>
<summary>Hint 2</summary>

Keep the sign when subtracting the final bracket.

</details>

<details>
<summary>Worked solution</summary>

Modular arithmetic removes all variable terms without expanding them.

1. The three bracket residues are five, negative four and negative seven.
2. The full residue is $5(-4)-(-7)=-13$.
3. Its canonical residue modulo thirteen is zero for every integer choice of a,b,c.

</details>
