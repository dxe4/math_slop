
# Recipe: Construct, Measure, and Audit a Geometric Model

**Before reading.** Read [Points, Lines, Angles and Measurement](#/books/euclidean-geometry-trigonometry/points-lines-angles), [Similarity and Proportion](#/books/euclidean-geometry-trigonometry/similarity-proportion).

Geometry becomes applied mathematics when a physical situation is converted into points, lines, angles, surfaces, and tolerances. This recipe handles an inaccessible length, a scale drawing, a circular or conic component, or a solid volume without confusing an ideal theorem with an instrument reading.

No specialized software is required. Use a tape or ruler, string, a plumb line, a protractor or angle app whose limitations are known, paper, and a calculator. Work safely: do not enter roads, climb unstable objects, aim optical devices at the Sun, or measure where access is restricted.

## Step 1: write the geometric contract

Complete five statements before collecting numbers:

1. **Object:** what point, length, angle, area, or volume is sought?
2. **Reference:** relative to which baseline, vertical, plane, datum, or coordinate frame?
3. **Model:** Euclidean plane, Euclidean space, sphere, or another geometry?
4. **Precision:** what resolution is useful, and which tolerance is acceptable?
5. **Use:** what decision will the result support?

“Find the height of the tower” is incomplete if ground slopes, the tower leans, or height could mean vertical elevation versus distance along its axis.

### Example contract

“Estimate the vertical height from the level of point $A$ to the roof point $T$, using a horizontal 20.0 m baseline $AB$, to the nearest 0.5 m, for a classroom model only.” This states a Euclidean vertical cross-section and a limited use.

## Step 2: draw an incidence diagram before a scale drawing

Make a diagram labeling known and unknown points. Mark right angles, parallel lines, equal lengths, line-of-sight rays, and the plane in which each relation is assumed. Do not make it look to scale yet; visual realism can smuggle in facts.

Write a dependency list such as:

$level baseline \to right angle to vertical \to measured sight angle \to tangent ratio \to height$.

If any arrow is unjustified, another decimal place will not repair the model.

For a three-dimensional situation, name the chosen section plane. A right-triangle calculation is valid only if the baseline, sight line, and vertical target lie in that plane or have been projected correctly.

## Step 3: choose a method with observable inputs

### Similar shadows

Simultaneous parallel light rays create similar triangles for vertical objects on the same level plane. If reference height $h_r$ has shadow $s_r$ and target shadow is $s_t$, then

$h_t=h_r s_t/s_r$.

This method fails when shadows are diffuse, ground elevations differ, or rays are not effectively parallel at the scale used.

### Angle of elevation

From horizontal distance $d$, instrument height $h_i$, and elevation angle $\theta$,

$h_t=h_i+d tan\theta$,

provided the target is vertically above the baseline endpoint and the baseline is horizontal. If ground rises by known vertical amount $g$, include it with a declared sign.

### Two-station triangulation

Let known baseline $AB=c$, and sight angles inside triangle $ABT$ be $A$ and $B$. Then $T=\pi -A-B$ and the law of sines gives

$AT=c \sin B/\sin T$,

$BT=c \sin A/\sin T$.

When $A+B$ is close to $\pi$, $\sin T$ is small and the geometry is ill-conditioned: tiny angle errors create large distance errors. Choose stations giving a well-shaped triangle when safe and possible.

### Trilateration

Distances to three noncollinear known planar points can locate a point by circle intersections. Two circles generally give zero, one, or two points; the third distance resolves the mirror ambiguity if consistent. Nearly collinear reference centers weaken stability.

## Step 4: construct reference geometry

Ideal straightedge-and-compass steps should include proof obligations.

### Perpendicular bisector

From endpoints $A,B$, draw equal-radius circles with radius greater than $AB/2$. Their two intersections are equidistant from $A,B$, so the line through them is the perpendicular bisector. Equal radii and SSS congruence prove perpendicularity.

### Angle bisector

Draw an arc centered at the vertex meeting both rays. From those two contact points draw equal-radius arcs; join their intersection to the vertex. Congruent triangles prove equal angles.

### Parallel through a point

Copy a corresponding angle from a transversal or construct two perpendiculars. The proof uses the Euclidean parallel theorem. On a sphere, “parallel through a point” does not have the same meaning or existence.

Use the [origami course](#/courses/atlas-origami-construction-geometry) when reflection-based folds are more accessible than compass arcs. A tactile board, raised line, or coordinate instructions can represent the same incidence relations.

## Step 5: calibrate and repeat instruments

Before measuring the target:

- compare a ruler against a known length;
- check whether a plumb line hangs freely;
- reverse a level to detect offset;
- measure a known right angle;
- record smallest readable increment;
- repeat from both directions to detect backlash or alignment bias.

Record raw observations, not only averages. Repetition estimates variation under similar conditions; it does not reveal a shared systematic bias.

Angle apps may infer orientation from sensors affected by case shape, magnetic fields, acceleration, or calibration. Treat their output as instrument data, not direct access to an exact angle.

## Step 6: compute with units and guard conditions

Convert angles to the calculator’s expected unit. Keep more digits during intermediate work than in the reported answer. Check all denominators and inverse-function domains.

### Worked tower model

#### Worked example: separate sight geometry from instrument height

Horizontal distance is $d=20.0 m$, instrument height $h_i=1.50 m$, and elevation angle $\theta =37.0^{\circ}$. Then

$h_t=1.50+20.0 tan37^{\circ}\approx 16.57 m$.

Reporting $16.571081\ldots m$ would overstate input precision. A provisional $16.6 m$ is more honest before an uncertainty audit.

### Cross-check by similarity

Suppose a 1.20 m reference casts a 1.00 m shadow while target shadow is 12.6 m. Similarity gives $15.12 m$, noticeably different from $16.6 m$. Do not average blindly. Check whether endpoints, ground level, times, and target point agree. Disagreement is diagnostic information.

## Step 7: construct circles and conics from their definitions

A taut string of length $r$ around fixed center traces an approximate circle. Two pins and a loop with fixed total path length trace an ellipse because the two focus distances sum to a constant. The constant must exceed focal separation; equality collapses to a segment.

A focus/directrix conic can be constructed pointwise. Choose a distance $d$ from a directrix, draw the parallel locus at that distance, and intersect it with the circle centered at the focus of radius $ed$. Repeat for several $d$ values. Depending on $e$, some chosen parallels have zero, one, or multiple intersection points.

String stretch, pin radius, pencil angle, and point selection create a band around the ideal curve. Report them as physical errors rather than changing the conic definition.

## Step 8: measure a solid through sections

For a prism-like container, measure base area $B$ and perpendicular height $h$, then $V=Bh$. For an irregular stack of parallel sections with areas $A_0,\ldots ,A_n$ and equal spacing $\Delta h$, a simple trapezoidal estimate is

$V\approx \Delta h[A_0/2+A_1+\ldots +A_{n-1}+A_n/2]$.

This numerical approximation assumes the sections are registered and area changes reasonably between them. Finer spacing can reduce discretization error but does not fix biased segmentation.

For a frustum with parallel similar end areas $B_1,B_2$, exact ideal volume is

$(h/3)(B_1+\sqrt{B_1B_2}+B_2)$.

Do not apply it to arbitrary ends merely because both areas are known.

## Step 9: propagate uncertainty at the right level

For $h=h_i+d tan\theta$, small changes satisfy approximately

$\Delta h\approx \Delta h_i+tan\theta \Delta d+d sec^{2}\theta \Delta \theta$,

where $\Delta \theta$ is in radians.

A conservative first-order bound uses absolute values. If $|\Delta d|\le 0.10 m$, $|\Delta \theta |\le 0.5^{\circ}\approx 0.00873 rad$, and $|\Delta h_i|\le 0.02 m$, then at $\theta =37^{\circ}$,

$|\Delta h| ≲ 0.02+tan37^{\circ}(0.10)+20 sec^{2}37^{\circ}(0.00873)$

$\approx 0.02+0.075+0.274\approx 0.37 m$.

Angle uncertainty dominates. The derivative calculation is local; large intervals or near-vertical angles require evaluating the nonlinear endpoints or a more rigorous interval method.

For independent random errors, root-sum-square propagation may be appropriate under a stochastic model. Do not use it for worst-case guarantees or correlated systematic errors without justification.

## Step 10: choose flat or curved Earth geometry

For a small site, Euclidean coordinates may be accurate enough relative to tolerance. For long routes, use spherical great-circle distance or a specified ellipsoidal geodesic.

On a sphere of radius $R$, central angle $\delta$ gives surface distance $R\delta$. Planar chord is $2R \sin(\delta /2)$ and tangent-plane approximations differ increasingly with scale. State which quantity is needed.

At antipodal or nearly antipodal points, route direction can be nonunique or unstable. At high accuracy, Earth radius is not one universal constant; specify datum and algorithm rather than hiding geodesy inside “use GPS.”

## Step 11: validate by invariants and alternate routes

Check:

- triangle angles and side inequalities;
- congruence or similarity ratios;
- coordinate distances and dot-product perpendicularity;
- circle or conic defining residuals;
- area and volume units;
- $V-E+F$ for an intended convex polyhedron;
- whether a computed point lies on every defining object;
- whether the result changes unreasonably under input perturbations.

An independent method is most valuable when it has different failure modes. Two calculators using the same mistaken diagram are not independent checks.

## Step 12: report the audit trail

Include the contract, labeled diagram, raw observations, calibration, formula with hypotheses, unit conversions, numerical result, uncertainty method, cross-check, and unresolved mismatch. Attach a text description of the diagram and a numerical table so the reasoning does not depend on visual perception alone.

Separate statements:

- **theorem:** what follows exactly in the model;
- **measurement:** what instruments recorded;
- **computation:** what rounded arithmetic returned;
- **model judgment:** why the ideal geometry is adequate;
- **decision:** how tolerance changes the next action.

## Exercises with hints and complete solutions

### Exercise 1: Shadow estimate
<a id="geometric-measurement-construction-ex-1"></a>

A 1.5 m pole casts a 2.0 m shadow; a structure casts 18.0 m. Find modeled height.

<details><summary>Hint 1</summary>

Use the ratio of height to shadow under the same illumination.

</details>
<details><summary>Hint 2</summary>

Compare both vertical objects on the same level plane.

</details>
<details><summary>Solution</summary>

$h/18=1.5/2$, so $h=13.5 m$, subject to simultaneous parallel rays, common level plane, and vertical objects.

</details>

### Exercise 2: Triangulation conditioning
<a id="geometric-measurement-construction-ex-2"></a>

Why are sight angles $5^{\circ}$ and $170^{\circ}$ invalid for a triangle?

<details><summary>Hint 1</summary>

Compute the remaining angle before calling the data impossible.

</details>
<details><summary>Hint 2</summary>

A small sine in a denominator indicates sensitivity even for a valid triangle.

</details>
<details><summary>Solution</summary>

Their sum is $175^{\circ}$, leaving $5^{\circ}$, so they are algebraically possible, not invalid. But the third angle is tiny, making distances divided by $sin5^{\circ}$ highly sensitive. The diagnosis is ill-conditioned, not impossible.

</details>

### Exercise 3: Circle intersections
<a id="geometric-measurement-construction-ex-3"></a>

Two centers are 10 units apart and radii are 3 and 4. How many intersections?

<details><summary>Hint 1</summary>

Compare centre distance with the sum of the radii.

</details>
<details><summary>Hint 2</summary>

Two disjoint disks cannot have intersecting boundary circles.

</details>
<details><summary>Solution</summary>

None, because $3+4<10$. A trilateration solver should report inconsistency rather than a complex or invented point.

</details>

### Exercise 4: Volume units
<a id="geometric-measurement-construction-ex-4"></a>

Cross-sectional areas are in $cm^{2}$ and spacing is in $mm$. What must happen?

<details><summary>Hint 1</summary>

Area times length gives volume only after consistent unit conversion.

</details>
<details><summary>Hint 2</summary>

Convert ten millimetres to one centimetre before multiplying square centimetres.

</details>
<details><summary>Solution</summary>

Convert one unit system before multiplying. For example $10 mm=1 cm$; area times spacing then gives $cm^{3}$.

</details>

### Exercise 5: Curvature choice
<a id="geometric-measurement-construction-ex-5"></a>

A 2 m tabletop diagonal is computed using Euclidean distance. Must spherical geometry be included?

<details><summary>Hint 1</summary>

Compare the approximation error with the required tolerance.

</details>
<details><summary>Hint 2</summary>

The existence of curvature does not mean every ordinary measurement resolves it.

</details>
<details><summary>Solution</summary>

Not automatically. Compare curvature correction with measurement tolerance; at tabletop scale it is negligible for ordinary purposes. Naming the approximation is enough.

</details>

## Continue

Use [Geometry and Trigonometry](#/courses/atlas-euclidean-trigonometry-standard) for derivations, [Conics, Solids, and Projection](#/books/conics-solids-projections) for spatial formulas, and [Spherical and Hyperbolic Geometry](spherical-hyperbolic-geometry.md) when the model is curved. The [Conics & Curved Geometry Observatory](../apps/atlas/index.html#/labs?lab=visual-lab-conics-curved-geometry) provides shareable numerical checks, but its fixed examples do not replace field calibration.
