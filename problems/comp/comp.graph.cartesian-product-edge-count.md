# Use the two Cartesian-product edge directions

*Easy · [Computational arithmetic problems](index.md)*

Graphs G,H have respectively $5,4$ vertices and 6,3 edges. In the Cartesian product, an edge changes exactly one coordinate along an edge of its factor. Use E(G square H)=V(H)E(G)+V(G)E(H) to find its edge count.

```answer
{"answer":{"kind":"integer","expected":"39","checker_scope":"Exact requested finite count using the supplied graph convention or theorem. No graph program or unrestricted proof is run or certified; this new skill does not expand an existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

An edge changing the first coordinate is repeated at each second-coordinate vertex.

</details>

<details>
<summary>Hint 2</summary>

Edges changing the second coordinate form a disjoint family.

</details>

<details>
<summary>Worked solution</summary>

The two permitted coordinate changes give distinct additive edge families.

1. The first-coordinate family has four times six, or twenty-four edges.
2. The second-coordinate family has five times three, or fifteen edges.
3. Their sum is thirty-nine.

</details>
