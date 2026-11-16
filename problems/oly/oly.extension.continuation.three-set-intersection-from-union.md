# Recover a triple intersection by multiplicity accounting

*Medium · [Original olympiad-style problems](index.md)*

Three finite sets each have $10$ elements. Every pairwise intersection has $4$ elements and their union has $20$ elements. Find the size of the triple intersection.

```answer
{"answer":{"kind":"integer","expected":"2","checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

Adding the three set sizes counts pair-only elements twice and triple elements three times.

</details>

<details>
<summary>Hint 2</summary>

Apply inclusion-exclusion with the triple term restored once.

</details>

<details>
<summary>Worked solution</summary>

Use exact union multiplicities.

1. Inclusion-exclusion gives twenty equal to thirty minus twelve plus the triple-intersection size.
2. The first two terms total eighteen.
3. The missing size is two. The counts are consistent, for example with two triple elements, two elements in each pair-only region and four in each single-only region.

</details>
