
# Stereographic Projection

Stereographic projection maps a sphere onto a plane by drawing lines from a fixed point on the sphere to the plane. It is one of the most important projections in mathematics because it preserves angles and maps spherical circles to plane circles or lines. This chapter defines the projection precisely, proves its key properties, and explores its applications in complex analysis, cartography, and the visualization of spheres.

This L2 chapter assumes vectors, elementary circle equations and differentiation. Its conformality proof uses tangent vectors and the induced Euclidean inner product; its area example also uses an elementary polar-coordinate integral. All circles below are nondegenerate unless a limiting case is explicitly named. The sphere has radius one and the target is the equatorial plane, so scale formulas belong to that convention.

## Definition and formulas

Consider the unit sphere $x^{2}+y^{2}+z^{2}=1$ and the plane $z=0$. Let the north pole be $N=(0,0,1)$. The stereographic projection from $N$ maps a point $P=(x,y,z)$ on the sphere (with $P\neq N$) to the point $P'$ where the line $NP$ meets the plane $z=0$.

Parametrize the line $NP$ as $N+t(P-N)=(tx,ty,1+t(z-1))$. This meets $z=0$ when $1+t(z-1)=0$, so $t=1/(1-z)$. The projection is

$$P'=\left(\frac{x}{1-z},\frac{y}{1-z},0\right).$$

In the plane, we write the image as $(X,Y)$ with

$$X=\frac{x}{1-z},\qquad Y=\frac{y}{1-z}.$$

The inverse map, from the plane to the sphere, is

$$x=\frac{2X}{1+X^{2}+Y^{2}},\qquad y=\frac{2Y}{1+X^{2}+Y^{2}},\qquad z=\frac{X^{2}+Y^{2}-1}{X^{2}+Y^{2}+1}.$$

The north pole $N$ itself has no finite image. Adjoining a single point to the whole plane supplies its image, as explained below. This is not the projective plane's full line of direction points.

To derive and justify the inverse rather than guess it, join the north pole to a plane point $(X,Y,0)$. Points on that line are $(tX,tY,1-t)$. The unit-sphere equation becomes $t((1+X^2+Y^2)t-2)=0$. The first solution gives the projection pole; the other is $t=2/(1+X^2+Y^2)$, giving the displayed inverse. Its denominator is positive for every finite plane point, and its final coordinate is strictly less than one. Substitution shows that its squared norm is one: the numerator is $4r^2+(r^2-1)^2=(r^2+1)^2$, where r is the planar radius. Its projection is the original plane point. Conversely every sphere point other than the north pole gives the same unique second intersection, proving both injectivity and surjectivity.

## Preservation of circles

A fundamental property of stereographic projection is that it maps every circle on the sphere to a circle or line in the plane, and conversely every circle or line in the plane corresponds to a circle on the sphere.

Circles on the sphere that pass through the north pole project to straight lines in the plane. Circles that do not pass through $N$ project to ordinary circles. This is because a circle on the sphere is the intersection of the sphere with a plane, and the projection of this intersection is a conic section in the plane. The calculation below shows that this conic is always a generalized circle: an ordinary circle or a line.

### Complete circle-and-line proof

A spherical circle is the intersection with a plane $ax+by+cz=d$, where the coefficient vector is nonzero and $|d|<\sqrt{a^2+b^2+c^2}$. The strict inequality excludes a tangent plane's singleton and an exterior plane's empty intersection. Substituting the inverse and multiplying by its positive denominator gives

$$(c-d)(X^2+Y^2)+2aX+2bY-(c+d)=0.$$

If c equals d, the plane contains the north pole. The strict circle condition then forces a and b not both zero, so the equation is a genuine line, not a constant or an empty condition. The image omits the pole itself but includes every finite point of that line. If c differs from d, complete the squares. The image circle has center $(-a/(c-d),-b/(c-d))$ and squared radius

$$\frac{a^2+b^2+c^2-d^2}{(c-d)^2}>0.$$

Positivity follows from the original plane condition, completing the proof that the apparent circle is a real nondegenerate one. The forward and inverse maps are bijections on their stated domains, so this substitution gives equality of loci rather than just inclusion.

For the converse, a plane circle written $X^2+Y^2+2uX+2vY+w=0$ has positive squared radius $u^2+v^2-w$. Set $a=u$, $b=v$, $c=(1-w)/2$ and $d=-(1+w)/2$. The transformed equation is exactly the proposed circle, and the spherical-circle inequality holds because its difference of squared sides is that positive radius squared. A plane line $lX+mY+n=0$, with l and m not both zero, instead comes from $a=l$, $b=m$, $c=d=-n$. Thus every circle or line has the stated spherical preimage. Tangent and exterior plane intersections remain separate degenerate cases, not counterexamples to the theorem.

### Worked example 1: a great circle need not look straight

Intersect the sphere with $x+z=0$. This plane passes through the center, giving a great circle, but it does not contain the north pole. Its image satisfies $X^2+Y^2+2X-1=0$, a circle centered at $(-1,0)$ with radius the square root of two. In contrast, the vertical plane y zero contains the pole and gives the straight line Y zero. The distinction is passage through the projection pole, not whether the spherical circle is great or small. A spherical geodesic can therefore look curved in this picture even though angles remain correct.

## Conformality

Stereographic projection is conformal: it preserves angles between curves. If two curves on the sphere intersect at angle $\theta$, their images in the plane also intersect at angle $\theta$.

### Complete tangent-metric proof

Write q for the plane vector, put $A=1+|q|^2$, and write the inverse map as

$$F(q)=\left(\frac{2q}{A},\frac{|q|^2-1}{A}\right).$$

For a plane tangent vector h, ordinary differentiation gives

$$dF_q(h)=\left(\frac{2h}{A}-\frac{4q(q\cdot h)}{A^2},
\frac{4(q\cdot h)}{A^2}\right).$$

Squaring its Euclidean length produces a first term $4|h|^2/A^2$. The remaining terms are

$$-\frac{16(q\cdot h)^2}{A^3}
+\frac{16|q|^2(q\cdot h)^2}{A^4}
+\frac{16(q\cdot h)^2}{A^4}=0,$$

because the final two numerators combine to A times the common square. Polarizing this length identity yields

$$dF_q(h)\cdot dF_q(k)=\frac4{A^2}h\cdot k.$$

The factor is strictly positive, so the differential is injective. For two nonzero tangent vectors, divide their inner product by the product of their lengths. The common positive factor cancels, preserving the cosine of their angle and therefore the angle in the interval from zero to pi. Applying the chain rule to regular intersecting curves proves conformality of the inverse; its invertible differential proves conformality of the projection as well. A curve with zero derivative needs a separately defined tangent before a tangent-angle assertion can be made.

In differential notation the same calculation is the metric identity

$$ds^2=\frac4{(1+X^2+Y^2)^2}(dX^2+dY^2).$$

This is a proved identity, not an assumed conformal ansatz. It also shows that length scale varies with position. Infinitesimal planar length is multiplied by $2/A$ under F and spherical length by $A/2$ under projection. At the south pole the latter factor is one half, at the equator it is one, and it diverges toward the omitted north pole. The equatorial target convention is responsible for these particular factors.

### Worked example 2: preserved angles do not give preserved distances

Plane points $(1,0)$ and $(3,0)$ map to sphere points $(1,0,0)$ and $(3/5,0,4/5)$. Their plane distance is two. Their shorter spherical distance is the angle with cosine three fifths, using the unit-sphere distance formula from the linked spherical geometry chapter. There is no reason for those two distances to agree. Already the inverse length factors at the two plane points are one and one fifth, so one constant rescaling cannot repair the discrepancy over the whole plane. Conformality controls tangent angles at each common point; it is not a global distance theorem.

### Worked example 3: disk area and a spherical cap

The differential multiplies both perpendicular tangent lengths by $2/A$, so its area factor is $4/A^2$. The plane disk of radius R maps to the south-pole cap ending at height $(R^2-1)/(R^2+1)$. Integrating its area factor in polar coordinates gives

$$\int_0^R\frac{8\pi r}{(1+r^2)^2}\,dr
=\frac{4\pi R^2}{1+R^2}.$$

At R one this is the area of a hemisphere, two pi. As R increases without bound, it tends to four pi, the area of the sphere with its missing single point restored. The ordinary disk area instead grows without bound. Equal infinitesimal angles coexist with a dramatically changing area ratio. The limiting point has zero surface area; no positive-area piece was discarded in the calculation.

## One added point is different from a projective infinity line

For a sphere point away from the north pole the formulas imply

$$X^2+Y^2=\frac{1+z}{1-z}.$$

Thus approaching the north pole is equivalent to escaping every bounded disk in the plane, regardless of direction. Declaring complements of sufficiently large closed disks to be neighborhoods of one added point gives the corresponding one-point compactification. The inverse formulas extend continuously there by mapping that point to the north pole. Continuity in the other direction follows from the same radius identity and the sphere coordinates. This is the spherical compactification used in complex analysis.

In the preceding projective chapter, different affine line directions instead produced different points on an entire infinity line. Those two completions serve different purposes. Stereographic projection should not be described as an invertible projective transformation of a plane: its quadratic inverse formulas and its treatment of all escaping directions distinguish the constructions. It is a central projection restricted to a sphere, with the specific circle and metric properties proved here.

## Applications

### Complex analysis

Identifying the plane with $\mathbb{C}$ via $Z=X+iY$, stereographic projection gives a bijection between the sphere (the Riemann sphere) and $\mathbb{C}\cup\{\infty\}$. This gives a compact target for meromorphic functions. At a pole, using the reciprocal target coordinate makes the map regular as a sphere-valued map; the same point remains a pole of its complex-valued expression. A meromorphic function on the plane need not extend across the domain point at infinity: the exponential is a standard essential-singularity example. Such extension statements require their own complex-analysis hypotheses.

### Cartography

The stereographic projection is used for polar maps because it preserves local angles. With projection from the north pole, distortion is least near the south pole, which maps to the plane origin, and grows without bound as points approach the north projection pole.

### Crystallography

In crystallography, the stereographic projection is used to represent the orientations of crystal faces and symmetry axes. Conformality preserves angles between intersecting represented curves. It does not preserve the spherical central-angle distance between two separated crystal directions, so such distances must be recovered with the spherical formulas.

## Common errors

- **Confusing the projection point.** Stereographic projection is from a point on the sphere, not from the center. A projection from the center is gnomonic, not stereographic, and does not preserve circles or angles.
- **Forgetting the point at infinity.** The north pole maps to infinity; the plane must be compactified to include this point.
- **Assuming area is preserved.** Stereographic projection is conformal, not equal-area. Scale is smallest at the point opposite the projection pole and diverges near the omitted projection pole.
- **Using the wrong inverse formula.** The inverse formulas given above are for projection from the north pole onto the equatorial plane. Projection from the south pole or onto a different plane requires modified formulas.

## Practice exercises with solutions

### Exercise 1

<span id="conics-stereographic-ex-1"></span>
Find the stereographic projection of the point $(1/2,1/2,1/\sqrt{2})$ on the unit sphere from the north pole.

<details><summary>Hint 1</summary>

Use the north-pole denominator one minus z.

</details>

<details><summary>Hint 2</summary>

Rationalize the denominator before giving an approximate value.

</details>

<details><summary>Full solution</summary>

**Solution.** With $x=1/2$, $y=1/2$, $z=1/\sqrt{2}\approx 0.7071$:

$$X=\frac{1/2}{1-1/\sqrt{2}}=\frac{1}{2-\sqrt{2}}=\frac{2+\sqrt{2}}{2}=1+\frac{\sqrt{2}}{2}\approx 1.7071,$$

$$Y=\frac{1/2}{1-1/\sqrt{2}}=1+\frac{\sqrt{2}}{2}\approx 1.7071.$$

</details>

### Exercise 2

<span id="conics-stereographic-ex-2"></span>
Find the point on the unit sphere that projects stereographically from the north pole to $(1,0)$ in the plane.

<details><summary>Hint 1</summary>

Insert the plane coordinates into the inverse, whose denominator is positive.

</details>

<details><summary>Hint 2</summary>

At plane radius one the sphere coordinate z is zero.

</details>

<details><summary>Full solution</summary>

**Solution.** Using the inverse formulas with $X=1$, $Y=0$:

$$x=\frac{2}{1+1}=1,\qquad y=0,\qquad z=\frac{1-1}{1+1}=0.$$

The point is $(1,0,0)$, the equator point on the positive x-axis.

</details>

### Exercise 3

<span id="conics-stereographic-ex-3"></span>
Show that the equator $z=0$ on the unit sphere projects to the unit circle $X^{2}+Y^{2}=1$.

<details><summary>Hint 1</summary>

Use the projection formula with z zero.

</details>

<details><summary>Hint 2</summary>

Use the inverse to prove the converse inclusion, not just one direction.

</details>

<details><summary>Full solution</summary>

**Solution.** For $z=0$, $X=x$ and $Y=y$ with $x^{2}+y^{2}=1$. So $X^{2}+Y^{2}=1$. Conversely, any point on $X^{2}+Y^{2}=1$ has $z=(1-1)/(1+1)=0$, so it lies on the equator.

</details>

### Exercise 4

<span id="conics-stereographic-ex-4"></span>
For $0<\theta<\pi$, a nondegenerate circle of latitude at colatitude $\theta$ (angle from the north pole) on the unit sphere has equation $z=\cos\theta$. Show that its stereographic projection is a circle centered at the origin with radius $\cot(\theta/2)$.

<details><summary>Hint 1</summary>

The spherical horizontal radius is sine of the colatitude.

</details>

<details><summary>Hint 2</summary>

Divide it by one minus cosine and apply the half-angle identity.

</details>

<details><summary>Full solution</summary>

**Solution.** For points on the circle of latitude, $z=\cos\theta$ is constant. The projection is $(X,Y)=(x/(1-\cos\theta),y/(1-\cos\theta))$. Since $x^{2}+y^{2}=\sin^{2}\theta$, we have $X^{2}+Y^{2}=\sin^{2}\theta/(1-\cos\theta)^{2}$. Using the half-angle identity:

$$\frac{\sin^{2}\theta}{(1-\cos\theta)^{2}}=\frac{4\sin^{2}(\theta/2)\cos^{2}(\theta/2)}{4\sin^{4}(\theta/2)}=\frac{\cos^{2}(\theta/2)}{\sin^{2}(\theta/2)}=\cot^{2}\frac{\theta}{2}.$$

So the image is a circle of radius $\cot(\theta/2)$ centered at the origin.

</details>

### Exercise 5

<span id="conics-stereographic-ex-5"></span>
Find the stereographic projection of the south pole $(0,0,-1)$.

<details><summary>Hint 1</summary>

The denominator is two at the south pole.

</details>

<details><summary>Hint 2</summary>

Both horizontal sphere coordinates vanish there.

</details>

<details><summary>Full solution</summary>

**Solution.** With $x=0$, $y=0$, $z=-1$:

$$X=\frac{0}{1-(-1)}=0,\qquad Y=\frac{0}{1-(-1)}=0.$$

The south pole projects to the origin.

</details>

### Exercise 6

<span id="conics-stereographic-ex-6"></span>
A great circle on the sphere makes angle $\phi$ with the equatorial plane. Show that its stereographic projection is a line through the origin if $\phi=\pi/2$, and a circle otherwise.

<details><summary>Hint 1</summary>

A great-circle plane passes through the sphere center.

</details>

<details><summary>Hint 2</summary>

It contains the north pole exactly when it is vertical.

</details>

<details><summary>Full solution</summary>

**Solution.** A great circle is the intersection of the sphere with a plane through the origin. If the plane is vertical (contains the z-axis), it makes angle $\pi/2$ with the equatorial plane and passes through the north pole, so its projection is a line through the origin. If the plane is not vertical, it does not pass through the north pole, and its projection is a circle by the circle-preserving property.

</details>


### Exercise 7

<span id="conics-stereographic-ex-7"></span>

Find the spherical circle whose finite stereographic image is $X+2Y=3$. Prove that the preimage is nondegenerate and passes through the projection pole.

<details><summary>Hint 1</summary>

For a line, take equal plane coefficients c and d in the general circle equation.

</details>

<details><summary>Hint 2</summary>

The plane $x+2y+3z=3$ gives twice the proposed line equation after substitution.

</details>

<details><summary>Full solution</summary>

Intersect the sphere with $x+2y+3z=3$. The plane coefficient vector has length the square root of fourteen, greater than three, so it cuts a genuine circle rather than a tangent point. At the north pole its left side is three, so the circle contains that pole. The transformed equation is $2X+4Y-6=0$, exactly the required line. The finite line corresponds to the circle minus its north-pole point; after adding the single plane infinity point the entire circle is restored. The infinite point here is not a direction-dependent projective point.

</details>

### Exercise 8

<span id="conics-stereographic-ex-8"></span>

Apply the substituted plane equation to z equal to one, z equal to minus one, and z equal to two. Explain why none contradicts the nondegenerate-circle theorem.

<details><summary>Hint 1</summary>

Use a and b zero and c one, with the stated value of d.

</details>

<details><summary>Hint 2</summary>

These planes give respectively the projection pole alone, the opposite pole alone, and no sphere points.

</details>

<details><summary>Full solution</summary>

At z one the transformed equation is the impossible constant minus two equal to zero. The original intersection is the omitted north pole, so its finite image is empty. At z minus one the equation is twice the squared planar radius equal to zero, giving just the origin, the south-pole image. At z two it is minus the squared planar radius minus three equal to zero, again empty, agreeing with an exterior plane's lack of sphere intersections. Each fails the strict inequality required for a nondegenerate spherical circle. The theorem never asserted that tangent or exterior planes produce ordinary circles or lines.

</details>

### Exercise 9

<span id="conics-stereographic-ex-9"></span>

At the plane point $(2,1)$, compute the inverse projection's infinitesimal length and area factors and the projection's factors at the corresponding sphere point. Decide whether a right angle is preserved there.

<details><summary>Hint 1</summary>

The quantity one plus the squared planar radius is six.

</details>

<details><summary>Hint 2</summary>

Length scales by two divided by that quantity under the inverse; area scales by the square of the length factor.

</details>

<details><summary>Full solution</summary>

The inverse length factor is one third and its area factor one ninth. The forward projection therefore has factors three and nine at the corresponding sphere point. A right angle is preserved because the same positive length factor multiplies both tangent directions, and their inner product has the squared common factor. An area enlarged ninefold can still have exactly the same tangent angles. These are differential factors at one point; multiplying a finite region's area by nine would require the factor to be constant across that region, which it is not.

</details>

### Exercise 10

<span id="conics-stereographic-ex-10"></span>

Let positive t tend to infinity along the two plane paths $(t,0)$ and $(0,t)$. Determine both sphere limits. Compare with the two paths' direction points in the real projective completion of the affine plane.

<details><summary>Hint 1</summary>

The inverse horizontal coordinates have numerator linear in t and denominator quadratic in t.

</details>

<details><summary>Hint 2</summary>

For projective direction limits, rescale $[t:0:1]$ and $[0:t:1]$ by one divided by t.

</details>

<details><summary>Full solution</summary>

Both inverse paths tend to $(0,0,1)$: their horizontal coordinates tend to zero and their vertical coordinate tends to one. In the projective completion the paths instead approach $[1:0:0]$ and $[0:1:0]$, two distinct points. The spherical compactification identifies every escaping direction with one added point, whereas the projective completion retains direction information on an infinity line. Their different limits demonstrate why the two constructions cannot be interchanged in a proof or a projection diagram.

</details>

## Looking backward and forward

This chapter established stereographic projection as a conformal, circle-preserving map between the sphere and the plane. Its preservation of angles makes it invaluable in complex analysis and navigation, while its mapping of circles to circles gives it a natural role in the study of spherical geometry.

The next chapter, **Descriptive Geometry**, studies paired spatial views and how constructions recover lengths that a single picture can distort. Map Projections follows later and compares conformal, equal-area and other criteria under their own stated domains.

## Source and scope

The original Atlas chapter, including all six original exercise statements and solutions, is preserved and expanded here. The inverse, complete circle-and-line argument and differentiated metric proof are supplied explicitly rather than retained as sketches. New examples and four further supported exercises develop the commissioned L2 scope. The sphere distance formula is a named input from Elliptic and Spherical Geometry; complex meromorphic extension questions belong to the separate Complex Analysis book. No chart or compactification equivalence is asserted beyond the specific constructions proved above.
