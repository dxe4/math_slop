# Alternating harmonic log

*Medium · [Original Putnam-style training](index.md)*

Prove $\sum_{n=1}^{\infty}(-1)^{n-1}/n=\log2$, explicitly controlling the endpoint remainder.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Integrate the finite geometric identity for $(1+x)^{-1}$.

</details>

<details>
<summary>Hint 2</summary>

Bound the integrated remainder uniformly in the truncation index.

</details>

<details>
<summary>Model proof</summary>

The left integral is $\log2$, and the remainder tends to zero, proving the identity.

1. For $N\ge1$, $(1+x)^{-1}=\sum_{k=0}^{N-1}(-x)^k+(-x)^N/(1+x)$ on $[0,1]$.
2. Integrating the finite sum gives $\sum_{k=1}^N(-1)^{k-1}/k$; the remainder integral has absolute value at most $\int_0^1x^N dx=1/(N+1)$.
3. The left integral is $\log2$, and the remainder tends to zero, proving the identity.

**Self-assessment rubric**

- Write a finite geometric decomposition of 1/(1+x).
- Integrate and bound the residual term at x=1.
- Take the justified limit to log 2.

</details>
