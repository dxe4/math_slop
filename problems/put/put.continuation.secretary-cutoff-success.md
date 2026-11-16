# Secretary cutoff success

*Hard · [Original Putnam-style training](index.md)*

In the secretary model with $n$ distinct ranks arriving in uniform random order, reject the first $r$ candidates, $1\le r<n$, then accept the first later candidate better than all predecessors. Prove the probability of choosing the overall best is $(r/n)\sum_{k=r}^{n-1}1/k$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Condition on the arrival position $j$ of the overall best.

</details>

<details>
<summary>Hint 2</summary>

To choose it, the best among the first $j-1$ must lie in the rejected prefix.

</details>

<details>
<summary>Model proof</summary>

Summing disjoint positions $j=r+1,\ldots,n$ gives $(1/n)\sum_{j=r+1}^n r/(j-1)=(r/n)\sum_{k=r}^{n-1}1/k$.

1. The overall best appears at each position $j$ with probability $1/n$. If $j\le r$ it is rejected. For $j>r$, the rule selects it exactly when the best of positions $1,\ldots,j-1$ lies among positions $1,\ldots,r$.
2. Conditional on best at $j$, the earlier relative order is uniform, so the maximum among the first $j-1$ is equally likely at each such position; the success probability is $r/(j-1)$.
3. Summing disjoint positions $j=r+1,\ldots,n$ gives $(1/n)\sum_{j=r+1}^n r/(j-1)=(r/n)\sum_{k=r}^{n-1}1/k$.

**Self-assessment rubric**

- Condition on each possible position of the overall best.
- Show success at position j occurs exactly when previous best lies in rejected prefix.
- Compute r/(j−1) and sum over eligible positions.

</details>
