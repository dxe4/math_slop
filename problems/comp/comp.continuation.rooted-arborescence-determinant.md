# Count directed root-reaching trees with a cyclic minor

*Hard · [Computational arithmetic problems](index.md)*

Let $v_1,v_2,v_3,v_4$ form a $4$-cycle. Include both directions of every cycle edge, and one edge $v_i\to r$ from each $v_i$ to a root $r$. How many spanning directed trees have exactly one outgoing edge at every $v_i$ and every directed path eventually reaching $r$? You may use the directed matrix-tree theorem: this count is the root-deleted outdegree-Laplacian determinant.

```answer
{"answer":{"kind":"integer","expected":"45","checker_scope":"Only the requested exact finite algorithmic result is checked. No learner program is executed and no unrestricted written proof is automatically certified. This original draft is ineligible for checkpoint evidence pending independent human review."}}
```

<details>
<summary>Hint 1</summary>

Each nonroot has three possible outgoing edges, but arbitrary independent choices can create cycles.

</details>

<details>
<summary>Hint 2</summary>

Use the constant, alternating and two opposite-coordinate difference vectors to diagonalise the $4\times4$ minor.

</details>

<details>
<summary>Worked solution</summary>

The directed matrix-tree minor removes cycle-producing choices without an invalid independent-product count.

1. The root-deleted matrix is $L=\begin{pmatrix}3&-1&0&-1\\-1&3&-1&0\\0&-1&3&-1\\-1&0&-1&3\end{pmatrix}$. Its diagonal includes the edge to $r$.
2. The constant vector has eigenvalue $1$, and the alternating vector $(1,-1,1,-1)^T$ has eigenvalue $5$.
3. The independent vectors $(1,0,-1,0)^T$ and $(0,1,0,-1)^T$ both have eigenvalue $3$. These four vectors span the space.
4. The determinant and required directed-tree count are $1\cdot5\cdot3\cdot3=45$, with no additional orientation factor.

</details>
