
# Applications and Synthesis

This L2 applications chapter brings together the geometric ideas developed throughout the book into extended investigations and applications. Each problem requires concepts from multiple chapters and asks you to synthesize spatial reasoning, algebraic computation, and projective insight. The chapter also includes a set of cumulative exercises with full solutions, serving as a review of the entire volume.

The models below retain their mathematical assumptions. Orbital motion uses an ideal Newtonian two-body force, reflector arguments use exact specular rays, transmitter geometry uses synchronized signals in a constant-speed medium, and routes use a round sphere. Differentiation and elementary integration support the derivations. The supplied numerical scenarios are exercises in those models, not observations or navigation instructions. Geometry can certify a consequence of a model without certifying that every physical effect has been represented.

## Investigation 1: Orbital mechanics

In the ideal Newtonian attractive two-body problem with nonradial relative motion and potential zero at infinity, the relative separation vector follows a conic with a focus at the relative origin. Its gravitational parameter is $\mu=G(m_1+m_2)$. In the fixed-central-mass or test-particle approximation, the attracting body occupies the focus and $\mu\approx GM$ because the orbiting mass is neglected. Bound Keplerian orbits are ellipses, while zero- and positive-energy trajectories are parabolic and hyperbolic. The eccentricity $e$ determines the type:

- $0\leq e<1$: bound elliptical orbit;
- $e=1$: parabolic escape trajectory;
- $e>1$: hyperbolic flyby.

For an elliptical relative orbit with semimajor axis $a$, the orbital period $T$ satisfies Kepler's third law: $T^{2}\propto a^{3}$. The specific mechanical energy is $\varepsilon=-\mu/(2a)$, with $\mu=G(m_1+m_2)$; the satellite calculation below uses the standard Earth test-particle value.

### Worked example 1: derive the conic and period from the force model

Write r for positive separation and h for nonzero specific angular momentum. The attractive acceleration is $-\mu\mathbf r/r^3$. Its torque is zero, so the motion stays in one plane and $h=r^2\dot\theta$ is constant after choosing its orientation. In polar coordinates the radial equation is $\ddot r-r\dot\theta^2=-\mu/r^2$. Put $u=1/r$ and differentiate with respect to theta. Then $\dot r=-hu'$ and $\ddot r=-h^2u^2u''$. Substitution gives

$$u''+u=\frac\mu{h^2},\qquad
r=\frac{p}{1+e\cos(\theta-\theta_0)},\qquad p=\frac{h^2}{\mu}.$$

The homogeneous sine/cosine constants combine into nonnegative eccentricity e and a direction angle. Only portions with positive denominator describe positive separation. This is the focus-polar conic form from the earlier coordinate chapter. Nonzero angular momentum excludes radial collision paths, which cannot simply be classified by these divisions.

The conserved specific energy is one half speed squared minus mu over r. Substituting u and its derivative gives $\varepsilon=\mu^2(e^2-1)/(2h^2)$. Thus its sign distinguishes the ellipse, parabola and hyperbola under precisely this force model. For an ellipse the focal relations give $p=a(1-e^2)$ and $b=a\sqrt{1-e^2}$. Areal speed is h over two, so one traversal takes the ellipse area divided by that speed:

$$T=\frac{2\pi ab}{h}=2\pi\sqrt{\frac{a^3}{\mu}}.$$

At the nearest and farthest points, the focal distances are $a(1-e)$ and $a(1+e)$. Adding and subtracting recovers the semimajor-axis and eccentricity formulas used in the satellite problem. This derivation separates geometry from force: an ellipse drawn on paper does not acquire a period until a dynamical law supplies its time parametrization. Perturbations, drag and noncentral forces fall outside the stated calculation.

### Problem

A satellite has perigee altitude $200$ km and apogee altitude $1000$ km above Earth's surface. Earth radius is $R_{E}\approx 6371$ km. Find the semimajor axis, eccentricity, and orbital period.

**Solution.** Perigee distance $r_{p}=6371+200=6571$ km. Apogee distance $r_{a}=6371+1000=7371$ km. The semimajor axis is $a=(r_{p}+r_{a})/2=(6571+7371)/2=6971$ km. The eccentricity is $e=(r_{a}-r_{p})/(r_{a}+r_{p})=(7371-6571)/(7371+6571)=800/13942\approx 0.0574$. Using $\mu\approx 3.986\times 10^{5}$ km$^{3}$/s$^{2}$, the period is $T=2\pi\sqrt{a^{3}/\mu}\approx 2\pi\sqrt{(6971)^{3}/3.986\times 10^{5}}\approx 5790$ s $\approx 96.5$ min.

## Investigation 2: GPS and hyperbolas

GPS receivers ordinarily solve from satellite pseudoranges while simultaneously estimating the receiver's unknown clock bias. A difference of arrival times between two synchronized transmitters is a related TDOA model: in two dimensions a fixed signed range difference selects a hyperbola branch, and in three dimensions it selects a hyperboloid sheet. This simplified investigation studies that TDOA geometry rather than claiming it is the full GPS observation model.

### Worked example 2: restore the branch after squaring

Let $r_L=\sqrt{(x+d)^2+y^2}$ and $r_R=\sqrt{(x-d)^2+y^2}$. Choose the signed difference $r_L-r_R=2a$, with $0<a<d$. Squaring their difference using $r_L^2-r_R^2=4dx$ gives $r_R=dx/a-a$. Squaring this last equation and simplifying yields

$$\frac{x^2}{a^2}-\frac{y^2}{d^2-a^2}=1.$$

The signed equation forces positive x and the positive hyperbola branch has $x\geq a$. Conversely on that branch the proposed value $dx/a-a$ is at least d minus a, strictly positive. Its square agrees with the squared right distance, so the unsquared equality is valid. Adding twice a then gives the correct positive left distance. This proves the converse with its sign condition and excludes extraneous points introduced by squaring. The negative branch corresponds to the opposite signed range difference.

Triangle inequality bounds every absolute range difference by twice d. A zero difference gives the perpendicular bisector, equality with twice d gives limiting axial rays, and a larger difference has no solution. These boundary cases are not ordinary nondegenerate hyperbolas. In three dimensions replace the squared transverse coordinate by a sum of two squares, obtaining a two-sheet hyperboloid and the analogous signed sheet choice.

Time difference converts to range difference only after specifying a signal speed and synchronized transmitter times. An unknown common receiver clock offset cancels in a correctly formed simultaneous difference, but independent timing offsets do not. Even two exact signed ranges generally leave a locus rather than one receiver position; further independent observations and consistency checks are needed. That is why this geometric model cannot stand in for all GPS pseudorange equations.

### Problem

Two synchronized transmitters are at $(-d,0)$ and $(d,0)$ with $0<a<d$. A receiver measures an absolute path difference $2a$. Show that its possible positions lie on $x^{2}/a^{2}-y^{2}/(d^{2}-a^{2})=1$, and explain what a signed measurement selects.

**Solution.** The absolute difference $|r_2-r_1|=2a$, with $0<a<d$, defines the two branches of a nondegenerate hyperbola. Here $c=d$ and $b^2=c^2-a^2=d^2-a^2$, giving the displayed equation. Retaining the sign of $r_2-r_1$ selects one branch; squaring without restoring that sign returns both.

## Investigation 3: Reflecting telescopes

A parabolic reflector focuses parallel rays to a single point. A hyperbolic reflector with one focus coincident with the parabola's focus can redirect the converging beam to a more accessible secondary focus. This is the ideal geometric arrangement underlying a Cassegrain-type reflector, with the appropriate hyperboloid sheet and mirror orientation specified.

### Worked example 3: prove the paraboloid reflection law

Take $z=(x^2+y^2)/(4p)$ with p positive and focus $F=(0,0,p)$. At a surface point P the distance to the focus is $L=z+p$, since squaring both sides uses $x^2+y^2=4pz$. A normal vector is $n=(-x/(2p),-y/(2p),1)$ and its squared length is L over p. An incoming axial unit direction is $v=(0,0,-1)$. The specular reflected direction is therefore

$$v-2\frac{v\cdot n}{|n|^2}n
=\left(-\frac xL,-\frac yL,\frac{p-z}{L}\right)
=\frac{F-P}{|F-P|}.$$

Every incident parallel ray thus reflects toward the focus in the exact smooth-mirror model. The proof includes the vertex and does not depend on a suggestive cross-section drawing. Rotational symmetry extends the meridian picture to all incident axial rays.

For a hyperboloid defined by the difference of two focal distances, differentiating that difference gives a normal proportional to the difference of the corresponding unit focal vectors. Unit incoming and outgoing directions with the same tangential components and opposite normal components satisfy the same reflection law. In the chosen converging-beam orientation this redirects a ray aimed at one focus toward the other. It does not fix a unique mirror among all confocal hyperboloids: their transverse parameter still controls the surface shape. An extended source, imperfect surface or nonaxial incidence needs additional optical analysis beyond this ideal ray theorem.

### Problem

A paraboloid has focal length $p=5$ m. A hyperboloid is to have one focus at the parabola's focus and the other $2$ m behind the vertex. Can these focus locations alone determine its eccentricity? Identify the missing datum.

**Solution.** The foci at $5$ and $-2$ m fix the center and $c=7/2$ m. The reflection property holds for every hyperbola with these foci, but $e=c/a$ also depends on its semitransverse axis $a$. A vertex location, mirror diameter at a specified axial station, or equivalent shape datum is missing. The focus locations imply only $0<a<c$ and hence $e>1$; they do not determine a numerical eccentricity.

## Investigation 4: Map projection for navigation

A great-circle route is the shortest path between two points on a sphere, but it is not a straight line on most map projections. The Mercator projection preserves rhumb lines (paths of constant bearing), which are convenient for navigation but not shortest. The gnomonic projection maps great circles to straight lines, making it useful for route planning.

For the bearing formula, represent the endpoints by unit sphere vectors. At a nonpolar start, local east and north form an orthonormal tangent basis. Project the target vector into that tangent plane by subtracting its component along the start vector. If the endpoints are distinct and not antipodal, the normalized result is the unique initial shorter-great-circle direction. Its east component is $\sin\Delta\lambda\cos\phi_2$ and its north component is $\cos\phi_1\sin\phi_2-\sin\phi_1\cos\phi_2\cos\Delta\lambda$. Taking the quadrant-aware angle of these two components gives the formula below. The great-circle distance is R times the arccosine of the endpoints' dot product, as proved in Elliptic and Spherical Geometry.

At identical endpoints there is no nonzero displacement tangent. At antipodal endpoints there are many minimizing great circles, so an initial bearing is not unique. At a pole the east/north basis needs an explicit longitude convention. These exclusions are part of a bearing calculation, not merely numerical inconveniences. The London/New York exercise avoids all three cases and retains its earlier illustrative numerical values.

### Problem

Find the great-circle route from London ($51.5^{\circ}$N, $0^{\circ}$) to New York ($40.7^{\circ}$N, $74^{\circ}$W). Compute the initial bearing and the total distance.

**Solution.** Take east-positive longitude, so $\Delta\lambda=\lambda_2-\lambda_1=-74^{\circ}$. The spherical law of cosines gives $\sigma\approx0.875745$ rad and, for $R=6371$ km, $d=R\sigma\approx5579.37$ km. To fix the bearing quadrant, use
$$\beta=\operatorname{atan2}\!\left(\sin\Delta\lambda\cos\phi_2,\;\cos\phi_1\sin\phi_2-\sin\phi_1\cos\phi_2\cos\Delta\lambda\right).$$
This gives $\beta\approx-71.602^{\circ}$, or $288.398^{\circ}$ clockwise from north.

## Cumulative exercises with solutions

### Exercise 1

<span id="conics-applications-ex-1"></span>
A right circular cone has half-angle $\alpha=30^{\circ}$. A plane missing the cone vertex cuts it at angle $\beta=60^{\circ}$ to the axis. Classify the section and find its eccentricity.

<details><summary>Hint 1</summary>

The slicing plane misses the vertex and its axis angle exceeds the cone half-angle.

</details>

<details><summary>Hint 2</summary>

Use the commissioned cosine ratio with those angle conventions.

</details>

<details><summary>Full solution</summary>

**Solution.** Since $\beta>\alpha$, the section is an ellipse. The eccentricity of a conic section of a cone is $e=\cos\beta/\cos\alpha=\cos 60^{\circ}/\cos 30^{\circ}=(1/2)/(\sqrt{3}/2)=1/\sqrt{3}\approx 0.577$.

</details>

### Exercise 2

<span id="conics-applications-ex-2"></span>
For $0\le h\le2R$, find the volume and curved surface area of a spherical cap of height $h$ on a sphere of radius $R$.

<details><summary>Hint 1</summary>

Integrate disk sections from height R minus h to R.

</details>

<details><summary>Hint 2</summary>

The curved area follows from the sphere-cap or revolution area formula, excluding its base.

</details>

<details><summary>Full solution</summary>

**Solution.** The volume is $V=\pi h^{2}(R-h/3)$. The surface area (excluding the base) is $A=2\pi Rh$. For $R=1$ and $h=1/2$, $V=\pi(1/4)(1-1/6)=5\pi/24$ and $A=\pi$.

</details>

### Exercise 3

<span id="conics-applications-ex-3"></span>
A quadric surface has equation $x^{2}+2y^{2}+3z^{2}+2xy+2xz+2yz=6$. Find its principal axes and semiaxes lengths.

<details><summary>Hint 1</summary>

Use the symmetric matrix, halving mixed coefficients.

</details>

<details><summary>Hint 2</summary>

Its positive eigenvalues give reciprocal squared semiaxis scales at level six; the orthonormal eigenvectors specify their directions.

</details>

<details><summary>Full solution</summary>

**Solution.** The matrix $Q=\begin{pmatrix}1&1&1\\1&2&1\\1&1&3\end{pmatrix}$ has eigenvalues approximately $0.324869$, $1.460811$, and $4.214320$. Corresponding orthonormal principal-axis directions (signs arbitrary) are approximately
$$(0.88765,-0.42713,-0.17215),\quad(0.23319,0.73924,-0.63178),\quad(0.39711,0.52066,0.75579).$$
In coordinates along these axes, the semiaxes are $\sqrt{6/0.324869}\approx4.30$, $\sqrt{6/1.460811}\approx2.03$, and $\sqrt{6/4.214320}\approx1.19$.

</details>

### Exercise 4

<span id="conics-applications-ex-4"></span>
For $0<\theta<\pi$, show that the stereographic projection of the nondegenerate circle of latitude at colatitude $\theta$ is a circle of radius $\cot(\theta/2)$.

<details><summary>Hint 1</summary>

Divide the horizontal spherical circle radius by one minus its height.

</details>

<details><summary>Hint 2</summary>

Apply the half-angle identity and retain the nondegenerate colatitude interval.

</details>

<details><summary>Full solution</summary>

**Solution.** As proved in Stereographic Projection, $X^{2}+Y^{2}=\sin^{2}\theta/(1-\cos\theta)^{2}=\cot^{2}(\theta/2)$.

</details>

### Exercise 5

<span id="conics-applications-ex-5"></span>
In the unit-curvature hyperbolic plane with Gaussian curvature minus one, a triangle has angles $\pi/3$, $\pi/4$, $\pi/6$. Find its area.

<details><summary>Hint 1</summary>

Use angular defect in the stated curvature-minus-one convention.

</details>

<details><summary>Hint 2</summary>

A different curvature radius would multiply this area by its square.

</details>

<details><summary>Full solution</summary>

**Solution.** The defect is $\pi-(\pi/3+\pi/4+\pi/6)=\pi-(4\pi/12+3\pi/12+2\pi/12)=\pi-9\pi/12=\pi/4$. The area is $\pi/4$.

</details>

### Exercise 6

<span id="conics-applications-ex-6"></span>
An affine transformation maps the unit square to a parallelogram with vertices $(0,0)$, $(2,1)$, $(3,3)$, $(1,2)$. Find the matrix $M$ and verify that the area of the parallelogram is $\lvert\det M\rvert$.

<details><summary>Hint 1</summary>

Use the two ordered edge vectors from the image of the origin as columns.

</details>

<details><summary>Hint 2</summary>

The signed parallelogram area is the two-by-two determinant.

</details>

<details><summary>Full solution</summary>

**Solution.** The edges from $(0,0)$ are $(2,1)$ and $(1,2)$. So $M=\begin{pmatrix}2&1\\1&2\end{pmatrix}$. The area of the parallelogram is $\lvert 2\cdot 2-1\cdot 1\rvert=3$. The determinant is $4-1=3$, confirming the formula.

</details>

### Exercise 7

<span id="conics-applications-ex-7"></span>
Find the cross-ratio $(A,B;C,D)$ for collinear points with coordinates $A=0$, $B=1$, $C=2$, $D=3$.

<details><summary>Hint 1</summary>

Keep the ordered four-point convention fixed.

</details>

<details><summary>Hint 2</summary>

Substitute all four coordinate differences before cancelling.

</details>

<details><summary>Full solution</summary>

**Solution.** $(A,B;C,D)=\frac{(2-0)(3-1)}{(2-1)(3-0)}=\frac{2\cdot 2}{1\cdot 3}=4/3$.

</details>

### Exercise 8

<span id="conics-applications-ex-8"></span>
A paraboloid $z=x^{2}+y^{2}$ is intersected by the plane $z=4$. Identify the cross-section and find its area.

<details><summary>Hint 1</summary>

Substitute the plane height into the paraboloid equation.

</details>

<details><summary>Hint 2</summary>

The intersection is the circumference; the requested area is its enclosed disk area.

</details>

<details><summary>Full solution</summary>

**Solution.** The intersection is $x^{2}+y^{2}=4$, a circle of radius $2$. The area is $4\pi$.

</details>

### Exercise 9

<span id="conics-applications-ex-9"></span>
In the Poincaré half-plane, find the hyperbolic distance between $(0,2)$ and $(3,2)$.

<details><summary>Hint 1</summary>

Use the actual upper-half-plane distance formula at curvature minus one.

</details>

<details><summary>Hint 2</summary>

The square root in the arcosh expression simplifies exactly.

</details>

<details><summary>Full solution</summary>

**Solution.** Using $\cosh d=1+\frac{(3-0)^{2}+(2-2)^{2}}{2\cdot 2\cdot 2}=1+9/8=17/8$. So $d=\operatorname{arccosh}(17/8)=\ln(17/8+\sqrt{289/64-1})=\ln(17/8+15/8)=\ln 4\approx 1.386$.

</details>

### Exercise 10

<span id="conics-applications-ex-10"></span>
A conical frustum has height $h=9$, top radius $r_{1}=2$, and bottom radius $r_{2}=5$. Find its volume and lateral surface area.

<details><summary>Hint 1</summary>

Use the unequal-radius frustum formulas proved earlier.

</details>

<details><summary>Hint 2</summary>

First obtain the slant length from height and radius difference.

</details>

<details><summary>Full solution</summary>

**Solution.** The volume is $V=\frac{\pi h}{3}(r_{1}^{2}+r_{1}r_{2}+r_{2}^{2})=\frac{9\pi}{3}(4+10+25)=3\pi\cdot 39=117\pi$. The slant height is $l=\sqrt{h^{2}+(r_{2}-r_{1})^{2}}=\sqrt{81+9}=\sqrt{90}=3\sqrt{10}$. The lateral area is $\pi(r_{1}+r_{2})l=\pi\cdot 7\cdot 3\sqrt{10}=21\pi\sqrt{10}$.

</details>


## Investigation 5: geometric art as a transfer application

The earlier Geometric Art reading is integrated here as an optional transfer investigation, with its original resource still available. It connects the same coordinate, transformation and projection ideas to symmetry patterns. The wallpaper-group and semiregular-tiling counts, and sufficiency of the hyperbolic regular-tiling inequality, are classical classification/existence inputs rather than new proofs in this chapter. No general surface-classification theorem is claimed. The elementary regular-angle calculation, perspective limits and supported questions below have their stated local arguments.

### Symmetry and symmetry groups

A symmetry of a figure is a rigid motion that maps the figure onto itself. In the plane, the possible symmetries are:

- **Translations:** shifting by a fixed vector.
- **Rotations:** turning about a fixed point by an arbitrary angle; a finite rotation subgroup restricts the angles to multiples of $2\pi/n$.
- **Reflections:** flipping across a line.
- **Glide reflections:** reflecting across a line and then translating parallel to it.

The set of all symmetries of a figure forms a group under composition. For periodic patterns in the plane, there are exactly 17 wallpaper groups, classified by their combinations of translations, rotations, reflections, and glide reflections. Every finite subgroup of planar rigid motions fixing a point is cyclic $C_n$ or dihedral $D_n$. A bounded figure itself can have an infinite compact symmetry group---a disk has all rotations and reflections---so the finite-group qualification is essential.

### Tessellations

A tessellation (or tiling) is a covering of the plane by tiles with disjoint interiors, without gaps. General tilings need not use congruent tiles; regular and semiregular classes impose the congruence and polygon conditions stated below. Here regular means edge-to-edge with congruent regular polygons and a common vertex pattern. The regular tessellations use only one regular polygon:

- Triangles: $6$ meeting at each vertex (interior angle $2\pi/6=\pi/3$).
- Squares: $4$ meeting at each vertex (interior angle $2\pi/4=\pi/2$).
- Hexagons: $3$ meeting at each vertex (interior angle $2\pi/3$).

These are the only regular tessellations because the interior angle of a regular $n$-gon is $(n-2)\pi/n$, and $k$ copies must sum to $2\pi$:

$$k\cdot\frac{(n-2)\pi}{n}=2\pi\implies k=\frac{2n}{n-2}.$$

For $n=3$, $k=6$; for $n=4$, $k=4$; for $n=6$, $k=3$. At n equal to five the required count is ten thirds and is not an integer; for $n>6$, $k<3$, which is impossible. The three permitted cases are realized by their standard triangular, square and hexagonal edge-to-edge constructions.

#### Semiregular tessellations

Semiregular (Archimedean) tessellations use more than one regular polygon, with the same arrangement of polygons at every vertex. There are 8 semiregular tessellations in the plane, including the familiar pattern of octagons and squares.

#### Hyperbolic tessellations

In the hyperbolic plane, the angle sum of a polygon is less than the Euclidean value, so more polygons can meet at a vertex. There are infinitely many regular tessellations $\{p,q\}$ in the hyperbolic plane, where $p$ is the number of sides and $q$ is the number meeting at each vertex, provided $(p-2)(q-2)>4$. For example, $\{7,3\}$ (heptagons, three at each vertex) is a regular hyperbolic tessellation.

### The golden ratio

The golden ratio $\phi=(1+\sqrt{5})/2\approx 1.618$ appears throughout art and architecture. It satisfies $\phi^{2}=\phi+1$ and has the continued fraction expansion $[1;1,1,1,\dots]$. A golden rectangle has sides in ratio $\phi:1$; removing a square leaves a smaller golden rectangle.

The golden ratio is closely related to the regular pentagon. In a regular pentagon with side length $1$, the diagonal has length $\phi$. The pentagram (five-pointed star) formed by the diagonals contains numerous similar triangles with ratio $\phi$.

### Perspective in art

Renaissance artists developed mathematical perspective to create the illusion of depth on a flat surface. The key idea is the picture plane and the vanishing point:

- Parallel lines in space that are not parallel to the picture plane converge to a vanishing point.
- Lines parallel to the picture plane remain parallel in the image.
- The horizon line contains the vanishing points for all horizontal directions.

One-point perspective uses a single vanishing point on the horizon. Two-point perspective uses two vanishing points for horizontal lines in perpendicular directions. Three-point perspective adds a third vanishing point for vertical lines, useful for aerial views of tall buildings.

#### Constructing a perspective grid

To construct a tiled floor in one-point perspective:

1. Draw the horizon line and the central vanishing point $V$.
2. Draw the front edge of the floor as a horizontal line segment.
3. Draw lines from the endpoints of this segment to $V$.
4. Mark equally spaced points on the front edge.
5. Choose a calibrated depth mark or measuring point, then use its diagonal transversal to propagate depth spacing. A vanishing point and front-edge spacing alone do not determine the depth scale.

This construction is equivalent to the perspective projection formula $(X,Y,Z)\mapsto(fX/Z,fY/Z)$ with the picture plane at $z=f$.

### Algorithmic art

Contemporary geometric art often uses algorithms to generate patterns. Key techniques include:

- **Recursion:** subdividing shapes repeatedly, as in the Sierpinski triangle or the Koch snowflake.
- **L-systems:** string-rewriting systems that model plant growth and generate organic-looking forms.
- **Reaction-diffusion:** simulating chemical processes to create spotted and striped patterns.
- **Voronoi diagrams:** partitioning space into regions closest to a set of seed points, creating cell-like patterns.


### Retained geometric-art questions


#### Art Exercise 1 {#conics-art-transfer-ex-1}

Show that the diagonal of a regular pentagon with side length $1$ has length $\phi$.

<details><summary>Hint 1</summary>

Use the cyclic quadrilateral formed by four consecutive pentagon vertices.

</details>

<details><summary>Hint 2</summary>

Ptolemy gives a quadratic equation for the diagonal; take its positive root.

</details>

<details><summary>Full solution</summary>

**Solution.** Let every side be $1$ and every diagonal have length $d$. The vertices $A,B,C,D$ lie on the circumcircle, so Ptolemy's theorem applied to cyclic quadrilateral $ABCD$ gives
$$AC\cdot BD=AB\cdot CD+BC\cdot AD,$$
that is, $d^2=1+d$. The positive solution is $d=(1+\sqrt5)/2=\phi$. (A proof from diagonal-intersection similarities gives the same equation; the non-similar triangles $ABC$ and $ACD$ alone do not.)

</details>

#### Art Exercise 2 {#conics-art-transfer-ex-2}

Find the symmetry group of a regular hexagon.

<details><summary>Hint 1</summary>

The image of one vertex under a symmetry has six choices.

</details>

<details><summary>Hint 2</summary>

After choosing that image, a neighboring vertex has two compatible choices.

</details>

<details><summary>Full solution</summary>

**Solution.** A regular hexagon has $6$ rotational symmetries (including the identity) and $6$ reflection symmetries. Its symmetry group is the dihedral group $D_{6}$, of order $12$.

</details>

#### Art Exercise 3 {#conics-art-transfer-ex-3}

Construct a golden rectangle with short side $1$ using compass and straightedge.

<details><summary>Hint 1</summary>

Use a right triangle with legs one and one half.

</details>

<details><summary>Hint 2</summary>

Add the half-side to its hypotenuse when extending the square base.

</details>

<details><summary>Full solution</summary>

**Solution.**
1. Draw a square $ABCD$ with side $1$.
2. Find the midpoint $M$ of side $AB$.
3. Draw a circle centered at $M$ with radius $MC$.
4. Extend $AB$ to meet this circle at $E$.
5. The rectangle $AEFD$ with $AE=\phi$ is a golden rectangle.

Verification: $MC=\sqrt{(1/2)^{2}+1^{2}}=\sqrt{5}/2$. So $AE=AM+ME=1/2+\sqrt{5}/2=\phi$.

</details>

#### Art Exercise 4 {#conics-art-transfer-ex-4}

Show that the Koch snowflake has finite area but infinite perimeter.

<details><summary>Hint 1</summary>

Each refinement multiplies edge count by four and divides edge length by three.

</details>

<details><summary>Hint 2</summary>

The added triangle areas have geometric ratio four ninths.

</details>

<details><summary>Full solution</summary>

**Solution.** Starting with an equilateral triangle of side $1$, each iteration replaces the middle third of every edge with two sides of an equilateral triangle. The number of edges multiplies by $4$ and the length of each edge divides by $3$. After $n$ iterations, the perimeter is $3\cdot(4/3)^{n}$, which tends to infinity. The area added at step $n$ is $3\cdot 4^{n-1}$ triangles of side $1/3^{n}$, each with area $\sqrt{3}/4\cdot(1/3^{n})^{2}$. The total added area forms a geometric series with ratio $4/9<1$, so the total area is finite.

To justify infinite boundary length rather than merely divergent approximating perimeters, note that each refinement vertex persists on the limiting Koch curve in its ordered traversal. Each finite polygon perimeter is therefore a sum of chord lengths from an ordered finite partition of that curve. Curve length is the supremum of all such sums, so it exceeds every divergent perimeter bound. The convergent added-area series bounds the area of the nested union, proving finiteness independently of boundary rectifiability.

</details>

#### Art Exercise 5 {#conics-art-transfer-ex-5}

Find the vanishing point for lines parallel to the vector $(1,2,3)$ in a perspective projection with picture plane $z=1$ and camera at the origin.

<details><summary>Hint 1</summary>

Project a parametrized spatial line and take its large-depth limit.

</details>

<details><summary>Hint 2</summary>

The nonzero third component determines a finite vanishing point.

</details>

<details><summary>Full solution</summary>

**Solution.** The perspective projection is $(X,Y,Z)\mapsto(X/Z,Y/Z)$ for $Z>0$. A line in direction $(1,2,3)$ through a point $(x_{0},y_{0},z_{0})$ is $(x_{0}+t,y_{0}+2t,z_{0}+3t)$. Its image is $((x_{0}+t)/(z_{0}+3t),(y_{0}+2t)/(z_{0}+3t))$. As $t\to\infty$, this approaches $(1/3,2/3)$. So the vanishing point is $(1/3,2/3)$.

</details>

#### Art Exercise 6 {#conics-art-transfer-ex-6}

A hyperbolic tessellation $\{p,q\}$ has $p=5$ and $q=4$. Verify that it exists in the hyperbolic plane but not in the Euclidean plane.

<details><summary>Hint 1</summary>

The hyperbolic existence criterion is the named classical input in this transfer investigation.

</details>

<details><summary>Hint 2</summary>

For Euclidean impossibility use the sum of four regular-pentagon interior angles.

</details>

<details><summary>Full solution</summary>

**Solution.** The condition for a regular tessellation is $(p-2)(q-2)<4$ for the sphere, $=4$ for the Euclidean plane, and $>4$ for the hyperbolic plane. Here $(5-2)(4-2)=3\cdot 2=6>4$, so the tessellation exists in the hyperbolic plane but not in the Euclidean plane. (In the Euclidean plane, $4$ pentagons would have total angle sum $4\cdot 3\pi/5=12\pi/5>2\pi$, which is impossible.)

</details>

The statements and solutions in this transfer block retain their earlier Geometric Art source, with new staged hints and the explicit Koch-length justification. The original [Geometric Art companion](geometric-art.md) keeps its own exercise anchors and notes.

## Looking backward

This book began with a cone and a plane. From that simple intersection grew the classification of conics, the focal properties that explain reflection and orbits, the surfaces of revolution that model lenses and planets, the non-Euclidean geometries of sphere and hyperboloid, and the projective framework that unifies them all. The tools of descriptive geometry, axonometric and perspective projection, and cartographic transformation connect these abstract ideas to the practical tasks of drawing, building, and navigating.

The investigations in this chapter show that geometry is not a collection of isolated facts but a coherent language for describing space. Whether you are designing a telescope, planning a flight path, or creating a work of art, the geometric principles developed here provide the foundation for precise reasoning and creative exploration.

## Source and scope

The earlier applications manuscript, its four investigation problems and all ten cumulative exercise identities/solutions are retained. New worked derivations prove the ideal-force conic/period law, the reversible signed TDOA reduction and the axial mirror reflection rule. The supplied old numerical examples remain illustrative approximations, not new measurements or executed computations. Sphere and hyperbolic distance/area theorems are named inputs from the actual Geometry model chapters. This chapter concerns mathematical model consequences rather than operational orbital, optical or positioning certification. The model-building project follows as the final required reading.
