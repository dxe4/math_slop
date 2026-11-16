# Recognize a saddle

*Difficulty 3 of 5 · [Differential equations and dynamics](index.md) · exercise 3 of 4*

Solve $x'=-x$ and $y'=2y$ with $x(0)=a$, $y(0)=b$. Describe the trajectories on the coordinate axes and explain why the origin is a saddle equilibrium.

<details>
<summary>Hint 1</summary>

Solve the two scalar equations independently

</details>

<details>
<summary>Hint 2</summary>

Compare behavior as t tends to positive infinity

</details>

<details>
<summary>Worked solution</summary>

The solution is $x(t)=ae^{-t}$ and $y(t)=be^{2t}$. On the $x$-axis, $b=0$, so every trajectory approaches the origin as $t\to\infty$. On the $y$-axis, $a=0$, and every nonzero trajectory moves away exponentially as $t\to\infty$. If $b\ne0$, the growing $y$ component eventually dominates even though $x$ decays. The origin therefore attracts along one direction and repels along another, which is exactly saddle behavior.

**Answer.** $(x,y)=(ae^{-t},be^{2t})$; the $x$-axis is stable and the $y$-axis unstable, so the origin is a saddle.

</details>

*Tags: phase plane, linear system, saddle*
