# Characterize polygon vertices by unique support

*Hard · [Geometry and trigonometry problems](index.md)*

For a compact convex polygon $K$ with nonempty interior, prove that a point $V\in K$ is a vertex if and only if there is a nonzero vector $n$ such that $n\cdot V>n\cdot X$ for every $X\in K\setminus\{V\}$. Give a construction of $n$ from the other vertices.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only. No automatic verdict, graded evidence or checkpoint credit is awarded."}}
```

<details>
<summary>Hint 1</summary>

A vertex is outside the convex hull of the other finitely many vertices.

</details>

<details>
<summary>Hint 2</summary>

Choose a nearest point $Q$ of that other-vertex hull to $V$ and use $n=V-Q$.

</details>

<details>
<summary>Model proof</summary>

Strictly separate a vertex from the convex hull of all other vertices.

1. If a linear functional uniquely maximizes at $V$ and $V$ were a nontrivial convex combination of two distinct points of $K$, linearity would force one of their functional values to be at least that at $V$, a contradiction. Thus $V$ is an extreme point, hence a polygon vertex.
2. Conversely let $V$ be a vertex, and let $L$ be the convex hull of all the other vertices. It is nonempty compact convex and does not contain $V$. Choose a nearest point $Q\in L$ and set $n=V-Q\ne0$.
3. For each $Y\in L$, nearest-point comparison along $Q+t(Y-Q)$ gives $n\cdot(Y-Q)\le0$. Hence $n\cdot Y\le n\cdot Q<n\cdot V$.
4. Every $X\in K\setminus\{V\}$ has a representation $X=\lambda V+(1-\lambda)Y$ with $Y\in L$ and $0\le\lambda<1$, obtained by grouping its vertex-combination coefficients.
5. Linearity then gives $n\cdot X<n\cdot V$, proving unique support over the whole polygon, including edge points arbitrarily near $V$.

**Self-assessment rubric**

- Exclude a nontrivial segment decomposition by linearity.
- Use the correct compact hull and prove the vertex lies outside it.
- Construct a strictly separating normal by the nearest-point inequality.
- Extend strict comparison from other vertices to every remaining polygon point.

</details>
