# Compute a form-adjoint without a positive metric

*Medium · [Linear algebra problems](index.md)*

On $\mathbb R^2$ use $B(x,y)=x^TJy$, $J=\begin{pmatrix}0&1\\-1&0\end{pmatrix}$. For $A=\begin{pmatrix}1&2\\3&4\end{pmatrix}$ find $A^\sharp$ defined by $B(Ax,y)=B(x,A^\sharp y)$.

```answer
{"answer":{"kind":"matrix","expected":[["4","-2"],["-3","1"]],"checker_scope":"Only the requested finite invariant or rational coordinate result is checked; form classification and reasoning are not automatically certified.","rows":2,"columns":2}}
```

<details>
<summary>Hint 1</summary>

Equating the two bilinear expressions gives $JA^\sharp=A^TJ$.

</details>

<details>
<summary>Hint 2</summary>

Here $J^{-1}=-J$.

</details>

<details>
<summary>Worked solution</summary>

A bilinear adjoint exists from nondegeneracy, independently of positivity.

1. The defining equality gives $A^\sharp=J^{-1}A^TJ$.
2. Compute $A^TJ=\begin{pmatrix}-3&1\\-4&2\end{pmatrix}$ and multiply on the left by $-J$.
3. The resulting matrix is $\begin{pmatrix}4&-2\\-3&1\end{pmatrix}$. It is the adjugate in this two-dimensional case, not the Euclidean transpose.

</details>
