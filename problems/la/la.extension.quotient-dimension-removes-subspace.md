# Count dimensions after a quotient

*Easy · [Linear algebra problems](index.md)*

Work over $\mathbb R$ in finite dimension; all coordinate entries are dimensionless. If $\dim V=7$ and $\dim U=3$, find $\dim(V/U)$.

```answer
{"answer":{"kind":"integer","expected":4,"checker_scope":"Only the requested exact finite object is checked; the derivation does not receive an automatic proof verdict."}}
```

<details>
<summary>Hint 1</summary>

Extend a basis of the subspace to a basis of the whole space.

</details>

<details>
<summary>Hint 2</summary>

The added basis vectors give the independent quotient directions.

</details>

<details>
<summary>Worked solution</summary>

A quotient removes directions rather than selected coordinate points.

1. Start with three basis vectors spanning $U$ and extend them to seven vectors spanning $V$.
2. The four added cosets span the quotient and are independent there.
3. Thus the quotient dimension is four.

</details>
