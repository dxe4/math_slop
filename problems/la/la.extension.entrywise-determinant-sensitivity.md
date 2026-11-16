# Find one cofactor sensitivity

*Easy · [Linear algebra problems](index.md)*

Work over $\mathbb R$ unless a scalar extension is explicitly stated; all coordinates are dimensionless. For $A(t)=\begin{pmatrix}1&2\\t&4\end{pmatrix}$, find the derivative of $\det A(t)$ with respect to $t$.

```answer
{"answer":{"kind":"integer","expected":-2,"checker_scope":"Only the requested bounded exact value or coordinate object is checked; proof correctness is not automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

The determinant is affine in each individual entry.

</details>

<details>
<summary>Hint 2</summary>

Only the lower-left entry changes.

</details>

<details>
<summary>Worked solution</summary>

A cofactor is the coefficient of its varying entry.

1. The determinant is $4-2t$.
2. Its coefficient of $t$ is the signed cofactor of entry $(2,1)$, namely minus two.
3. The derivative is therefore minus two at every real parameter.

</details>
