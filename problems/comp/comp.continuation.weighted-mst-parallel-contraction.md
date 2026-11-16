# Count minimum trees after retaining parallel choices under contraction

*Hard · [Computational arithmetic problems](index.md)*

An undirected graph on $a,b,c,d,e$ has weight-$1$ edges $ab,cd$ and weight-$2$ edges $ac,ad,bc,ae,be,ce$, with no others. Return $[w,N,N_{ac}]$, where $w$ is minimum spanning-tree weight, $N$ the number of minimum spanning trees, and $N_{ac}$ the number containing edge $ac$.

```answer
{"answer":{"kind":"vector","expected":["6","11","3"],"checker_scope":"Only the requested exact finite algorithmic result is checked. No learner program is executed and no unrestricted written proof is automatically certified. This original draft is ineligible for checkpoint evidence pending independent human review."}}
```

<details>
<summary>Hint 1</summary>

Use the cheap components before analysing the equal-weight connecting choices.

</details>

<details>
<summary>Hint 2</summary>

When contracting components, retain different original cross edges as parallel alternatives rather than merging them into one.

</details>

<details>
<summary>Worked solution</summary>

Kruskal layers turn the enumeration into a three-vertex multigraph tree count.

1. A minimum tree uses both weight-$1$ edges and two weight-$2$ edges, for weight $6$; omitting either cheap edge requires at least three weight-$2$ edges and a larger total.
2. Contract $ab$ to $P$ and $cd$ to $Q$, leaving $R=e$. There are three $P$-$Q$ edges, two $P$-$R$ edges and one $Q$-$R$ edge.
3. A three-vertex tree chooses two of those connection types, giving $3\cdot2+3\cdot1+2\cdot1=11$ minimum trees.
4. With $ac$ fixed as its $P$-$Q$ edge, the remaining link to $R$ has $2+1=3$ choices. The result is $[6,11,3]$.

</details>
