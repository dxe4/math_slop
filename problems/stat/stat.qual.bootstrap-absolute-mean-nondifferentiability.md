# Expose bootstrap failure at a nondifferentiable functional

*Hard · [Statistics and probability](index.md)*

Let $X_i$ be independent $N(0,1)$, $\bar X_n$ their mean, and $\bar X_n^*$ the empirical $n$-out-of-$n$ bootstrap mean. Put $Z_n=\sqrt n\,\bar X_n$, $W_n^*=\sqrt n(\bar X_n^*-\bar X_n)$ and $D_n^*=\sqrt n(|\bar X_n^*|-|\bar X_n|)$. You may use the bootstrap mean CLT in the uniform form $\sup_x|P_*(W_n^*\le x)-\Phi(x)|\to0$ in probability. Prove the conditional law of $D_n^*$ does not consistently estimate the law of $\sqrt n|\bar X_n|$. Show specifically $P_*(D_n^*\le0)=\Phi(2|Z_n|)-1/2+o_P(1)$ and explain why this suffices.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or required graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Write $D_n^*=|Z_n+W_n^*|-|Z_n|$ and solve the event $D_n^*le0$ conditional on the sample.

</details>

<details>
<summary>Hint 2</summary>

The two endpoints depend on the sample, so use the uniform CLT rather than pointwise convergence at a fixed endpoint.

</details>

<details>
<summary>Model proof</summary>

The bootstrap linear perturbation sees a random local shift at the cusp of the absolute-value map.

1. Conditional on the data, if $Z_n\ge0$ the event is $-2Z_n\le W_n^*\le0$; if $Z_n<0$ it is $0\le W_n^*\le-2Z_n$. The same expression also gives probability tending to zero when $Z_n=0$.
2. Let $\epsilon_n$ denote the uniform CDF error in the stated CLT. Jumps of the conditional CDF are at most $2\epsilon_n$, because the normal CDF is continuous. Thus replacing either closed endpoint by a strict endpoint changes the approximation by $o_P(1)$. In both sign cases the conditional probability equals $\Phi(2|Z_n|)-1/2+o_P(1)$.
3. Here $Z_n$ has the standard normal law exactly. The random variable $\Phi(2|Z_n|)-1/2$ has a fixed nondegenerate law and does not tend to zero in probability; for example it is at least $\Phi(2)-1/2$ on $|Z_n|\ge1$, an event of fixed positive probability.
4. The target law is $|Z|$ for $Z\sim N(0,1)$, whose CDF is continuous at zero with value zero. Consistent conditional weak estimation would force the displayed conditional CDF at zero to tend to zero in probability, contradicting the preceding bound.

**Self-assessment rubric**

- Derive the sample-dependent interval for the bootstrap perturbation in both sign cases.
- Use uniform approximation and control conditional endpoint atoms.
- Compare a fixed positive-probability lower bound with the target CDF at its continuity point.

</details>
