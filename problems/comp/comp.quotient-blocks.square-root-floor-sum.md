# Group square-root floors between squares

*Medium · [Computational arithmetic problems](index.md)*

Compute $\sum_{n=1}^{10000}\lfloor\sqrt n\rfloor$ exactly.

```answer
{"answer":{"kind":"integer","expected":"661750","checker_scope":"Exact requested integer only; no learner program or unrestricted proof is executed or certified."}}
```

<details>
<summary>Hint 1</summary>

The floor equals $k$ from $n=k^2$ through the integer before $(k+1)^2$.

</details>

<details>
<summary>Hint 2</summary>

The last perfect square forms a shortened final block.

</details>

<details>
<summary>Worked solution</summary>

Consecutive square gaps give explicit floor-block lengths.

1. For $1\leq k\leq99$, the block from $k^2$ through $(k+1)^2-1$ has $2k+1$ entries, each contributing $k$. The endpoint $10000$ contributes $100$.
2. The sum is $2\sum_{k=1}^{99}k^2+\sum_{k=1}^{99}k+100$.
3. Using $\sum k^2=328350$ and $\sum k=4950$ gives $656700+4950+100=661750$.

</details>
