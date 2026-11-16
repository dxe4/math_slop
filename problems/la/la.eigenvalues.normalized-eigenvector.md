# Normalize an eigenvector

*Easy · [Linear algebra problems](index.md)*

For $A=\begin{pmatrix}2&1\\0&3\end{pmatrix}$, find the eigenvector for eigenvalue $3$ whose first coordinate is $1$.

```answer
{"answer":{"kind":"vector","expected":[1,1],"checker_scope":"Exact stated finite-dimensional answer only; optional personal reasoning is not graded."}}
```

<details>
<summary>Hint 1</summary>

Solve the homogeneous system obtained by subtracting the stated eigenvalue from the diagonal.

</details>

<details>
<summary>Hint 2</summary>

Use the prescribed coordinate only after finding the relation between the two coordinates.

</details>

<details>
<summary>Worked solution</summary>

The eigenspace is the kernel of $A-3I$.

1. The equation $(A-3I)(x,y)^T=0$ reduces to $-x+y=0$.
2. Thus the eigenspace consists of multiples of $(1,1)$.
3. The required first coordinate selects $[1,1]$, and multiplication gives $A(1,1)^T=(3,3)^T$.

</details>
