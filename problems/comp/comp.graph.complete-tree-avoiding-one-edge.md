# Subtract trees containing a designated edge

*Easy · [Computational arithmetic problems](index.md)*

For K5, use Cayley count $5^3$ and the fact that each fixed edge lies in exactly 2 times 5^2 spanning trees. How many spanning trees avoid one specified edge?

```answer
{"answer":{"kind":"integer","expected":"75","checker_scope":"Exact requested finite count using the supplied graph convention or theorem. No graph program or unrestricted proof is run or certified; this new skill does not expand an existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

Separate all spanning trees by whether the chosen edge is present.

</details>

<details>
<summary>Hint 2</summary>

The supplied edge-containing count is a subset of the total.

</details>

<details>
<summary>Worked solution</summary>

A designated-edge restriction uses a complementary tree family.

1. The total number of trees is 125.
2. Exactly fifty contain the specified edge by the supplied formula.
3. The remaining seventy-five avoid it.

</details>
