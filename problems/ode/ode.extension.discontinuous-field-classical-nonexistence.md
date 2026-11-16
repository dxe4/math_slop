# Show why a discontinuous field can destroy a classical initial solution

*Medium · [Differential equations problems](index.md)*

Define F(y)=1 for y&lt;=0 and F(y)=-1 for y&gt;0. Prove there is no C^1 forward solution of $y'=F(y)$ with y(0)=0, even on a short interval. Explain which local-existence hypothesis fails.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

The equation fixes the derivative at the initial time.

</details>

<details>
<summary>Hint 2</summary>

A positive initial derivative forces a positive state immediately to the right.

</details>

<details>
<summary>Model proof</summary>

The discontinuity makes the initial derivative incompatible with the nearby field.

1. If a C^1 solution existed, the initial equation would give yprime(0)=F(0)=1.
2. Differentiability at zero gives y(t)/t tending to one as t decreases to zero from the right, so y(t)&gt;0 for all sufficiently small positive t. The equation would then give yprime(t)=-1 there, contradicting continuity of yprime at zero.
3. Thus no such classical solution exists. The field is discontinuous at zero, so the continuity assumption of Peano's local-existence theorem is absent; this is not a counterexample to that theorem.

**Self-assessment rubric**

- Use the prescribed value of the field at the initial state.
- Derive the nearby positive state and contradictory derivative.
- Identify the failed continuity hypothesis for classical existence.

</details>
