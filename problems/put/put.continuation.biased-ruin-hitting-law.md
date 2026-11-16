# Biased ruin hitting law

*Hard · [Original Putnam-style training](index.md)*

For a nearest-neighbor walk on $\{0,\ldots,N\}$ with upward chance $p$ and downward chance $q=1-p$, $0<p\ne q<1$, prove $P_i(T_N<T_0)=[1-(q/p)^i]/[1-(q/p)^N]$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Solve the first-step harmonic recurrence with boundary values zero and one.

</details>

<details>
<summary>Hint 2</summary>

Its characteristic roots are $1$ and $q/p$.

</details>

<details>
<summary>Model proof</summary>

Boundary conditions give $A=-B$ and $B=[(q/p)^N-1]^{-1}$, yielding the stated ratio. Uniqueness follows from the finite hitting problem or recurrence boundaries.

1. Let $h_i=P_i(T_N<T_0)$. Then $h_0=0$, $h_N=1$, and for interior $i$, $h_i=ph_{i+1}+qh_{i-1}$.
2. The recurrence has solutions $h_i=A+B(q/p)^i$ because its characteristic polynomial has distinct roots $1,q/p$ when $p\ne q$.
3. Boundary conditions give $A=-B$ and $B=[(q/p)^N-1]^{-1}$, yielding the stated ratio. Uniqueness follows from the finite hitting problem or recurrence boundaries.

**Self-assessment rubric**

- Set up biased first-step recurrence with zero/one boundaries.
- Solve it using distinct roots one and q/p.
- Impose both boundaries and state the hitting probability.

</details>
