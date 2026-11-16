# Resolve competing weighted routes by ordered relaxation

*Medium · [Computational arithmetic problems](index.md)*

An undirected graph has vertices $s,a,b,c,t$ and weighted edges $sa:4$, $sb:1$, $ba:2$, $ac:1$, $bc:5$, $ct:3$, $at:7$, $bt:10$. Return the shortest-path distances from $s$ as $[d(a),d(b),d(c),d(t)]$.

```answer
{"answer":{"kind":"vector","expected":["3","1","4","7"],"checker_scope":"Only the requested exact finite algorithmic result is checked. No learner program is executed and no unrestricted written proof is automatically certified. This original draft is ineligible for checkpoint evidence pending independent human review."}}
```

<details>
<summary>Hint 1</summary>

After settling the smallest tentative distance, relax every edge from that vertex.

</details>

<details>
<summary>Hint 2</summary>

An initially direct route to $a$ is improved through $b$; propagate that change before settling $c$ and $t$.

</details>

<details>
<summary>Worked solution</summary>

Nonnegative-edge relaxation propagates route improvements in increasing distance order.

1. Initial tentative distances are $d(b)=1$, $d(a)=4$, and the others infinite.
2. Settling $b$ improves $a$ to $3$, proposes $c=6$ and $t=11$. Settling $a$ then improves $c$ to $4$ and $t$ to $10$.
3. Settling $c$ improves $t$ to $7$. No later edge can lower a settled nonnegative shortest distance.
4. The resulting vector is $[3,1,4,7]$, attained by routes through $b$, then $a$, then $c$ as appropriate.

</details>
