# Variance of a five-variable mean

*Medium · [Probability problems](index.md)*

Five mutually independent square-integrable variables each have variance $10$. Find the variance of their arithmetic mean $\bar X=(X_1+\cdots+X_5)/5$.

```answer
{"answer":{"kind":"integer","expected":"2","checker_scope":"Checks the mean variance under the stated independent finite-variance model only."}}
```

<details>
<summary>Hint 1</summary>

First calculate the variance of the sum.

</details>

<details>
<summary>Hint 2</summary>

Dividing a variable by five divides its variance by the square of five.

</details>

<details>
<summary>Worked solution</summary>

Combine independent variance addition with squared scaling.

1. Independence makes every pair covariance zero, so the sum variance is $5\cdot10=50$.
2. The mean is the sum multiplied by $1/5$, so its variance is the sum variance multiplied by $(1/5)^2$.
3. Thus $\operatorname{Var}(\bar X)=50/25=2$. Equal means or identical full distributions are not required.

The sum variance fifty is divided by twenty-five, giving two.

</details>
