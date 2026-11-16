# Characterise independent age and residual life under inspection sampling

*Hard · [Probability problems](index.md)*

Let $L>0$ have finite mean $\mu$. Draw its length-biased version $L^*$, defined by $P(L^*\in B)=E[L\mathbf1_{L\in B}]/\mu$, and independently draw $U\sim\operatorname{Uniform}(0,1)$. Set $A=UL^*$ and $R=(1-U)L^*$. Prove that $A$ and $R$ are independent if and only if $L$ is exponential. No density assumption on $L$ may be imposed. Derive the joint tail and explain the precise role of length-biased sampling.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft with task-specific semantic rubric; no automatic correctness verdict or checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Given the interval length, the positions satisfying two age/residual thresholds have an explicit total length.

</details>

<details>
<summary>Hint 2</summary>

Independence forces the equilibrium residual tail to satisfy a continuous multiplicative equation. Differentiate its integral representation only after identifying its regularity.

</details>

<details>
<summary>Model proof</summary>

The length-bias and uniform position produce an integrated tail; factorisation of that tail characterises memorylessness.

1. For $a,r\ge0$, conditional on $L^*=l$, the admissible uniform positions have proportion $(l-a-r)_+/l$. Integrating against the length-biased law cancels the factor $l$, yielding $P(A>a,R>r)=H(a+r)$, where $H(t)=E(L-t)_+/\mu=\mu^{-1}\int_t^\infty P(L>s)\,ds$. In particular both marginal tails are $H$.
2. The function $H$ is continuous with $H(0)=1$. If $A,R$ are independent, $H(a+r)=H(a)H(r)$. It is positive everywhere: for any $t$, choose an integer $m$ with $H(t/m)>0$ by continuity near zero, then $H(t)=H(t/m)^m>0$.
3. The continuous additive equation for $-\log H$ on the nonnegative line gives $H(t)=e^{-ct}$ for some $c\ge0$. Also $H(t)\to0$ by integrability of $L$, so $c>0$. The right derivative of the integral formula at zero is $-1/\mu$, since $L>0$ almost surely; hence $c=1/\mu$.
4. For all $t\ge0$, the right derivative is $H_+^{\prime}(t)=-P(L>t)/\mu$, using right continuity of the survival function. Thus $P(L>t)=e^{-t/\mu}$, proving that $L$ is exponential without a density hypothesis.
5. Conversely an exponential gap of mean $\mu$ gives $H(t)=e^{-t/\mu}$ and the joint tail factors, proving independence. Choosing an ordinary interval length instead of its length-biased law would not yield the cancellation or this joint tail; the statement concerns observation at a uniformly sampled position in the inspection law.

**Self-assessment rubric**

- Derive the integrated survival law from the sampling construction.
- Prove positivity and solve the continuous functional equation.
- Justify the right derivatives and identify the original survival function.
- Verify the exponential converse and explain why the sampling convention matters.

</details>
