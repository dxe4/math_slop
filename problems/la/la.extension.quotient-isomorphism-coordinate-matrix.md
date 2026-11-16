# Compute an induced quotient map only after checking its domain

*Medium · [Linear algebra problems](index.md)*

Work over $\mathbb R$. Coordinates are dimensionless and ordered as stated. Let $T:\mathbb R^3\to\mathbb R^2$ be $T(x,y,z)=(x+y,y+z)$ and $U=\operatorname{span}(1,-1,1)$. Give the matrix of the induced map $\overline T:\mathbb R^3/U\to\mathbb R^2$ using ordered input cosets $([e_1],[e_3])$ and the standard output basis.

```answer
{"answer":{"kind":"matrix","expected":[["1","0"],["0","1"]],"checker_scope":"Only the requested exact finite answer is checked; explanatory reasoning is not automatically graded.","rows":2,"columns":2}}
```

<details>
<summary>Hint 1</summary>

First show $U$ lies in the kernel, so the quotient map is defined.

</details>

<details>
<summary>Hint 2</summary>

Check independence of the two cosets before using their images as columns.

</details>

<details>
<summary>Worked solution</summary>

Well-definedness and quotient-basis validity precede a short matrix calculation.

1. $T(1,-1,1)=(0,0)$, so changing a representative by $U$ leaves its output unchanged.
2. If $ae_1+be_3$ lies in $U$, comparison of the second coordinate forces the multiple of $(1,-1,1)$ to be zero; hence both coefficients vanish. The two cosets form a basis of the two-dimensional quotient.
3. Their images are $(1,0)$ and $(0,1)$, giving the identity matrix and proving the induced map is an isomorphism.

</details>
