# First-step equations for a finite hitting-time mean

*Medium · [Probability problems](index.md)*

Let a time-homogeneous Markov chain have finite state space $S$ and row transition matrix $P$. For a nonempty target $A\subseteq S$, set $T_A=\inf\{n\ge0:X_n\in A\}$ and assume $h_i=E_i[T_A]<\infty$ for every $i\in S$. Prove $h_i=0$ on $A$ and $h_i=1+\sum_{j\in S}P_{ij}h_j$ off $A$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or graded objective evidence."}}
```

<details>
<summary>Hint 1</summary>

The hitting-time convention allows an initial hit at time zero.

</details>

<details>
<summary>Hint 2</summary>

Starting outside the target, separate the first elapsed step from the hitting time of the shifted path, then condition on its state after that step.

</details>

<details>
<summary>Model proof</summary>

Restart the remaining hitting problem after the first transition.

1. If $i\in A$, the initial state already lies in the target, so $T_A=0$ under $P_i$ and $h_i=0$.
2. If $i\notin A$, pathwise $T_A=1+T_A\circ\theta_1$, where the shifted hitting time begins at $X_1$ and is zero if $X_1\in A$.
3. The homogeneous Markov property at deterministic time one gives conditional mean $h_j$ for the shifted hitting time whenever $X_1=j$ has positive probability. Zero-probability transitions contribute zero. Taking expectations gives $h_i=1+\sum_jP_{ij}h_j$; all terms are finite by assumption, so no subtraction of infinities is involved.

The boundary values are zero and the off-target means satisfy $h_i=1+\sum_jP_{ij}h_j$.

**Self-assessment rubric**

- Use the stated hitting convention to prove the boundary value on the target.
- Separate one elapsed step from the remaining hitting time outside the target.
- Use the homogeneous Markov property, finite means and transition weights to derive the recurrence.

</details>
