# Standard error of a regression slope

*Difficulty 3 of 5 · [Probability and statistics core practice](index.md) · exercise 7 of 12*

In a simple linear regression with five observations, the $x$-values are $1,2,3,4,5$ and the residual standard error is $s=2$. Compute the standard error of the least-squares slope estimator. State the formula you use.

<details>
<summary>Hint 1</summary>

$\widehat{\mathrm{SE}}(\hat\beta_1)=s/\sqrt{\sum(x_i-\bar x)^2}$

</details>

<details>
<summary>Hint 2</summary>

First compute the sum of squared centered $x$-values

</details>

<details>
<summary>Worked solution</summary>

The mean of the $x$-values is $\bar x=3$. The centered values are $-2,-1,0,1,2$, and their squares sum to $4+1+0+1+4=10$. The standard error of the slope is $\widehat{\mathrm{SE}}(\hat\beta_1)=s/\sqrt{\sum(x_i-\bar x)^2}=2/\sqrt{10}\approx 0.632$. This measures the precision of the slope estimate under the usual homoscedasticity and independence assumptions.

**Answer.** $2/\sqrt{10}\approx 0.632$.

</details>

*Tags: regression, standard error, least squares*
