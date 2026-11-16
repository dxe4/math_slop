# One Newton step and its meaning

*Difficulty 4 of 5 · [Change and accumulation](index.md) · exercise 5 of 5*

Starting from $x_0=1.5$, take one Newton step for $x^2-2=0$. Give the resulting rational number and explain geometrically why it is close to $\sqrt{2}$.

<details>
<summary>Hint 1</summary>

Newton uses $x_1=x_0-f(x_0)/f'(x_0)$

</details>

<details>
<summary>Hint 2</summary>

It replaces the curve locally by its tangent

</details>

<details>
<summary>Worked solution</summary>

Here $f(1.5)=2.25-2=0.25$ and $f'(1.5)=3$. Thus $x_1=1.5-0.25/3=3/2-1/12=17/12\approx1.4167$. The tangent line at $x=1.5$ is the local linear approximation to $y=x^2-2$; its $x$-intercept estimates where the curve crosses the axis. Because the function is smooth and the starting point is nearby, the tangent intercept is close to $\sqrt{2}\approx1.4142$.

**Answer.** $x_1=17/12\approx1.4167$, the $x$-intercept of the tangent at $x=1.5$.

</details>

*Tags: Newton method, linearization, approximation*
