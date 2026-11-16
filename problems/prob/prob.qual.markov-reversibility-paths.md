# Reverse a stationary path using detailed balance

*Easy · [Probability problems](index.md)*

A finite-state transition matrix $P$ has a strictly positive probability vector $\pi$ satisfying $\pi_iP_{ij}=\pi_jP_{ji}$ for every pair. Start the chain with law $\pi$. Prove every finite path has the same probability as its reversed path, including paths containing a zero-probability transition.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or required graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Write the joint path probability as its initial mass times the transitions.

</details>

<details>
<summary>Hint 2</summary>

Detailed balance telescopes along the path; strict positivity of $pi$ permits the ratios even when a transition is zero.

</details>

<details>
<summary>Model proof</summary>

Detailed balance converts all path factors into their reversed counterparts.

1. Summing detailed balance over the first index gives $\sum_i\pi_iP_{ij}=\pi_j$, so the specified initial law is stationary.
2. For a path $i_0,\ldots,i_n$, detailed balance gives $P_{i_ki_{k+1}}=(\pi_{i_{k+1}}/\pi_{i_k})P_{i_{k+1}i_k}$. Multiplying and canceling the positive $\pi$ factors yields $\pi_{i_0}\prod_{k=0}^{n-1}P_{i_ki_{k+1}}=\pi_{i_n}\prod_{k=0}^{n-1}P_{i_{k+1}i_k}$.
3. The left and right sides are the probabilities of the path and its reversal. If a transition is zero, detailed balance makes the reverse transition zero as well, and the same equality remains valid.

**Self-assessment rubric**

- Verify stationarity from the pairwise balance equations.
- Derive equality of the full joint path probabilities.
- Retain paths with zero transitions without dividing by their probabilities.

</details>
