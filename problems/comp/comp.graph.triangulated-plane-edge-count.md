# Count edges when every plane face is triangular

*Easy · [Computational arithmetic problems](index.md)*

A connected simple plane graph with $12$ vertices has every face, including the unbounded face, triangular. Use E=3V-6 to find its edge count.

```answer
{"answer":{"kind":"integer","expected":"30","checker_scope":"Exact requested finite count using the supplied graph convention or theorem. No graph program or unrestricted proof is run or certified; this new skill does not expand an existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

The supplied triangulation formula includes the outer face.

</details>

<details>
<summary>Hint 2</summary>

The vertex count is well above the minimum needed for the simple-graph formula.

</details>

<details>
<summary>Worked solution</summary>

Euler and triangular face incidence give a sharp edge count for this embedding type.

1. Substitute V=12 in the supplied identity.
2. Three times twelve minus six is thirty.
3. Thus this plane triangulation has thirty edges.

</details>
