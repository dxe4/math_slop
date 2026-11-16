# Find the shortest integer solution

*Hard · [Linear algebra problems](index.md)*

Among all integer solutions of $x+y+z=0$ and $x+2y+4z=1$, find the minimum value of $x^2+y^2+z^2$.

```answer
{"answer":{"kind":"integer","expected":2,"checker_scope":"Exact stated finite-dimensional answer only; optional personal reasoning is not graded."}}
```

<details>
<summary>Hint 1</summary>

Describe all integer solutions using one integer parameter before minimizing.

</details>

<details>
<summary>Hint 2</summary>

The squared length becomes a quadratic. Compare its real vertex with the permitted integer parameters.

</details>

<details>
<summary>Worked solution</summary>

Combine an affine integer parameterization with discrete quadratic minimization.

1. Subtract the first equation from the second: $y+3z=1$. Thus $y=1-3z$ and $x=2z-1$, with arbitrary $z\in\mathbb Z$.
2. The squared length is $(2z-1)^2+(1-3z)^2+z^2=14z^2-10z+2$.
3. Its real vertex is $z=5/14$, strictly between $0$ and $1/2$. The closest integer is $0$.
4. Equivalently, for $z\ge1$ the expression is at least its value $6$ at $1$, while for $z\le-1$ it is at least its value $26$ at $-1$.
5. At $z=0$, the solution is $(-1,1,0)$ and the squared length is $2$, the minimum.

</details>
