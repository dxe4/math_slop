# Median absolute deviation

*Medium · [Statistics and probability](index.md)*

For the data $1,2,2,3,9$, define the unscaled median absolute deviation by $\operatorname{MAD}=\operatorname{median}_i|x_i-\operatorname{median}_j x_j|$. What is $\operatorname{MAD}$?

```answer
{"answer":{"kind":"integer","expected":"1","checker_scope":"Checks only the requested exact finite answer under the stated model; it does not certify the reasoning or modeling assumptions."}}
```

<details>
<summary>Hint 1</summary>

Find the central order statistic of the original data before forming any deviations.

</details>

<details>
<summary>Hint 2</summary>

Order the absolute deviations themselves; their order need not match the order of the data.

</details>

<details>
<summary>Worked solution</summary>

MAD uses a median twice: once to locate the centre and once to summarize absolute deviations.

1. The original median is the third ordered value, $2$.
2. The absolute deviations are $1,0,0,1,7$, which sort to $0,0,1,1,7$.
3. The middle deviation is $1$, so the unscaled $\operatorname{MAD}$ is $1$. No normal-consistency scale factor is requested.

</details>
