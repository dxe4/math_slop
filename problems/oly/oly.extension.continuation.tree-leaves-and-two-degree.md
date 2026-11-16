# Recover two degree counts from tree structure

*Medium · [Original olympiad-style problems](index.md)*

A tree on thirteen vertices has three vertices of degree three, and every other vertex has degree one or two. Enter $[L,D]$, the number of leaves and degree-two vertices.

```answer
{"answer":{"kind":"vector","expected":["5","5"],"checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

Use both the vertex count and degree sum twice the edge count.

</details>

<details>
<summary>Hint 2</summary>

Subtract twice the vertex equation to isolate the leaf count.

</details>

<details>
<summary>Worked solution</summary>

Combine two independent tree counts.

1. The vertex equation is $L+D+3=13$. The tree has twelve edges, so $L+2D+9=24$.
2. Subtracting twice the first equation gives $-L+3=-2$, hence L is five.
3. The vertex equation then gives D five. The pattern is realizable, for example by a three-vertex path of degree-three branching vertices, adding the needed leaves and subdividing edges five times.

</details>
