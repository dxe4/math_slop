# Parameterize a homogeneous kernel

*Medium · [Linear algebra problems](index.md)*

For $x+2y-z=0$, $2x+4y-2z=0$, $3x+6y-3z=0$, use free coordinates $y,z$. Enter a two-row matrix: row 1 is the solution with $(y,z)=(1,0)$; row 2 uses $(y,z)=(0,1)$.

```answer
{"answer":{"kind":"matrix","expected":[[-2,1,0],[1,0,1]],"checker_scope":"Exact stated finite-dimensional answer only; optional personal reasoning is not graded.","rows":2,"columns":3}}
```

<details>
<summary>Hint 1</summary>

Decide how many of the displayed equations impose genuinely different conditions.

</details>

<details>
<summary>Hint 2</summary>

Solve the remaining condition for the first coordinate and separate the two free parameters.

</details>

<details>
<summary>Worked solution</summary>

One independent equation leaves two freely chosen coordinates.

1. The second and third equations are multiples of the first, so only $x=-2y+z$ remains.
2. The general solution is $y(-2,1,0)+z(1,0,1)$.
3. The requested ordered rows are therefore $\begin{pmatrix}-2&1&0\\1&0&1\end{pmatrix}$. Their distinct free-coordinate positions also show independence.

</details>
