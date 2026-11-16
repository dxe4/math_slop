# Trapezoidal quadrature and curvature

*Difficulty 2 of 5 · [Numerical methods with error awareness](index.md) · exercise 3 of 4*

Approximate the integral of $x^2$ from 0 to 2 using the composite trapezoidal rule with two equal subintervals. Compare with the exact integral and explain the sign of the error geometrically.

<details>
<summary>Hint 1</summary>

The nodes are 0, 1, and 2 with $h=1$

</details>

<details>
<summary>Hint 2</summary>

For a convex graph, secant lines lie above the curve

</details>

<details>
<summary>Worked solution</summary>

The composite trapezoidal rule gives $(h/2)[f(0)+2f(1)+f(2)]=(1/2)[0+2\cdot 1+4]=3$. Exactly, the integral is $[x^3/3]_0^2=8/3$. The approximation error is $3-8/3=1/3$, an overestimate. Since $x^2$ is convex, each straight secant forming the top of a trapezoid lies above the graph between its endpoints, predicting the positive error.

**Answer.** Trapezoidal estimate 3; exact value 8/3; overestimate by 1/3.

</details>

*Tags: trapezoidal rule, integration, convexity*
