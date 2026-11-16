# Count one independent trace constraint

*Easy · [Linear algebra problems](index.md)*

Work over $\mathbb R$. Coordinates are dimensionless and ordered as stated. Find the dimension of $\{A\in M_3(\mathbb R):\operatorname{tr}A=0\}$.

```answer
{"answer":{"kind":"integer","expected":8,"checker_scope":"Only the requested exact finite answer is checked; explanatory reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

An unrestricted three-by-three matrix has nine independent entries.

</details>

<details>
<summary>Hint 2</summary>

The trace condition solves for one diagonal entry without constraining the other eight.

</details>

<details>
<summary>Worked solution</summary>

Count free coordinates rather than treating all diagonal entries as zero.

1. The six off-diagonal entries are arbitrary.
2. Two diagonal entries are also arbitrary and the third is their negative sum.
3. There are eight free real coordinates, so the dimension is eight.

</details>
