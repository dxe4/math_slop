# Count compatible Jordan partitions

*Medium · [Abstract algebra problems](index.md)*

A nilpotent Q-linear operator on Q^4 has minimal polynomial $t^2$. How many similarity classes are possible?

```answer
{"answer":{"kind":"integer","expected":"2","checker_scope":"Exact requested finite invariant only. Graduate algebra reasoning, classification hypotheses and proofs are supplied for personal study and are not automatically certified. This new skill does not expand any existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

The largest Jordan block has size exactly two.

</details>

<details>
<summary>Hint 2</summary>

Partition total dimension four using parts at most two, with at least one part two.

</details>

<details>
<summary>Worked solution</summary>

Characteristic dimension and minimal-polynomial degree impose different restrictions on Jordan partitions.

1. All Jordan block sizes are one or two, and a size-two block must occur because the minimal polynomial is exactly t squared.
2. The permitted partitions are 2+2 and 2+1+1.
3. Each gives one nilpotent similarity class, so there are two.

</details>
