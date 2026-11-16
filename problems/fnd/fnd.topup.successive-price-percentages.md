# Keep track of two different percentage bases

*Medium · [Foundations bridge](index.md)*

A price of $80$ units is reduced by $20\%$. The reduced price is then increased by $25\%$. What is the final price?

```answer
{"answer":{"kind":"integer","expected":"80","checker_scope":"Exact requested bounded result only. The worked reasoning is not automatically certified, and this draft adds no new checkpoint objective or eligibility."}}
```

<details>
<summary>Hint 1</summary>

The increase is a percentage of the reduced price.

</details>

<details>
<summary>Hint 2</summary>

Compute the first price change before choosing the base for the second change.

</details>

<details>
<summary>Worked solution</summary>

Successive percentages act on successive bases.

1. The reduction is $20\%$ of $80$, or $16$, leaving $64$.
2. The increase is $25\%$ of $64$, or $16$.
3. The final price is $64+16=80$.

</details>
