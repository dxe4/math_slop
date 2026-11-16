# Raise a diagonal matrix to a power

*Easy · [Linear algebra problems](index.md)*

Compute $\begin{pmatrix}2&0\\0&-1\end{pmatrix}^{5}$.

```answer
{"answer":{"kind":"matrix","expected":[[32,0],[0,-1]],"checker_scope":"Exact stated finite-dimensional answer only; optional personal reasoning is not graded.","rows":2,"columns":2}}
```

<details>
<summary>Hint 1</summary>

A diagonal matrix acts separately on each coordinate direction.

</details>

<details>
<summary>Hint 2</summary>

Raise the diagonal entries to the stated power; the off-diagonal entries remain zero.

</details>

<details>
<summary>Worked solution</summary>

Powers of a diagonal map are scalar powers on its coordinate eigenvectors.

1. The first coordinate direction is multiplied by $2$ each time, giving $2^5=32$.
2. The second is multiplied by $-1$ five times, giving $(-1)^5=-1$.
3. The result is $\begin{pmatrix}32&0\\0&-1\end{pmatrix}$.

</details>
