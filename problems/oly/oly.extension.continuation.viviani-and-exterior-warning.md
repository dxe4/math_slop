# An equal-distance sum and its precise domain

*Medium · [Original olympiad-style problems](index.md)*

An equilateral triangle has altitude $h>0$. Prove that the sum of the perpendicular distances from a point $P$ in the closed triangle to the three side lines is $h$. Show, by an explicit exterior point, that the same unsigned-distance assertion need not hold outside the triangle.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

Add the areas of $PAB,PBC,PCA$, using their common base length.

</details>

<details>
<summary>Hint 2</summary>

For an exterior point, use a point on an altitude beyond the opposite vertex and compute signed side distances first.

</details>

<details>
<summary>Model proof</summary>

Unsigned areas add inside; signed areas explain why the location hypothesis matters.

1. Let the side length be $s$. For $P$ in the closed triangle, its three nonnegative subtriangle areas add to $sh/2$. They also equal $s(d_1+d_2+d_3)/2$, so their distance sum is $h$, including boundary points by the same area decomposition.
2. For a counterexample, put the base on $y=0$, its midpoint at the origin and the opposite vertex at $(0,h)$. Take $P=(0,2h)$. Its distance to the base is $2h$.
3. The two other side lines meet the altitude at angle $30^\circ$, so the distance from $P$ to either line is $h\sin30^\circ=h/2$. The unsigned sum is $3h$, not $h$. The two latter signed distances are negative, preserving the signed area identity.

**Self-assessment rubric**

- Derive the interior identity by three actual nonnegative subtriangle areas.
- Retain the identity when one or two distances vanish.
- Specify the point beyond the vertex and compute the sum 3h.

</details>
