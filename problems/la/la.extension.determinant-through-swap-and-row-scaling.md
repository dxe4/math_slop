# Track determinant changes through two elementary operations

*Easy · [Linear algebra problems](index.md)*

Work over $\mathbb R$ unless a scalar extension is explicitly stated; all coordinates are dimensionless. A square matrix has determinant seven. Swap two rows and then multiply one row by minus two. Find the determinant of the resulting matrix.

```answer
{"answer":{"kind":"integer","expected":14,"checker_scope":"Only the requested bounded exact value or coordinate object is checked; proof correctness is not automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

A row swap reverses determinant sign.

</details>

<details>
<summary>Hint 2</summary>

Scaling one row scales the determinant by that same scalar.

</details>

<details>
<summary>Worked solution</summary>

Multiply the effects of distinct elementary operations.

1. The row swap changes the determinant from seven to minus seven.
2. The row scaling then multiplies it by minus two.
3. The final determinant is fourteen; no assumption about the row entries is needed.

</details>
