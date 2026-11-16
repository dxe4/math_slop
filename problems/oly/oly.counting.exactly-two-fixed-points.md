# Combine fixed-point choices with derangements

*Hard · [Original olympiad-style problems](index.md)*

How many permutations of $\{1,2,3,4,5,6\}$ have exactly two fixed points?

```answer
{"answer":{"kind":"integer","expected":"135","checker_scope":"Exact short answer only; the complete argument remains a worked solution, not an automatically certified proof or contest result."}}
```

<details>
<summary>Hint 1</summary>

Choose the fixed elements first.

</details>

<details>
<summary>Hint 2</summary>

The remaining elements must have no fixed points, rather than being arbitrarily permuted.

</details>

<details>
<summary>Worked solution</summary>

An exact fixed-point count needs a derangement on the complement.

1. The two fixed positions can be chosen in $\binom62=15$ ways.
2. Inclusion-exclusion gives $D_4=4!-4\cdot3!+6\cdot2!-4\cdot1!+1=9$ derangements of the remaining positions.
3. The number is $15\cdot9=135$.

</details>
