# Latent bernoulli covariance

*Hard · [Original Putnam-style training](index.md)*

Let $P$ be a random variable in $[0,1]$; conditional on $P$, let $X_1,X_2$ be independent Bernoulli$(P)$. Prove $\operatorname{Cov}(X_1,X_2)=\operatorname{Var}(P)$ and characterize zero covariance.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Condition on the latent probability $P$.

</details>

<details>
<summary>Hint 2</summary>

Compute $E[X_1X_2]$ and both marginal means separately.

</details>

<details>
<summary>Model proof</summary>

Therefore covariance is $E[P^2]-(EP)^2=\operatorname{Var}(P)\ge0$. It is zero exactly when $P$ is almost surely constant.

1. Conditional independence gives $E[X_1X_2\mid P]=P^2$, so $E[X_1X_2]=E[P^2]$.
2. Also $E[X_1]=E[E[X_1\mid P]]=E[P]$, and similarly for $X_2$.
3. Therefore covariance is $E[P^2]-(EP)^2=\operatorname{Var}(P)\ge0$. It is zero exactly when $P$ is almost surely constant.

**Self-assessment rubric**

- Use conditional independence to obtain E\[X1X2\]=E\[P²\].
- Apply iterated expectation to obtain both means E\[P\].
- Subtract products and characterize zero latent variance.

</details>
