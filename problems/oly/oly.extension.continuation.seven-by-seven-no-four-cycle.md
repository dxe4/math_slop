# Find and attain a sharp incidence edge bound

*Hard · [Original olympiad-style problems](index.md)*

A simple bipartite graph has $7$ vertices in each class and no four-cycle. Find its maximum number of edges, with an explicit attaining graph.

```answer
{"answer":{"kind":"integer","expected":"21","checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

Count pairs of left vertices through their common right neighbor.

</details>

<details>
<summary>Hint 2</summary>

For construction, label both classes modulo seven and join a right label i to left labels i,i+1,i+3.

</details>

<details>
<summary>Worked solution</summary>

Combine a common-neighbor count with a cyclic difference construction.

1. If right degrees are $d_i$ and edge count m, no left pair has two common right neighbors. Thus $\sum\binom{d_i}2\le\binom72=21$.
2. Cauchy gives $\sum d_i^2\ge m^2/7$, so $m^2/7-m\le42$, or $(m-21)(m+14)\le0$. Hence m is at most twenty-one.
3. In the proposed construction every right degree is three, so there are twenty-one edges.
4. The ordered nonzero differences of $\{0,1,3\}$ modulo seven are exactly $1,2,3,4,5,6$. Consequently two left labels can occur together in at most one translated neighbor triple, excluding every four-cycle.
5. The construction attains the bound and proves the exact maximum.

</details>
