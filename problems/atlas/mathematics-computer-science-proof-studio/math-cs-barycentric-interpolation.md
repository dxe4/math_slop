# Barycentric coordinates and a graphics boundary

*Difficulty 3 of 5 · [Mathematics for computer science proof and counterexample studio](index.md) · exercise 11 of 15*

Triangle vertices carry scalar values 2,5,11. At barycentric coordinates (1/2,1/3,1/6), compute the interpolated value and verify the point lies in the triangle. Explain why ordinary screen-space interpolation may be wrong for perspective-varying attributes.

<details>
<summary>Hint 1</summary>

Weights must be nonnegative and sum to one

</details>

<details>
<summary>Hint 2</summary>

Take the weighted value sum

</details>

<details>
<summary>Hint 3</summary>

Perspective division changes linearity

</details>

<details>
<summary>Worked solution</summary>

The weights are nonnegative and sum $1/2+1/3+1/6=1$, so they represent a point in the closed triangle. The interpolated scalar is $(1/2)2+(1/3)5+(1/6)11=1+5/3+11/6=9/2=4.5$. This affine interpolation is correct in the coordinate space where barycentric combinations represent the attribute relation. After perspective projection, division by depth means many world or texture attributes are not linear in screen coordinates. Perspective-correct interpolation weights attribute divided by depth and reciprocal depth before reconstructing the value.

**Answer.** The point is inside and its affine value is 4.5; perspective division can require depth-correct rather than naive screen-linear interpolation.

</details>

*Tags: computer graphics, barycentric coordinates, interpolation, perspective*
