# Treatment allocation count

*Easy · [Statistics and probability](index.md)*

Exactly $2$ of $4$ labelled plots are chosen uniformly to receive treatment $A$; the remaining plots receive treatment $B$. How many distinct allocations are possible?

```answer
{"answer":{"kind":"integer","expected":"6","checker_scope":"Checks only the requested exact finite answer under the stated model; it does not certify the reasoning or modeling assumptions."}}
```

<details>
<summary>Hint 1</summary>

An allocation is fixed once the set receiving treatment $A$ is chosen.

</details>

<details>
<summary>Hint 2</summary>

Order within a treatment group does not create another allocation.

</details>

<details>
<summary>Worked solution</summary>

Allocations correspond to unordered treatment subsets.

1. Choose the $2$ labels assigned to $A$ from the $4$ plots.
2. There are $\binom42=4\cdot3/(2\cdot1)$ such subsets.
3. The number is $6$. Counting the selected pair in both orders would double-count each allocation.

</details>
