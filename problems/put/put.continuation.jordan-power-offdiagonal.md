# Jordan power offdiagonal

*Medium · [Original Putnam-style training](index.md)*

For $J=\begin{pmatrix}1&1\\0&1\end{pmatrix}$, find the $(1,2)$ entry of $J^{12}$.

```answer
{"answer":{"kind":"integer","expected":"12","checker_scope":"Only the exact bounded answer is checked; the argument and assumptions are not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Write $J=I+N$ with $N^2=0$.

</details>

<details>
<summary>Hint 2</summary>

Only the first two terms of the binomial expansion survive.

</details>

<details>
<summary>Worked solution</summary>

The upper-right entry is $12$.

1. Let $N=\begin{pmatrix}0&1\\0&0\end{pmatrix}$, so $J=I+N$ and $N^2=0$.
2. The commuting binomial theorem gives $J^{12}=I+12N$ because every term containing $N^2$ vanishes.
3. The upper-right entry is $12$.

</details>
