# Euler steps for exponential decay

*Difficulty 2 of 5 · [Numerical methods with error awareness](index.md) · exercise 2 of 4*

Use explicit Euler with step $h=0.25$ to approximate y(1) for $y'=-2y$, $y(0)=1$. List all four updates and compare with the exact value $e^{-2}$.

<details>
<summary>Hint 1</summary>

Euler gives $y_{n+1}=y_n+h(-2y_n)$

</details>

<details>
<summary>Hint 2</summary>

Each step multiplies the current value by 1-2h

</details>

<details>
<summary>Worked solution</summary>

With $h=0.25$, the update is $y_{n+1}=y_n-0.5y_n=0.5y_n$. Starting from 1, the values at $t=0.25,0.5,0.75,1$ are 0.5, 0.25, 0.125, and 0.0625. The exact value is $e^{-2}\approx 0.1353$, so this coarse Euler approximation is low by about 0.0728. The steps remain stable here, but h is too large for good accuracy.

**Answer.** Euler gives $y(1)\approx 0.0625$, versus $e^{-2}\approx 0.1353$.

</details>

*Tags: Euler method, time stepping, numerical error*
