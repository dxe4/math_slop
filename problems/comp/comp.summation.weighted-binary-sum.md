# Shift a weighted geometric sum

*Medium · [Computational arithmetic problems](index.md)*

Compute $S=\sum_{k=0}^{20}k2^k$ exactly.

```answer
{"answer":{"kind":"integer","expected":"39845890","checker_scope":"Exact requested integer only; no learner program or unrestricted proof is executed or certified."}}
```

<details>
<summary>Hint 1</summary>

Compare $S$ with twice itself after shifting the index.

</details>

<details>
<summary>Hint 2</summary>

The intermediate terms leave an ordinary geometric sum and one boundary term.

</details>

<details>
<summary>Worked solution</summary>

An index shift removes the linear weight.

1. Write $2S=\sum_{j=1}^{21}(j-1)2^j$. Subtracting $S$ gives $S=20\cdot2^{21}-\sum_{j=1}^{20}2^j$.
2. The geometric sum is $2^{21}-2$, so $S=19\cdot2^{21}+2$.
3. With $2^{21}=2097152$, the result is $39845890$.

</details>
