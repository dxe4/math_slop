# Complete missing prime exponents to a cube

*Medium · [Number theory](index.md)*

Find the least positive integer m for which $72m$ is a perfect cube. Return multiplier and cube\_root.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"multiplier":"3","cube_root":"6"},"checker_scope":"Exact requested finite result, set or polynomial identity only. Worked number-theoretic reasoning is not automatically certified; no new same-version checkpoint objective is introduced."}}
```

<details>
<summary>Hint 1</summary>

Every prime exponent in a cube is a multiple of three.

</details>

<details>
<summary>Hint 2</summary>

Choose the smallest nonnegative exponent increments.

</details>

<details>
<summary>Worked solution</summary>

Prime exponent congruences determine the minimal multiplier.

1. The factorization is $72=2^3 3^2$. The exponent of two already fits a cube, while three needs one more factor.
2. The least multiplier is therefore three, with no extra prime factors.
3. Then $72\cdot3=216=6^3$, so the multiplier is three and the cube root six.

</details>
