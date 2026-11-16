# Retain the sign of a Jacobian

*Medium · [Multivariable calculus problems](index.md)*

For $T(u,v)=(u+v,u-v)$, find the signed determinant $\det DT$. Do not take an absolute value.

```answer
{"answer":{"kind":"integer","expected":"-2","checker_scope":"Exact requested value, polynomial, vector or matrix only; the explanatory argument is supplied as a worked solution, not automatically certified."}}
```

<details>
<summary>Hint 1</summary>

Use input order $(u,v)$ and output order $(x,y)$.

</details>

<details>
<summary>Hint 2</summary>

An orientation-reversing map has a negative signed determinant.

</details>

<details>
<summary>Worked solution</summary>

Signed determinants encode orientation as well as scale.

1. The derivative matrix is $\begin{pmatrix}1&1\\1&-1\end{pmatrix}$.
2. Its determinant is $1(-1)-1(1)=-2$.
3. The requested signed value is $-2$; an area substitution would instead use its absolute value.

</details>
