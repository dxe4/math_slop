# Audit a saddle-node normal form

*Difficulty 4 of 5 · [Differential equations, control, and long-time dynamics audit studio](index.md) · exercise 6 of 14*

For $x'=\mu-x^2$, find every equilibrium and its stability for $\mu<0$, $\mu=0$, and $\mu>0$. State why the nonhyperbolic point at $\mu=0$ is a bifurcation boundary rather than a conclusion that every nearby family has the same diagram.

<details>
<summary>Hint 1</summary>

Solve $x^2=\mu$

</details>

<details>
<summary>Hint 2</summary>

Differentiate the vector field with respect to $x$

</details>

<details>
<summary>Hint 3</summary>

A saddle-node theorem also checks parameter transversality and a nonzero second state derivative

</details>

<details>
<summary>Worked solution</summary>

For $\mu<0$ there is no real equilibrium. At $\mu=0$, $x=0$ is the only equilibrium and the state derivative $-2x$ is zero, so it is nonhyperbolic; the vector field is negative on both sides, giving attraction from the right and repulsion toward negative values from the left. For $\mu>0$, equilibria are $x=\pm\sqrt{\mu}$. The derivative $-2x$ is negative at $+\sqrt{\mu}$, so that branch is stable, and positive at $-\sqrt{\mu}$, so that branch is unstable. A general local saddle-node conclusion also requires $f_\mu\ne0$ and $f_{xx}\ne0$ after locating a zero with $f_x=0$. Nonhyperbolicity alone can be degenerate or parameter dependence can merely touch.

**Answer.** No equilibria for mu<0; one semistable nonhyperbolic equilibrium at zero for $\mu=0$; unstable $-\sqrt{\mu}$ and stable $+\sqrt{\mu}$ for mu>0.

</details>

*Tags: stability and bifurcation, saddle-node, nonhyperbolic, normal form*
