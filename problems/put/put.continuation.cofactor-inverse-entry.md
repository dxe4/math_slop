# Cofactor inverse entry

*Medium · [Original Putnam-style training](index.md)*

For $A=\begin{pmatrix}1&1&0\\0&1&1\\1&0&1\end{pmatrix}$, find $(A^{-1})_{11}$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":2},"checker_scope":"Only the exact bounded answer is checked; the argument and assumptions are not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Compute $\det A$ by expansion of the first row.

</details>

<details>
<summary>Hint 2</summary>

The target inverse entry is a cofactor divided by that determinant.

</details>

<details>
<summary>Worked solution</summary>

The adjugate formula yields $(A^{-1})_{11}=1/2$.

1. Expansion along row one gives $\det A=1\cdot1-1\cdot(-1)=2$.
2. The $(1,1)$ cofactor is $\det\begin{pmatrix}1&1\\0&1\end{pmatrix}=1$.
3. The adjugate formula yields $(A^{-1})_{11}=1/2$.

</details>
