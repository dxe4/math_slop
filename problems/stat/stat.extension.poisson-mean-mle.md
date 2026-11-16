# Poisson mean mle

*Medium · [Statistics and probability](index.md)*

Independent observations from a common $\operatorname{Poisson}(\lambda)$ law are $1,2,3$, where $\lambda\ge0$. What is the maximum-likelihood estimate of $\lambda$?

```answer
{"answer":{"kind":"integer","expected":"2","checker_scope":"Checks only the requested exact finite answer under the stated model; it does not certify the reasoning or modeling assumptions."}}
```

<details>
<summary>Hint 1</summary>

Multiply the three Poisson mass functions, then ignore factors constant in the parameter.

</details>

<details>
<summary>Hint 2</summary>

Differentiate the log likelihood for positive parameter values; check the boundary separately.

</details>

<details>
<summary>Worked solution</summary>

Maximize the Poisson likelihood over its stated parameter space.

1. For $\lambda>0$, $L(\lambda)=e^{-3\lambda}\lambda^{1+2+3}/(1!2!3!)$. Its log, up to a constant, is $-3\lambda+6\log\lambda$.
2. The derivative is $-3+6/\lambda$, positive for $0<\lambda<2$ and negative for $\lambda>2$.
3. Thus the unique interior maximum is $\widehat\lambda=2$. At $\lambda=0$ these positive observations have probability zero, so the boundary cannot improve it.

</details>
