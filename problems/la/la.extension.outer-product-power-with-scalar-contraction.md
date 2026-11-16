# Evaluate an outer-product power structurally

*Medium · [Linear algebra problems](index.md)*

Work over $\mathbb R$. Vectors are columns and all entries are dimensionless. Let $u=(1,2)^T$, $v=(3,-1)^T$ and $A=uv^T$. Compute $A^4$ without four full matrix multiplications.

```answer
{"answer":{"kind":"matrix","expected":[["3","-1"],["6","-2"]],"checker_scope":"Only the requested exact finite answer is checked; the mathematical derivation is not automatically graded.","rows":2,"columns":2}}
```

<details>
<summary>Hint 1</summary>

In $A^2=uv^Tuv^T$, the middle product is a scalar.

</details>

<details>
<summary>Hint 2</summary>

Compute that scalar before finding further powers.

</details>

<details>
<summary>Worked solution</summary>

Collapse a rank-one product through its scalar contraction.

1. The contraction is $v^Tu=3-2=1$.
2. Therefore $A^2=u(v^Tu)v^T=A$, so every positive power of $A$ equals $A$.
3. The outer product itself is $\begin{pmatrix}3&-1\\6&-2\end{pmatrix}$, which is the required fourth power.

</details>
