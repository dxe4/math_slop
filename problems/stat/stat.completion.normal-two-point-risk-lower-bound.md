# A two-point lower bound for estimation risk

*Hard · [Statistics and probability](index.md)*

For $n$ independent $N(\theta,1)$ observations and a fixed $a>0$, prove that every real-valued estimator $D$ satisfies $\max\{E_a(D-a)^2,E_{-a}(D+a)^2\}\ge a^2\Phi(-a\sqrt n)$, allowing infinite risks. Here $\Phi$ is the standard normal distribution function. The proof must apply to arbitrary nonlinear estimators.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific rubric reflection only; no automatic correctness verdict or required checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Turn any estimate into a decision between the two possible parameter points.

</details>

<details>
<summary>Hint 2</summary>

A wrong sign forces a minimum squared error. Find the best possible average testing error between the two normal sample laws.

</details>

<details>
<summary>Model proof</summary>

Any accurate estimator would induce an accurate test of the two parameter points.

1. Use the test that chooses $a$ when $D\ge0$ and $-a$ otherwise. Under $a$, a wrong choice implies $(D-a)^2\ge a^2$; under $-a$, a wrong choice implies $(D+a)^2\ge a^2$.
2. Thus the maximum risk is at least $a^2$ times the average of the two error probabilities of this induced test.
3. For equal prior weights, the likelihood ratio between the sample laws is $\exp(2a\sum_iX_i)$. Minimizing average error pointwise therefore selects $a$ exactly when $\overline X_n\ge0$.
4. This optimal test has error $\Phi(-a\sqrt n)$ under each point. Every induced test has at least that average error, proving the lower bound. The estimate was never assumed linear, unbiased, or consistent.

**Self-assessment rubric**

- Construct a binary decision from an arbitrary estimator.
- Relate each error event to a squared-loss lower bound.
- Derive and evaluate the smallest equal-prior testing error.
- Combine the inequalities without finite-risk or linearity assumptions.

</details>
