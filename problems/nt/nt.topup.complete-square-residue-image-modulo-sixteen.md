# Determine the image of the square map

*Medium · [Number theory](index.md)*

Find the complete set of canonical residues of $x^2$ modulo 16 as x ranges over all integers.

```answer
{"answer":{"kind":"set","expected":["0","1","4","9"],"checker_scope":"Exact requested finite result, set or polynomial identity only. Worked number-theoretic reasoning is not automatically certified; no new same-version checkpoint objective is introduced."}}
```

<details>
<summary>Hint 1</summary>

Separate even and odd representatives.

</details>

<details>
<summary>Hint 2</summary>

Negating a representative does not change its square residue.

</details>

<details>
<summary>Worked solution</summary>

Parity and sign symmetry reduce a complete finite image calculation.

1. Even residues have squares zero or four modulo sixteen, since $x=2k$ gives $x^2=4k^2$ and a square modulo four is zero or one.
2. Odd representatives 1,3,5,7 have squares congruent to 1,9,9,1; their negatives cover all other odd classes.
3. Thus the complete image is $\{0,1,4,9\}$, and each listed residue is attained.

</details>
