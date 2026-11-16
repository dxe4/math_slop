# Jackknife replicates

*Easy · [Statistics and probability](index.md)*

For $9$ labelled observations, the leave-one-out jackknife forms one replicate for each omitted index. How many index-labelled replicate datasets are formed?

```answer
{"answer":{"kind":"integer","expected":"9","checker_scope":"Checks only the requested exact finite answer under the stated model; it does not certify the reasoning or modeling assumptions."}}
```

<details>
<summary>Hint 1</summary>

A replicate is identified by which observation index is left out.

</details>

<details>
<summary>Hint 2</summary>

Equal numerical values do not identify distinct omissions.

</details>

<details>
<summary>Worked solution</summary>

There is one replicate per omitted observation index.

1. The omitted index can be any element of $\{1,\ldots,9\}$.
2. Each omission leaves the other $8$ labelled observations.
3. There are $9$ replicates. Coinciding statistic values across replicates do not reduce that index-based count.

</details>
