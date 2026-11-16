# Resolve a quadratic into conjugate roots

*Medium · [Complex analysis problems](index.md)*

Solve $z^2-2z+2=0$. Enter two rows $[\operatorname{Re}z,\operatorname{Im}z]$, ordered by increasing imaginary part.

```answer
{"answer":{"kind":"matrix","expected":[[1,-1],[1,1]],"checker_scope":"Exact requested complex value, polynomial, coordinate list or count only; personal reasoning is not automatically graded.","rows":2,"columns":2}}
```

<details>
<summary>Hint 1</summary>

Complete the square around the real midpoint.

</details>

<details>
<summary>Hint 2</summary>

Take both square roots of the resulting negative real value.

</details>

<details>
<summary>Worked solution</summary>

Completing the square displays the conjugate pair.

1. The equation is $(z-1)^2=-1$.
2. Thus $z=1-i$ or $z=1+i$.
3. The requested ordered matrix is $\begin{pmatrix}1&-1\\1&1\end{pmatrix}$.

</details>
