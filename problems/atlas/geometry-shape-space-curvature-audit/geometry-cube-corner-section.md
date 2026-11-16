# Measure a cube corner cross-section

*Difficulty 4 of 5 · [Geometry from proof to curvature audit studio](index.md) · exercise 7 of 12*

In the unit cube $0\le x,y,z\le 1$, the plane $x+y+z=1$ cuts off the origin corner. Identify the cross-section, compute its area, and find the volume of the cut-off solid.

<details>
<summary>Hint 1</summary>

The plane meets the three coordinate edges at unit points

</details>

<details>
<summary>Hint 2</summary>

Every pair of those points is distance $\sqrt{2}$

</details>

<details>
<summary>Hint 3</summary>

The cut-off solid is a tetrahedron with three perpendicular unit edges

</details>

<details>
<summary>Worked solution</summary>

The plane meets the coordinate edges at $A=(1,0,0)$, $B=(0,1,0)$, and $C=(0,0,1)$. These are the only intersections with edges adjacent to the cut-off corner, and each pair has distance $\sqrt{2}$, so the cross-section is an equilateral triangle. Its area is $(\sqrt{3}/4)(\sqrt{2})^2=\sqrt{3}/2$. The cut-off solid is tetrahedron OABC. Its three edge vectors from O are the coordinate unit vectors, whose determinant magnitude is 1, so volume is 1/6. The cross-section area alone would not determine volume without its position or a family of sections.

**Answer.** The section is an equilateral triangle of side $\sqrt{2}$ and area $\sqrt{3}/2$; the corner tetrahedron has volume 1/6.

</details>

*Tags: solid geometry, cross-section, polyhedron, volume*
