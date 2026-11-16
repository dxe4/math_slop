# Count the complementary dual spanning-tree edges

*Easy · [Computational arithmetic problems](index.md)*

A connected plane graph has $7$ vertices and 10 edges. The dual edges corresponding to edges outside a primal spanning tree form a dual spanning tree. How many edges does that dual spanning tree contain?

```answer
{"answer":{"kind":"integer","expected":"4","checker_scope":"Exact requested finite count using the supplied graph convention or theorem. No graph program or unrestricted proof is run or certified; this new skill does not expand an existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

A primal spanning tree has one fewer edge than the primal vertex count.

</details>

<details>
<summary>Hint 2</summary>

Count edges remaining in the complement before passing to their duals.

</details>

<details>
<summary>Worked solution</summary>

The plane tree-cotree correspondence uses the complement of the chosen primal tree.

1. The primal spanning tree has six edges.
2. Four of the ten graph edges remain outside it.
3. Their four corresponding dual edges form the stated dual spanning tree; equivalently the dual has five vertices by Euler and needs four tree edges.

</details>
