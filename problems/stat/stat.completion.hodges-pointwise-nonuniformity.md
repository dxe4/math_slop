# Pointwise improvement with a local cost

*Hard · [Statistics and probability](index.md)*

Let $X_1,\ldots,X_n$ be independent $N(\theta,1)$ observations and define $H_n=0$ when $|\overline X_n|\le n^{-1/4}$, and $H_n=\overline X_n$ otherwise. Prove that $\sqrt nH_n\to0$ in probability at $\theta=0$, while for every fixed $\theta\ne0$, $\sqrt n(H_n-\theta)\Rightarrow N(0,1)$. Then construct a sequence $\theta_n\to0$ for which $nE_{\theta_n}(H_n-\theta_n)^2\to\infty$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific rubric reflection only; no automatic correctness verdict or required checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Compare the threshold with the standard deviation of the sample mean at zero and at a fixed nonzero parameter.

</details>

<details>
<summary>Hint 2</summary>

Choose a moving mean strictly inside the threshold, but farther from zero than the usual standard-error scale.

</details>

<details>
<summary>Model proof</summary>

The shrinking threshold creates pointwise improvement and a band of poor local risk.

1. At zero, $\sqrt n\overline X_n\sim N(0,1)$ and the threshold in these units is $n^{1/4}\to\infty$. Hence $P_0(H_n\ne0)\to0$, implying $\sqrt nH_n\to0$ in probability.
2. For fixed nonzero $\theta$, consistency of $\overline X_n$ and the vanishing threshold give $P_\theta(H_n=\overline X_n)\to1$. Replacing a random variable on an event of vanishing probability does not change its weak limit, yielding the stated normal law.
3. Choose $\theta_n=\tfrac12n^{-1/4}$. Writing $\overline X_n=\theta_n+Z/\sqrt n$, the event $|\overline X_n|\le n^{-1/4}$ is $-\tfrac32n^{1/4}\le Z\le\tfrac12n^{1/4}$, whose probability tends to one.
4. On that event the squared error is $\theta_n^2=\tfrac14n^{-1/2}$. Consequently $nE_{\theta_n}(H_n-\theta_n)^2\ge\tfrac14\sqrt n\,P_{\theta_n}(H_n=0)\to\infty$. Pointwise asymptotic claims therefore do not supply a uniform local risk guarantee.

**Self-assessment rubric**

- Establish the zero-parameter probability limit.
- Establish the pointwise nonzero-parameter normal limit.
- Construct and verify a moving sequence with divergent scaled risk.

</details>
