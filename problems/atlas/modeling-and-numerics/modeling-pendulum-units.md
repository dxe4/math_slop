# Pendulum period from dimensions

*Difficulty 3 of 5 · [Modeling and numerical judgment](index.md) · exercise 1 of 5*

Assume the small-angle period $T$ of a pendulum depends only on its length $L$ and gravitational acceleration $g$. Use dimensions to show $T$ must be a dimensionless constant times $\sqrt{L/g}$.

<details>
<summary>Hint 1</summary>

Write $T=C L^a g^b$

</details>

<details>
<summary>Hint 2</summary>

Use $[g]=\mathrm{length}/\mathrm{time}^2$

</details>

<details>
<summary>Worked solution</summary>

Suppose $T=C L^a g^b$. Dimensions of the right side are $\mathrm{length}^{a+b}\mathrm{time}^{-2b}$. Matching $\mathrm{time}^1$ requires $-2b=1$, so $b=-1/2$, and $a+b=0$, so $a=1/2$. Therefore $T=C L^{1/2}g^{-1/2}=C\sqrt{L/g}$. Dimensional analysis cannot determine the dimensionless constant $C$ (which the small-angle model gives as $2\pi$).

**Answer.** $T=C\sqrt{L/g}$, where dimensions alone cannot determine $C$.

</details>

*Tags: dimensions, scaling, mechanics*
