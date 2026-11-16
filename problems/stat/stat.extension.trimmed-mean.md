# Trimmed mean

*Easy · [Statistics and probability](index.md)*

For the ordered values $1,2,3,4,20$, delete exactly one value from each end. What is the arithmetic mean of the retained observations?

```answer
{"answer":{"kind":"integer","expected":"3","checker_scope":"Checks only the requested exact finite answer under the stated model; it does not certify the reasoning or modeling assumptions."}}
```

<details>
<summary>Hint 1</summary>

Identify which order positions are discarded; trimming deletes values rather than replacing them.

</details>

<details>
<summary>Hint 2</summary>

Use the sum and the number of retained values, not the original sample size.

</details>

<details>
<summary>Worked solution</summary>

A trimmed mean averages only the observations left after the prescribed deletions.

1. Deleting the two extreme observations removes $1$ and $20$.
2. The retained observations are $2,3,4$, with sum $9$ and count $3$.
3. The trimmed mean is $9/3=3$; dividing by $5$ would incorrectly include deleted positions.

</details>
