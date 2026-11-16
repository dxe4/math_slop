# Analyze a repeated jump through its discrete return map

*Medium · [Differential equations problems](index.md)*

A scalar state obeys $y'=-y$ between integer times and is reset by y(n+)=2\*y(n-) at every positive integer n. Prove the zero state is globally asymptotically stable, although every reset doubles the state.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Use the state just after each integer as the discrete coordinate.

</details>

<details>
<summary>Hint 2</summary>

Between resets there is only further decay; include the finite first interval in a uniform stability estimate.

</details>

<details>
<summary>Model proof</summary>

Continuous decay can dominate repeated expansive jumps.

1. Write z\_n=y(n+) and z\_0=y(0). Between n and n+1 the state is exp(-(t-n))\*z\_n, and the next reset gives z\_(n+1)=(2/e)\*z\_n.
2. Since e&gt;2, the multiplier q=2/e lies strictly between zero and one. Thus z\_n=q^n\*z\_0 tends to zero for every initial value.
3. At every time between resets, \|y(t)\|&lt;=\|z\_n\|&lt;=\|z\_0\|. This gives Lyapunov stability and, with z\_n tending to zero, global attraction. The individual doubling jumps do not determine the full-period behavior.

**Self-assessment rubric**

- Combine decay and reset in the correct chronological order.
- Establish the strict contraction of the full return.
- Control all continuous times, not only the sampled sequence.

</details>
