# Recover a minimum-norm solution operator

*Medium · [Linear algebra problems](index.md)*

All data are dimensionless. Work over $\mathbb R$ with column vectors and the Euclidean inner product unless another one is specified. Find the Moore-Penrose inverse of $A=\begin{pmatrix}1&1\\0&0\end{pmatrix}$.

```answer
{"answer":{"kind":"matrix","expected":[["1/2","0"],["1/2","0"]],"checker_scope":"Only the requested exact scalar or structured answer is checked; an optional mathematical argument is not automatically graded.","rows":2,"columns":2}}
```

<details>
<summary>Hint 1</summary>

The best fitted output keeps only the first coordinate of the right-hand side.

</details>

<details>
<summary>Hint 2</summary>

Among inputs producing that first coordinate, the shortest splits it equally.

</details>

<details>
<summary>Worked solution</summary>

Derive the pseudoinverse through its least-squares minimum-norm action.

1. For data $b=(b_1,b_2)^T$, the best output is $(b_1,0)^T$, so a fitted input must satisfy $x_1+x_2=b_1$.
2. The unique minimum-norm choice is $x_1=x_2=b_1/2$.
3. Thus the solution operator is the stated matrix. Its products with $A$ are the symmetric projections onto the row and column spaces, verifying the Penrose conditions together with $AA^+A=A$ and $A^+AA^+=A^+$.

</details>
