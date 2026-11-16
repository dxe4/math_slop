# Build the whole orthogonal projection operator

*Medium · [Linear algebra problems](index.md)*

All data are dimensionless. Work over $\mathbb R$ with column vectors and the Euclidean inner product unless another one is specified. Find the Euclidean projection matrix onto $U=\operatorname{span}((1,0,1),(0,1,1))\subset\mathbb R^3$.

```answer
{"answer":{"kind":"matrix","expected":[["2/3","-1/3","1/3"],["-1/3","2/3","1/3"],["1/3","1/3","2/3"]],"checker_scope":"Only the requested exact scalar or structured answer is checked; an optional mathematical argument is not automatically graded.","rows":3,"columns":3}}
```

<details>
<summary>Hint 1</summary>

Find a normal vector orthogonal to both generators.

</details>

<details>
<summary>Hint 2</summary>

Subtract the normal-line projector from the identity.

</details>

<details>
<summary>Worked solution</summary>

Use the complementary one-dimensional geometry of a plane.

1. A normal is $n=(-1,-1,1)^T$, with squared length three.
2. The projector is $I-nn^T/3$, since the two supplied independent generators span its perpendicular plane.
3. Expanding gives the displayed symmetric matrix. It kills the normal and fixes each generator, verifying its intended range.

</details>
