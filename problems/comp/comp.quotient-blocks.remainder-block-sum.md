# Sum residues in complete blocks

*Medium · [Computational arithmetic problems](index.md)*

For each integer $k$, let $r_k$ be the remainder in $\{0,1,\ldots,6\}$ on division by seven. Compute $\sum_{k=1}^{1000}r_k$.

```answer
{"answer":{"kind":"integer","expected":"3003","checker_scope":"Exact requested integer only; no learner program or unrestricted proof is executed or certified."}}
```

<details>
<summary>Hint 1</summary>

Include $k=0$ without changing the sum.

</details>

<details>
<summary>Hint 2</summary>

Every complete seven-term block contains each remainder once.

</details>

<details>
<summary>Worked solution</summary>

Complete residue blocks have a fixed total.

1. The range from zero through $1000$ has $1001=143\cdot7$ entries.
2. Each consecutive seven-entry block contributes $0+1+\cdots+6=21$.
3. Therefore the sum is $143\cdot21=3003$.

</details>
