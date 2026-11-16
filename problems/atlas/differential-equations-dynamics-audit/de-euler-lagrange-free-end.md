# Derive an Euler-Lagrange equation and natural endpoint

*Difficulty 4 of 5 · [Differential equations, control, and long-time dynamics audit studio](index.md) · exercise 9 of 14*

Minimize $J[y]=\frac12\int_0^1(y')^2\,dx$ among sufficiently smooth functions with $y(0)=2$ and free $y(1)$. Derive the interior equation, natural boundary condition, and minimizer. Explain why stationarity is sufficient here.

<details>
<summary>Hint 1</summary>

Integrate $\int_0^1 y'\eta'\,dx$ by parts

</details>

<details>
<summary>Hint 2</summary>

$\eta(0)=0$ but $\eta(1)$ is arbitrary

</details>

<details>
<summary>Hint 3</summary>

The functional is convex in $y'$

</details>

<details>
<summary>Worked solution</summary>

The first variation is $\int_0^1 y'\eta'\,dx=[y'\eta]_0^1-\int_0^1 y''\eta\,dx$. Because $\eta(0)=0$, arbitrary interior variations force $y''=0$, and arbitrary $\eta(1)$ forces the natural condition $y'(1)=0$. A solution of $y''=0$ has constant derivative; the endpoint condition makes it zero, and $y(0)=2$ gives $y(x)=2$. The integrand $(y')^2/2$ is convex and nonnegative, so $J[y]\ge0$ with equality only when $y'=0$ almost everywhere. Hence the stationary function is the global minimizer, not merely a formal critical path.

**Answer.** Euler-Lagrange gives $y''=0$, the free endpoint gives $y'(1)=0$, and the unique minimizer is $y(x)=2$.

</details>

*Tags: calculus of variations, Euler-Lagrange, natural boundary condition, convexity*
