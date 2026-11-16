# Rewrite a cancellation-prone root

*Difficulty 2 of 5 · [Numerical mathematics and certified optimization](index.md) · exercise 2 of 16*

For positive x, rewrite `sqrt(x^2+1)-x` to avoid subtracting nearby large quantities. Explain why the rewrite is exact, why it is usually more stable for large x, and why it does not repair uncertainty already present in x.

<details>
<summary>Hint 1</summary>

Multiply numerator and denominator by the conjugate

</details>

<details>
<summary>Hint 2</summary>

Separate problem conditioning from the evaluation algorithm

</details>

<details>
<summary>Worked solution</summary>

Multiply by the conjugate: `sqrt(x^2+1)-x = [(x^2+1)-x^2]/[sqrt(x^2+1)+x] = 1/[sqrt(x^2+1)+x]`. This is an exact algebraic identity for positive real x, so it changes the evaluation path rather than the mathematical target. For large x, the original expression subtracts two numbers both approximately x, so rounding in either can destroy the small difference, which is approximately `1/(2x)`. The reciprocal form forms a denominator near `2x` and then divides, avoiding that cancellation, subject to overflow-safe evaluation of the square root. If x is uncertain, both formulas evaluate the same sensitive input-dependent function; neither recreates information missing from x. The rewrite addresses algorithmic stability, not data quality.

**Answer.** Use `1/(sqrt(x^2+1)+x)`; it is exactly equal and avoids large-near-large subtraction.

</details>

*Tags: floating-point, cancellation, backward-error*
