# Use bipartition parity to count odd closed walks

*Easy · [Computational arithmetic problems](index.md)*

In a bipartite graph, each step changes sides. How many closed walks of length $7$ can it have, regardless of the chosen starting vertex?

```answer
{"answer":{"kind":"integer","expected":"0","checker_scope":"Exact requested finite count using the supplied graph convention or theorem. No graph program or unrestricted proof is run or certified; this new skill does not expand an existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

Track the side occupied after each step.

</details>

<details>
<summary>Hint 2</summary>

An odd number of side changes cannot return to the starting side.

</details>

<details>
<summary>Worked solution</summary>

Bipartition parity rules out an entire closed-walk length.

1. A walk alternates the two parts at every step.
2. After seven steps it is in the opposite part from its start.
3. It therefore cannot be closed, so the count is zero.

</details>
