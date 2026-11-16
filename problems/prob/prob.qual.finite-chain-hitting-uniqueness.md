# Use absorption to force a harmonic boundary solution to vanish

*Medium · [Probability problems](index.md)*

Let a finite-state Markov chain hit a target set $A$ almost surely from every initial state. If $h=0$ on $A$ and $h(i)=\sum_jP_{ij}h(j)$ for $i\notin A$, prove $h$ is identically zero. The set $A$ need not be absorbing for the original chain.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or required graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Stop the chain on its first visit to $A$.

</details>

<details>
<summary>Hint 2</summary>

Iterate the harmonic identity for the stopped chain and use bounded convergence.

</details>

<details>
<summary>Model proof</summary>

The stopped process converts the harmonic equation into an exact expectation identity.

1. Let $\tau=\inf\{n\ge0:X_n\in A\}$. Until $\tau$, the Markov property and harmonicity give the martingale identity for $h(X_{n\wedge\tau})$; after $\tau$ this stopped value is fixed.
2. Iterating conditional expectations gives $h(i)=E_i[h(X_{n\wedge\tau})]$ for every $n$. No assumption that the unstopped chain remains in $A$ is needed.
3. The finite state space makes $h$ bounded. Since $\tau<\infty$ almost surely, $h(X_{n\wedge\tau})\to h(X_\tau)=0$. Bounded convergence gives $h(i)=0$ for every initial state.

**Self-assessment rubric**

- Establish the conditional expectation identity before and after the stopping time.
- Obtain the finite-time expectation representation.
- Use boundedness and almost-sure hitting to justify the limit.

</details>
