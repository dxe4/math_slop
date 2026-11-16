# Weighted stratum mean

*Medium · [Statistics and probability](index.md)*

A population contains $10$ units in stratum $A$, whose population mean is $2$, and $30$ units in stratum $B$, whose population mean is $6$. What is the overall population mean?

```answer
{"answer":{"kind":"integer","expected":"5","checker_scope":"Checks only the requested exact finite answer under the stated model; it does not certify the reasoning or modeling assumptions."}}
```

<details>
<summary>Hint 1</summary>

Recover each stratum total from its size and mean.

</details>

<details>
<summary>Hint 2</summary>

Add the totals and divide by the combined number of units.

</details>

<details>
<summary>Worked solution</summary>

Population sizes, rather than equal stratum weights, determine the overall mean.

1. The two stratum totals are $10\cdot2=20$ and $30\cdot6=180$.
2. The combined total is $200$ across $40$ units.
3. The mean is $200/40=5$. The unweighted mean of the two stratum means would incorrectly give the strata equal population shares.

</details>
