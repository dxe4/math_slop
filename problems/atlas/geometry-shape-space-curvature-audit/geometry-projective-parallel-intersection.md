# Move a parallel intersection to infinity

*Difficulty 4 of 5 · [Geometry from proof to curvature audit studio](index.md) · exercise 11 of 12*

Represent affine lines $y=0$ and $y=1$ as homogeneous projective lines, compute their intersection, and explain what is preserved and lost compared with Euclidean geometry.

<details>
<summary>Hint 1</summary>

Use line coordinates [a:b:c] for $ax+by+cw=0$

</details>

<details>
<summary>Hint 2</summary>

Intersect by cross product

</details>

<details>
<summary>Hint 3</summary>

A point with $w=0$ is an ideal direction

</details>

<details>
<summary>Worked solution</summary>

The lines are $l=[0:1:0]$ and $m=[0:1:-1]$. Their cross product is [-1:0:0], equivalent up to nonzero scale to [1:0:0]. Because $w=0$, this is the ideal point for the horizontal direction, so projective geometry records a common intersection rather than declaring parallel lines exceptional. Projective transformations preserve incidence, collinearity, concurrency, cross-ratio, and conics. They do not generally preserve Euclidean distance, angle, midpoint, area, or the chosen affine notion of parallelism.

**Answer.** Their intersection is [1:0:0], the horizontal ideal point; incidence survives while Euclidean metric and affine parallel structure generally do not.

</details>

*Tags: projective geometry, homogeneous coordinates, parallel lines, vanishing point*
