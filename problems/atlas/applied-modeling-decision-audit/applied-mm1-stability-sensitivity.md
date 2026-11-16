# Queue delay near the capacity boundary

*Difficulty 3 of 5 · [Applied modeling and decision audit studio](index.md) · exercise 6 of 12*

Under M/M/1 assumptions, compute utilization, mean system time, mean queue wait, and mean number in system for $\lambda=9$ and $\mu=12$ customers per hour. Then explain why $\lambda=12$ has no stationary answer.

<details>
<summary>Hint 1</summary>

$W=1/(\mu-\lambda)$

</details>

<details>
<summary>Hint 2</summary>

$Wq=\lambda/[\mu(\mu-\lambda)]$

</details>

<details>
<summary>Hint 3</summary>

Use Little's law

</details>

<details>
<summary>Worked solution</summary>

Utilization is $\rho=9/12=0.75$. Mean system time is $W=1/(12-9)=1/3$ hour, or 20 minutes. Mean queue wait is $W_q=9/[12(3)]=1/4$ hour, or 15 minutes; the remaining five minutes is mean service. Little's law gives $L=\lambda W=9/3=3$ customers. At $\lambda=\mu$ the geometric stationary probabilities cannot normalize and the formulas diverge. A negative or infinite-looking algebraic extension is not a steady wait; the stability hypothesis $\lambda<\mu$ has failed.

**Answer.** $\rho=0.75$, $W=20$ minutes, $Wq=15$ minutes, $L=3$; at $\lambda=\mu$ no stationary M/M/1 distribution exists.

</details>

*Tags: operations research, queue, Little's law, stability*
