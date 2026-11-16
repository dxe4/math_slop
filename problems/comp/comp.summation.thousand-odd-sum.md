# Pair an odd-number progression

*Easy · [Computational arithmetic problems](index.md)*

Compute $1+3+5+\cdots+1999$.

```answer
{"answer":{"kind":"integer","expected":"1000000","checker_scope":"Exact requested integer only; no learner program or unrestricted proof is executed or certified."}}
```

<details>
<summary>Hint 1</summary>

First determine the number of terms.

</details>

<details>
<summary>Hint 2</summary>

Use either the arithmetic-progression formula or a square-area decomposition.

</details>

<details>
<summary>Worked solution</summary>

The first thousand odd integers sum to the square of their count.

1. The last term is $2\cdot1000-1$, so there are $1000$ terms.
2. Their mean is $(1+1999)/2=1000$.
3. The sum is $1000\cdot1000=1000000$.

</details>
