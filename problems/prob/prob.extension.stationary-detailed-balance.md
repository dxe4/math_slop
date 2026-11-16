# Detailed balance implies stationarity

*Medium · [Probability problems](index.md)*

For a finite state space, let $P$ be a nonnegative row-stochastic matrix and $\pi$ a probability row vector. Prove that detailed balance $\pi_iP_{ij}=\pi_jP_{ji}$ for all $i,j$ implies $\pi P=\pi$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or graded objective evidence."}}
```

<details>
<summary>Hint 1</summary>

Fix a destination coordinate and sum its incoming probability masses.

</details>

<details>
<summary>Hint 2</summary>

Replace each incoming mass using detailed balance. In the resulting sum, keep the fixed index as the row index of $P$.

</details>

<details>
<summary>Model proof</summary>

Detailed balance turns each incoming total into an outgoing row sum.

1. For a fixed state $j$, $(\pi P)_j=\sum_i\pi_iP_{ij}$ by row-vector matrix multiplication.
2. Detailed balance changes this to $\sum_i\pi_jP_{ji}=\pi_j\sum_iP_{ji}$. Here $j$ is fixed and $i$ varies over destinations, so the last sum is row $j$, not column $j$.
3. Row-stochasticity gives $\sum_iP_{ji}=1$, hence $(\pi P)_j=\pi_j$ for every $j$. This proves stationarity without requiring irreducibility or positive entries of $\pi$.

Detailed balance converts the incoming sum into $\pi_j$ times row $j$'s unit sum.

**Self-assessment rubric**

- Write a correct coordinate of the row-vector product.
- Use detailed balance term by term while retaining the correct index roles.
- Apply the outgoing row sum to prove every stationary coordinate.

</details>
