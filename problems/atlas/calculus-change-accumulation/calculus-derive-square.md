# Derivative of x² from first principles

*Difficulty 2 of 5 · [Change and accumulation](index.md) · exercise 2 of 5*

Use the limit definition to derive the derivative of $f(x)=x^2$. Identify the step that would be invalid before taking $h$ to zero.

<details>
<summary>Hint 1</summary>

Expand $(x+h)^2$

</details>

<details>
<summary>Hint 2</summary>

The limit considers nonzero $h$ approaching zero

</details>

<details>
<summary>Worked solution</summary>

The difference quotient is $\frac{(x+h)^2-x^2}{h} = \frac{2xh+h^2}{h}$. For nonzero $h$ this simplifies to $2x+h$. Taking $h \to 0$ yields $f'(x)=2x$. Cancelling $h$ would be invalid if $h$ were already zero, but a limit examines nonzero $h$ arbitrarily close to zero, so cancellation occurs before evaluating the limit.

**Answer.** $f'(x)=2x$; cancel $h$ only for nonzero $h$ before taking the limit.

</details>

*Tags: definition, limit, derivative*
