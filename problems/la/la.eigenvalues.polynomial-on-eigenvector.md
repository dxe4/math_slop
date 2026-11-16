# Apply a polynomial to an eigenvector

*Easy · [Linear algebra problems](index.md)*

A nonzero vector $v$ satisfies $Av=-2v$ for a real square matrix $A$. Find the scalar $\mu$ for which $(A^2+3A+I)v=\mu v$.

```answer
{"answer":{"kind":"integer","expected":-1,"checker_scope":"Exact stated finite-dimensional answer only; optional personal reasoning is not graded."}}
```

<details>
<summary>Hint 1</summary>

Applying the matrix again squares its eigenvalue on this fixed vector.

</details>

<details>
<summary>Hint 2</summary>

Evaluate the given polynomial at the known eigenvalue.

</details>

<details>
<summary>Worked solution</summary>

A polynomial in a matrix acts on an eigenvector by that polynomial in its eigenvalue.

1. From $Av=-2v$, we have $A^2v=4v$.
2. Therefore $(A^2+3A+I)v=(4-6+1)v=-v$.
3. The requested scalar is $\mu=-1$.

</details>
