# Use a terminating inverse series

*Easy · [Linear algebra problems](index.md)*

Work over $\mathbb R$. Vectors are columns and all entries are dimensionless. Let $N=\begin{pmatrix}0&1&0\\0&0&1\\0&0&0\end{pmatrix}$. Since $N^3=0$, use $(I-N)^{-1}=I+N+N^2$ to solve $(I-N)x=e_3$.

```answer
{"answer":{"kind":"vector","expected":["1","1","1"],"checker_scope":"Only the requested exact finite answer is checked; the mathematical derivation is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Apply the supplied inverse identity to $e_3$.

</details>

<details>
<summary>Hint 2</summary>

The shift sends $e_3$ to $e_2$ and then to $e_1$.

</details>

<details>
<summary>Worked solution</summary>

Evaluate a finite operator series on a vector.

1. The identity follows because $(I-N)(I+N+N^2)=I-N^3=I$.
2. Applying it gives $x=e_3+Ne_3+N^2e_3=e_3+e_2+e_1$.
3. Therefore the coordinate vector is $(1,1,1)^T$, and the invertible factor makes the solution unique.

</details>
