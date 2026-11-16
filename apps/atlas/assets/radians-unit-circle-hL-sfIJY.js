var e=`---
parent_id: book-precalculus
chapter_id: radians-unit-circle
title: "Radians and the Unit Circle"
level: secondary
license: CC BY-SA 4.0
---

# Radians and the Unit Circle

A wheel can turn halfway, continue through several revolutions, or turn backwards. Its final direction records only part of that motion: a complete extra revolution returns it to the same direction. To model repeated motion we therefore need an angle measure that includes orientation and can exceed one full turn. Radians provide a measure based on a ratio of lengths, while the unit circle converts an angle into a point with two numerical coordinates.

The required preparation is [Algebra and Functions](../algebra-and-functions.md), particularly its treatment of fractions, [Surds and Indices](../algebra-and-functions/surds-indices.md), and [Functions, Domains, and Graphs](../algebra-and-functions/functions-domain-graphs.md), together with [Composition and Inverses](composition-inverses.md) and [Graph Transformations](graph-transformations.md). The preceding chapter, [Polynomial and Rational Graphs](polynomial-rational-graphs.md), emphasized the need to distinguish an input from its output; that distinction remains useful when many different angle inputs produce the same circle point. We assume the familiar circumference $2\\pi r$ and area $\\pi r^2$ of a circle of radius $r>0$. No triangle trigonometry is needed.

By the end you should be able to interpret signed angles, convert between degrees and radians, calculate arc lengths and sector areas under the correct hypotheses, and identify the signs and basic symmetries of unit-circle coordinates. The next chapter gives the coordinate functions their names, sine and cosine, and introduces tangent. Here the focus is on the input measure and its geometric meaning.

## An angle can record an oriented rotation

**Definition 4.1 (Oriented angle in standard position).** An oriented angle records a rotation from an initial ray to a terminal ray about their common endpoint. In standard position, the endpoint is the origin of the coordinate plane and the initial ray is the positive horizontal axis. Counterclockwise rotation is positive and clockwise rotation is negative.

A ray consists of its endpoint and all points extending from it in one direction along a line. The terminal ray gives a final direction, while the signed angle also records the chosen amount of rotation. A quarter turn counterclockwise and three quarters of a turn clockwise end on the same ray, but they are different oriented angles. Likewise, a turn of one and a quarter revolutions is different from a quarter revolution even though the terminal direction agrees.

Degrees divide a full turn into $360$ equal parts. Thus a positive quarter turn is $90^\\circ$, a negative half turn is $-180^\\circ$, and one and a half positive turns is $540^\\circ$. The degree symbol is a unit marker. Writing just $60$ in an angle formula is not a reliable way to communicate $60^\\circ$; throughout this book, an angle without a degree marker is measured in radians unless explicitly stated otherwise.

Orientation is a convention that must be stated. A compass bearing convention may start from north and increase clockwise, while the mathematical standard-position convention starts from the positive horizontal axis and increases counterclockwise. Neither convention is defective, but numerical angles cannot be transferred between them without accounting for the different starting ray and direction. In this chapter we consistently use standard position.

## Radians arise from an arc-to-radius ratio

**Definition 4.2 (Radian measure).** For a circle centred at the angle's vertex with radius $r>0$, a counterclockwise sweep along an arc of length $s\\ge0$ has radian measure $\\theta=s/r$. A clockwise sweep of that same length has measure $\\theta=-s/r$. For several complete turns, the length counts the entire traversed path, including repeated passages over the same points.

The radius must be positive: a zero-radius circle supplies no direction or meaningful ratio. Arc length and radius must also use the same length unit. If an arc measures $12$ centimetres on a circle of radius $8$ centimetres, the angle is $12/8=1.5$ radians. If the radius were reported as $0.08$ metres, either convert it to centimetres or convert the arc to $0.12$ metres before dividing. The ratio is still $1.5$.

Radian measure does not depend on the circle chosen. Enlarging a circular diagram by a scale factor multiplies its radius and the corresponding arc length by that same factor, leaving their ratio unchanged. It is therefore a measure of the rotation, rather than a measure of how large the drawing happens to be. One radian is the positive angle whose traversed arc has the same length as the radius. It is not one degree or one complete turn.

**Result 4.3 (A full turn and conversion).** One positive full turn is $2\\pi$ radians, and $180^\\circ=\\pi$ radians. Consequently,

$$\\theta_{\\mathrm{rad}}=\\theta_{\\mathrm{deg}}\\frac{\\pi}{180},\\qquad
\\theta_{\\mathrm{deg}}=\\theta_{\\mathrm{rad}}\\frac{180}{\\pi}.$$

*Reason.* A full circle has arc length $2\\pi r$, so dividing by $r>0$ gives $2\\pi$. The same rotation is $360^\\circ$, giving the stated conversion factors by taking the appropriate fraction of a turn. Negative rotations have the same magnitude conversion with their sign retained. ∎

Common landmarks follow by fractions: a quarter turn is $\\pi/2$ radians, a half turn is $\\pi$, and three quarters of a positive turn is $3\\pi/2$. Expressions involving $\\pi$ are exact. Replacing $\\pi$ by a decimal approximation is useful for a numerical distance or display, but it should come after the exact calculation when possible.

**Worked Example 4.4 (Converting while preserving orientation).** Convert $225^\\circ$, $-150^\\circ$ and $7\\pi/6$ radians to the other unit.

Multiplying a degree measure by $\\pi/180$ gives

$$225\\frac{\\pi}{180}=\\frac{5\\pi}{4},\\qquad
-150\\frac{\\pi}{180}=-\\frac{5\\pi}{6}.$$

Thus the first is $5\\pi/4$ radians and the second is $-5\\pi/6$ radians. The negative sign continues to describe a clockwise sweep. For the radian measure, multiply by $180/\\pi$:

$$\\frac{7\\pi}{6}\\frac{180}{\\pi}=210,$$

so it is $210^\\circ$. The $\\pi$ factors cancel in this direction; multiplying by $\\pi/180$ again would be the wrong conversion. All three answers retain the same rotation as their original measures, rather than merely a terminal direction.

## Same terminal direction, different inputs

**Definition 4.5 (Coterminal angles).** Two angles in standard position are coterminal if they have the same terminal ray. In radians their measures differ by $2\\pi k$ for an integer $k$; in degrees they differ by $360k$ degrees.

Adding a full turn changes the recorded rotation but returns to the same direction. Conversely, if two rotations have the same initial and terminal rays, their difference consists of a whole number of turns. This gives the integer condition. “Coterminal” therefore means a shared final direction, not equality as real-number inputs.

A useful representative lies in $[0,2\\pi)$: add or subtract whole turns until the number is at least zero and less than $2\\pi$. The left endpoint is included and the right endpoint excluded so that a full-turn terminal ray is represented only once. The representatives $0$ and $2\\pi$ would describe the same direction if both were included. A different convention, such as $(-\\pi,\\pi]$, is also possible, but its boundary choices must be kept consistent.

**Worked Example 4.6 (Reducing rotations to one turn).** Find the representatives in $[0,2\\pi)$ for $-7\\pi/3$ and $17\\pi/4$, then identify their terminal quadrants.

For the first, adding one full turn gives $-7\\pi/3+6\\pi/3=-\\pi/3$, still negative. Adding another gives $5\\pi/3$. This is between $3\\pi/2$ and $2\\pi$, so the terminal ray is in quadrant IV. For the second, subtract two full turns:

$$\\frac{17\\pi}{4}-\\frac{16\\pi}{4}=\\frac\\pi4.$$

That ray is in quadrant I. The original measures still record different amounts of rotation from their representatives. For example, $17\\pi/4$ records two complete positive turns followed by another $\\pi/4$, whereas its representative records only the final fraction.

The quadrant intervals are $0<\\theta<\\pi/2$ for I, $\\pi/2<\\theta<\\pi$ for II, $\\pi<\\theta<3\\pi/2$ for III, and $3\\pi/2<\\theta<2\\pi$ for IV, after choosing a representative in $[0,2\\pi)$. Angles on the axes are not in any open quadrant. In particular, a half turn ends on the negative horizontal axis; it should not be assigned arbitrarily to II or III.

## Arc length and sector area

**Result 4.7 (Arc length).** For a radius $r>0$ and a sweep of $\\theta\\ge0$ radians, the traversed circular distance is $s=r\\theta$. For a single clockwise sweep with signed measure $\\theta<0$, the nonnegative traversed distance is $s=r|\\theta|$.

*Reason.* Rearrange the defining ratio $\\theta=s/r$ for a positive sweep. A clockwise sweep has the same length as a counterclockwise sweep of equal magnitude, giving the absolute value. Equivalently, a positive sweep is the fraction $\\theta/(2\\pi)$ of a full turn and travels that fraction of the circumference: $s=[\\theta/(2\\pi)](2\\pi r)=r\\theta$. ∎

If $\\theta>2\\pi$, the formula counts repeated traversal; it is not the length of a single nonrepeating arc considered as a set of points. If a motion reverses direction, its net angle may not determine its total distance: a quarter turn forward and a quarter turn back have net angle zero but positive travel. Specify whether a problem asks for a net signed rotation, a one-direction travelled distance, or a geometric arc.

**Worked Example 4.8 (A rotating rim).** A point on a wheel of radius $0.4$ metres moves clockwise through $135^\\circ$ without reversing. Find the signed angle in radians and the distance it travels.

The signed angle is $-135\\pi/180=-3\\pi/4$. Its travel distance is

$$s=0.4\\left|{-\\frac{3\\pi}{4}}\\right|=\\frac{3\\pi}{10}\\text{ metres},$$

approximately $0.942$ metres. A negative distance would confuse orientation with length. Using the number $135$ directly in $r\\theta$ would also be wrong because the formula expects radians, not degrees. The negative angle and positive path length answer different parts of the question.

**Result 4.9 (Area of a sector).** For a circle of radius $r>0$ and a chosen sector with central sweep $0\\le\\theta\\le2\\pi$ radians, its area is

$$A=\\frac12r^2\\theta.$$

*Reason.* A sector occupies the fraction $\\theta/(2\\pi)$ of the circle's full turn. Circular symmetry makes its area the same fraction of the full area, so $A=[\\theta/(2\\pi)]\\pi r^2=\\tfrac12r^2\\theta$. For a full turn divided into equal angular pieces, the sectors are congruent and have equal area, proving the statement for rational fractions of a turn. Any other chosen sweep can be placed between two adjacent subdivision marks. Its sector area is bounded between the corresponding smaller and larger sectors, whose area difference is one subdivision piece. Finer subdivisions make this gap as small as desired, giving the same fraction rule. ∎

Here area is nonnegative and the sector sweep is specified between zero and a full turn. For a negative oriented angle with magnitude at most $2\\pi$, use the magnitude to describe the corresponding unsigned sector area. Do not insert a negative angle and call the negative result an ordinary area. Nor should a multi-turn rotation automatically be called one sector: after a full turn, the same disk region is being swept again.

Two rays can bound a small sector and a larger complementary sector. An angle description must say which sweep is intended. For rays separated by a $\\pi/3$ counterclockwise sweep, the small sector has sweep magnitude $\\pi/3$ and the complementary clockwise sector has sweep magnitude $5\\pi/3$. They share the same boundary rays but have different areas. The terminal ray alone does not determine the chosen region, just as it does not determine how many turns a wheel has made.

**Worked Example 4.10 (A sector and its boundary length).** A sector has radius $6$ cm and central sweep $5\\pi/6$ radians. Find its area, its curved arc length, and the total length of its boundary.

The angle is between zero and $2\\pi$, so the sector formula applies. Its area is $A=\\tfrac12(6)^2(5\\pi/6)=15\\pi$ square centimetres. Its arc length is $s=6(5\\pi/6)=5\\pi$ centimetres. The full boundary contains that arc and two radius segments, so its length is $5\\pi+12$ centimetres. Area uses squared length units; the two boundary quantities use ordinary length units. The arc is not the whole boundary.

## The unit circle turns rotation into coordinates

**Definition 4.11 (Unit circle and angle point).** The unit circle is the circle of radius $1$ centred at the origin in an equally scaled Cartesian coordinate system. Its points satisfy $u^2+v^2=1$. For any real angle $\\theta$, rotate from $(1,0)$ through $\\theta$ radians and let $P(\\theta)$ be the resulting point on the circle.

The coordinate equation is the distance-from-origin condition: the squared distance is $u^2+v^2$, and the radius is one. It immediately bounds each coordinate between $-1$ and $1$, because a coordinate square cannot exceed their sum $1$. This describes the circle only; it is not an invitation to study general conic equations here.

Every real input $\\theta$ has exactly one terminal point $P(\\theta)$. Multiple inputs can produce the same point: $P(\\theta+2\\pi k)=P(\\theta)$ for every integer $k$. That is permitted for a function. It would become a problem only if we tried to assign one unrestricted real angle back to each point without choosing a representative. This is the same distinction between a function and a globally reversible function that appeared earlier in the book.

The four quarter-turn landmarks are

| Angle in radians | Point $P(\\theta)$ |
| --- | --- |
| $0$ | $(1,0)$ |
| $\\pi/2$ | $(0,1)$ |
| $\\pi$ | $(-1,0)$ |
| $3\\pi/2$ | $(0,-1)$ |
| $2\\pi$ | $(1,0)$ |

The last row repeats the first point while recording a different input. Between the axis directions, the signs follow the quadrant: $(+,+)$ in I, $(-,+)$ in II, $(-,-)$ in III and $(+,-)$ in IV. A point on an axis has a zero coordinate, so the open-quadrant sign patterns are not applied there.

**Result 4.12 (Coordinate symmetries).** If $P(\\theta)=(u,v)$, then

$$P(-\\theta)=(u,-v),\\qquad P(\\theta+\\pi)=(-u,-v).$$

*Reason.* Reversing an angle reflects its terminal ray across the horizontal axis, preserving horizontal coordinate and reversing vertical coordinate. Adding a half turn takes a point to the opposite end of a diameter, reversing both coordinates. Each operation preserves the unit circle because the coordinate squares are unchanged. ∎

**Worked Example 4.13 (An exact diagonal point).** Find $P(\\pi/4)$ and $P(5\\pi/4)$ using symmetry and the circle equation.

The angle $\\pi/4$ bisects the first-quadrant quarter turn. Reflection across the diagonal line $v=u$ exchanges the horizontal and vertical axes and preserves this bisecting ray, so its coordinates are equal and positive. Write them as $(a,a)$. The circle equation gives $2a^2=1$, and positivity gives $a=1/\\sqrt2=\\sqrt2/2$. Hence $P(\\pi/4)=(\\sqrt2/2,\\sqrt2/2)$.

Adding $\\pi$ reaches $5\\pi/4$ and the opposite point, so $P(5\\pi/4)=(-\\sqrt2/2,-\\sqrt2/2)$. This calculation uses the circle equation and a reflection, rather than assuming that every angle in a quadrant has equal coordinates. For most first-quadrant angles the two positive coordinates are different.

The next chapter names the first coordinate $\\cos\\theta$ and the second $\\sin\\theta$. The circle viewpoint will therefore define those functions for all real angles, including negative angles and angles beyond a full turn. It also explains why both coordinate functions repeat after $2\\pi$. At this stage the essential picture is the angle-to-point assignment, with its units, orientation and repeated outputs made explicit.

## Exercises

### Exercise 4.1
<a id="radians-unit-circle-ex-1"></a>

Convert $315^\\circ$ and $-120^\\circ$ to radians, and convert $11\\pi/6$ radians to degrees. Keep exact values.

<details>
<summary>Hint 1</summary>

Use $180^\\circ=\\pi$ radians as the conversion equality.

</details>
<details>
<summary>Hint 2</summary>

Multiply degree numbers by $\\pi/180$ and radian numbers by $180/\\pi$.

</details>
<details>
<summary>Solution</summary>

We obtain $315\\pi/180=7\\pi/4$ radians and $-120\\pi/180=-2\\pi/3$ radians. In the other direction, $(11\\pi/6)(180/\\pi)=330$, giving $330^\\circ$. The negative rotation retains its sign; conversion changes the unit of measure rather than the direction or amount of turning.

</details>

### Exercise 4.2
<a id="radians-unit-circle-ex-2"></a>

Find representatives in $[0,2\\pi)$ for $-11\\pi/6$ and $23\\pi/6$. State the quadrant or axis of each terminal ray.

<details>
<summary>Hint 1</summary>

A full turn is $12\\pi/6$ in the same denominator.

</details>
<details>
<summary>Hint 2</summary>

Add to a negative measure and subtract from a measure above $2\\pi$ until it is in the required interval.

</details>
<details>
<summary>Solution</summary>

Adding $12\\pi/6$ to $-11\\pi/6$ gives $\\pi/6$, which lies in quadrant I. Subtracting $12\\pi/6$ from $23\\pi/6$ gives $11\\pi/6$, in quadrant IV. Both representatives belong to $[0,2\\pi)$ and differ from their original angles by whole turns. Neither lies on an axis.

</details>

### Exercise 4.3
<a id="radians-unit-circle-ex-3"></a>

An arc of length $15$ cm lies on a circle of radius $10$ cm. Find its positive central angle in radians. Explain why doubling both lengths leaves the angle unchanged.

<details>
<summary>Hint 1</summary>

Use the arc-length-to-radius ratio with matching units.

</details>
<details>
<summary>Hint 2</summary>

Compare $15/10$ with $30/20$.

</details>
<details>
<summary>Solution</summary>

The positive central angle is $\\theta=s/r=15/10=3/2$ radians. After doubling both lengths the ratio is $30/20=3/2$, unchanged. More generally, multiplying both by a positive factor cancels in the ratio. The angle measures the sweep, while the larger circle supplies a proportionally longer arc for that same sweep.

</details>

### Exercise 4.4
<a id="radians-unit-circle-ex-4"></a>

A point on a circle of radius $3$ metres rotates clockwise through $5\\pi/3$ radians without reversing. State its signed angle, travel distance and terminal quadrant.

<details>
<summary>Hint 1</summary>

Clockwise fixes the angle's sign, while travelled distance remains nonnegative.

</details>
<details>
<summary>Hint 2</summary>

Add $2\\pi$ to the signed angle to identify the terminal quadrant.

</details>
<details>
<summary>Solution</summary>

The signed angle is $-5\\pi/3$. The travel distance is $3|{-5\\pi/3}|=5\\pi$ metres. Its representative in $[0,2\\pi)$ is $\\pi/3$, so its terminal direction is in quadrant I. The clockwise path travels most of the way round before ending there. Judging the quadrant from the magnitude alone would confuse a positive rotation with the stated negative one.

</details>

### Exercise 4.5
<a id="radians-unit-circle-ex-5"></a>

Find the area and arc length of a sector with radius $4$ cm and central sweep $3\\pi/4$ radians. Then find its full boundary length.

<details>
<summary>Hint 1</summary>

Area uses $r^2$ while arc length uses $r$.

</details>
<details>
<summary>Hint 2</summary>

The full boundary also includes two radius segments.

</details>
<details>
<summary>Solution</summary>

The area is $\\tfrac12(4)^2(3\\pi/4)=6\\pi$ square centimetres. The arc length is $4(3\\pi/4)=3\\pi$ centimetres. Adding the two radii gives full boundary length $3\\pi+8$ centimetres. The angle is between zero and one full turn, as required for the stated sector formula.

</details>

### Exercise 4.6
<a id="radians-unit-circle-ex-6"></a>

Two complementary sectors between the same boundary radii in a radius-$5$ circle have sweep magnitudes $\\pi/3$ and $5\\pi/3$. Find their areas and explain why their sum is the full disk area. Use any consistent length unit.

<details>
<summary>Hint 1</summary>

The sweeps together make $2\\pi$ radians.

</details>
<details>
<summary>Hint 2</summary>

Apply the sector formula separately before adding the areas.

</details>
<details>
<summary>Solution</summary>

The areas are $\\tfrac12(25)(\\pi/3)=25\\pi/6$ and $\\tfrac12(25)(5\\pi/3)=125\\pi/6$ square units. Their sum is $150\\pi/6=25\\pi$, equal to $\\pi(5)^2$. The two sectors are complementary sweeps between their boundary rays; their nonoverlapping interiors together fill the disk. The smaller angle alone would not specify the larger region's area.

</details>

### Exercise 4.7
<a id="radians-unit-circle-ex-7"></a>

Find the unit-circle points for $\\theta=-\\pi/2$, $3\\pi$ and $9\\pi/4$. Explain why a repeated point does not violate the definition of a function.

<details>
<summary>Hint 1</summary>

Remove or add whole turns, then use the axis and diagonal landmarks.

</details>
<details>
<summary>Hint 2</summary>

The restriction in a function is one output per input, not one input per output.

</details>
<details>
<summary>Solution</summary>

The angle $-\\pi/2$ ends at $(0,-1)$. The angle $3\\pi$ is coterminal with $\\pi$, giving $(-1,0)$. The angle $9\\pi/4$ is coterminal with $\\pi/4$, giving $(\\sqrt2/2,\\sqrt2/2)$. Each input has one point. Different inputs, such as $\\pi$ and $3\\pi$, may share a point without violating the function requirement.

</details>

### Exercise 4.8
<a id="radians-unit-circle-ex-8"></a>

For an angle $\\theta$ in quadrant II, its unit-circle point has vertical coordinate $3/5$. Find the horizontal coordinate and the points corresponding to $-\\theta$ and $\\theta+\\pi$.

<details>
<summary>Hint 1</summary>

Use the circle equation to find the magnitude of the missing coordinate.

</details>
<details>
<summary>Hint 2</summary>

Quadrant II fixes the sign; reflection and a half turn then change the coordinates as stated in Result 4.12.

</details>
<details>
<summary>Solution</summary>

The equation gives $u^2+9/25=1$, so $u^2=16/25$ and $|u|=4/5$. Quadrant II requires $u<0$, hence $P(\\theta)=(-4/5,3/5)$. Reflection across the horizontal axis gives $P(-\\theta)=(-4/5,-3/5)$. A half turn gives $P(\\theta+\\pi)=(4/5,-3/5)$. No exact numerical angle is required to determine these coordinates.

</details>

### Exercise 4.9
<a id="radians-unit-circle-ex-9"></a>

A rotating arm of radius $2$ metres makes three full counterclockwise turns and then another half turn, without reversing. Find its signed angle, distance travelled and final unit-circle direction. Explain why a single sector-area calculation is not a description of three and a half different disks.

<details>
<summary>Hint 1</summary>

Convert the total number of turns into radians before using arc length.

</details>
<details>
<summary>Hint 2</summary>

Reduce the angle only for the final direction; reducing it first would lose the number of complete traversals.

</details>
<details>
<summary>Solution</summary>

The total angle is $(3+1/2)2\\pi=7\\pi$ radians. The travel distance is $2(7\\pi)=14\\pi$ metres. Removing three full turns leaves $\\pi$, so the final unit-circle direction is $(-1,0)$. The arm repeatedly sweeps the same disk region; ordinary sector area counts a chosen region once, while a multi-turn sweep revisits points. The sector formula as stated applies to sweeps between zero and $2\\pi$, not to treating repeated coverage as a larger distinct disk region.

</details>

### Exercise 4.10
<a id="radians-unit-circle-ex-10"></a>

A point on a radius-$6$ cm circle moves counterclockwise through $\\pi/3$, then clockwise through $\\pi/3$. Find its net signed angle and total distance travelled. Explain why multiplying radius by the magnitude of the net angle fails for the total distance.

<details>
<summary>Hint 1</summary>

Signed rotations add, but lengths of the two travelled arcs add without cancellation.

</details>
<details>
<summary>Hint 2</summary>

Calculate each one-direction segment's distance before adding.

</details>
<details>
<summary>Solution</summary>

The net angle is $\\pi/3-\\pi/3=0$. Each leg has length $6(\\pi/3)=2\\pi$ cm, so the total travel is $4\\pi$ cm. The zero net angle records that the point returns to its original direction; it does not erase the distance already travelled. The formula $r|\\theta|$ describes a one-direction sweep of angle $\\theta$, and cannot recover total travel after a reversal merely from the net angle.

</details>

## Sources and provenance

This is original exposition with original worked examples and exercises. The unchanged local seed is the angles and unit-circle discussion in \`modules/textbooks/shared_foundations/00f-exp-log-trig.qmd\`. Primary benchmark and further reading: OpenStax, [*Algebra and Trigonometry 2e*, §7.1, Angles](https://openstax.org/books/algebra-and-trigonometry-2e/pages/7-1-angles), and [§7.3, Unit Circle](https://openstax.org/books/algebra-and-trigonometry-2e/pages/7-3-unit-circle). Their exercises are not reproduced. Triangle trigonometry and general conics belong to the separate geometry treatment; this chapter confines its geometry to circular angle measure and coordinates.

## Summary

An oriented angle records a signed amount of rotation, while its terminal ray records only a final direction. Radian measure is the signed arc-to-radius ratio on a circle of positive radius, giving $2\\pi$ radians per full turn and $\\pi$ radians per $180^\\circ$. Coterminal angles differ by whole turns. For a one-direction sweep, distance is radius times angle magnitude; for a chosen sector of at most one full turn, area is half the radius squared times its nonnegative radian sweep. Reversals and repeated coverage require care about what is being measured. The unit circle assigns one point to every real angle, with signs determined by quadrants and coordinates related by reflection and half-turn symmetries. In [Sine, Cosine, and Tangent](sine-cosine-tangent.md), these coordinates become functions whose graphs describe periodic motion.
`;export{e as default};