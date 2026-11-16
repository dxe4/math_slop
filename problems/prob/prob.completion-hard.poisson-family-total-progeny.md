# Derive a critical total-progeny law

*Hard · [Probability problems](index.md)*

A Galton--Watson process starts from one ancestor and has independent $\operatorname{Poisson}(\lambda)$ offspring, $0<\lambda\le1$. Let $T$ be its total progeny. Derive $P(T=m)$ for every $m\ge1$, prove $T<\infty$ almost surely, and at $\lambda=1$ derive the tail scale of the mass function and show $ET=\infty$. You may use Stirling’s formula and the cyclic lemma: among the $m$ indexed rotations of integers $x_i\ge-1$ summing to $-1$, exactly one rotation has all its proper partial sums nonnegative.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft with task-specific semantic rubric; no automatic correctness verdict or checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Explore the family in queue order. The queue size changes by offspring minus one.

</details>

<details>
<summary>Hint 2</summary>

Condition on the total offspring of the first $m$ explored individuals and use rotation symmetry before using Stirling.

</details>

<details>
<summary>Model proof</summary>

Queue exploration converts extinction size into a cyclic ballot event.

1. Let $\xi_i$ be an infinite iid offspring sequence. During queue exploration, queue size after $j$ explorations is $1+\sum_{i=1}^j(\xi_i-1)$. Thus $T=m$ means this is positive for $j<m$ and zero for $j=m$.
2. Condition on $\sum_{i=1}^m\xi_i=m-1$. The conditional sequence is rotation-invariant, and the supplied cyclic lemma shows that its queue-valid fraction is $1/m$, counting indexed rotations even when entries repeat. Since the sum is $\operatorname{Poisson}(m\lambda)$, $P(T=m)=e^{-m\lambda}(m\lambda)^{m-1}/m!$.
3. If $q$ is the extinction probability, iteration of the offspring generating function from zero shows that $q$ is the least fixed point of $s=e^{\lambda(s-1)}$. For $0<s<1$, $\log s<s-1\le\lambda(s-1)$, so no such fixed point exists; zero is not a fixed point either. Hence $q=1$, and finite generation sizes imply $T<\infty$ on extinction.
4. At $\lambda=1$, Stirling gives $P(T=m)=e^{-m}m^{m-1}/m!\sim(2\pi)^{-1/2}m^{-3/2}$. Thus $\sum_m mP(T=m)$ diverges by comparison with $\sum m^{-1/2}$. Almost-sure finite total progeny does not imply finite mean total progeny.

**Self-assessment rubric**

- Identify total progeny with the exact proper-partial-sum event.
- Use conditional rotation symmetry and the cyclic lemma to derive the finite law.
- Rule out subunit generating-function fixed points with the correct inequality.
- Derive the mass asymptotic and its implication for the mean.

</details>
