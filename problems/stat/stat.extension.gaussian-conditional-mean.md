# Gaussian conditional mean

*Easy · [Statistics and probability](index.md)*

A centered jointly Gaussian pair $(X,Y)$ has $\operatorname{Var}(X)=4$ and $\operatorname{Cov}(X,Y)=2$. Using the usual continuous version of its conditional mean as a function of $x$, what is $E[Y\mid X=x]$ at $x=2$?

```answer
{"answer":{"kind":"integer","expected":"1","checker_scope":"Checks only the requested exact finite answer under the stated model; it does not certify the reasoning or modeling assumptions."}}
```

<details>
<summary>Hint 1</summary>

For a jointly Gaussian pair the conditional mean is linear in the conditioning variable.

</details>

<details>
<summary>Hint 2</summary>

Its slope is the covariance divided by the variance of the conditioning variable, not by the variance of the response.

</details>

<details>
<summary>Worked solution</summary>

Evaluate the Gaussian conditional-mean line at the requested predictor value.

1. With zero means the continuous conditional-mean function is $m(x)=[\operatorname{Cov}(Y,X)/\operatorname{Var}(X)]x=(2/4)x$.
2. Consequently $m(2)=(1/2)\cdot2=1$.
3. One way to see the formula is to set $R=Y-X/2$. The residual is jointly Gaussian with $X$ and has covariance $2-4/2=0$, so it is independent of $X$ and has mean zero.
4. The continuous version specifies the value at the individual point $x=2$. Since a nondegenerate Gaussian $X$ assigns that point probability zero, an arbitrary almost-everywhere version alone would not fix its value there.

</details>
