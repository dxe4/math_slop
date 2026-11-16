# Classify left ideals through allowed row spaces

*Medium · [Abstract algebra problems](index.md)*

Find the number of left ideals of $M_2(F_2)$, including zero and the whole ring. Justify the row-subspace classification rather than counting only two-sided ideals.

```answer
{"answer":{"kind":"integer","expected":5,"checker_scope":"Exact requested finite ring invariant only; no radical or classification proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

Left multiplication forms linear combinations of matrix rows.

</details>

<details>
<summary>Hint 2</summary>

Matrix units isolate a row and move it into either row position.

</details>

<details>
<summary>Worked solution</summary>

One-sided ideals retain subspace information that two-sided simplicity does not.

1. For any subspace W of the row space F2^2, the matrices with both rows in W form a left ideal. Conversely, in a left ideal multiplication by matrix units isolates each row into any chosen row position; addition then supplies every matrix whose rows lie in the span W of all its rows.
2. Thus left ideals correspond exactly to subspaces of F2^2.
3. There is one zero subspace, three one-dimensional subspaces and one whole space, totaling five. This does not conflict with the matrix ring having only two two-sided ideals.

</details>
