# Solve a noncoprime system with its true combined period

*Hard · [Number theory](index.md)*

Find x in $0\le x<36$ with x congruent to 5 modulo 12 and 11 modulo 18.

```answer
{"answer":{"kind":"integer","expected":"29","checker_scope":"Exact requested finite result, set or polynomial identity only. Worked number-theoretic reasoning is not automatically certified; no new same-version checkpoint objective is introduced."}}
```

<details>
<summary>Hint 1</summary>

The residue difference must be divisible by gcd(12,18).

</details>

<details>
<summary>Hint 2</summary>

Write x=5+12k and reduce the remaining coefficient and modulus together.

</details>

<details>
<summary>Worked solution</summary>

Compatibility permits a unique class modulo the lcm rather than the product.

1. The residue difference six is divisible by gcd six, so the compatibility condition holds.
2. Substituting gives $12k\equiv6\pmod {18}$, or $2k\equiv1\pmod3$, hence k congruent to two.
3. Thus $x=29+36t$ and the representative in the specified range is twenty-nine.

</details>
