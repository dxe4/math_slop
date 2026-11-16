# The Itô correction for a square

*Difficulty 5 of 5 · [Probability modeling](index.md) · exercise 15 of 15*

Use Itô's formula on $f(x)=x^2$ for standard Brownian motion to derive $B_t^2=2\int_0^t B_s\,dB_s+t$ and hence $E[B_t^2]=t$. Identify the term absent from the ordinary smooth chain rule.

<details>
<summary>Hint 1</summary>

Here $f'(x)=2x$ and $f''(x)=2$

</details>

<details>
<summary>Hint 2</summary>

A square-integrable Itô integral has mean zero

</details>

<details>
<summary>Worked solution</summary>

Itô's formula gives $d(B_t^2)=2B_t\,dB_t+\frac{1}{2}(2)\,dt=2B_t\,dB_t+dt$. Integrating from $0$ to $t$ and using $B_0=0$ yields $B_t^2=2\int_0^t B_s\,dB_s+t$. The Itô integral has expectation zero under its square-integrability condition, so $E[B_t^2]=t$. The extra $dt$ term is the quadratic-variation correction; an ordinary differentiable path would not produce it.

**Answer.** $B_t^2=2\int_0^t B_s\,dB_s+t$ and $E[B_t^2]=t$; the additional $dt$ is the Itô correction.

</details>

*Tags: Itô formula, Brownian motion, quadratic variation, stochastic calculus*
