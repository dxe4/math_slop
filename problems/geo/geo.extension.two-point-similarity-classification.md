# Count similarities realizing two point images

*Hard · [Geometry and trigonometry problems](index.md)*

For distinct plane points $A,B$ and distinct plane points $C,D$, prove that exactly two similarities send $A$ to $C$ and $B$ to $D$: one preserves orientation and one reverses it. A similarity here is a bijection multiplying all distances by the same positive factor.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only. No automatic verdict, graded evidence or checkpoint credit is awarded."}}
```

<details>
<summary>Hint 1</summary>

The scale must be $CD/AB$. Construct one map by scaling, rotating and translating.

</details>

<details>
<summary>Hint 2</summary>

After normalization, analyze a distance-preserving map fixing $(0,0)$ and $(1,0)$; its image of $(0,1)$ has only two possibilities.

</details>

<details>
<summary>Model proof</summary>

Normalize the anchors and use three-point rigidity.

1. The distance multiplier is forced to be $\lambda=CD/AB>0$. Scaling by $\lambda$, rotating the direction $AB$ onto $CD$ and translating the first endpoint gives one orientation-preserving similarity.
2. Compose that map with reflection in line $CD$ to obtain an orientation-reversing similarity with the same two images.
3. To prove no others exist, normalize by the constructed direct similarity and use coordinates with the two fixed source anchors at $(0,0),(1,0)$. An isometry fixing them sends $T=(0,1)$ to a point $X$ with $|X|=1$ and $|X-(1,0)|=\sqrt2$. Subtracting the squared equations gives $X_x=0$, hence $X=(0,1)$ or $(0,-1)$.
4. In the first case the map fixes three noncollinear points. Comparing squared distances to those anchors shows every point is fixed: the displacement between a point and its image is orthogonal to two independent anchor differences.
5. In the second case compose with reflection in the anchor line to reduce to the first case. Thus the normalized map is either identity or that reflection, giving exactly the two asserted similarities with opposite orientations.

**Self-assessment rubric**

- Derive the unique positive distance multiplier.
- Construct both orientation types with the prescribed images.
- Prove only two third-anchor images are possible.
- Use noncollinear-anchor rigidity to exclude every other map.

</details>
