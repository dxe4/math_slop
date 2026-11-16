# A minimum number of rectangular flips

*Hard · [Original olympiad-style problems](index.md)*

A $4\times4$ zero-one board starts all zero. A move flips the four corners determined by two distinct rows and two distinct columns. The target has ones in columns $i$ and $i+1$ of row $i$, with column $5$ meaning column $1$, and zeros elsewhere. What is the minimum number of moves?

```answer
{"answer":{"kind":"integer","expected":"3","checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

View the target as an eight-edge cycle in the bipartite graph of row and column labels.

</details>

<details>
<summary>Hint 2</summary>

One move supplies a four-cycle. Two moves would need disjoint edge sets to leave eight ones, which cannot make one eight-cycle. Construct three moves using row one as an anchor.

</details>

<details>
<summary>Worked solution</summary>

The target cycle cannot be the disjoint union of two rectangle cycles, but three anchored rectangles produce it.

1. The target contains eight ones. A single move creates only four. If two moves produced it, their four-corner sets would have to be disjoint, because any common corners cancel and yield fewer than eight ones.
2. Two edge-disjoint rectangle cycles cannot form the target eight-cycle. Indeed every vertex in the target row-column graph has degree two. If the two four-cycles shared a row or column vertex their union would have degree four there; if they shared none their union would be disconnected. The target is connected and degree two throughout.
3. Three moves suffice: flip rows $1,2$ with columns $2,3$; then rows $1,3$ with columns $3,4$; then rows $1,4$ with columns $1,4$. Rows $2,3,4$ acquire their requested pairs, while row one has the xor of pairs $\{2,3\},\{3,4\},\{1,4\}$, namely $\{1,2\}$.
4. The lower bound and explicit sequence agree, so the minimum is $3$. Repeated moves or reordering cannot evade the two-move edge-count obstruction.

</details>
