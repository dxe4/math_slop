# Separate semisimple rotation from a commuting nilpotent coupling

*Medium · [Linear algebra problems](index.md)*

Over $\mathbb R$, use the additive Jordan-Chevalley decomposition as preparation. For $A=\begin{pmatrix}0&-1&1&0\\1&0&0&1\\0&0&0&-1\\0&0&1&0\end{pmatrix}$, find the nilpotent part N in $A=S+N$, where S is diagonalizable after complexification and $SN=NS$.

```answer
{"answer":{"kind":"matrix","expected":[["0","0","1","0"],["0","0","0","1"],["0","0","0","0"],["0","0","0","0"]],"checker_scope":"Only the requested exact invariant or rational coordinate object is checked. Canonical-form reasoning and graduate preparation are not automatically certified.","rows":4,"columns":4}}
```

<details>
<summary>Hint 1</summary>

View A as a two-by-two block matrix with identical rotation blocks.

</details>

<details>
<summary>Hint 2</summary>

The off-diagonal identity block commutes with either rotation block.

</details>

<details>
<summary>Worked solution</summary>

The real semisimple part need not be diagonalizable over the real field itself.

1. Write $A=\begin{pmatrix}R&I_2\\0&R\end{pmatrix}$ with $R=\begin{pmatrix}0&-1\\1&0\end{pmatrix}$.
2. Take $S=\operatorname{diag}(R,R)$ and N equal to the remaining upper-right identity block. Then $N^2=0$ and the two parts commute.
3. The rotation R has distinct complex eigenvalues i and minus i, so S is semisimple after complexification. Uniqueness of the Jordan-Chevalley decomposition identifies the displayed N.

</details>
