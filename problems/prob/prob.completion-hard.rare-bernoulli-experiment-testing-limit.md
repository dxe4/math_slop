# Find the nonvanishing testing error in a rare-event experiment

*Hard · [Probability problems](index.md)*

Fix $0<c<d$. From $n$ independent bits, test $P_n=\operatorname{Bernoulli}(c/n)^{\otimes n}$ against $Q_n=\operatorname{Bernoulli}(d/n)^{\otimes n}$, for sufficiently large $n$. Derive the limiting minimum sum of type-I and type-II error probabilities over every test, and prove it is strictly positive. Express the limit as a difference of Poisson upper tails with an explicit threshold. Derive the necessary total-variation convergence of the count laws rather than only invoking weak convergence.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft with task-specific semantic rubric; no automatic correctness verdict or checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

The likelihood ratio depends only on the success count and is increasing in that count.

</details>

<details>
<summary>Hint 2</summary>

Pointwise convergence of discrete masses plus a uniform tail bound gives total-variation convergence. Identify which Poisson masses are larger.

</details>

<details>
<summary>Model proof</summary>

Only finitely many rare successes remain informative in the limit, so the two hypotheses never become perfectly distinguishable.

1. Let $K$ be the count. Each count fibre has the same uniform conditional law under both hypotheses, so the full-experiment total variation equals that between $\operatorname{Binomial}(n,c/n)$ and $\operatorname{Binomial}(n,d/n)$. Indeed the likelihood ratio is constant on each fibre, and summing absolute mass differences over fibres preserves the distance.
2. For each fixed $k$, the first binomial mass tends to $e^{-c}c^k/k!$, and similarly for $d$, by the elementary factorial and exponential limits. Their tail probabilities above $M$ are at most $c/(M+1)$ and $d/(M+1)$ by Markov. The limiting Poisson tails obey the same bound. Splitting the absolute mass sum into $k\le M$ and its tail proves total-variation convergence for each count law.
3. The limiting Poisson likelihood ratio is $e^{c-d}(d/c)^k$, increasing in $k$. Let $k_0=\lceil(d-c)/\log(d/c)\rceil$. Ratios are at least one for $k\ge k_0$, with equality at the possible threshold integer harmless. Thus limiting total variation is $P(\operatorname{Poisson}(d)\ge k_0)-P(\operatorname{Poisson}(c)\ge k_0)$.
4. For any test accepting the second hypothesis on $A$, its error sum is $P_n(A)+Q_n(A^c)=1-[Q_n(A)-P_n(A)]$. Maximising the bracket gives minimum $1-\|P_n-Q_n\|_{TV}$, also for randomised tests by pointwise linear optimisation. The count-law convergence therefore gives the asserted limit as one minus the displayed tail difference.
5. The limit is strictly positive because the two Poisson laws overlap: their shared mass at zero alone is $\min(e^{-c},e^{-d})=e^{-d}>0$. No sequence of tests can make both error probabilities tend to zero in this rare-event scaling.

**Self-assessment rubric**

- Reduce the entire binary experiment to its count without losing testing distance.
- Combine finite mass convergence with a uniform tail bound.
- Identify the explicit Poisson likelihood threshold and the tail difference.
- Derive the minimum error identity and its strictly positive limit.

</details>
