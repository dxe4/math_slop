# Triple integrals: choosing slices and coordinates

Primary companion: [Multivariable and Vector Calculus](#/books/calculus-multivariable), Euler’s L2–L3 book. Keep its chapter sequence for the main reading route and use this lesson for the stated investigation or proof connection.

**Place in course:** Calculus III, after double integrals. **Learning outcomes:** describe a solid by inequalities, choose an order and coordinate system, derive cylindrical and spherical volume factors, and use units or a second method to check a mass or volume.

## What must the sum represent?

Imagine measuring temperature and density throughout a tank, rather than across a flat plate. A cell with side lengths \(\Delta x,\Delta y,\Delta z\) contributes approximately \(f(x,y,z)\Delta x\Delta y\Delta z\). A triple Riemann integral is the common limit of these sums as every cell diameter tends to zero. For a continuous \(f\) on a compact solid with a piecewise smooth boundary, it exists; on a box, repeated one-dimensional integration may be performed in any order. For a general solid, the bounds must describe that **same** solid in the selected order. An unbounded density or a singular boundary needs a separate improper-integral argument.

To find mass use \(f=\rho\) in kilograms per cubic metre; to find volume use \(f=1\). The integral \(\iiint_E z\rho\,dV\) is the first moment about the horizontal plane, so its ratio to mass gives the vertical center of mass. Units often expose a missing Jacobian: \(\rho\,dV\) must have units of mass.

### Start with a sketch and a vertical slice

Let \(E\) lie above the paraboloid \(z=x^2+y^2\) and below the plane \(z=4\). The inequalities require \(x^2+y^2\leq4\), so the projection on the \(xy\)-plane is a disk of radius two. At fixed \((x,y)\), vertical height is \(4-(x^2+y^2)\). Cartesian bounds would require a square root for the disk; cylindrical coordinates make both surfaces simple. Write \(x=r\cos\theta, y=r\sin\theta,z=z\), with \(0\leq r\leq2\), \(0\leq\theta\leq2\pi\), and \(r^2\leq z\leq4\).

The columns of the three-dimensional coordinate derivative are \((\cos\theta,\sin\theta,0)\), \((-r\sin\theta,r\cos\theta,0)\), and \((0,0,1)\). Their determinant is \(r\), so \(dV=r\,dz\,dr\,d\theta\). The volume is

$$
V=\int_0^{2\pi}\int_0^2\int_{r^2}^4 r\,dz\,dr\,d\theta
=2\pi\int_0^2(4-r^2)r\,dr=8\pi.
$$

As a check, the cylinder of radius two and height four has volume \(16\pi\); the paraboloid removes exactly half of it. More directly, the removed volume is \(2\pi\int_0^2r^3dr=8\pi\). For **uniform density** in this normalized coordinate model, the first \(z\)-moment is \(\pi\int_0^2(16-r^4)r\,dr=64\pi/3\), and average height is \((64\pi/3)/(8\pi)=8/3\). If density instead varies with \(z\), calculate mass and moment separately before dividing. The value lies between the minimum and maximum heights, but this check alone does not establish the integral.

### Follow one volume element through three views

Before moving the controls below, predict what happens to the projected disk, the central column, and the rim column when the top plane rises. Then predict whether a column at the center contributes the most to the *radial integral*. These are different questions: its height is largest at the center, but its polar area factor \(r\) is zero there.

```investigation
paraboloid-solid
```

Read the pictures in this order. First, the **projection**: the two surfaces meet at \(cr^2=H\), giving \(R=\sqrt{H/c}\), and the amber sector represents a small polar cell with area approaching \(r\,dr\,d\theta\). Next, the **radial cross-section**: at the selected radius the vertical column begins at \(cr^2\) and ends at \(H\), so its height is \(H-cr^2\). Finally, follow its red endpoints into the **solid view**. The oblique projection changes visual lengths; use the labeled coordinates and exact readouts for calculation.

<details><summary>Reveal the link from the moving column to the integral</summary>

The height already results from integrating \(dz\); multiplying a whole column height by another \(dz\) would count the vertical thickness twice. A single infinitesimal volume element is \(r\,dz\,dr\,d\theta\); after integrating vertically it becomes \((H-cr^2)r\,dr\,d\theta\). Thus

$$
V(H,c)=\int_0^{2\pi}\int_0^{\sqrt{H/c}}(H-cr^2)r\,dr\,d\theta
=2\pi\left[\frac{Hr^2}{2}-\frac{cr^4}{4}\right]_0^{\sqrt{H/c}}
=\frac{\pi H^2}{2c}.
$$

At \(r=0\), the column height is \(H\) but its radial area factor is zero. At \(r=R\), the factor is positive but the column height is zero. Neither endpoint alone determines the volume.

The readout **height × radial factor** lets you test where a thin circular shell contributes most. Its exact radial weight is \(w(r)=r(H-cr^2)\); differentiation gives \(w'(r)=H-3cr^2\). The maximum occurs at \(r=\sqrt{H/(3c)}=R/\sqrt3\), between center and rim. This statement concerns contribution *per unit radial thickness* after integrating over the full angle; a wide annulus still requires integrating \(w(r)\) across its width.

</details>

<details><summary>Reveal a second check: compute by horizontal disks</summary>

At height \(z\in[0,H]\), the solid contains radii satisfying \(cr^2\le z\), so \(r\le\sqrt{z/c}\). Its horizontal cross-section is a disk of area \(\pi z/c\). Therefore \(V=\int_0^H(\pi z/c)\,dz=\pi H^2/(2c)\). This check uses a different slicing direction. The disk grows *upward*; treating it as radius \(\sqrt{(H-z)/c}\) would describe the complementary solid.

</details>

The linked picture also previews the next two chapters. For \(\mathbf F=(x,y,z)\), the top disk's outward normal points up; the lower bowl's outward normal points down and radially out. Both pieces are needed before the closed-surface flux can equal \(3V\). Move \(H\) and \(c\) and explain why the readouts satisfy this identity for every allowed setting; the algebra in the later Gauss lesson supplies the proof.

```exercise
{"id":"calc3-paraboloid-linked-transfer","type":"written","prompt":"Change the solid to cr²≤z≤H with H=3 and c=3/4. Before using the diagram, determine its projected radius, a correct cylindrical volume integral, and exact volume. For F=(x,y,z), find the outward flux through the top disk and lower bowl separately, then check their sum against divergence. Explain why the central column does not by itself dominate the radial integral.","hints":["Solve cr²=H before choosing a radial upper bound.","On the lower graph z=cr², outward vector area is (2cx,2cy,−1)dA.","The top is z=H over a radius-R disk; div F=3."],"rubric":["Finds R=2 and writes 0≤r≤2, cr²≤z≤3","Derives volume 6π from the cylindrical integral","Computes top flux 12π with upward normal","Computes lower bowl flux 6π with downward/outward area vector","Checks total 18π=3V and explains the radial factor at r=0"],"solution":"The surfaces meet at R=√(H/c)=√4=2. Thus V=2π∫₀²∫₍₃ᵣ²⁄₄₎³r dz dr=πH²/(2c)=6π. On the top, F·k=3 and the disk area is 4π, so flux is 12π. On the lower bowl, the outward area vector is (2cx,2cy,−1)dA, giving F·dS=(2cr²−cr²)dA=cr²dA. Its integral is 2πc∫₀²r³dr=6π. The closed flux is 18π, matching ∫_E 3dV=3V. Although the central column has height 3, its infinitesimal polar base area carries factor r=0 at the centre.","transfer":"Keep H=3,c=3/4 but replace F by (x,y,z+1). Find the two outward boundary fluxes and total flux without recomputing a triple integral. Explain the cancellation.","transferSolution":"The extra constant vertical field has divergence zero. It adds +area(top)=+4π to the upward top flux and −area(projection)=−4π to the downward bowl flux, so the pieces become 16π and 2π. Their sum stays 18π. The graph and top disk have the same projected disk, so the added vertical fluxes cancel on the closed boundary."}
```

```exercise
{"id":"calc3-paraboloid-bounds","type":"choice","prompt":"For the solid above z=r² and below z=4, which cylindrical bounds describe every interior point once?","options":[{"label":"0≤r≤2, 0≤θ≤2π, r²≤z≤4","correct":true,"feedback":"Yes. The surfaces meet when r=2, and each vertical slice lies between them."},{"label":"0≤r≤4, 0≤θ≤2π, r²≤z≤4","correct":false,"feedback":"For r>2 the lower bound exceeds the upper bound; the projection is only the radius-two disk."},{"label":"0≤r≤2, 0≤θ≤2π, 0≤z≤4−r²","correct":false,"feedback":"That is a different solid: it lies below a downward paraboloid instead of above z=r²."}],"hints":["Find where the two surfaces meet before choosing the radial range."]}
```

## Spherical coordinates are a different geometry

Use \(x=\rho\sin\phi\cos\theta\), \(y=\rho\sin\phi\sin\theta\), \(z=\rho\cos\phi\), where \(\rho\geq0\) is distance from the origin, \(\phi\in[0,\pi]\) measures angle **down from the positive \(z\)-axis**, and \(\theta\in[0,2\pi)\) is the azimuth. Differentiating the three coordinates and taking an absolute determinant gives \(\rho^2\sin\phi\). A geometric derivation gives the same leading cell dimensions: radial \(d\rho\), meridional arc \(\rho d\phi\), azimuthal arc \(\rho\sin\phi d\theta\). The two angular factors must both appear. The map collapses at \(\rho=0\) and on the polar axis; these sets have volume zero. Do not treat this observation as permission to ignore a singular **integrand** there.

For the part of the radius-two ball above the cone \(z=\sqrt{x^2+y^2}\), the cone condition is \(\rho\cos\phi\geq\rho\sin\phi\), so \(0\leq\phi\leq\pi/4\). The sphere gives \(0\leq\rho\leq2\). Its volume is

$$
\int_0^{2\pi}\int_0^{\pi/4}\int_0^2\rho^2\sin\phi\,d\rho\,d\phi\,d\theta
=\frac{16\pi}{3}\left(1-\frac{\sqrt2}{2}\right).
$$

This is less than the upper hemisphere volume \(16\pi/3\), as it must be. The cone is a condition on **angle**, not a cap of constant \(z\). A mistaken upper bound \(z=\sqrt2\) would describe a horizontal cut instead.

```mathviz
scene "Author a finite radial slice between a paraboloid and a plane";
domain -0.3 2.3;
range -0.3 4.4;
param r = 1 from 0 to 1.9;
fn lower(x) = x^2;
fn upper(x) = 4;
plot lower color blue;
plot upper color teal;
polygon cell = (r,r^2), (r+0.1,(r+0.1)^2), (r+0.1,4), (r,4) color amber;
segment height from (r,r^2) to (r,4) color rose;
```

This authorable scene is a **radial cross-section**, not the whole three-dimensional solid. The filled cell has finite radial width \(0.1\); its sloping bottom edge is a chord approximation to the parabola. Edit the source to change the width, the lower function, or the selected radius. To make a new volume calculation, also derive the new disk projection and include the angular area factor \(r\): the shaded planar polygon alone has no \(\theta\)-extent and cannot equal a volume element.

## When to change order instead of coordinates

Coordinates simplify geometry only if both the transformed integrand and domain become manageable. For \(E=\{0\leq x\leq1,\ 0\leq y\leq x,\ 0\leq z\leq y\}\), Cartesian bounds immediately give \(\int_0^1\int_0^x\int_0^y1\,dz\,dy\,dx=1/6\). The same inequalities may be rewritten as \(0\leq z\leq1,\ z\leq y\leq1,\ y\leq x\leq1\). Then \(\int_0^1\int_z^1\int_y^1 1\,dx\,dy\,dz=1/6\). The second expression describes the same tetrahedral wedge; it did not arise by mechanically reversing symbols. No circular symmetry recommends cylindrical coordinates here.

**False shortcut:** “The determinant is \(r\), so every cylindrical integral gets \(r\) but the old bounds stay.” A coordinate change transforms the integrand, the infinitesimal volume, **and** the region. If the mapping covers the region twice, the computed answer doubles even with the right determinant.

**Independent transfer:** Let the solid be inside \(x^2+y^2\leq9\), above \(z=0\), and below \(z=3-r\). Before evaluating, decide whether its radial bound is three or nine and whether the upper surface is nonnegative throughout the projected disk. Find the volume and the average height \(z\). Then explain how the answers change if the height is \(3-r^2\), which restricts the projected disk. The recitation returns to these choices without naming a coordinate system for you.

<details><summary>Public model: cone and paraboloid volumes and mean heights</summary>

For volume-average height, put \(J=\iiint_E z\,dV\) and \(\bar z=J/V\). This also gives the centre-of-mass height for any constant positive density; a varying density would require its own mass and moment.

For the cone, \(x^2+y^2\le9\) means \(0\le r\le3\), not \(9\). Its height \(3-r\) is nonnegative on that disk. With \(0\le\theta\le2\pi\) and \(0\le z\le3-r\),

$$
V=2\pi\int_0^3(3-r)r\,dr
=2\pi\left[\frac{3r^2}{2}-\frac{r^3}{3}\right]_0^3
=9\pi,
$$

and

$$
J=2\pi\int_0^3\int_0^{3-r}zr\,dz\,dr
=\pi\int_0^3(3-r)^2r\,dr
=\frac{27\pi}{4}.
$$

Thus \(\bar z=(27\pi/4)/(9\pi)=3/4\). Independently, a horizontal section at height \(z\in[0,3]\) has radius \(3-z\), so its area is \(\pi(3-z)^2\). Integrating that area, or \(z\) times that area, gives the same \(V\) and \(J\).

For the changed upper surface \(3-r^2\), a nonnegative vertical interval requires \(r^2\le3\). Together with the original radius-three constraint, this gives the smaller projection \(0\le r\le\sqrt3\). Integrating over the old radius-three disk would include negative heights rather than the stated solid. The correct calculations are

$$
V_{\rm changed}=2\pi\int_0^{\sqrt3}(3-r^2)r\,dr
=\frac{9\pi}{2},
$$

$$
J_{\rm changed}
=\pi\int_0^{\sqrt3}(3-r^2)^2r\,dr
=\frac{\pi}{2}\int_0^3u^2\,du
=\frac{9\pi}{2},
\qquad
\bar z_{\rm changed}=1,
$$

where \(u=3-r^2\). A horizontal section now has radius \(\sqrt{3-z}\) and area \(\pi(3-z)\), independently checking both integrals. The volume halves, while the average height rises from \(3/4\) to \(1\); keeping the same central height does not keep either the projection or the distribution of volume fixed.

</details>
