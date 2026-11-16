# Prove commuting maps are polynomial for a simple spectrum

*Medium · [Linear algebra problems](index.md)*

Work over $\mathbb R$; vectors are columns and all data are dimensionless. Let $A$ have $n$ distinct real eigenvalues on $\mathbb R^n$. Prove every real matrix $B$ commuting with $A$ equals $p(A)$ for a unique polynomial $p$ of degree less than $n$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic verdict, demonstration or checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Commutation sends each one-dimensional eigenspace of $A$ into itself.

</details>

<details>
<summary>Hint 2</summary>

Interpolate the resulting scalar action at the distinct eigenvalues.

</details>

<details>
<summary>Model proof</summary>

Combine eigenspace invariance with scalar interpolation.

1. For an eigenvector $v_j$ of $A$, one has $A(Bv_j)=B(Av_j)=\lambda_jBv_j$. The eigenspace is one-dimensional, so $Bv_j=b_jv_j$.
2. Lagrange interpolation supplies a polynomial of degree below $n$ with $p(\lambda_j)=b_j$. Therefore $p(A)$ and $B$ agree on the eigenbasis and are equal.
3. If two such polynomials gave the same matrix, their difference would vanish at all $n$ distinct eigenvalues while having degree below $n$, hence would be zero.

**Self-assessment rubric**

- Use commutation and the simple spectrum to derive scalar action on each eigenline.
- Construct the lower-degree polynomial matching all actions.
- Use eigenbasis evaluation and the polynomial root bound for equality and uniqueness.

</details>
