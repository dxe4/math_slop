# Count a committee meeting at least two groups

*Medium · [Original olympiad-style problems](index.md)*

Nine distinct objects are divided into $3$ specified groups of size $3$. How many three-object subsets meet at least two groups?

```answer
{"answer":{"kind":"integer","expected":"81","checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

Choose any three-object subset and subtract the one-group possibilities.

</details>

<details>
<summary>Hint 2</summary>

Each group has only one three-element subset equal to itself.

</details>

<details>
<summary>Worked solution</summary>

Use a disjoint complement rather than overlapping multi-group cases.

1. The unrestricted count is $\binom93=84$.
2. The excluded subsets are the three whole groups, and they are distinct.
3. Thus eighty-one subsets meet at least two groups. Subsets meeting all three are retained once, as intended.

</details>
