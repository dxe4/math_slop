# Separate kernel preservation from image transport

*Medium · [Linear algebra problems](index.md)*

Work over $\mathbb R$. Vectors are columns and all entries are dimensionless. For invertible $E$ and a compatible matrix $A$, prove $\ker(EA)=\ker A$ and $\operatorname{im}(EA)=E(\operatorname{im}A)$. Give a real two-row example where the two image subspaces are unequal.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only. No automatic proof verdict, demonstration or checkpoint evidence is awarded."}}
```

<details>
<summary>Hint 1</summary>

Use injectivity of $E$ for the kernel statement.

</details>

<details>
<summary>Hint 2</summary>

For the example take a single-column matrix and a row-swap multiplier.

</details>

<details>
<summary>Model proof</summary>

Specify exactly which subspace a row operation preserves.

1. $EAx=0$ is equivalent to $Ax=0$ because $E$ is injective, proving equality of the kernels.
2. Every output of $EA$ is $E$ applied to an output of $A$, and every such transported output occurs; this proves the image identity.
3. For $A=(1,0)^T$ and $E=\begin{pmatrix}0&1\\1&0\end{pmatrix}$ the images are the first and second coordinate axes, respectively, which are unequal.

**Self-assessment rubric**

- Use invertibility to prove both directions of the kernel equality.
- Establish the exact image transport identity.
- Exhibit and identify two distinct image subspaces in a valid example.

</details>
