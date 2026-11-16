# Find a maximal isotropic dimension for a complex symmetric form

*Medium · [Linear algebra problems](index.md)*

On $\mathbb C^5$ use the bilinear form $B(z,w)=\sum_jz_jw_j$, with no conjugation. Find the largest dimension of a subspace U satisfying $B(U,U)=0$.

```answer
{"answer":{"kind":"integer","expected":2,"checker_scope":"Only the requested finite invariant or rational coordinate result is checked; form classification and reasoning are not automatically certified."}}
```

<details>
<summary>Hint 1</summary>

A totally isotropic U lies in its bilinear perpendicular space.

</details>

<details>
<summary>Hint 2</summary>

Pair coordinate directions using coefficients one and i to construct isotropic vectors.

</details>

<details>
<summary>Worked solution</summary>

Nondegenerate bilinear duality bounds the dimension, and complex isotropy attains it.

1. Nondegeneracy gives $\dim U^\perp=5-\dim U$. Since $U\subseteq U^\perp$, one has $2\dim U\le5$.
2. The vectors $e_1+ie_2$ and $e_3+ie_4$ are independent, have zero bilinear squares and pair to zero with one another.
3. Their span is totally isotropic of dimension two, proving the sharp maximum. The corresponding positive Hermitian form would have no nonzero isotropic vector.

</details>
