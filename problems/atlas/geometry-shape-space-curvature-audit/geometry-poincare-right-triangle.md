# Audit a Poincare-disk triangle

*Difficulty 5 of 5 · [Geometry from proof to curvature audit studio](index.md) · exercise 10 of 12*

In the curvature -1 Poincare disk take $O=(0,0)$, $A=(1/2,0)$, $B=(0,1/2)$. Find the Euclidean center and radius of the geodesic circle through A,B orthogonal to the boundary, verify orthogonality, find d(O,A), and express the two equal nonright angles and area.

<details>
<summary>Hint 1</summary>

For radius $r$, $q=(1+r^2)/(2r)$ and $\rho^2=2q^2-1$

</details>

<details>
<summary>Hint 2</summary>

Radial distance is $2\operatorname{artanh}r$

</details>

<details>
<summary>Hint 3</summary>

The cosine of each base angle is $q/\sqrt{q^2+(q-r)^2}$

</details>

<details>
<summary>Worked solution</summary>

With $r=1/2$, $q=(1+1/4)/1=5/4$, so the circle center is $(5/4,5/4)$ and $\rho^2=2(25/16)-1=17/8$. Its center norm squared is $25/8$, and $25/8-17/8=1$, verifying orthogonality to the unit boundary. Radial hyperbolic distance is $d(O,A)=2\operatorname{artanh}(1/2)=\log3$. Each base angle is $\alpha=\arccos[(5/4)/\sqrt{17/8}]\approx30.96^\circ$. The angle at $O$ is $90^\circ$, so normalized area/defect is $\pi-(\pi/2+2\alpha)\approx0.490$. Pixel lengths do not enter any calculation.

**Answer.** Center $(5/4,5/4)$, $\rho^2=17/8$, orthogonality difference 1, $d(O,A)=\log3$, base angles $\arccos[(5/4)/\sqrt{17/8}]$, and area $\pi/2-2\alpha\approx0.490$.

</details>

*Tags: hyperbolic geometry, Poincare disk, geodesic, angle defect*
