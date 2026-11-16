# Apply Cayley with labeled vertices and unrooted trees

*Easy · [Computational arithmetic problems](index.md)*

Cayley gives $n^{n-2}$ spanning trees of the complete graph on n labeled vertices. Find the count for K8; the trees are not additionally rooted.

```answer
{"answer":{"kind":"integer","expected":"262144","checker_scope":"Exact requested finite count using the supplied graph convention or theorem. No graph program or unrestricted proof is run or certified; this new skill does not expand an existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

The exponent is two less than the vertex count.

</details>

<details>
<summary>Hint 2</summary>

Do not multiply by a choice of root when the convention is unrooted.

</details>

<details>
<summary>Worked solution</summary>

The supplied labeled-tree theorem fixes both the exponent and the rooting convention.

1. With eight labeled vertices, the formula gives eight to the sixth power.
2. That power is 262144.
3. No extra root choice is included, so this is the requested spanning-tree count.

</details>
