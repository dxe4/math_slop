# Recover a projection characteristic polynomial from rank

*Easy · [Linear algebra problems](index.md)*

Work over $\mathbb R$; vectors are columns and all data are dimensionless. A real $5\times5$ matrix $P$ satisfies $P^2=P$ and has rank three. Return the coefficients of $\det(xI-P)$ in increasing powers $1,x,\ldots,x^5$.

```answer
{"answer":{"kind":"vector","expected":["0","0","-1","3","-3","1"],"checker_scope":"Only the requested bounded exact result is checked; no unrestricted proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

The space splits as the kernel and image of an idempotent.

</details>

<details>
<summary>Hint 2</summary>

The image has eigenvalue one and the kernel eigenvalue zero.

</details>

<details>
<summary>Worked solution</summary>

An idempotent gives a direct spectral decomposition without solving a polynomial.

1. Every vector is $(v-Pv)+Pv$, with the two terms in kernel and image respectively; their intersection is zero.
2. The image dimension is three and the kernel dimension two, so the characteristic polynomial is $x^2(x-1)^3$.
3. Expansion gives $x^5-3x^4+3x^3-x^2$, hence the coefficient vector $[0,0,-1,3,-3,1]$.

</details>
