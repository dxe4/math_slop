# Separate recurrent components from one-way connections

*Medium · [Computational arithmetic problems](index.md)*

A directed graph on $1,\ldots,7$ has edges $1\to2$, $2\to3$, $3\to1$, $3\to4$, $4\to5$, $5\to4$, $5\to6$, $6\to7$, $7\to6$, $2\to6$. Return its strongly connected component sizes in nonincreasing order.

```answer
{"answer":{"kind":"vector","expected":["3","2","2"],"checker_scope":"Only the requested exact finite algorithmic result is checked. No learner program is executed and no unrestricted written proof is automatically certified. This original draft is ineligible for checkpoint evidence pending independent human review."}}
```

<details>
<summary>Hint 1</summary>

Find mutual reachability cycles, then examine whether an edge leaving a cycle can be traversed back.

</details>

<details>
<summary>Hint 2</summary>

Contract each mutually reachable block and inspect the direction of the remaining graph.

</details>

<details>
<summary>Worked solution</summary>

The condensation DAG prevents a one-way reachability edge from merging two strongly connected blocks.

1. The cycles give mutually reachable sets $\{1,2,3\}$, $\{4,5\}$ and $\{6,7\}$.
2. Between these sets there are arrows from the first to the second and third, and from the second to the third.
3. No arrow path goes back from the third block or from the second to the first, so none of those blocks can merge.
4. The sizes are consequently $[3,2,2]$.

</details>
