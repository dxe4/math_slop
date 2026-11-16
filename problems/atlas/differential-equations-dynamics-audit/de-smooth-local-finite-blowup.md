# A smooth equation with finite escape time

*Difficulty 3 of 5 · [Differential equations, control, and long-time dynamics audit studio](index.md) · exercise 3 of 14*

Solve $x'=x^2$ with $x(0)=1$, find its maximal forward interval, and explain why smoothness and local uniqueness do not imply global existence.

<details>
<summary>Hint 1</summary>

Separate variables without forgetting the zero equilibrium in the general family

</details>

<details>
<summary>Hint 2</summary>

The denominator reaches zero

</details>

<details>
<summary>Hint 3</summary>

Continuation requires the state to remain in compact subsets

</details>

<details>
<summary>Worked solution</summary>

Separation gives $-1/x=t+C$. The initial condition makes $C=-1$, so $x(t)=1/(1-t)$. It is defined forward only for $0\le t<1$ and becomes unbounded as t approaches 1. The polynomial vector field is smooth and therefore locally Lipschitz, so the solution is locally unique. Picard-Lindelof promises only a local interval. The continuation theorem permits extension while the solution remains in a compact subset of the vector field's domain; here it escapes every bounded set at $t=1$, so there is no contradiction.

**Answer.** $x(t)=1/(1-t)$ on the maximal forward interval [0,1); local smooth well-posedness does not provide an a priori bound preventing blow-up.

</details>

*Tags: ordinary differential equations, blow-up, continuation, theorem boundary*
