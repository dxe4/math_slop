# Keep the boundary work in wave energy

*Difficulty 4 of 5 · [Differential equations, control, and long-time dynamics audit studio](index.md) · exercise 8 of 14*

For $u_{tt}=c^2u_{xx}$ on $0<x<L$, derive the time derivative of $E=\frac12\int_0^L(u_t^2+c^2u_x^2)\,dx$. State conditions that conserve energy and explain what a driven endpoint changes.

<details>
<summary>Hint 1</summary>

Integrate the u_t u_xx term by parts

</details>

<details>
<summary>Hint 2</summary>

The interior terms cancel

</details>

<details>
<summary>Hint 3</summary>

The remaining term is boundary power

</details>

<details>
<summary>Worked solution</summary>

Differentiation gives $E'=\int[u_tu_tt+c^2u_xu_xt]dx$. Substitute $u_tt=c^2u_xx$ and integrate the first term by parts: $c^2$ integral $u_tu_xx=c^2[u_tu_x]_0^L-c^2$ integral u_xtu_x. The interior integral cancels the second energy term, leaving $E'=c^2[u_tu_x]_0^L$. Fixed endpoints have $u_t=0$ and conserve energy; suitable zero-flux endpoints $u_x=0$ also do. A moving endpoint can have nonzero u_tu_x and inject or remove energy, so numerical energy change must be compared with this work.

**Answer.** $E'=c^2[u_tu_x]_0^L$; fixed or zero-flux endpoints conserve it, while a driven endpoint supplies boundary power.

</details>

*Tags: partial differential equations, wave equation, boundary condition, energy*
