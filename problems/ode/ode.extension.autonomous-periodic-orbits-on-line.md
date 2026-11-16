# Exclude a periodic scalar orbit through uniqueness

*Hard · [Differential equations problems](index.md)*

Let F be locally Lipschitz on an open interval I. Prove that every periodic C^1 solution $y:\mathbb R\to I$ of y'=F(y) is constant. Explain why a phase-plane intuition alone is insufficient.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

A periodic real-valued solution attains a maximum.

</details>

<details>
<summary>Hint 2</summary>

At a maximizing time, compare with the constant equilibrium solution through the same state.

</details>

<details>
<summary>Model proof</summary>

A turning point is an equilibrium, and local uniqueness prevents departure from it.

1. A continuous periodic solution attains a maximum M during one period. At a maximizing time t\_0 its derivative vanishes, so F(M)=0.
2. The constant function z(t)=M is therefore a solution through y(t\_0). Local Lipschitz continuity gives uniqueness for this initial-value problem in both time directions.
3. The set of times with y(t)=M is nonempty and closed by continuity, and open by local uniqueness. Since the real line is connected, that set is all of it. The conclusion uses uniqueness, which may fail without the stated regularity.

**Self-assessment rubric**

- Find a genuine attained extremum and identify its equilibrium state.
- Compare with the constant solution using the stated regularity.
- Extend equality to all times rather than asserting a local result globally.

</details>
