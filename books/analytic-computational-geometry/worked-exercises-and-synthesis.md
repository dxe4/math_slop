
# Worked Exercises and Synthesis

This earlier capstone keeps its original ten questions, solutions and learner identity. Every question now has a linked current chapter home in the revised fifteen-chapter course; follow those links for staged hints and the current context.

This capstone chapter brings together the concepts developed throughout the book in a sequence of exercises that span multiple chapters. Each problem requires choosing an appropriate representation, applying a formula correctly, and handling boundary cases. Full solutions are provided, with explicit references to the chapters on which they depend.

## Exercise 1: Line representations

Current chapter home: [Line representations](represent-geometric-objects-with-invariants.md#computational-legacy-capstone-1).

Find the implicit equation $n\cdot X=c$ for the line through $(2,5)$ and $(7,3)$. Convert it to parametric form. Find the perpendicular distance from $(0,0)$ to the line.

**Solution.** The direction is $v=(5,-2)$. A normal is $n=(2,5)$. The constant is $c=n\cdot(2,5)=4+25=29$. The implicit form is $2x+5y=29$.

For parametric form, use $P=(2,5)$ and direction $v=(5,-2)$: $L(t)=(2,5)+t(5,-2)$.

The distance from $(0,0)$ is $\lvert 2\cdot 0+5\cdot 0-29\rvert/\sqrt{2^{2}+5^{2}}=29/\sqrt{29}=\sqrt{29}$.

*(Depends on Chapter 1: Represent Geometric Objects with Invariants.)*

## Exercise 2: Orientation and area

Current chapter home: [Orientation and area](orientation-is-the-central-planar-predicate.md#computational-legacy-capstone-2).

Four points are given: $A=(1,1)$, $B=(4,2)$, $C=(3,5)$, $D=(2,4)$. Compute the orientation of $(A,B,C)$ and $(A,C,D)$. Is the quadrilateral $ABCD$ convex? What is its area?

**Solution.** $\operatorname{orient}(A,B,C)=(3)(4)-(1)(2)=10>0$. $\operatorname{orient}(A,C,D)=(2)(3)-(4)(1)=2>0$. Two diagonal-based triangle orientations do not by themselves prove convexity. Check all four consecutive turns:
$$\operatorname{orient}(A,B,C)=10,\quad \operatorname{orient}(B,C,D)=4,$$
$$\operatorname{orient}(C,D,A)=2,\quad \operatorname{orient}(D,A,B)=8.$$
All are positive, so this ordered quadrilateral is convex.

The area is the sum of the triangle areas: $\frac{1}{2}(10+2)=6$.

*(Depends on Chapter 2: Orientation Is the Central Planar Predicate.)*

## Exercise 3: Segment intersection with boundary cases

Current chapter home: [Segment intersection with boundary cases](segment-intersection-needs-boundary-cases.md#computational-legacy-capstone-3).

Determine whether the segments $P=(0,0)$ to $Q=(4,4)$ and $R=(2,2)$ to $S=(6,0)$ intersect. If they do, find the intersection point. State which boundary policy applies.

**Solution.** The first segment is $L_{1}(t)=(0,0)+t(4,4)$. The second is $L_{2}(s)=(2,2)+s(4,-2)$.

The cross denominator is $\operatorname{cross}((4,4),(4,-2))=4\cdot(-2)-4\cdot 4=-8-16=-24$.

With $R-P=(2,2)$, we get $t=\operatorname{cross}((2,2),(4,-2))/(-24)=(-4-8)/(-24)=12/24=1/2$.

The intersection is $(0,0)+(1/2)(4,4)=(2,2)$. This is the endpoint $R$ of the second segment and an interior point of the first. Under a policy that includes endpoints, the segments intersect at $(2,2)$.

*(Depends on Chapter 3: Segment Intersection Needs Boundary Cases.)*

## Exercise 4: Closest point on a polygon

Current chapter home: [Closest point on a polygon](projection-distance-and-closest-points.md#computational-legacy-capstone-4).

Find the closest point on the triangle with vertices $(0,0)$, $(4,0)$, $(0,3)$ to the query point $(5,2)$.

**Solution.** The query point is outside the triangle. We project onto each edge:

- Edge $(0,0)$-$(4,0)$: $t^{*}=(5,2)\cdot(4,0)/16=20/16=5/4>1$. Closest point is $(4,0)$, distance $\sqrt{1^{2}+2^{2}}=\sqrt{5}$.
- Edge $(4,0)$-$(0,3)$: direction $(-4,3)$. $t^{*}=((5,2)-(4,0))\cdot(-4,3)/25=(1,2)\cdot(-4,3)/25=2/25\in[0,1]$. Closest point is $(4,0)+(2/25)(-4,3)=(92/25,6/25)$, distance $\sqrt{(5-92/25)^{2}+(2-6/25)^{2}}=\sqrt{(33/25)^{2}+(44/25)^{2}}=55/25=11/5=2.2$.
- Edge $(0,3)$-$(0,0)$: $t^{*}=((5,2)-(0,3))\cdot(0,-3)/9=3/9=1/3$. Closest point is $(0,2)$, distance $5$.

The minimum distance is $11/5$, achieved at $(92/25,6/25)$ on the edge $(4,0)$-$(0,3)$.

*(Depends on Chapter 4: Projection, Distance, and Closest Points.)*

## Exercise 5: Transformation composition

Current chapter home: [Transformation composition](transformations-and-homogeneous-coordinates.md#computational-legacy-capstone-5).

Find the $3\times 3$ homogeneous matrix for: rotate by $45^{\circ}$ about the origin, then translate by $(1,0)$, then scale by $2$ in both directions. Apply the result to $(1,0)$.

**Solution.** The rotation matrix is

$$R=\begin{pmatrix}\cos 45^{\circ}&-\sin 45^{\circ}\\\sin 45^{\circ}&\cos 45^{\circ}\end{pmatrix}=\frac{1}{\sqrt{2}}\begin{pmatrix}1&-1\\1&1\end{pmatrix}.$$

The translation is $T=(1,0)$. The scale is $S=2I$. In homogeneous coordinates:

$$M_{R}=\begin{pmatrix}1/\sqrt{2}&-1/\sqrt{2}&0\\1/\sqrt{2}&1/\sqrt{2}&0\\0&0&1\end{pmatrix},\quad M_{T}=\begin{pmatrix}1&0&1\\0&1&0\\0&0&1\end{pmatrix},\quad M_{S}=\begin{pmatrix}2&0&0\\0&2&0\\0&0&1\end{pmatrix}.$$

For column vectors, the composition is
$$M=M_{S}M_{T}M_{R}=\begin{pmatrix}\sqrt2&-\sqrt2&2\\\sqrt2&\sqrt2&0\\0&0&1\end{pmatrix}.$$
Applied to $[1,0,1]^{T}$:

$$M_{R}[1,0,1]^{T}=[1/\sqrt{2},1/\sqrt{2},1]^{T},$$

$$M_{T}[1/\sqrt{2},1/\sqrt{2},1]^{T}=[1/\sqrt{2}+1,1/\sqrt{2},1]^{T},$$

$$M_{S}[1/\sqrt{2}+1,1/\sqrt{2},1]^{T}=[2/\sqrt{2}+2,2/\sqrt{2},1]^{T}=[\sqrt{2}+2,\sqrt{2},1]^{T}.$$

The image is $(\sqrt{2}+2,\sqrt{2})$.

*(Depends on Chapter 5: Transformations and Homogeneous Coordinates.)*

## Exercise 6: Conic classification

Current chapter home: [Conic Predicates](conic-predicates.md#computational-conic-ex-11).

Classify the conic $x^{2}+6xy+9y^{2}-2x+4y+1=0$. Is it degenerate?

**Solution.** $A=1$, $B=6$, $C=9$. The discriminant is $B^{2}-4AC=36-36=0$, so the quadratic part is parabola-like. The quadratic matrix is

$$Q=\begin{pmatrix}1&3\\3&9\end{pmatrix}.$$

Its determinant is $9-9=0$, confirming rank $1$. The equation factors as $(x+3y)^{2}-2x+4y+1=0$. Setting $u=x+3y$ gives $u^{2}-2x+4y+1=0$. Since $x=u-3y$, this becomes $u^{2}-2(u-3y)+4y+1=u^{2}-2u+10y+1=0$. Solving for $y$ gives a parabola. The conic is nondegenerate.

*(Depends on Chapter 6: Circles and Conics as Quadratic Forms.)*

## Exercise 7: Focus--directrix parameters

Current chapter home: [Conic Predicates](conic-predicates.md#computational-conic-ex-12).

For focus $(0,0)$, directrix $x=2$, and $e=1/3$, find the center, semiaxes, and eccentricity of the ellipse.

**Solution.** Shifting the directrix to $x=2$ is equivalent to scaling the standard formulas. The center is at $h=-e^{2}/(1-e^{2})\cdot 2=-(1/9)/(8/9)\cdot 2=-1/4$. The semiaxes are $a=e/(1-e^{2})\cdot 2=(1/3)/(8/9)\cdot 2=3/4$ and $b=e/\sqrt{1-e^{2}}\cdot 2=(1/3)/\sqrt{8/9}\cdot 2=1/\sqrt{2}$.

*(Depends on Chapter 7: Conic Focus--Directrix Computation.)*

## Exercise 8: Plane and line in 3D

Current chapter home: [Plane and line in 3D](three-dimensional-predicates.md#computational-legacy-capstone-8).

Find the intersection of the line $(1,0,0)+t(1,1,1)$ with the plane $x+y+z=3$. Is the line parallel to the plane?

**Solution.** $n=(1,1,1)$, $c=3$, $P=(1,0,0)$, $v=(1,1,1)$. The denominator is $n\cdot v=3\neq 0$, so the line is not parallel. The parameter is $t=(3-(1+0+0))/3=2/3$. The intersection is $(1,0,0)+(2/3)(1,1,1)=(5/3,2/3,2/3)$.

*(Depends on Chapter 8: Three-Dimensional Predicates.)*

## Exercise 9: Convex hull verification

Current chapter home: [Convex hull verification](convex-hull-as-an-orientation-algorithm.md#computational-legacy-capstone-9).

The points $(0,0)$, $(3,1)$, $(2,3)$, $(1,4)$, $(-1,2)$ are given. Find the convex hull and verify that every non-hull point is inside or on the boundary.

**Solution.** The extreme points are $(-1,2)$, $(0,0)$, $(3,1)$, $(2,3)$, $(1,4)$. The point $(1,4)$ is extreme; $(2,3)$ is extreme. Checking orientations confirms that $(-1,2)$-$(0,0)$-$(3,1)$-$(2,3)$-$(1,4)$ forms a convex polygon. No input point lies outside.

*(Depends on Chapter 9: Convex Hull as an Orientation Algorithm.)*

## Exercise 10: Curved distance comparison

Current chapter home: [Curved distance comparison](curved-metric-computation.md#computational-legacy-capstone-10).

On the unit sphere, find the distance from $(1,0,0)$ to $(1/\sqrt{2},1/\sqrt{2},0)$. In the Poincaré disk, find the distance from $(0,0)$ to $(1/2,1/2)$. Which distance is larger?

**Solution.** Spherical: dot product is $1/\sqrt{2}$, so distance is $\arccos(1/\sqrt{2})=\pi/4\approx 0.785$.

Hyperbolic: $\lVert u\rVert=0$, $\lVert v\rVert=\sqrt{1/4+1/4}=1/\sqrt{2}$. Then

$$\cosh d=1+\frac{2\cdot(1/2)}{(1-0)(1-1/2)}=1+\frac{1}{1/2}=3,$$

so $d=\operatorname{arccosh}(3)=\ln(3+\sqrt{8})=\ln(3+2\sqrt{2})\approx 1.763$.

The hyperbolic distance is larger.

*(Depends on Chapter 10: Curved Metric Computation.)*

## Looking backward and forward

This chapter synthesized the material of the entire book in ten capstone exercises. Each exercise required selecting the right representation, applying the correct formula, and attending to boundary cases and numerical stability.

The reader who has worked through these exercises is prepared to implement robust geometric predicates, build convex hulls, intersect rays with conics, and compute distances in Euclidean, spherical, and hyperbolic spaces. The next step is to apply these tools to larger systems: mesh generation, surface reconstruction, and geometric kernels, which are the subjects of the advanced chapters in the Math Atlas library.
