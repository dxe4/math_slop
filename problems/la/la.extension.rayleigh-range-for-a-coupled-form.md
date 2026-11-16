# Find both Rayleigh extrema

*Medium · [Linear algebra problems](index.md)*

Work over $\mathbb R$; vectors are columns and all data are dimensionless. For $S=\begin{pmatrix}2&1\\1&2\end{pmatrix}$ and real vectors $v=(x,y)^T$ with $x^2+y^2=1$, return \[minimum, maximum\] values of $v^TSv$.

```answer
{"answer":{"kind":"vector","expected":["1","3"],"checker_scope":"Only the requested bounded exact result is checked; no unrestricted proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

Expand the quadratic form using the unit-length condition.

</details>

<details>
<summary>Hint 2</summary>

The inequalities $(x-y)^2\ge0$ and $(x+y)^2\ge0$ bound the mixed term in both directions.

</details>

<details>
<summary>Worked solution</summary>

Establish bounds and equality vectors, not just critical values.

1. The expression is $2+2xy$. Since $-1\le2xy\le1$, it lies between one and three.
2. At $x=y=1/\sqrt2$ the upper value three is attained.
3. At $x=-y=1/\sqrt2$ the lower value one is attained, so the ordered range endpoints are $[1,3]$.

</details>
