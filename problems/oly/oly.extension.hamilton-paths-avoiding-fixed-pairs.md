# Use block inclusion-exclusion for forbidden consecutive pairs

*Hard · [Original olympiad-style problems](index.md)*

Start with the complete graph on $8$ labeled vertices, partitioned into four designated pairs. Delete the four edges joining paired vertices. How many undirected Hamilton paths remain, with a path and its reversal identified?

```answer
{"answer":{"kind":"integer","expected":"6912","checker_scope":"Exact requested finite count or sharp bound only. The full combinatorial argument is a worked model, not an automatically checked proof; this new skill changes no existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

In a linear vertex ordering, each forbidden adjacency can be contracted to one two-way block.

</details>

<details>
<summary>Hint 2</summary>

The designated pairs are disjoint, so simultaneous adjacency events have independent block orientations.

</details>

<details>
<summary>Worked solution</summary>

Disjoint forbidden pairs permit exact block inclusion-exclusion before reversal identification.

1. For k selected forbidden pairs required adjacent, contract them to k oriented blocks. Their count is 2^k times (8-k)! for each of the binomial(4,k) selected families.
2. Inclusion-exclusion gives 8!-4(2)7!+6(4)6!-4(8)5!+16(4!)=40320-40320+17280-3840+384=13824 valid linear orders.
3. Reversal pairs distinct linear orders of distinct vertices without fixed points, so there are 13824/2=6912 undirected Hamilton paths.

</details>
