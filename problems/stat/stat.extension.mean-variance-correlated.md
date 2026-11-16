# Mean variance correlated

*Medium · [Statistics and probability](index.md)*

Two observations $X,Y$ each have variance $1$ and have covariance $1/2$. What is the variance of their arithmetic mean $(X+Y)/2$?

```answer
{"answer":{"kind":"rational","expected":{"numerator":3,"denominator":4},"checker_scope":"Checks only the requested exact finite answer under the stated model; it does not certify the reasoning or modeling assumptions."}}
```

<details>
<summary>Hint 1</summary>

Expand the variance of the sum, retaining its covariance contribution.

</details>

<details>
<summary>Hint 2</summary>

Convert from the sum to the mean using the square of the scaling coefficient.

</details>

<details>
<summary>Worked solution</summary>

Covariance contributes to the mean variance before the averaging factor is applied.

1. The sum variance is $\operatorname{Var}(X+Y)=1+1+2(1/2)=3$.
2. Therefore $\operatorname{Var}((X+Y)/2)=3/2^2=3/4$.
3. With zero covariance the value would instead be $1/2$. The positive covariance reduces the variance reduction obtained by averaging these two observations.

</details>
