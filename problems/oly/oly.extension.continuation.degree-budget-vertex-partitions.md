# Prove a sharp maximum-degree partition theorem

*Hard · [Original olympiad-style problems](index.md)*

Let nonnegative integers $d_1,\ldots,d_r$ be given. Prove every finite graph with maximum degree at most $\sum_i(d_i+1)-1$ has a vertex partition into r parts whose induced maximum degrees are at most the respective $d_i$. Show the degree bound is sharp in general.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

Among all partitions minimize the weighted sum of internal edges, weighting part i by $1/(d_i+1)$.

</details>

<details>
<summary>Hint 2</summary>

A vertex violating its part’s bound must have at most the allowed degree into some other part, or its full degree would exceed the hypothesis.

</details>

<details>
<summary>Model proof</summary>

Use a weighted local-improvement potential and a complete-graph obstruction.

1. Choose a partition minimizing $\sum_i e(V_i)/(d_i+1)$; finitely many partitions make a minimum exist. Empty parts are allowed.
2. If a vertex in part i has at least $d_i+1$ neighbors there, then some other part j has at most $d_j$ neighbors of that vertex. Otherwise total degree would be at least $\sum_i(d_i+1)$, contradicting the hypothesis.
3. Moving the vertex from i to j decreases its old weighted internal-edge contribution by at least one and adds at most $d_j/(d_j+1)<1$. The potential strictly decreases, a contradiction.
4. Thus every part satisfies its induced degree bound. For sharpness, take the complete graph on $1+\sum_i(d_i+1)$ vertices, whose maximum degree is exactly the excluded next value.
5. Each induced part of a complete graph can have at most $d_i+1$ vertices under its degree bound. Those capacities sum to fewer vertices than the graph has, so no partition exists.

**Self-assessment rubric**

- Choose the correct finite potential and weights.
- Derive a destination part from the exact degree budget.
- Show the move strictly lowers the potential.
- Give and prove the complete-graph obstruction at the next degree.

</details>
