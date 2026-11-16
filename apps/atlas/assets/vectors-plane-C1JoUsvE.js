var e=`---
parent_id: book-euclidean-geometry-trigonometry
chapter_id: vectors-plane
title: "Vectors in the Plane"
level: secondary
license: "CC BY-SA 4.0"
---

# Vectors in the Plane

A point records a position. A vector records a displacement: how far and in which direction one position changes to another. The same displacement can begin at many different points, so a vector is not tied to one arrow drawn on the page. This distinction makes vectors useful for describing routes, parallel lines, midpoints and forces without repeatedly choosing new triangles.

Required preparation is [Coordinates: Lines, Distance and Circles](coordinates-lines-distance-circles.md), [Sine and Cosine Rules](sine-cosine-rules.md), and basic algebra. We work only in the ordinary Euclidean plane with real coordinates. There is no assumption of abstract vector spaces or matrix theory.

The main question is how algebra on two components corresponds to geometric movement. We will establish the operation rules, connect the dot product to angles, and use them in elementary proofs. The later [Finite-Dimensional Linear Algebra: Structure and Proof](/atlas/#/item/book-linear-algebra-structure-proofs) gives a proof-based continuation at a higher level; it is not required preparation for this chapter.

## Displacement and equality

**Definition 16.1 (Plane vector).** A plane vector is an ordered pair $\\mathbf u=(u_1,u_2)$ of real components, interpreted as horizontal and vertical displacement. For points $A=(x_1,y_1)$ and $B=(x_2,y_2)$,
$$
\\overrightarrow{AB}=B-A=(x_2-x_1,y_2-y_1).
$$
Two vectors are equal when their corresponding components are equal.

An arrow from $(0,0)$ to $(3,2)$ and an arrow from $(5,-1)$ to $(8,1)$ represent the same vector $(3,2)$. They have the same length and direction despite occupying different parts of the plane. Translating both endpoints by one fixed displacement leaves their difference unchanged.

The zero vector $\\mathbf0=(0,0)$ represents no displacement. It has length zero and no unique direction. The vector $-\\mathbf u=(-u_1,-u_2)$ reverses a displacement. Thus $\\overrightarrow{BA}=-\\overrightarrow{AB}$, while the two segment lengths are equal.

**Definition 16.2 (Magnitude).** The magnitude or length of $\\mathbf u$ is
$$
|\\mathbf u|=\\sqrt{u_1^2+u_2^2}.
$$
This is the distance formula applied to an arrow beginning at the origin. It is nonnegative and vanishes exactly when both components vanish.

A component may be negative while the magnitude remains positive. The vector $(-3,4)$ has length five, not one or negative five. Squaring the components preserves both contributions to distance.

## Addition and scalar multiplication

**Definition 16.3 (Operations).** Set
$$
\\mathbf u+\\mathbf v=(u_1+v_1,u_2+v_2),\\qquad
k\\mathbf u=(ku_1,ku_2)
$$
for any real number $k$. Subtraction means $\\mathbf u-\\mathbf v=\\mathbf u+(-\\mathbf v)$.

**Theorem 16.4 (Head-to-tail law).** For any points $A,B,C$,
$$
\\overrightarrow{AB}+\\overrightarrow{BC}=\\overrightarrow{AC}.
$$
Vector addition is commutative and associative, and $|\\;k\\mathbf u\\;|=|k|\\,|\\mathbf u|$.

*Proof.* Coordinate differences telescope:
$$
(B-A)+(C-B)=C-A.
$$
Commutativity and associativity follow by applying the corresponding real-number laws to each component. For the magnitude,
$$
|k\\mathbf u|=\\sqrt{k^2u_1^2+k^2u_2^2}
=\\sqrt{k^2}\\sqrt{u_1^2+u_2^2}=|k|\\,|\\mathbf u|.
$$
The absolute value accounts for negative scalars, which reverse direction but cannot make a length negative. ∎

The geometric addition rule places the start of the second arrow at the end of the first without changing its vector. The diagonal from the initial start to the final endpoint represents the sum. The parallelogram construction gives the same result by using the two vectors as adjacent sides.

**Example 16.5 (A route and its net displacement).** Let $A=(-1,3)$, $B=(4,-2)$ and $C=(6,1)$. Then
$$
\\overrightarrow{AB}=(5,-5),\\qquad
\\overrightarrow{BC}=(2,3),
$$
and their sum is $(7,-2)=\\overrightarrow{AC}$. Its magnitude is $\\sqrt{49+4}=\\sqrt{53}$.

The route through $B$ has length $\\sqrt{50}+\\sqrt{13}$, which is different from the direct displacement length. Adding vectors accounts for direction; adding their magnitudes counts travelled lengths. Confusing those operations loses the cancellation of opposite components.

## Parallel directions and lines

For a nonzero vector $\\mathbf v$ and point $P$, the points
$$
P+t\\mathbf v,\\qquad t\\in\\mathbb R,
$$
form the full line through $P$ in direction $\\mathbf v$. Restricting $0\\le t\\le1$ gives the segment from $P$ to $P+\\mathbf v$. Restricting $t\\ge0$ gives a ray.

**Proposition 16.6 (Parallel nonzero vectors).** Nonzero vectors $\\mathbf u,\\mathbf v$ have parallel directions exactly when one is a nonzero real multiple of the other. In components, this is equivalent to
$$
u_1v_2-u_2v_1=0.
$$

*Proof.* A scalar multiple plainly gives the same or opposite line direction, and substitution makes the displayed expression zero. Conversely, suppose that expression vanishes. If $v_1\\ne0$, put $k=u_1/v_1$. The equality gives $u_2=kv_2$, so $\\mathbf u=k\\mathbf v$. If $v_1=0$, then $v_2\\ne0$ and the equality forces $u_1=0$; take $k=u_2/v_2$. Because $\\mathbf u$ is nonzero, the resulting multiplier is nonzero. ∎

The component equation also holds when a vector is zero, but the zero vector has no geometric direction. State the nonzero assumption when using it to describe parallel rays or lines. This is the same kind of exceptional case as the missing slope of a vertical line.

A point and a displacement should also remain distinct in line equations. Writing $P+t\\mathbf v$ means add component changes to the point's coordinates. A different starting point may describe the same line if it already lies on that line; changing the direction vector by a nonzero scalar also leaves the full line unchanged.

## The dot product and angles

**Definition 16.7 (Dot product).** For $\\mathbf u=(u_1,u_2)$ and $\\mathbf v=(v_1,v_2)$, define
$$
\\mathbf u\\cdot\\mathbf v=u_1v_1+u_2v_2.
$$
The result is a real number, not another plane vector.

**Theorem 16.8 (Angle form of the dot product).** For nonzero vectors with smaller angle $\\theta$ between them, $0^\\circ\\le\\theta\\le180^\\circ$,
$$
\\mathbf u\\cdot\\mathbf v=|\\mathbf u|\\,|\\mathbf v|\\cos\\theta.
$$
Consequently they are perpendicular exactly when their dot product is zero.

*Proof.* Draw both vectors from the same origin. The segment joining their endpoints represents $\\mathbf u-\\mathbf v$. The cosine rule gives
$$
|\\mathbf u-\\mathbf v|^2
=|\\mathbf u|^2+|\\mathbf v|^2-2|\\mathbf u||\\mathbf v|\\cos\\theta.
$$
Direct component expansion gives the same left side as
$$
|\\mathbf u|^2+|\\mathbf v|^2-2(u_1v_1+u_2v_2).
$$
Equating and cancelling proves the formula. The product of the two positive magnitudes is nonzero, so the dot product vanishes exactly when $\\cos\\theta=0$, namely at a right angle. The collinear endpoint-angle cases satisfy the same equations directly. ∎

A positive dot product indicates an acute angle; a negative one indicates an obtuse angle. If either vector is zero, its dot product with every vector is zero algebraically, but an angle between them is undefined. The nonzero hypothesis prevents that algebraic fact from being mistaken for a geometric right angle.

**Example 16.9 (Perpendicularity and a unit direction).** Let $\\mathbf u=(3,4)$ and $\\mathbf v=(4,-3)$. Their dot product is $12-12=0$, so they are perpendicular. Each magnitude is five. The vector $\\mathbf e=(3/5,4/5)$ has magnitude one and points in the same direction as $\\mathbf u$.

For any nonzero vector, division by its positive magnitude produces such a unit vector. The expression $\\mathbf0/|\\mathbf0|$ is undefined and cannot supply a direction for no displacement.

## Projection as an elementary construction

**Theorem 16.10 (Projection onto a nonzero direction).** For $\\mathbf v\\ne\\mathbf0$, the vector
$$
\\mathbf p=\\frac{\\mathbf w\\cdot\\mathbf v}{\\mathbf v\\cdot\\mathbf v}\\,\\mathbf v
$$
is a scalar multiple of $\\mathbf v$, and $(\\mathbf w-\\mathbf p)\\cdot\\mathbf v=0$. When the residual $\\mathbf w-\\mathbf p$ is nonzero, it is perpendicular to $\\mathbf v$. The vector $\\mathbf p$ is the component of $\\mathbf w$ along that line.

*Proof.* The denominator is $|\\mathbf v|^2>0$. The formula makes $\\mathbf p$ a multiple of $\\mathbf v$. Expanding the dot product,
$$
(\\mathbf w-\\mathbf p)\\cdot\\mathbf v
=\\mathbf w\\cdot\\mathbf v-
\\frac{\\mathbf w\\cdot\\mathbf v}{\\mathbf v\\cdot\\mathbf v}
(\\mathbf v\\cdot\\mathbf v)=0.
$$
If the residual is nonzero, the preceding perpendicularity result gives a right angle; if it is zero, $\\mathbf w$ already lies on the line. Thus the endpoint of $\\mathbf p$ is the perpendicular foot from the endpoint of $\\mathbf w$ to the line through the origin in direction $\\mathbf v$. ∎

**Example 16.11 (Projecting onto a diagonal).** Take $\\mathbf w=(6,2)$ and $\\mathbf v=(1,1)$. Their dot product is eight and $\\mathbf v\\cdot\\mathbf v=2$, so
$$
\\mathbf p=4(1,1)=(4,4).
$$
The residual is $(2,-2)$, whose dot product with $(1,1)$ is zero. Its length $2\\sqrt2$ is the distance from $(6,2)$ to the line $y=x$.

The coefficient four is a signed scalar along the chosen direction; the projected length is $|\\mathbf p|=4\\sqrt2$. If the coefficient were negative, the projection would point in the opposite direction along the same line. For coefficient $c$, the projected length is $|c|\\,|\\mathbf v|$. A unit direction vector makes this length $|c|$, while a zero coefficient gives length zero for any nonzero direction vector.

## A vector proof of a familiar theorem

**Proposition 16.12 (Triangle midpoint segment).** If $M,N$ are midpoints of $AB,AC$, then the segment $MN$ is parallel to $BC$ and has half its length.

*Proof.* Use the coordinate midpoint descriptions $M=(A+B)/2$ and $N=(A+C)/2$. Their difference is
$$
\\overrightarrow{MN}=N-M
=\\frac{A+C-A-B}{2}
=\\frac12(C-B)=\\frac12\\overrightarrow{BC}.
$$
The positive scalar factor one-half proves both the parallel direction and the length ratio. ∎

**Example 16.13 (A midpoint calculation).** Let $A=(1,1)$, $B=(7,3)$ and $C=(3,9)$. Then $M=(4,2)$ and $N=(2,5)$. Thus $\\overrightarrow{MN}=(-2,3)$, while $\\overrightarrow{BC}=(-4,6)$. The first is exactly half the second, and $MN=\\sqrt{13}$ compared with $BC=2\\sqrt{13}$.

The proof works for all triangle coordinates, not merely for this example. Coordinates can be chosen freely because the vector differences eliminate the common starting point. This is one reason vector proofs often expose a simple structure behind a longer diagram-based argument.

Vectors will next describe transformations: a translation adds one fixed vector to every point, while rotations and reflections change components in a way that preserves distances. Keeping positions, displacements and scalar measurements distinct will make those formulas easier to interpret.

## Worked example — Locating a perpendicular foot beyond a segment

Let a segment start at $A=(1,1)$ and end at $B=(3,2)$, and let $P=(5,4)$. Its direction is $v=(2,1)$, while the displacement from its start to the point is $w=(4,3)$. A point on the entire supporting line has the form $A+tv$. Requiring its displacement from $P$ to be perpendicular to the line gives $v\\cdot(w-tv)=0$. Since the squared length of $v$ is five, the unique parameter is $t=11/5$.

This exceeds one. The perpendicular foot therefore lies beyond the endpoint $B$, rather than on the segment. The distance to the line and the distance to the segment are consequently different questions. To locate the closest segment point, expand the squared distance as a quadratic in $t$. Completing the square shows that it decreases until the foot parameter and increases afterwards. On the allowed interval from zero to one it therefore decreases throughout, so the closest segment point is $B$. This deduction uses both the perpendicular equation and the parameter restriction; drawing the infinite line alone would omit the second condition.

## Exercises

### Exercise 16.1
<a id="vectors-plane-ex-1"></a>

Find $\\overrightarrow{AB}$ and its magnitude for $A=(2,-3)$ and $B=(-4,5)$.

<details>
<summary>Hint 1</summary>

Subtract the start coordinates from the end coordinates.

</details>
<details>
<summary>Hint 2</summary>

Use squared components for the magnitude.

</details>
<details>
<summary>Solution</summary>

The displacement is $(-4-2,5-(-3))=(-6,8)$. Its magnitude is $\\sqrt{36+64}=10$. Reversing the endpoints would give $(6,-8)$ with the same magnitude, because direction changes but length does not.

</details>

### Exercise 16.2
<a id="vectors-plane-ex-2"></a>

If $\\mathbf u=(2,-5)$ and $\\mathbf v=(-3,4)$, find $2\\mathbf u-\\mathbf v$.

<details>
<summary>Hint 1</summary>

Scale each component before subtracting.

</details>
<details>
<summary>Hint 2</summary>

Subtracting a negative component adds its positive opposite.

</details>
<details>
<summary>Solution</summary>

Twice $\\mathbf u$ is $(4,-10)$, so $2\\mathbf u-\\mathbf v=(4-(-3),-10-4)=(7,-14)$. The operations act on corresponding components; multiplying magnitudes instead would not define the requested vector.

</details>

### Exercise 16.3
<a id="vectors-plane-ex-3"></a>

Give two arrows with different starting points that represent vector $(4,-1)$.

<details>
<summary>Hint 1</summary>

Choose any starting point, then add the stated components.

</details>
<details>
<summary>Hint 2</summary>

Check each endpoint difference.

</details>
<details>
<summary>Solution</summary>

One arrow goes from $(0,0)$ to $(4,-1)$; another goes from $(3,5)$ to $(7,4)$. Each endpoint minus start is $(4,-1)$. Their positions differ, but their displacement, direction and magnitude agree.

</details>

### Exercise 16.4
<a id="vectors-plane-ex-4"></a>

Determine whether $(6,9)$ and $(-2,-3)$ have parallel directions.

<details>
<summary>Hint 1</summary>

Look for a nonzero scalar multiple.

</details>
<details>
<summary>Hint 2</summary>

A negative multiplier reverses direction along the same line.

</details>
<details>
<summary>Solution</summary>

We have $(6,9)=-3(-2,-3)$, so the directions are parallel but opposite. The component expression $6(-3)-9(-2)=0$ confirms this. Both vectors are nonzero, so their geometric directions are defined.

</details>

### Exercise 16.5
<a id="vectors-plane-ex-5"></a>

Find a unit vector in the direction of $(-5,12)$.

<details>
<summary>Hint 1</summary>

Calculate its magnitude first.

</details>
<details>
<summary>Hint 2</summary>

Divide both components by that positive magnitude.

</details>
<details>
<summary>Solution</summary>

The magnitude is $\\sqrt{25+144}=13$. The unit vector is $(-5/13,12/13)$. Its squared magnitude is $(25+144)/169=1$, and the positive scaling preserves direction.

</details>

### Exercise 16.6
<a id="vectors-plane-ex-6"></a>

Show that $(2,7)$ is perpendicular to $(7,-2)$.

<details>
<summary>Hint 1</summary>

Use the dot product.

</details>
<details>
<summary>Hint 2</summary>

Verify that neither vector is zero.

</details>
<details>
<summary>Solution</summary>

Both vectors are nonzero and their dot product is $2\\cdot7+7(-2)=0$. The angle form of the dot product therefore gives cosine zero, so their angle is ninety degrees. The nonzero check is necessary when interpreting a zero dot product geometrically.

</details>

### Exercise 16.7
<a id="vectors-plane-ex-7"></a>

Find the angle between $(1,0)$ and $(1,\\sqrt3)$.

<details>
<summary>Hint 1</summary>

Compute the dot product and both magnitudes.

</details>
<details>
<summary>Hint 2</summary>

Recover the smaller angle from its cosine.

</details>
<details>
<summary>Solution</summary>

The dot product is one, and the magnitudes are one and two. Thus the angle has cosine $1/2$, so it is sixty degrees. Both vectors are nonzero, and the smaller angle lies between zero and one hundred eighty degrees, where this cosine identifies it uniquely.

</details>

### Exercise 16.8
<a id="vectors-plane-ex-8"></a>

Project $(5,1)$ onto the direction $(1,0)$ and find the perpendicular residual.

<details>
<summary>Hint 1</summary>

The direction is already a unit vector.

</details>
<details>
<summary>Hint 2</summary>

Use the projection coefficient from the dot products.

</details>
<details>
<summary>Solution</summary>

The coefficient is $((5,1)\\cdot(1,0))/1=5$, so the projection is $(5,0)$. The residual is $(0,1)$, perpendicular to the horizontal direction. This recovers the familiar separation into horizontal and vertical components.

</details>

### Exercise 16.9
<a id="vectors-plane-ex-9"></a>

Give a parameter description of the segment joining $(1,2)$ to $(7,-1)$.

<details>
<summary>Hint 1</summary>

The endpoint difference is the direction displacement.

</details>
<details>
<summary>Hint 2</summary>

Restrict the parameter to include exactly the two endpoints and the points between.

</details>
<details>
<summary>Solution</summary>

The displacement is $(6,-3)$, so the segment is $(1,2)+t(6,-3)$ with $0\\le t\\le1$. At zero it gives the first endpoint and at one the second. Allowing every real parameter would describe the entire line, a larger set than the requested segment.

</details>

### Exercise 16.10
<a id="vectors-plane-ex-10"></a>

Explain why $|\\mathbf u+\\mathbf v|$ need not equal $|\\mathbf u|+|\\mathbf v|$, using $\\mathbf u=(3,0)$ and $\\mathbf v=(0,4)$.

<details>
<summary>Hint 1</summary>

The two displacements are perpendicular.

</details>
<details>
<summary>Hint 2</summary>

Compare the direct diagonal length with the two-leg route.

</details>
<details>
<summary>Solution</summary>

The vector sum is $(3,4)$, with magnitude five. The sum of the separate magnitudes is three plus four, or seven. The first measures net displacement and the second a route travelled head to tail. They agree only under additional directional conditions, such as two vectors pointing along the same ray.

</details>

## Sources

This is original exposition and fresh exercises based on the vector outline in the local [Geometry and Trigonometry course](../../courses/euclidean-trigonometry-standard.md). For another primary textbook treatment, see OpenStax, [Vectors](https://openstax.org/books/precalculus-2e/pages/8-8-vectors). Consulted on 13 November 2026; no passage or exercise has been copied.

## Summary

A vector is a displacement rather than a location. Component addition implements head-to-tail movement, and scalar multiplication changes magnitude by the scalar's absolute value. Nonzero parallel directions are scalar multiples. The dot product connects components to angles, with zero characterising perpendicular nonzero vectors. Projection separates a displacement into parallel and perpendicular components, and vector differences give short proofs of midpoint relationships. The next chapter uses these tools to describe transformations and distinguish the properties they preserve.
`;export{e as default};