# Optimise finite exchangeable dependence at a prescribed marginal

*Hard · [Probability problems](index.md)*

Fix $n\ge2$ and $0<p<1$. Among exchangeable Bernoulli vectors $(X_1,\ldots,X_n)$ with $EX_i=p$, determine the smallest possible $\operatorname{Cov}(X_1,X_2)$ and construct every attaining law. Give the answer using the fractional part of $np$. Explain why the minimiser cannot be extended to an infinite exchangeable Bernoulli sequence.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft with task-specific semantic rubric; no automatic correctness verdict or checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Express the covariance in terms of the variance of the integer-valued total number of successes.

</details>

<details>
<summary>Hint 2</summary>

An integer-valued variable with a prescribed noninteger mean has a sharp variance lower bound from its two neighbouring integers.

</details>

<details>
<summary>Model proof</summary>

Integer support forces a minimum total-count variance, attained by a mixture of two adjacent subset sizes.

1. Let $S=\sum_iX_i$, $m=\lfloor np\rfloor$ and $r=np-m$. Exchangeability gives $\operatorname{Var}(S)=np(1-p)+n(n-1)\operatorname{Cov}(X_1,X_2)$. Thus minimising covariance is equivalent to minimising the variance of an integer-valued $S$ with mean $m+r$.
2. For every integer $s$, $(s-m)(s-m-1)\ge0$. Taking expectations and subtracting the square of the mean yields $\operatorname{Var}(S)\ge r(1-r)$. Equality forces $S\in\{m,m+1\}$ almost surely; its mean then forces probabilities $1-r,r$ (with the upper mass zero if $r=0$).
3. Choose this two-point total and, conditionally on $S=s$, choose a uniform $s$-subset of coordinates to set to one. This is exchangeable with the required means, and attains covariance $[r(1-r)-np(1-p)]/[n(n-1)]$. Conversely exchangeability makes the conditional law uniform on each total-count orbit, so this is the unique attaining law.
4. The attained covariance is strictly negative. Indeed the ordinary binomial count has the same mean but has positive mass outside the two adjacent minimising integers for $n\ge2$ and $0<p<1$, so its variance $np(1-p)$ is strictly larger. If an infinite exchangeable extension existed with common covariance $c<0$, the variance of its first $N$-term sum would be $Np(1-p)+N(N-1)c<0$ for large $N$, impossible.

**Self-assessment rubric**

- Derive the exact variance identity from exchangeability.
- Prove the adjacent-integer lower bound and its equality condition.
- Construct and characterise the exchangeable minimiser.
- Show strict negativity and rule out an infinite extension without assuming a mixture theorem.

</details>
