# Which edge signs can all be made positive?

*Hard · [Original olympiad-style problems](index.md)*

Each edge of a finite simple graph is labeled $+1$ or $-1$. A switch at a vertex reverses all incident signs. Prove that all signs can be made positive exactly when every cycle has sign product $+1$. Also prove that a graph with $n$ vertices and $c$ connected components has exactly $2^{n-c}$ distinct sign patterns reachable from its all-positive pattern.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

Every vertex switch changes either zero or two signs on a cycle.

</details>

<details>
<summary>Hint 2</summary>

Within each component, choose a spanning tree and assign vertex switch signs outward from one root. Non-tree edges are controlled by their fundamental cycles.

</details>

<details>
<summary>Model proof</summary>

Cycle products are invariant and spanning-tree propagation shows they are complete.

1. A switch affects either zero or two edges of any cycle, preserving its sign product. Thus a pattern switchable to all-positive must have every cycle product positive.
2. For sufficiency, in each connected component choose a root with vertex multiplier $t_r=1$. Along each spanning-tree edge $uv$ from a parent to child, assign $t_v=t_u\sigma_{uv}$. Switching exactly the vertices with $t_v=-1$ makes every tree-edge sign $t_u\sigma_{uv}t_v=+1$.
3. For a non-tree edge, its fundamental cycle has all other edges in the tree. Its invariant product is positive, so after the tree normalization that last edge is positive too. Isolated vertices cause no condition.
4. From the all-positive pattern, any multiplier vector $t\in\{\pm1\}^n$ produces edge signs $t_ut_v$. Two vectors give the same signs exactly when their quotient is constant on each connected component. There are $2^c$ vectors in each fiber, yielding $2^n/2^c=2^{n-c}$ distinct reachable patterns.

**Self-assessment rubric**

- Check zero-or-two sign changes on each cycle.
- Construct consistent vertex multipliers on every spanning tree.
- Use each fundamental cycle to force all remaining signs.
- Identify precisely the componentwise constant multiplier ambiguity.

</details>
