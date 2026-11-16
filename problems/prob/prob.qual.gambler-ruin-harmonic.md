# Justify absorption before solving the fair-walk boundary equation

*Medium · [Probability problems](index.md)*

A fair nearest-neighbor walk on $\{0,\ldots,N\}$ is absorbed at $0$ and $N$, where $N\ge1$. Prove that, from $i$, the probability of absorption at $N$ is $i/N$. Include a justification that absorption occurs almost surely.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or required graded evidence."}}
```

<details>
<summary>Hint 1</summary>

In a block of $N$ steps, one repeated direction has a fixed positive chance of forcing absorption.

</details>

<details>
<summary>Hint 2</summary>

The first-step equations make successive differences of the desired hitting probabilities constant.

</details>

<details>
<summary>Model proof</summary>

A uniform block bound validates the boundary problem, which then has an affine solution.

1. From any nonabsorbing state, taking successive downward steps until the boundary has probability at least $2^{-N}$ and forces absorption within $N$ steps. Iterating the Markov property gives $P_i(\tau>kN)\le(1-2^{-N})^k\to0$.
2. Writing $h_i=P_i(X_\tau=N)$, first-step conditioning gives $h_0=0$, $h_N=1$ and $2h_i=h_{i-1}+h_{i+1}$ for interior states.
3. Thus $h_{i+1}-h_i$ is constant. The boundary values make it $1/N$, yielding $h_i=i/N$. If $N=1$ only the two boundary states exist and the same formula holds.

**Self-assessment rubric**

- Supply a uniform positive block absorption probability and iterate it.
- Write the interior recurrence with both boundary values.
- Solve the difference equation including the smallest domain.

</details>
