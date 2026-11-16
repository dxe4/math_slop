# Gradient and a directional derivative

*Difficulty 2 of 5 · [Analysis and linear algebra core practice](index.md) · exercise 5 of 12*

Let $f(x, y) = x^2 y + 3y$. Compute $\nabla f$ at $(1, 2)$ and the directional derivative of $f$ at $(1, 2)$ in the direction of the vector $(3, 4)$.

<details>
<summary>Hint 1</summary>

The direction must be a unit vector before you take the dot product with the gradient.

</details>

<details>
<summary>Hint 2</summary>

$(3, 4)$ has length $5$.

</details>

<details>
<summary>Worked solution</summary>

The partial derivatives are $f_x = 2xy$ and $f_y = x^2 + 3$, so $\nabla f(1, 2) = (2 \cdot 1 \cdot 2,\; 1^2 + 3) = (4, 4)$. The direction $(3,4)$ has length $\sqrt{9 + 16} = 5$, so the unit direction is $u = (3/5, 4/5)$. The directional derivative is $D_u f(1,2) = \nabla f(1,2) \cdot u = 4 \cdot \tfrac{3}{5} + 4 \cdot \tfrac{4}{5} = \tfrac{12}{5} + \tfrac{16}{5} = \tfrac{28}{5} = 5.6$. A frequent error is to dot the gradient with the un-normalized direction $(3,4)$, which inflates the answer by the factor $5$; the directional derivative measures rate of change per unit distance, so the unit vector is essential.

**Answer.** $\nabla f(1,2) = (4, 4)$ and $D_u f(1,2) = 28/5 = 5.6$.

</details>

*Tags: multivariable-calculus, gradient, computation*
