# Uniqueness by a stationary-density maximum

*Medium · [Probability problems](index.md)*

A finite irreducible row-stochastic matrix $P$ has a stationary probability vector $\pi$ with $\pi_i>0$ for every state. Assuming this existence, prove uniqueness by considering the maximum of $r_i=\nu_i/\pi_i$ for another stationary probability vector $\nu$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or graded objective evidence."}}
```

<details>
<summary>Hint 1</summary>

Use both stationarity equations to express each ratio as a convex combination of predecessor ratios.

</details>

<details>
<summary>Hint 2</summary>

At a maximum, every positively weighted predecessor must also attain that maximum. Use irreducibility along a path ending at the maximum state.

</details>

<details>
<summary>Model proof</summary>

A maximum propagates backwards through every positive transition path.

1. For each $j$, stationarity gives $r_j=\nu_j/\pi_j=\sum_i(\pi_iP_{ij}/\pi_j)r_i$. The coefficients are nonnegative and sum to one because $\pi P=\pi$.
2. Let $M=\max_i r_i$, attained at $j_0$ since the state space is finite. A convex average of values at most $M$ equals $M$ only if every term with positive weight equals $M$. Hence every predecessor $i$ with $P_{ij_0}>0$ has $r_i=M$.
3. For any state $k$, irreducibility supplies a positive-transition path from $k$ to $j_0$. Repeating the predecessor argument backwards along this path yields $r_k=M$. Thus $\nu=M\pi$ on all states. Normalisation gives $1=\sum_i\nu_i=M\sum_i\pi_i=M$, proving $\nu=\pi$. This proves uniqueness conditional on the assumed positive stationary law, not its existence.

The maximum ratio propagates to all predecessors and hence every state; normalisation makes it one.

**Self-assessment rubric**

- Derive the predecessor convex-average formula with positive denominators and unit weight sum.
- Propagate the maximum along positive paths in the correct direction using irreducibility.
- Conclude all ratios are equal and normalisation forces that common ratio to one.

</details>
