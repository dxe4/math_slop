# Evaluate the Gaussian bridge mean

*Medium · [Probability problems](index.md)*

For standard Brownian motion, use the continuous Gaussian regular conditional law of $B_1$ given $B_2=b$. Evaluate its conditional mean at $b=4$. The specified Gaussian version is intended, rather than division by the probability-zero event $\{B_2=4\}$.

```answer
{"answer":{"kind":"integer","expected":"2","checker_scope":"Checks the value at endpoint four of the explicitly specified continuous Gaussian conditional-mean version only; arbitrary changes on conditioning null sets are excluded."}}
```

<details>
<summary>Hint 1</summary>

Remove a multiple of $B_2$ from $B_1$ to make a Gaussian residual uncorrelated with $B_2$.

</details>

<details>
<summary>Hint 2</summary>

Compute the covariance divided by the endpoint variance. The residual is independent and centred, leaving a linear conditional mean as a function of the endpoint.

</details>

<details>
<summary>Worked solution</summary>

Specify the Gaussian conditional version through an independent residual.

1. The joint Gaussian pair has $\operatorname{Cov}(B_1,B_2)=1$ and $\operatorname{Var}(B_2)=2$. Thus $R=B_1-B_2/2$ has zero covariance with $B_2$ and is independent of it by joint Gaussianity.
2. The residual is centred with variance $1/2$. The Gaussian kernel $N(b/2,1/2)$ therefore gives a regular conditional law at each real endpoint $b$, with continuous mean $b/2$.
3. At $b=4$ the specified mean is $4/2=2$. Since $P(B_2=4)=0$, an unspecified conditional version could be changed there; the selected Gaussian kernel makes this evaluation unambiguous.

The selected conditional-mean function is $b/2$, so its value at four is two.

</details>
