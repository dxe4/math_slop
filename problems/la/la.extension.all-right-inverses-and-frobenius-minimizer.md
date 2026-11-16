# Parametrize right inverses and isolate the least-norm one

*Hard · [Linear algebra problems](index.md)*

Work over $\mathbb R$. Vectors are columns and all entries are dimensionless. Let $A$ be a real $m\times n$ matrix of rank $m$, where $1\le m\le n$. Prove all right inverses are $R=R_0+K$ with $AK=0$, that their affine dimension is $m(n-m)$, and that the unique Frobenius-norm minimizer is $R_0=A^T(AA^T)^{-1}$. Here $AR=I_m$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only. No automatic proof verdict, demonstration or checkpoint evidence is awarded."}}
```

<details>
<summary>Hint 1</summary>

First prove $AA^T$ is positive definite and verify the proposed right inverse.

</details>

<details>
<summary>Hint 2</summary>

Treat each column independently and split it orthogonally between the row space of $A$ and its kernel.

</details>

<details>
<summary>Model proof</summary>

Combine affine solution structure with orthogonal minimum-norm geometry.

1. Full row rank gives $y^TAA^Ty=\|A^Ty\|^2>0$ for nonzero $y$, so $AA^T$ is invertible and $AR_0=I_m$. Subtracting this identity from $AR=I_m$ gives exactly $AK=0$.
2. Each of the $m$ columns of $K$ lies freely in the $(n-m)$-dimensional kernel. Thus the right-inverse set is an affine space of dimension $m(n-m)$.
3. Each column of $R_0$ lies in $\operatorname{im}A^T=(\ker A)^\perp$, so it is orthogonal to the corresponding column of $K$. Summing squared column norms gives $\|R_0+K\|_F^2=\|R_0\|_F^2+\|K\|_F^2$, with equality at the minimum only when $K=0$.

**Self-assessment rubric**

- Prove invertibility of the Gram matrix and verify the right-inverse formula.
- Prove both directions of the affine description and compute its dimension.
- Identify the orthogonality of the proposed columns to every allowable perturbation.
- Derive the squared Frobenius identity and its equality condition.

</details>
