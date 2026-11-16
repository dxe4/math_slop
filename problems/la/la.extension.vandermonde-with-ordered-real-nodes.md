# Respect node ordering in an interpolation determinant

*Medium · [Linear algebra problems](index.md)*

Work over $\mathbb R$ unless a scalar extension is explicitly stated; all coordinates are dimensionless. Find the determinant of the matrix whose successive rows are $(1,t,t^2)$ at $t=-1,0,2$, in that order.

```answer
{"answer":{"kind":"integer","expected":6,"checker_scope":"Only the requested bounded exact value or coordinate object is checked; proof correctness is not automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

Use the ordered Vandermonde product of later node minus earlier node.

</details>

<details>
<summary>Hint 2</summary>

A row interchange would change the sign, so keep the supplied order.

</details>

<details>
<summary>Worked solution</summary>

Interpolation at distinct nodes gives a signed product of node differences.

1. The Vandermonde product is $(0-(-1))(2-(-1))(2-0)$.
2. These factors are one, three and two.
3. The determinant is six, nonzero because all three interpolation nodes differ.

</details>
