# Count edges inside one degree class

*Medium · [Original olympiad-style problems](index.md)*

A simple graph has $10$ vertices: five independent vertices of degree $3$ and five other vertices each of degree $5$. How many edges join two vertices of the latter class?

```answer
{"answer":{"kind":"integer","expected":"5","checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

The independent class contributes only cross edges.

</details>

<details>
<summary>Hint 2</summary>

Count the other class’s total degree as cross edges plus twice its internal edges.

</details>

<details>
<summary>Worked solution</summary>

Apply degree counting separately on the two vertex classes.

1. The independent class has degree sum fifteen, all from cross edges.
2. The other degree sum is twenty-five, so if e is its internal count, $25=15+2e$.
3. Thus e is five. The hypotheses are consistent: use a cycle on the latter five and a three-regular bipartite graph between the classes.

</details>
