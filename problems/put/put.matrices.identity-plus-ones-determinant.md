# Split a constant-row matrix into invariant subspaces

*Medium · [Original Putnam-style training](index.md)*

Let J be the $7\times7$ real matrix with every entry equal to one. Find $\det(I+J)$.

```answer
{"answer":{"kind":"integer","expected":"8","checker_scope":"Exact requested bounded value only; a correct numerical answer does not certify the full university-level argument or a contest result."}}
```

<details>
<summary>Hint 1</summary>

Consider the all-ones vector and the subspace of vectors whose coordinate sum is zero.

</details>

<details>
<summary>Hint 2</summary>

Find the action of J on each of these complementary subspaces.

</details>

<details>
<summary>Worked solution</summary>

Two invariant subspaces give the full spectrum without expanding a determinant.

1. J multiplies the all-ones vector by seven.
2. J vanishes on the six-dimensional coordinate-sum-zero subspace. Thus I+J acts by eight on the first line and by one on that subspace.
3. The determinant is $8\cdot1^6=8$.

</details>
