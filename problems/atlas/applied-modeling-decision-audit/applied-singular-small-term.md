# A small coefficient with an order-one boundary job

*Difficulty 4 of 5 · [Applied modeling and decision audit studio](index.md) · exercise 2 of 12*

For $\varepsilon y''+y'=0$ on $0\le x\le1$ with $y(0)=0$ and $y(1)=1$, explain why setting $\varepsilon=0$ is singular. Solve the equation for $\varepsilon>0$ and identify the rapid length scale.

<details>
<summary>Hint 1</summary>

The reduced equation loses one derivative

</details>

<details>
<summary>Hint 2</summary>

Solve for y prime first

</details>

<details>
<summary>Hint 3</summary>

An exponential contains x/epsilon

</details>

<details>
<summary>Worked solution</summary>

At $\varepsilon=0$ the equation becomes $y'=0$, whose constant solutions cannot satisfy both different boundary values; order has fallen from two to one. For $\varepsilon>0$, $y'=A\exp(-x/\varepsilon)$, so $y=B-A\varepsilon\exp(-x/\varepsilon)$. Enforcing endpoints gives $y(x)=[1-\exp(-x/\varepsilon)]/[1-\exp(-1/\varepsilon)]$. The solution changes from zero to near one over $x$ of order $\varepsilon$, so $\varepsilon y''$ remains order one in a boundary layer even though $\varepsilon$ is small. Pointwise deletion is not uniformly valid.

**Answer.** The reduced problem loses a boundary condition; $y=(1-e^{-x/\varepsilon})/(1-e^{-1/\varepsilon})$ has a boundary layer of width $O(\varepsilon)$.

</details>

*Tags: scaling, singular perturbation, boundary layer, limiting case*
