var e=`---
parent_id: book-conics-solids-projections
chapter_id: hyperbolic-models
title: "Hyperbolic Models"
level: undergraduate
estimated_minutes: 180
license: CC BY-SA 4.0
---

# Hyperbolic Models

This earlier companion keeps its original mathematics, exercises and learner identity. The current main reading is [Hyperbolic Geometry](../../geometry-proof-reference/hyperbolic-geometry.md).

Spherical geometry arises when space has constant positive curvature: triangles are \`\`fat'' and angle sums exceed $\\pi$. Hyperbolic geometry is the opposite: space has constant negative curvature, triangles are \`\`thin,'' and angle sums are less than $\\pi$. This chapter introduces three concrete models of the hyperbolic plane---the Poincar\\'{e} disk, the Poincar\\'{e} half-plane, and the hyperboloid model---and derives the formulas that make computations possible.

## The hyperbolic axiom

Euclid's parallel postulate states that through a point not on a given line, exactly one parallel line can be drawn. In hyperbolic geometry, the parallel postulate is replaced by:

> Through a point not on a given line, at least two distinct lines can be drawn that do not intersect the given line.

This single change produces a consistent geometry with remarkable properties: the area of a triangle is determined by its angle defect, similar triangles are congruent, and the circumference of a circle grows exponentially with its radius.

## The Poincar\\'{e} disk model

The Poincar\\'{e} disk model represents the hyperbolic plane as the open unit disk $D=\\{z\\in\\mathbb{C}:\\lvert z\\rvert<1\\}$ (or equivalently $\\{(x,y):x^{2}+y^{2}<1\\}$). Hyperbolic lines are represented by diameters of the disk and by circular arcs orthogonal to the boundary circle.

The hyperbolic distance between two points $z_{1},z_{2}\\in D$ is

$$d(z_{1},z_{2})=2\\operatorname{arctanh}\\left\\lvert\\frac{z_{2}-z_{1}}{1-\\overline{z_{1}}z_{2}}\\right\\rvert.$$

In particular, the distance from the origin to a point $z$ with $\\lvert z\\rvert=r$ is

$$d(0,z)=2\\operatorname{arctanh}r=\\ln\\frac{1+r}{1-r}.$$

As $r\\to 1$, this distance tends to infinity, so the boundary circle is at infinite hyperbolic distance from any interior point.

### Hyperbolic angles

The Poincar\\'{e} disk model is conformal: the angle between two hyperbolic lines equals the Euclidean angle between their representative arcs. This makes the disk model especially convenient for constructions involving angles.

### Hyperbolic triangles

A hyperbolic triangle has angle sum strictly less than $\\pi$. With curvature normalized to $K=-1$, its area is given by the Gauss--Bonnet formula:

$$\\text{Area}=\\pi-(A+B+C),$$

where $A$, $B$, $C$ are the interior angles. Unlike the spherical case where area equals excess, here area equals defect. As the triangle becomes small, the defect tends to zero and the geometry approaches the Euclidean limit.

## The Poincar\\'{e} half-plane model

The Poincar\\'{e} half-plane model represents the hyperbolic plane as the upper half-plane $H=\\{(x,y)\\in\\mathbb{R}^{2}:y>0\\}$. Hyperbolic lines are represented by vertical rays and by semicircles centered on the x-axis.

The hyperbolic distance between $(x_{1},y_{1})$ and $(x_{2},y_{2})$ is

$$d=2\\operatorname{arcsinh}\\left(\\frac{\\sqrt{(x_{2}-x_{1})^{2}+(y_{2}-y_{1})^{2}}}{2\\sqrt{y_{1}y_{2}}}\\right).$$

An equivalent formula is

$$\\cosh d=1+\\frac{(x_{2}-x_{1})^{2}+(y_{2}-y_{1})^{2}}{2y_{1}y_{2}}.$$

The half-plane model is also conformal. It is often more convenient than the disk model for computations involving translations along the x-axis, because horizontal translation $(x,y)\\mapsto(x+t,y)$ is a hyperbolic isometry.

### Isometries of the half-plane

The orientation-preserving isometries of the half-plane model are the M\\'{o}bius transformations

$$z\\mapsto\\frac{az+b}{cz+d}$$

with $a,b,c,d\\in\\mathbb{R}$ and $ad-bc=1$, acting on $z=x+iy$. These transformations map the upper half-plane to itself and preserve hyperbolic distance.

## The hyperboloid model

The hyperboloid model represents the hyperbolic plane as the upper sheet of the two-sheeted hyperboloid

$$x^{2}+y^{2}-z^{2}=-1,\\qquad z>0$$

in Minkowski space with metric $ds^{2}=dx^{2}+dy^{2}-dz^{2}$. Geodesics are intersections of the hyperboloid with planes through the origin.

The hyperboloid model has the advantage that its isometries are exactly the Lorentz transformations preserving the Minkowski metric and the upper sheet. It is less intuitive for drawing but most natural for group-theoretic and physical applications.

### Relation to the disk model

Stereographic projection from the point $(0,0,-1)$ onto the plane $z=0$ maps the upper hyperboloid sheet to the unit disk. This projection is an isometry when the disk carries the Poincar\\'{e} metric, showing that the hyperboloid and disk models are equivalent.

## Common errors

- **Treating the boundary as part of the space.** In the Poincar\\'{e} disk, the unit circle is not part of the hyperbolic plane; points on it are at infinite distance.
- **Using Euclidean distance formulas.** The hyperbolic distance grows much faster than Euclidean distance near the boundary.
- **Confusing the two sheets of the hyperboloid.** Only the upper sheet $z>0$ represents the hyperbolic plane; the lower sheet is a separate copy.
- **Assuming noncongruent similar triangles exist.** In curvature $-1$ hyperbolic geometry, triangles with the same corresponding angles are congruent; there is no nontrivial dilation that changes size while preserving all angles.

## Practice exercises with solutions

### Exercise 1
Find the hyperbolic distance from the origin to the point $z=1/2$ in the Poincar\\'{e} disk model.

**Solution.** Using $d(0,z)=2\\operatorname{arctanh}r$ with $r=1/2$:

$$d=2\\operatorname{arctanh}(1/2)=\\ln\\frac{1+1/2}{1-1/2}=\\ln 3\\approx 1.0986.$$

### Exercise 2
A hyperbolic triangle in the Poincar\\'{e} disk has angles $\\pi/4$, $\\pi/4$, $\\pi/6$. Find its area.

**Solution.** The angle defect is $\\pi-(\\pi/4+\\pi/4+\\pi/6)=\\pi-(\\pi/2+\\pi/6)=\\pi/3$. The area is $\\pi/3$.

### Exercise 3
In the Poincar\\'{e} half-plane, find the hyperbolic distance between $(0,1)$ and $(0,2)$.

**Solution.** Using the formula with $x_{1}=x_{2}=0$, $y_{1}=1$, $y_{2}=2$:

$$\\cosh d=1+\\frac{0+1}{2\\cdot 1\\cdot 2}=1+\\frac{1}{4}=\\frac{5}{4}.$$

So $d=\\operatorname{arccosh}(5/4)=\\ln(5/4+\\sqrt{25/16-1})=\\ln(5/4+3/4)=\\ln 2\\approx 0.6931$.

### Exercise 4
Show directly from the half-plane distance formula that every dilation $z\\mapsto\\lambda z$ with $\\lambda>0$ and every horizontal translation $z\\mapsto z+t$ with $t\\in\\mathbb R$ is a hyperbolic isometry.

**Solution.** For a dilation, both squared coordinate differences in the numerator of
$$\\cosh d=1+\\frac{(x_2-x_1)^2+(y_2-y_1)^2}{2y_1y_2}$$
are multiplied by $\\lambda^2$, and the denominator is also multiplied by $\\lambda^2$, so the quotient is unchanged. A horizontal translation leaves $x_2-x_1$, $y_2-y_1$, and $y_1y_2$ unchanged. Thus both maps preserve every distance. They are also represented by real determinant-one Möbius matrices after choosing projectively equivalent scalar representatives.

### Exercise 5
Find the circumference of a hyperbolic circle of radius $r$ in the Poincar\\'{e} disk model.

**Solution.** In the hyperboloid model, a circle of radius $r$ is the intersection of the hyperboloid with a plane $z=\\cosh r$. The intersection is a Euclidean circle of radius $\\sinh r$ in that plane. The hyperbolic circumference is $2\\pi\\sinh r$. In the disk model, the same formula holds. For small $r$, $\\sinh r\\approx r$ and the circumference approaches $2\\pi r$, the Euclidean formula. For large $r$, the circumference grows like $\\pi e^{r}$, exponentially faster than in Euclidean space.

### Exercise 6
A regular hyperbolic pentagon has all angles equal to $\\pi/2$. Find its area.

**Solution.** A pentagon can be divided into three triangles. Alternatively, the Gauss-Bonnet theorem generalizes to polygons: the area of an $n$-gon with angles $\\alpha_{1},\\dots,\\alpha_{n}$ is

$$\\text{Area}=(n-2)\\pi-(\\alpha_{1}+\\cdots+\\alpha_{n}).$$

For $n=5$ and all angles $\\pi/2$:

$$\\text{Area}=3\\pi-5\\cdot\\frac{\\pi}{2}=\\frac{\\pi}{2}.$$

## Looking backward and forward

This chapter introduced hyperbolic geometry through three concrete models. The Poincar\\'{e} disk and half-plane models are conformal and convenient for drawing; the hyperboloid model connects hyperbolic geometry to linear algebra and physics. The fundamental difference from spherical geometry is the sign of curvature: spherical triangles have excess, hyperbolic triangles have defect.

The next chapter, **Projective Geometry**, unifies these viewpoints. Projective geometry treats elliptic, Euclidean, and hyperbolic geometries as special cases of a single projective space with different choices of absolute conic. The projective perspective also explains why asymptotes, ideal points, and duality appear naturally in all three geometries.
`;export{e as default};