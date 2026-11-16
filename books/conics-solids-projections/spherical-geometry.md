
# Spherical Geometry

This earlier companion keeps its original mathematics, exercises and learner identity. The current main reading is Elliptic and Spherical Geometry.

On a plane, the shortest path between two points is a straight line. On a sphere, the shortest path is a great circle arc. This simple change forces every familiar theorem of Euclidean geometry to be re-examined: triangles have angle sums greater than $\pi$, parallel lines do not exist, and the Pythagorean theorem acquires a trigonometric correction. This chapter builds spherical geometry from first principles and derives the formulas needed for navigation, astronomy, and map projection.

## Great circles and spherical distance

A great circle on a sphere of radius $R$ is the intersection of the sphere with a plane through its center. It is the spherical analog of a straight line: the shortest path between two points on the sphere lies along the great circle through them. Any two distinct non-antipodal points determine a unique great circle; antipodal points lie on infinitely many.

The central angle $\sigma$ between two points on the sphere is the angle between their position vectors from the center. The great-circle distance between the points is

$$d=R\sigma.$$

For a unit sphere ($R=1$), the distance equals the angle in radians.

## Spherical coordinates

A point on a sphere of radius $R$ can be described by latitude $\phi$ (angle from the equator, positive northward) and longitude $\lambda$ (angle from a reference meridian, positive eastward). In Cartesian coordinates with the z-axis through the poles:

$$x=R\cos\phi\cos\lambda,\qquad y=R\cos\phi\sin\lambda,\qquad z=R\sin\phi.$$

Colatitude $\theta=\pi/2-\phi$ is often used in mathematical physics; it is the angle from the positive z-axis.

The central angle $\sigma$ between two points $(\phi_{1},\lambda_{1})$ and $(\phi_{2},\lambda_{2})$ on a unit sphere is given by the spherical law of cosines:

$$\cos\sigma=\sin\phi_{1}\sin\phi_{2}+\cos\phi_{1}\cos\phi_{2}\cos(\lambda_{2}-\lambda_{1}).$$

For small distances, this reduces to the planar distance formula when second-order terms are neglected.

## Spherical triangles

A spherical triangle here means a geodesically convex region bounded by three chosen minor great-circle arcs between three non-antipodal vertices, with no two consecutive arcs forming a digon. Its sides $a$, $b$, $c$ are central angles in $(0,\pi)$. Its angles $A$, $B$, $C$ are the dihedral angles between the planes of the great circles.

### Fundamental relations

The spherical law of cosines for sides states:

$$\cos c=\cos a\cos b+\sin a\sin b\cos C,$$

with analogous formulas for $\cos a$ and $\cos b$. The spherical law of cosines for angles states:

$$\cos C=-\cos A\cos B+\sin A\sin B\cos c,$$

with analogous formulas for $\cos A$ and $\cos B$.

The spherical law of sines states:

$$\frac{\sin a}{\sin A}=\frac{\sin b}{\sin B}=\frac{\sin c}{\sin C}.$$

These formulas reduce to their planar counterparts when $a$, $b$, $c$ are small and higher-order terms are dropped.

### Angle excess and area

The angle sum of a spherical triangle satisfies

$$A+B+C=\pi+E,$$

where $E>0$ is the spherical excess. Girard's theorem states that the area of the triangle on a sphere of radius $R$ is

$$\text{Area}=R^{2}E=R^{2}(A+B+C-\pi).$$

For a unit sphere, the area equals the excess in radians. This formula shows that area is determined entirely by angles, unlike the planar case where area and angles are independent.

## The spherical Pythagorean theorem

For a right spherical triangle with right angle at $C$ (so $C=\pi/2$), the law of cosines for sides simplifies to

$$\cos c=\cos a\cos b.$$

This is the spherical Pythagorean theorem. For small $a$ and $b$, expand to second order: $\cos c\approx 1-c^{2}/2$, $\cos a\cos b\approx(1-a^{2}/2)(1-b^{2}/2)\approx 1-(a^{2}+b^{2})/2$, giving $c^{2}\approx a^{2}+b^{2}$ as expected.

## Common errors

- **Using an unspecified planar surrogate.** A planar-map distance has no universal signed error. If the surrogate is the straight chord for a great-circle arc of length $s$, the chord is shorter by relative amount $s^{2}/(24R^{2})+O((s/R)^{4})$; for $s=1000$ km and $R=6371$ km this is about $0.103\%$. State the map or surrogate before quoting an error.
- **Confusing latitude and colatitude.** Many formulas in physics use colatitude $\theta=\pi/2-\phi$; inserting latitude directly gives wrong signs.
- **Forgetting the angle excess.** A spherical triangle with three right angles is possible (one octant of a sphere) and has area $\pi R^{2}/2$, not zero.
- **Applying the planar law of sines directly.** The spherical law has $\sin a/\sin A$, not $a/\sin A$, because sides are angles.

## Practice exercises with solutions

### Exercise 1
Find the great-circle distance between New York (approximately $\phi=40.7^{\circ}$, $\lambda=-74.0^{\circ}$) and London ($\phi=51.5^{\circ}$, $\lambda=-0.1^{\circ}$), assuming Earth radius $R\approx 6371$ km.

**Solution.** The longitude difference has magnitude $73.9^{\circ}$. Substitution in the spherical law of cosines gives

$$\cos\sigma=\sin(40.7^{\circ})\sin(51.5^{\circ})+\cos(40.7^{\circ})\cos(51.5^{\circ})\cos(73.9^{\circ})\approx0.6412161031.$$

Thus $\sigma\approx0.8747143209$ rad and

$$d=6371\sigma\approx5572.80494\text{ km},$$

or about $5573$ km at the precision justified by the input coordinates.

### Exercise 2
A spherical triangle on a unit sphere has angles $A=\pi/2$, $B=\pi/3$, $C=\pi/4$. Find its area.

**Solution.** The spherical excess is $E=A+B+C-\pi=\pi/2+\pi/3+\pi/4-\pi=\pi/12$. The area is $E=\pi/12\approx 0.2618$ square radians.

### Exercise 3
For a right spherical triangle with $a=\pi/4$, $b=\pi/4$ on a unit sphere, find the hypotenuse $c$.

**Solution.** By the spherical Pythagorean theorem:

$$\cos c=\cos(\pi/4)\cos(\pi/4)=\frac{\sqrt{2}}{2}\cdot\frac{\sqrt{2}}{2}=\frac{1}{2}.$$

So $c=\arccos(1/2)=\pi/3$.

### Exercise 4
Verify that a spherical triangle with three right angles has area $\pi R^{2}/2$ on a sphere of radius $R$.

**Solution.** The excess is $E=3\cdot\pi/2-\pi=\pi/2$. By Girard's theorem, the area is $R^{2}E=\pi R^{2}/2$. Geometrically, such a triangle is one octant of the sphere, and the sphere's total area is $4\pi R^{2}$, so one octant has area $4\pi R^{2}/8=\pi R^{2}/2$, confirming the result.

### Exercise 5
Use the spherical law of sines to find angle $B$ in a spherical triangle with $a=\pi/4$, $b=\pi/3$, and $A=\pi/4$.

**Solution.** From $\frac{\sin a}{\sin A}=\frac{\sin b}{\sin B}$:

$$\sin B=\frac{\sin b\sin A}{\sin a}=\frac{\sin(\pi/3)\sin(\pi/4)}{\sin(\pi/4)}=\sin(\pi/3)=\frac{\sqrt{3}}{2}.$$

So $B=\pi/3$ or $B=2\pi/3$. Since $b>a$ and in spherical triangles larger sides face larger angles, $B>A=\pi/4$, so both values are possible in principle. Additional information (such as whether the triangle is acute) would be needed to resolve the ambiguity.

### Exercise 6
Show that on a unit sphere, a spherical triangle with sides $a=b=c=\pi/2$ has angles $A=B=C=\pi/2$.

**Solution.** Using the law of cosines for sides with $a=b=c=\pi/2$:

$$\cos(\pi/2)=\cos(\pi/2)\cos(\pi/2)+\sin(\pi/2)\sin(\pi/2)\cos C,$$

$$0=0+1\cdot 1\cdot\cos C,$$

so $\cos C=0$ and $C=\pi/2$. By symmetry, $A=B=\pi/2$ as well. This is the triangle bounding one octant of the sphere.

## Looking backward and forward

This chapter developed spherical geometry from great circles and central angles to the laws governing spherical triangles. Girard's theorem links angle sum directly to area, a feature with no planar analog. These formulas are essential for the map projections studied later, because every map projection is a compromise between preserving the great-circle properties of the sphere and the convenient coordinates of the plane.

The next chapter, **Hyperbolic Models**, explores another non-Euclidean geometry where the angle sum of a triangle is less than $\pi$ and the area is again determined by angles, but with opposite sign. Together, spherical and hyperbolic geometry show that Euclid's parallel postulate is not a necessary truth but a choice that determines the curvature of space.
