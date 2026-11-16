# One stage cluster total

*Easy · [Statistics and probability](index.md)*

A population has $4$ equal-size clusters. Select one cluster uniformly and observe its entire total, which is $6$. What is the inverse-inclusion expansion estimate of the population total?

```answer
{"answer":{"kind":"integer","expected":"24","checker_scope":"Checks only the requested exact finite answer under the stated model; it does not certify the reasoning or modeling assumptions."}}
```

<details>
<summary>Hint 1</summary>

The sampled object for this design is a cluster total.

</details>

<details>
<summary>Hint 2</summary>

Weight the observed cluster total by the reciprocal of its inclusion probability.

</details>

<details>
<summary>Worked solution</summary>

Expand the one observed cluster total across the number of equally likely clusters.

1. Each cluster has inclusion probability $1/4$.
2. The inverse-inclusion estimator is $6/(1/4)=4\cdot6$.
3. The estimated population total is $24$. This design does not independently sample every individual within the chosen cluster.

</details>
