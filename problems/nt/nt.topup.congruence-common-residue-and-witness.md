# Connect residue agreement with an integer difference witness

*Medium · [Number theory](index.md)*

For $a=-125$ and b=43, return common\_residue modulo 12 and witness k in a-b=12k. Use the canonical residue from 0 through 11.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"common_residue":"7","witness":"-14"},"checker_scope":"Exact requested finite result, set or polynomial identity only. Worked number-theoretic reasoning is not automatically certified; no new same-version checkpoint objective is introduced."}}
```

<details>
<summary>Hint 1</summary>

Reduce the negative input using a nonnegative remainder.

</details>

<details>
<summary>Hint 2</summary>

The difference witness has its own sign.

</details>

<details>
<summary>Worked solution</summary>

Equal residues and divisible difference express the same congruence.

1. The equations are $-125=12(-11)+7$ and $43=12(3)+7$.
2. Their difference is $-168=12(-14)$.
3. Thus the common canonical residue is seven and the integer difference witness is negative fourteen.

</details>
