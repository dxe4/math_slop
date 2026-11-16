# Delta method ratio

*Medium · [Statistics and probability](index.md)*

Suppose $\sqrt n((A_n,B_n)-(a,b))\Rightarrow N_2(0,\Sigma)$, where $b\ne0$ and $\Sigma$ is a covariance matrix. Define $R_n=A_n/B_n$ when $B_n\ne0$, and $R_n=0$ otherwise. Derive the limiting Gaussian variance of $\sqrt n(R_n-a/b)$ using the multivariate delta method. Explain why the zero-denominator convention has no effect on the limit.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

First use the assumed joint limit to establish convergence in probability of the denominator.

</details>

<details>
<summary>Hint 2</summary>

Differentiate the ratio map on a neighborhood of the limiting point where its denominator stays away from zero, then expand the covariance quadratic form.

</details>

<details>
<summary>Model proof</summary>

The ratio is smooth near the limit; denominator-zero events have vanishing probability.

1. The assumed scaled convergence implies $A_n\to a$ and $B_n\to b$ in probability. Hence $P(|B_n-b|\ge |b|/2)\to0$, and in particular $P(B_n=0)\to0$.
2. On the neighborhood $|y-b|<|b|/2$, $g(x,y)=x/y$ is continuously differentiable, with derivative vector $v=(1/b,-a/b^2)^{\mathsf T}$ at $(a,b)$. The delta method applied locally yields the same limit for any extension outside that neighborhood, since the probability of leaving it tends to zero.
3. Therefore $\sqrt n(R_n-a/b)\Rightarrow N(0,v^{\mathsf T}\Sigma v)$, with $v^{\mathsf T}\Sigma v=\Sigma_{11}/b^2-2a\Sigma_{12}/b^3+a^2\Sigma_{22}/b^4$.
4. The variance can be zero, giving a degenerate normal limit. This is the variance of the limiting law; weak convergence alone does not imply convergence of the finite-sample variances. Changing the convention on $\{B_n=0\}$ changes distributions by at most the probability of that event.

**Self-assessment rubric**

- Show denominator-zero events vanish and explain the harmless extension.
- Compute the derivative on a neighborhood avoiding a zero denominator.
- Expand the limiting covariance form and distinguish it from moment convergence.

</details>
