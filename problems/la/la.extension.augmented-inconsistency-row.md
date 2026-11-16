# Read a contradiction in an augmented matrix

*Easy · [Linear algebra problems](index.md)*

Work over $\mathbb R$. Vectors are columns and all entries are dimensionless. The augmented matrix for a system in two unknowns is $\left[\begin{array}{cc|c}1&0&2\\0&1&-1\\0&0&1\end{array}\right]$. Give the index of the row certifying inconsistency.

```answer
{"answer":{"kind":"integer","expected":3,"checker_scope":"Only the requested exact finite answer is checked; the mathematical derivation is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

The final column is the right-hand side, not another unknown.

</details>

<details>
<summary>Hint 2</summary>

Find a row whose left side is identically zero while the right side is nonzero.

</details>

<details>
<summary>Worked solution</summary>

Interpret augmented columns before reading an equation.

1. The first two rows prescribe the two unknowns as two and minus one.
2. The third row asserts $0=1$, regardless of their values.
3. Therefore row three is a contradiction and the full system has no solution.

</details>
