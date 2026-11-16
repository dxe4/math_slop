# Why the zero exponent has a condition

*Difficulty 1 of 5 · [Powers, roots, and scale solved studio](index.md) · exercise 3 of 12*

Derive `a^0=1` from a quotient of powers, and explain exactly why this derivation does not assign a value to `0^0`.

<details>
<summary>Hint 1</summary>

Compare `a^m/a^m` with `a^(m-m)`

</details>

<details>
<summary>Hint 2</summary>

Ask when the quotient itself exists

</details>

<details>
<summary>Worked solution</summary>

For `a != 0` and a positive integer `m`, the quotient `a^m/a^m` equals `1`. The quotient law rewrites the same expression as `a^(m-m)=a^0`, so consistency gives `a^0=1` for nonzero `a`. If `a=0`, the starting quotient becomes `0^m/0^m=0/0`, which is undefined. Therefore the derivation has no zero-base case and cannot be used to define `0^0`. Specialized contexts may choose conventions for that symbol, but those conventions are additional choices rather than consequences of this quotient argument.

**Answer.** `a^0=1` follows from `a^m/a^m` only when `a != 0`; at `a=0` the derivation divides by zero.

</details>

*Tags: powers-roots, zero-exponent, domain*
