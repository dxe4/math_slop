# Complete an energy argument with LaSalle

*Difficulty 4 of 5 · [Differential equations, control, and long-time dynamics audit studio](index.md) · exercise 5 of 14*

For $q'=v$ and $v'=-q-cv$ with $c>0$, use $E=(q^2+v^2)/2$ to prove the origin is asymptotically stable. Explain why $E'$ alone is not strictly negative at every nonzero state.

<details>
<summary>Hint 1</summary>

Differentiate E along the flow

</details>

<details>
<summary>Hint 2</summary>

$E'=0$ on the line $v=0$

</details>

<details>
<summary>Hint 3</summary>

Find the largest invariant subset of that line

</details>

<details>
<summary>Worked solution</summary>

Along a trajectory, $E'=qv+v(-q-cv)=-cv^2\le0$. Positive definiteness and nonincrease give Lyapunov stability and trap trajectories in compact energy disks. The derivative vanishes whenever $v=0$, including points with $q\ne0$, so it is not negative definite. However a point with $v=0$ and $q\ne0$ has $v'=-q\ne0$ and immediately leaves that zero-derivative line. The largest invariant subset of $\{v=0\}$ is therefore only $(0,0)$. LaSalle's invariance principle on each compact energy disk implies every trajectory approaches the origin, giving asymptotic stability.

**Answer.** $E'=-cv^2$; compact energy sublevels give stability and LaSalle reduces the invariant zero-derivative set to the origin, proving attraction.

</details>

*Tags: stability and bifurcation, Lyapunov function, LaSalle, dynamical systems*
