# Find a mixed weighted cover and an edge-packing lower bound

*Hard · [Computational arithmetic problems](index.md)*

A bipartite graph has left vertices $a,b,c$ of weights $2,6,2$ and right vertices $x,y,z$ of weights $6,2,2$. Its edges are $ax,ay,by,bz,cz,cx$. A vertex cover must meet every edge, and its cost is the sum of its vertex weights. Find the minimum cover cost.

```answer
{"answer":{"kind":"integer","expected":"8","checker_scope":"Only the requested exact finite algorithmic result is checked. No learner program is executed and no unrestricted written proof is automatically certified. This original draft is ineligible for checkpoint evidence pending independent human review."}}
```

<details>
<summary>Hint 1</summary>

The cheapest cover need not be an entire side of the bipartition.

</details>

<details>
<summary>Hint 2</summary>

For a lower bound, assign nonnegative weights to edges so each vertex sees total edge weight at most its own cost.

</details>

<details>
<summary>Worked solution</summary>

A weighted cover and a feasible edge-packing certificate meet at the same value.

1. The set $\{a,c,y,z\}$ covers all six edges and has total weight $2+2+2+2=8$.
2. Give edges $ax,by,bz,cx$ weight $2$ each and give the other edges weight zero.
3. The incident totals at $a,b,c,x,y,z$ are $2,4,2,4,2,2$, each no larger than its vertex cost. Their total edge weight is $8$.
4. Every cover must pay at least that edge total, because each weighted edge needs an endpoint and no chosen vertex can pay more edge weight than its cost. This proves the lower bound $8$, attained by the stated mixed cover.

</details>
