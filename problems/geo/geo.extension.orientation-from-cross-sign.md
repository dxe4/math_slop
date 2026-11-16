# Read the orientation of a turn

*Easy · [Geometry and trigonometry problems](index.md)*

From a common origin, let $u=(2,0)$ and $v=(1,1)$. Use the sign of $u_xv_y-u_yv_x$: positive means a counterclockwise turn of less than $180^\circ$. Which applies? Options: left: counterclockwise; right: clockwise; straight: collinear; zero: one vector is zero. Enter left, right, straight or zero.

**Options**

1. Counterclockwise
2. Clockwise
3. Collinear
4. One vector is zero

```answer
{"answer":{"kind":"multiple_choice","expected":"left","checker_scope":"The exact requested finite result only; a correct entry does not certify a geometric argument or award reviewed evidence."},"options":["left","right","straight","zero"]}
```

<details>
<summary>Hint 1</summary>

Compute the stated signed determinant.

</details>

<details>
<summary>Hint 2</summary>

Both vectors are nonzero and a positive determinant uses the supplied counterclockwise convention.

</details>

<details>
<summary>Worked solution</summary>

Use the supplied orientation sign convention.

1. The determinant is $2\cdot1-0\cdot1=2$.
2. It is positive, so the vectors are not collinear.
3. The specified orientation is counterclockwise, the left option.

</details>
