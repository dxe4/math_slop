# Combine a matrix identity with an integer norm bound

*Hard · [Original Putnam-style training](index.md)*

Let $M=\begin{pmatrix}2&-1&-1\\-1&2&-1\\-1&-1&2\end{pmatrix}$. Find the minimum of $v^TMv$ over all nonzero integer column vectors $v=(x,y,z)^T$ with x+y+z=0.

```answer
{"answer":{"kind":"integer","expected":"6","checker_scope":"Exact requested bounded value only; a correct numerical answer does not certify the full university-level argument or a contest result."}}
```

<details>
<summary>Hint 1</summary>

Write M as three times the identity minus an all-ones matrix.

</details>

<details>
<summary>Hint 2</summary>

A nonzero integer vector of coordinate sum zero must have at least two nonzero coordinates.

</details>

<details>
<summary>Worked solution</summary>

The constrained subspace makes the matrix action scalar, and integrality supplies the sharp norm bound.

1. Writing M=3I-J, we have Jv=0 under the coordinate-sum condition.
2. Thus $v^TMv=3(x^2+y^2+z^2)$. A nonzero integer vector with sum zero has squared norm at least two.
3. The vector (1,-1,0) attains squared norm two, so the minimum is $6$.

</details>
