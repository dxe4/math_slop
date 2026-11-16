# Build an infinitesimal array with a non-Gaussian limit

*Hard · [Probability problems](index.md)*

Construct an independent triangular array $(X_{n,k})_{1\le k\le n}$ of centred variables with total row variance $n$ and largest individual variance divided by total variance tending to zero, such that the normalised row sum has a non-Gaussian nondegenerate weak limit. Require also $\max_kP(|X_{n,k}|>\epsilon\sqrt n)\to0$ for each $\epsilon>0$. Identify the limit by its characteristic function and show exactly which Lindeberg condition fails.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft with task-specific semantic rubric; no automatic correctness verdict or checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Use rare jumps whose magnitude equals the row normalisation, with a constant expected number of jumps per row.

</details>

<details>
<summary>Hint 2</summary>

Compute the row characteristic function before taking its limit; it will retain the jump distribution.

</details>

<details>
<summary>Model proof</summary>

Small individual variance fractions and infinitesimal probabilities do not rule out a compound-Poisson limit.

1. Independently within row $n$, take $X_{n,k}=\sqrt n,-\sqrt n,0$ with probabilities $1/(2n),1/(2n),1-1/n$. Each mean is zero and variance one, so total variance is $n$ and each variance fraction is $1/n$.
2. For $0<\epsilon<1$, $P(|X_{n,k}|>\epsilon\sqrt n)=1/n$, uniformly in $k$; for $\epsilon\ge1$ the probability is zero. Thus the stated infinitesimal property holds.
3. The characteristic function of $S_n=n^{-1/2}\sum_kX_{n,k}$ is $[1+(\cos t-1)/n]^n\to\exp(\cos t-1)$. This is the characteristic function of $N_+-N_-$ for independent Poisson($1/2$) variables, since their two characteristic functions multiply to that expression. The limit is nondegenerate and integer-valued, hence is not Gaussian.
4. For any $0<\epsilon<1$, the normalised Lindeberg sum is $n^{-1}\sum_kE[X_{n,k}^2\mathbf1_{|X_{n,k}|>\epsilon\sqrt n}]=n^{-1}\sum_k1=1$, not zero. The whole variance remains in normalised order-one jumps even though each individual jump is rare.

**Self-assessment rubric**

- Verify both variance conditions and the uniform small tail probabilities.
- Derive the exact row characteristic function and identify its non-Gaussian limit.
- Compute the normalised truncated second-moment sum and explain the retained jump variance.

</details>
