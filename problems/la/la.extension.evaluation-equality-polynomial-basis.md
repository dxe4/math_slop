# Build a normalized polynomial basis from two-point equality

*Medium · [Linear algebra problems](index.md)*

Work over $\mathbb R$. Coordinates are dimensionless and ordered as stated. Let $V=\{p\in P_3(\mathbb R):p(1)=p(-1)\}$. Give a three-row coefficient matrix for its basis with leading degrees $0,2,3$, each monic, with all other free coefficients zero. Columns correspond to $1,x,x^2,x^3$.

```answer
{"answer":{"kind":"matrix","expected":[["1","0","0","0"],["0","0","1","0"],["0","-1","0","1"]],"checker_scope":"Only the requested exact finite answer is checked; explanatory reasoning is not automatically graded.","rows":3,"columns":4}}
```

<details>
<summary>Hint 1</summary>

Write a general cubic and compare its two evaluations.

</details>

<details>
<summary>Hint 2</summary>

The condition relates the linear and cubic coefficients; the constant and quadratic coefficients are free.

</details>

<details>
<summary>Worked solution</summary>

An evaluation relation couples coefficients rather than deleting all odd powers.

1. For $p=a+bx+cx^2+dx^3$, the equality gives $2b+2d=0$, so $b=-d$.
2. Therefore $p=a+cx^2+d(x^3-x)$ with three independent scalar parameters.
3. The normalized basis is $(1,x^2,x^3-x)$, giving the requested coefficient rows.

</details>
