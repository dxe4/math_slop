# Select the minimum-norm exact solution

*Hard · [Linear algebra problems](index.md)*

Among all real vectors $x\in\mathbb R^3$ satisfying $\begin{pmatrix}1&1&0\\0&1&1\end{pmatrix}x=\binom11$, find the one with smallest Euclidean norm. Enter its three coordinates.

```answer
{"answer":{"kind":"vector","expected":["1/3","2/3","1/3"],"checker_scope":"Exact stated finite-dimensional answer only; optional personal reasoning is not graded."}}
```

<details>
<summary>Hint 1</summary>

Exact solutions form an affine line, not a single point. Find its direction.

</details>

<details>
<summary>Hint 2</summary>

The shortest solution is perpendicular to the homogeneous kernel; equivalently, minimize the squared norm along the affine line.

</details>

<details>
<summary>Worked solution</summary>

Project the origin onto an affine solution set rather than choosing an arbitrary exact solution.

1. Writing the middle coordinate as $t$, the equations give $x=(1-t,t,1-t)$.
2. The squared norm is $2(1-t)^2+t^2=3t^2-4t+2=3(t-2/3)^2+2/3$.
3. The unique minimizing parameter is $t=2/3$, yielding $x=(1/3,2/3,1/3)$.
4. This vector satisfies both original equations. The kernel direction is $(-1,1,-1)$, and its dot product with this solution is zero.
5. Therefore every other exact solution adds a nonzero orthogonal kernel component and has strictly larger squared norm.

</details>
