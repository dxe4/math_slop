# Determine complete basins while retaining the separating equilibrium

*Medium · [Differential equations problems](index.md)*

For $x'=x-x^3$ on the real line, prove every initial value gives a global forward solution. Determine the basins of attraction of -1 and 1, and the trajectory starting at zero.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

The vector field has roots -1,0,1; use all four intervening signs.

</details>

<details>
<summary>Hint 2</summary>

Uniqueness prevents crossing an equilibrium, and bounded monotone motion has a limiting equilibrium.

</details>

<details>
<summary>Model proof</summary>

The phase line and continuation identify entire basins, not just local stability.

1. The signs are positive on (-infinity,-1), negative on (-1,0), positive on (0,1), and negative on (1,infinity). Uniqueness keeps trajectories from crossing the equilibria. Each initial value therefore stays in the bounded interval between its start and the adjacent attracting equilibrium, or is itself an equilibrium.
2. Boundedness and smoothness exclude finite-time forward blowup, so every solution exists globally. For x\_0&gt;0, monotonicity in its invariant interval gives a limit, which must be an equilibrium by continuity of the vector field; the only possible limit there is one. Likewise every x\_0&lt;0 tends to negative one.
3. Thus the basins are (-infinity,0) for -1 and (0,infinity) for 1. Starting at zero gives the constant zero trajectory, which separates the two basins.

**Self-assessment rubric**

- Use all signs and uniqueness to produce bounded invariant intervals.
- Justify continuation and identify limits as equilibria.
- State both full basins and retain the exceptional zero solution.

</details>
