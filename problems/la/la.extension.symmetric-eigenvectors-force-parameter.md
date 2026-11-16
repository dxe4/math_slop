# Use symmetry to obtain orthogonality

*Easy · [Linear algebra problems](index.md)*

Work over $\mathbb R$; vectors are columns and all data are dimensionless. A real symmetric matrix has eigenvectors $u=(1,1,0)^T$ and $v=(t,1,2)^T$ for distinct eigenvalues. Find the real parameter $t$.

```answer
{"answer":{"kind":"integer","expected":-1,"checker_scope":"Only the requested bounded exact result is checked; no unrestricted proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

Symmetry equates $\langle Au,v\rangle$ and $\langle u,Av\rangle$.

</details>

<details>
<summary>Hint 2</summary>

Distinct eigenvalues then force the inner product of these vectors to vanish.

</details>

<details>
<summary>Worked solution</summary>

Derive an orthogonality condition from spectral hypotheses.

1. If the eigenvalues are $\lambda\ne\mu$, symmetry gives $(\lambda-\mu)u^Tv=0$.
2. Hence $u^Tv=0$, which here is $t+1=0$.
3. The required parameter is minus one, with both supplied vectors still nonzero.

</details>
