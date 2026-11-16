# Count integers surviving three divisibility exclusions

*Medium · [Computational arithmetic problems](index.md)*

How many integers $n$ with $1\leq n\leq1000000$ are divisible by none of $2,3,5$?

```answer
{"answer":{"kind":"integer","expected":"266666","checker_scope":"Exact requested integer or rational only; no learner program or unrestricted proof is executed or certified."}}
```

<details>
<summary>Hint 1</summary>

The pattern repeats modulo thirty.

</details>

<details>
<summary>Hint 2</summary>

Count complete blocks first, then the short final block.

</details>

<details>
<summary>Worked solution</summary>

A periodic finite sieve leaves eight classes per thirty integers.

1. The residues coprime to thirty are $1,7,11,13,17,19,23,29$, eight per complete block.
2. There are $33333$ complete blocks through $999990$. The last ten integers have residues $1$ through $10$, of which $1$ and $7$ survive.
3. The count is $8\cdot33333+2=266666$.

</details>
