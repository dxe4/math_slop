# Track a commutator lift without abelianizing monodromy

*Medium · [Topology problems](index.md)*

For a four-sheeted cover of the two-loop rose use permutations a=(1 2 3), b=(2 3 4), fixing unlisted labels. Starting at label 1, traverse $w=aba^{-1}b^{-1}$ from left to right. Return \[endpoint of w, endpoint of w²\], with the second traversal starting where the first ended.

```answer
{"answer":{"kind":"vector","expected":["4","1"],"checker_scope":"Only the requested exact result in the specified space, bases and coefficient conventions is checked; a personal argument is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Apply each displayed letter to the current label in traversal order, including inverse permutations.

</details>

<details>
<summary>Hint 2</summary>

Repeat the four-letter path from its first endpoint; do not reset the sheet to 1.

</details>

<details>
<summary>Worked solution</summary>

Zero exponent sums do not make a commutator’s permutation trivial.

1. From label 1 the successive labels under a,b,a⁻¹,b⁻¹ are 2,3,2,4. Hence w ends at 4.
2. Continuing from 4, the successive labels are 4,2,1,1. Hence the second traversal returns to 1.
3. The requested vector is \[4,1\]. Although w has zero total exponent of each generator, its nonabelian monodromy exchanges these two starting sheets.

</details>
