
# Coordinates: Lines, Distance and Circles

A coordinate system makes a location into an ordered pair and a geometric condition into an equation. The important gain is not that diagrams disappear. It is that a claim can be checked with arithmetic, including cases where a diagram is awkward or misleading. An equation for a circle, for example, should describe every point at the stated distance from its centre and no other points.

This chapter connects the synthetic geometry developed earlier with algebra. Required preparation is [Area and the Pythagorean Theorem](area-pythagorean-theorem.md), [Congruent Triangles](congruent-triangles.md), and ordinary linear and quadratic equations from [Algebra and Functions](#/books/algebra-and-functions). We use perpendicular axes with the same length unit on both axes. Without that last condition, a plotted square could look like a rectangle and an unadjusted distance formula would be inappropriate.

The main questions are how to describe a line without excluding vertical lines, how to calculate distance and midpoints, and how to recognise a circle while retaining its geometric meaning. Throughout, points are positions; subtracting their coordinates gives a displacement. The distinction will become explicit in [Vectors in the Plane](vectors-plane.md).

## Coordinates and distance

**Definition 10.1 (Cartesian coordinates).** Choose an origin and two perpendicular oriented axes. A point $P=(x,y)$ is reached by a signed horizontal displacement $x$ followed by a signed vertical displacement $y$. The order matters: $(2,-5)$ and $(-5,2)$ usually name different points.

A negative coordinate describes direction, not a negative length. Moving from $(-2,1)$ to $(4,-3)$ has horizontal change $6$ and vertical change $-4$. The lengths of the corresponding right-triangle legs are $6$ and $4$. Squaring the signed changes produces the same squares as using their absolute values.

**Theorem 10.2 (Distance formula).** For $A=(x_1,y_1)$ and $B=(x_2,y_2)$,
$$
AB=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}.
$$

*Proof.* If both changes are nonzero, draw horizontal and vertical segments joining the points through $(x_2,y_1)$. They form a right triangle with leg lengths $|x_2-x_1|$ and $|y_2-y_1|$. Pythagoras gives the square of the displayed distance, and a length is nonnegative, so take the nonnegative square root. If one change is zero, the points lie on a horizontal or vertical line and the same formula reduces to the absolute difference of the remaining coordinates. If both are zero, the points coincide and the distance is zero. ∎

Squaring both changes prevents a negative displacement from making the distance negative. It also makes the answer independent of which endpoint is named first. A repeated mistake is to calculate $\sqrt{x_2^2-x_1^2+y_2^2-y_1^2}$; differences must be formed before they are squared.

**Theorem 10.3 (Midpoint formula).** The midpoint of $AB$ has coordinates
$$
M=\left(\frac{x_1+x_2}{2},\frac{y_1+y_2}{2}\right).
$$

*Proof.* The change from $A$ to $M$ is half the change from $A$ to $B$ in both coordinate directions. The change from $M$ to $B$ is the same half-displacement. Thus $A,M,B$ lie on the same line with $AM=MB$, and $M$ lies between the endpoints unless they coincide. These conditions define the midpoint; the coincident case gives the same point. ∎

**Example 10.4 (Distance, midpoint and a perpendicular bisector).** Let $A=(-3,2)$ and $B=(5,8)$. Their displacement is $(8,6)$, so
$$
AB=\sqrt{8^2+6^2}=10,\qquad M=(1,5).
$$
To find every point $X=(x,y)$ equidistant from $A$ and $B$, equate squared distances:
$$
(x+3)^2+(y-2)^2=(x-5)^2+(y-8)^2.
$$
The quadratic terms cancel, leaving $16x+12y=76$, or $4x+3y=19$. The midpoint satisfies this equation, and the equation describes the perpendicular bisector. The calculation establishes the whole locus because all steps, including squaring nonnegative distances, are reversible. Merely finding one equidistant point would not determine the locus.

## Lines, including vertical lines

**Definition 10.5 (Slope).** For two points with $x_1\ne x_2$, the slope of their line is
$$
m=\frac{y_2-y_1}{x_2-x_1}.
$$
It measures vertical change per unit horizontal change. A vertical line has no finite slope because its horizontal change is zero.

For a nonvertical line through $(x_0,y_0)$, similar right triangles show that the same ratio applies between any two points on the line. Thus its equation is
$$
y-y_0=m(x-x_0).
$$
A horizontal line has $m=0$, giving $y=y_0$. A vertical line through the point has equation $x=x_0$, which must be written separately from slope form.

A more inclusive description is
$$
ax+by=c,\qquad (a,b)\ne(0,0).
$$
If $b\ne0$, rearrange to slope-intercept form $y=-(a/b)x+c/b$. If $b=0$, then $a\ne0$ and the equation is the vertical line $x=c/a$. The nonzero-coefficient condition is necessary: $0x+0y=1$ has no points, while $0x+0y=0$ describes the entire plane.

**Result 10.6 (Parallel and perpendicular lines).** Distinct nonvertical lines are parallel exactly when their slopes are equal. Two nonvertical lines with slopes $m,n$ are perpendicular exactly when $mn=-1$. Horizontal and vertical lines are perpendicular and must be included as a separate case.

*Proof.* The equal-slope assertion follows from the constant direction ratio: equal ratios give parallel direction triangles, while differing ratios determine different directions and intersecting lines. For the perpendicular statement, take direction displacements $(1,m)$ and $(1,n)$. If they are perpendicular, the triangle formed by these two unit-horizontal displacements satisfies Pythagoras:
$$
(1+m^2)+(1+n^2)=(m-n)^2,
$$
because the joining displacement is $(0,m-n)$. Expanding gives $mn=-1$. Conversely, if that equation holds, the same length equality follows, and the converse of Pythagoras makes the angle between the two nonzero direction segments a right angle. ∎

The product test cannot be used when one line is vertical. Also, equal slopes can describe the same line rather than two distinct parallel lines; compare intercepts or another point to distinguish the cases.

**Example 10.7 (Choosing a useful line equation).** Find the line through $P=(2,-1)$ perpendicular to $3x+2y=7$. The given slope is $-3/2$, so a perpendicular slope is $2/3$. Hence
$$
y+1=\frac23(x-2),
$$
or $2x-3y=7$. Substitution of $P$ confirms the constant, and the slope product $(-3/2)(2/3)=-1$ confirms perpendicularity.

For comparison, the line through $P$ perpendicular to the horizontal line $y=4$ is $x=2$. A slope calculation would divide by zero; the geometric direction gives the answer immediately. A general method should include its exceptional case, rather than treating that case as an arithmetic failure.

## Circles as distance conditions

**Definition 10.8 (Coordinate circle).** For centre $C=(h,k)$ and radius $r>0$, a circle consists of all points $X=(x,y)$ with $CX=r$. By the distance formula, its equation is
$$
(x-h)^2+(y-k)^2=r^2.
$$
Both directions hold: every circle point satisfies the equation, and every solution of the equation has distance $r$ from the centre.

The radius is $r$, not $r^2$. The equation $(x-2)^2+(y+3)^2=25$ therefore has centre $(2,-3)$ and radius five. Signs inside the brackets describe the coordinates being subtracted. If the right side were zero, there would be only the centre point; if negative, there would be no real point. Neither is a circle of positive radius.

**Example 10.9 (Recovering a centre by completing squares).** Identify the real locus
$$
x^2+y^2-6x+4y-12=0.
$$
Move the constant and complete each square:
$$
(x-3)^2-9+(y+2)^2-4=12,
$$
so
$$
(x-3)^2+(y+2)^2=25.
$$
The centre is $(3,-2)$ and the radius is five. The point $(6,2)$ lies on it because its centre displacement is $(3,4)$, whose squared length is twenty-five.

Now change the original constant from $-12$ to $14$. Completion gives $(x-3)^2+(y+2)^2=-1$, which has no real solutions. Seeing equal coefficients on $x^2$ and $y^2$ suggests a circle-type equation, but the final squared-radius check decides whether an actual circle exists.

## Intersections and geometric checks

Intersecting a line and a circle amounts to solving their equations simultaneously. Substitution typically produces a quadratic. Two distinct real solutions represent two intersection points, one repeated solution represents tangency, and no real solution means the line misses the circle. Each solution must still satisfy both original equations.

For $x^2+y^2=25$ and $y=3$, substitution gives $x^2=16$, so the intersections are $(4,3)$ and $(-4,3)$. With $y=5$ there is one point $(0,5)$; with $y=6$ there is none. This agrees with the distances of these horizontal lines from the centre.

Coordinate methods can also prove geometric claims. If the diagonal midpoints of a quadrilateral agree, the equalities of coordinate averages can reveal opposite side displacements. But a numerical check of one quadrilateral does not prove a universal theorem: choose general coordinates or explicitly identify the class being studied. Conversely, selecting an awkward origin is not a mathematical error. Translating or rotating axes preserves geometry, although it may simplify the algebra.

Keep exact square roots until a numerical approximation is requested. If coordinates are measured in metres, slopes are dimensionless when both axes use metres, distances are metres, and squared distances are square metres. A diagram drawn with different screen scales is a display choice; the coordinate values and stated units govern the calculation.

## Worked example — Subtracting two circle equations

Consider $x^2+y^2=25$ and $(x-6)^2+y^2=25$. Any common point satisfies both. Subtraction removes the squared terms and gives $x=3$. Substitution gives $y^2=16$, so the only candidates are $(3,4)$ and $(3,-4)$. Direct substitution verifies both, completing the argument.

The entire line is not part of either circle. It is where the two circle expressions have equal value, their radical axis. Its point $(3,0)$ satisfies the subtracted equation but neither original equation. Subtracting equations therefore reduces the candidates without replacing the original conditions. One original equation must still be imposed and every resulting point must satisfy both. The two verified intersections determine a common chord supported by this line. If the centres coincide, subtraction may instead yield an identity or a contradiction, so the distinct-center case must not be applied without inspecting that hypothesis.

## Exercises

### Exercise 10.1
<a id="coordinates-lines-distance-circles-ex-1"></a>

Find the distance and midpoint between $(-4,1)$ and $(2,9)$.

<details>
<summary>Hint 1</summary>

Form the horizontal and vertical changes first.

</details>
<details>
<summary>Hint 2</summary>

The midpoint averages corresponding coordinates; the distance uses their differences.

</details>
<details>
<summary>Solution</summary>

The changes are $6$ and $8$, so the distance is $\sqrt{36+64}=10$. The midpoint is $((-4+2)/2,(1+9)/2)=(-1,5)$. Both half-displacements are $(3,4)$ and have length five, confirming the midpoint calculation.

</details>

### Exercise 10.2
<a id="coordinates-lines-distance-circles-ex-2"></a>

Find every point on the $x$-axis that is five units from $(2,3)$.

<details>
<summary>Hint 1</summary>

A point on that axis has coordinates $(x,0)$.

</details>
<details>
<summary>Hint 2</summary>

Square the distance condition and solve the resulting quadratic.

</details>
<details>
<summary>Solution</summary>

The condition is $(x-2)^2+9=25$, so $(x-2)^2=16$. Thus $x=6$ or $x=-2$, giving $(6,0)$ and $(-2,0)$. Both have displacement lengths $\sqrt{4^2+3^2}=5$. Taking only the positive square root of the squared equation would lose one point.

</details>

### Exercise 10.3
<a id="coordinates-lines-distance-circles-ex-3"></a>

Find the equation of the line through $(1,4)$ and $(5,-2)$.

<details>
<summary>Hint 1</summary>

Calculate slope from two coordinate changes.

</details>
<details>
<summary>Hint 2</summary>

Use either point in point-slope form and check the other.

</details>
<details>
<summary>Solution</summary>

The slope is $(-2-4)/(5-1)=-3/2$. Hence $y-4=-(3/2)(x-1)$, or $3x+2y=11$. Both supplied points satisfy this equation. Reversing the endpoint order gives the same slope because both differences change sign.

</details>

### Exercise 10.4
<a id="coordinates-lines-distance-circles-ex-4"></a>

Give equations for the lines through $(-2,5)$ parallel and perpendicular to $y=3$.

<details>
<summary>Hint 1</summary>

The given line is horizontal.

</details>
<details>
<summary>Hint 2</summary>

A perpendicular line is vertical, so do not seek a finite slope for it.

</details>
<details>
<summary>Solution</summary>

The parallel line is $y=5$, and the perpendicular line is $x=-2$. Both contain the stated point. The latter has no finite slope because two of its points have equal horizontal coordinates, but it remains a perfectly valid line.

</details>

### Exercise 10.5
<a id="coordinates-lines-distance-circles-ex-5"></a>

Find the perpendicular bisector of the segment joining $(0,0)$ to $(6,8)$.

<details>
<summary>Hint 1</summary>

Its midpoint is the average of the endpoints.

</details>
<details>
<summary>Hint 2</summary>

Its direction is perpendicular to slope $8/6$.

</details>
<details>
<summary>Solution</summary>

The midpoint is $(3,4)$, and the segment slope is $4/3$. The bisector slope is $-3/4$, giving $y-4=-(3/4)(x-3)$ or $3x+4y=25$. Equating squared distances to the two endpoints yields the same equation, proving it is the complete equidistance locus.

</details>

### Exercise 10.6
<a id="coordinates-lines-distance-circles-ex-6"></a>

Find the centre and radius of $x^2+y^2+8x-2y+8=0$.

<details>
<summary>Hint 1</summary>

Group the terms in each coordinate.

</details>
<details>
<summary>Hint 2</summary>

Complete squares and track the constants that were added.

</details>
<details>
<summary>Solution</summary>

The equation becomes $(x+4)^2-16+(y-1)^2-1+8=0$, so $(x+4)^2+(y-1)^2=9$. Its centre is $(-4,1)$ and its radius is three. The positive right side confirms a genuine circle.

</details>

### Exercise 10.7
<a id="coordinates-lines-distance-circles-ex-7"></a>

Describe the real loci $(x-1)^2+(y+2)^2=0$ and $(x-1)^2+(y+2)^2=-4$.

<details>
<summary>Hint 1</summary>

Every real square is nonnegative.

</details>
<details>
<summary>Hint 2</summary>

A sum of nonnegative terms vanishes only when each term vanishes.

</details>
<details>
<summary>Solution</summary>

The first equation has only $(1,-2)$, because both squares must be zero. The second has no real solution because a nonnegative sum cannot equal a negative number. Neither is a circle with positive radius, even though their left sides resemble a circle equation.

</details>

### Exercise 10.8
<a id="coordinates-lines-distance-circles-ex-8"></a>

Find the intersections of $x^2+y^2=10$ and $y=x$.

<details>
<summary>Hint 1</summary>

Substitute the line equation into the circle equation.

</details>
<details>
<summary>Hint 2</summary>

Both coordinates equal $x$, and both signs of the square root are possible.

</details>
<details>
<summary>Solution</summary>

Substitution gives $2x^2=10$, so $x=\pm\sqrt5$. The points are $(\sqrt5,\sqrt5)$ and $(-\sqrt5,-\sqrt5)$. Each satisfies both equations. Pairing opposite signs would satisfy the circle but not the given line.

</details>

### Exercise 10.9
<a id="coordinates-lines-distance-circles-ex-9"></a>

A circle has diameter endpoints $(-1,2)$ and $(7,8)$. Find its equation.

<details>
<summary>Hint 1</summary>

The centre is the diameter's midpoint.

</details>
<details>
<summary>Hint 2</summary>

The radius is half the distance between the endpoints.

</details>
<details>
<summary>Solution</summary>

The midpoint is $(3,5)$, and the diameter length is $\sqrt{8^2+6^2}=10$. Thus the radius is five and the equation is $(x-3)^2+(y-5)^2=25$. Substituting either endpoint gives twenty-five as required.

</details>

### Exercise 10.10
<a id="coordinates-lines-distance-circles-ex-10"></a>

Explain why checking that one plotted quadrilateral has equal diagonal midpoints does not prove a theorem about all quadrilaterals. Give a coordinate counterexample to the claim that all quadrilaterals have this property.

<details>
<summary>Hint 1</summary>

A universal statement must cover every permitted figure.

</details>
<details>
<summary>Hint 2</summary>

Choose three corners of a rectangle and move its fourth corner.

</details>
<details>
<summary>Solution</summary>

One example establishes only a fact about that example. Take cyclic vertices $(0,0),(4,0),(3,2),(0,2)$. The diagonal from $(0,0)$ to $(3,2)$ has midpoint $(3/2,1)$, while the other diagonal has midpoint $(2,1)$. These differ, so the universal claim is false. The counterexample is a nondegenerate quadrilateral, so no excluded case is being used.

</details>

## Sources

The exposition and exercises are original, developed from the coordinate outline in the local [Geometry and Trigonometry course](../../course-texts/atlas-euclidean-trigonometry-standard.md). For another primary textbook treatment, see OpenStax, [Distance and Midpoint Formulas; Circles](https://openstax.org/books/intermediate-algebra/pages/11-1-distance-and-midpoint-formulas-circles). This source was consulted on 13 November 2026; no passage or exercise has been copied.

## Summary

Coordinates translate distance, midpoint and incidence into equations while preserving the geometric hypotheses. Pythagoras gives the distance formula, and averaging gives a midpoint. Slope describes nonvertical lines; general linear equations retain vertical lines as well. A circle equation expresses a fixed positive distance, and completing squares must be followed by a real-radius check. Simultaneous equations identify intersections, with every answer checked in the original conditions. The next chapter applies similarity to right triangles and gives side ratios a trigonometric meaning.
