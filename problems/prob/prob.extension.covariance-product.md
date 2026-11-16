# Covariance from a mixed moment

*Easy · [Probability problems](index.md)*

Square-integrable variables satisfy $E[X]=1$, $E[Y]=2$ and $E[XY]=5$. Find $\operatorname{Cov}(X,Y)$.

```answer
{"answer":{"kind":"integer","expected":"3","checker_scope":"Checks the covariance from these supplied moments only."}}
```

<details>
<summary>Hint 1</summary>

Recall the covariance identity in terms of the mixed moment and the two means.

</details>

<details>
<summary>Hint 2</summary>

Subtract the product of means from the mixed moment, rather than the mixed moment from the product.

</details>

<details>
<summary>Worked solution</summary>

Covariance measures the difference between the mixed moment and the mean product.

1. Square integrability implies $XY$ is integrable by Cauchy–Schwarz, so all terms in the covariance formula are defined.
2. The formula is $\operatorname{Cov}(X,Y)=E[XY]-E[X]E[Y]$.
3. Substitution gives $5-1\cdot2=3$. Since it is nonzero, these variables cannot be independent.

Subtracting the mean product gives $5-2=3$.

</details>
