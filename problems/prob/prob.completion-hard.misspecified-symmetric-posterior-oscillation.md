# Find a posterior that oscillates forever under misspecification

*Hard · [Probability problems](index.md)*

Data are iid Bernoulli($1/2$), but an analyst assigns equal prior mass to the two possible parameters $1/4$ and $3/4$ and updates by their Bernoulli likelihoods. Prove that the posterior mass on $3/4$ has almost-sure liminf zero and limsup one. Determine the corresponding liminf and limsup of the next-observation predictive success probability. Explain why convergence of the empirical frequency does not rescue this misspecified posterior. You may use that a simple symmetric random walk has almost-sure limsup $+\infty$ and liminf $-\infty$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft with task-specific semantic rubric; no automatic correctness verdict or checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Compute the likelihood odds exactly in terms of the number of observed successes.

</details>

<details>
<summary>Hint 2</summary>

The log odds are a constant multiple of a centred integer walk, rather than a statistic with nonzero drift.

</details>

<details>
<summary>Model proof</summary>

Equally bad symmetric models produce zero-drift likelihood odds, so neither receives a stable asymptotic weight.

1. Let $S_n$ count successes. Equal prior odds give posterior odds $L_n=(\frac{3/4}{1/4})^{S_n}(\frac{1/4}{3/4})^{n-S_n}=3^{2S_n-n}$ for parameter $3/4$ against $1/4$.
2. Under the actual fair data law, $W_n=2S_n-n$ is a simple symmetric random walk. By the given oscillation property it has subsequences tending to $+\infty$ and to $-\infty$ almost surely. The posterior weight $R_n=L_n/(1+L_n)$ therefore has limsup one and liminf zero.
3. The predictive success probability is $(1-R_n)/4+3R_n/4=1/4+R_n/2$. Its liminf is $1/4$ and limsup is $3/4$, so it does not approach the true success probability.
4. The strong law still gives $S_n/n\to1/2$. This only makes $W_n/n\to0$, and does not make the unnormalised log likelihood ratio $W_n\log3$ converge. The true parameter is excluded and the two candidate laws have equal expected log likelihood under it; their fluctuating relative evidence can therefore oscillate indefinitely.

**Self-assessment rubric**

- Derive the likelihood ratio and posterior weight from the stated misspecified model.
- Apply the walk property to the unnormalised log odds.
- Compute the predictive limits and distinguish empirical convergence from posterior convergence.

</details>
