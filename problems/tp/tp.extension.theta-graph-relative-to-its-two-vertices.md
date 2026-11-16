# Distinguish relative graph cycles from absolute graph cycles

*Medium · [Topology problems](index.md)*

Let Γ be a theta graph with vertices u,v and three edges each oriented from u to v. For $A=\{u,v\}$, return \[rank H₁(Γ,A;Z), rank H₀(Γ,A;Z)\]. The subspace A contains both vertices and no edges.

```answer
{"answer":{"kind":"vector","expected":["3","0"],"checker_scope":"Only the requested exact result in the specified space, bases and coefficient conventions is checked; a personal argument is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

In the relative cellular complex all degree-zero chains are quotiented away.

</details>

<details>
<summary>Hint 2</summary>

Each edge becomes a relative cycle even though its absolute boundary is v−u.

</details>

<details>
<summary>Worked solution</summary>

Relative cycles may have nonzero boundaries supported entirely in the chosen subspace.

1. The absolute cellular boundary takes each of the three oriented edges to v−u. Absolute H₁ therefore has rank 2.
2. For the pair, C₁(Γ,A)=Z³ and C₀(Γ,A)=0. No two-cells exist, and the relative boundary is zero, so relative H₁ is all Z³.
3. The relative degree-zero chain group vanishes, hence H₀(Γ,A)=0. The vector is \[3,0\]; the extra relative generator records the allowed path between the two vertices.

</details>
