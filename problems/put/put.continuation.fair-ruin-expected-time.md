# Fair ruin expected time

*Hard · [Original Putnam-style training](index.md)*

A fair nearest-neighbor walk on $\{0,1,\ldots,N\}$ stops at $0$ or $N$. Starting at $i$, prove its expected absorption time is $i(N-i)$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Use a first-step recurrence for the expected time $e_i$.

</details>

<details>
<summary>Hint 2</summary>

Check the quadratic candidate and prove uniqueness of the finite boundary-value solution.

</details>

<details>
<summary>Model proof</summary>

If two solutions existed, their difference would be discrete harmonic with zero boundary values; its first differences are constant and both endpoints force zero. Thus $e_i=q_i$.

1. For $0<i<N$, first-step conditioning gives $e_i=1+(e_{i-1}+e_{i+1})/2$, with $e_0=e_N=0$. Finite-state absorption ensures the expectations are finite.
2. The function $q_i=i(N-i)$ has those boundary values and satisfies $q_{i+1}-2q_i+q_{i-1}=-2$, equivalent to the recurrence.
3. If two solutions existed, their difference would be discrete harmonic with zero boundary values; its first differences are constant and both endpoints force zero. Thus $e_i=q_i$.

**Self-assessment rubric**

- Set up expected-time recurrence and absorbing boundary values.
- Verify i(N−i) satisfies the recurrence.
- Prove uniqueness of the discrete harmonic difference with zero boundaries.

</details>
