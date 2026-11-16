# Difference in differences arithmetic

*Easy · [Statistics and probability](index.md)*

A treated group mean changes from $4$ to $9$, while a comparison group mean changes from $3$ to $6$. What is the treated change minus the comparison change?

```answer
{"answer":{"kind":"integer","expected":"2","checker_scope":"Checks only the requested exact finite answer under the stated model; it does not certify the reasoning or modeling assumptions."}}
```

<details>
<summary>Hint 1</summary>

Use the same after-minus-before direction for both groups.

</details>

<details>
<summary>Hint 2</summary>

Only after computing both changes should you subtract the comparison change.

</details>

<details>
<summary>Worked solution</summary>

The contrast removes the observed comparison-group change from the treated-group change.

1. The treated change is $9-4=5$.
2. The comparison change is $6-3=3$.
3. The observed difference is $5-3=2$. Interpreting that contrast as a causal treatment effect needs additional assumptions, such as an appropriate parallel-trends condition.

</details>
