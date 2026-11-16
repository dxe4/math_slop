# Mean shift one outlier

*Easy · [Statistics and probability](index.md)*

Four observations have arithmetic mean $5$. Increase exactly one observation by $8$, leaving the sample size unchanged. What is the new mean?

```answer
{"answer":{"kind":"integer","expected":"7","checker_scope":"Checks only the requested exact finite answer under the stated model; it does not certify the reasoning or modeling assumptions."}}
```

<details>
<summary>Hint 1</summary>

Recover the original total from the mean and sample size.

</details>

<details>
<summary>Hint 2</summary>

The change to the total is the change to that one observation; redistribute it over the unchanged sample size.

</details>

<details>
<summary>Worked solution</summary>

A change in one observation changes the total by the same amount.

1. The original total is $4\cdot5=20$.
2. The new total is $20+8=28$, while there are still $4$ observations.
3. The new mean is $28/4=7$, an increase of $8/4=2$.

</details>
