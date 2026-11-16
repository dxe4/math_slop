# Covariance with a negative copy

*Medium · [Probability problems](index.md)*

A variable $X$ takes $-1$ and $1$ with equal probabilities, and $Y=-X$. Find $\operatorname{Cov}(X,Y)$.

```answer
{"answer":{"kind":"integer","expected":"-1","checker_scope":"Checks the covariance of the explicitly coupled variables only."}}
```

<details>
<summary>Hint 1</summary>

Compute the two means and the product $XY$.

</details>

<details>
<summary>Hint 2</summary>

Use $\operatorname{Cov}(X,Y)=E[XY]-E[X]E[Y]$; the variables are coupled, not independent.

</details>

<details>
<summary>Worked solution</summary>

The product is always negative while both means vanish.

1. Symmetry gives $E[X]=0$, and $Y=-X$ gives $E[Y]=0$.
2. Since $X^2=1$ in either case, $XY=-X^2=-1$ almost surely and $E[XY]=-1$.
3. Thus $\operatorname{Cov}(X,Y)=-1-0\cdot0=-1$. Covariance can be negative although each variance is nonnegative.

Both means are zero and the product is always minus one, giving covariance minus one.

</details>
