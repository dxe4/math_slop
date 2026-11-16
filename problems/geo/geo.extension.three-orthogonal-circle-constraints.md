# Find a circle orthogonal to three given circles

*Hard · [Geometry and trigonometry problems](index.md)*

Find the center and squared radius of a circle orthogonal to all three circles $x^2+y^2-4x=0$, $x^2+y^2-4y=0$, and $x^2+y^2+2x+2y-24=0$. Orthogonal means their tangents are perpendicular at each intersection. Enter $[h,k,\rho^2]$ and explain existence.

```answer
{"answer":{"kind":"vector","expected":["3","3","6"],"checker_scope":"The exact requested finite result only; a correct entry does not certify a geometric argument or award reviewed evidence."}}
```

<details>
<summary>Hint 1</summary>

For orthogonal circles, the squared center distance is the sum of squared radii.

</details>

<details>
<summary>Hint 2</summary>

The new squared radius must equal the power of its center with respect to every given circle. Subtract the power equations.

</details>

<details>
<summary>Worked solution</summary>

Locate a positive-power radical center.

1. At an orthogonal intersection the two radius lines are perpendicular, so Pythagoras gives $d_i^2=\rho^2+r_i^2$. Equivalently the power of the unknown center in each given circle is $\rho^2$.
2. Equality of the first two powers gives $h=k$. Equality of the first and third gives $6h+2k-24=0$, so $h=k=3$.
3. The common power is $3^2+3^2-4\cdot3=6$, giving $\rho^2=6>0$.
4. The original centers and squared radii are $(2,0),4$; $(0,2),4$; and $(-1,-1),26$. Their squared distances from $(3,3)$ are $10,10,32$, exactly $6+r_i^2$.
5. For positive radii, $d^2=\rho^2+r_i^2$ places $d$ strictly between $|\rho-r_i|$ and $\rho+r_i$, so each pair really intersects in two points. The radius triangles there are right, proving the requested orthogonality.

</details>
