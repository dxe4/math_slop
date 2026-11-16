# Count independent columns over a finite field

*Medium · [Original Putnam-style training](index.md)*

How many invertible $2\times2$ matrices have entries in the field $\mathbb F_3$?

```answer
{"answer":{"kind":"integer","expected":"48","checker_scope":"Exact requested bounded value only; a correct numerical answer does not certify the full university-level argument or a contest result."}}
```

<details>
<summary>Hint 1</summary>

Choose the first column to be nonzero.

</details>

<details>
<summary>Hint 2</summary>

The second column must lie outside the one-dimensional span of the first.

</details>

<details>
<summary>Worked solution</summary>

Invertibility is equivalent to column independence.

1. The first column has $3^2-1=8$ choices.
2. Its span contains exactly three of the nine possible columns, leaving six choices for the second column.
3. The number of invertible matrices is $8\cdot6=48$.

</details>
