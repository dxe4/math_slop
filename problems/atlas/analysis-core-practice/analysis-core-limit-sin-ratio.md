# A standard trigonometric limit

*Difficulty 1 of 5 · [Analysis and linear algebra core practice](index.md) · exercise 1 of 12*

Compute $\lim_{x \to 0} \dfrac{\sin(3x)}{x}$, justifying each step from the known fact that $\lim_{u \to 0} \frac{\sin u}{u} = 1$.

<details>
<summary>Hint 1</summary>

Rewrite the expression so that the argument of sine matches the denominator.

</details>

<details>
<summary>Hint 2</summary>

Multiply and divide by $3$.

</details>

<details>
<summary>Worked solution</summary>

Write $\dfrac{\sin(3x)}{x} = 3 \cdot \dfrac{\sin(3x)}{3x}$. As $x \to 0$, the substitution $u = 3x$ also tends to $0$, so $\dfrac{\sin(3x)}{3x} \to 1$ by the standard limit. The constant multiple rule for limits then gives $3 \cdot 1 = 3$. The point of the exercise is that the known limit may only be applied after the argument and the denominator are made equal; the factor $3$ is the price of that alignment.

**Answer.** $3$

</details>

*Tags: limits-continuity, trigonometry, computation*
