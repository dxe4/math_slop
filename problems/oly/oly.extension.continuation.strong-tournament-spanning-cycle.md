# Insert vertices to prove a tournament cycle theorem

*Hard · [Original olympiad-style problems](index.md)*

Prove every strongly connected tournament on at least $3$ vertices has a directed Hamiltonian cycle.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

Take a longest directed cycle. An outside vertex with both types of adjacency to it can be inserted between a suitable consecutive pair.

</details>

<details>
<summary>Hint 2</summary>

If no such insertion is possible, divide all outside vertices into those losing to the whole cycle and those beating it. Strong connectivity supplies an edge between the two classes in the useful direction.

</details>

<details>
<summary>Model proof</summary>

Use one-vertex and then two-vertex insertion to contradict maximality.

1. Strong connectivity supplies a directed cycle: following directed paths in a finite graph eventually gives one. Choose a longest such cycle C.
2. If an outside vertex has both an incoming and outgoing edge relative to C, the cyclic sequence of its adjacency types has consecutive vertices with $c_i\to v\to c_{i+1}$. Insert it, contradicting maximality.
3. Thus each outside vertex is in A, losing to every C vertex, or B, beating every C vertex. If only one class is present, strong connectivity between that class and C fails.
4. If both occur but every edge between them points from B to A, vertices in A have no outgoing route to C or B, again contradicting strong connectivity. Hence some edge $a\to b$ has a in A and b in B.
5. Replace any cycle edge by $c_i\to a\to b\to c_{i+1}$, obtaining a longer directed cycle. Therefore no outside vertex exists and C is Hamiltonian.

**Self-assessment rubric**

- Start from a genuine directed cycle and maximal length.
- Prove mixed adjacency gives a valid consecutive insertion.
- Use strong connectivity to control both classes and their connecting direction.
- Build the longer cycle and conclude spanning.

</details>
