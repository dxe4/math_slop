# Find the greatest possible range reduction

*Hard · [Statistics and probability](index.md)*

Delete exactly one observation from $1,2,9,10$. What is the largest possible reduction in the range?

```answer
{"answer":{"kind":"integer","expected":"1","checker_scope":"Checks only the requested result under the explicitly stated finite model or convention; does not certify a modeling assumption, causal claim or open argument."}}
```

<details>
<summary>Hint 1</summary>

An interior deletion leaves both original extremes.

</details>

<details>
<summary>Hint 2</summary>

Compare deleting the minimum with deleting the maximum.

</details>

<details>
<summary>Worked solution</summary>

Only a deletion of an extreme can improve the range.

1. The initial range is nine. Deleting two or nine leaves that range unchanged.
2. Deleting one leaves range $10-2=8$; deleting ten leaves range $9-1=8$.
3. The greatest reduction is therefore $9-8=1$.

</details>
