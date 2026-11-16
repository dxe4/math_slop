# Prove the least-perimeter inscribed triangle

*Hard · [Original olympiad-style problems](index.md)*

In a fixed acute triangle $ABC$, choose $X\in BC$, $Y\in CA$, $Z\in AB$. Prove that $XY+YZ+ZX$ is minimized by the three altitude feet. Boundary points of the side segments are allowed. Establish the equality case.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

For fixed $X$, reflect it in $AC$ and $AB$, obtaining $X_1,X_2$. The broken path $X_1YZ X_2$ has the same length as the chosen perimeter.

</details>

<details>
<summary>Hint 2</summary>

Show $X_1X_2=2AX\sin A$, then minimize $AX$ over $BC$. Verify that the orthic path becomes a straight segment after unfolding.

</details>

<details>
<summary>Model proof</summary>

Two reflections give a global lower bound depending only on the distance to one vertex.

1. Reflections fix $Y$ and $Z$ on their respective lines, so $XY+YZ+ZX=X_1Y+YZ+ZX_2\ge X_1X_2$. Since $AX_1=AX_2=AX$ and the oriented reflection angle is $2A$, the chord length is $2AX\sin A$.
2. Let $D$ be the foot from $A$ to $BC$. Acuteness puts $D$ in the side segment. Pythagoras gives $AX\ge AD$, with equality only when $X=D$. Every candidate perimeter is therefore at least $2AD\sin A$.
3. Let $E,F$ be the other altitude feet. The right-angle circles give the equal incidence and reflection angles at $E,F$; consequently, after reflecting the first and last orthic edges, the path $D_1,E,F,D_2$ lies on one line in that order. One can also compute $DE=c\cos C$, $DF=b\cos B$ and $EF=a\cos A$ to obtain their sum $2AD\sin A$. Thus the lower bound is attained.
4. Equality in the two inequalities forces $X=D$ and the unfolded path to be a straight segment with $Y,Z$ on it. Its unique intersections with $AC,AB$ are $E,F$. Hence the orthic triple is the unique minimizer, including among boundary candidates.

**Self-assessment rubric**

- Preserve the three lengths under the two reflections and invoke the straight-line bound.
- Derive the chord factor and minimize AX uniquely at its altitude foot.
- Check the orthic triple attains the bound by reflection angles or the explicit length identity.
- Identify equality in both bounds and exclude other boundary choices.

</details>
