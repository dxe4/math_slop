# Extract a middle block from prefix information

*Medium · [Foundations bridge](index.md)*

You know $\sum_{k=1}^8 a_k=30$, $\sum_{k=1}^3 a_k=7$ and $a_9=-4$. Find $\sum_{k=4}^9a_k$.

```answer
{"answer":{"kind":"integer","expected":"19","checker_scope":"Exact requested bounded result only. Worked reasoning is not automatically certified; this draft introduces no new checkpoint objective or eligibility."}}
```

<details>
<summary>Hint 1</summary>

Subtract the shorter prefix from the longer prefix.

</details>

<details>
<summary>Hint 2</summary>

The ninth term lies outside the given longer prefix and must then be included once.

</details>

<details>
<summary>Worked solution</summary>

Nonoverlapping blocks prevent omitted or duplicated indices.

1. The sum from k=4 through eight is $30-7=23$.
2. Include the ninth term, whose value is -4.
3. The required sum is $23-4=19$.

</details>
