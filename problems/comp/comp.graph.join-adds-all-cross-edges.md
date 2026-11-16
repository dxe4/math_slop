# Count the new cross edges in a graph join

*Easy · [Computational arithmetic problems](index.md)*

Disjoint simple graphs G,H have respectively $5,4$ vertices and 6,3 edges. Their join keeps both graphs and adds every edge between the two vertex sets. Find the total edge count.

```answer
{"answer":{"kind":"integer","expected":"29","checker_scope":"Exact requested finite count using the supplied graph convention or theorem. No graph program or unrestricted proof is run or certified; this new skill does not expand an existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

The old internal edge sets remain disjoint.

</details>

<details>
<summary>Hint 2</summary>

A cross edge is specified by one vertex from each factor.

</details>

<details>
<summary>Worked solution</summary>

A join adds one complete bipartite cross family without deleting internal edges.

1. The two internal edge counts sum to nine.
2. There are five times four, or twenty cross edges.
3. The join has twenty-nine edges altogether.

</details>
