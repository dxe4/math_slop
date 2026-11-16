# Empirical resample mean

*Easy · [Statistics and probability](index.md)*

The empirical data are $1,1,4$. Choose one of the $3$ observation positions uniformly. What is the expected value of this one-draw resample mean?

```answer
{"answer":{"kind":"integer","expected":"2","checker_scope":"Checks only the requested exact finite answer under the stated model; it does not certify the reasoning or modeling assumptions."}}
```

<details>
<summary>Hint 1</summary>

Equal probability is assigned to positions, including both copies of the repeated value.

</details>

<details>
<summary>Hint 2</summary>

Use the probability-weighted sum of the three position values.

</details>

<details>
<summary>Worked solution</summary>

The empirical expectation weights repeated observations with their empirical multiplicity.

1. The three position probabilities are each $1/3$.
2. The expectation is $(1+1+4)/3$.
3. The value is $2$. Giving the two distinct numerical values equal probability would incorrectly change the empirical distribution.

</details>
