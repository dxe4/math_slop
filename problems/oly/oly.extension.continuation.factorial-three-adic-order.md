# Count nested factors of three

*Medium · [Original olympiad-style problems](index.md)*

Find the greatest integer $e$ such that $3^e$ divides $100!$.

```answer
{"answer":{"kind":"integer","expected":"48","checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

Count a contribution from every multiple of $3$, then an additional one from each multiple of $9$, and so on.

</details>

<details>
<summary>Hint 2</summary>

The nonzero counts correspond to powers $3,9,27,81$.

</details>

<details>
<summary>Worked solution</summary>

Count prime factors by their repeated divisibility levels.

1. Every multiple of $3$ contributes at least one factor, and each multiple of a higher power contributes another factor for each level.
2. The counts are $33,11,3,1$ for $3,9,27,81$ respectively; the next power exceeds $100$.
3. The exact total is $33+11+3+1=48$, so the next power does not divide the factorial.

</details>
