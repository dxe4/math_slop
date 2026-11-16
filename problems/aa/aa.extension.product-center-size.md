# Combine centers without assuming the whole product is abelian

*Easy · [Abstract algebra problems](index.md)*

Use $Z(G\times H)=Z(G)\times Z(H)$. Find the center size of C3 times S3, given that C3 is abelian and S3 has trivial center.

```answer
{"answer":{"kind":"integer","expected":3,"checker_scope":"Exact requested finite structural quantity only; no group-theoretic proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

Every element of the first factor is central.

</details>

<details>
<summary>Hint 2</summary>

Only the identity of the second factor is central.

</details>

<details>
<summary>Worked solution</summary>

A product's central coordinates must be central separately.

1. The center of C3 has three elements because the group is abelian.
2. The center of S3 has one element by the supplied fact.
3. The product center therefore has 3\*1=3 elements.

</details>
