# Group a floor sum by constant blocks

*Medium · [Computational arithmetic problems](index.md)*

Compute $\sum_{k=1}^{1000}\lfloor k/7\rfloor$.

```answer
{"answer":{"kind":"integer","expected":"71071","checker_scope":"Exact requested integer only; no learner program or unrestricted proof is executed or certified."}}
```

<details>
<summary>Hint 1</summary>

You may include the zero-index term, which adds nothing.

</details>

<details>
<summary>Hint 2</summary>

The integers from zero through the upper endpoint form complete blocks of seven.

</details>

<details>
<summary>Worked solution</summary>

Quotient blocks replace a thousand floors by an arithmetic sum.

1. The range $0\leq k\leq1000$ consists of $143$ complete seven-term blocks, with quotients $0,1,\ldots,142$.
2. Thus the sum is $7\sum_{q=0}^{142}q=7\cdot142\cdot143/2$.
3. The value is $71071$, unchanged by omitting the $k=0$ term.

</details>
