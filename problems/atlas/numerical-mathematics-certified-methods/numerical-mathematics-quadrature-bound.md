# A composite Simpson error bound

*Difficulty 3 of 5 · [Numerical mathematics and certified optimization](index.md) · exercise 7 of 16*

Use composite Simpson's bound `|E| <= (b-a) h^4 max|f^(4)| / 180` to bound the error for `integral_0^1 e^x dx` with four equal subintervals. State every hypothesis used and compare the bound with an estimator claim.

<details>
<summary>Hint 1</summary>

Here h=1/4 and the fourth derivative is e^x

</details>

<details>
<summary>Hint 2</summary>

The maximum on [0,1] is e

</details>

<details>
<summary>Worked solution</summary>

The function has a continuous fourth derivative on `[0,1]`, and `f^(4)(x)=e^x`, whose maximum is e. Composite Simpson requires an even number of equal subintervals; four satisfies that requirement and gives `h=1/4`. Thus `|E|<=1·(1/4)^4·e/180=e/(180·256)=e/46080`, approximately `5.90×10^-5`. This is a proved upper bound under the stated formula and exact function-evaluation model; floating-point evaluation contributes a separate term. An adaptive or nested-rule estimator instead infers error from differences between related approximations and may be much sharper, but it is not automatically a rigorous bound for arbitrary functions. The labels bound and estimate must remain distinct.

**Answer.** The bound is `e/46080`, about `5.90e-5`, assuming a continuous fourth derivative and exact composite Simpson setup.

</details>

*Tags: numerical-integration, simpson-rule, error-bound*
