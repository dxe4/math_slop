# Expand a nested finite sum by outer index

*Hard · [Foundations bridge](index.md)*

Evaluate $\sum_{j=1}^4\sum_{k=1}^j(2k-1)$.

```answer
{"answer":{"kind":"integer","expected":"30","checker_scope":"Exact requested bounded result only. Worked reasoning is not automatically certified; this draft introduces no new checkpoint objective or eligibility."}}
```

<details>
<summary>Hint 1</summary>

For each outer index j, the inner upper bound changes.

</details>

<details>
<summary>Hint 2</summary>

Write the four inner sums separately before adding their results.

</details>

<details>
<summary>Worked solution</summary>

The nested bounds form four different finite blocks.

1. For j=1 and j=2, the inner sums are $1$ and $1+3=4$.
2. For j=3 and j=4, they are $1+3+5=9$ and $1+3+5+7=16$.
3. The final sum is $1+4+9+16=30$.

</details>
