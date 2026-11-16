# Sample total expansion

*Easy · [Statistics and probability](index.md)*

A finite population has $N=10$ units. A simple random sample of $n=2$ units gives values $3$ and $7$. What is the expansion estimate $N\bar y$ of the population total?

```answer
{"answer":{"kind":"integer","expected":"50","checker_scope":"Checks only the requested exact finite answer under the stated model; it does not certify the reasoning or modeling assumptions."}}
```

<details>
<summary>Hint 1</summary>

Compute the observed sample mean.

</details>

<details>
<summary>Hint 2</summary>

Expand a mean per unit to a population total using the known population size.

</details>

<details>
<summary>Worked solution</summary>

The expansion estimator scales the sample mean to the population count.

1. The sample mean is $\bar y=(3+7)/2=5$.
2. The estimator is $N\bar y=10\cdot5$.
3. Thus the estimated total is $50$. This is an estimate from the sample, not a claim that the unobserved values are known.

</details>
