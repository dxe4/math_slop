# Euclidean algorithm: trace remainders

*Medium · [Number theory](index.md)*

Complete the Euclidean chain $119=2\cdot51+r_1$, $51=3r_1+r_2$. Return the remainders in r1 and r2, and $\gcd(119,51)$ in gcd.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"r1":17,"r2":0,"gcd":17},"checker_scope":"Checks the authored exact structured answer for this instance. Selection and proof scaffolds assess only the stated narrow task; no unrestricted proof validity is certified."}}
```

<details>
<summary>Hint 1</summary>

Subtract each displayed multiple from the dividend.

</details>

<details>
<summary>Hint 2</summary>

The gcd is the last nonzero remainder.

</details>

<details>
<summary>Worked solution</summary>

Successive divisions preserve the common divisors.

1. r1 = $119 - 102 = 17$ and r2 = $51 - 51 = 0$.
2. The chain stops at 17, so $\gcd (119,51) = 17$.

</details>
