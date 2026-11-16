# Classify connected components to prove an extremal bound

*Hard · [Original olympiad-style problems](index.md)*

Find the greatest possible number of edges in a simple graph on $11$ vertices containing no path through four distinct vertices. The forbidden path need not be induced.

```answer
{"answer":{"kind":"integer","expected":"10","checker_scope":"Exact requested finite count or sharp bound only. The full combinatorial argument is a worked model, not an automatically checked proof; this new skill changes no existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

A component containing a triangle cannot have any other vertex.

</details>

<details>
<summary>Hint 2</summary>

A triangle-free component has no cycle and its tree diameter is at most two.

</details>

<details>
<summary>Worked solution</summary>

The forbidden ordinary path forces each component to be a star or a triangle.

1. A cycle of length at least four contains the forbidden path. If a component contains a triangle and an outside vertex, an edge from the triangle toward the outside gives that vertex followed by three triangle vertices as a forbidden path. Thus a triangle component has exactly three vertices.
2. Every other component is a tree with no path of length three, hence a star, including a single isolated vertex. A triangle has as many edges as vertices; a star has one fewer.
3. Since eleven is not divisible by three, at least one component is a star, so the graph has at most ten edges. The star K\_(1,10) attains ten and has no four-distinct-vertex path.

</details>
