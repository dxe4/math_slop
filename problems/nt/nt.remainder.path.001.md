# Canonical quotient and remainder: negative dividend division

*Easy · [Number theory](index.md)*

Find integers q,r with $-52 = 11q + r$ and $0 \leq  r < 11$.

```answer
{"answer":{"kind":"integer_pair","expected":{"q":-5,"r":3},"checker_scope":"Checks the authored exact structured answer for this instance. Selection and proof scaffolds assess only the stated narrow task; no unrestricted proof validity is certified."}}
```

<details>
<summary>Hint 1</summary>

Find consecutive multiples of $11$ around $-52$.

</details>

<details>
<summary>Hint 2</summary>

Use the lower multiple so the remainder is nonnegative.

</details>

<details>
<summary>Worked solution</summary>

Canonical remainder bounds select the lower multiple.

1. −55 ≤ −52 &lt; −44, so $q = -5$.
2. The remainder is −52 − (−55) = 3; both the equality and bounds hold.

</details>
