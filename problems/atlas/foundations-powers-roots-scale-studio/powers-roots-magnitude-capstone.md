# Build a scale claim with two independent checks

*Difficulty 3 of 5 · [Powers, roots, and scale solved studio](index.md) · exercise 12 of 12*

Quantity `P=3.6*10^-8 m` and quantity `Q=9.0*10^4 m`. Compute `Q/P` in normalized scientific notation, state the approximate order-of-magnitude separation, and verify the exponent by rewriting both quantities with the same power of ten.

<details>
<summary>Hint 1</summary>

Division subtracts exponents

</details>

<details>
<summary>Hint 2</summary>

Rewrite `Q` using `10^-8` for the second check

</details>

<details>
<summary>Worked solution</summary>

Direct division gives `Q/P=(9.0/3.6)*10^(4-(-8))=2.5*10^12`. Thus Q is about twelve orders of magnitude larger than P. For an independent place-value check, rewrite `Q=9.0*10^4 m=9.0*10^12*10^-8 m`. Relative to one unit of `10^-8 m`, Q contains `9.0*10^12` such units, while P contains 3.6. Their ratio is therefore `(9.0*10^12)/3.6=2.5*10^12`, agreeing with the exponent subtraction. Units cancel in the ratio because both quantities are lengths.

**Answer.** `Q/P=2.5*10^12`, so the separation is about twelve orders of magnitude; the common-`10^-8` rewrite confirms it.

</details>

*Tags: powers-roots, scientific-notation, magnitude, units*
