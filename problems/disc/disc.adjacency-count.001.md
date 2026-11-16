# Count edges from a symmetric adjacency list

*Medium · [Discrete mathematics](index.md)*

The complete adjacency list of an undirected simple graph is $1$:$\{2,3\}$; $2$:$\{1,3,4\}$; $3$:$\{1,2\}$; $4$:$\{2\}$; $5$:{}. How many distinct edges does the graph have? Each undirected edge is listed at both endpoints.

```answer
{"answer":{"kind":"integer","expected":4,"checker_scope":"Checks the distinct edge count encoded by this complete symmetric adjacency list; no drawing reconstruction is assessed."}}
```

<details>
<summary>Hint 1</summary>

The entries $1$:$2$ and $2$:$1$ describe the same undirected edge.

</details>

<details>
<summary>Hint 2</summary>

List each edge only when its smaller endpoint is the row label.

</details>

<details>
<summary>Worked solution</summary>

A symmetric adjacency list records each loop-free undirected edge twice.

1. Taking each edge at its smaller endpoint yields $\{1,2\}, \{1,3\}, \{2,3\}, \{2,4\}$.
2. There are four distinct edges. Equivalently, the adjacency entries total $2+3+2+1+0=8$, twice the edge count.

</details>
