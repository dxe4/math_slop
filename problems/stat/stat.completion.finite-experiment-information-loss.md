# When a statistic preserves all Fisher information

*Hard · [Statistics and probability](index.md)*

On a finite sample space, suppose $p_\theta(x)>0$ is continuously differentiable for every $\theta$ in an open connected interval. Let $T=T(X)$ be any statistic. Prove $I_T(\theta)\le I_X(\theta)$. Characterize equality at a fixed parameter, and prove that equality for every parameter is equivalent to sufficiency of $T$. All derivatives refer to this common fixed support.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific rubric reflection only; no automatic correctness verdict or required checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Differentiate the probability of a statistic value by summing over its fiber.

</details>

<details>
<summary>Hint 2</summary>

The score after coarsening is a conditional expectation. For equality at all parameters, integrate the resulting fiberwise log-density derivative identity.

</details>

<details>
<summary>Model proof</summary>

Conditional expectation loses score variation; preserving it everywhere forces a factorization.

1. Let $s_\theta(x)=\partial_\theta\log p_\theta(x)$. Fixed finite support gives $E_\theta s_\theta=\sum_xp_\theta'(x)=0$. For $q_\theta(t)=\sum_{T(x)=t}p_\theta(x)$, its score is $q_\theta'(t)/q_\theta(t)=E_\theta[s_\theta(X)\mid T=t]$.
2. Conditional variance decomposition gives $I_X-I_T=E_\theta\operatorname{Var}_\theta(s_\theta(X)\mid T)\ge0$. At a fixed parameter, equality holds exactly when the score is constant on each fiber, since every sample point has positive probability.
3. If equality holds for every parameter, points $x,y$ in the same fiber satisfy $\partial_\theta\log[p_\theta(x)/p_\theta(y)]=0$. Connectedness of the parameter interval makes this likelihood ratio constant in $\theta$.
4. Choose one representative $x_t$ in each fiber. The preceding ratios yield $p_\theta(x)=h(x)g_\theta(T(x))$, with $g_\theta(t)=p_\theta(x_t)$ and positive $h$ independent of $\theta$. Factorization proves sufficiency.
5. Conversely, under sufficiency the conditional probabilities on each fiber do not depend on $\theta$. Writing $p_\theta(x)=q_\theta(T(x))r(x\mid T(x))$ shows that the full score equals the statistic score, giving equality of information for every parameter.

**Self-assessment rubric**

- Differentiate a fiber probability and identify its conditional score.
- Prove the inequality and fixed-parameter equality condition.
- Integrate the fiberwise derivative identity over the connected interval.
- Prove both directions of the all-parameter characterization.

</details>
