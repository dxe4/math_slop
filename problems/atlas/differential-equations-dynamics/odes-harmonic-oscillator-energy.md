# An oscillator and its conserved energy

*Difficulty 3 of 5 · [Differential equations and dynamics](index.md) · exercise 4 of 4*

Solve $x''+4x=0$ with $x(0)=3$ and $x'(0)=-2$. Find its period and verify that $E=\frac{1}{2}(x')^2+2x^2$ has the same value at all times.

<details>
<summary>Hint 1</summary>

Use $x=A\cos(2t)+B\sin(2t)$

</details>

<details>
<summary>Hint 2</summary>

Differentiate $E$ and substitute $x''=-4x$

</details>

<details>
<summary>Worked solution</summary>

The general solution is $x=A\cos(2t)+B\sin(2t)$. The initial position gives $A=3$. Since $x'=-2A\sin(2t)+2B\cos(2t)$, $x'(0)=2B=-2$ and $B=-1$. Thus $x=3\cos(2t)-\sin(2t)$, whose angular frequency $2$ gives period $2\pi/2=\pi$. Also $E'=x'x''+4xx'=x'(x''+4x)=0$, so $E$ is constant. At $t=0$ it equals $\frac{1}{2}(-2)^2+2\cdot3^2=2+18=20$.

**Answer.** $x(t)=3\cos(2t)-\sin(2t)$, period $\pi$, and conserved energy $E=20$.

</details>

*Tags: harmonic oscillator, conservation law, second-order ODE*
