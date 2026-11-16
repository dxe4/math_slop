# Optimize an unknown bipartition rather than assume its sizes

*Medium · [Original olympiad-style problems](index.md)*

What is the greatest possible number of edges in a simple bipartite graph on $11$ vertices, when the bipartition sizes are not specified?

```answer
{"answer":{"kind":"integer","expected":"30","checker_scope":"Exact requested finite count or sharp bound only. The full combinatorial argument is a worked model, not an automatically checked proof; this new skill changes no existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

For part sizes a and b, the edge count is at most ab.

</details>

<details>
<summary>Hint 2</summary>

Use the fixed sum a+b=11 to maximize that product and exhibit an attaining graph.

</details>

<details>
<summary>Worked solution</summary>

Balancing two integer part sizes gives the sharp bipartite edge maximum.

1. For part sizes a,b, simplicity permits at most ab edges. With a+b=11, the identity 4ab=121-(a-b)^2 shows the maximum occurs when the sizes differ by one.
2. The sizes five and six give product thirty.
3. The complete bipartite graph K\_(5,6) attains that value, proving the maximum.

</details>
