# A sum with negative covariance

*Easy · [Probability problems](index.md)*

Square-integrable variables satisfy $\operatorname{Var}(X)=4$, $\operatorname{Var}(Y)=9$ and $\operatorname{Cov}(X,Y)=-2$. Find $\operatorname{Var}(X+Y)$.

```answer
{"answer":{"kind":"integer","expected":"9","checker_scope":"Checks the sum variance using the stated nonzero covariance only."}}
```

<details>
<summary>Hint 1</summary>

Use the variance-of-a-sum identity with its covariance term.

</details>

<details>
<summary>Hint 2</summary>

The covariance is counted twice; retain its negative sign.

</details>

<details>
<summary>Worked solution</summary>

Negative covariance reduces the variance relative to the independent case.

1. Expanding the centred square gives $\operatorname{Var}(X+Y)=\operatorname{Var}(X)+\operatorname{Var}(Y)+2\operatorname{Cov}(X,Y)$.
2. The marginal contribution is $4+9=13$, and the cross contribution is $2(-2)=-4$.
3. Thus the variance is $13-4=9$. The variables are not uncorrelated because the specified covariance is nonzero.

The variance is $4+9+2(-2)=9$.

</details>
