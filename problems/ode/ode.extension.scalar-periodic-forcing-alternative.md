# Classify periodic solvability at and away from resonance

*Hard · [Differential equations problems](index.md)*

Let a,b be continuous real T-periodic functions and $\Phi(t)=\exp(\int_0^t a(s)\,ds)$. For y'=a(t)y+b(t), classify all T-periodic solutions using mu=Phi(T) and I=integral\_0^T b(s)/Phi(s) ds. Include the resonant case mu=1.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Variation of constants gives the affine period map.

</details>

<details>
<summary>Hint 2</summary>

A fixed point of that map gives a periodic solution by uniqueness and periodic coefficients.

</details>

<details>
<summary>Model proof</summary>

Periodic solvability is an affine fixed-point problem with a resonant alternative.

1. Variation of constants gives y(t)=Phi(t)\*(y\_0+integral\_0^t b(s)/Phi(s) ds). Hence y(T)=mu\*(y\_0+I).
2. The condition y(T)=y\_0 becomes (1-mu)\*y\_0=mu\*I. If mu differs from one, there is exactly one choice y\_0=mu\*I/(1-mu). If mu=1 and I differs from zero, there is no choice. If mu=1 and I=0, every initial value works.
3. In each fixed-point case, y(t+T) and y(t) solve the same equation and share the same initial value at t=0, using periodicity of a,b. Uniqueness proves genuine periodicity for all t, completing the classification.

**Self-assessment rubric**

- Derive the full period map including the forcing integral.
- Treat the unique, absent and one-parameter alternatives explicitly.
- Use coefficient periodicity and uniqueness to pass from matching endpoints to a periodic trajectory.

</details>
