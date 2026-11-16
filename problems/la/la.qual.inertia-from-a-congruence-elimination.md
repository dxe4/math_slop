# Recover inertia without characteristic roots

*Medium · [Linear algebra problems](index.md)*

Over $\mathbb R$, find {positive\_index, negative\_index, nullity} for the symmetric matrix $G=\begin{pmatrix}1&2&0\\2&1&1\\0&1&0\end{pmatrix}$. All data are dimensionless.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"positive_index":"2","negative_index":"1","nullity":"0"},"checker_scope":"Only the requested finite invariant or rational coordinate result is checked; form classification and reasoning are not automatically certified."}}
```

<details>
<summary>Hint 1</summary>

Complete a square in the first coordinate, or perform symmetric elimination.

</details>

<details>
<summary>Hint 2</summary>

The next two diagonal pivots are computed by Schur complements, not ordinary similarity row operations.

</details>

<details>
<summary>Worked solution</summary>

Congruence preserves the signs of diagonal square coefficients.

1. The first congruence pivot is one, leaving the symmetric block $\begin{pmatrix}-3&1\\1&0\end{pmatrix}$.
2. The next pivot is minus three, and its final Schur complement is $0-1/(-3)=1/3$.
3. The congruent diagonal has two positive entries, one negative entry and no zero entries, giving the requested inertia.

</details>
