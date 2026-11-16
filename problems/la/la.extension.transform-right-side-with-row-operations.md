# Transform the right side along with the coefficients

*Easy · [Linear algebra problems](index.md)*

Work over $\mathbb R$. Vectors are columns and all entries are dimensionless. An elimination step premultiplies $Ax=b$ by $E=\begin{pmatrix}1&0\\-2&1\end{pmatrix}$. For $b=(3,5)^T$, give the right-hand side of the equivalent transformed system.

```answer
{"answer":{"kind":"vector","expected":["3","-1"],"checker_scope":"Only the requested exact finite answer is checked; the mathematical derivation is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

The same operation must be applied to both sides of the equation.

</details>

<details>
<summary>Hint 2</summary>

The new second entry is the old second entry minus twice the old first entry.

</details>

<details>
<summary>Worked solution</summary>

Preserve equivalence of an entire augmented system.

1. Premultiplying gives $(EA)x=Eb$, with the same unknown vector.
2. The first entry of $Eb$ is three; the second is $5-2\cdot3=-1$.
3. The transformed right-hand side is $(3,-1)^T$. Leaving $b$ unchanged would generally change the solution set.

</details>
