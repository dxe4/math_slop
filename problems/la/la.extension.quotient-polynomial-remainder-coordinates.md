# Compute coordinates in a polynomial quotient

*Medium · [Linear algebra problems](index.md)*

Work over $\mathbb R$. Coordinates are dimensionless and ordered as stated. In the real vector space $\mathbb R[x]/(x^2+1)$, use the basis $([1],[x])$. Find the coordinates of $[x^5+x^4+2x^2+3]$.

```answer
{"answer":{"kind":"vector","expected":["2","1"],"checker_scope":"Only the requested exact finite answer is checked; explanatory reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

In the quotient, $x^2$ equals minus one.

</details>

<details>
<summary>Hint 2</summary>

Reduce higher powers before collecting the constant and linear coordinates.

</details>

<details>
<summary>Worked solution</summary>

A quotient relation reduces a polynomial to its unique low-degree representative.

1. The relation gives $[x^4]=[1]$ and $[x^5]=[x]$.
2. The remaining constant contribution is $1-2+3=2$.
3. The representative is $2+x$, unique modulo a monic quadratic among degree-below-two polynomials, so its coordinate vector is $[2,1]$.

</details>
