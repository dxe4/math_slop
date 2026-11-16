# Prove the sharp planar enclosing-radius bound

*Hard · [Geometry and trigonometry problems](index.md)*

A nonempty finite set of plane points has diameter $D>0$. Prove it lies in a closed disk of radius at most $D/\sqrt3$, and show the constant cannot be decreased.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only. No automatic verdict, graded evidence or checkpoint credit is awarded."}}
```

<details>
<summary>Hint 1</summary>

A smallest enclosing disk exists. Show its center belongs to the convex hull of the points on its boundary, or it could be moved to improve the radius.

</details>

<details>
<summary>Hint 2</summary>

Reduce that boundary convex combination to two or three points. For three points around the center, one central angular gap is at least $120^\circ$.

</details>

<details>
<summary>Model proof</summary>

Reduce a minimum enclosing disk to a small supporting configuration.

1. The maximum distance to the finite set is continuous and tends to infinity as the center tends to infinity, so a minimum enclosing disk exists; call its center $O$ and radius $R>0$.
2. Let $B$ be its nonempty set of boundary points. If $O$ were outside $\operatorname{conv}(B)$, take a nearest point $Q$ of that compact convex hull. With $O$ as origin, the nearest-point inequality gives $Q\cdot X\ge|Q|^2>0$ for every $X\in B$. Moving the center a sufficiently small distance toward $Q$ strictly lowers every boundary distance. The finite set of originally interior points has a positive margin, so a small move keeps all their distances below the old radius as well. This contradicts minimality.
3. Hence $O$ is a convex combination of boundary points. Choose such a representation with the minimum number of positive coefficients; the planar coefficient-reduction argument gives at most three. A single point is impossible for positive $R$. With two points, equal distances from $O$ force them to be antipodal, giving $2R\le D$. Three collinear points could be reduced to two, so a minimal three-point support is noncollinear.
4. If three remain and one coefficient is zero, reduce to the preceding case. Otherwise $O$ lies strictly inside their triangle. The three angular gaps around $O$ are all less than $\pi$ and sum to $2\pi$, so one lies in $[2\pi/3,\pi)$.
5. The chord across that gap has length $2R\sin(\theta/2)\ge\sqrt3R$, hence $D\ge\sqrt3R$. The two-point case gives the stronger $R\le D/2$.
6. An equilateral triangle of side $D$ has circumradius $D/\sqrt3$ and no smaller enclosing disk: its three equal vertex weights give a mean squared distance $|X-O|^2+D^2/3$ from any center $X$. At least one vertex distance is therefore at least $D/\sqrt3$. This proves sharpness.

**Self-assessment rubric**

- Justify existence of a minimum enclosing disk for a finite set.
- Prove its center is in the boundary-point convex hull using a finite positive margin.
- Reduce to two or three boundary points and treat both cases.
- Obtain the 120-degree chord bound with the correct gap domain.
- Prove an equilateral configuration requires the claimed radius.

</details>
