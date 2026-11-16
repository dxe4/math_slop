# Bootstrap maximum failure

*Hard · [Statistics and probability](index.md)*

Let $X_1,\ldots,X_n$ be independent $\operatorname{Uniform}(0,\theta)$ variables with $\theta>0$, and let $M_n=\max_i X_i$. Draw an ordinary empirical bootstrap resample of size $n$, with maximum $M_n^*$. Prove that the conditional law of $n(M_n-M_n^*)$ does not converge to the same weak limit as the sampling law of $n(\theta-M_n)$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

The observed maximum is unique almost surely. Relate a bootstrap gap of zero to resampling its maximizing index.

</details>

<details>
<summary>Hint 2</summary>

Compare the probability that all bootstrap draws avoid that index with the limiting population-maximum distribution near zero.

</details>

<details>
<summary>Model proof</summary>

The bootstrap retains a nonvanishing atom at the observed maximum, whereas the correctly scaled sampling gap has a continuous exponential limit.

1. Continuity of the uniform law gives a unique observed maximizing index almost surely. Conditional on the sample, $P^*(M_n^*<M_n)=(1-1/n)^n$, so $P^*(n(M_n-M_n^*)=0)=1-(1-1/n)^n\to1-e^{-1}$.
2. For fixed $x\ge0$ and $n$ large enough, $P(n(\theta-M_n)>x)=(1-x/(n\theta))^n\to e^{-x/\theta}$. Thus the target gap converges to an exponential law of mean $\theta$, whose distribution function is continuous and zero at $0$.
3. The bootstrap distribution function at $0$ tends to $1-e^{-1}$ instead of $0$. Weak convergence to that continuous target would require convergence at $0$, so conditional bootstrap consistency fails. Both compared gaps are nonnegative; the argument is not an artefact of reversing one sign.

**Self-assessment rubric**

- Derive the conditional probability of a zero bootstrap gap from resampling indices.
- Derive the exponential sampling-gap limit with its scale parameter.
- Compare both distribution functions at a continuity point of the target and conclude inconsistency.

</details>
