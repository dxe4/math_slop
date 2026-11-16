# Avoid catastrophic cancellation

*Difficulty 3 of 5 · [Modeling and numerical judgment](index.md) · exercise 3 of 5*

For large positive $x$, the expression $\sqrt{x^2+1}-x$ subtracts nearby numbers. Derive an algebraically equivalent form that is numerically safer and explain why.

<details>
<summary>Hint 1</summary>

Multiply numerator and denominator by the conjugate

</details>

<details>
<summary>Hint 2</summary>

The original loses leading significant digits

</details>

<details>
<summary>Worked solution</summary>

Multiply by the conjugate: $\sqrt{x^2+1}-x = \frac{(x^2+1)-x^2}{\sqrt{x^2+1}+x} = \frac{1}{\sqrt{x^2+1}+x}$. The original computes two numbers both near $x$ and subtracts them, so rounded leading digits cancel and the small remainder may have little relative accuracy. The transformed expression divides by a well-resolved sum and avoids that loss.

**Answer.** Use $\frac{1}{\sqrt{x^2+1}+x}$, which avoids subtracting nearly equal large values.

</details>

*Tags: floating point, stability, cancellation*
