# Contrast variance

*Medium · [Statistics and probability](index.md)*

Let $X$ and $Y$ be independent with variances $4$ and $9$. What is $\operatorname{Var}(2X-Y)$?

```answer
{"answer":{"kind":"integer","expected":"25","checker_scope":"Checks only the requested exact finite answer under the stated model; it does not certify the reasoning or modeling assumptions."}}
```

<details>
<summary>Hint 1</summary>

Scale each variance by the square of the corresponding coefficient.

</details>

<details>
<summary>Hint 2</summary>

Independence makes the covariance term vanish, but does not turn a negative coefficient into a negative variance contribution.

</details>

<details>
<summary>Worked solution</summary>

Variance uses squared coefficients and a covariance correction.

1. The general formula is $\operatorname{Var}(2X-Y)=4\operatorname{Var}(X)+\operatorname{Var}(Y)-4\operatorname{Cov}(X,Y)$.
2. Independence and finite variances imply $\operatorname{Cov}(X,Y)=0$.
3. Therefore the requested variance is $4\cdot4+9=25$. The minus sign before $Y$ does not subtract its variance.

</details>
