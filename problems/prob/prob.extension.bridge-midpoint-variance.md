# Variance remaining after a Brownian endpoint observation

*Medium · [Probability problems](index.md)*

For standard Brownian motion, find the constant value of $\operatorname{Var}(B_1\mid\sigma(B_2))$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":2},"checker_scope":"Checks the almost-sure conditional variance given the endpoint sigma-algebra only."}}
```

<details>
<summary>Hint 1</summary>

The pair $(B_1,B_2)$ is jointly Gaussian, so an uncorrelated Gaussian residual is independent of the endpoint.

</details>

<details>
<summary>Hint 2</summary>

Subtract the squared covariance divided by the endpoint variance from the original midpoint variance.

</details>

<details>
<summary>Worked solution</summary>

The independent Gaussian residual carries the conditional uncertainty.

1. The midpoint variance is one, the endpoint variance is two, and their covariance is one.
2. Set $R=B_1-B_2/2$. Its covariance with $B_2$ is zero, so joint Gaussianity gives independence, and $\operatorname{Var}(R)=1+2/4-1=1/2$.
3. Given $\sigma(B_2)$, the term $B_2/2$ is known and the independent residual keeps its variance. Thus $\operatorname{Var}(B_1\mid\sigma(B_2))=1/2$ almost surely.

Removing the endpoint projection leaves independent residual variance $1/2$.

</details>
