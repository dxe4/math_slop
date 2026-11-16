# Recover a triangle count from a closed-walk trace

*Easy · [Computational arithmetic problems](index.md)*

For the adjacency matrix A of a simple undirected graph, $\operatorname{tr}(A^3)$ is six times its triangle count. If that trace is 120, find the number of triangles.

```answer
{"answer":{"kind":"integer","expected":"20","checker_scope":"Exact requested finite count using the supplied graph convention or theorem. No graph program or unrestricted proof is run or certified; this new skill does not expand an existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

Each triangle has three choices of starting vertex.

</details>

<details>
<summary>Hint 2</summary>

Both traversal directions are counted in the supplied trace identity.

</details>

<details>
<summary>Worked solution</summary>

The trace counts rooted directed traversals rather than unrooted triangles.

1. A triangle contributes six closed walks of length three.
2. The supplied trace is 120.
3. Dividing by the stated multiplicity gives twenty triangles.

</details>
