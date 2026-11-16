# Connected graph component recurrence

*Hard · [Original Putnam-style training](index.md)*

Let $C_n$ count connected simple labelled graphs on $[n]$. Prove $C_n=2^{\binom n2}-\sum_{k=1}^{n-1}\binom{n-1}{k-1}C_k2^{\binom{n-k}{2}}$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Classify each graph by the component containing vertex $1$.

</details>

<details>
<summary>Hint 2</summary>

Choose that component’s vertex set, its connected edges, and an arbitrary graph on the complement.

</details>

<details>
<summary>Model proof</summary>

Summing the disjoint cases $k=1,\ldots,n$ counts all graphs. The $k=n$ term is $C_n$; isolating it gives the recurrence.

1. Every simple graph on $[n]$ is determined by choosing each of its $\binom n2$ possible edges, so the total is $2^{\binom n2}$.
2. If the component of vertex $1$ has size $k$, choose its other vertices in $\binom{n-1}{k-1}$ ways, choose one of $C_k$ connected graphs on that set, and choose any of $2^{\binom{n-k}{2}}$ graphs on the complement; there are no cross edges by component definition.
3. Summing the disjoint cases $k=1,\ldots,n$ counts all graphs. The $k=n$ term is $C_n$; isolating it gives the recurrence.

**Self-assessment rubric**

- Count all labelled simple graphs on n vertices.
- Count graphs by size and connected structure of vertex-one component.
- Include arbitrary complement graph and isolate the k=n term.

</details>
