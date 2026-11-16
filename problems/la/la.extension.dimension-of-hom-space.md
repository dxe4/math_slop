# Count independent images of basis vectors

*Easy · [Linear algebra problems](index.md)*

Work over $\mathbb R$. Coordinates are dimensionless and ordered as stated. Find $\dim_{\mathbb R}\operatorname{Hom}(\mathbb R^2,\mathbb R^3)$.

```answer
{"answer":{"kind":"integer","expected":6,"checker_scope":"Only the requested exact finite answer is checked; explanatory reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

A linear map is freely determined by the images of two input basis vectors.

</details>

<details>
<summary>Hint 2</summary>

Each image has three real coordinates.

</details>

<details>
<summary>Worked solution</summary>

Count the matrix entries of an entire space of maps.

1. Choose the images of $e_1$ and $e_2$ independently in $\mathbb R^3$.
2. This gives two groups of three unconstrained scalar coordinates.
3. The map space is therefore isomorphic to $M_{3\times2}(\mathbb R)$ and has dimension six.

</details>
