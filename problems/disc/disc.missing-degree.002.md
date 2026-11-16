# Recover a missing degree from six edges

*Medium · [Discrete mathematics](index.md)*

An undirected simple graph has five vertices and six edges. Four vertex degrees are $3,2,3,2$. Find the fifth degree using sum of degrees = $2$ × number of edges.

```answer
{"answer":{"kind":"integer","expected":2,"checker_scope":"Checks one missing-entry calculation with a supplied finite graph identity; no general graphical-sequence decision is assessed."}}
```

<details>
<summary>Hint 1</summary>

A degree sum counts both endpoints of every edge.

</details>

<details>
<summary>Hint 2</summary>

Subtract the four known degrees from twelve.

</details>

<details>
<summary>Worked solution</summary>

The edge count fixes the total degree even when the particular edges are not given.

1. The six edges give total degree $2\cdot 6=12$.
2. The known degrees add to 10, so the remaining degree is $12-10=2$.

</details>
