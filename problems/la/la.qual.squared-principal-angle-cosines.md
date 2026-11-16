# Read principal-angle invariants from cross-Gram data

*Medium · [Linear algebra problems](index.md)*

In $\mathbb R^3$ let $U=\operatorname{span}(e_1,e_2)$ and $W=\operatorname{span}((e_1+e_3)/\sqrt2,e_2)$. Return the squared cosines of their principal angles in nonincreasing order, defined as the squared singular values of $Q_U^TQ_W$ for orthonormal basis matrices.

```answer
{"answer":{"kind":"vector","expected":["1","1/2"],"checker_scope":"Only the requested finite invariant or rational coordinate result is checked; form classification and reasoning are not automatically certified."}}
```

<details>
<summary>Hint 1</summary>

The displayed generators already give orthonormal bases in their stated order.

</details>

<details>
<summary>Hint 2</summary>

The cross-Gram matrix is diagonal, but reorder its squared singular values as requested.

</details>

<details>
<summary>Worked solution</summary>

A basis-independent subspace comparison is encoded by a cross-Gram matrix.

1. Using bases $(e_1,e_2)$ and $((e_1+e_3)/\sqrt2,e_2)$ gives cross-Gram matrix $\operatorname{diag}(1/\sqrt2,1)$.
2. Its squared singular values are one half and one.
3. In nonincreasing order the result is $[1,1/2]$, reflecting one common direction and one nonzero angle.

</details>
