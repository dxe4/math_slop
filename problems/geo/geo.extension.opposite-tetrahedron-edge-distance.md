# Find the shortest distance between opposite tetrahedron edges

*Hard · [Geometry and trigonometry problems](index.md)*

A regular tetrahedron has edge length $a>0$. Let $d$ be the minimum distance between points on a pair of opposite closed edges. Write $d=q\sqrt2\,a$ and find the rational number $q$. Explain why the minimizing points lie on the segments.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":2},"checker_scope":"The exact requested finite result only; a correct entry does not certify a geometric argument or award reviewed evidence."}}
```

<details>
<summary>Hint 1</summary>

Model the four vertices by $(1,1,1),(1,-1,-1),(-1,1,-1),(-1,-1,1)$.

</details>

<details>
<summary>Hint 2</summary>

Two opposite edges have constant first coordinates $1$ and $-1$; use that coordinate difference as a distance lower bound.

</details>

<details>
<summary>Worked solution</summary>

Choose symmetric coordinates that expose a common perpendicular.

1. The four displayed vertices have all pairwise distances $2\sqrt2$, so they form a regular tetrahedron of that edge length.
2. Choose opposite edges $AB$ and $CD$ with first coordinates $1$ and $-1$. Every pair of points on them is at distance at least $2$ because their first coordinates differ by $2$.
3. Their midpoints are $(1,0,0)$ and $(-1,0,0)$, both inside their edges, and their distance is exactly $2$. This proves the lower bound is attained.
4. Scaling from model edge $2\sqrt2$ to edge $a$ gives $d=2a/(2\sqrt2)=a/\sqrt2=(1/2)\sqrt2\,a$. Thus $q=1/2$.

</details>
