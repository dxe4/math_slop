
# Curvature of Plane Curves

Two travellers moving along the same road at different speeds should agree about the road's bend. The time derivative of a tangent vector does not have this property: a faster traveller sees the tangent turn faster. Dividing by distance travelled removes the timing. In the oriented plane we can also distinguish left turns from right turns, so the resulting curvature is signed.

This chapter develops the definition, derives its formula for an arbitrary regular parameter, and proves exactly what happens under reversal, reflection and scaling. We use the distance coordinate constructed in [Arc Length and Reparametrisation](arc-length-reparametrisation.md). Curves are $C^2$ and regular on the interval under discussion. A stationary point is outside these hypotheses, even if a nearby simplified formula has a limit.

## The oriented frame

Fix the standard orientation of $\mathbb R^2$. Write $J(x,y)=(-y,x)$ for rotation counterclockwise through a right angle. For a unit-speed curve $\alpha(s)$ put $T=\alpha'$ and $N=JT$. Then $(T,N)$ is a positively oriented orthonormal frame. This $N$ is the **left normal**, not the principal normal defined by dividing by a nonzero curvature magnitude. It exists even at an inflection point.

**Definition 3.1 — Signed and unsigned curvature.** Since $T\cdot T=1$, the derivative $dT/ds$ is perpendicular to $T$ and therefore is a unique scalar multiple of $N$. Define the signed curvature $k$ by

$$\frac{dT}{ds}=kN.$$

The unsigned curvature is $\kappa=|k|=\|dT/ds\|$. Equivalently $k=\det(T,dT/ds)$, because $\det(T,N)=1$.

**Theorem 3.2 — Oriented plane frame equations.** The left-normal frame satisfies

$$T'=kN,\qquad N'=-kT,$$

where primes here denote derivatives with respect to arc length.

**Proof.** The first identity is the definition justified by differentiating the unit norm. The linear map $J$ is constant, so $N'=JT'=kJN=-kT$, since $J^2=-I$. This argument contains no division by $k$ and remains valid when $k=0$. $\square$

At a point where $k=0$, the two frame derivatives vanish at that instant. It does not follow that the frame is constant on a whole interval; a derivative can vanish at a point without vanishing nearby. By contrast, if $k$ is identically zero on a connected interval, the first equation gives constant tangent and integration gives a straight line. The distinction between one value and an identity is particularly important around inflections.

## A formula without solving for distance

Let $\gamma(t)$ be a regular $C^2$ plane curve, let $v=\|\gamma'\|$, and let $s$ increase with $t$, so $ds/dt=v$. Its unit tangent is $T=\gamma'/v$. Differentiating and taking determinants gives

$$\det\left(T,\frac{dT}{dt}\right)
=\det\left(\frac{\gamma'}v,\frac{\gamma''}v-\frac{v'}{v^2}\gamma'\right)
=\frac{\det(\gamma',\gamma'')}{v^2}.$$

The term containing $\det(\gamma',\gamma')$ vanishes. Dividing once more by $ds/dt=v$ yields the main formula.

**Theorem 3.3 — Arbitrary-parameter curvature.** For a regular $C^2$ curve in the oriented plane,

$$k(t)=\frac{\det(\gamma'(t),\gamma''(t))}{\|\gamma'(t)\|^3}.$$

The unsigned curvature is the absolute value of this quotient. All occurrences refer to the same parameter value. The denominator is strictly positive by regularity.

For a graph $\gamma(x)=(x,f(x))$, the velocity is $(1,f')$ and the acceleration is $(0,f'')$. Thus

$$k=\frac{f''}{(1+(f')^2)^{3/2}}.$$

This formula uses the graph's increasing-$x$ orientation. If the same graph is traversed toward decreasing $x$, its signed curvature changes sign. The second derivative of a graph is not itself curvature: the denominator compensates for the angle and speed of the graph parametrization. A steep graph can have a large second derivative without a proportionally large geometric bend.

## Parameter changes and spatial transformations

**Proposition 3.4 — Transformation laws.** Regular increasing changes of parameter preserve signed curvature; decreasing ones reverse its sign. An orientation-preserving Euclidean rigid motion preserves $k$, and an orientation-reversing rigid motion reverses it. Multiplying every position by a positive scalar $c$ divides $k$ by $c$.

**Proof.** Under $t=\phi(u)$, the two new derivatives are $\gamma'\phi'$ and $\gamma''(\phi')^2+\gamma'\phi''$. Their determinant is $(\phi')^3\det(\gamma',\gamma'')$, since the extra repeated-vector determinant vanishes. The speed cubed is multiplied by $|\phi'|^3$. Their quotient therefore gains $\operatorname{sgn}(\phi')$. For $\eta=Q\gamma+b$, translations disappear on differentiation, the numerator gains $\det Q$, and an orthogonal $Q$ preserves speed. Finally scaling by $c>0$ multiplies the numerator by $c^2$ and denominator by $c^3$. $\square$

A negative scalar in the plane is a positive dilation followed by a rotation through $\pi$, so it divides $k$ by its absolute value, rather than reversing the sign. A reflection and a reversal of parameter each reverse signed curvature; doing both preserves it. Unsigned curvature is unchanged by either, except for the reciprocal-length scale under a dilation.

The units provide a useful check. When positions have length units and time is the parameter, the determinant of velocity and acceleration has units length squared divided by time cubed. Speed cubed has units length cubed divided by time cubed. Curvature therefore has inverse-length units. Multiplying a drawing by two must halve its numerical curvature; any formula failing this check is suspect.

## Tangent angle and the osculating circle

**Theorem 3.5 — A continuous tangent angle.** Choose $s_0$ and an angle $\theta_0$ representing $T(s_0)$. Then

$$\theta(s)=\theta_0+\int_{s_0}^s k(u)\,du$$

satisfies $T(s)=(\cos\theta(s),\sin\theta(s))$. It is the unique continuous tangent-angle function with that initial value.

**Proof.** Let $U=(\cos\theta,\sin\theta)$. Then $U'=kJU$, while $T'=kJT$. Differentiating $T\cdot U$ gives $k(JT\cdot U+T\cdot JU)=0$, since $J$ is skew-symmetric. The initial dot product is one, so it stays one. Unit vectors with dot product one coincide, giving the formula. For uniqueness, two angle functions differ everywhere by an integer multiple of $2\pi$. Their difference is continuous on an interval, hence that integer is constant; the initial value makes it zero. $\square$

This proves that signed curvature is the derivative of tangent angle with respect to distance. It also gives a construction from prescribed continuous signed curvature: integrate once for the angle and again for position. The full reconstruction theorem appears in Chapter 5. The angle is not restricted to the principal arctangent range; forcing it back into one fixed interval would introduce artificial jumps during a full turn.

**Definition 3.6 — Osculating circle.** At a point with $k\ne0$, the osculating-circle center is $C=\alpha+N/k$, and its radius is $1/|k|$.

The formula has a direct second-order justification. Translate the selected parameter to zero. The unit-speed curve has expansion $\alpha(h)=\alpha(0)+T(0)h+\tfrac12 k(0)N(0)h^2+o(h^2)$. The circle through the point with the stated center, traversed with initial tangent $T(0)$, has the same position, first derivative and second derivative. Thus the two curves agree through second order. This does not say they coincide on a neighborhood, or that any circle tangent at the point has the correct center. At $k=0$ there is no finite-radius osculating circle obtained by this formula; a tangent line supplies the second-order flat model.

## Worked examples

### Worked example 1 — Orientation and radius on a circle

For $\gamma(t)=(R\cos t,R\sin t)$ with $R>0$, the determinant of velocity and acceleration is $R^2$ and speed is $R$. Hence $k=1/R$. At $t=0$ the unit tangent is $(0,1)$ and left normal is $(-1,0)$. The center formula gives $(R,0)+R(-1,0)=(0,0)$, as expected. For the clockwise formula $(R\cos t,-R\sin t)$ the determinant is $-R^2$, so $k=-1/R$. Its left normal at zero points outward, but dividing that normal by the negative curvature still locates the center at the origin. Signed quantities must be changed consistently.

### Worked example 2 — An ellipse has varying bend

For $\gamma(t)=(a\cos t,b\sin t)$ with $a,b>0$, speed squared is $a^2\sin^2t+b^2\cos^2t$, which never vanishes. Direct calculation gives determinant $ab$. Thus

$$k(t)=\frac{ab}{(a^2\sin^2t+b^2\cos^2t)^{3/2}}.$$

At the endpoints of the horizontal and vertical semiaxes the values are respectively $a/b^2$ and $b/a^2$. With $a=2,b=1$, these are $2$ and $1/4$. The same ellipse can be sharply curved near one axis and gently curved near the other. Its signed curvature stays positive in this counterclockwise traversal, but its magnitude is not constant.

### Worked example 3 — A regular inflection

Take $\gamma(t)=(t,t^3)$. Its velocity $(1,3t^2)$ never vanishes and its determinant with acceleration $(0,6t)$ is $6t$. Therefore $k(t)=6t/(1+9t^4)^{3/2}$. It is negative for $t<0$, zero at zero and positive for $t>0$. The left normal remains defined continuously across zero. At zero the tangent is $(1,0)$ and $N=(0,1)$, while $T'=kN$ vanishes. A principal normal obtained by normalizing $T'$ would be undefined there and would approach opposite directions from the two sides. The oriented left-normal convention handles the inflection without an artificial singular frame.

## Parallel curves: a regularity and orientation certificate

A useful application checks both the curvature formula and its exceptional cases. Assume now that the unit-speed curve is $C^3$, so its signed curvature $k$ is $C^1$. For a fixed real distance $r$, its left offset is $\beta(s)=\alpha(s)+rN(s)$. Differentiating the frame equations gives

$$\beta'=(1-rk)T,\qquad
\beta''=-rk'T+(1-rk)kN.$$

Thus the offset is regular exactly where $1-rk\ne0$. On that set its velocity–acceleration determinant is $(1-rk)^2k$ and its speed is $|1-rk|$, so its signed curvature in the left-normal convention is

$$k_\beta=\frac{k}{|1-rk|}.$$

The absolute value is essential if the offset velocity points opposite to the original tangent. A formula without it would instead be using the old normal as a prescribed reference normal, which need not be the new curve's left normal. These are different signed conventions.

For a counterclockwise radius-$R$ circle, $k=1/R$ and $N$ points inward. At $r=R$ the offset collapses to the center and is not regular. For $r>R$ it is another counterclockwise circle, rotated through half a revolution relative to the original labels, with radius $r-R$ and positive curvature $1/(r-R)$. This exact example verifies the absolute-value formula and shows why a vanishing offset speed cannot be repaired merely by cancelling an algebraic factor. The regularity test must come before the curvature substitution.

## Misconceptions and boundaries

The center of curvature is a local second-order construction, not a claim about a circle lying inside or outside a whole region. A nonconvex closed curve can have both signs of curvature. Positive curvature at one point does not prove global convexity. Likewise a zero curvature value does not prove a straight segment. Every global inference requires information along an interval or around the complete curve.

At a stationary clock value the determinant formula is undefined. For $\gamma(t)=(t^2,t^4)$, both velocity components vanish at zero. The image is a portion of the parabola $y=x^2$, whose regular graph parameter has a one-sided curvature limit of two at the endpoint. That limit is a statement about the branch under a valid parameter; it does not turn the original zero denominator into an allowed substitution.

## Worked interpretation — Curvature carries a length scale

A counterclockwise quarter-circle of radius one has curvature one and length $\pi/2$. At radius two it has curvature one half and length $\pi$. Integrating signed curvature gives the same tangent-angle change, $\pi/2$, in both cases. Doubling every length halves curvature while preserving total turn on corresponding arcs.

A numerical curvature therefore requires a specified length unit. Changing from metres to centimetres changes its numerical value inversely, although the physical curve is unchanged. Angles in these derivative formulas are measured in radians. A degree-valued angle derivative needs conversion before it equals the stated curvature.

Total turning loses scale information differently. Every positively oriented circle makes one full tangent turn, independently of radius, so that integral cannot recover the radius. Local curvature and accumulated turning answer different questions. A constant curvature together with an arc length determines a turn; the turn alone does not separate those inputs. This matters when comparing drawings that have been resized: equal turning in two images supports an angle statement, while a curvature comparison must also account for the scale of the reproductions and the units assigned to each.

## Exercises

### Exercise 3.1
<a id="curvature-plane-curves-ex-1"></a>
Compute signed curvature of $(t,3t^2)$ at zero and at one.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Use the graph formula and keep the speed denominator.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
The derivatives of the graph function are $6t$ and six.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
The velocity is $(1,6t)$, acceleration $(0,6)$, determinant six, and speed cubed $(1+36t^2)^{3/2}$. Hence $k(t)=6/(1+36t^2)^{3/2}$. The requested values are six and $6/37^{3/2}$. Regularity holds everywhere because the first velocity component is one. Both signs are positive for the increasing-$t$ orientation, though the bend is much smaller at one.
</details>

### Exercise 3.2
<a id="curvature-plane-curves-ex-2"></a>
Derive $N'=-kT$ from the left-normal definition without dividing by $k$.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
The rotation $J$ is a constant linear map.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Use $J^2=-I$ after differentiating.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
Since $N=JT$, differentiation gives $N'=JT'=J(kN)=kJ(JT)=-kT$. Every step is valid even when $k$ vanishes. In particular the equation holds at a regular inflection. The argument depends on a fixed orientation and the corresponding fixed quarter-turn $J$; it is not the three-dimensional principal-normal construction used for a space curve.
</details>

### Exercise 3.3
<a id="curvature-plane-curves-ex-3"></a>
Prove that a unit-speed plane curve with constant signed curvature zero is a straight line, and one with constant nonzero signed curvature is a circle.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
For zero curvature integrate the constant tangent.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
For nonzero constant curvature differentiate $\alpha+N/k$.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
If $k=0$ identically, $T'=0$, so $T=T_0$ and $\alpha(s)=p+sT_0$ after choosing an origin for the parameter. If $k=c\ne0$ is constant, $(\alpha+N/c)'=T+(-cT)/c=0$. Thus the center $C=\alpha+N/c$ is fixed and $\|\alpha-C\|=1/|c|$. The curve lies on that circle and traverses it with unit speed; its parameter interval may describe an arc or repeated laps, so one must not infer a single full traversal without an interval condition.
</details>

### Exercise 3.4
<a id="curvature-plane-curves-ex-4"></a>
What happens to signed curvature when both the traversal and the plane's orientation are reversed by a reflection?
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Compute the two sign changes separately.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Each contributes a factor of minus one.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
A decreasing regular clock multiplies signed curvature by minus one. An orthogonal spatial reflection has determinant minus one and also multiplies it by minus one. The combined transformation therefore preserves the numerical signed curvature at corresponding points. Unsigned curvature is preserved by either operation separately. Keeping the fixed standard plane orientation in the determinant formula makes these transformations unambiguous.
</details>

### Exercise 3.5
<a id="curvature-plane-curves-ex-5"></a>
A curve has $k=2$ at a point. Dilate the plane by a factor of three. Find the new curvature and osculating radius.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Curvature has inverse-length units.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
The radius scales directly with the drawing.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
Positive dilation gives new signed curvature $2/3$. The original radius is $1/2$, so the new radius is $3/2$, also the reciprocal of $|2/3|$. No orientation change occurs under a positive dilation. Multiplying curvature by three would contradict both the derived determinant law and the fact that a larger copy of the same curve bends less per unit distance.
</details>

### Exercise 3.6
<a id="curvature-plane-curves-ex-6"></a>
At a unit-speed point suppose $T=(3/5,4/5)$ and $k=-2$. Find $N,T',N'$.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Rotate the tangent left before applying the frame equations.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Keep the minus sign in $N'=-kT$.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
The left normal is $N=(-4/5,3/5)$. Thus $T'=kN=(8/5,-6/5)$ and $N'=-kT=(6/5,8/5)$. Their dot products with $T$ and $N$, respectively, vanish as required by unit norms. The negative sign of curvature indicates turning toward the right of the oriented tangent; it does not mean the normal vector itself is obtained by a right quarter-turn.
</details>

### Exercise 3.7
<a id="curvature-plane-curves-ex-7"></a>
Why can the curvature quotient not be evaluated at zero for $(t^2,t^4)$? Describe a valid related curvature statement.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Check velocity before simplifying the fraction.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
The image lies on a parabola with nonnegative first coordinate.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
The velocity is $(2t,4t^3)$ and vanishes at zero, so the quotient's positive-speed hypothesis fails. The regular graph parametrization $x\mapsto(x,x^2)$ has curvature $2/(1+4x^2)^{3/2}$ and a limit of two as $x\downarrow0$. This describes the geometric branch from the right. It does not define the failed original quotient, and the original traversal reverses its direction at the endpoint rather than passing regularly through it.
</details>

### Exercise 3.8
<a id="curvature-plane-curves-ex-8"></a>
Show that two continuous tangent-angle functions for the same tangent differ by one constant integer multiple of $2\pi$.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Equal sine and cosine determine an angle modulo $2\pi$.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
A continuous integer-valued function on an interval is constant.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
Pointwise equality of the represented unit vectors implies $(\theta_1-\theta_2)/(2\pi)\in\mathbb Z$. This quotient is continuous. If it took distinct integer values, the intermediate value theorem would force a noninteger value between them. It is therefore a single constant integer. Fixing the initial angle makes the constant zero. This explains why an accumulated angle can pass continuously through many revolutions without being a principal inverse-trigonometric value.
</details>

### Exercise 3.9
<a id="curvature-plane-curves-ex-9"></a>
Find the osculating circle of $(t,t^2)$ at zero.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
The tangent there is horizontal and points to the right.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Use $C=\gamma+N/k$ with graph curvature two.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
At zero the point is $(0,0)$, tangent $(1,0)$, left normal $(0,1)$ and signed curvature two. Thus the center is $(0,1/2)$ and the radius is $1/2$. The circle equation is $x^2+(y-1/2)^2=1/4$. Its lower branch has expansion $y=x^2+O(x^4)$, agreeing with the parabola through second order while remaining a different curve away from the point.
</details>

### Exercise 3.10
<a id="curvature-plane-curves-ex-10"></a>
Prove directly that zero curvature at a single regular point need not imply a straight segment near it.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Use the regular cubic graph.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Its curvature changes sign through zero.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
For $\gamma(t)=(t,t^3)$, the established formula gives $k(0)=0$ and $k(t)=6t/(1+9t^4)^{3/2}\ne0$ for all $t\ne0$. Any neighborhood of zero contains points of nonzero curvature. A straight regular segment has identically zero curvature, so this graph contains no straight segment around the origin. A derivative identity at one point is weaker than an identity on an interval.
</details>

## Sources

Original Euler exposition and exercises, CC BY-SA 4.0. The unchanged companion readings are [Unhurried signed curvature](../../apps/unhurried/articles/ga-dg-curvature-plane/index.html) and [the oriented plane frame](../../apps/unhurried/articles/ga-dg-frenet/index.html). The pre-existing Atlas [Curvature, Polygon Turning, and Certified Orientation](../analytic-computational-geometry/curvature-turning-and-certified-orientation.md) retains its computational clinic. Sucharit Sarkar's [UCLA notes](https://www.math.ucla.edu/~sucharit/120A-notes.html), Lectures 6–7, are a verified primary-author reference for the classical formulas.

## Summary

Signed plane curvature measures the rate of tangent-angle change per unit distance. The left-normal frame remains defined at inflections, and its two differential equations lead to a determinant formula for any regular parameter. Reversing a clock or reflecting the plane changes the sign; positive scaling changes the reciprocal-length magnitude. A nonzero value determines an osculating circle, while a single zero value proves no global straightness. The next chapter adds a binormal and torsion to describe curves in space.
