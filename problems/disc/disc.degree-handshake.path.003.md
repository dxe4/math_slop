# Recover the sixth degree

*Medium · [Discrete mathematics](index.md)*

A simple undirected graph has six vertices and seven edges. Five degrees are $1,2,3,3,2$. Find the sixth using total degree = twice the edge count.

```answer
{"answer":{"kind":"integer","expected":3,"checker_scope":"Checks only this authored recover-missing-degree task. Does not certify unrestricted proof validity, general construction ability or full mastery of degrees and the degree-sum identity."}}
```

<details>
<summary>Hint 1</summary>

Total degree is fourteen.

</details>

<details>
<summary>Hint 2</summary>

Subtract the known degree sum.

</details>

<details>
<summary>Worked solution</summary>

Count local edge incidences and use the total-degree identity for finite simple undirected graphs.

1. The known sum is $1+2+3+3+2=11$.
2. The missing degree is $14-11=3$.

</details>
