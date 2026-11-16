# Distinguish a direct graph product from a Cartesian product

*Easy · [Computational arithmetic problems](index.md)*

Simple undirected graphs G,H have $6$ and $3$ edges. Their direct product connects (g,h) to (gprime,hprime) exactly when both coordinate pairs are edges. Each pair of factor edges creates two distinct product edges. Find the product edge count.

```answer
{"answer":{"kind":"integer","expected":"36","checker_scope":"Exact requested finite count using the supplied graph convention or theorem. No graph program or unrestricted proof is run or certified; this new skill does not expand an existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

Both coordinates must change along edges in this product.

</details>

<details>
<summary>Hint 2</summary>

The two endpoint matchings give different unordered product edges.

</details>

<details>
<summary>Worked solution</summary>

The direct-product convention produces two matchings per pair of factor edges.

1. There are eighteen pairs consisting of one edge from each factor.
2. The stated construction gives two distinct product edges per such pair, with no duplicate factor pair for an edge.
3. Thus the product contains thirty-six edges.

</details>
