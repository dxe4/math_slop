# Compare column-sum and row-sum operator norms

*Medium · [Linear algebra problems](index.md)*

All data are dimensionless. Work over $\mathbb R$ with column vectors and the Euclidean inner product unless another one is specified. For $A=\begin{pmatrix}1&-2&0\\3&1&-1\end{pmatrix}$, return $[\|A\|_1,\|A\|_\infty]$, the induced norms from the corresponding vector norms.

```answer
{"answer":{"kind":"vector","expected":["4","5"],"checker_scope":"Only the requested exact scalar or structured answer is checked; an optional mathematical argument is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

The induced one-norm is the largest absolute column sum.

</details>

<details>
<summary>Hint 2</summary>

The induced infinity-norm is the largest absolute row sum.

</details>

<details>
<summary>Worked solution</summary>

Two induced norms inspect different matrix directions.

1. The column sums of absolute values are four, three and one, giving one-norm four.
2. The row sums are three and five, giving infinity-norm five.
3. Thus the ordered pair is $[4,5]$; replacing entries by signed sums would not compute either induced norm.

</details>
