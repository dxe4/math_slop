# Construct a polynomial spectral projector

*Medium · [Linear algebra problems](index.md)*

Work over $\mathbb R$; vectors are columns and all data are dimensionless. A real matrix is diagonalizable with distinct eigenvalues among $0,2,5$, all three occurring. Find coefficients $[a,b,c]$ of the quadratic $p(x)=a+bx+cx^2$ whose operator $p(A)$ is the identity on the two-eigenspace and zero on the other two eigenspaces.

```answer
{"answer":{"kind":"vector","expected":["0","5/6","-1/6"],"checker_scope":"Only the requested bounded exact result is checked; no unrestricted proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

The polynomial must vanish at the two unwanted eigenvalues.

</details>

<details>
<summary>Hint 2</summary>

Normalize that product by its value at the retained eigenvalue.

</details>

<details>
<summary>Worked solution</summary>

Interpolate the desired action on an eigenbasis.

1. A suitable quadratic has the form $k x(x-5)$.
2. At two this product is minus six, so $k=-1/6$.
3. Thus $p(x)=(5x-x^2)/6$, with coefficients $[0,5/6,-1/6]$. Diagonalizability makes these scalar values the full operator action.

</details>
