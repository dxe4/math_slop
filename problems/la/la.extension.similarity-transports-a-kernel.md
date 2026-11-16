# Preserve geometric multiplicity under similarity

*Easy · [Linear algebra problems](index.md)*

Work over $\mathbb R$; vectors are columns and all data are dimensionless. Let $B=S^{-1}AS$ with $S$ invertible and $\dim\ker(A-4I)=2$. Find $\dim\ker(B-4I)$.

```answer
{"answer":{"kind":"integer","expected":2,"checker_scope":"Only the requested bounded exact result is checked; no unrestricted proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

Factor $B-4I$ using the same similarity.

</details>

<details>
<summary>Hint 2</summary>

The invertible map $S$ transports one kernel bijectively to the other.

</details>

<details>
<summary>Worked solution</summary>

Use a subspace isomorphism, not equality of the coordinate kernels.

1. One has $B-4I=S^{-1}(A-4I)S$.
2. Thus $v$ is in the new kernel exactly when $Sv$ is in the old kernel.
3. The restriction of $S$ is a bijection of the kernels, so the new dimension is two.

</details>
