
# Parametric and Polar Curves

## A path needs more than an equation

The equation $x^2+y^2=9$ describes a circle, but it does not tell us where a moving point starts, which direction it travels, or whether it goes around once or several times. A rule assigning a position to each time can supply that information. A different coordinate system can also make the same circle look simpler: its points all lie at distance $3$ from the origin.

This chapter develops two ways to describe plane curves. Parametric equations give both coordinates as functions of a parameter. Polar coordinates give a signed radial coordinate and an angle. We will connect these descriptions to Cartesian coordinates while keeping track of their domains and of information that a conversion can lose. Our questions concern positions and tracing; we do not need differentiation, integration, or formulas for curved areas.

Required preparation is the unit-circle meaning of sine and cosine, their periodicity, and the identity $\cos^2t+\sin^2t=1$. [Complex Numbers and Polar Form](complex-numbers-polar-form.md) supplies further preparation for angles and polar notation; [Vectors in the Plane](vectors-plane.md) supplies position and displacement vectors. All angles in this chapter are in radians. A parameter is real unless a different domain is specified.

## Parametric descriptions

**Definition 11.1 (Parametric curve and trace).** A parametric description consists of a domain $I\subseteq\mathbb R$ and two coordinate functions $x:I\to\mathbb R$, $y:I\to\mathbb R$. At parameter value $t\in I$ the point is

$$
\mathbf p(t)=(x(t),y(t)).
$$

The trace is the set $\{(x(t),y(t)):t\in I\}$. When $I$ is an interval, increasing $t$ specifies a tracing order or orientation wherever the point moves along the curve.

The parameter can represent time, but need not do so. A drawing instruction, an angle, or an algebraic variable may serve as a parameter. If it is time, give its units and make the coordinate units consistent. A formula alone does not decide whether negative times are meaningful in a physical model.

Different parameter values may give the same point. A description can pause, reverse direction, or retrace its earlier positions. Its trace forgets these features because a set records whether a point occurs, not how often or when. Conversely, a trace may fail to be a graph $y=f(x)$: a circle contains two different $y$ values above most of its $x$ values. It is still the trace of a perfectly well-defined map $t\mapsto(x(t),y(t))$.

**Example 11.2 (A line segment with a direction).** Describe the trace and orientation of

$$
x=1+t,\qquad y=2t-3,\qquad -1\le t\le2.
$$

At $t=-1$ the point is $(0,-5)$; at $t=0$ it is $(1,-3)$; at $t=2$ it is $(3,1)$. Since $x=1+t$, eliminating the parameter gives $t=x-1$ and

$$
y=2(x-1)-3=2x-5.
$$

The parameter restriction gives $0\le x\le3$. Thus the trace is the segment of the line $y=2x-5$ from $(0,-5)$ to $(3,1)$, with both endpoints included. Increasing $t$ increases $x$, so it travels in that order. The equation of the unrestricted line would include points that the given parameter never reaches.

In vector notation the same rule is $\mathbf p(t)=(1,-3)+t(1,2)$. The direction vector describes a displacement for a unit increase of the parameter, connecting this representation with the preceding chapter. It does not remove the interval restriction.

**Proposition 11.3 (Changing the parameter).** Suppose $\mathbf p$ is defined on $I$ and $\phi:J\to I$ is onto. Then $\mathbf q(s)=\mathbf p(\phi(s))$ has the same trace as $\mathbf p$.

*Proof.* For every $s\in J$, the value $\phi(s)$ belongs to $I$, so $\mathbf q(s)$ is a point in the trace of $\mathbf p$. Conversely, if $\mathbf p(t)$ belongs to that trace, surjectivity gives an $s\in J$ with $\phi(s)=t$, and then $\mathbf q(s)=\mathbf p(t)$. The two trace sets therefore contain exactly the same points. ∎

If $\phi$ increases, the original parameter values occur in their original order. If it decreases, their order reverses. An onto map that repeatedly visits the same values can introduce retracing. Equality of trace sets is weaker than equality of parametrisations.

**Example 11.4 (One circle, several journeys).** Consider

$$
x=3\cos t,\qquad y=3\sin t.
$$

The identity $x^2+y^2=9$ shows that all points lie on the radius-three circle. For $0\le t\le2\pi$, the successive quarter-turn points are $(3,0)$, $(0,3)$, $(-3,0)$, $(0,-3)$, and $(3,0)$. The trace is the whole circle, traversed anticlockwise once. The starting point repeats at the final endpoint. Using $0\le t<2\pi$ gives the same trace but omits that repeated endpoint parameter value.

On $0\le t\le4\pi$, the same formula goes around twice. Replacing $y$ by $-3\sin t$ on $[0,2\pi]$ gives a clockwise traversal. Replacing $t$ by $2s$ with $0\le s\le\pi$ goes anticlockwise around the same circle in a shorter parameter interval. These conclusions follow from unit-circle angles, rather than from the equation $x^2+y^2=9$ alone. That equation contains no direction or repetition information.

## Elimination needs a converse check

To eliminate a parameter is to derive a relation involving only $x$ and $y$. Every point in the original trace must satisfy that relation, but it does not follow that every point satisfying the relation is reached. Squaring can discard signs, and dropping a parameter interval can discard endpoint restrictions. A complete trace description needs the converse: for every proposed point, can we find an allowed parameter that produces it?

**Example 11.5 (A restriction lost through squaring).** Describe

$$
x=t^2,\qquad y=t,\qquad 0\le t\le2.
$$

Since $y=t$, elimination gives $x=y^2$. The original interval also gives $0\le y\le2$. Conversely, if a point satisfies $x=y^2$ and $0\le y\le2$, choosing $t=y$ produces it with an allowed parameter. Hence these two conditions describe the trace exactly. The point $(1,-1)$ satisfies $x=y^2$, but would require $t=-1$, outside the domain. The point $(9,3)$ also satisfies that equation, but requires $t=3$. Both are added if the interval is forgotten.

One can write the trace as $y=\sqrt x$ for $0\le x\le4$. It is traversed from $(0,0)$ to $(4,2)$ as $t$ increases. With all real $t$ instead, the original formulas would trace the entire sideways parabola $x=y^2$. The formula and the parameter domain work together to specify the curve.

A related caution occurs when solving $x=\cos t$, $y=\sin t$ for $t$. Dividing to get $\tan t=y/x$ excludes points with $x=0$, and an inverse tangent alone cannot choose the correct quadrant for every point. The identity $x^2+y^2=1$, followed by a quadrant-aware angle choice, describes the full circle more reliably.

## Signed polar coordinates

**Definition 11.6 (Polar coordinates).** The polar pair $(r,\theta)$ represents the Cartesian point

$$
x=r\cos\theta,\qquad y=r\sin\theta.
$$

Our convention permits every real $r$ and every real $\theta$. If $r>0$, move distance $r$ from the origin in direction $\theta$. If $r<0$, move distance $|r|$ in the direction opposite to $\theta$. If $r=0$, the point is the origin for every angle.

Thus $r$ is a signed radial coordinate. The actual nonnegative distance to the origin is $|r|$. Negative radius is a coordinate convention, not a claim that geometric distance is negative. The polar axis is the positive Cartesian $x$-axis, and positive angles turn anticlockwise from it.

A nonzero point has many polar representations, because rotations by full turns do not change direction and changing the sign of $r$ can be compensated by a half-turn. At the origin, an angle records a choice of representation and carries no unique directional information about the point.

**Proposition 11.7 (Equivalent polar representations).** For every integer $k$,

$$
(r,\theta)\sim(r,\theta+2k\pi)
\quad\hbox{and}\quad
(r,\theta)\sim(-r,\theta+(2k+1)\pi),
$$

where $\sim$ means “represents the same Cartesian point.” For a nonzero point these are all possibilities: equal representations have either the same signed radius with angles differing by a whole turn, or opposite signed radii with angles differing by an odd number of half-turns. All pairs $(0,\theta)$ represent the origin.

*Proof.* Periodicity leaves both sine and cosine unchanged after $2k\pi$, proving the first relation. An odd half-turn changes the signs of both sine and cosine. Multiplication by $-r$ changes them back, proving the second. Conversely, equality of Cartesian points gives equality of $x^2+y^2=r^2$, so two nonzero signed radii must be equal or opposite. For equal radii, dividing the coordinates by that radius gives identical sine and cosine, so the angles differ by $2k\pi$. For opposite radii, first replace one representation by its equivalent half-turn representation with the matching radius, then apply the preceding case. When the radius is zero both coordinates are zero independently of the angle. ∎

A convenient unique convention for each nonzero point is $r>0$ and $0\le\theta<2\pi$. We will say explicitly when imposing this convention; otherwise signed radii are allowed. At the origin, even this angle interval leaves many angles, so one may choose angle zero for bookkeeping without claiming it is geometrically determined.

**Example 11.8 (Converting a point without losing its quadrant).** Convert $(-2,2\sqrt3)$ from Cartesian coordinates to a positive-radius polar representation with $0\le\theta<2\pi$, and give one negative-radius representation.

The distance is

$$
r=\sqrt{(-2)^2+(2\sqrt3)^2}=\sqrt{4+12}=4.
$$

Consequently $\cos\theta=x/r=-1/2$ and $\sin\theta=y/r=\sqrt3/2$. The point is in the second quadrant, so $\theta=2\pi/3$. The required positive-radius pair is $(4,2\pi/3)$. Subtracting a half-turn and changing the radius sign gives $(-4,-\pi/3)$ as another representation. Indeed $(-4)\cos(-\pi/3)=-2$ and $(-4)\sin(-\pi/3)=2\sqrt3$. Merely taking the inverse tangent of $y/x=-\sqrt3$ would return a different principal angle and miss the quadrant unless corrected.

## Polar equations and their traces

**Proposition 11.9 (Coordinate conversion identities).** For any polar representation under Definition 11.6,

$$
x^2+y^2=r^2.
$$

If $x\ne0$, then $y/x=\tan\theta$. For a Cartesian point different from the origin, a positive-radius representation is found from

$$
r=\sqrt{x^2+y^2},\qquad
\cos\theta=x/r,\qquad \sin\theta=y/r,
$$

with a quadrant-consistent choice of angle.

*Proof.* Squaring and adding the coordinate formulas gives $x^2+y^2=r^2(\cos^2\theta+\sin^2\theta)=r^2$. If $x=r\cos\theta\ne0$, division is permitted and yields $y/x=\sin\theta/\cos\theta=\tan\theta$. For a nonzero point the stated positive $r$ is nonzero, and the proposed cosine and sine have squared sum one. They therefore specify a unit-circle direction, producing the original coordinates on multiplication by $r$. ∎

A polar equation such as $r=f(\theta)$ with $\theta$ in a specified interval defines a parametric trace by

$$
x(\theta)=f(\theta)\cos\theta,\qquad
y(\theta)=f(\theta)\sin\theta.
$$

This connection lets us investigate polar curves using the parameter itself. If $f(\theta)$ becomes negative, the point is on the opposite ray. If $f(\theta)=0$, the point passes through the origin. The trace comprises the points represented by at least one allowed pair satisfying the equation. A different equivalent polar representation of a point need not satisfy the same equation with the same angle interval.

For example, $r=2$ with $0\le\theta<2\pi$ traces the radius-two circle. Each point also has a representation with radius $-2$, but that second pair does not satisfy the equation $r=2$. This causes no contradiction: the equation specifies representations used to generate a trace, not a property of every possible coordinate name for each point.

**Example 11.10 (A polar circle and its repeated tracing).** Describe $r=4\cos\theta$ with $0\le\theta\le2\pi$.

Multiplying the equation by $r$ and using the conversion identities gives

$$
r^2=4r\cos\theta,
\qquad x^2+y^2=4x,
\qquad (x-2)^2+y^2=4.
$$

Thus all trace points lie on the circle of centre $(2,0)$ and radius $2$. To see the complete trace and orientation, substitute before eliminating:

$$
x=4\cos^2\theta=2+2\cos(2\theta),
\qquad y=4\sin\theta\cos\theta=2\sin(2\theta).
$$

As $\theta$ runs from $0$ to $2\pi$, the angle $2\theta$ runs from $0$ to $4\pi$. These equations trace the whole circle anticlockwise twice, starting at $(4,0)$. At $\theta=\pi/2$ and $3\pi/2$, the signed radius is zero, so the point is the origin. Between these angles the radius is negative; deleting those values would alter the specified parametrisation. The double-angle equations prove that the Cartesian circle is fully reached, rather than merely showing that each plotted point lies on it.

There is a subtlety when multiplying by $r$. If a polar equation is multiplied by $r$, the new equation may hold at $r=0$ even if the original did not. For $r=4\cos\theta$, the origin really is reached at allowed angles, so no extra Cartesian point appears in the final circle. In other conversions, the origin needs a separate check. Dividing by $r$ instead can delete an origin that belongs to the trace.

## Reading and comparing curves

A useful sketching procedure is to mark parameter values with exact coordinates, join them only after understanding the formula between them, and add arrows for increasing parameter. Mark included and excluded endpoints separately. For trigonometric parameters, quarter-turn and half-turn values often expose orientation and repeated points. For polar curves, also mark the angles where the signed radius vanishes or changes sign.

Finite samples support a sketch, but cannot prove a complete trace. A very narrow feature could occur between sampled values. The arguments in the worked examples use algebraic identities and parameter ranges to establish the full set and its tracing. A graph is most useful after these restrictions have been identified.

When comparing polar curves, equal parameter angles can identify some intersections, but equivalent representations and the origin require care. For instance, the line $\theta=0$ with signed $r$ allowed is the whole $x$-axis, including its negative part. Restricting $r\ge0$ gives just the nonnegative ray. A polar equation must be read together with its radius and angle conventions. A point of intersection is a common Cartesian point, even when the two descriptions use different angles to name it.

## Exercises

In these exercises use radians and allow signed polar radii unless a positive-radius convention is requested. Describe traces together with their parameter restrictions and orientation where asked.

### Exercise 11.1
<a id="parametric-polar-curves-ex-1"></a>

For $x=2-t$, $y=1+3t$, and $0\le t\le2$, eliminate $t$ and give the exact trace and orientation.

<details>
<summary>Hint 1</summary>

Find the endpoint positions first, then solve the first coordinate equation for $t$.

</details>
<details>
<summary>Hint 2</summary>

Substitute $t=2-x$ into the formula for $y$. Keep the range of $x$ that comes from the parameter interval.

</details>
<details>
<summary>Solution</summary>

Substitution gives $y=1+3(2-x)=7-3x$. The parameter endpoints give $(2,1)$ at $t=0$ and $(0,7)$ at $t=2$. Hence the trace is the closed segment on $y=7-3x$ with $0\le x\le2$, traversed from $(2,1)$ to $(0,7)$. Conversely every point of that segment is obtained with $t=2-x\in[0,2]$, so the range condition describes exactly the trace. The unrestricted line would be larger.

</details>

### Exercise 11.2
<a id="parametric-polar-curves-ex-2"></a>

Describe the trace of $x=t^2$, $y=t$ for $-2\le t\le-1$. Give a point satisfying the eliminated equation that is not reached.

<details>
<summary>Hint 1</summary>

The eliminated equation is $x=y^2$, but the permitted $y$ values equal the permitted $t$ values.

</details>
<details>
<summary>Hint 2</summary>

The first and last points are $(4,-2)$ and $(1,-1)$. A positive $y$ value cannot occur.

</details>
<details>
<summary>Solution</summary>

The exact trace is $x=y^2$ with $-2\le y\le-1$. Choosing $t=y$ proves that every point satisfying both conditions is reached. As $t$ increases, the point moves from $(4,-2)$ to $(1,-1)$. The point $(1,1)$ satisfies $x=y^2$ but would require $t=1$, outside the domain. Thus eliminating the parameter without its interval adds points from a different part of the parabola.

</details>

### Exercise 11.3
<a id="parametric-polar-curves-ex-3"></a>

Describe the trace, direction, and number of traversals for $x=2\cos(3t)$, $y=2\sin(3t)$ with $0\le t\le2\pi$.

<details>
<summary>Hint 1</summary>

Use the unit-circle identity to determine the distance from the origin.

</details>
<details>
<summary>Hint 2</summary>

The unit-circle angle is $3t$. Determine its total increase over the given interval.

</details>
<details>
<summary>Solution</summary>

The identity gives $x^2+y^2=4$, and the angle $3t$ runs from $0$ to $6\pi$. Hence the full radius-two circle is traced anticlockwise three times, starting and ending at $(2,0)$. For example, $t=0$, $2\pi/3$, $4\pi/3$, and $2\pi$ all give that same point. The Cartesian circle equation describes the trace but does not retain these four visits or the direction.

</details>

### Exercise 11.4
<a id="parametric-polar-curves-ex-4"></a>

Give a parametrisation of the line segment from $A=(-1,4)$ to $B=(5,-2)$, traversed from $A$ to $B$ once with parameter $0\le s\le1$.

<details>
<summary>Hint 1</summary>

Find the displacement vector $B-A$ and add a multiple of it to $A$.

</details>
<details>
<summary>Hint 2</summary>

The rule $A+s(B-A)$ gives $A$ at $s=0$ and $B$ at $s=1$.

</details>
<details>
<summary>Solution</summary>

Here $B-A=(6,-6)$, so take $x=-1+6s$ and $y=4-6s$ for $0\le s\le1$. The endpoint substitutions give $A$ and $B$, and every intermediate value is on the segment between them. Since $x$ increases strictly as $s$ increases, no point is repeated and the orientation is from $A$ to $B$. Replacing $s$ by $1-s$ would reverse the direction while leaving the trace unchanged.

</details>

### Exercise 11.5
<a id="parametric-polar-curves-ex-5"></a>

Convert the polar pair $(-6,\pi/3)$ to Cartesian coordinates. Give its positive-radius representation with angle in $[0,2\pi)$.

<details>
<summary>Hint 1</summary>

Use $x=r\cos\theta$ and $y=r\sin\theta$, including the negative sign of $r$.

</details>
<details>
<summary>Hint 2</summary>

Changing the radius sign requires adding a half-turn to the angle.

</details>
<details>
<summary>Solution</summary>

The Cartesian coordinates are $x=-6(1/2)=-3$ and $y=-6(\sqrt3/2)=-3\sqrt3$. A positive-radius representation is $(6,4\pi/3)$, since $\pi/3+\pi=4\pi/3$. Its Cartesian coordinates are again $(-3,-3\sqrt3)$. The actual distance from the origin is $6$; the signed coordinate $-6$ instructs us to use the ray opposite to angle $\pi/3$.

</details>

### Exercise 11.6
<a id="parametric-polar-curves-ex-6"></a>

Find a positive-radius polar representation of $(0,-5)$ with angle in $[0,2\pi)$. Explain why computing $y/x$ is unavailable here.

<details>
<summary>Hint 1</summary>

The point lies on a coordinate axis, so its direction can be determined directly.

</details>
<details>
<summary>Hint 2</summary>

A downward direction has cosine zero and sine negative one.

</details>
<details>
<summary>Solution</summary>

The distance is $5$ and the direction is $3\pi/2$, so the requested representation is $(5,3\pi/2)$. Indeed $5\cos(3\pi/2)=0$ and $5\sin(3\pi/2)=-5$. The quotient $y/x=-5/0$ is undefined, so the tangent ratio cannot be used at this point. The sine and cosine coordinate formulas remain valid and include both coordinate axes.

</details>

### Exercise 11.7
<a id="parametric-polar-curves-ex-7"></a>

Determine which of $(3,\pi/6)$, $(3,13\pi/6)$, $(-3,7\pi/6)$, and $(-3,\pi/6)$ represent the same point. State what changes for radius zero.

<details>
<summary>Hint 1</summary>

A full turn preserves a signed-radius representation; a half-turn must be accompanied by a radius sign change.

</details>
<details>
<summary>Hint 2</summary>

Compare every pair with $(3,\pi/6)$. The last pair changes the radius sign without changing the direction.

</details>
<details>
<summary>Solution</summary>

The first three represent the same point. The second angle differs from the first by $2\pi$, and the third changes the radius sign while adding $\pi$. The fourth represents the opposite Cartesian point because its radius sign changes with no compensating half-turn. At radius zero, all angles represent the origin, so there is no distinguished angular direction and no need for a full-turn or half-turn relation between the angles.

</details>

### Exercise 11.8
<a id="parametric-polar-curves-ex-8"></a>

Convert $r=6\sin\theta$, $0\le\theta\le2\pi$, into a Cartesian circle equation. Show that the full circle is reached and state the number of traversals.

<details>
<summary>Hint 1</summary>

Multiplying by $r$ gives $r^2=6r\sin\theta$. Complete the square in $y$.

</details>
<details>
<summary>Hint 2</summary>

Substitution also gives $x=3\sin(2\theta)$ and $y=3-3\cos(2\theta)$. Use the range of $2\theta$.

</details>
<details>
<summary>Solution</summary>

The Cartesian equation is $x^2+y^2=6y$, or $x^2+(y-3)^2=9$. For a converse tracing check, the substituted coordinates are $x=3\sin(2\theta)$ and $y=3-3\cos(2\theta)$. Relative to the centre $(0,3)$ these equal $3(\cos\phi,\sin\phi)$ with $\phi=2\theta-\pi/2$. This angle increases by $4\pi$, so the entire circle is traversed anticlockwise twice. The origin is reached when $\sin\theta=0$, so it belongs to the original trace as well as to the Cartesian equation.

</details>

### Exercise 11.9
<a id="parametric-polar-curves-ex-9"></a>

Compare the traces of $\theta=\pi/4$ under the restrictions (a) $r\in\mathbb R$ and (b) $r\ge0$.

<details>
<summary>Hint 1</summary>

The coordinate formulas give equal $x$ and $y$. Check the signs permitted in each case.

</details>
<details>
<summary>Hint 2</summary>

Negative $r$ moves to the opposite ray. Restricting $r\ge0$ excludes that ray but retains the origin.

</details>
<details>
<summary>Solution</summary>

Both coordinates equal $r/\sqrt2$. With $r\in\mathbb R$, they run through every equal pair, giving the whole line $y=x$. With $r\ge0$, both coordinates are nonnegative, giving only the closed ray $y=x$, $x\ge0$. The origin belongs to both because $r=0$ is allowed. An angle equation alone therefore does not decide between a line and a ray without a radius convention.

</details>

### Exercise 11.10
<a id="parametric-polar-curves-ex-10"></a>

The descriptions $x=\cos t$, $y=\sin t$, $0\le t\le\pi$, and $x=\cos s$, $y=-\sin s$, $0\le s\le\pi$, both imply $x^2+y^2=1$. Are their traces equal? Identify their common points.

<details>
<summary>Hint 1</summary>

Determine the sign of the sine on the given interval in each description.

</details>
<details>
<summary>Hint 2</summary>

One trace has $y\ge0$, the other $y\le0$. A common point must have $y=0$ as well as lie on the circle.

</details>
<details>
<summary>Solution</summary>

The first description traces the upper semicircle from $(1,0)$ to $(-1,0)$, while the second traces the lower semicircle with the same endpoints. Their traces differ; for example, $(0,1)$ belongs only to the first. A common point must have $y=0$ and $x^2=1$, so the common points are exactly $(1,0)$ and $(-1,0)$. The eliminated circle equation alone loses the sign restriction supplied by the parameter interval.

</details>

## Summary

Parametric equations specify a coordinate pair for every allowed parameter value. Their trace records the points reached, while the parameter supplies orientation, repetitions, and endpoint information. Eliminating a parameter can discard that information and can add points unless the domain restrictions and a converse check are retained.

Polar coordinates use $x=r\cos\theta$, $y=r\sin\theta$ with a declared signed-radius convention. Full turns preserve a representation; a radius sign change accompanied by a half-turn preserves the represented point. The origin has no unique angle. A polar equation becomes a parametric description when the angle is used as the parameter, making its domain and tracing visible. The next chapter, [Limits and Rates of Change: A First Look](limits-rates-preview.md), asks how changes in a parameter can be compared over shorter and shorter intervals.

## Sources

This chapter's explanations, examples, exercises, and algebraic arguments are original. For another treatment of the coordinate systems and elimination methods, see Jay Abramson et al., *Precalculus 2e*, OpenStax, [8.6 Parametric Equations](https://openstax.org/books/precalculus-2e/pages/8-6-parametric-equations) and [8.3 Polar Coordinates](https://openstax.org/books/precalculus-2e/pages/8-3-polar-coordinates), consulted 13 November 2026. The linked OpenStax text is licensed CC BY-NC-SA 4.0; it is cited for further reading, and no text or figures are reproduced here. This Euler chapter is licensed CC BY-SA 4.0.
