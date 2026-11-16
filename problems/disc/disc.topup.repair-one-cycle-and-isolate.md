# Prove a minimum deletion before completing a spanning tree

*Hard · [Discrete mathematics](index.md)*

On vertices $\{1,2,3,4,5\}$ begin with edges 12,23,31,34. You may delete existing edges and add missing edges between these vertices. What is the least number of existing edges that must be deleted to end with a spanning tree?

```answer
{"answer":{"kind":"integer","expected":"1","checker_scope":"Exact declared route or bounded observation only; an unrestricted proof is not automatically certified and no new checkpoint objective or eligibility is introduced."}}
```

<details>
<summary>Hint 1</summary>

Adding edges cannot remove a cycle already present.

</details>

<details>
<summary>Hint 2</summary>

For a matching upper bound, remove one cycle edge and connect the isolated vertex.

</details>

<details>
<summary>Worked solution</summary>

A necessary cycle deletion and a constructive repair establish the exact minimum.

1. The triangle 1-2-3-1 is a cycle, so at least one of its existing edges must be removed.
2. Remove 31. The remaining edges form path 1-2-3-4 and leave vertex five isolated.
3. Add 45 to obtain a spanning path. Exactly one deletion suffices, so the minimum is $1$.

</details>
