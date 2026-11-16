# Srs mean design variance

*Medium · [Statistics and probability](index.md)*

The finite population is $0,2,4,6$. Choose a simple random sample of $n=2$ units without replacement. With $S^2=(N-1)^{-1}\sum_i(y_i-\bar Y)^2$, what is the design variance $\operatorname{Var}(\bar y)$ of the sample mean?

```answer
{"answer":{"kind":"rational","expected":{"numerator":5,"denominator":3},"checker_scope":"Checks only the requested exact finite answer under the stated model; it does not certify the reasoning or modeling assumptions."}}
```

<details>
<summary>Hint 1</summary>

Compute the finite-population mean and the variance with the specified divisor.

</details>

<details>
<summary>Hint 2</summary>

Use the without-replacement correction and the sample-size factor; the population variance alone is not the sample-mean variance.

</details>

<details>
<summary>Worked solution</summary>

The sampling design reduces variability through the finite-population correction.

1. The population mean is $3$, and the squared deviations sum to $9+1+1+9=20$, giving $S^2=20/3$.
2. The sampling fraction is $2/4=1/2$, so $\operatorname{Var}(\bar y)=(1/2)(20/3)/2$.
3. The result is $5/3$. As a direct design description, the six equally likely sample means are $1,2,3,3,4,5$; their squared deviations from $3$ average to the same value.

</details>
