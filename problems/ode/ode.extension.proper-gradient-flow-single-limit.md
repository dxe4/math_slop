# Prove convergence to one critical point rather than only to a critical set

*Hard · [Differential equations problems](index.md)*

Let V be C^2 on the plane or on R^d, with compact sublevel sets and only finitely many critical points. Prove every forward solution of $x'=-\nabla V(x)$ exists globally and converges to a single critical point. You may use that a bounded trajectory's omega-limit set is nonempty, compact and connected, and may prove or use the elementary uniform-continuity form of Barbalat's lemma.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Energy confines the trajectory to a compact sublevel and integrates the squared gradient.

</details>

<details>
<summary>Hint 2</summary>

A connected omega-limit subset of a finite critical set can contain only one point.

</details>

<details>
<summary>Model proof</summary>

Dissipation gives a critical limit set, and connectedness turns that set into one limit.

1. Along a trajectory, Vprime=-\|\|grad V\|\|^2. The initial sublevel is compact and invariant, so local existence extends globally and V decreases to a finite lower bound. Hence integral\_0^infinity \|\|grad V(x(t))\|\|^2 dt is finite.
2. On this compact sublevel the gradient, Hessian and velocity are bounded. Thus t maps to \|\|grad V(x(t))\|\|^2 is uniformly continuous. Barbalat's lemma gives grad V(x(t)) tending to zero, so every omega-limit point is critical.
3. The omega-limit set is nonempty, compact and connected, and it lies in the finite critical set. It is therefore a singleton {p}. A bounded trajectory with that unique limit point converges to p; otherwise a subsequence staying away from p would have another compact limit point.

**Self-assessment rubric**

- Establish global continuation and integrability of the gradient norm squared.
- Use uniform continuity to show every accumulation point is critical.
- Use connectedness and finiteness, then justify convergence of the whole trajectory.

</details>
