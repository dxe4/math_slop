# Decode a symmetric adjacency list

*Medium · [Discrete mathematics](index.md)*

An undirected simple graph has vertices A,B,C,D,E and adjacency lists $A:\{B,C\}$, $B:\{A,C,D\}$, $C:\{A,B\}$, $D:\{B\}$, $E:\varnothing$. How many edges does it have?

```answer
{"answer":{"kind":"integer","expected":"4","checker_scope":"Exact requested finite observation or declared representation only. The worked explanation is not automatically certified; no new checkpoint objective or eligibility is introduced."}}
```

<details>
<summary>Hint 1</summary>

Each undirected edge appears in two adjacency rows.

</details>

<details>
<summary>Hint 2</summary>

Either pair the repeated incidences or list each unordered endpoint pair once.

</details>

<details>
<summary>Worked solution</summary>

An edge count must distinguish adjacency incidences from distinct undirected edges.

1. The adjacency row sizes sum to $2+3+2+1+0=8$.
2. Every edge has two distinct endpoints and is listed at both, so divide by two.
3. There are $4$ edges: AB,AC,BC,BD.

</details>
