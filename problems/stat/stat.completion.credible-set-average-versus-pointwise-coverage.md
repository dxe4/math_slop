# Exact posterior probability with arbitrarily poor coverage

*Hard · [Statistics and probability](index.md)*

In the sampling model $X\sim N(\theta,1)$, construct a proper continuous prior and central posterior intervals of fixed probability $1-\alpha$, $0<\alpha<1$, whose frequentist coverage becomes arbitrarily close to zero for some parameter values. Derive the coverage function and also prove that its average under the prior is exactly $1-\alpha$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific rubric reflection only; no automatic correctness verdict or required checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Choose a proper normal prior that shrinks the posterior center toward a fixed location.

</details>

<details>
<summary>Hint 2</summary>

Compare the sampling distribution of that shrunken center with the parameter; use the joint model only for the separate prior-average statement.

</details>

<details>
<summary>Model proof</summary>

Posterior calibration averages over a prior and need not be uniform in the fixed parameter.

1. Take the proper prior $\theta\sim N(0,1)$. Completing the square gives posterior $N(X/2,1/2)$. For $z=z_{1-\alpha/2}$, the central interval $C(X)=[X/2-z/\sqrt2,X/2+z/\sqrt2]$ has posterior probability exactly $1-\alpha$.
2. At a fixed true $\theta$, membership is equivalent to $2\theta-\sqrt2z\le X\le2\theta+\sqrt2z$. Since $X-\theta\sim N(0,1)$, the coverage is $c(\theta)=\Phi(\theta+\sqrt2z)-\Phi(\theta-\sqrt2z)$.
3. As $\theta\to+\infty$, both distribution-function values tend to one and their difference tends to zero. Thus no positive uniform coverage lower bound follows from this fixed posterior probability.
4. Under the proper joint prior-sampling law, the tower property gives $\int c(\theta)\,\pi(d\theta)=P\{\theta\in C(X)\}=E[P\{\theta\in C(X)\mid X\}]=1-\alpha$. This exact prior average is consistent with poor coverage at remote fixed parameters.

**Self-assessment rubric**

- Specify a proper prior and derive the posterior interval.
- Derive the frequentist coverage function.
- Prove its infimum can approach zero.
- Use the joint model to establish exact prior-average coverage.

</details>
