# Associativity in a three-digit machine

*Difficulty 1 of 5 · [Numerical mathematics and certified optimization](index.md) · exercise 1 of 16*

A teaching machine keeps three significant decimal digits and rounds to nearest after every addition. Compute `(1.00 + 0.004) + 0.004` and `1.00 + (0.004 + 0.004)`. Explain what the difference does and does not prove.

<details>
<summary>Hint 1</summary>

Round after the first parenthesized addition

</details>

<details>
<summary>Hint 2</summary>

The exact sums are equal before rounding

</details>

<details>
<summary>Worked solution</summary>

For the left association, `1.00+0.004=1.004`, which rounds to `1.00` at three significant digits. Adding the second `0.004` again forms `1.004` and rounds to `1.00`. For the right association, the inner sum is `0.008`, representable as `0.00800` at this precision; then `1.00+0.008=1.008`, which rounds to `1.01`. Thus the stored results are `1.00` and `1.01`. The example proves that this floating-point addition rule is not associative. It does not prove that one ordering is always more accurate, nor that exact real addition is nonassociative. Accuracy depends on the magnitudes, signs, ordering, and summation algorithm.

**Answer.** Left association gives 1.00; right association gives 1.01, demonstrating nonassociative rounded addition.

</details>

*Tags: floating-point, rounding, counterexample*
