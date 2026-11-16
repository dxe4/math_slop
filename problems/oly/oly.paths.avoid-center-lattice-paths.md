# Subtract paths through a forbidden point

*Medium · [Original olympiad-style problems](index.md)*

How many paths from $(0,0)$ to $(4,4)$ using unit east and north steps avoid the point $(2,2)$?

```answer
{"answer":{"kind":"integer","expected":"34","checker_scope":"Exact short answer only; the complete argument remains a worked solution, not an automatically certified proof or contest result."}}
```

<details>
<summary>Hint 1</summary>

Every shortest path is an eight-step word with four steps of each type.

</details>

<details>
<summary>Hint 2</summary>

A path through the forbidden point splits uniquely into two shorter paths.

</details>

<details>
<summary>Worked solution</summary>

The paths through a fixed lattice point factor at that point.

1. The total number of paths is $\binom84=70$.
2. There are $\binom42=6$ paths to (2,2) and six from there to (4,4), so 36 paths go through it.
3. The avoiding count is $70-36=34$.

</details>
