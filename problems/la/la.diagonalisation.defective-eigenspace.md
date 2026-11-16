# Count eigenspace directions

*Easy · [Linear algebra problems](index.md)*

For $A=\begin{pmatrix}2&1\\0&2\end{pmatrix}$, find the dimension of the eigenspace for eigenvalue $2$.

```answer
{"answer":{"kind":"integer","expected":1,"checker_scope":"Exact stated finite-dimensional answer only; optional personal reasoning is not graded."}}
```

<details>
<summary>Hint 1</summary>

An eigenspace is the kernel after subtracting its eigenvalue times the identity.

</details>

<details>
<summary>Hint 2</summary>

Count free coordinates in that homogeneous system.

</details>

<details>
<summary>Worked solution</summary>

Algebraic repetition does not by itself give more independent eigenvectors.

1. $A-2I=\begin{pmatrix}0&1\\0&0\end{pmatrix}$, so the eigenvector condition is $y=0$.
2. The first coordinate is arbitrary; the eigenspace is $\operatorname{span}\{(1,0)\}$.
3. Its dimension is $1$, although the characteristic root has multiplicity two.

</details>
