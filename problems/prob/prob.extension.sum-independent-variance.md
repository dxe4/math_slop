# Variance of an independent difference

*Easy · [Probability problems](index.md)*

Independent square-integrable variables $X,Y$ have variances $2$ and $5$. Find $\operatorname{Var}(X-Y)$.

```answer
{"answer":{"kind":"integer","expected":"7","checker_scope":"Checks the difference variance under the stated independence and second-moment assumptions only."}}
```

<details>
<summary>Hint 1</summary>

Use the variance formula for a linear combination.

</details>

<details>
<summary>Hint 2</summary>

The coefficient of $Y$ is negative, but it is squared in its variance contribution. Independence removes the covariance term.

</details>

<details>
<summary>Worked solution</summary>

Subtracting an independent variable still adds its variance.

1. For square-integrable variables, $\operatorname{Var}(X-Y)=\operatorname{Var}(X)+\operatorname{Var}(Y)-2\operatorname{Cov}(X,Y)$.
2. Independence implies $E[XY]=E[X]E[Y]$, so the covariance is zero.
3. The requested variance is $2+5=7$. Subtracting the marginal variances would neglect the squared coefficient.

Zero covariance makes the difference variance $2+5=7$.

</details>
