# Compare two nested projections

*Hard · [Linear algebra problems](index.md)*

Let $P$ and $Q$ be Euclidean orthogonal projections in $\mathbb R^3$ onto $U=\{(x,y,z):x+y+z=0\}$ and $V=\operatorname{span}\{(1,-1,0)\}$ respectively. Find $\|P-Q\|_F^2$, where $\|M\|_F^2=\sum_{i,j}M_{ij}^2$.

```answer
{"answer":{"kind":"integer","expected":1,"checker_scope":"Exact stated finite-dimensional answer only; optional personal reasoning is not graded."}}
```

<details>
<summary>Hint 1</summary>

The line lies inside the plane. Find the direction in that plane perpendicular to the line.

</details>

<details>
<summary>Hint 2</summary>

Resolve an arbitrary vector into the line, the remaining plane direction, and the plane normal to understand the difference of projections.

</details>

<details>
<summary>Worked solution</summary>

The difference of nested orthogonal projections is the projection onto the leftover direction.

1. The vector $w=(1,1,-2)$ belongs to $U$ and is perpendicular to $(1,-1,0)$. Thus $U=V\mathbin{\oplus^\perp}\operatorname{span}\{w\}$.
2. Consequently $P-Q$ is the orthogonal projection onto the line spanned by $w$.
3. Since $w^Tw=6$, its matrix is $ww^T/6$.
4. The sum of the squared entries of $ww^T$ is $\sum_{i,j}w_i^2w_j^2=(\sum_iw_i^2)^2=36$.
5. Dividing by $6^2$ gives $\|P-Q\|_F^2=1$.

</details>
