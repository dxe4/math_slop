
# Elliptic Geometry

## Learning purpose

Elliptic geometry changes the global incidence and order axioms used in neutral geometry and then adds a positive-curvature metric structure. The statement that any two distinct lines meet describes only its projective incidence core; metric notions require the spherical-antipodal model or an equivalent polarity. This chapter develops the core theorems, explains the topological price of the axiom change, and contrasts elliptic results with Euclidean and hyperbolic counterparts.

## Axioms of elliptic geometry

Elliptic geometry modifies the incidence axioms:

- (E1) Any two distinct points lie on exactly one line.
- (E2) Any two distinct lines meet in exactly one point.
- (E3) There exist three noncollinear points.
- (E4) Every line contains at least three points.

There is **no parallel axiom** because no parallels exist. The order axioms must also be adjusted: "betweenness" is not globally meaningful on a projective line, so elliptic geometry typically uses separation axioms (a pair of points separates another pair) rather than betweenness. E1--E4 alone describe projective incidence; the distance, congruence, and angle claims below use the standard metric elliptic plane.

## The spherical model

The standard model is the unit sphere $S^{2} = \{(x,y,z) \in \mathbb{R}^{3} : x^{2}+y^{2}+z^{2}=1\}$ with antipodal points identified.

- **Points:** antipodal pairs $\{p, -p\}$ on $S^{2}$.
- **Lines:** great circles (intersections of $S^{2}$ with planes through the origin), with antipodal points identified.
- **Distance:** the geodesic distance between $\{p,-p\}$ and $\{q,-q\}$ is $\arccos(|p \cdot q|) \in [0, \pi/2]$.

**Hypothesis note:** Identifying antipodal points is necessary because two great circles meet in two antipodal points on the raw sphere, violating E2. After identification, any two lines meet in exactly one point.

**Boundary case:** For antipodal points on the raw sphere, the distance formula gives $\arccos(1) = 0$ after identification, which is correct because they represent the same elliptic point. For orthogonal unit vectors, the distance is $\arccos(0) = \pi/2$.

## Immediate consequences

### No parallels and bounded metric

Since every two lines meet, there are no parallel lines. After antipodal identification, a projective line has length $\pi$, and the whole metric space has diameter $\pi/2$. A path can loop repeatedly and have arbitrarily large accumulated length, but that does not make the distance between points unbounded.

### Angle sum

**Theorem 10.4.** A convex geodesic triangle contained in an elliptic disk and lifting injectively to a spherical triangle has angle sum strictly greater than $\pi$.

**Proof sketch.** Lift the triangle to the unit sphere. Girard's theorem gives spherical area $A+B+C-\pi$, which is positive for a nondegenerate convex triangle. The antipodal quotient is a local isometry and is injective on this lifted disk, so it preserves that area rather than doubling it. Noncontractible polygonal loops in $\mathbb{RP}^2$ require separate conventions and are outside this statement.

**Common error:** applying the spherical area formula $\alpha + \beta + \gamma - \pi$ to a Euclidean triangle. In Euclidean geometry the excess is zero; in hyperbolic it is negative (defect). The sign of the angular excess characterizes the geometry.

### No rectangles, no similar triangles

As in hyperbolic geometry, rectangles do not exist. Moreover, similarity implies congruence for triangles in the preceding convex scope: the dual spherical cosine law determines each side from the three angles, so equal corresponding angles give equal corresponding side lengths.

## Spherical trigonometry

For a spherical triangle with side lengths $a,b,c$ (arc lengths on the unit sphere) and opposite angles $A,B,C$:

### Law of cosines (sides)
$$\cos c = \cos a \cos b + \sin a \sin b \cos C.$$

### Law of cosines (angles)
$$\cos C = -\cos A \cos B + \sin A \sin B \cos c.$$

### Law of sines
$$\frac{\sin a}{\sin A} = \frac{\sin b}{\sin B} = \frac{\sin c}{\sin C}.$$

**Boundary case:** For small $a,b,c$, the spherical law of cosines approximates the Euclidean law because $\cos x \approx 1 - x^{2}/2$ and $\sin x \approx x$. This confirms that elliptic geometry is locally Euclidean.

## Worked example: computing a spherical distance

**Problem.** Find the great-circle distance between New York (approximate latitude $40.7^{\circ}$ N, longitude $74^{\circ}$ W) and London (latitude $51.5^{\circ}$ N, longitude $0^{\circ}$). Use the unit sphere.

**Solution.** Convert to radians and Cartesian coordinates with $z$ along the polar axis, $x$ toward the Greenwich meridian, $y$ toward $90^{\circ}$ E.

New York: $\phi_{NY} = 40.7^{\circ} \approx 0.7102$ rad, $\theta_{NY} = -74^{\circ} \approx -1.2915$ rad.
$$x_{NY} = \cos\phi_{NY}\cos\theta_{NY} \approx 0.2090,\quad
y_{NY} = \cos\phi_{NY}\sin\theta_{NY} \approx -0.7288,\quad
z_{NY} = \sin\phi_{NY} \approx 0.6521.$$

London: $\phi_{L} = 51.5^{\circ} \approx 0.8988$ rad, $\theta_{L} = 0$.
$$x_{L} = \cos\phi_{L} \approx 0.6225,\quad
y_{L} = 0,\quad
z_{L} = \sin\phi_{L} \approx 0.7826.$$

Dot product: $p \cdot q \approx 0.2090(0.6225) + (-0.7288)(0) + 0.6521(0.7826) \approx 0.6404$.

Central angle: $\arccos(0.6404) \approx 0.8757$ rad $\approx 50.18^{\circ}$.

Great-circle distance on Earth (radius $R \approx 6371$ km): $d = R \times 0.8757 \approx 5579$ km.

**Verification:** Published great-circle distance NY–London is approximately $5570$ km. The small discrepancy is due to rounding of coordinates.

## Common errors

1. **Forgetting antipodal identification.** On the raw sphere, two great circles meet twice. In elliptic geometry they meet once. Theorems about unique intersection points require the identification.
2. **Using Euclidean angle-sum intuition.** A spherical triangle can have three right angles (e.g., one octant of the sphere), giving angle sum $3\pi/2$. This is impossible in Euclidean geometry.
3. **Confusing spherical excess with hyperbolic defect.** Elliptic excess is positive; hyperbolic defect is positive in the sense $\pi - \text{sum}$, but the sum is less than $\pi$. The sign of $(A+B+C) - \pi$ distinguishes the geometries.

## Complete spherical and quotient model arguments

There are two related geometries here. On the raw sphere p and -p are different points; in the elliptic plane they are one point. The distinction changes global incidence, the diameter, and uniqueness of shortest arcs. We now prove the model statements rather than use one picture for both spaces.

### Theorem 10.1 — Spherical distance from path length

For unit vectors p,q, shortest spherical path length is arccos(p dot q).

*Proof.* For a piecewise-$C^1$ unit-sphere path gamma beginning at p, its velocity is tangent. Away from the two polar values, differentiate theta=arccos(p dot gamma):
$|\theta'|
=\frac{|(p-(p\cdot\gamma)\gamma)\cdot\gamma'|}
{\sqrt{1-(p\cdot\gamma)^2}}\le\|\gamma'\|.$
The numerator bound follows from Cauchy–Schwarz and the norm of the projected vector. To avoid endpoint differentiation at a pole, replace the argument by (1-epsilon)(p dot gamma). Its derivative still has absolute value at most speed; integrate and let epsilon decrease to zero. This proves that every joining path has length at least arccos(p dot q).

A minor arc of the great circle in span(p,q) has exactly that length and attains the bound when q differs from ±p. At antipodal endpoints any half great circle attains pi, and at equal endpoints the constant path attains zero. Equality in the derivative bound forces a nonconstant minimizing path to follow that meridian, so the nonantipodal minor arc is the unique minimizing image. $\square$

On a radius-R sphere, scale lengths by R. Incidence still differs from a projective plane: antipodal point pairs have infinitely many great-circle joins, and distinct great circles meet at two points rather than one.

### Theorem 10.2 — The elliptic quotient metric

Let [p]={p,-p}. Then
$d_E([p],[q])=\min\{d_S(p,q),d_S(p,-q)\}
=\arccos|p\cdot q|$
is a metric on antipodal classes, and the quotient is locally spherical.

*Proof.* The expression is independent of representative signs. It is nonnegative, symmetric, and vanishes exactly when q=±p, that is, on equal classes. For the triangle inequality, choose the sign of q giving the minimum from p, then the sign of r giving the minimum from that q. The spherical triangle inequality gives
$d_E([p],[r])\le d_S(p,r)
\le d_S(p,q)+d_S(q,r)
=d_E([p],[q])+d_E([q],[r]).$
Here r denotes the finally selected representative.

A sufficiently small spherical cap about p misses its antipodal cap and projects injectively. For points in a still smaller cap their mutual spherical distance is below pi/2, so the minimizing representative choice is the original one. Thus this projection is a local isometry. A quotient path lifts by successive choices in such caps, with endpoint q or -q; compactness of its parameter interval permits finitely many choices. Its length is at least the displayed minimum, and a suitable minor arc attains it. $\square$

The distance has maximum pi/2, attained at perpendicular representatives. At that distance there are two minimizing elliptic arc images, obtained by projecting the minor spherical arcs from p to q and from p to -q. For smaller positive distance the minimizing elliptic arc is unique.

### Theorem 10.3 — Elliptic incidence

Two distinct elliptic points correspond to two different one-dimensional subspaces of R³, whose span is a unique plane through zero. Its sphere intersection, modulo antipodes, is their unique elliptic line.

Two different such planes intersect in a one-dimensional subspace, by the dimension formula. Its two unit vectors become one quotient point, proving unique line intersection. The coordinate axes give a noncollinear triple, and every line contains at least three classes, for example [u],[v],[u+v] from independent vectors in its plane. Thus the stated incidence axioms hold.

These arguments do not prove the neutral order axioms. An elliptic line is a circle with total length pi, not an indefinitely ordered real line. Removing one point leaves it connected, whereas a neutral ordered line splits into two rays. Orthogonal elliptic endpoints even have two minimizing arcs. Consequently elliptic geometry changes incidence and order together; it is not a model of all neutral axioms with only the parallel postulate changed.

## Spherical trigonometry proved from vectors

Consider a nondegenerate convex spherical triangle with chosen minor sides a,b,c in (0,pi), opposite A,B,C in (0,pi). Assume its vertices lie in a common open hemisphere. Set p,q,r for its unit vertex vectors.

The unit tangents at p toward q and r are
$(q-\cos c\,p)/\sin c,\qquad
(r-\cos b\,p)/\sin b.$
Their dot product is cos A, so
$\cos a=\cos b\cos c+\sin b\sin c\cos A.$
Cyclic permutation proves all three side cosine laws, including the version stated earlier.

Let D=abs det(p,q,r). Taking the oriented volume against those tangents gives
$D=\sin b\sin c\sin A
=\sin c\sin a\sin B
=\sin a\sin b\sin C.$
All side sines are positive. Dividing by their product proves the sine law. Its use to solve an angle from its sine can still leave two possibilities; the theorem does not remove that trigonometric ambiguity.

For completeness the angle cosine law also follows algebraically. Put x=cos a,y=cos b,z=cos c. The Gram determinant is
$D^2=1-x^2-y^2-z^2+2xyz.$
The side laws give
$\cos A=\frac{x-yz}{\sqrt{1-y^2}\sqrt{1-z^2}},$
and cyclic versions. On putting cos C+cos A cos B over a common denominator, its numerator becomes
$(z-xy)(1-z^2)+(x-yz)(y-xz)=zD^2.$
The sine identities give exactly the same denominator and numerator for sin A sin B cos c. Therefore
$\cos C=-\cos A\cos B+\sin A\sin B\cos c$.
This establishes the dual formula used in the equal-angles congruence statement, within the specified triangle scope.

## Girard's theorem with the lune count supplied

A spherical lune of angle theta has area 2theta on the unit sphere. Indeed it occupies the fraction theta/(2pi) of the sphere in longitude, and its area is
$\int_0^\theta\int_0^\pi\sin t\,dt\,d\phi=2\theta$.
The area element follows by the cross product of the ordinary spherical parametrization; no triangle theorem is assumed.

Let the three side great circles bound the chosen convex triangle T as the intersection of three positive hemispheres. They partition the sphere into T, its antipodal triangle, and six other triangular regions. The three lunes obtained by intersecting pairs of positive hemispheres have angles A,B,C. They cover T three times and the three regions with exactly two positive hemisphere signs once.

Call the sum of those three latter areas B0. Antipodal reflection pairs them with the three one-positive regions and pairs T with its opposite. Therefore
$4pi=2area(T)+2B0$.
The sum of the three lune areas is at the same time
$2(A+B+C)=3area(T)+B0$.
Eliminating B0 gives
$\operatorname{Area}(T)=A+B+C-\pi.$
Scaling to radius R multiplies area by R². This proves Girard's theorem for the stated convex minor-arc configuration.

An elliptic disk on which the quotient lifts injectively has the same area and angles as its spherical lift. Hence the earlier elliptic triangle excess theorem follows with no doubled area. A noncontractible elliptic loop need not bound such a disk, so its three selected line segments cannot automatically be inserted into this argument.

For a convex geodesic quadrilateral, choose an interior diagonal and add the two excess formulas. Its total angle sum exceeds 2pi, which in particular excludes a four-right-angle rectangle in this convex scope. Merely saying there are no parallels would not supply the angle calculation.

## Worked examples

### Worked example 1 — Same representatives, different distances

Take p=(1,0,0) and q=(-1/2,sqrt3/2,0). Their spherical distance is arccos(-1/2)=2pi/3. Their elliptic distance is arccos(1/2)=pi/3, using the closer representative -q. Thus a spherical navigation length and an elliptic quotient length can differ, even though both are computed from the same dot product.

### Worked example 2 — A spherical right triangle

Let a=b=pi/4 and C=pi/2 on the unit sphere. The side cosine law gives cos c=cos²(pi/4)=1/2, so c=pi/3. The planar approximation sqrt(a²+b²) is not the exact answer. On a radius-R sphere the actual side lengths are Ra,Rb,Rc; the cosine formulas use their central angles, not dimensional lengths inserted into cosine.

### Worked example 3 — An octant and its elliptic image

The three positive coordinate-axis representatives are pairwise perpendicular. Choose the octant arcs, giving three sides and three angles pi/2. The spherical area is pi/2 by the lune argument, and also one eighth of 4pi. The quotient is injective on this chosen closed octant because it contains no antipodal pair. It therefore gives an elliptic disk triangle with the same area. The choice of the arcs remains necessary because these endpoint distances have two minimizing elliptic realizations.

### Worked example 4 — A small cap that is not a whole quotient

For a cap of spherical radius r<pi/4, any two of its points have spherical distance below pi/2. Its quotient image is injective and distances between those points agree with spherical distances. This provides a concrete local spherical model. Extending the cap past a hemisphere destroys that representative choice and cannot produce a global one-to-one sphere model for the elliptic plane.

## Practice exercises

<a id="elliptic-geometry-ex-1"></a>
### Exercise 1
Prove that in elliptic geometry, two distinct lines always meet in exactly one point, and that through any two distinct points there passes exactly one line.


<details>
<summary>Hint 1</summary>

Use subspaces of R³.

</details>
<details>
<summary>Hint 2</summary>

Two distinct origin planes intersect in one origin line, whose unit vectors are antipodal.

</details>
<details>
<summary>Full solution</summary>

**Solution.**
These are axioms E1 and E2. In the spherical model, two distinct great circles lie in distinct planes through the origin; their intersection is a line through the origin, which meets the sphere in two antipodal points. After antipodal identification, the two lines meet in exactly one elliptic point. Similarly, two distinct points on the sphere (not antipodal) determine a unique plane through the origin, hence a unique great circle; antipodal points are identified, so the line is unique in elliptic space.


</details>

<a id="elliptic-geometry-ex-2"></a>
### Exercise 2
A spherical triangle on the unit sphere has angles $\pi/2$, $\pi/2$, and $\pi/2$. Compute its area and verify Girard's theorem.


<details>
<summary>Hint 1</summary>

Use the chosen spherical octant.

</details>
<details>
<summary>Hint 2</summary>

Its three interior angles each contribute pi/2.

</details>
<details>
<summary>Full solution</summary>

**Solution.**
The angle sum is $3\pi/2$. By Girard's theorem, the area is $3\pi/2 - \pi = \pi/2$. This triangle is one octant of the sphere; the unit sphere has total area $4\pi$, and one octant indeed has area $4\pi/8 = \pi/2$. The verification agrees.


</details>

<a id="elliptic-geometry-ex-3"></a>
### Exercise 3
Show that a convex geodesic quadrilateral contained in an elliptic disk and lifting injectively to the sphere has angle sum strictly greater than $2\pi$.


<details>
<summary>Hint 1</summary>

Split by an interior diagonal.

</details>
<details>
<summary>Hint 2</summary>

Apply the triangle excess theorem in its injective-lift scope.

</details>
<details>
<summary>Full solution</summary>

**Solution.**
Let $ABCD$ be a convex geodesic quadrilateral contained in an elliptic disk and lifting injectively to the sphere. The diagonal $AC$ stays in the disk and splits it into two triangles in the scope of Girard's theorem. Each has angle sum $>\pi$, so the quadrilateral angle sum is $>2\pi$. Noncontractible or self-intersecting four-vertex loops are outside this argument.


</details>

<a id="elliptic-geometry-ex-4"></a>
### Exercise 4
In the unit sphere model, find the side lengths of the spherical triangle with vertices at the coordinate axes: $A=(1,0,0)$, $B=(0,1,0)$, $C=(0,0,1)$. Verify the spherical law of cosines for side $c=AB$.


<details>
<summary>Hint 1</summary>

Choose the octant arcs before using distances.

</details>
<details>
<summary>Hint 2</summary>

All endpoint dot products vanish, so side lengths are pi/2.

</details>
<details>
<summary>Full solution</summary>

**Solution.**
Choose the three octant arcs between the coordinate-axis representatives. Orthogonal endpoints are at elliptic distance $\pi/2$ and have two minimizing great-circle arcs after antipodal identification, so this choice is part of the triangle data. The chosen arc from $A$ to $B$ lies in the $xy$-plane and has length $c=\pi/2$; similarly $a=b=\pi/2$. The angle $C$ between the chosen arcs is also $\pi/2$. The law of cosines states
$$\cos c = \cos a \cos b + \sin a \sin b \cos C.$$
Substituting: $\cos(\pi/2) = 0$ on the left. On the right, $\cos(\pi/2)\cos(\pi/2) + \sin(\pi/2)\sin(\pi/2)\cos(\pi/2) = 0 + 1 \cdot 1 \cdot 0 = 0$. The identity holds.


</details>

## Further exercises

<a id="elliptic-geometry-ex-5"></a>
### Exercise 10.5

For p dot q=-sqrt2/2, compare unit spherical and elliptic distances.

<details>
<summary>Hint 1</summary>

The quotient permits replacing q by -q.

</details>

<details>
<summary>Hint 2</summary>

Use the appropriate arccosine arguments.

</details>

<details>
<summary>Full solution</summary>

The raw sphere distance is 3pi/4. The elliptic distance is arccos(sqrt2/2)=pi/4. Antipodal representatives are different sphere points but the same elliptic point, so this reduction is required rather than an arbitrary shortcut.

</details>

<a id="elliptic-geometry-ex-6"></a>
### Exercise 10.6

Prove the quotient triangle inequality by representative choices.

<details>
<summary>Hint 1</summary>

Choose signs successively.

</details>

<details>
<summary>Hint 2</summary>

The direct quotient distance is at most any representative distance.

</details>

<details>
<summary>Full solution</summary>

Choose q so dS(p,q)=dE([p],[q]), then r so dS(q,r)=dE([q],[r]). The spherical triangle inequality bounds dS(p,r) by their sum. Since dE([p],[r]) is the minimum over signs, it is no larger than dS(p,r), proving the claim.

</details>

<a id="elliptic-geometry-ex-7"></a>
### Exercise 10.7

Why are there two minimizing elliptic arcs between perpendicular representatives?

<details>
<summary>Hint 1</summary>

Both q and -q are at spherical distance pi/2 from p.

</details>

<details>
<summary>Hint 2</summary>

Their minor arcs project differently.

</details>

<details>
<summary>Full solution</summary>

The minor arcs p to q and p to -q both have length pi/2 and therefore attain the quotient distance. Their interiors contain distinct antipodal classes, so they give different elliptic path images. This is an exceptional maximal-distance case; shorter positive quotient distances select one representative sign.

</details>

<a id="elliptic-geometry-ex-8"></a>
### Exercise 10.8

Compute a radius-2 spherical triangle area for angles pi/2,pi/3,pi/4.

<details>
<summary>Hint 1</summary>

First find angular excess.

</details>

<details>
<summary>Hint 2</summary>

Scale unit-sphere area by four.

</details>

<details>
<summary>Full solution</summary>

The angle sum is 13pi/12, so excess is pi/12. Multiplying by R²=4 gives area pi/3. The formula presupposes the stated nondegenerate convex minor-arc triangle, rather than an arbitrary three-arc loop.

</details>

<a id="elliptic-geometry-ex-9"></a>
### Exercise 10.9

Derive the spherical sine law from the scalar triple product.

<details>
<summary>Hint 1</summary>

Compute the same determinant at each vertex.

</details>

<details>
<summary>Hint 2</summary>

Divide by the three positive side sines.

</details>

<details>
<summary>Full solution</summary>

The absolute determinant D equals sin b sin c sin A and its cyclic versions. Dividing by sin a sin b sin c gives sin A/sin a=sin B/sin b=sin C/sin c. Taking reciprocals gives the usual law; all quantities are positive in the stated scope.

</details>

<a id="elliptic-geometry-ex-10"></a>
### Exercise 10.10

Explain why elliptic geometry does not alone prove independence of Euclid's parallel postulate from the neutral axioms.

<details>
<summary>Hint 1</summary>

It changes more than parallel behavior.

</details>

<details>
<summary>Hint 2</summary>

Inspect ordered lines and raw-sphere incidence.

</details>

<details>
<summary>Full solution</summary>

The elliptic quotient has compact circular lines and no global neutral betweenness, while the raw sphere also lacks unique great-circle joins for antipodal pairs. Thus neither retains the entire neutral axiom package. A relative independence argument needs a model, such as the hyperbolic disk, that retains that package while changing parallel uniqueness.

</details>

## Forward and backward connections

This chapter completes the trio of constant-curvature geometries: Euclidean (zero), hyperbolic (negative), and elliptic (positive). It follows **Hyperbolic Geometry** and precedes **Projective Planes**, where the incidence axioms of elliptic geometry are embedded in a larger axiomatic system. The spherical model reappears in **Geometric Measure Theory** when surface area is discussed, and the angle-excess formula is a special case of the Gauss–Bonnet theorem.

## Sources

The model, vector identities, and lune proof are supplied directly. The preserved seed [Spherical Geometry](../conics-solids-projections/spherical-geometry.md) remains available, with its own navigation examples unchanged. Related full curvature context is [Gauss-Bonnet](../differential-geometry-curves-surfaces/gauss-bonnet.md); this chapter's elementary lune proof does not require that course.

## Summary

The sphere and its antipodal quotient share local spherical measurements but have different global incidence and distances. The quotient metric is arccos of the absolute dot product and satisfies the metric axioms. Vector calculations prove the spherical trigonometric laws, and a complete lune count proves the area excess formula. Elliptic geometry changes neutral order and incidence as well as parallels, so it must not be used as a neutral countermodel.
