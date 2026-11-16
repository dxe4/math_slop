# Derive the two-step transition formula

*Medium · [Probability problems](index.md)*

For a time-homogeneous Markov chain on a finite state space with row transition matrix $P$, derive $P(X_{n+2}=k\mid X_n=i)=\sum_jP_{ij}P_{jk}$ when $P(X_n=i)>0$. Account for intermediate states of zero conditional probability.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or graded objective evidence."}}
```

<details>
<summary>Hint 1</summary>

Partition according to the intermediate state $X_{n+1}$ while retaining the conditioning on $X_n=i$.

</details>

<details>
<summary>Hint 2</summary>

Apply the conditional multiplication rule only to intermediate events with positive conditional probability; the other summands have joint mass zero.

</details>

<details>
<summary>Model proof</summary>

Conditional total probability and the Markov property yield matrix multiplication.

1. Under the positive-probability event $X_n=i$, the intermediate-state events partition the space. The requested probability is the sum over $j$ of $P(X_{n+1}=j,X_{n+2}=k\mid X_n=i)$.
2. For $P_{ij}>0$, the conditional multiplication rule and homogeneous Markov property identify this joint mass as $P_{ij}P_{jk}$. If $P_{ij}=0$, the intermediate event is null under the conditioning and its joint mass is zero, without defining a conditional probability on that null event.
3. Adding these terms gives $\sum_jP_{ij}P_{jk}=(P^2)_{ik}$. The multiplication sums over every possible intermediate state, rather than choosing a single path.

Sum path products $P_{ij}P_{jk}$, treating zero first-step probability as a zero joint contribution.

**Self-assessment rubric**

- Use conditional total probability over the exhaustive intermediate-state events.
- Factor positive-probability paths by the homogeneous Markov property and handle null paths without undefined conditioning.
- Sum correctly over intermediate states and identify the matrix-square coordinate.

</details>
