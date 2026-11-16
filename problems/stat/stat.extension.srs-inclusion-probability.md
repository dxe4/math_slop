# Srs inclusion probability

*Easy · [Statistics and probability](index.md)*

A simple random sample of $3$ units is drawn without replacement from $12$ labelled units, meaning every $3$-subset is equally likely. What is the inclusion probability of one specified unit?

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":4},"checker_scope":"Checks only the requested exact finite answer under the stated model; it does not certify the reasoning or modeling assumptions."}}
```

<details>
<summary>Hint 1</summary>

Every unit has the same inclusion probability by symmetry.

</details>

<details>
<summary>Hint 2</summary>

Add the inclusion indicators over the population; their sum is the fixed sample size.

</details>

<details>
<summary>Worked solution</summary>

Equal inclusion chances sum to the fixed number selected.

1. If the common inclusion probability is $p$, linearity gives $\sum_{i=1}^{12}E I_i=12p$.
2. The sum of the indicators is exactly $3$ in every possible sample, so $12p=3$.
3. Hence $p=3/12=1/4$. The indicators need not be independent.

</details>
