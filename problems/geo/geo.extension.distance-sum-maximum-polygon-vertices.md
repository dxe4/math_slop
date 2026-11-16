# Locate all maxima of a weighted distance sum on a polygon

*Hard · [Geometry and trigonometry problems](index.md)*

Let $K$ be a convex polygon with nonempty interior, let $F_1,\ldots,F_m$ be plane points not all on one line, and let $w_i>0$. Prove that every maximizer on $K$ of $f(P)=\sum_iw_i|P-F_i|$ is a polygon vertex. Explain why several vertices may still maximize.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only. No automatic verdict, graded evidence or checkpoint credit is awarded."}}
```

<details>
<summary>Hint 1</summary>

Triangle inequality proves convexity of each distance function.

</details>

<details>
<summary>Hint 2</summary>

For two distinct points, equality along their segment in every distance term would require every focus on their common line.

</details>

<details>
<summary>Model proof</summary>

Prove strict convexity, then rule out nonvertices by a segment decomposition.

1. For distinct $P,Q$ and $0<t<1$, triangle inequality gives $|(1-t)(P-F_i)+t(Q-F_i)|\le(1-t)|P-F_i|+t|Q-F_i|$.
2. Equality for a given focus requires the two vectors to be nonnegative scalar multiples, with zero vectors allowed. In particular the focus must lie on line $PQ$. Since not all foci are collinear, at least one focus lies outside that line and gives strict inequality.
3. All weights are positive, so summing gives $f((1-t)P+tQ)<(1-t)f(P)+tf(Q)$. Thus $f$ is strictly convex.
4. Continuity and compactness of the polygon give a maximum. Any nonvertex point is a nontrivial convex combination of two distinct polygon points. Strict convexity makes its value smaller than their weighted average, so it cannot maximize.
5. Strict convexity does not force a unique maximum; it controls interior segment values. Symmetric polygons and symmetric focus arrangements may give the same maximal value at several vertices.

**Self-assessment rubric**

- Apply triangle inequality to each focus distance.
- Use a focus outside every proposed segment line and positive weights.
- Justify attainment and exclude every nonvertex point.
- Explain why strict convexity permits multiple vertex maxima.

</details>
