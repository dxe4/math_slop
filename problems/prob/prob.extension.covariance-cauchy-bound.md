# A covariance magnitude bound

*Easy · [Probability problems](index.md)*

Square-integrable variables have $\operatorname{Var}(X)=4$ and $\operatorname{Var}(Y)=9$. What upper bound does Cauchy–Schwarz give for $|\operatorname{Cov}(X,Y)|$?

```answer
{"answer":{"kind":"integer","expected":"6","checker_scope":"Checks the covariance magnitude bound implied by the two variances only."}}
```

<details>
<summary>Hint 1</summary>

Apply Cauchy–Schwarz to the centred variables.

</details>

<details>
<summary>Hint 2</summary>

Take square roots of the variances and multiply the resulting standard deviations.

</details>

<details>
<summary>Worked solution</summary>

Covariance is the expectation of a product of centred variables.

1. Write $U=X-E[X]$ and $V=Y-E[Y]$, so $\operatorname{Cov}(X,Y)=E[UV]$.
2. Cauchy–Schwarz gives $|E[UV]|\le\sqrt{E[U^2]E[V^2]}$.
3. The upper bound is $\sqrt{4\cdot9}=6$. This supplies neither the sign nor the exact value of covariance.

The standard-deviation product gives the bound six.

</details>
