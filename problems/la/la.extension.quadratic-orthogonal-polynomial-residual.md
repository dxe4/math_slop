# Remove both affine components of a quadratic

*Medium · [Linear algebra problems](index.md)*

All data are dimensionless. Work over $\mathbb R$ with column vectors and the Euclidean inner product unless another one is specified. On $P_2(\mathbb R)$ use $\langle f,g\rangle=\int_0^1fg$. Find coefficients $[a,b,c]$ of the monic quadratic $q=a+bx+cx^2$ orthogonal to both $1$ and $x$.

```answer
{"answer":{"kind":"vector","expected":["1/6","-1","1"],"checker_scope":"Only the requested exact scalar or structured answer is checked; an optional mathematical argument is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

The monic condition fixes $c$.

</details>

<details>
<summary>Hint 2</summary>

The two orthogonality integrals give two independent equations for the remaining coefficients.

</details>

<details>
<summary>Worked solution</summary>

Solve a Gram orthogonality system in a function space.

1. Monicity gives $c=1$. Orthogonality to one gives $a+b/2+1/3=0$.
2. Orthogonality to $x$ gives $a/2+b/3+1/4=0$. Subtracting half the first equation yields $b/12+1/12=0$, so $b=-1$.
3. The first equation then gives $a=1/6$. Thus the normalized residual is $x^2-x+1/6$.

</details>
