# Reject an early cycle before completing a minimum spanning tree

*Medium · [Computational arithmetic problems](index.md)*

An undirected graph on $a,b,c,d,e$ has edges $ab:2$, $ac:3$, $bc:1$, $bd:4$, $cd:5$, $ce:6$, $de:2$, $ad:9$, $be:8$. Find the minimum spanning-tree weight.

```answer
{"answer":{"kind":"integer","expected":"9","checker_scope":"Only the requested exact finite algorithmic result is checked. No learner program is executed and no unrestricted written proof is automatically certified. This original draft is ineligible for checkpoint evidence pending independent human review."}}
```

<details>
<summary>Hint 1</summary>

Process edges by increasing weight while keeping track of connected components.

</details>

<details>
<summary>Hint 2</summary>

The next small edge can close a cycle rather than join two components.

</details>

<details>
<summary>Worked solution</summary>

Kruskal contraction distinguishes useful cheap edges from a redundant local cycle.

1. Accept $bc$ of weight $1$, then $ab$ and $de$, each of weight $2$. The components are now $\{a,b,c\}$ and $\{d,e\}$.
2. The edge $ac$ of weight $3$ lies inside the first component and is rejected as a cycle edge.
3. The edge $bd$ of weight $4$ joins the two components and completes a spanning tree. Its weight is $1+2+2+4=9$.
4. Each accepted edge is a minimum edge crossing the current component cut, so the cut-exchange argument makes the constructed spanning tree minimum.

</details>
