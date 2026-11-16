# Find the exact simple-tensor length of a small tensor

*Medium · [Linear algebra problems](index.md)*

Over $\mathbb R^2\otimes\mathbb R^3$ let $z=e_1\otimes(f_1+f_3)+e_2\otimes(f_2+f_3)$. Find the smallest number of simple tensors needed to express z. A simple tensor is one product $u\otimes v$.

```answer
{"answer":{"kind":"integer","expected":2,"checker_scope":"Only the specified finite invariant or rational coordinate object is checked. Tensor and operator reasoning are not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

The displayed formula gives an upper bound.

</details>

<details>
<summary>Hint 2</summary>

A single simple tensor has coefficient matrix of rank at most one.

</details>

<details>
<summary>Worked solution</summary>

A coefficient flattening provides a lower bound independent of a chosen decomposition.

1. The displayed two terms prove the length is at most two.
2. The coefficient matrix is $\begin{pmatrix}1&0&1\\0&1&1\end{pmatrix}$, with independent rows.
3. A single simple tensor would give an outer-product coefficient matrix of rank at most one. This matrix has rank two, so the smallest possible number is two.

</details>
