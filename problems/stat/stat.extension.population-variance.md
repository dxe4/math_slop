# Population variance

*Medium · [Statistics and probability](index.md)*

The entire finite population has values $1,3,5$. Define its variance by $N^{-1}\sum_{i=1}^N(x_i-\bar x)^2$, using divisor $N$. What is that variance?

```answer
{"answer":{"kind":"rational","expected":{"numerator":8,"denominator":3},"checker_scope":"Checks only the requested exact finite answer under the stated model; it does not certify the reasoning or modeling assumptions."}}
```

<details>
<summary>Hint 1</summary>

Find the population mean before squaring the deviations.

</details>

<details>
<summary>Hint 2</summary>

Use the declared population divisor; the unbiased sample-variance divisor would answer a different question.

</details>

<details>
<summary>Worked solution</summary>

Centre the population values and average their squared deviations with the stated divisor.

1. The population mean is $\bar x=(1+3+5)/3=3$.
2. The squared deviations are $4,0,4$, summing to $8$.
3. With $N=3$, the population variance is $8/3$. Dividing by $N-1$ would instead give $4$.

</details>
