# Compress a matrix power to a polynomial

*Medium · [Linear algebra problems](index.md)*

For $A=\begin{pmatrix}1&1\\0&2\end{pmatrix}$, find the polynomial $p(x)$ of degree at most one such that $A^5=p(A)$. Enter $p(x)$, with no excluded real inputs.

```answer
{"answer":{"kind":"expression","expected":"31*x-30","domain":{"variable":"x","excluded":[]},"checker_scope":"Exact stated finite-dimensional answer only; optional personal reasoning is not graded."}}
```

<details>
<summary>Hint 1</summary>

The distinct eigenvalues give an eigenbasis. A polynomial identity can be checked on its eigenvectors.

</details>

<details>
<summary>Hint 2</summary>

A linear polynomial must take the same values as the fifth power at both eigenvalues.

</details>

<details>
<summary>Worked solution</summary>

Interpolate on the spectrum instead of multiplying the matrix five times.

1. The distinct eigenvalues are $1$ and $2$, so $A$ is diagonalizable.
2. Write $p(x)=ax+b$. Agreement with the fifth power requires $a+b=1$ and $2a+b=32$.
3. Subtraction gives $a=31$ and then $b=-30$. Thus $p(x)=31x-30$; it agrees with $x^5$ on an eigenbasis, proving $A^5=31A-30I$. The polynomial is defined on all real inputs.

</details>
