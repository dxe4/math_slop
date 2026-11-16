
# Notation and Conventions

This guide is designed for repeated reference. It records notation used across chapters, the claim-status conventions that govern what kind of warrant a statement needs, and the structural conventions that keep arguments clean.

## Plane geometry notation

### Points, distances, and angles

- $A$, $B$, $P$, $Q$: points in the plane or in space.
- $AB$ or $\lvert AB\rvert$: the distance between points $A$ and $B$.
- $\angle ABC$: the angle with vertex at $B$ formed by rays $BA$ and $BC$.
- $\pi$: the circumference-to-diameter ratio for a Euclidean circle, also used for the straight angle $180^{\circ}$.

### Conic sections

- $a$: semimajor axis of an ellipse or semitransverse axis of a hyperbola.
- $b$: semiminor axis of an ellipse or semiconjugate axis of a hyperbola.
- $c$: distance from the center to a focus; satisfies $c^{2}=a^{2}-b^{2}$ for ellipses and $c^{2}=a^{2}+b^{2}$ for hyperbolas.
- $e$: eccentricity; $e=c/a$, so $0<e<1$ for ellipses, $e=1$ for parabolas, and $e>1$ for hyperbolas.
- $p$: focal length of a parabola; the distance from the vertex to the focus.
- $\alpha$: half-angle of a right circular cone (angle between axis and generator).
- $\beta$: angle between a slicing plane and the cone axis.

### Coordinate systems

- $(x,y)$: Cartesian coordinates in the plane.
- $(x,y,z)$: Cartesian coordinates in space.
- $[x:y:z]$: homogeneous coordinates in the projective plane $\mathbb{P}^{2}$; not all zero, and $[x:y:z]=[\lambda x:\lambda y:\lambda z]$ for any $\lambda\neq 0$.
- $(X,Y)$: coordinates in a picture plane or projected image.

## Solid geometry and surfaces

### Surfaces of revolution and quadrics

- $r$: radius of a sphere, cylinder, or torus tube.
- $R$: major radius of a torus (distance from tube center to axis of revolution) or radius of a sphere.
- $h$: perpendicular height of a cylinder, cone, or prism.
- $V$: volume.
- $A$: surface area or lateral surface area (context determines which).
- $B$: area of the base of a prism, cylinder, or pyramid.

### Quadric surfaces (standard forms)

- Ellipsoid: $\frac{x^{2}}{a^{2}}+\frac{y^{2}}{b^{2}}+\frac{z^{2}}{c^{2}}=1$.
- Hyperboloid of one sheet: $\frac{x^{2}}{a^{2}}+\frac{y^{2}}{b^{2}}-\frac{z^{2}}{c^{2}}=1$.
- Hyperboloid of two sheets: $\frac{x^{2}}{a^{2}}+\frac{y^{2}}{b^{2}}-\frac{z^{2}}{c^{2}}=-1$.
- Elliptic paraboloid: $\frac{x^{2}}{a^{2}}+\frac{y^{2}}{b^{2}}=\frac{z}{c}$.
- Hyperbolic paraboloid: $\frac{x^{2}}{a^{2}}-\frac{y^{2}}{b^{2}}=\frac{z}{c}$.
- Elliptic cone: $\frac{x^{2}}{a^{2}}+\frac{y^{2}}{b^{2}}=\frac{z^{2}}{c^{2}}$.

## Spherical geometry

- $R$: radius of the sphere.
- $\phi$: latitude (angle from the equator, positive northward).
- $\lambda$: longitude (angle from a reference meridian, positive eastward).
- $\theta$: colatitude; $\theta=\pi/2-\phi$ (angle from the positive $z$-axis).
- $\sigma$: central angle between two points on a sphere.
- $d=R\sigma$: great-circle distance.
- $a$, $b$, $c$: side lengths of a spherical triangle, measured by central angles.
- $A$, $B$, $C$: angles of a spherical triangle (dihedral angles between planes of great circles).
- $E=A+B+C-\pi$: spherical excess; the area of a spherical triangle is $R^{2}E$.

## Hyperbolic geometry

- $D$: the open unit disk $\{z\in\mathbb{C}:\lvert z\rvert<1\}$ in the Poincaré disk model.
- $H$: the upper half-plane $\{(x,y)\in\mathbb{R}^{2}:y>0\}$ in the Poincaré half-plane model.
- $d(z_{1},z_{2})$: hyperbolic distance.
- $\operatorname{arctanh}$: inverse hyperbolic tangent; used in the Poincaré disk distance formula.
- $\operatorname{arccosh}$: inverse hyperbolic cosine; used in the half-plane distance formula.
- $\pi-(A+B+C)$: hyperbolic defect; the area of a hyperbolic triangle.

## Projective geometry

- $\mathbb{P}^{2}$: the real projective plane.
- $[x:y:z]$: homogeneous coordinates of a point in $\mathbb{P}^{2}$.
- $(a,b,c)$: coefficients of a line $ax+by+cz=0$ in homogeneous coordinates.
- $(A,B;C,D)$: cross-ratio of four collinear points.
- $\lambda$: a nonzero scalar used in homogeneous coordinate equivalence.

## Projection and descriptive geometry

- $f$: focal length or distance from the camera to the picture plane in perspective projection.
- $(X,Y,Z)\mapsto(fX/Z,fY/Z)$: standard perspective projection formula with picture plane $z=f$.
- $p$, $q$, $r$: foreshortening ratios along the three axes in axonometric projection.
- $H$: horizontal projection plane (top view).
- $V$: vertical projection plane (front view).
- $XY$: ground line (intersection of $H$ and $V$).

## Linear algebra and transformations

- $\mathbf{x}=(x,y)^{T}$ or $(x,y,z)^{T}$: column vector of coordinates.
- $Q$: symmetric matrix associated with a quadratic form.
- $\lambda_{1}$, $\lambda_{2}$, $\lambda_{3}$: eigenvalues of a symmetric matrix.
- $R$: orthogonal rotation matrix.
- $\det Q$: determinant of $Q$.
- $\operatorname{tr}Q$: trace of $Q$.
- $\Delta=B^{2}-4AC$: discriminant of a general conic $Ax^{2}+Bxy+Cy^{2}+\dots=0$.
- $M$: matrix of an affine or linear transformation.
- $\mathbf{v}$: translation vector.

## Number systems and standard constants

- $\mathbb{R}$: the real numbers.
- $\mathbb{C}$: the complex numbers.
- $\mathbb{N}$: the natural numbers $\{1,2,3,\dots\}$.
- $\phi=(1+\sqrt{5})/2$: the golden ratio.
- $\pi\approx 3.14159$: ratio of circumference to diameter.
- $e\approx 2.71828$: the base of natural logarithms.

## Claim-status conventions

Before accepting or repeating a claim, check its status:

| Status | Warrant required | Typical sources |
| --- | --- | --- |
| Theorem | Proof from stated axioms | Definitions, postulates, inference rules |
| Derivation | Systematic calculation from definitions | Algebraic or analytic manipulation |
| Computational observation | Algorithmic or numerical verification | Scripts, tables, measured data |
| Open problem | Precise statement plus current status evidence | Primary research and authoritative surveys |

## Cross-reference conventions

- Chapters are cited by title in quotation marks: "Spherical Geometry".
- Chapter IDs are used in internal links: `spherical-geometry`, `projective-geometry`.
- Claims should state their material hypotheses. A derivation may be local; any deferred or imported theorem must be labeled and supported by the references.

## Accessibility and notation policy

All essential mathematical information is stated in text and formulas. No argument depends only on colour, spatial placement, or animation. Tables and diagrams are accompanied by exact descriptions of rows, columns, or relations. Plain-source formulas use readable tokens such as $\leq$, $\to$, and $\cong$ when a specialized glyph would otherwise be the only carrier of meaning.

## Citation policy

- Paraphrase sources and cite the job they perform.
- Do not copy exercise sequences, distinctive examples, diagrams, or prose merely because a theorem is standard.
- Direct quotations require exact locators and license or fair-use review.
- When sources disagree, record the disagreement.
- When provenance is unknown, label it unknown rather than inventing a clean lineage.
