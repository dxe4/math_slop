# Distinguish global attraction from an exponential estimate

*Medium · [Differential equations problems](index.md)*

Prove the origin of $x'=-x^3$, y'=-y is globally asymptotically stable but is not locally exponentially stable in the Euclidean norm. You may use the Lyapunov theorem for a positive-definite radially unbounded V with negative-definite V'.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Use V=x^2+y^2 for global attraction.

</details>

<details>
<summary>Hint 2</summary>

On the invariant axis y=0, compare the explicit algebraic decay with a proposed exponential bound.

</details>

<details>
<summary>Model proof</summary>

Negative-definite energy decay need not be exponential near a degenerate equilibrium.

1. For V=x^2+y^2, Vprime=-2x^4-2y^2 is strictly negative away from the origin, and V is positive definite and radially unbounded. The stated Lyapunov theorem gives global asymptotic stability, with global existence also following from bounded invariant sublevel sets.
2. For a nonzero initial x\_0 on y=0, separation gives x(t)=x\_0/sqrt(1+2\*x\_0^2\*t).
3. A local exponential bound would require 1/sqrt(1+2\*x\_0^2\*t)&lt;=M\*exp(-alpha\*t) for all t&gt;=0 with positive alpha and finite M. The ratio of the left side to exp(-alpha\*t) tends to infinity for any fixed nonzero sufficiently small x\_0, a contradiction.

**Self-assessment rubric**

- Verify positive definiteness, properness and the strict derivative sign.
- Obtain the actual trajectory on an invariant axis.
- Compare its tail with every possible exponential estimate.

</details>
