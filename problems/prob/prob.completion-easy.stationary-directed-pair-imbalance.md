# A stationary cycle can carry a directed probability flux

*Easy · [Probability problems](index.md)*

A Markov chain follows the deterministic cycle $0\to1\to2\to0$ and starts with the uniform stationary law. Find $P(X_0=0,X_1=1)-P(X_0=1,X_1=0)$. This difference tests pairwise reversibility, rather than stationarity alone.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":3},"checker_scope":"Only the requested exact finite observation is checked; no unrestricted explanation is automatically certified."}}
```

<details>
<summary>Hint 1</summary>

Multiply each initial-state probability by the corresponding transition probability.

</details>

<details>
<summary>Hint 2</summary>

Stationarity constrains total incoming mass, so it does not require both directed transitions to be available.

</details>

<details>
<summary>Worked solution</summary>

A stationary circulation need not satisfy detailed balance on each edge.

1. The initial probability of state $0$ is $1/3$, and its next state is certainly $1$. Thus $P(X_0=0,X_1=1)=1/3$.
2. From state $1$ the next state is $2$, so the reverse pair $(1,0)$ has probability zero.
3. The requested difference is $1/3$. The uniform marginal distribution is preserved by the cyclic permutation, but the nonzero pair difference shows why stationarity alone does not imply reversibility.

</details>
