# Find the smallest universal unit exponent from a supplied unit list

*Easy · [Computational arithmetic problems](index.md)*

The unit residues modulo $8$ are 1,3,5,7, and all their squares are one. Find the least positive exponent e for which a^e is one modulo eight for every unit a.

```answer
{"answer":{"kind":"integer","expected":"2","checker_scope":"Exact requested integer, rational or finite coefficient vector only. The stated theorem or model is part of the supplied mathematics; no learner program or unrestricted proof is run or certified. This new skill does not expand an existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

The supplied squares show one candidate exponent works.

</details>

<details>
<summary>Hint 2</summary>

Check whether exponent one works for every listed unit.

</details>

<details>
<summary>Worked solution</summary>

A universal exponent needs both a working bound and exclusion of smaller positive exponents.

1. Exponent two works for every unit by the given square property.
2. Exponent one fails at the unit three, whose residue is not one.
3. Thus the least universal exponent is two.

</details>
