# Variance of a two-point law

*Medium · [Probability problems](index.md)*

A variable $X$ takes values $0$ and $2$, each with probability $1/2$. Find $\operatorname{Var}(X)$.

```answer
{"answer":{"kind":"integer","expected":"1","checker_scope":"Checks this variance value only; written derivation is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Compute the mean before measuring deviations from it.

</details>

<details>
<summary>Hint 2</summary>

Average the squared deviations, not the deviations themselves.

</details>

<details>
<summary>Worked solution</summary>

The law is symmetric around its mean.

1. Its mean is $E[X]=0(1/2)+2(1/2)=1$.
2. Both support points have squared deviation one from this mean: $(0-1)^2=(2-1)^2=1$.
3. Therefore $\operatorname{Var}(X)=E[(X-1)^2]=(1/2)1+(1/2)1=1$. Equivalently $E[X^2]-(E[X])^2=2-1=1$.

The mean is one and every squared deviation is one, so the variance is one.

</details>
