var e=`---
id: book-analytic-computational-geometry
title: "Analytic and Computational Geometry: Predicates Before Pictures"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Analytic and Computational Geometry: Predicates Before Pictures

Computer graphics can draw a plausible intersection even when the underlying calculation is wrong. Computational geometry therefore starts with **predicates**—orientation, containment, incidence, sidedness—whose signs control later constructions. This book connects coordinate geometry, transformations, conics, solid intersections, and curved metrics using dependency-free algorithms and explicit numerical boundaries.

It assumes vectors, matrices, elementary trigonometry, and basic algorithm reasoning. Exact formulas are distinguished from their floating-point evaluation.

## Current reading route

**L3.** Prepare with [Linear Algebra](linear-algebra-structure-proofs.md), [Discrete Mathematics](discrete-mathematics-proof-counting-structure.md), elementary calculus and proof-based reasoning. The chapters state the additional data-structure and analysis inputs at their first use. The [reader guide](analytic-computational-geometry/front-matter/reader-guide.md) explains the exact and numerical scopes.

| Reading | Main subject |
| --- | --- |
| [Representations](analytic-computational-geometry/represent-geometric-objects-with-invariants.md) | Equality, normalization and invariant geometry |
| [Orientation](analytic-computational-geometry/orientation-is-the-central-planar-predicate.md) | Signed area, affine laws and uncertainty |
| [Segment intersection](analytic-computational-geometry/segment-intersection-needs-boundary-cases.md) | Complete point, crossing and overlap cases |
| [Projection and distance](analytic-computational-geometry/projection-distance-and-closest-points.md) | Minimization, convexity and stability |
| [Transformations](analytic-computational-geometry/transformations-and-homogeneous-coordinates.md) | Affine and projective coordinate actions |
| [Conic predicates](analytic-computational-geometry/conic-predicates.md) | Exact roots, parameter domains and residuals |
| [Spatial predicates](analytic-computational-geometry/three-dimensional-predicates.md) | Planes, spatial intersections and convex slices |
| [Convex hulls](analytic-computational-geometry/convex-hull-as-an-orientation-algorithm.md) | Monotone-chain correctness and cost |
| [Triangulation and guards](analytic-computational-geometry/polygon-triangulation-art-gallery.md) | Diagonals, decomposition and three colors |
| [Sweep lines](analytic-computational-geometry/sweep-line-arrangements.md) | Crossing events and arrangement incidence |
| [Voronoi and Delaunay](analytic-computational-geometry/voronoi-delaunay.md) | Nearest-site cells, lifting and duality |
| [Range searching](analytic-computational-geometry/range-searching-kd-trees.md) | Balanced k-d reporting and nearest bounds |
| [Curved metrics](analytic-computational-geometry/curved-metric-computation.md) | Spherical and hyperbolic distance proofs |
| [Curvature clinic](analytic-computational-geometry/curvature-turning-and-certified-orientation.md) | Smooth, discrete and uncertain-coordinate models |
| [Robustness contracts](analytic-computational-geometry/property-based-test-catalogue.md) | Exact guarantees, enclosures and conditioning |

The earlier overview below keeps its original headings, formulas and instructional code. The full chapter links supply the revised course and expanded solutions. The two earlier conic readings and synthesis set remain companions with their original identities; neither their notes nor their source text is silently replaced by the current route.

## 1. Represent geometric objects with invariants

Represent a two-dimensional point as a pair $(x,y)$ of finite numbers. A direction is a nonzero vector. A line can be represented parametrically,

$L(t)=P+tv$, $v\\ne 0$,

or implicitly,

$n\\cdot X=c$, $n\\ne 0$.

The parametric form makes construction easy; the implicit form makes sidedness and perpendicular distance easy. Scaling $(n,c)$ by the same nonzero number leaves the line unchanged, so coefficient equality is not geometric equality.

For an implicit line, signed numerator $n\\cdot X-c$ tells which side contains $X$. Perpendicular distance is

$\\lvert n\\cdot X-c\\rvert /\\lVert n \\rVert$.

Reject a zero normal rather than dividing by zero or treating every point as incident.

## 2. Orientation is the central planar predicate

For points $A,B,C$, define

$orient(A,B,C)=(B_{x}-A_{x})(C_{y}-A_{y})-(B_{y}-A_{y})(C_{x}-A_{x})$.

It is twice the signed area of triangle $ABC$. Positive means counterclockwise, negative clockwise, and zero collinear in exact arithmetic.

\`\`\`js
// Illustrative binary64 predicate; use bounded inputs and an exact or adaptive fallback.
function orientation(a, b, c) {
  for (const point of [a, b, c]) {
    if (!Array.isArray(point) || point.length !== 2 || !point.every(Number.isFinite)) {
      throw new RangeError("each point must contain two finite coordinates");
    }
  }
  return (b[0] - a[0]) * (c[1] - a[1])
    - (b[1] - a[1]) * (c[0] - a[0]);
}
\`\`\`

Finite inputs alone do not make this kernel robust: intermediate subtraction or multiplication can overflow, underflow, or cancel to the wrong sign. The formula is exact over exact coordinates, but floating subtraction can lose decisive bits for huge, nearly collinear inputs. A fixed tolerance such as $1e-9$ is not scale-invariant: it may be too large for microscopic coordinates and too small for astronomical ones. Options include bounding and rescaling inputs, deriving an error bound from operand magnitudes, using adaptive exact predicates, or documenting a minimum resolvable separation. Never replace “uncertain sign” by “definitely collinear” without declaring that convention.

## 3. Segment intersection needs boundary cases

Two nonparallel lines $P+tu$ and $Q+sv$ meet when

$t=cross(Q-P,v)/cross(u,v)$,

$s=cross(Q-P,u)/cross(u,v)$.

The closed segments meet when both parameters lie in $[0,1]$; the intersection is interior to both only when both lie in $(0,1)$. If $cross(u,v)=0$, lines are parallel or collinear; division is invalid. Collinear segments require a one-dimensional interval-overlap check on a coordinate whose direction is nonzero.

An orientation-based test checks whether endpoints of each segment straddle the other line, then treats endpoints and collinear overlap according to an explicit boundary policy. Applications must decide whether touching at an endpoint counts as collision, whether zero-length segments are allowed, and whether overlapping intervals return one point or a segment.

### Worked intersection

Let $P=(0,0)$, $u=(4,2)$, $Q=(1,3)$, $v=(1,-2)$. Cross denominator is $4(-2)-2(1)=-10$. With $Q-P=(1,3)$,

$t=cross((1,3),(1,-2))/-10=(-5)/-10=1/2$.

The intersection is $(2,1)$. Solving for $s$ gives 1, so it is the endpoint of the second segment.

## 4. Projection, distance, and closest points

For line $P+tv$, the point closest to $X$ has

$t*=((X-P)\\cdot v)/(v\\cdot v)$.

On a segment, clamp $t*$ to $[0,1]$. That one change distinguishes closest point on an infinite line from closest point on the finite segment.

Distance from point $X$ to triangle or polygon is more subtle: first decide whether $X$ lies inside, then minimize distance to boundary edges. A convex polygon permits consistent orientation signs. A nonconvex polygon needs a winding or ray-crossing rule with a careful vertex convention.

Squared distances avoid unnecessary square roots when only comparison is needed, but squaring increases dynamic-range pressure and can overflow or underflow sooner than a scaled norm. Scale the computation when magnitudes require it.

## 5. Transformations and homogeneous coordinates

A planar affine map has

$X\\mapsto AX+b$.

Every line maps into a line or collapses to a point. If $A$ is nonsingular, the map preserves lines, parallelism, collinearity, and ratios along a line. It preserves distances exactly when $A^{T}A=I$; it preserves orientation when $\\det A>0$, reverses it when $\\det A<0$, and collapses all oriented areas when $\\det A=0$.

Homogeneous coordinates write $(x,y)$ as $[x,y,1]^{T}$, combining $A$ and $b$ into a $3\\times 3$ matrix. Matrix multiplication composes transformations in a declared order. For column vectors, $M_{2}M_{1}X$ applies $M_{1}$ first.

A projective transformation uses an invertible $3\\times 3$ matrix up to nonzero scale, followed by division by the third coordinate. It preserves lines and cross-ratio, not lengths or parallelism. Points with final homogeneous coordinate zero represent directions or points at infinity; blindly dividing produces infinities or $NaN$ instead of a meaningful projective boundary case.

### Reflection audit

For line through $M$ with nonzero normal $n$, reflection is

$R(P)=P-2 ((P-M)\\cdot n)/(n\\cdot n) n$.

Tests should verify $R(R(P))=P$, fixed points on the mirror, preserved pairwise distances, and reversed orientation. Approximate equality needs a scale-aware bound.

## 6. Circles and conics as quadratic forms

A circle is a conic whose quadratic part is a scalar multiple of identity. A general affine conic can be written

$X^{T}QX+q^{T}X+f=0$,

where $Q$ is symmetric $2\\times 2$. Translating can remove the linear term when $Q$ is invertible; rotating by an orthogonal eigenbasis diagonalizes $Q$.

Signs of eigenvalues help classify the quadratic part:

- same nonzero sign: ellipse-like;
- exactly one zero eigenvalue: parabola-like; $Q=0$ requires a separate linear or constant branch;
- opposite signs: hyperbola-like.

Real-locus and rank checks are still needed. $x^{2}+y^{2}+1=0$ has ellipse-like quadratic part but no real points. $x^{2}-y^{2}=0$ is two intersecting lines. A robust classifier reports “degenerate or empty” rather than forcing every coefficient tuple into a picture label.

### Ray–conic intersection

Substitute $X(t)=P+tv$ into the quadratic. This gives $at^{2}+bt+c=0$. Its discriminant tells whether the ray line has zero, one tangent, or two real intersections. Then filter solutions by the ray condition $t\\ge 0$ or segment condition $0\\le t\\le 1$.

For stable quadratic roots when cancellation threatens, let $\\delta=b^{2}-4ac$ and, after confirming $\\delta\\geq0$, compute

$q=-\\tfrac12\\left(b+s\\sqrt{\\delta}\\right),\\qquad s=\\begin{cases}1,&b\\geq0,\\\\-1,&b<0.\\end{cases}$

Then the roots are $q/a$ and $c/q$. If $a=0$ and $b\\ne0$, solve the linear equation; if $a=b=0$, the parameter set is all real numbers when $c=0$ and empty otherwise. In the quadratic case, handle $q=0$ as the double root $-b/(2a)$. Near $\\delta=0$, a floating-point implementation also needs a scale-aware policy for a slightly negative computed discriminant; silently clamping every negative value can manufacture tangencies. The algebraic locus and allowed parameter interval are distinct filters.

## 7. Conic focus/directrix computation

For focus $(0,0)$, directrix $x=1$, and $e>0$, the locus is

$\\sqrt{x^{2}+y^{2}}=e\\lvert x-1\\rvert$.

Squared residual

$x^{2}+y^{2}-e^{2}(x-1)^{2}$

is useful for algebra, but its magnitude scales quadratically with coordinates. The unsquared distance residual matches the defining units and is displayed in the live lab.

For $e<1$, completing squares gives an ellipse with center

$h=-e^{2}/(1-e^{2})$,

horizontal semiaxis $a=e/(1-e^{2})$, and vertical semiaxis $b=e/\\sqrt{1-e^{2}}$.

For $e=1$, $y^{2}=1-2x$, a left-opening parabola. For $e>1$, center is $h=e^{2}/(e^{2}-1)$ with transverse semiaxis $a=e/(e^{2}-1)$. These formulas become ill-conditioned as $e$ approaches 1 because the ellipse or hyperbola center recedes while the parabola is a different locus. Factor $1-e^2=(1-e)(1+e)$, retain the implicit equation, or raise precision. Use a parabola only as a declared local approximation on a specified region with an error model.

## 8. Three-dimensional predicates

In $R^{3}$, a plane has $n\\cdot X=c$ with $n\\ne 0$. A line $P+tv$ meets it when

$t=(c-n\\cdot P)/(n\\cdot v)$,

provided $n\\cdot v\\ne 0$. If the denominator is zero, the line is parallel; test the numerator to distinguish disjoint from contained.

The cross product $u\\times v$ is perpendicular to both vectors. Its magnitude is parallelogram area; scalar triple product

$u\\cdot (v\\times w)$

is signed parallelepiped volume. Zero signals coplanarity in exact arithmetic. For nonzero vectors, a scale-free near-coplanarity diagnostic divides its absolute value by $\\lVert u\\rVert\\lVert v\\rVert\\lVert w\\rVert$, with guarded norm evaluation.

To slice a convex polyhedron by a plane:

1. evaluate signed plane values at every vertex;
2. interpolate edges with opposite endpoint signs; include a zero endpoint once, and include both endpoints of an edge whose two signs are zero;
3. deduplicate intersection points;
4. order the points around their centroid in a basis of the slicing plane;
5. verify each polygon edge lies in one original face.

The slice of a convex polyhedron is convex but may be empty, a point, a segment, a polygon, or a coplanar face. The ordering steps apply to polygonal slices. A nonconvex mesh can yield several disjoint polygons and requires face-level topology, not only an unordered point set.

## 9. Convex hull as an orientation algorithm

The convex hull is the smallest convex set containing finite points. A monotone-chain algorithm sorts points lexicographically, then builds lower and upper chains while an orientation sign would create the wrong turn.

\`\`\`js
function convexHull(points) {
  if (!Array.isArray(points)) {
    throw new TypeError("points must be an array");
  }
  for (const point of points) {
    if (!Array.isArray(point) || point.length !== 2 || !point.every(Number.isFinite)) {
      throw new RangeError("each point must contain two finite coordinates");
    }
  }
  const sorted = [...points]
    .map((p) => [p[0], p[1]])
    .sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  const unique = sorted.filter((p, i) => i === 0
    || p[0] !== sorted[i - 1][0] || p[1] !== sorted[i - 1][1]);
  if (unique.length <= 1) return unique;
  const build = (sequence) => {
    const chain = [];
    for (const point of sequence) {
      while (chain.length >= 2
        && orientation(chain[chain.length - 2], chain[chain.length - 1], point) <= 0) {
        chain.pop();
      }
      chain.push(point);
    }
    return chain;
  };
  const lower = build(unique);
  const upper = build([...unique].reverse());
  return lower.slice(0, -1).concat(upper.slice(0, -1));
}
\`\`\`

This policy removes collinear boundary points except extremes. Replacing $\\le 0$ by $<0$ retains them; an all-collinear input then needs a special branch to avoid duplicating interior points when the two chains are joined. Neither is universally correct; the API must declare which hull representation it returns. Complexity is $O(n \\log n)$ from sorting after validation. The displayed binary64 code is an instructional kernel for suitably bounded coordinates; finite-input validation does not prevent intermediate overflow or a wrong orientation sign, so robust use needs exact or adaptive predicates.

## 10. Curved metric computation

For nonzero vectors $u,v\\in \\mathbb{R}^{3}$ representing directions, set $\\hat u=u/\\lVert u\\rVert$ and $\\hat v=v/\\lVert v\\rVert$. Their spherical distance on the unit sphere is

$\\arccos(\\operatorname{clamp}(\\hat u\\cdot \\hat v,-1,1))$.

Clamping protects against roundoff such as $1+2\\times 10^{-16}$; it does not repair invalid zero vectors or the loss of a tiny angle when the dot product rounds to one. The \`atan2\` formula using cross-product norm and dot product is often better conditioned. On arbitrary nonzero vectors this is a metric only after positive scalar multiples are identified.

In the Poincaré disk, points satisfy $\\lVert u \\rVert<1$, and curvature $-1$ distance obeys

$\\cosh d(u,v)=1+2\\lVert u-v \\rVert^{2}/[(1-\\lVert u \\rVert^{2})(1-\\lVert v \\rVert^{2})]$.

Points of norm at least one are outside the finite Poincaré-disk input domain; boundary points are infinitely far away. Geodesics are diameters or circles orthogonal to the unit boundary. A rendered Euclidean chord is generally not the hyperbolic shortest path.

## 11. Property-based test catalogue

Even without a testing library, enumerate invariants:

- orientation changes sign when two inputs swap and is translation invariant;
- segment intersection is symmetric in segment order;
- projection residual is perpendicular to direction for an infinite line or an interior segment projection, but generally not at a clamped endpoint;
- rotation preserves squared distance and has determinant 1;
- reflection is an involution with determinant -1;
- conic samples satisfy the unsquared ratio;
- a slice point satisfies both its source edge equation and plane equation;
- spherical distance is symmetric and lies in $[0,\\pi ]$;
- hyperbolic distance is nonnegative and diverges toward the disk boundary.

Include duplicates, zero-length objects, parallel lines, tangency, collinearity, huge magnitudes, tiny separations, and invalid nonfinite inputs. A pleasant typical picture is the easiest test and the least informative.

## 12. Worked exercises

### 1. Orientation

Compute $orient((1,1),(4,2),(2,5))$.

**Answer.** $(3)(4)-(1)(1)=11>0$, so the turn is counterclockwise and triangle area is $11/2$.

### 2. Closest point

Find the closest point on segment from $(0,0)$ to $(2,0)$ to $(3,4)$.

**Answer.** Line parameter is $(3,4)\\cdot (2,0)/4=3/2$; clamp to 1. Closest segment point is $(2,0)$, distance $\\sqrt{17}$.

### 3. Plane intersection

Line $(0,0,2)+t(1,1,-1)$ meets plane $z=0$ where?

**Answer.** $2-t=0$, so $t=2$ and point $(2,2,0)$.

### 4. Hyperbolic boundary

Why must code reject disk point $(1,0)$?

**Answer.** Its norm is 1, making the metric denominator zero. It is an ideal boundary point at infinite hyperbolic distance, not a point of the hyperbolic plane.

## Continue

The [standard course](#/item/course-euclidean-trigonometry-standard) supplies the theorem sequence; [Conics, Solids, and Projection](#/item/book-conics-solids-projections) develops the spatial constructions these predicates serve. Use the [live conic and curvature lab](#/item/visual-lab-conics-curved-geometry) to compare exact tables with rendering, and the [measurement recipe](#/item/recipe-geometric-measurement-construction) when coordinates originate in physical instruments rather than exact input.
`;export{e as default};