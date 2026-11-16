# Recover a normalized commuting tensor operator

*Medium · [Linear algebra problems](index.md)*

Over $\mathbb C^2\otimes\mathbb C^2$ in lexicographic factor order, X commutes with $E_{11}\otimes I_2$, $E_{12}\otimes I_2$ and $E_{21}\otimes I_2$. Its upper-left $2\times2$ block is $B=\begin{pmatrix}1&2\\3&4\end{pmatrix}$. Find X.

```answer
{"answer":{"kind":"matrix","expected":[["1","2","0","0"],["3","4","0","0"],["0","0","1","2"],["0","0","3","4"]],"checker_scope":"Only the specified finite invariant or rational coordinate object is checked. Tensor and operator reasoning are not automatically graded.","rows":4,"columns":4}}
```

<details>
<summary>Hint 1</summary>

Commutation with the first coordinate projection kills both off-diagonal blocks.

</details>

<details>
<summary>Hint 2</summary>

Commutation with either matrix-unit transfer identifies the two remaining diagonal blocks.

</details>

<details>
<summary>Worked solution</summary>

The full first-factor action leaves only an operator on the second factor.

1. Write X in four two-by-two blocks. Commuting with $E_{11}\otimes I$ forces the off-diagonal blocks to vanish.
2. Commuting with the two transfer units forces the second diagonal block to equal the first.
3. Therefore $X=I_2\otimes B$, which is the displayed matrix and satisfies every required commutation.

</details>
