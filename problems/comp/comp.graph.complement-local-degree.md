# Recover one complement degree without constructing the complement

*Easy · [Computational arithmetic problems](index.md)*

For a simple graph with $20$ vertices, one vertex has degree seven. Its degree in the complement is n-1 minus its original degree. Find that complement degree.

```answer
{"answer":{"kind":"integer","expected":"12","checker_scope":"Exact requested finite count using the supplied graph convention or theorem. No graph program or unrestricted proof is run or certified; this new skill does not expand an existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

The vertex is not considered adjacent to itself.

</details>

<details>
<summary>Hint 2</summary>

Every other vertex is adjacent in exactly one of the original graph and its complement.

</details>

<details>
<summary>Worked solution</summary>

Complementation partitions the possible neighbors at one vertex.

1. There are nineteen other vertices available as neighbors.
2. Seven are already adjacent in the original graph.
3. The complement degree is nineteen minus seven, or twelve.

</details>
