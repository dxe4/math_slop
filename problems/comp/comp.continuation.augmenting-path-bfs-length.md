# Follow an alternating chain through a pre-existing matching

*Medium · [Computational arithmetic problems](index.md)*

Let a bipartite graph have left vertices $a,b,c,d$, right vertices $1,2,3,4$, and neighbor sets $N(a)=\{1,2\}$, $N(b)=\{1\}$, $N(c)=\{2,3\}$, $N(d)=\{3,4\}$. Starting from matching $\{a1,c2,d3\}$, return $[\ell,m]$, where $\ell$ is the shortest augmenting-path length in edges and $m$ the matching size after augmenting once.

```answer
{"answer":{"kind":"vector","expected":["7","4"],"checker_scope":"Only the requested exact finite algorithmic result is checked. No learner program is executed and no unrestricted written proof is automatically certified. This original draft is ineligible for checkpoint evidence pending independent human review."}}
```

<details>
<summary>Hint 1</summary>

Start from the unmatched left vertex and alternate unmatched and matched edges.

</details>

<details>
<summary>Hint 2</summary>

Each reached right vertex before $4$ is already matched, so the search must continue through its matched partner.

</details>

<details>
<summary>Worked solution</summary>

An alternating BFS exposes a forced chain rather than an immediately available free neighbor.

1. The only unmatched left vertex is $b$, which must first use edge $b1$. Since $1$ is matched to $a$, the path continues to $a$.
2. The remaining alternating choices force $a2$, then matched $2c$, then $c3$, matched $3d$, and finally $d4$.
3. This path has seven edges and reaches a free right vertex. No shorter augmenting path exists because every preceding move is forced.
4. Flipping its edges increases the matching size from $3$ to $4$, giving $[7,4]$.

</details>
