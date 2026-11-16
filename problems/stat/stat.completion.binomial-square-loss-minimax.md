# An exact minimax rule for a binomial proportion

*Hard · [Statistics and probability](index.md)*

Observe $K\sim\operatorname{Binomial}(n,p)$ with fixed integer $n\ge1$ and $p\in[0,1]$. Under squared-error loss, find an explicit minimax estimator and its exact minimax risk among all measurable, possibly randomized rules. A complete argument must give both an upper bound and a matching lower bound valid for every rule.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific rubric reflection only; no automatic correctness verdict or required checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Explore affine shrinkage of the success count and look for a rule whose risk does not depend on the parameter.

</details>

<details>
<summary>Hint 2</summary>

An estimator that is Bayes for a proper prior and has constant risk can supply the matching lower bound.

</details>

<details>
<summary>Model proof</summary>

A carefully chosen proper beta prior gives a constant-risk Bayes rule.

1. For $a>0$, take $\delta_a(K)=(K+a)/(n+2a)$. Its variance is $np(1-p)/(n+2a)^2$ and bias is $a(1-2p)/(n+2a)$. Thus $R(p,\delta_a)=[a^2+(n-4a^2)p(1-p)]/(n+2a)^2$.
2. Choose $a=\sqrt n/2$. The parameter-dependent coefficient vanishes, leaving constant risk $r_n=1/[4(\sqrt n+1)^2]$, including at the endpoints. This is an upper bound on minimax risk.
3. Under the proper $\operatorname{Beta}(a,a)$ prior, the posterior is $\operatorname{Beta}(K+a,n-K+a)$. Its mean is exactly $\delta_a$, which minimizes posterior squared loss. Extra randomization cannot improve that conditional optimum.
4. The Bayes risk of this rule is its constant frequentist risk $r_n$. Every rule has maximum risk at least its prior-average risk, and that average is at least the optimal Bayes risk $r_n$.
5. The lower and upper bounds match, proving minimaxity against all rules. The proper prior, rather than a comparison restricted to affine rules, supplies the global lower bound.

**Self-assessment rubric**

- Compute variance and squared bias of the candidate family.
- Find the exact equalizing parameter and constant risk.
- Derive the beta posterior and use its optimal Bayes risk.
- Match the lower and upper bounds, including randomized competitors.

</details>
