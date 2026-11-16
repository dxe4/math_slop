# Recover a missing degree from eight edges

*Medium · [Discrete mathematics](index.md)*

An undirected simple graph has six vertices and eight edges. The degrees of five vertices are $2,3,1,4,2$. What is the degree of the remaining vertex? Use the identity that the sum of all degrees equals twice the number of edges.

```answer
{"answer":{"kind":"integer","expected":4,"checker_scope":"Checks arithmetic application of a supplied degree-sum identity; does not certify a proof of that identity or characterize arbitrary degree sequences."}}
```

<details>
<summary>Hint 1</summary>

Eight edges contribute sixteen endpoint incidences in total.

</details>

<details>
<summary>Hint 2</summary>

Add the five known degrees, then subtract their sum from the total.

</details>

<details>
<summary>Worked solution</summary>

Each undirected edge contributes one to the degree at each of its two endpoints.

1. The degree sum must be $2\cdot 8=16$.
2. The supplied degrees sum to $2+3+1+4+2=12$, leaving $16-12=4$ for the remaining vertex.

</details>
