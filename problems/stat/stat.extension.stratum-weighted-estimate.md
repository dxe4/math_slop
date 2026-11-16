# Stratum weighted estimate

*Medium · [Statistics and probability](index.md)*

Two population strata have sizes $N_1=2$ and $N_2=6$. Their sample means are $\bar y_1=1$ and $\bar y_2=5$. What is the stratified estimate $(N_1\bar y_1+N_2\bar y_2)/(N_1+N_2)$ of the population mean?

```answer
{"answer":{"kind":"integer","expected":"4","checker_scope":"Checks only the requested exact finite answer under the stated model; it does not certify the reasoning or modeling assumptions."}}
```

<details>
<summary>Hint 1</summary>

Each stratum represents its population size, not merely the number of observed values.

</details>

<details>
<summary>Hint 2</summary>

Combine estimated stratum totals before dividing by the total population size.

</details>

<details>
<summary>Worked solution</summary>

Population weights make the larger stratum contribute more to the overall estimate.

1. The estimated stratum totals are $2\cdot1=2$ and $6\cdot5=30$.
2. The total estimated outcome is $32$ across $2+6=8$ population units.
3. The estimated mean is $32/8=4$. An unweighted average of the stratum means would target different weights.

</details>
