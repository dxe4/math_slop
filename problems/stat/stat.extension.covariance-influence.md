# Covariance influence

*Medium · [Statistics and probability](index.md)*

For the paired finite-population observations $(1,1),(2,2),(3,3)$, define covariance as $N^{-1}\sum_i(x_i-\bar x)(y_i-\bar y)$. What is the covariance?

```answer
{"answer":{"kind":"rational","expected":{"numerator":2,"denominator":3},"checker_scope":"Checks only the requested exact finite answer under the stated model; it does not certify the reasoning or modeling assumptions."}}
```

<details>
<summary>Hint 1</summary>

Centre each coordinate using its own population mean.

</details>

<details>
<summary>Hint 2</summary>

Average the products of corresponding centred coordinates, using the declared divisor.

</details>

<details>
<summary>Worked solution</summary>

Population covariance averages paired centred products, and here both coordinates coincide.

1. Both coordinate means are $2$.
2. The centred pairs are $(-1,-1),(0,0),(1,1)$, with products $1,0,1$.
3. The sum is $2$ and the population count is $3$, so the covariance is $2/3$. It equals the population variance here because $X=Y$.

</details>
