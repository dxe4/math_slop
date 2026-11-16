# Growth from a differential law

*Difficulty 2 of 5 · [Differential equations and dynamics](index.md) · exercise 1 of 4*

Solve $y'=3y$ with $y(0)=2$, verify the solution by differentiation, and find the first time at which $y$ has doubled.

<details>
<summary>Hint 1</summary>

Separate $dy/y=3\,dt$ or recall exponential growth

</details>

<details>
<summary>Hint 2</summary>

Doubling means $y=4$

</details>

<details>
<summary>Worked solution</summary>

Separating and integrating gives $\ln|y|=3t+C$, so the positive initial value yields $y=Ce^{3t}$. From $y(0)=2$, $C=2$ and $y(t)=2e^{3t}$. Differentiation gives $y'=6e^{3t}=3(2e^{3t})=3y$, so it checks. Doubling requires $2e^{3t}=4$, hence $e^{3t}=2$ and $t=\frac{\ln 2}{3}$.

**Answer.** $y(t)=2e^{3t}$, with doubling time $\frac{\ln 2}{3}$.

</details>

*Tags: initial value problem, exponential growth, verification*
