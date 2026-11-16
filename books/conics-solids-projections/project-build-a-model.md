
# Project: Build a Model

This chapter is a guided project that integrates the geometric principles developed throughout the book into a single coherent artifact. You will construct a physical or digital model that illustrates conic sections, surfaces of revolution, and projection. This L2 project is designed to be completed over several sessions and includes planning, construction, mathematical comparison and documentation phases. The worked examples below are exact predictions for specified ideal models; they do not claim that a physical artifact was built or a digital model was executed. Use vectors, trigonometry and elementary integration from the earlier chapters, keeping the chosen units and projection plane explicit.

## Project goals

The model should demonstrate at least three of the following concepts:

1. The generation of conic sections by slicing a cone or cylinder.
2. A surface of revolution (sphere, spheroid, paraboloid, hyperboloid, or torus).
3. A map projection (stereographic, Mercator, or azimuthal equidistant).
4. A perspective construction with vanishing points.
5. A tessellation or symmetry pattern on a surface.

The model must be accompanied by a mathematical explanation of each demonstrated concept, including formulas, measurements, and verification calculations.

## Phase 1: Planning

### Choose your medium

Physical models can be built from paper, cardboard, wood, plastic, or 3D-printed parts. Digital models can be created using CAD software, parametric design tools, or programming environments such as Python with Matplotlib, Blender, or OpenSCAD.

### Select your concepts

For a conic-section model, consider a double cone with removable slicing planes. The planes should be marked with the angle they make with the cone axis, and the resulting curves should be identified as circle, ellipse, parabola, or hyperbola.

For a surface-of-revolution model, choose a generating curve and an axis. The surface can be approximated by a stack of disks (for digital models) or by a lathe-turned solid (for physical models). Measure the surface area and volume, and compare with theoretical formulas.

For a map-projection model, create a globe and a flat map. Mark corresponding points on both, and demonstrate how distances, angles, or areas are distorted.

### Make a scale drawing

Before construction, draw a scale plan of your model. Include dimensions, angles, and material thicknesses. For digital models, write a parametric script so that dimensions can be changed easily.

## Phase 2: Construction

### Conic section model

To build a paper double cone:

1. Draw two circular sectors with radius $R$ and arc length $2\pi r$, where $r$ is the base radius of the cone and $R$ is the slant height.
2. The sector angle is $2\pi r/R$ radians.
3. Roll each sector into a cone and tape the edge.
4. Join the two cones at their apexes to form a double cone.
5. Cut planes from stiff paper at angles $\beta=\pi/2$, $\beta$ between $\alpha$ and $\pi/2$, $\beta=\alpha$, and $\beta<\alpha$, where $\alpha$ is the cone half-angle.
6. Slide each plane through the cone and trace the intersection curve.

A finite cone can display only bounded pieces of an unbounded parabola or hyperbola. Record its caps and the part of the slicing plane that remains inside the model; a clipped arc is not a complete conic. For a complete elliptical section that fits inside the caps, measure both semiaxes and compare its eccentricity with the theoretical angle ratio. For a hyperbola, use the underlying equation to determine asymptotes; finite observed segments alone cannot establish the entire unbounded locus.

### Worked example 1: develop a frustum exactly

For a frustum with radii $0\leq r_1<r_2$ and positive height h, its slant length is $l=\sqrt{h^2+(r_2-r_1)^2}$. Cutting one generator develops the surface into an annular sector. If its inner and outer radii are s-one and s-two and its angle is omega, arc-length matching requires $\omega s_i=2\pi r_i$, while radial width requires s-two minus s-one equal l. Solving gives

$$s_i=\frac{lr_i}{r_2-r_1},\qquad
\omega=\frac{2\pi(r_2-r_1)}l.$$

The annular-sector area is one half omega times the difference of the two squared radii, simplifying to $\pi(r_1+r_2)l$. This both proves the familiar lateral-area formula and supplies a cut pattern. For radii one and three with height twice the square root of three, slant length is four, sector radii are two and six, and angle is pi. Its area is sixteen pi. No approximation of a smooth curved profile has entered this individual frustum development.

Equal radii require a different chart: the cylinder develops into a rectangle rather than a finite-radius annular sector. The algebraic formulas divide by the radius difference and cannot be evaluated there. A cone is the permitted zero-inner-radius case. Seam tabs lie outside the mathematical sector and must be added as construction allowance, not included as extra ideal lateral area. Material thickness similarly changes the manufactured fit without changing the zero-thickness theorem.

### Surface of revolution model

To build a paper paraboloid approximation:

1. Use the generating half-parabola $z=r^{2}/(4p)$ for $0\le r\le a$.
2. Divide it into short intervals and replace each arc by its straight chord.
3. Revolving one chord gives a conical frustum. Develop each frustum as an annular sector whose boundary arc lengths equal the two circumferences $2\pi r_i$ and $2\pi r_{i+1}$.
4. Cut, roll, and join the sectors in order. Refining the intervals improves the approximation.

A sequence of frusta approximates a paraboloid rather than reproducing its smooth curvature exactly. Meridional chords meet at corners, and each frustum is developable while a smooth paraboloid has nonzero Gaussian curvature. Refining the partition changes the approximation. Distinguish a theoretical approximation estimate from any measurement you later choose to make. Compare volume by an actually recorded displacement measurement or a separately specified integration calculation; do not report either as performed without data. Since height $H=a^2/(4p)$ and $r^2=4pz$,
$$V=\int_0^H\pi r(z)^2\,dz=\int_0^H4\pi pz\,dz=\frac{\pi a^4}{8p}.$$

### Worked example 2: an explicit approximation budget without execution

For the truncated paraboloid with focal parameter p and height H, the horizontal disk area at height z is $4\pi pz$. Divide the height into m equal intervals and approximate each slice by a constant-radius cylinder using the lower or upper endpoint. Monotonicity of disk area gives lower and upper volumes. Summing the two elementary arithmetic progressions yields

$$V_{\rm lower}=2\pi pH^2\left(1-\frac1m\right),\qquad
V_{\rm upper}=2\pi pH^2\left(1+\frac1m\right).$$

The exact integral volume is $2\pi pH^2$, between these bounds. Either endpoint construction therefore has relative volume error at most one divided by m. At p one, H four and m four, the exact prediction is thirty-two pi and the bounds are twenty-four pi and forty pi. These are derived quantities, not measurements of a model. A midpoint disk-area sum is exact for volume here because the area function is linear; its stepped boundary still is not the true paraboloid.

The bound applies to this stacked-cylinder approximation. It cannot be transferred unchanged to frusta, triangle meshes or printed shells with a thickness parameter. Each uses a different geometric object. For meridional chord frusta, convexity of the parabola places the chord above its graph and the resulting radius at an intermediate height below the true radius, giving an inscribed-volume direction; obtaining a quantitative rate requires that construction's own estimate. The lesson is to specify the approximating solid before assigning its error budget.

### Map projection model

To create a stereographic projection:

1. Use a transparent or wire-grid sphere with marked latitude and longitude curves.
2. For a geometric-shadow model, place an ideal point source at the north pole and a screen tangent at the south pole, so the screen lies beyond the grid along the relevant rays.
3. Trace the grid shadows onto the screen, excluding the source pole itself.
4. Circles of latitude give concentric circles; a longitude half-meridian gives a ray, and its complete great circle gives a line.
5. In this tangent-screen convention the equator projects to radius twice the sphere radius. The earlier equatorial-plane formula instead gives radius equal to the sphere radius; the two pictures differ by a factor of two.

An equatorial screen can illustrate the abstract line-intersection construction, but points on the southern hemisphere lie beyond it along the light rays and do not cast their ordinary shadows backward onto that screen. This is why the physical-shadow construction declares a different target plane rather than pretending that both layouts have the same scale.

For a digital version, write a script that computes the stereographic projection of a spherical grid and plots it.

## Phase 3: Verification

### Measurement checklist

For each concept demonstrated, record:

- The theoretical prediction (formula and numerical value).
- The measured or computed value from the model.
- The absolute discrepancy, and a relative or percent discrepancy only when its reference value is nonzero.
- A diagnosis of any significant error (measurement uncertainty, construction imperfection, or theoretical approximation).

### Example verification: cone section eccentricity

For an elliptical section of a cone with half-angle $\alpha$ and plane-axis angle $\beta>\alpha$, the eccentricity has the exact relation
$$e=\frac{\cos\beta}{\cos\alpha}.$$
One coordinate derivation sets $k=\tan\alpha$ and writes the slicing plane as $\sin\beta\,z-\cos\beta\,x=d\ne0$. In orthonormal plane coordinates
$$(x,y,z)=d(-\cos\beta,0,\sin\beta)+u(\sin\beta,0,\cos\beta)+v(0,1,0),$$
the cone restriction becomes
$$A(u-u_c)^2+v^2=\frac{d^2k^2}{A},\quad A=\frac{\sin^2\beta-\sin^2\alpha}{\cos^2\alpha},\quad u_c=\frac{d\sin\beta\cos\beta}{\cos^2\alpha\,A}.$$
Thus the semiaxes satisfy $e^2=1-A=\cos^2\beta/\cos^2\alpha$. Measure the semiaxes to obtain $e_{\rm meas}=\sqrt{1-b^2/a^2}$ and compare with this theoretical value.

### Worked example 3: interval uncertainty can change an interpretation

Suppose an illustrative ellipse has measured semiaxes ten and eight, each known only within one tenth in the same length unit. Since eccentricity increases with the major semiaxis and decreases with the minor one, its possible range is

$$\sqrt{1-(8.1/9.9)^2}\ \leq e\leq\sqrt{1-(7.9/10.1)^2}.$$

The squared lower endpoint is forty divided by one hundred twenty-one; the squared upper endpoint is three thousand nine hundred sixty divided by ten thousand two hundred one. The theoretical eccentricity for cone half-angle thirty degrees and slicing angle sixty degrees is one over the square root of three. Its square lies between those two endpoints: the lower comparison reduces to one hundred twenty at most one hundred twenty-one, and the upper comparison to ten thousand two hundred one at most eleven thousand eight hundred eighty. Thus these stated measurement intervals are compatible with that prediction even though the central measured eccentricity is three fifths and differs from it.

Compatibility is not proof of the theorem, nor proof that the instrument uncertainty actually has that size. The interval assumptions must come from the modeler's recorded data. If the angle settings themselves are uncertain, their effect must also be included rather than treating the theoretical ratio as exact. Near a circle, computing eccentricity from a nearly unit axis ratio is sensitive: differentiating $\sqrt{1-t^2}$ gives a derivative with unbounded magnitude as t approaches one. Absolute axis errors can then have an unexpectedly large effect on the inferred eccentricity. A single rounded discrepancy is insufficient to diagnose which part of a model failed.

## Phase 4: Documentation

Write a project report containing:

1. A clear statement of the concepts demonstrated.
2. Photographs or renderings of the model from multiple viewpoints.
3. The scale drawing or parametric script.
4. All formulas used, with derivations or references.
5. The measurement data and error analysis.
6. A reflection on what was learned and what could be improved.

## Common errors in model building

- **Ignoring material thickness.** Paper and cardboard have nonzero thickness, which affects angles and fits.
- **Using approximate values for $\pi$ or $\sqrt{2}$.** Use exact symbols in formulas and substitute numerical values only at the final step.
- **Assuming the model is perfect.** All physical models have construction errors; quantify them rather than ignoring them.
- **Skipping the planning phase.** A well-drawn plan prevents most construction problems.

## Practice exercises with solutions

### Exercise 1

<span id="conics-model-ex-1"></span>
A paper cone has base radius $5$ cm and height $12$ cm. Find the sector angle needed to construct it from a flat sheet.

<details><summary>Hint 1</summary>

Use the right triangle giving slant height from base radius and axial height.

</details>

<details><summary>Hint 2</summary>

The developed sector arc must equal the base circumference.

</details>

<details><summary>Full solution</summary>

**Solution.** The slant height is $R=\sqrt{5^{2}+12^{2}}=13$ cm. The sector angle is $\theta=2\pi r/R=2\pi\cdot 5/13=10\pi/13$ radians $\approx 138.5^{\circ}$.

</details>

### Exercise 2

<span id="conics-model-ex-2"></span>
A paraboloid is generated by revolving $y=x^{2}$ around the y-axis for $x\in[0,2]$. Find its volume and surface area.

<details><summary>Hint 1</summary>

Integrate horizontal disk areas for volume and meridional arc lengths for surface area.

</details>

<details><summary>Hint 2</summary>

For the area integral use the substitution one plus four x squared.

</details>

<details><summary>Full solution</summary>

**Solution.** The volume is

$$V=\pi\int_{0}^{4}x^{2}\,dy=\pi\int_{0}^{2}x^{2}\cdot 2x\,dx=2\pi\int_{0}^{2}x^{3}\,dx=2\pi\cdot\frac{16}{4}=8\pi.$$

The surface area is

$$A=2\pi\int_{0}^{2}x\sqrt{1+(dy/dx)^{2}}\,dx=2\pi\int_{0}^{2}x\sqrt{1+4x^{2}}\,dx.$$

Let $u=1+4x^{2}$, $du=8x\,dx$:

$$A=2\pi\cdot\frac{1}{8}\int_{1}^{17}\sqrt{u}\,du=\frac{\pi}{4}\cdot\frac{2}{3}[u^{3/2}]_{1}^{17}=\frac{\pi}{6}(17\sqrt{17}-1)\approx 36.18.$$

</details>

### Exercise 3

<span id="conics-model-ex-3"></span>
A stereographic projection from the north pole maps the point $(1/\sqrt{3},1/\sqrt{3},1/\sqrt{3})$ to $(X,Y)$. Find $X^{2}+Y^{2}$.

<details><summary>Hint 1</summary>

Use the equatorial-plane convention in the problem, not the doubled tangent-screen convention.

</details>

<details><summary>Hint 2</summary>

Both planar coordinates are equal, so square one and double it.

</details>

<details><summary>Full solution</summary>

**Solution.** $X=Y=\frac{1/\sqrt{3}}{1-1/\sqrt{3}}=\frac{1}{\sqrt{3}-1}=\frac{\sqrt{3}+1}{2}$. So $X^{2}+Y^{2}=2\cdot\frac{(\sqrt{3}+1)^{2}}{4}=\frac{4+2\sqrt{3}}{2}=2+\sqrt{3}\approx 3.732$.

</details>

### Exercise 4

<span id="conics-model-ex-4"></span>
A physical cone model has measured half-angle $\alpha=28^{\circ}$ and a slicing plane at $\beta=50^{\circ}$. The measured semiaxes of the elliptical section are $a=8.2$ cm and $b=5.0$ cm. Compute the eccentricity and compare with theory.

<details><summary>Hint 1</summary>

Compute measured eccentricity from the axis ratio and theoretical eccentricity from the two angle cosines.

</details>

<details><summary>Hint 2</summary>

A discrepancy alone does not identify which measurement or model assumption caused it.

</details>

<details><summary>Full solution</summary>

**Solution.** Measured eccentricity: $e_{\text{meas}}=\sqrt{1-(5.0/8.2)^{2}}=\sqrt{1-0.3712}\approx\sqrt{0.6288}\approx 0.793$. Theoretical: for a cone, $e=\cos\beta/\cos\alpha=\cos 50^{\circ}/\cos 28^{\circ}\approx 0.6428/0.8829\approx 0.728$. The discrepancy may be due to measurement error or the fact that the section was not taken at the exact geometry assumed.

</details>

### Exercise 5

<span id="conics-model-ex-5"></span>
Design a digital model of a torus with major radius $R=5$ and minor radius $r=2$. Write parametric equations and verify that the surface area is $4\pi^{2}Rr$.

<details><summary>Hint 1</summary>

The two angle derivatives are perpendicular for this torus parametrization.

</details>

<details><summary>Hint 2</summary>

Their lengths are r and R plus r cosine v, with R greater than r.

</details>

<details><summary>Full solution</summary>

**Solution.** Parametric equations:

$$x=(R+r\cos v)\cos u,\qquad y=(R+r\cos v)\sin u,\qquad z=r\sin v,$$

with $u,v\in[0,2\pi]$. The two parameter derivatives are perpendicular, with lengths $R+r\cos v$ and r. Since R exceeds r, the first length is positive. Thus the area integral is $\int_0^{2\pi}\int_0^{2\pi}r(R+r\cos v)\,dv\,du=4\pi^2Rr$. The surface area is $A=4\pi^{2}Rr=4\pi^{2}\cdot 5\cdot 2=40\pi^{2}\approx 394.8$.

</details>

### Exercise 6

<span id="conics-model-ex-6"></span>
Use a camera at the origin and picture plane $z=1$. A horizontal ground rectangle has spatial vertices
$$A=(-2,-1,4),\ B=(2,-1,4),\ C=(2,-1,8),\ D=(-2,-1,8).$$
Project its vertices and identify the vanishing point of its depth edges.

<details><summary>Hint 1</summary>

Divide both first coordinates by positive depth for each spatial vertex.

</details>

<details><summary>Hint 2</summary>

The two depth edges have direction along the third spatial axis.

</details>

<details><summary>Full solution</summary>

**Solution.** Perspective projection is $(X,Y,Z)\mapsto(X/Z,Y/Z)$. Hence
$$A'=(-1/2,-1/4),\quad B'=(1/2,-1/4),$$
$$C'=(1/4,-1/8),\quad D'=(-1/4,-1/8).$$
The depth edges have direction $(0,0,1)$, whose vanishing point is $(0,0)$ on the horizon $y=0$. Indeed, the lines $A'D'$ and $B'C'$ both pass through $(0,0)$. The coordinates supply the depth calibration that a pair of vanishing points alone would not determine.

</details>


### Exercise 7

<span id="conics-model-ex-7"></span>

A finite paper cone has a plate parallel to a generator and missing the vertex. A learner traces only a bounded arc and says the experiment cannot represent a parabola because parabolas are unbounded. Explain the distinction and what should be recorded.

<details><summary>Hint 1</summary>

The classification theorem concerns the infinite mathematical cone and the full plane.

</details>

<details><summary>Hint 2</summary>

Record the finite caps or edges that truncate the visible intersection.

</details>

<details><summary>Full solution</summary>

The full infinite-cone intersection is a parabola under the stated angle and nonvertex assumptions. A finite physical cone contains only a bounded part of that ideal surface, so its intersection displays a bounded piece of the parabola. The learner should record cone dimensions, plate angle, vertex exclusion and cap positions, and identify which arc endpoints come from truncation. A bounded trace does not refute the classification. Conversely its appearance alone cannot prove exact parallelism or establish the full unbounded continuation; those conclusions require the mathematical model and its measured or stipulated parameters.

</details>

### Exercise 8

<span id="conics-model-ex-8"></span>

A frustum construction is changed until both end radii equal a positive r, with height h positive. Explain why the finite annular-sector formulas cannot be substituted directly, and give the exact replacement development and area.

<details><summary>Hint 1</summary>

The formulas divide by the end-radius difference.

</details>

<details><summary>Hint 2</summary>

Equal radii give a cylinder whose generators retain height h and whose circumference is twice pi times r.

</details>

<details><summary>Full solution</summary>

The end-radius difference is zero, so the annular-sector radii and angle formulas have undefined divisions; treating them as finite numbers would not describe a cut pattern. The cylinder instead develops into a rectangle with side lengths h and twice pi times r. Its lateral area is twice pi r h, also the continuous limit of the frustum area formula. The geometric development changes chart even though the area formula has a regular limit. End disks and seam tabs remain additional pieces and are not part of this lateral rectangle's ideal area.

</details>

### Exercise 9

<span id="conics-model-ex-9"></span>

For the endpoint disk-stack approximation to the truncated paraboloid, choose a sufficient number of equal height intervals for relative volume error at most five percent. If a midpoint-area sum gives the exact volume, does that prove the stepped surface has the correct area or curvature?

<details><summary>Hint 1</summary>

Use the proved relative volume bound one divided by m.

</details>

<details><summary>Hint 2</summary>

Volume agreement concerns one integrated scalar, not the whole boundary geometry.

</details>

<details><summary>Full solution</summary>

Any integer m at least twenty gives the stated error guarantee for the two endpoint constructions. The midpoint sum is exact here because disk area is linear in height. Its boundary is nevertheless a stepped solid, with horizontal annuli and cylindrical walls rather than a smooth paraboloid. Equal volume does not establish equal surface area, tangent planes or curvature. The derived bound also concerns the ideal disk-stack solid; material thickness and measurement error would contribute separate discrepancies in a physical construction. No model must be executed to prove the mathematical volume estimate.

</details>

### Exercise 10

<span id="conics-model-ex-10"></span>

For a unit sphere and source at its north pole, derive the projection onto the south tangent plane z minus one rather than the equatorial plane. Compare the two planar coordinate formulas and find the tangent-screen image radius of the equator.

<details><summary>Hint 1</summary>

A source ray has third coordinate one plus t times z minus one.

</details>

<details><summary>Hint 2</summary>

Set that coordinate to minus one, giving t equal to two divided by one minus z.

</details>

<details><summary>Full solution</summary>

The tangent-screen coordinates are $X=2x/(1-z)$ and $Y=2y/(1-z)$, twice the equatorial-plane coordinates. On the equator z is zero and the original horizontal radius is one, so the tangent-screen circle has radius two. Angles and generalized-circle behavior are unaffected by the uniform target enlargement, while lengths double and areas quadruple. A physical construction and its comparison formula must use the same target-plane convention; an apparent factor-two disagreement can come entirely from comparing two different exact projections rather than from faulty measurements.

</details>

## Looking backward and forward

This project chapter consolidated the book's geometric principles into a tangible artifact. Whether you built a physical cone slicer, a digital paraboloid, or a projected globe, the act of construction forces attention to the details that are easy to overlook in pure theory: measurement error, material behavior, and the gap between ideal formulas and real objects.

This is the final required chapter. Return to the relevant coordinate, projection or surface chapter when your model exposes a specific unresolved assumption. Keep the mathematical derivation, chosen approximation and actually collected observations distinct in the finished artifact.

## Source and scope

The earlier project manuscript and all six exercise identities/solutions remain, with explicit hints and expanded mathematical reasoning. The new worked examples derive a frustum development, a rigorous disk-stack volume bound and an eccentricity uncertainty interval. Four further exercises support the L2 project scope. All example data are stated hypothetical inputs or retained earlier problem values; no artifact, rendering, measurement or script output is represented as newly produced. The project asks the learner to document their own construction rather than treating an analytical prediction as empirical evidence.
