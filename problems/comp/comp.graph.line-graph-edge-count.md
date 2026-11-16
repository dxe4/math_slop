# Count line-graph adjacency from endpoint incidences

*Easy · [Computational arithmetic problems](index.md)*

For a simple graph, the line graph has one vertex per edge and $\sum_v\binom{\deg(v)}2$ edges. The original degree list is 3,3,2,2,2. Find the line-graph edge count.

```answer
{"answer":{"kind":"integer","expected":"9","checker_scope":"Exact requested finite count using the supplied graph convention or theorem. No graph program or unrestricted proof is run or certified; this new skill does not expand an existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

Each pair of edges meeting at a vertex creates one line-graph edge.

</details>

<details>
<summary>Hint 2</summary>

In a simple graph, a pair of distinct edges cannot share two endpoints.

</details>

<details>
<summary>Worked solution</summary>

The supplied incidence formula counts each line-graph adjacency once.

1. Each degree-three vertex contributes three pairs, and each degree-two vertex contributes one.
2. The contributions total two times three plus three times one.
3. Thus the line graph has nine edges.

</details>
