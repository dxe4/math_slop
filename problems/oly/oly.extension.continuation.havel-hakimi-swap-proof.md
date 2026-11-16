# Prove the degree-sequence reduction by edge swaps

*Hard · [Original olympiad-style problems](index.md)*

Let $d_1\ge\cdots\ge d_n\ge0$ be integers with $d_1\le n-1$. Prove this is a simple-graph degree sequence if and only if the sequence obtained by deleting $d_1$ and subtracting one from the next $d_1$ entries is realizable; a negative resulting entry means failure.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

In a realization, make the first vertex adjacent to the designated highest-degree remaining vertices one at a time.

</details>

<details>
<summary>Hint 2</summary>

If a desired nonneighbor u replaces a lower-degree neighbor w, find a neighbor z of u not adjacent to w and swap the two disjoint edges.

</details>

<details>
<summary>Model proof</summary>

Preserve every degree while improving the designated neighborhood.

1. The reverse implication is immediate: add a new vertex joined exactly to the designated $d_1$ vertices. Negative reduced degrees clearly cannot be realized.
2. For necessity, begin with a realization and let v be its first vertex. If its neighborhood is not the designated set, choose a desired nonneighbor u and an undesired neighbor w. The ordering gives $d(u)\ge d(w)$.
3. There is a vertex z adjacent to u but not to w, distinct from v and w. To justify it, compare their neighbor sets after omitting each other if necessary: w has v as an extra neighbor that u lacks, while u has at least its degree, so u must have another neighbor outside w’s neighborhood.
4. Replace edges vw and uz by vu and wz. The four vertices are distinct, the added edges were absent, and every degree is preserved. The number of desired neighbors of v increases by one.
5. After finitely many swaps v has exactly the designated neighbors. Removing it gives precisely the reduced degrees, proving the equivalence.

**Self-assessment rubric**

- Show how a reduced realization gives the original sequence.
- Use the degree comparison to find a valid fourth vertex.
- Check distinctness, absent added edges and all preserved degrees.
- Complete the neighborhood and obtain the exact reduction.

</details>
