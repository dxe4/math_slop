# Derive an optimal last-success policy

*Hard · [Probability problems](index.md)*

Independent Bernoulli trials have known success probabilities $0<p_i<1$, $1\le i\le n$. You observe trials sequentially and may stop once, only at a success. You win if that success is the last success of all $n$ trials; failing to stop loses. Derive an optimal policy and its exact win probability in terms of the odds $r_i=p_i/(1-p_i)$. Prove optimality against every history-dependent policy, including the case $\sum_i r_i<1$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft with task-specific semantic rubric; no automatic correctness verdict or checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Compare stopping at a success with the best win probability available in the remaining independent suffix.

</details>

<details>
<summary>Hint 2</summary>

Divide the suffix value by the probability that the whole suffix is zero. Its recursion changes form when it passes a fixed threshold.

</details>

<details>
<summary>Model proof</summary>

A normalised Bellman recursion locates a suffix in which exactly one success is the winning event.

1. Write $q_i=1-p_i$, $Q_i=\prod_{j=i}^n q_j$, and let $V_i$ be the optimal win probability before observing trial $i$, with $V_{n+1}=0$ and $Q_{n+1}=1$. Independence makes the future law independent of the observed past. Backward induction gives $V_i=q_iV_{i+1}+p_i\max(Q_{i+1},V_{i+1})$.
2. Set $W_i=V_i/Q_i$. The recursion becomes $W_i=W_{i+1}+r_i\max(1,W_{i+1})$, $W_{n+1}=0$. Whenever the suffix odds sum stays below one, this gives $W_i=\sum_{j=i}^n r_j$; once it reaches or exceeds one, going backwards cannot make it smaller.
3. If the total odds are at least one, let $s$ be the largest index with $\sum_{j=s}^n r_j\ge1$; otherwise set $s=1$. For $i\ge s$, the future normalised value $W_{i+1}$ is below one, so stopping at an observed success is optimal. For $i<s$, $W_{i+1}\ge1$, so continuing is optimal, with ties arbitrary. Thus wait until $s$ and then stop at the first success.
4. This policy wins exactly when the suffix $s,\ldots,n$ has one success. Its probability is $\sum_{i=s}^n p_i\prod_{j=s,j\ne i}^n q_j=Q_s\sum_{i=s}^n r_i$. Backward induction proves this value dominates any adapted policy; randomisation cannot improve a maximum of the two available conditional values.

**Self-assessment rubric**

- Justify suffix independence and the stopping reward in the Bellman equation.
- Derive the odds recursion and locate its crossing with the boundary cases.
- Compute the unique-success probability and explain why the policy is globally optimal.

</details>
