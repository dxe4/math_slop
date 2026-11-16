# Connect a heat mode to energy decay

*Difficulty 4 of 5 · [Differential equations, control, and long-time dynamics audit studio](index.md) · exercise 7 of 14*

On $0<x<L$ with zero endpoint values, verify that $u(x,t)=\exp[-\kappa(\pi/L)^2t]\sin(\pi x/L)$ solves $u_t=\kappa u_{xx}$. Compute the ratio of $L^2$ energy at time $t$ to its initial value and connect it to the energy identity.

<details>
<summary>Hint 1</summary>

Two $x$ derivatives multiply the sine by $-(\pi/L)^2$

</details>

<details>
<summary>Hint 2</summary>

Energy is one half of $\int u^2$

</details>

<details>
<summary>Hint 3</summary>

Squaring the amplitude doubles the decay exponent

</details>

<details>
<summary>Worked solution</summary>

Differentiating in time gives $u_t=-\kappa(\pi/L)^2u$. Two spatial derivatives give $u_{xx}=-(\pi/L)^2u$, so $u_t=\kappa u_{xx}$, and the sine vanishes at both endpoints. Since the whole field amplitude is multiplied by $\exp[-\kappa(\pi/L)^2t]$, squared $L^2$ norm and energy are multiplied by $\exp[-2\kappa(\pi/L)^2t]$. The general identity $E'=-\kappa\int u_x^2\,dx$ gives equality $E'=-2\kappa(\pi/L)^2E$ for this first eigenmode, matching the exact ratio. Higher modes decay faster.

**Answer.** It is an exact fixed-end heat mode and $E(t)/E(0)=\exp[-2\kappa(\pi/L)^2t]$.

</details>

*Tags: partial differential equations, Fourier methods, heat equation, energy*
