# Evaluate a walk trace from a supplied adjacency spectrum

*Easy · [Computational arithmetic problems](index.md)*

A simple graph has adjacency eigenvalues $3,-1,-1,-1$. The total number of length-five closed walks is the sum of fifth powers of these eigenvalues. Find that count.

```answer
{"answer":{"kind":"integer","expected":"240","checker_scope":"Exact requested finite count using the supplied graph convention or theorem. No graph program or unrestricted proof is run or certified; this new skill does not expand an existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

Closed walks retain their starting vertices in this convention.

</details>

<details>
<summary>Hint 2</summary>

The three negative eigenvalues contribute negative fifth powers.

</details>

<details>
<summary>Worked solution</summary>

A spectral trace formula replaces an adjacency-matrix power calculation.

1. The eigenvalue three contributes 243.
2. The three other eigenvalues each contribute negative one.
3. Their sum is 240 closed walks, with starts and traversal directions distinguished as the trace convention requires.

</details>
