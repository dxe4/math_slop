# Compute the free rank of a connected covering graph

*Medium · [Topology problems](index.md)*

Let X be a rose with two oriented loops a,b and one vertex. A four-sheeted covering has monodromy $a=(1\ 2\ 3\ 4)$ and $b=(1\ 3)$ on its labeled fiber. Find the rank of its fundamental group. Each lifted oriented base edge counts once as an edge of the graph.

```answer
{"answer":{"kind":"integer","expected":5,"checker_scope":"Only the requested exact result in the specified space, bases and coefficient conventions is checked; a personal argument is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Check transitivity before applying a connected-graph formula.

</details>

<details>
<summary>Hint 2</summary>

A d-sheeted cover has d lifted vertices and d lifts of each of the two base edges.

</details>

<details>
<summary>Worked solution</summary>

Transitive monodromy makes the Schreier graph connected, so its Euler characteristic determines its free rank.

1. The action of a alone is transitive on the four labels. The monodromy action and hence the covering graph are connected.
2. There are 4 vertices and 8 edges: every vertex is the initial point of one a-edge and one b-edge. Oppositely traversing a lifted edge does not add another edge.
3. A connected finite graph has free fundamental group of rank E−V+1, obtained by collapsing a spanning tree. Here this is 8−4+1=5.

</details>
