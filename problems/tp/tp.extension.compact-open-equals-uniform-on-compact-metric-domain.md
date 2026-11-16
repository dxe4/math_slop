# Prove equality of two function-space topologies

*Medium · [Topology problems](index.md)*

For a compact metric space K, prove the compact-open topology on $C(K,\mathbb R)$ equals the topology of the uniform metric. Its subbasic sets are $[C,O]=\{g:g(C)\subset O\}$ for compact $C\subset K$ and open $O\subset\mathbb R$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific rubric reflection only; no automatic verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

For a subbasic neighborhood of f, use the positive distance of the compact set f(C) from the complement of O.

</details>

<details>
<summary>Hint 2</summary>

For a uniform ball, cover K by finitely many small closed balls on which f oscillates by less than a third of the radius.

</details>

<details>
<summary>Model proof</summary>

Compactness converts local output restrictions into one uniform error budget.

1. If $f\in[C,O]$, its compact image $f(C)$ has a positive distance from the closed complement of O, unless that complement is empty, when there is no restriction. A sufficiently small uniform perturbation therefore stays in $[C,O]$. Empty C is also unrestricted.
2. Conversely fix a uniform radius epsilon around f. Uniform continuity gives a small radius in K making f vary by less than epsilon/3. Choose finitely many corresponding closed metric balls $C_i$ covering K, with centers $x_i$.
3. The finite compact-open intersection $[C_i,(f(x_i)-2\varepsilon/3,f(x_i)+2\varepsilon/3)]$ contains f. Every g in it differs from f by less than epsilon at each input, using one covering ball and the two triangle-inequality bounds.
4. Thus each topology has a neighborhood basis refining the other at every f, proving equality.

**Self-assessment rubric**

- Find a uniform radius inside any specified compact-open subbasic neighborhood, including empty cases.
- Construct the finite compact cover with controlled variation of the fixed function.
- Build the finite intersection and prove it lies inside the uniform ball.

</details>
