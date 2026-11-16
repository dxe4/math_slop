# Determine the shape of a composition

*Easy · [Linear algebra problems](index.md)*

Work over $\mathbb R$. Vectors are columns and all entries are dimensionless. If $A$ has shape $2\times3$ and $B$ has shape $3\times4$, give the ordered vector \[rows, columns\] for $AB$.

```answer
{"answer":{"kind":"vector","expected":["2","4"],"checker_scope":"Only the requested exact finite answer is checked; the mathematical derivation is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

The inner dimensions must match.

</details>

<details>
<summary>Hint 2</summary>

The product has the row count of the left factor and column count of the right factor.

</details>

<details>
<summary>Worked solution</summary>

Read compatible domains and codomains before multiplication.

1. $B$ maps four-dimensional inputs to a three-dimensional intermediate space.
2. $A$ maps that intermediate space to a two-dimensional output space.
3. The composite therefore has two rows and four columns, giving $[2,4]$.

</details>
