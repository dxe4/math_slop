# A confidence sequence from one Gaussian mixture

*Hard · [Statistics and probability](index.md)*

Let $X_i$ be independent $N(\theta,1)$ variables. Fix $\tau^2>0$ and $0<\alpha<1$. Construct and justify intervals $C_n$ satisfying $P_\theta(\theta\in C_n\text{ for every }n\ge1)\ge1-\alpha$ by mixing the likelihood ratios for shifts $d$ against $N(0,\tau^2)$. Derive explicit endpoints and justify the infinite-time error bound; a union of fixed-time error bounds is not sufficient.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific rubric reflection only; no automatic correctness verdict or required checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

For a candidate mean, integrate its shift likelihood ratio over one fixed proper prior.

</details>

<details>
<summary>Hint 2</summary>

Use the nonnegative martingale property to bound the first threshold crossing, then invert that threshold in the candidate mean.

</details>

<details>
<summary>Model proof</summary>

A single mixture martingale controls all observation times simultaneously.

1. For a candidate $u$, write $S_n(u)=\sum_{i=1}^n(X_i-u)$. Under mean $u$, $\exp(dS_n(u)-nd^2/2)$ is a mean-one nonnegative martingale for every fixed $d$. Tonelli and conditional expectation preserve this property on mixing against the fixed prior.
2. Completing the Gaussian square gives $E_n(u)=(1+n\tau^2)^{-1/2}\exp\{\tau^2S_n(u)^2/[2(1+n\tau^2)]\}$, with $E_0(u)=1$.
3. For the true mean, let $T$ be the first time $E_n(\theta)\ge1/\alpha$. The bounded stopping identity gives $E E_{T\wedge N}(\theta)=1$, while nonnegativity gives $1\ge\alpha^{-1}P(T\le N)$. The bounded identity follows directly by summing martingale increments multiplied by past-measurable indicators.
4. Letting $N\to\infty$ yields $P(\sup_nE_n(\theta)\ge1/\alpha)\le\alpha$. No integrability of the unbounded stopping time is assumed.
5. Inverting $E_n(u)<1/\alpha$ yields the open interval $C_n=(\overline X_n-b_n,\overline X_n+b_n)$, where $b_n=n^{-1}\sqrt{(1+n\tau^2)\tau^{-2}[2\log(1/\alpha)+\log(1+n\tau^2)]}$. Failure of joint inclusion implies that threshold crossing, proving the claim.

**Self-assessment rubric**

- Establish the mean-one mixture martingale under each candidate mean.
- Evaluate the mixture integral correctly.
- Justify bounded stopping and its infinite-horizon limit.
- Derive explicit interval endpoints and joint coverage.

</details>
