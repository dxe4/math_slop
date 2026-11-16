# Prove Hamiltonicity from a minimum degree

*Hard · [Original olympiad-style problems](index.md)*

Prove every simple graph on $n\ge3$ vertices with minimum degree at least $n/2$ has a Hamiltonian cycle.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

Every neighbor of either endpoint of a longest path lies on that path.

</details>

<details>
<summary>Hint 2</summary>

Index the possible predecessor and successor positions; the endpoint degree sum forces an index closing the entire path into a cycle.

</details>

<details>
<summary>Model proof</summary>

Close a longest path and then use connectedness to rule out omitted vertices.

1. The graph is connected: two components would each contain more than half the vertices because their vertices need at least n divided by two neighbors.
2. Take a longest path $v_1,\ldots,v_k$. All endpoint neighbors lie on it. For indices one through k minus one, mark those with edge $v_1v_{i+1}$ and those with edge $v_iv_k$.
3. The two marked counts sum to at least n, larger than k minus one, so some index is marked both ways. Traverse $v_1,\ldots,v_i,v_k,v_{k-1},\ldots,v_{i+1},v_1$ to obtain a cycle through all k path vertices.
4. If k were less than n, connectedness supplies an edge from a vertex outside the cycle to one on it. Breaking the cycle at that point gives a path with k plus one vertices, contradicting maximality.
5. Thus the cycle contains every vertex. The degree condition also makes k at least three, so the cycle is genuine.

**Self-assessment rubric**

- Prove the graph is connected from the degree condition.
- Define both endpoint index sets correctly.
- Use their forced overlap to produce the explicit cycle.
- Exclude all omitted vertices by a longer-path contradiction.

</details>
