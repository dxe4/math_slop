# Maximum likelihood with a growing collection of means

*Hard · [Statistics and probability](index.md)*

For groups $i=1,\ldots,n$, observe independent pairs $X_i,Y_i\sim N(\mu_i,\sigma^2)$, all observations independent, with a common unknown $\sigma^2>0$ and unrestricted deterministic group means. Derive the joint maximum-likelihood variance estimator and its probability limit as $n\to\infty$. Construct a consistent estimator from the same data and explain the source of the MLE failure.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific rubric reflection only; no automatic correctness verdict or required checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Profile out each group mean before optimizing the common scale.

</details>

<details>
<summary>Hint 2</summary>

Within-pair differences remove the growing nuisance means and have a common distribution.

</details>

<details>
<summary>Model proof</summary>

Fitting a new mean to every pair consumes a fixed fraction of the variance information.

1. At fixed variance, each mean is maximized at $\widehat\mu_i=(X_i+Y_i)/2$. The total residual sum of squares is $S_n=\tfrac12\sum_i(X_i-Y_i)^2$.
2. The profile log likelihood, up to a constant, is $-n\log\sigma^2-S_n/(2\sigma^2)$. Its unique maximum is $\widehat\sigma^2=S_n/(2n)=\sum_i(X_i-Y_i)^2/(4n)$ whenever $S_n>0$, which occurs almost surely.
3. The differences are iid $N(0,2\sigma^2)$ regardless of the group means. By the LLN, $\widehat\sigma^2\to\sigma^2/2$ in probability, so the MLE is inconsistent.
4. Instead $\widetilde\sigma^2=\sum_i(X_i-Y_i)^2/(2n)$ is unbiased and converges to $\sigma^2$. The number of incidental nuisance means grows with sample size while each uses only two observations; a fixed-dimensional regular-MLE consistency argument does not apply.

**Self-assessment rubric**

- Derive the group means and residual sum of squares.
- Optimize the correctly normalized profile scale likelihood.
- Use the difference law to establish the inconsistent limit.
- Construct a consistent estimator and explain the growing-nuisance boundary.

</details>
