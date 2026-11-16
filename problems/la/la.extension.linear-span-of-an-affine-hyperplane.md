# Find the linear span of a non-linear affine set

*Easy · [Linear algebra problems](index.md)*

Work over $\mathbb R$ in finite dimension; all coordinate entries are dimensionless. Let $H=\{(x,y,z):x+y+z=1\}\subset\mathbb R^3$. Find the dimension of the linear span of $H$.

```answer
{"answer":{"kind":"integer","expected":3,"checker_scope":"Only the requested exact finite object is checked; the derivation does not receive an automatic proof verdict."}}
```

<details>
<summary>Hint 1</summary>

The set itself is not a vector subspace because it omits zero.

</details>

<details>
<summary>Hint 2</summary>

It contains all three standard coordinate vectors.

</details>

<details>
<summary>Worked solution</summary>

An affine dimension and the dimension of its linear span need not agree.

1. Each of $e_1,e_2,e_3$ satisfies the displayed affine equation and belongs to $H$.
2. Those three vectors are linearly independent and span all of $\mathbb R^3$.
3. The linear span of $H$ is therefore the full space, of dimension three, although the affine plane has affine dimension two.

</details>
