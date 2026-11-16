# Calculus III recitation: draw the domain, then decide the theorem

**Role:** guided work after multiple integration, paths, surfaces, Green, Gauss, and Stokes. Try each decision before reading the resolved calculation. The aim is to choose a method and defend its hypotheses, not only to practice antiderivatives.

## 1. An annular current

A current field is \(\mathbf V=(-y,x)\). A sensor traverses the boundary of \(1\leq x^2+y^2\leq4\), keeping the water region on its left. **Predict:** Will the inner boundary contribute with the same sign as the outer one? The induced outer circle has radius two and travels counterclockwise; the inner circle has radius one and travels clockwise.

At \(\mathbf c_r(t)=(r\cos t,r\sin t)\), \(\mathbf V(\mathbf c_r)\cdot\mathbf c_r'=r^2\). The outer integral is \(2\pi(2^2)=8\pi\). The inner integral is \(-2\pi(1^2)=-2\pi\). Sum: \(6\pi\). Independently, scalar curl is two and annular area is \(\pi(4-1)=3\pi\), so Green gives \(2(3\pi)=6\pi\). This agreement depends on **both** boundary components and correct orientation. Integrating only the outer circle gives \(8\pi\), which is circulation around the filled radius-two disk instead.

The field is smooth even inside the hole, so one could also apply Green to that filled disk to compute the outer integral. That extra fact is special to this field. For \(\mathbf G=(-y/r^2,x/r^2)\), filling the hole crosses its singularity and invalidates that alternative. The same annular boundary sum is zero for \(\mathbf G\), because its two component integrals are \(2\pi\) and \(-2\pi\).

```exercise
{"id":"calc3-recitation-annulus","type":"written","prompt":"Replace V by (−c y,c x) for c>0. Compute circulation separately on the outer radius-two and inner radius-one boundaries of the annulus, using its positive orientation. Check by a curl integral. Then explain whether your answer remains valid for c<0 and what changes physically.","hints":["The velocity scales linearly in c, but the prescribed boundary orientations do not change with c."],"rubric":["Gets outer 8πc and inner −2πc","Gets net 6πc","Computes curl 2c and area 3π","Explains same formula for negative c with reversed physical rotation and signed circulation"],"solution":"On a radius-r counterclockwise circle the dot product is cr², so outer gives 8πc and the clockwise inner gives −2πc. Net is 6πc. Curl is 2c throughout the annulus, giving 2c·3π=6πc. For c<0 the algebra and theorem remain valid; the field's rotation and the sign of measured circulation reverse, while geometric boundary orientation remains fixed."}
```

## 2. A cylindrical control volume

Take \(\mathbf W=(x,y,z)\) on the cylinder \(x^2+y^2\leq1,0\leq z\leq2\). **Predict:** Can we use Gauss if we are told only to integrate over the curved side? No: the side is not closed. Still compute it directly. Side parameterization \(\mathbf R(\theta,z)=(\cos\theta,\sin\theta,z)\) has outward area vector \((\cos\theta,\sin\theta,0)d\theta dz\). The dot product with \(\mathbf W\) is one. Side flux is \(\int_0^2\int_0^{2\pi}1\,d\theta\,dz=4\pi\).

To close it, include the top and bottom disks. At \(z=2\), outward \(\mathbf n=(0,0,1)\), so top flux is \(2\pi\). At \(z=0\), outward \(\mathbf n=(0,0,-1)\) and bottom flux is zero. Total flux is \(6\pi\). Divergence is three and volume is \(2\pi\), so Gauss also gives \(6\pi\). This cross-check catches a missing cap even when that cap happens to contribute zero in a related example.

## 3. One edge, two spanning surfaces

For \(\mathbf F=(-y/2,x/2,0)\), choose the counterclockwise unit circle as boundary. Compare upward flat disk with upward graph \(z=1-x^2-y^2\). Do not calculate their scalar areas first. Curl is \((0,0,1)\). The flat disk contributes \(\pi\); the upward graph's area vector \((2x,2y,1)dxdy\) also contributes \(\pi\). Their shared boundary is exactly the same oriented circle because \(z=0\) when \(x^2+y^2=1\). If the graph were \(z=2-x^2-y^2\), its rim would lie at \(z=1\), so it would **not** span the stated circle. Matching a projected outline is insufficient; the actual three-dimensional boundary must match.

```exercise
{"id":"calc3-recitation-rim","type":"choice","prompt":"Which upward graph over the unit disk spans the unit circle in z=0?","options":[{"label":"z=1−x²−y²","correct":true,"feedback":"At r=1 its height is zero, giving precisely the stated boundary with counterclockwise induced orientation."},{"label":"z=2−x²−y²","correct":false,"feedback":"At r=1 its height is one, so its three-dimensional rim is not the circle in z=0."},{"label":"z=1+x²+y²","correct":false,"feedback":"At r=1 its rim lies at height two, not zero."}],"hints":["Evaluate the graph at x²+y²=1; a projected circle is not automatically the same spatial curve."]}
```

## 4. A proof strategy for a changed geometry

Suppose a new problem asks for flux through the **closed** boundary of a half-ball in a smooth field. List its spherical hemisphere and flat disk before computing. If divergence is simple, Gauss can give the total; a direct disk integral can isolate the hemisphere. If the field is undefined at the ball's center, the theorem may fail for the filled region even if both displayed surface patches look smooth. If instead the problem asks for circulation around the circular rim, Stokes can use either a suitably oriented hemisphere or disk, provided the field is smooth across the chosen surface. Write these checks in words before the algebra.

**Delayed retrieval:** Tomorrow, solve the recitation's cylindrical problem after replacing \(\mathbf W\) by \((x,y,2z)\). Recalculate the side and cap fluxes, then use divergence as an independent check. Record which part changed and why. In the problem set, the field and geometry both change, so the recitation calculation alone will not be enough.

## Saved delayed return: change the vertical field

After at least one day, attempt the following changed field before opening its
hints or model. Keep the original attempt and the correction separately. If
you already read the model or use help, record that exposure and treat the work
as reconstruction. This public self-review task does not certify unaided work.

```exercise
{"id":"calc3-recitation-cylinder-vertical-return","type":"written","prompt":"Return after at least one day to the cylinder x²+y²≤1, 0≤z≤2 with W=(x,y,2z). Compute the outward flux on the curved side, top and bottom separately. Add them and check the result by divergence. Compared with the earlier W=(x,y,z), identify exactly which patch contribution changes and why Gauss cannot be applied to the side alone.","hints":["Retain the side area vector (cosθ,sinθ,0); doubling the vertical component does not change its dot product.","The top has outward normal +k and W_z=4. The bottom has normal −k and W_z=0.","Compute divergence as 1+1+2 and use cylinder volume 2π."],"rubric":["Uses all three outward-oriented boundary patches","Finds side flux 4π, top flux 4π and bottom flux 0","Obtains total 8π","Checks divergence 4 times volume 2π gives 8π","Explains that only the top changes, from 2π to 4π, and that the side alone is not closed"],"solution":"The side parameterization R(θ,z)=(cosθ,sinθ,z), 0≤θ≤2π and 0≤z≤2, has outward area vector (cosθ,sinθ,0)dθdz. Therefore W·dS=(cos²θ+sin²θ)dθdz=dθdz, giving side flux 4π. On the top z=2, W_z=4 and the outward normal is +k, so top flux is 4 times unit-disk area π, or 4π. On the bottom z=0, W_z=0 and the outward normal is −k, giving zero. Thus total outward flux is 4π+4π+0=8π. The polynomial field is C¹ near the entire solid, divergence is 1+1+2=4, and the cylinder volume is 2π; Gauss gives the independent check 4·2π=8π. Doubling the vertical field changes only the top from 2π to 4π: the side normal has zero vertical component and the bottom remains at z=0. Gauss concerns the complete closed boundary, so it does not give side flux without accounting for the caps."}
```
