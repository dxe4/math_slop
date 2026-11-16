# Cancel only what the modulus permits

*Difficulty 3 of 5 · [Number theory and cryptography audit studio](index.md) · exercise 2 of 13*

Solve 18x congruent to 30 modulo 42. List every solution class modulo 42, and diagnose why simply cancelling 18 as though it were a nonzero real number is invalid.

<details>
<summary>Hint 1</summary>

Compute gcd(18,42)

</details>

<details>
<summary>Hint 2</summary>

After dividing the coefficient, right side, and modulus by the gcd, invert 3 modulo 7

</details>

<details>
<summary>Hint 3</summary>

A solution modulo 7 lifts to six classes modulo 42

</details>

<details>
<summary>Worked solution</summary>

Here $g=gcd(18,42)=6$, and 6 divides 30, so solutions exist. Divide the entire divisibility statement 42 | (18x-30) by 6 to obtain 7 | (3x-5), or 3x congruent to 5 modulo 7. The inverse of 3 modulo 7 is 5, so x congruent to 25 congruent to 4 modulo 7. Modulo 42 this gives exactly six classes: 4, 11, 18, 25, 32, and 39. Substitution confirms each. Multiplication by 18 modulo 42 is not injective because 18 is not a unit: for example 18·0 and 18·7 are both 0 modulo 42. Therefore an unrestricted cancellation law cannot hold. The gcd theorem, not visual cancellation, controls both existence and the number of solutions.

**Answer.** $x\equiv 4$ (mod 7), namely $x\equiv 4,11,18,25,32,39$ (mod 42); six solutions occur because $gcd(18,42)=6$.

</details>

*Tags: linear congruence, modular inverse, cancellation*
