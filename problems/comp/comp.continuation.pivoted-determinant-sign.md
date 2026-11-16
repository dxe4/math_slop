# Track a row swap and elimination multipliers in a determinant

*Medium · [Computational arithmetic problems](index.md)*

Find $\det\begin{pmatrix}0&2&1\\1&1&0\\2&0&3\end{pmatrix}$.

```answer
{"answer":{"kind":"integer","expected":"-8","checker_scope":"Only the requested exact finite algorithmic result is checked. No learner program is executed and no unrestricted written proof is automatically certified. This original draft is ineligible for checkpoint evidence pending independent human review."}}
```

<details>
<summary>Hint 1</summary>

The first pivot is zero, so choose a row interchange before eliminating.

</details>

<details>
<summary>Hint 2</summary>

Row additions preserve the determinant, but the interchange changes its sign.

</details>

<details>
<summary>Worked solution</summary>

Pivoting must be recorded separately from determinant-preserving elimination.

1. Swap the first two rows, producing first row $(1,1,0)$ and changing the determinant sign.
2. Subtract twice that first row from the third, giving third row $(0,-2,3)$.
3. Add the second row $(0,2,1)$ to that row, producing upper-triangular diagonal $1,2,4$.
4. The swapped matrix determinant is $8$, so the original determinant is $-8$.

</details>
