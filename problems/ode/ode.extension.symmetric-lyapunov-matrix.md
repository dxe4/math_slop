# Solve a matrix Lyapunov equation with off-diagonal coupling

*Medium · [Differential equations problems](index.md)*

For $A=\begin{pmatrix}-1&1\\0&-1\end{pmatrix}$ find the symmetric matrix P satisfying A^T\*P+P\*A=-I. Enter its two rows in the coordinate order shown.

```answer
{"answer":{"kind":"matrix","expected":[["1/2","1/4"],["1/4","3/4"]],"rows":2,"columns":2,"checker_scope":"Exact requested Lyapunov calculation only; no proof or broad stability verdict is inferred from the submitted value."}}
```

<details>
<summary>Hint 1</summary>

Write P=\[\[p,q\],\[q,r\]\] before multiplying.

</details>

<details>
<summary>Hint 2</summary>

The off-diagonal equation determines q after the first diagonal equation determines p.

</details>

<details>
<summary>Worked solution</summary>

The matrix equation couples the cross term to the diagonal weights.

1. Matrix multiplication gives A^T\*P+P\*A=\[\[-2p,p-2q\],\[p-2q,2q-2r\]\].
2. Equating with -I gives p=1/2, q=p/2=1/4, and r=q+1/2=3/4.
3. Thus P=\[\[1/2,1/4\],\[1/4,3/4\]\]. Its determinant is 5/16&gt;0 and p&gt;0, so it is positive definite as required for the associated energy interpretation.

</details>
