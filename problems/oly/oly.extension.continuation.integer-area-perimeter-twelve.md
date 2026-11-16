# Classify an integer-area triangle at fixed perimeter

*Medium · [Original olympiad-style problems](index.md)*

How many unordered nondegenerate triangles have positive integer side lengths, perimeter $12$, and integer area? Congruent triangles are counted once.

```answer
{"answer":{"kind":"integer","expected":"1","checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

Order the sides $a\le b\le c$ and use $c<6$ together with $a+b+c=12$.

</details>

<details>
<summary>Hint 2</summary>

The only candidates are $2,5,5$; $3,4,5$; and $4,4,4$. Evaluate their areas exactly.

</details>

<details>
<summary>Worked solution</summary>

The strict triangle inequality makes the finite classification short and complete.

1. Because $c<a+b=12-c$, the largest integer side is at most $5$. If $c=5$, the ordered pairs with $a+b=7$ and $a\le b\le5$ are $(2,5)$ and $(3,4)$. If $c=4$, the only possibility is $(4,4)$; $c\le3$ cannot sum to $12$.
2. Heron\'s formula with semiperimeter $6$ gives areas $\sqrt{24}=2\sqrt6$, $\sqrt{36}=6$, and $\sqrt{48}=4\sqrt3$, respectively.
3. Only the $3,4,5$ triangle has integer area. All candidates were nondegenerate and ordering removed congruence duplicates, so the count is $1$.

</details>
