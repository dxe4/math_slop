# Correlation under a positive affine relation

*Medium · [Probability problems](index.md)*

Let $X$ be square-integrable with $0<\operatorname{Var}(X)<\infty$, and let $Y=3X+2$ almost surely. Find $\operatorname{Corr}(X,Y)$.

```answer
{"answer":{"kind":"integer","expected":"1","checker_scope":"Checks correlation under the stated nondegenerate square-integrable affine relation only."}}
```

<details>
<summary>Hint 1</summary>

Calculate the covariance and both standard deviations from the affine relation.

</details>

<details>
<summary>Hint 2</summary>

The positive scale has the same magnitude in the covariance numerator and standard-deviation product denominator.

</details>

<details>
<summary>Worked solution</summary>

The centred variables are positive scalar multiples.

1. Writing $v=\operatorname{Var}(X)>0$, the relation gives $Y-E[Y]=3(X-E[X])$, so $\operatorname{Cov}(X,Y)=3v$.
2. Also $\operatorname{Var}(Y)=9v$, making the standard-deviation product $\sqrt v\sqrt{9v}=3v>0$.
3. The well-defined correlation is $3v/(3v)=1$. The finite positive variance assumption matters: a constant variable or an infinite second moment would not permit this calculation.

The covariance and standard-deviation product both equal $3\operatorname{Var}(X)$, giving correlation one.

</details>
