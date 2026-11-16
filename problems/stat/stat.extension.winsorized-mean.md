# Winsorized mean

*Easy · [Statistics and probability](index.md)*

For the ordered values $1,2,3,4,20$, winsorize exactly one observation at each end by replacing it with its nearest retained neighbour. What is the arithmetic mean after replacement?

```answer
{"answer":{"kind":"integer","expected":"3","checker_scope":"Checks only the requested exact finite answer under the stated model; it does not certify the reasoning or modeling assumptions."}}
```

<details>
<summary>Hint 1</summary>

Winsorization changes the extreme values but keeps the number of observations unchanged.

</details>

<details>
<summary>Hint 2</summary>

Use the original second and penultimate order statistics as the two replacement values.

</details>

<details>
<summary>Worked solution</summary>

Winsorization replaces rather than discards the two extreme observations.

1. The smallest value becomes $2$ and the largest becomes $4$.
2. The transformed list is $2,2,3,4,4$, with sum $15$ and count $5$.
3. Its mean is $15/5=3$. The denominator remains $5$, unlike a trimmed mean.

</details>
