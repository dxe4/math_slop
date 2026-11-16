# Compute a derivative after removing constants

*Medium · [Linear algebra problems](index.md)*

Work over $\mathbb R$ in finite dimension; all coordinate entries are dimensionless. Let $D:P_2(\mathbb R)\to P_2(\mathbb R)$ be differentiation and let $U$ be the constant polynomials. Find the induced matrix on $P_2/U$ in the ordered basis $([x],[x^2])$.

```answer
{"answer":{"kind":"matrix","expected":[["0","2"],["0","0"]],"checker_scope":"Only the requested exact finite object is checked; the derivation does not receive an automatic proof verdict.","rows":2,"columns":2}}
```

<details>
<summary>Hint 1</summary>

The derivative sends constants into the same subspace U, so it induces a quotient map.

</details>

<details>
<summary>Hint 2</summary>

Constant outputs disappear as cosets.

</details>

<details>
<summary>Worked solution</summary>

Compute an operator on quotient classes rather than on the original coefficient space.

1. The subspace is invariant because its derivative is zero, so the induced operator is well defined.
2. $D[x]=[1]=0$ in the quotient, while $D[x^2]=[2x]=2[x]$.
3. The two coordinate columns are $(0,0)$ and $(2,0)$, giving the requested matrix.

</details>
