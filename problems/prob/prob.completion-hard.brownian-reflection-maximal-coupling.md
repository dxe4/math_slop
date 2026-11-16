# Prove reflection coupling is simultaneously maximal

*Hard · [Probability problems](index.md)*

Fix $a>0$ and let $B$ be standard Brownian motion. Set $X_t=B_t$, $T=\inf\{t:B_t=a/2\}$, and $Y_t=a-B_t$ for $t\le T$, $Y_t=B_t$ for $t>T$. Prove that $Y$ is Brownian motion started at $a$, and for every $t>0$ prove $P(X_t\ne Y_t)=\|N(0,t)-N(a,t)\|_{TV}$. Deduce that no coupling can give a larger equality probability at any time and that $ET=\infty$, although $T<\infty$ almost surely. You may use strong Markov and the one-barrier Brownian reflection principle; optimal coupling is the required new conclusion.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft with task-specific semantic rubric; no automatic correctness verdict or checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Reflect the Brownian increments on one side of the first meeting, then use strong Markov to identify the full path law.

</details>

<details>
<summary>Hint 2</summary>

The two normal densities cross at their midpoint. Compare their total-variation distance with the meeting-time tail.

</details>

<details>
<summary>Model proof</summary>

A path reflection realises the sharp marginal overlap at every time, despite its infinite mean meeting time.

1. Before $T$, $Y=a-B$ is a Brownian path from $a$ stopped on first reaching $a/2$. By strong Markov, the increments $B_{T+s}-B_T$ after $T$ form an independent standard Brownian motion. Gluing these increments to the stopped reflected path gives Brownian motion from $a$; continuity holds because both formulas equal $a/2$ at $T$. This proves the required marginal path law.
2. For $t<T$ the paths differ, since equality would require $B_t=a/2$; after $T$ they agree. Hence $P(X_t\ne Y_t)=P(T>t)$. Reflection gives $P(T>t)=2\Phi(a/(2\sqrt t))-1$, and this tends to zero as $t\to\infty$, proving almost-sure finite meeting.
3. The density of $N(0,t)$ exceeds that of $N(a,t)$ exactly on $(-\infty,a/2)$. Integrating their difference there gives total variation $\Phi(a/(2\sqrt t))-\Phi(-a/(2\sqrt t))=2\Phi(a/(2\sqrt t))-1$. This equals the constructed mismatch probability.
4. For any coupling $(U,V)$ and event $A$, $|P(U\in A)-P(V\in A)|\le P(U\ne V)$. Taking the supremum proves the universal lower bound on mismatch; our coupling attains it for each $t$ simultaneously.
5. Finally $2\Phi(z)-1\sim\sqrt{2/\pi}\,z$ as $z\downarrow0$, so $P(T>t)\sim a/\sqrt{2\pi t}$. Integrating this nonintegrable tail gives $ET=\infty$. Almost-sure meeting and maximality do not imply finite expected meeting time.

**Self-assessment rubric**

- Use strong Markov to justify the Brownian marginal through the gluing time.
- Compute and identify the two exact expressions.
- Prove the universal mismatch lower bound, rather than only a reflection tail formula.
- Derive the tail asymptotic and distinguish almost-sure finiteness from finite expectation.

</details>
