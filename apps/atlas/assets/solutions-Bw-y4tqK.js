var e=`---
parent_id: book-conics-solids-projections
matter_id: solutions
title: "Exercise and Project Solutions"
license: CC BY-SA 4.0
---

# Exercise and Project Solutions

This retained collection preserves the ninety-five exercises and solutions of the earlier fifteen-chapter edition, with its original section numbering. The current twelve-chapter route appears in the [reader guide](../front-matter/reader-guide.md). All twelve expanded main chapters each keep ten current questions with staged hints and full solutions beside their own text, preserving the earlier questions and solutions there too. The older collection below remains available; it is not an automatically synchronized copy of the expanded chapters or independent-review evidence.

---

## Chapter 1: A double cone and its planes

### Exercise 1
For the ellipse $\\frac{x^{2}}{25}+\\frac{y^{2}}{9}=1$, find $a$, $b$, $c$, the eccentricity $e$, and the foci.

**Solution.** From the standard form, $a^{2}=25$ and $b^{2}=9$, so $a=5$ and $b=3$. Then $c^{2}=a^{2}-b^{2}=25-9=16$, giving $c=4$. The eccentricity is $e=c/a=4/5$. The foci are at $(\\pm 4,0)$.

### Exercise 2
Find the focus and directrix of the parabola $y^{2}=12x$.

**Solution.** The standard form is $y^{2}=4px$, so $4p=12$ and $p=3$. The focus is $(3,0)$ and the directrix is $x=-3$.

### Exercise 3
For the hyperbola $\\frac{x^{2}}{16}-\\frac{y^{2}}{9}=1$, find the asymptotes and the eccentricity.

**Solution.** Here $a^{2}=16$ and $b^{2}=9$, so $a=4$ and $b=3$. The asymptotes are $y=\\pm\\frac{3}{4}x$. Also $c^{2}=a^{2}+b^{2}=16+9=25$, so $c=5$ and the eccentricity is $e=c/a=5/4$.

### Exercise 4
Classify the conic $9x^{2}+4y^{2}-18x+16y-11=0$, find its center, and state its semiaxes.

**Solution.** Complete the square:

$$9(x^{2}-2x)+4(y^{2}+4y)=11,$$

$$9(x-1)^{2}-9+4(y+2)^{2}-16=11,$$

$$9(x-1)^{2}+4(y+2)^{2}=36,$$

$$\\frac{(x-1)^{2}}{4}+\\frac{(y+2)^{2}}{9}=1.$$

This is an ellipse centered at $(1,-2)$ with semiaxes $a=3$ (vertical) and $b=2$ (horizontal). The major axis is vertical because the larger denominator is under the $y$ term.

### Exercise 5
A conical frustum has parallel end areas $4$ and $16$ and height $6$. Find its volume.

**Solution.** Using the frustum formula $V=\\frac{h}{3}(B_{1}+\\sqrt{B_{1}B_{2}}+B_{2})$ with $B_{1}=4$, $B_{2}=16$, and $h=6$:

$$V=\\frac{6}{3}(4+\\sqrt{64}+16)=2(4+8+16)=56.$$

The volume is $56$ cubic units, assuming the ends are parallel and similar.

### Exercise 6
With camera picture plane $z=2$, find the perspective projection of the spatial point $(3,-1,6)$.

**Solution.** The projection formula is $(fX/Z,fY/Z)$ with $f=2$:

$$\\left(\\frac{2\\cdot 3}{6},\\frac{2\\cdot(-1)}{6}\\right)=\\left(1,-\\frac{1}{3}\\right).$$

### Exercise 7
What happens when a conic slicing plane passes through the cone vertex? List all possibilities and state which nondegenerate type arises in each orientation case.

**Solution.** When the plane passes through the vertex $V$:
- If the plane intersects the cone only at $V$, the section is a single point.
- If the plane contains exactly one generator, the section is one line.
- If the plane contains two distinct generator lines, the section is two intersecting lines.

These are the degenerate cases. Every nondegenerate conic requires the plane to miss the vertex.

---

## Chapter 2: Cylinders and Surfaces of Revolution

### Exercise 1
A plane cuts a right circular cylinder of radius $5$ at angle $\\theta=\\pi/6$ to the axis. Find the semiaxes of the elliptical section.

**Solution.** The semiminor axis is $b=r=5$. The semimajor axis is $a=r/\\sin\\theta=5/\\sin(\\pi/6)=5/(1/2)=10$. The ellipse has semiaxes $10$ and $5$.

### Exercise 2
Use Pappus's first theorem to find the surface area of a torus with tube radius $r$ and distance $R$ from the tube center to the axis of revolution, where $R>r$.

**Solution.** The generating circle has arc length $L=2\\pi r$ and its centroid is at distance $R$ from the axis. The surface area is $A=2\\pi R\\cdot 2\\pi r=4\\pi^{2}Rr$.

### Exercise 3
Use Pappus's second theorem to find the volume of the same torus.

**Solution.** The generating disk has area $\\pi r^{2}$ and its centroid is at distance $R$ from the axis. The volume is $V=2\\pi R\\cdot\\pi r^{2}=2\\pi^{2}Rr^{2}$.

### Exercise 4
Identify the quadric surface $4x^{2}+9y^{2}-z^{2}=36$ and describe its sections by the planes $z=0$, $z=3$, and $x=0$.

**Solution.** Dividing by $36$:

$$\\frac{x^{2}}{9}+\\frac{y^{2}}{4}-\\frac{z^{2}}{36}=1.$$

This is a hyperboloid of one sheet. The section $z=0$ gives $\\frac{x^{2}}{9}+\\frac{y^{2}}{4}=1$, an ellipse with semiaxes $3$ and $2$. The section $z=3$ gives $\\frac{x^{2}}{9}+\\frac{y^{2}}{4}=1+\\frac{9}{36}=\\frac{5}{4}$, an ellipse with semiaxes $3\\sqrt{5}/2$ and $\\sqrt{5}$. The section $x=0$ gives $\\frac{y^{2}}{4}-\\frac{z^{2}}{36}=1$, a hyperbola with semiaxes $2$ and $6$.

### Exercise 5
A prolate spheroid is formed by revolving the ellipse $\\frac{x^{2}}{a^{2}}+\\frac{y^{2}}{b^{2}}=1$ with $a>b$ around the x-axis. Find its volume.

**Solution.** By Pappus's second theorem, the generating half-ellipse has area $\\pi ab/2$ and its centroid is at distance $4b/(3\\pi)$ from the x-axis (by symmetry of the half-ellipse). The volume is

$$V=2\\pi\\cdot\\frac{4b}{3\\pi}\\cdot\\frac{\\pi ab}{2}=\\frac{4}{3}\\pi ab^{2}.$$

Alternatively, using the disk method directly:

$$V=\\pi\\int_{-a}^{a}\\left(b\\sqrt{1-\\frac{x^{2}}{a^{2}}}\\right)^{2}dx=\\pi b^{2}\\int_{-a}^{a}\\left(1-\\frac{x^{2}}{a^{2}}\\right)dx=\\pi b^{2}\\left[x-\\frac{x^{3}}{3a^{2}}\\right]_{-a}^{a}=\\frac{4}{3}\\pi ab^{2}.$$

### Exercise 6
Show that the hyperbolic paraboloid $\\frac{x^{2}}{a^{2}}-\\frac{y^{2}}{b^{2}}=\\frac{z}{c}$ contains two families of straight lines.

**Solution.** Factor the equation as
$$\\left(\\frac{x}{a}+\\frac{y}{b}\\right)\\left(\\frac{x}{a}-\\frac{y}{b}\\right)=\\frac{z}{c}.$$
For every real $\\lambda$, the two plane equations
$$\\frac{x}{a}+\\frac{y}{b}=\\lambda,\\qquad \\frac{z}{c}=\\lambda\\left(\\frac{x}{a}-\\frac{y}{b}\\right)$$
define a line on the surface. The second family is
$$\\frac{x}{a}-\\frac{y}{b}=\\mu,\\qquad \\frac{z}{c}=\\mu\\left(\\frac{x}{a}+\\frac{y}{b}\\right),$$
for every real $\\mu$. These formulas include the zero-parameter generators and avoid division by $\\lambda$ or $\\mu$.

---

## Chapter 3: Spherical Geometry

### Exercise 1
Find the great-circle distance between New York (approximately $\\phi=40.7^{\\circ}$, $\\lambda=-74.0^{\\circ}$) and London ($\\phi=51.5^{\\circ}$, $\\lambda=-0.1^{\\circ}$), assuming Earth radius $R\\approx 6371$ km.

**Solution.** The longitude difference has magnitude $73.9^{\\circ}$. Substitution in the spherical law of cosines gives

$$\\cos\\sigma=\\sin(40.7^{\\circ})\\sin(51.5^{\\circ})+\\cos(40.7^{\\circ})\\cos(51.5^{\\circ})\\cos(73.9^{\\circ})\\approx0.6412161031.$$

Thus $\\sigma\\approx0.8747143209$ rad and

$$d=6371\\sigma\\approx5572.80494\\text{ km},$$

or about $5573$ km at the precision justified by the input coordinates.

### Exercise 2
A spherical triangle on a unit sphere has angles $A=\\pi/2$, $B=\\pi/3$, $C=\\pi/4$. Find its area.

**Solution.** The spherical excess is $E=A+B+C-\\pi=\\pi/2+\\pi/3+\\pi/4-\\pi=\\pi/12$. The area is $E=\\pi/12\\approx 0.2618$ square radians.

### Exercise 3
For a right spherical triangle with $a=\\pi/4$, $b=\\pi/4$ on a unit sphere, find the hypotenuse $c$.

**Solution.** By the spherical Pythagorean theorem:

$$\\cos c=\\cos(\\pi/4)\\cos(\\pi/4)=\\frac{\\sqrt{2}}{2}\\cdot\\frac{\\sqrt{2}}{2}=\\frac{1}{2}.$$

So $c=\\arccos(1/2)=\\pi/3$.

### Exercise 4
Verify that a spherical triangle with three right angles has area $\\pi R^{2}/2$ on a sphere of radius $R$.

**Solution.** The excess is $E=3\\cdot\\pi/2-\\pi=\\pi/2$. By Girard's theorem, the area is $R^{2}E=\\pi R^{2}/2$. Geometrically, such a triangle is one octant of the sphere, and the sphere's total area is $4\\pi R^{2}$, so one octant has area $4\\pi R^{2}/8=\\pi R^{2}/2$, confirming the result.

### Exercise 5
Use the spherical law of sines to find angle $B$ in a spherical triangle with $a=\\pi/4$, $b=\\pi/3$, and $A=\\pi/4$.

**Solution.** From $\\frac{\\sin a}{\\sin A}=\\frac{\\sin b}{\\sin B}$:

$$\\sin B=\\frac{\\sin b\\sin A}{\\sin a}=\\frac{\\sin(\\pi/3)\\sin(\\pi/4)}{\\sin(\\pi/4)}=\\sin(\\pi/3)=\\frac{\\sqrt{3}}{2}.$$

So $B=\\pi/3$ or $B=2\\pi/3$. Since $b>a$ and in spherical triangles larger sides face larger angles, $B>A=\\pi/4$, so both values are possible in principle. Additional information (such as whether the triangle is acute) would be needed to resolve the ambiguity.

### Exercise 6
Show that on a unit sphere, a spherical triangle with sides $a=b=c=\\pi/2$ has angles $A=B=C=\\pi/2$.

**Solution.** Using the law of cosines for sides with $a=b=c=\\pi/2$:

$$\\cos(\\pi/2)=\\cos(\\pi/2)\\cos(\\pi/2)+\\sin(\\pi/2)\\sin(\\pi/2)\\cos C,$$

$$0=0+1\\cdot 1\\cdot\\cos C,$$

so $\\cos C=0$ and $C=\\pi/2$. By symmetry, $A=B=\\pi/2$ as well. This is the triangle bounding one octant of the sphere.

---

## Chapter 4: Hyperbolic Models

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

---

## Chapter 5: Projective Geometry

### Exercise 1
Find the intersection of the lines $2x+3y+z=0$ and $x-y+2z=0$ in $\\mathbb{P}^{2}$.

**Solution.** Solve the system:

$$2x+3y+z=0,\\qquad x-y+2z=0.$$

From the second equation, $x=y-2z$. Substituting into the first:

$$2(y-2z)+3y+z=0\\implies 5y-3z=0\\implies y=\\frac{3}{5}z.$$

Then $x=\\frac{3}{5}z-2z=-\\frac{7}{5}z$. Taking $z=5$ gives $[-7:3:5]$. The intersection point is $[-7:3:5]$.

### Exercise 2
Show that the points $[1:0:0]$, $[0:1:0]$, $[0:0:1]$, and $[1:1:1]$ are in general position (no three collinear) in $\\mathbb{P}^{2}$.

**Solution.** Three points are collinear if they satisfy a common linear equation. The line through $[1:0:0]$ and $[0:1:0]$ is $z=0$, which does not contain $[0:0:1]$ or $[1:1:1]$. The line through $[1:0:0]$ and $[0:0:1]$ is $y=0$, which does not contain $[0:1:0]$ or $[1:1:1]$. The line through $[0:1:0]$ and $[0:0:1]$ is $x=0$, which does not contain $[1:0:0]$ or $[1:1:1]$. The line through $[1:0:0]$ and $[1:1:1]$ is $y-z=0$, which does not contain $[0:1:0]$ or $[0:0:1]$. Thus no three are collinear.

### Exercise 3
Compute the cross-ratio $(A,B;C,D)$ where $A=[1:0]$, $B=[0:1]$, $C=[1:1]$, $D=[2:1]$ on the projective line $\\mathbb{P}^{1}$.

**Solution.** Use affine parameter $t$ with $A$ at infinity, $B=0$, $C=1$, and $D=2$. With the chapter's convention,
$$(A,B;C,D)=\\frac{(t_C-t_A)(t_D-t_B)}{(t_C-t_B)(t_D-t_A)}.$$
Letting $t_A\\to\\infty$, the first and last factors have ratio tending to $1$, so
$$(A,B;C,D)=\\frac{t_D-t_B}{t_C-t_B}=\\frac{2}{1}=2.$$

### Exercise 4
Find the projective transformation that sends $[1:0:0]\\mapsto[0:1:0]$, $[0:1:0]\\mapsto[0:0:1]$, $[0:0:1]\\mapsto[1:0:0]$, and $[1:1:1]\\mapsto[1:1:1]$.

**Solution.** A projective transformation is determined by its action on four points in general position. We seek a matrix $M$ such that $M[1:0:0]=[0:1:0]$, etc. The first three conditions say the columns of $M$ are scalar multiples of $[0:1:0]$, $[0:0:1]$, $[1:0:0]$. So $M=\\begin{pmatrix}0&0&\\lambda\\\\\\mu&0&0\\\\0&\\nu&0\\end{pmatrix}$. Applying to $[1:1:1]$ gives $[\\lambda:\\mu:\\nu]$, which must equal $[1:1:1]$. So $\\lambda=\\mu=\\nu$, and we can take $\\lambda=\\mu=\\nu=1$. The transformation is $[x:y:z]\\mapsto[z:x:y]$.

### Exercise 5
Show that the conic $x^{2}+y^{2}-z^{2}=0$ is projectively equivalent to $XY-Z^{2}=0$ by giving an explicit invertible linear change of homogeneous coordinates.

**Solution.** Define
$$[X:Y:Z]=[z+x:z-x:y].$$
The matrix $\\begin{pmatrix}1&0&1\\\\-1&0&1\\\\0&1&0\\end{pmatrix}$ has nonzero determinant, so this is a projective transformation. Moreover,
$$XY-Z^2=(z+x)(z-x)-y^2=z^2-x^2-y^2.$$
Therefore $x^2+y^2-z^2=0$ exactly when $XY-Z^2=0$, as required.

### Exercise 6
Explain why the distinction between ellipse, parabola, and hyperbola is not projectively invariant.

**Solution.** In projective geometry, the line at infinity is not distinguished from other lines. An ellipse is a conic that does not meet the line at infinity; a parabola is tangent to it; a hyperbola meets it in two points. Under a general projective transformation, the line at infinity maps to some other line, and the intersection pattern changes accordingly. For example, choose a secant line meeting an ellipse in two real points and map that line to the line at infinity. The image conic then meets the new line at infinity in two points and is hyperbola-like in that affine chart. Thus the affine classification depends on the choice of line at infinity, which is not projectively invariant.

---

## Chapter 6: Descriptive Geometry

### Exercise 1
A line segment has top view length $6$ and front view vertical difference $8$. Find its true length.

**Solution.** The true length is the hypotenuse of a right triangle with legs $6$ and $8$:

$$L=\\sqrt{6^{2}+8^{2}}=\\sqrt{36+64}=\\sqrt{100}=10.$$

### Exercise 2
A plane figure projects as a line in the front view and as a $4\\times3$ rectangle in the top view. Is its true area determined? What additional hypothesis would make it $12$?

**Solution.** No. A front view that collapses to a line does not imply that the figure is parallel to the horizontal picture plane. For example, a plane $z=kx$ can have a rectangular top projection of area $12$ while its true area is $12\\sqrt{1+k^2}$. If the figure is additionally known to lie in a horizontal plane, the top view is true shape and its area is $4\\cdot3=12$.

### Exercise 3
Find the angle between the line from $(0,0,0)$ to $(1,1,1)$ and the horizontal plane $z=0$.

**Solution.** The direction vector is $(1,1,1)$. The angle $\\theta$ with the horizontal plane satisfies $\\sin\\theta=\\frac{\\lvert 1\\rvert}{\\sqrt{1^{2}+1^{2}+1^{2}}}=\\frac{1}{\\sqrt{3}}$. So $\\theta=\\arcsin(1/\\sqrt{3})\\approx 35.26^{\\circ}$.

### Exercise 4
Two planes have normals $(1,0,1)$ and $(0,1,1)$. Find the angle between them.

**Solution.** The angle $\\phi$ between the planes equals the angle between their normals:

$$\\cos\\phi=\\frac{(1,0,1)\\cdot(0,1,1)}{\\sqrt{2}\\cdot\\sqrt{2}}=\\frac{1}{2}.$$

So $\\phi=\\arccos(1/2)=\\pi/3=60^{\\circ}$.

### Exercise 5
A point $P(2,3,4)$ is projected orthographically onto the plane $x+y+z=6$. Find the projection point $Q$.

**Solution.** The normal to the plane is $(1,1,1)$. The line through $P$ perpendicular to the plane is $(2,3,4)+t(1,1,1)=(2+t,3+t,4+t)$. Intersection with $x+y+z=6$:

$$(2+t)+(3+t)+(4+t)=6\\implies 9+3t=6\\implies t=-1.$$

So $Q=(1,2,3)$. Verify: $1+2+3=6$, so $Q$ lies on the plane.

### Exercise 6
In descriptive geometry, a line is given by its traces: it meets $H$ at $(3,4,0)$ and $V$ at $(3,0,2)$. Find its true length between these traces.

**Solution.** The segment between $(3,4,0)$ and $(3,0,2)$ has length

$$L=\\sqrt{(3-3)^{2}+(0-4)^{2}+(2-0)^{2}}=\\sqrt{0+16+4}=\\sqrt{20}=2\\sqrt{5}\\approx 4.472.$$

---

## Chapter 7: Axonometric Projection

### Exercise 1
Find the foreshortening ratio in isometric projection and show that it equals $\\sqrt{2/3}$.

**Solution.** The projection direction $(1,1,1)$ makes angle $\\theta$ with each axis, where $\\cos\\theta=1/\\sqrt{3}$. The foreshortening is $\\sin\\theta=\\sqrt{1-\\cos^{2}\\theta}=\\sqrt{1-1/3}=\\sqrt{2/3}\\approx 0.8165$.

### Exercise 2
An isometric drawing shows a cube with edge length $10$ cm measured along the isometric axes. What is the true edge length of the cube if the drawing is a true isometric projection?

**Solution.** In a true isometric projection, the drawn length is the true length times $\\sqrt{2/3}$. So the true length is $10/\\sqrt{2/3}=10\\sqrt{3/2}=5\\sqrt{6}\\approx 12.25$ cm. If it is an isometric drawing (full scale), the true edge length is $10$ cm.

### Exercise 3
A circle of radius $5$ lies in the $xy$-plane. Find the lengths of the semiaxes of its isometric projection.

**Solution.** Orthogonal projection restricted to the $xy$-plane has singular values $1$ and $|e_z\\cdot(1,1,1)/\\sqrt3|=1/\\sqrt3$: the direction in the intersection of the two planes is unchanged, while its perpendicular in the source plane is shortened by the cosine of the planes' angle. Therefore the projected circle is an ellipse with semiaxes $5$ and $5/\\sqrt3\\approx2.887$.

### Exercise 4
In a dimetric projection with $p=q=\\sqrt{7/8}$ and $r=1/2$, a line segment of true length $8$ lies along the $z$-axis. What is its projected length?

**Solution.** The projected length is $8\\cdot r=8\\cdot(1/2)=4$.

### Exercise 5
Show that in any axonometric projection, the sum of the squares of the foreshortening ratios satisfies $p^{2}+q^{2}+r^{2}=2$.

**Solution.** Let the direction cosines of the projection direction be $(l,m,n)$ with $l^{2}+m^{2}+n^{2}=1$. The foreshortening ratios are $p=\\sqrt{1-l^{2}}$, $q=\\sqrt{1-m^{2}}$, $r=\\sqrt{1-n^{2}}$. Then

$$p^{2}+q^{2}+r^{2}=(1-l^{2})+(1-m^{2})+(1-n^{2})=3-(l^{2}+m^{2}+n^{2})=3-1=2.$$

For isometric projection, $p=q=r=\\sqrt{2/3}$, and $3\\cdot(2/3)=2$, confirming the formula.

### Exercise 6
A trimetric projection has foreshortening ratios $p=0.9$ and $q=0.8$. Find $r$.

**Solution.** Using $p^{2}+q^{2}+r^{2}=2$:

$$r^{2}=2-0.9^{2}-0.8^{2}=2-0.81-0.64=0.55,$$

so $r=\\sqrt{0.55}\\approx 0.7416$.

---

## Chapter 8: Stereographic Projection

### Exercise 1
Find the stereographic projection of the point $(1/2,1/2,1/\\sqrt{2})$ on the unit sphere from the north pole.

**Solution.** With $x=1/2$, $y=1/2$, $z=1/\\sqrt{2}\\approx 0.7071$:

$$X=\\frac{1/2}{1-1/\\sqrt{2}}=\\frac{1}{2-\\sqrt{2}}=\\frac{2+\\sqrt{2}}{2}=1+\\frac{\\sqrt{2}}{2}\\approx 1.7071,$$

$$Y=\\frac{1/2}{1-1/\\sqrt{2}}=1+\\frac{\\sqrt{2}}{2}\\approx 1.7071.$$

### Exercise 2
Find the point on the unit sphere that projects stereographically from the north pole to $(1,0)$ in the plane.

**Solution.** Using the inverse formulas with $X=1$, $Y=0$:

$$x=\\frac{2}{1+1}=1,\\qquad y=0,\\qquad z=\\frac{1-1}{1+1}=0.$$

The point is $(1,0,0)$, the equator point on the positive x-axis.

### Exercise 3
Show that the equator $z=0$ on the unit sphere projects to the unit circle $X^{2}+Y^{2}=1$.

**Solution.** For $z=0$, $X=x$ and $Y=y$ with $x^{2}+y^{2}=1$. So $X^{2}+Y^{2}=1$. Conversely, any point on $X^{2}+Y^{2}=1$ has $z=(1-1)/(1+1)=0$, so it lies on the equator.

### Exercise 4
For $0<\\theta<\\pi$, a nondegenerate circle of latitude at colatitude $\\theta$ (angle from the north pole) on the unit sphere has equation $z=\\cos\\theta$. Show that its stereographic projection is a circle centered at the origin with radius $\\cot(\\theta/2)$.

**Solution.** For points on the circle of latitude, $z=\\cos\\theta$ is constant. The projection is $(X,Y)=(x/(1-\\cos\\theta),y/(1-\\cos\\theta))$. Since $x^{2}+y^{2}=\\sin^{2}\\theta$, we have $X^{2}+Y^{2}=\\sin^{2}\\theta/(1-\\cos\\theta)^{2}$. Using the half-angle identity:

$$\\frac{\\sin^{2}\\theta}{(1-\\cos\\theta)^{2}}=\\frac{4\\sin^{2}(\\theta/2)\\cos^{2}(\\theta/2)}{4\\sin^{4}(\\theta/2)}=\\frac{\\cos^{2}(\\theta/2)}{\\sin^{2}(\\theta/2)}=\\cot^{2}\\frac{\\theta}{2}.$$

So the image is a circle of radius $\\cot(\\theta/2)$ centered at the origin.

### Exercise 5
Find the stereographic projection of the south pole $(0,0,-1)$.

**Solution.** With $x=0$, $y=0$, $z=-1$:

$$X=\\frac{0}{1-(-1)}=0,\\qquad Y=\\frac{0}{1-(-1)}=0.$$

The south pole projects to the origin.

### Exercise 6
A great circle on the sphere makes angle $\\phi$ with the equatorial plane. Show that its stereographic projection is a line through the origin if $\\phi=\\pi/2$, and a circle otherwise.

**Solution.** A great circle is the intersection of the sphere with a plane through the origin. If the plane is vertical (contains the z-axis), it makes angle $\\pi/2$ with the equatorial plane and passes through the north pole, so its projection is a line through the origin. If the plane is not vertical, it does not pass through the north pole, and its projection is a circle by the circle-preserving property.

---

## Chapter 9: Map Projections

### Exercise 1
Find the Mercator projection coordinates for a point at latitude $\\phi=\\pi/4$ and longitude $\\lambda=\\pi/6$, using a unit sphere.

**Solution.** $X=\\lambda=\\pi/6\\approx 0.5236$. $Y=\\ln\\tan(\\pi/8+\\pi/4)=\\ln\\tan(3\\pi/8)\\approx\\ln(2.4142)\\approx 0.8814$.

### Exercise 2
At what latitude is the area scale factor of the Mercator projection equal to $4$?

**Solution.** The area scale factor of Mercator is $(\\sec\\phi)^{2}$. Setting $\\sec^{2}\\phi=4$ gives $\\cos^{2}\\phi=1/4$, so $|\\cos\\phi|=1/2$. In the usual latitude interval $[-\\pi/2,\\pi/2]$, the two answers are $\\phi=\\pm\\pi/3=\\pm60^{\\circ}$.

### Exercise 3
In the azimuthal equidistant projection centered at the north pole, what happens at the south pole?

**Solution.** Approaching the south pole along a meridian gives radial coordinate $r=R\\pi$, but the azimuth depends on the meridian. The antipode has no unique azimuth and therefore no single planar image in the usual projection. The boundary circle of radius $R\\pi$ records directional limits, not multiple images of one mapped point.

### Exercise 4
Show that the sinusoidal projection is equal-area.

**Solution.** The element of area on the sphere is $dA=R^{2}\\cos\\phi\\,d\\phi\\,d\\lambda$. In the sinusoidal projection, $X=(\\lambda-\\lambda_{0})\\cos\\phi$ and $Y=\\phi$. The Jacobian is

$$J=\\det\\begin{pmatrix}\\frac{\\partial X}{\\partial\\lambda}&\\frac{\\partial X}{\\partial\\phi}\\\\\\frac{\\partial Y}{\\partial\\lambda}&\\frac{\\partial Y}{\\partial\\phi}\\end{pmatrix}=\\det\\begin{pmatrix}\\cos\\phi&-(\\lambda-\\lambda_{0})\\sin\\phi\\\\0&1\\end{pmatrix}=\\cos\\phi.$$

The area element in the plane is $dA'=\\lvert J\\rvert\\,d\\lambda\\,d\\phi=\\cos\\phi\\,d\\lambda\\,d\\phi$. Up to the factor $R^{2}$, this matches the spherical area element, so the projection is equal-area.

### Exercise 5
A conic projection is tangent to the sphere at latitude $\\phi_{0}=30^{\\circ}$. Find the cone's apex angle.

**Solution.** The cone is tangent along the parallel at $\\phi_{0}$. The radius of this parallel on the unit sphere is $\\cos\\phi_{0}=\\cos 30^{\\circ}=\\sqrt{3}/2$. The slant height of the cone from the apex to the tangent parallel is $\\cot\\phi_{0}=\\cot 30^{\\circ}=\\sqrt{3}$. The half-angle $\\alpha$ of the cone satisfies $\\sin\\alpha=\\cos\\phi_{0}/\\cot\\phi_{0}=\\cos\\phi_{0}\\tan\\phi_{0}=\\sin\\phi_{0}=1/2$. So $\\alpha=\\pi/6=30^{\\circ}$, and the full apex angle is $2\\alpha=\\pi/3=60^{\\circ}$.

### Exercise 6
Compare the maximum angular distortion of Mercator with the north-pole-centered orthographic projection at latitude $\\phi=45^{\\circ}$ (so central angle $\\theta=45^{\\circ}$).

**Solution.** Mercator is conformal, so its angular distortion is $0$ everywhere. For the orthographic projection, the maximum angular distortion $\\omega$ at angular distance $\\theta$ from the center is given by $\\sin(\\omega/2)=\\lvert (a-b)/(a+b)\\rvert$, where $a$ and $b$ are the semiaxes of the Tissot indicatrix. For orthographic, $a=1$ and $b=\\cos\\theta$. At the edge of the visible hemisphere ($\\theta=\\pi/2$), $b=0$ and the limiting maximum angular deformation is $\\omega=\\pi$. At $\\phi=45^{\\circ}$ from the center, $\\theta=\\pi/4$, $b=\\sqrt{2}/2$, and

$$\\sin\\frac{\\omega}{2}=\\frac{1-\\sqrt{2}/2}{1+\\sqrt{2}/2}=\\frac{2-\\sqrt{2}}{2+\\sqrt{2}}=\\frac{(2-\\sqrt{2})^{2}}{4-2}=\\frac{6-4\\sqrt{2}}{2}=3-2\\sqrt{2}\\approx 0.1716.$$

So $\\omega\\approx 2\\arcsin(0.1716)\\approx 0.344$ rad $\\approx 19.7^{\\circ}$.

---

## Chapter 10: Geometric Art

### Exercise 1
Show that the diagonal of a regular pentagon with side length $1$ has length $\\phi$.

**Solution.** Let every side be $1$ and every diagonal have length $d$. The vertices $A,B,C,D$ lie on the circumcircle, so Ptolemy's theorem applied to cyclic quadrilateral $ABCD$ gives
$$AC\\cdot BD=AB\\cdot CD+BC\\cdot AD,$$
that is, $d^2=1+d$. The positive solution is $d=(1+\\sqrt5)/2=\\phi$. (A proof from diagonal-intersection similarities gives the same equation; the non-similar triangles $ABC$ and $ACD$ alone do not.)

### Exercise 2
Find the symmetry group of a regular hexagon.

**Solution.** A regular hexagon has $6$ rotational symmetries (including the identity) and $6$ reflection symmetries. Its symmetry group is the dihedral group $D_{6}$, of order $12$.

### Exercise 3
Construct a golden rectangle with short side $1$ using compass and straightedge.

**Solution.**
1. Draw a square $ABCD$ with side $1$.
2. Find the midpoint $M$ of side $AB$.
3. Draw a circle centered at $M$ with radius $MC$.
4. Extend $AB$ to meet this circle at $E$.
5. The rectangle $AEFD$ with $AE=\\phi$ is a golden rectangle.

Verification: $MC=\\sqrt{(1/2)^{2}+1^{2}}=\\sqrt{5}/2$. So $AE=AM+ME=1/2+\\sqrt{5}/2=\\phi$.

### Exercise 4
Show that the Koch snowflake has finite area but infinite perimeter.

**Solution.** Starting with an equilateral triangle of side $1$, each iteration replaces the middle third of every edge with two sides of an equilateral triangle. The number of edges multiplies by $4$ and the length of each edge divides by $3$. After $n$ iterations, the perimeter is $3\\cdot(4/3)^{n}$, which tends to infinity. The area added at step $n$ is $3\\cdot 4^{n-1}$ triangles of side $1/3^{n}$, each with area $\\sqrt{3}/4\\cdot(1/3^{n})^{2}$. The total added area forms a geometric series with ratio $4/9<1$, so the total area is finite.

### Exercise 5
Find the vanishing point for lines parallel to the vector $(1,2,3)$ in a perspective projection with picture plane $z=1$ and camera at the origin.

**Solution.** The perspective projection is $(X,Y,Z)\\mapsto(X/Z,Y/Z)$ for $Z>0$. A line in direction $(1,2,3)$ through a point $(x_{0},y_{0},z_{0})$ is $(x_{0}+t,y_{0}+2t,z_{0}+3t)$. Its image is $((x_{0}+t)/(z_{0}+3t),(y_{0}+2t)/(z_{0}+3t))$. As $t\\to\\infty$, this approaches $(1/3,2/3)$. So the vanishing point is $(1/3,2/3)$.

### Exercise 6
A hyperbolic tessellation $\\{p,q\\}$ has $p=5$ and $q=4$. Verify that it exists in the hyperbolic plane but not in the Euclidean plane.

**Solution.** The condition for a regular tessellation is $(p-2)(q-2)<4$ for the sphere, $=4$ for the Euclidean plane, and $>4$ for the hyperbolic plane. Here $(5-2)(4-2)=3\\cdot 2=6>4$, so the tessellation exists in the hyperbolic plane but not in the Euclidean plane. (In the Euclidean plane, $4$ pentagons would have total angle sum $4\\cdot 3\\pi/5=12\\pi/5>2\\pi$, which is impossible.)

---

## Chapter 11: Project: Build a Model

### Exercise 1
A paper cone has base radius $5$ cm and height $12$ cm. Find the sector angle needed to construct it from a flat sheet.

**Solution.** The slant height is $R=\\sqrt{5^{2}+12^{2}}=13$ cm. The sector angle is $\\theta=2\\pi r/R=2\\pi\\cdot 5/13=10\\pi/13$ radians $\\approx 138.5^{\\circ}$.

### Exercise 2
A paraboloid is generated by revolving $y=x^{2}$ around the y-axis for $x\\in[0,2]$. Find its volume and surface area.

**Solution.** The volume is

$$V=\\pi\\int_{0}^{4}x^{2}\\,dy=\\pi\\int_{0}^{2}x^{2}\\cdot 2x\\,dx=2\\pi\\int_{0}^{2}x^{3}\\,dx=2\\pi\\cdot\\frac{16}{4}=8\\pi.$$

The surface area is

$$A=2\\pi\\int_{0}^{2}x\\sqrt{1+(dy/dx)^{2}}\\,dx=2\\pi\\int_{0}^{2}x\\sqrt{1+4x^{2}}\\,dx.$$

Let $u=1+4x^{2}$, $du=8x\\,dx$:

$$A=2\\pi\\cdot\\frac{1}{8}\\int_{1}^{17}\\sqrt{u}\\,du=\\frac{\\pi}{4}\\cdot\\frac{2}{3}[u^{3/2}]_{1}^{17}=\\frac{\\pi}{6}(17\\sqrt{17}-1)\\approx 36.18.$$

### Exercise 3
A stereographic projection from the north pole maps the point $(1/\\sqrt{3},1/\\sqrt{3},1/\\sqrt{3})$ to $(X,Y)$. Find $X^{2}+Y^{2}$.

**Solution.** $X=Y=\\frac{1/\\sqrt{3}}{1-1/\\sqrt{3}}=\\frac{1}{\\sqrt{3}-1}=\\frac{\\sqrt{3}+1}{2}$. So $X^{2}+Y^{2}=2\\cdot\\frac{(\\sqrt{3}+1)^{2}}{4}=\\frac{4+2\\sqrt{3}}{2}=2+\\sqrt{3}\\approx 3.732$.

### Exercise 4
A physical cone model has measured half-angle $\\alpha=28^{\\circ}$ and a slicing plane at $\\beta=50^{\\circ}$. The measured semiaxes of the elliptical section are $a=8.2$ cm and $b=5.0$ cm. Compute the eccentricity and compare with theory.

**Solution.** Measured eccentricity: $e_{\\text{meas}}=\\sqrt{1-(5.0/8.2)^{2}}=\\sqrt{1-0.3712}\\approx\\sqrt{0.6288}\\approx 0.793$. Theoretical: for a cone, $e=\\cos\\beta/\\cos\\alpha=\\cos 50^{\\circ}/\\cos 28^{\\circ}\\approx 0.6428/0.8829\\approx 0.728$. The discrepancy may be due to measurement error or the fact that the section was not taken at the exact geometry assumed.

### Exercise 5
Design a digital model of a torus with major radius $R=5$ and minor radius $r=2$. Write parametric equations and verify that the surface area is $4\\pi^{2}Rr$.

**Solution.** Parametric equations:

$$x=(R+r\\cos v)\\cos u,\\qquad y=(R+r\\cos v)\\sin u,\\qquad z=r\\sin v,$$

with $u,v\\in[0,2\\pi]$. The surface area is $A=4\\pi^{2}Rr=4\\pi^{2}\\cdot 5\\cdot 2=40\\pi^{2}\\approx 394.8$.

### Exercise 6
Use a camera at the origin and picture plane $z=1$. A horizontal ground rectangle has spatial vertices
$$A=(-2,-1,4),\\ B=(2,-1,4),\\ C=(2,-1,8),\\ D=(-2,-1,8).$$
Project its vertices and identify the vanishing point of its depth edges.

**Solution.** Perspective projection is $(X,Y,Z)\\mapsto(X/Z,Y/Z)$. Hence
$$A'=(-1/2,-1/4),\\quad B'=(1/2,-1/4),$$
$$C'=(1/4,-1/8),\\quad D'=(-1/4,-1/8).$$
The depth edges have direction $(0,0,1)$, whose vanishing point is $(0,0)$ on the horizon $y=0$. Indeed, the lines $A'D'$ and $B'C'$ both pass through $(0,0)$. The coordinates supply the depth calibration that a pair of vanishing points alone would not determine.

---

## Chapter 12: Conics in Coordinates

### Exercise 1
Classify the conic $3x^{2}+2xy+3y^{2}-8=0$ and find its semiaxes.

**Solution.** $A=3$, $B=2$, $C=3$. The discriminant is $\\Delta=4-36=-32<0$, so it is an ellipse. The matrix $Q=\\begin{pmatrix}3&1\\\\1&3\\end{pmatrix}$ has eigenvalues $\\lambda=2,4$. The standard form is $2x'^{2}+4y'^{2}=8$, or $x'^{2}/4+y'^{2}/2=1$. The semiaxes are $a=2$ and $b=\\sqrt{2}$.

### Exercise 2
Find the rotation angle that removes the cross term from $x^{2}+2\\sqrt{3}xy+3y^{2}=4$.

**Solution.** $\\cot 2\\theta=(1-3)/(2\\sqrt{3})=-1/\\sqrt{3}$, so $2\\theta=2\\pi/3$ and $\\theta=\\pi/3$.

### Exercise 3
Show that $x^{2}+xy+y^{2}=0$ has no real points except the origin.

**Solution.** Completing the square: $(x+y/2)^{2}+3y^{2}/4=0$. Both terms are nonnegative, so both must be zero. Thus $y=0$ and $x=0$. The only real point is $(0,0)$, a degenerate ellipse.

### Exercise 4
Classify the conic $4x^{2}-12xy+9y^{2}+2x-3y-5=0$ completely.

**Solution.** Set $u=2x-3y$. Both the quadratic and linear terms depend only on $u$, so the equation is
$$u^2+u-5=0.$$
Thus $u=(-1\\pm\\sqrt{21})/2$. The locus is the pair of parallel lines
$$2x-3y=\\frac{-1+\\sqrt{21}}2,\\qquad 2x-3y=\\frac{-1-\\sqrt{21}}2.$$
The zero discriminant describes a parabola-like quadratic part, but the full conic is degenerate.

### Exercise 5
Find the eigenvalues of $Q=\\begin{pmatrix}7&-2\\\\-2&4\\end{pmatrix}$ and classify the conic $7x^{2}-4xy+4y^{2}=12$.

**Solution.** Characteristic polynomial: $(7-\\lambda)(4-\\lambda)-4=\\lambda^{2}-11\\lambda+24=(\\lambda-3)(\\lambda-8)$. Eigenvalues are $3$ and $8$. The standard form is $3x'^{2}+8y'^{2}=12$, or $x'^{2}/4+y'^{2}/(3/2)=1$. This is an ellipse with semiaxes $a=2$ and $b=\\sqrt{3/2}$.

### Exercise 6
Explain why the discriminant is invariant under rotation.

**Solution.** Under rotation, $Q$ transforms to $R^{T}QR$. Since $\\det(R^{T}QR)=\\det(R^{T})\\det(Q)\\det(R)=\\det Q$ (because $\\det R=\\pm 1$ for orthogonal $R$), the determinant of $Q$ is invariant. The discriminant $\\Delta=-4\\det Q$ is therefore also invariant.

---

## Chapter 13: Quadrics in Coordinates

### Exercise 1
Classify the quadric $x^{2}+2y^{2}+3z^{2}+2xy+2xz+2yz=4$.

**Solution.** The matrix is $Q=\\begin{pmatrix}1&1&1\\\\1&2&1\\\\1&1&3\\end{pmatrix}$. Its eigenvalues are approximately $0.3249$, $1.4608$, and $4.2143$ (all positive). The standard form is an ellipsoid.

### Exercise 2
Find the cross-sections of $x^{2}-y^{2}+z^{2}=1$ by the planes $x=0$, $y=0$, and $z=0$.

**Solution.** $x=0$: $z^{2}-y^{2}=1$, a hyperbola. $y=0$: $x^{2}+z^{2}=1$, a circle. $z=0$: $x^{2}-y^{2}=1$, a hyperbola. This is a hyperboloid of one sheet.

### Exercise 3
Show that the hyperbolic paraboloid $z=x^{2}-y^{2}$ contains the line $x=y$, $z=0$.

**Solution.** If $x=y$, then $z=x^{2}-x^{2}=0$. So every point $(t,t,0)$ lies on the surface. This is one line from one ruling family.

### Exercise 4
Find the volume of the ellipsoid $\\frac{x^{2}}{4}+\\frac{y^{2}}{9}+\\frac{z^{2}}{16}=1$.

**Solution.** $a=2$, $b=3$, $c=4$. The volume is $V=4\\pi abc/3=4\\pi\\cdot 24/3=32\\pi$.

### Exercise 5
A quadric has matrix $Q=\\operatorname{diag}(1,-1,0)$ and linear terms $G=(0,0,1)$. Identify the surface.

**Solution.** The equation is $x^{2}-y^{2}+z=0$, or $z=y^{2}-x^{2}$. This is a hyperbolic paraboloid.

### Exercise 6
Show that a nonempty regular central quadric invariant under every rotation about every axis through its center is a sphere.

**Solution.** Translate the center to the origin, so the equation is $X^TQX=K$. Invariance under every rotation gives $R^TQR=Q$ for every $R\\in SO(3)$. Applying rotations that interchange coordinate directions and rotations within coordinate planes forces all three eigenvalues of the symmetric matrix $Q$ to be equal, so $Q=\\lambda I$. Regularity and nonemptiness exclude $\\lambda=0$, $K=0$, and opposite-sign empty levels. Hence $\\lVert X\\rVert^2=K/\\lambda$ with $K/\\lambda>0$, a sphere. The hypotheses exclude the empty set and singleton, which would otherwise have excessive symmetry.

---

## Chapter 14: Transformation Geometry

### Exercise 1
Find the Euclidean isometry that maps $(0,0)\\mapsto(1,1)$, $(1,0)\\mapsto(1,2)$, and $(0,1)\\mapsto(0,1)$.

**Solution.** The vectors $(1,0)$ and $(0,1)$ map to $(0,1)$ and $(-1,0)$. This is a rotation by $\\pi/2$ about its fixed point $(0,1)$. The transformation is $(x,y)\\mapsto(1-y,1+x)$.

### Exercise 2
Show that the affine map $(x,y)\\mapsto(2x,y)$ maps the unit circle to an ellipse.

**Solution.** If $x^{2}+y^{2}=1$, then $(x'/2)^{2}+y'^{2}=1$, so $x'^{2}/4+y'^{2}=1$. This is an ellipse with semiaxes $2$ and $1$.

### Exercise 3
Find the projective transformation that sends $[1:0:0]\\mapsto[0:1:0]$, $[0:1:0]\\mapsto[0:0:1]$, $[0:0:1]\\mapsto[1:0:0]$, and $[1:1:1]\\mapsto[1:1:1]$.

**Solution.** As in an earlier exercise, this is $[x:y:z]\\mapsto[z:x:y]$.

### Exercise 4
Show that the cross-ratio is preserved under affine transformations.

**Solution.** An affine transformation has the form $x\\mapsto ax+b$ with $a\\neq 0$. For four collinear points with coordinates $x_{1},x_{2},x_{3},x_{4}$, the cross-ratio is

$$\\frac{(x_{3}-x_{1})(x_{4}-x_{2})}{(x_{3}-x_{2})(x_{4}-x_{1})}.$$

Under $x\\mapsto ax+b$, each difference $x_{i}-x_{j}$ becomes $a(x_{i}-x_{j})$. The factors $a$ cancel in the cross-ratio, so it is preserved.

### Exercise 5
A similarity transformation maps a triangle with sides $3,4,5$ to a triangle with longest side $15$. Find the other two sides.

**Solution.** The scale factor is $k=15/5=3$. The other sides are $3\\cdot 3=9$ and $3\\cdot 4=12$.

### Exercise 6
Explain why area is not a projective invariant.

**Solution.** It is enough to use the affine dilation $(x,y)\\mapsto(kx,ky)$, which is also projective. It multiplies every finite area by $k^2$, so the numerical area of a square changes whenever $k\\ne1$. Therefore area itself is not invariant under the projective group. Constant functions of area are trivially invariant, so the stronger claim that no function of area can be invariant would be false.

---

## Chapter 15: Applications and Synthesis

### Exercise 1
A right circular cone has half-angle $\\alpha=30^{\\circ}$. A plane missing the cone vertex cuts it at angle $\\beta=60^{\\circ}$ to the axis. Classify the section and find its eccentricity.

**Solution.** Since $\\beta>\\alpha$, the section is an ellipse. The eccentricity of a conic section of a cone is $e=\\cos\\beta/\\cos\\alpha=\\cos 60^{\\circ}/\\cos 30^{\\circ}=(1/2)/(\\sqrt{3}/2)=1/\\sqrt{3}\\approx 0.577$.

### Exercise 2
For $0\\le h\\le2R$, find the volume and curved surface area of a spherical cap of height $h$ on a sphere of radius $R$.

**Solution.** The volume is $V=\\pi h^{2}(R-h/3)$. The surface area (excluding the base) is $A=2\\pi Rh$. For $R=1$ and $h=1/2$, $V=\\pi(1/4)(1-1/6)=5\\pi/24$ and $A=\\pi$.

### Exercise 3
A quadric surface has equation $x^{2}+2y^{2}+3z^{2}+2xy+2xz+2yz=6$. Find its principal axes and semiaxes lengths.

**Solution.** The matrix $Q=\\begin{pmatrix}1&1&1\\\\1&2&1\\\\1&1&3\\end{pmatrix}$ has eigenvalues approximately $0.324869$, $1.460811$, and $4.214320$. Corresponding orthonormal principal-axis directions (signs arbitrary) are approximately
$$(0.88765,-0.42713,-0.17215),\\quad(0.23319,0.73924,-0.63178),\\quad(0.39711,0.52066,0.75579).$$
In coordinates along these axes, the semiaxes are $\\sqrt{6/0.324869}\\approx4.30$, $\\sqrt{6/1.460811}\\approx2.03$, and $\\sqrt{6/4.214320}\\approx1.19$.

### Exercise 4
For $0<\\theta<\\pi$, show that the stereographic projection of the nondegenerate circle of latitude at colatitude $\\theta$ is a circle of radius $\\cot(\\theta/2)$.

**Solution.** As derived in Chapter 8, $X^{2}+Y^{2}=\\sin^{2}\\theta/(1-\\cos\\theta)^{2}=\\cot^{2}(\\theta/2)$.

### Exercise 5
A hyperbolic triangle has angles $\\pi/3$, $\\pi/4$, $\\pi/6$. Find its area.

**Solution.** The defect is $\\pi-(\\pi/3+\\pi/4+\\pi/6)=\\pi-(4\\pi/12+3\\pi/12+2\\pi/12)=\\pi-9\\pi/12=\\pi/4$. The area is $\\pi/4$.

### Exercise 6
An affine transformation maps the unit square to a parallelogram with vertices $(0,0)$, $(2,1)$, $(3,3)$, $(1,2)$. Find the matrix $M$ and verify that the area of the parallelogram is $\\lvert\\det M\\rvert$.

**Solution.** The edges from $(0,0)$ are $(2,1)$ and $(1,2)$. So $M=\\begin{pmatrix}2&1\\\\1&2\\end{pmatrix}$. The area of the parallelogram is $\\lvert 2\\cdot 2-1\\cdot 1\\rvert=3$. The determinant is $4-1=3$, confirming the formula.

### Exercise 7
Find the cross-ratio $(A,B;C,D)$ for collinear points with coordinates $A=0$, $B=1$, $C=2$, $D=3$.

**Solution.** $(A,B;C,D)=\\frac{(2-0)(3-1)}{(2-1)(3-0)}=\\frac{2\\cdot 2}{1\\cdot 3}=4/3$.

### Exercise 8
A paraboloid $z=x^{2}+y^{2}$ is intersected by the plane $z=4$. Identify the cross-section and find its area.

**Solution.** The intersection is $x^{2}+y^{2}=4$, a circle of radius $2$. The area is $4\\pi$.

### Exercise 9
In the Poincar\\'{e} half-plane, find the hyperbolic distance between $(0,2)$ and $(3,2)$.

**Solution.** Using $\\cosh d=1+\\frac{(3-0)^{2}+(2-2)^{2}}{2\\cdot 2\\cdot 2}=1+9/8=17/8$. So $d=\\operatorname{arccosh}(17/8)=\\ln(17/8+\\sqrt{289/64-1})=\\ln(17/8+15/8)=\\ln 4\\approx 1.386$.

### Exercise 10
A conical frustum has height $h=9$, top radius $r_{1}=2$, and bottom radius $r_{2}=5$. Find its volume and lateral surface area.

**Solution.** The volume is $V=\\frac{\\pi h}{3}(r_{1}^{2}+r_{1}r_{2}+r_{2}^{2})=\\frac{9\\pi}{3}(4+10+25)=3\\pi\\cdot 39=117\\pi$. The slant height is $l=\\sqrt{h^{2}+(r_{2}-r_{1})^{2}}=\\sqrt{81+9}=\\sqrt{90}=3\\sqrt{10}$. The lateral area is $\\pi(r_{1}+r_{2})l=\\pi\\cdot 7\\cdot 3\\sqrt{10}=21\\pi\\sqrt{10}$.
`;export{e as default};