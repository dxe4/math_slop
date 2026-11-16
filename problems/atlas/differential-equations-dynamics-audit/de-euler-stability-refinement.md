# A stable ODE with an unstable discretization

*Difficulty 3 of 5 · [Differential equations, control, and long-time dynamics audit studio](index.md) · exercise 12 of 14*

Apply explicit Euler to $x'=-4x$. Derive its multiplier, find the positive step range for strict absolute stability, and classify $h=0.25$, $h=0.5$, and $h=0.75$.

<details>
<summary>Hint 1</summary>

Euler gives $x_{n+1}=(1-4h)x_n$

</details>

<details>
<summary>Hint 2</summary>

Require the absolute value of the multiplier to be below one

</details>

<details>
<summary>Hint 3</summary>

Boundary magnitude one is not strict decay

</details>

<details>
<summary>Worked solution</summary>

The multiplier is $R=1-4h$. Strict decay requires |1-4h|<1, which gives 0<h<1/2. At $h=0.25$ the multiplier is zero, so the numerical state reaches zero in one step; this is stable but not an accurate representation of intermediate exact decay. At $h=0.5$ the multiplier is -1, so signs alternate without decay, a stability boundary. At $h=0.75$ the multiplier is -2, so magnitude doubles each step and the numerical solution is unstable although the exact solution decays.

**Answer.** Multiplier 1-4h; strict stability is 0<h<1/2. $h=0.25$ damps to zero, $h=0.5$ alternates, and $h=0.75$ grows with alternating sign.

</details>

*Tags: ordinary differential equations, numerical method, absolute stability, Euler*
