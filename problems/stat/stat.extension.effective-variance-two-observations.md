# Effective variance two observations

*Medium · [Statistics and probability](index.md)*

Two mean-zero measurements $X_1,X_2$ have common variance $2$ and covariance $1$. What is $\operatorname{Var}((X_1+X_2)/2)$?

```answer
{"answer":{"kind":"rational","expected":{"numerator":3,"denominator":2},"checker_scope":"Checks only the requested exact finite answer under the stated model; it does not certify the reasoning or modeling assumptions."}}
```

<details>
<summary>Hint 1</summary>

Account for both variances and both covariance cross-terms in the variance of the sum.

</details>

<details>
<summary>Hint 2</summary>

The mean is half the sum, so its variance is one quarter of the sum variance.

</details>

<details>
<summary>Worked solution</summary>

Average dependent measurements with the covariance term included.

1. The sum variance is $\operatorname{Var}(X_1+X_2)=2+2+2\cdot1=6$.
2. The variance of their mean is $6/4=3/2$.
3. Each individual measurement has variance $2$, so averaging helps here, but gives a smaller reduction than independent equal-variance measurements would. Mean zero is compatible with the calculation but is not necessary for this variance identity.

</details>
