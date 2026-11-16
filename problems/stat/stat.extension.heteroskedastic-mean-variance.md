# Heteroskedastic mean variance

*Medium · [Statistics and probability](index.md)*

Independent errors $\varepsilon_1,\varepsilon_2,\varepsilon_3$ have variances $1,4,9$. What is the variance of their arithmetic mean $\overline\varepsilon$?

```answer
{"answer":{"kind":"rational","expected":{"numerator":14,"denominator":9},"checker_scope":"Checks only the requested exact finite answer under the stated model; it does not certify the reasoning or modeling assumptions."}}
```

<details>
<summary>Hint 1</summary>

Expand the variance of a sum, using independence to handle cross-covariances.

</details>

<details>
<summary>Hint 2</summary>

Multiplying a random variable by a constant multiplies its variance by the square of that constant.

</details>

<details>
<summary>Worked solution</summary>

Add the independent variances, then apply the squared averaging factor.

1. Independence gives $\operatorname{Var}(\varepsilon_1+\varepsilon_2+\varepsilon_3)=1+4+9=14$.
2. The arithmetic mean is $\overline\varepsilon=(\varepsilon_1+\varepsilon_2+\varepsilon_3)/3$.
3. Therefore $\operatorname{Var}(\overline\varepsilon)=14/3^2=14/9$. Equal variances are not assumed, and averaging the three variances would give the wrong scaling.

</details>
