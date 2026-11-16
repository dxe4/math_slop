# Logistic growth and carrying capacity

*Difficulty 3 of 5 · [Differential equations and dynamics](index.md) · exercise 2 of 4*

For $P'=P(1-P/100)$ with $P(0)=20$, classify the nonnegative equilibria, solve for $P(t)$, and find when the population first reaches $50$.

<details>
<summary>Hint 1</summary>

The equilibria make $P(1-P/100)$ zero

</details>

<details>
<summary>Hint 2</summary>

A logistic solution has form $100/(1+Ae^{-t})$

</details>

<details>
<summary>Hint 3</summary>

Use $P(0)=20$ to find $A$

</details>

<details>
<summary>Worked solution</summary>

The equilibria are $P=0$ and $P=100$. For $0<P<100$ the derivative is positive, while for $P>100$ it is negative; thus $100$ is attracting and $0$ is repelling from the positive side. Separation, or the standard logistic form, gives $P(t)=100/(1+Ae^{-t})$. The initial condition $20=100/(1+A)$ gives $A=4$. Setting $P=50$ gives $50=100/(1+4e^{-t})$, so $4e^{-t}=1$ and $t=\ln 4$.

**Answer.** $P(t)=100/(1+4e^{-t})$; $P=0$ is unstable, $P=100$ stable, and $P$ reaches $50$ at $t=\ln 4$.

</details>

*Tags: logistic equation, equilibrium, stability*
