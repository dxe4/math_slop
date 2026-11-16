# Find the sharp correlation range under nonlinear marginals

*Hard · [Probability problems](index.md)*

Among all couplings of $U,V\sim\operatorname{Uniform}(0,1)$, determine the exact range of $\operatorname{Corr}(U,V^2)$. Prove both sharp bounds using the joint event representation of $E[UV^2]$, construct attaining couplings, and explain why neither endpoint is perfect correlation. An appeal to a named rearrangement theorem without its argument is insufficient.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft with task-specific semantic rubric; no automatic correctness verdict or checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Write the product expectation as an integral of intersections of upper-tail events and bound each intersection by its marginal probabilities.

</details>

<details>
<summary>Hint 2</summary>

The same ordering and the reverse ordering of two uniform variables attain the two intersection bounds simultaneously.

</details>

<details>
<summary>Model proof</summary>

Layer-cake bounds prove sharp rearrangement, while the fixed nonlinear marginals prevent a linear correlation of magnitude one.

1. For nonnegative bounded variables, Tonelli gives $E[UV^2]=\int_0^1\int_0^1P(U>s,V^2>t)\,ds\,dt$. For any events with probabilities $a,b$, their intersection lies between $\max(0,a+b-1)$ and $\min(a,b)$. Here the marginal tail probabilities are $1-s$ and $1-\sqrt t$.
2. The upper intersection bound is attained simultaneously by $V=U$, yielding $E[UV^2]=EU^3=1/4$. The lower bound is attained simultaneously by $V=1-U$, since the two tail intervals then meet in the least possible length; its expectation is $E[U(1-U)^2]=1/12$. Thus every coupling has product expectation between $1/12$ and $1/4$.
3. Since $EU=1/2$, $EV^2=1/3$, $\operatorname{Var}(U)=1/12$ and $\operatorname{Var}(V^2)=1/5-1/9=4/45$, the covariance range is $[-1/12,1/12]$ and the correlation range is $[-\sqrt{15}/4,\sqrt{15}/4]$. Mixtures of the two attaining joint laws keep the marginals and interpolate the covariance, so the whole interval is realised.
4. These endpoints have magnitude below one. Equality in the correlation Cauchy--Schwarz bound would require $V^2$ to be an affine function of $U$ almost surely. The sharp range calculation rules this out, even for the deterministic monotone couplings, whose functional relation is quadratic rather than affine.

**Self-assessment rubric**

- Derive the intersection bounds for the product expectation.
- Prove that the two proposed couplings attain all pointwise bounds.
- Compute the fixed moments and interpolate every value in the range.
- Explain why a deterministic nonlinear relation need not have correlation magnitude one.

</details>
