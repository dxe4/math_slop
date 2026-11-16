# Count relation pairs by first coordinate

*Medium · [Set theory](index.md)*

On $A=\{1,2,3,4\}$ define R by (x,y) in R exactly when x divides y. How many ordered pairs belong to R?

```answer
{"answer":{"kind":"integer","expected":"8","checker_scope":"Exact declared bounded result, explicit interval description or selected statement only; no unrestricted set proof or new checkpoint objective is automatically certified."}}
```

<details>
<summary>Hint 1</summary>

The divisibility direction matters.

</details>

<details>
<summary>Hint 2</summary>

For each first coordinate count its multiples within A.

</details>

<details>
<summary>Worked solution</summary>

Disjoint first-coordinate rows partition the relation.

1. For x=1 there are four possible y-values; for x=2 there are two, namely two and four.
2. For x=3 and x=4 there is one possible y each, the number itself.
3. The relation therefore has $4+2+1+1=8$ pairs.

</details>
