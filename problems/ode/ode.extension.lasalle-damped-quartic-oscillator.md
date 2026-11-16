# Use the largest invariant zero-derivative set

*Hard · [Differential equations problems](index.md)*

Prove that the origin of $x'=v$, v'=-x-x^3-v is globally asymptotically stable. Use V=v^2/2+x^2/2+x^4/4 and LaSalle's invariance principle; identify the largest invariant subset of V'=0.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

The derivative is only negative semidefinite, so do not conclude directly from its sign.

</details>

<details>
<summary>Hint 2</summary>

On v=0, remaining there also requires v'=0.

</details>

<details>
<summary>Model proof</summary>

Energy dissipation plus an invariant-set argument rules out all residual motion.

1. The candidate V is positive definite and radially unbounded. Differentiation gives Vprime=v\*(-x-x^3-v)+(x+x^3)\*v=-v^2&lt;=0.
2. Every solution remains in its compact initial energy sublevel, giving global forward continuation and Lyapunov stability of the origin. The set Vprime=0 is v=0, but a trajectory can remain there only if vprime=-x-x^3=0, hence x=0.
3. Thus the largest invariant subset is the origin alone. LaSalle's principle on each compact invariant sublevel gives attraction to zero for every initial point; together with stability this proves global asymptotic stability.

**Self-assessment rubric**

- Verify positivity, properness and the exact dissipative derivative.
- Distinguish the entire zero-derivative set from its largest invariant subset.
- Justify continuation and apply LaSalle on compact invariant sublevels.

</details>
