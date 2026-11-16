
# Parametrised Curves

A curve can be a set of points, an ordered journey through those points, or a formula describing that journey. Differential geometry needs these distinctions. A circle traversed twice has the same image as a circle traversed once, but the journeys have different lengths. A perfectly smooth formula can stop at a point where its image has no geometric singularity. Conversely, an apparently harmless formula can trace a genuine cusp. We begin by naming what a parametrization records and what a legitimate change of parameter preserves.

The preparation is vector differentiation, the chain rule, Euclidean norms, and elementary proof. The book's [reader guide](reader-guide.md) links the exact calculus and linear-algebra resources. Coordinates are real, derivatives are taken component by component, and intervals have nonempty interior unless explicitly stated otherwise. At an endpoint, differentiability means a suitable extension to an open interval, or the corresponding one-sided statement when only that statement is needed.

## Definitions and the role of regularity

**Definition 1.1 — Parametrised curve.** A curve of class $C^k$ is a map $\gamma:I\to\mathbb R^n$ whose component functions have continuous derivatives through order $k$. Its **image** or trace is $\gamma(I)$. Its velocity is $\gamma'(t)$ and its speed is $v(t)=\|\gamma'(t)\|$. It is **regular** at $t$ when $v(t)>0$, and regular on $I$ when this holds everywhere.

The word regular describes the map at a parameter value. It does not say that the whole image is free of self-intersections, that the map is injective, or that the image is closed. A regular curve may pass through the same spatial point several times with different tangent directions. Regularity ensures that an instantaneous direction of travel exists, namely the unit tangent $T=\gamma'/\|\gamma'\|$.

For a vector-valued map, ordinary differentiation rules remain available. Differentiating a dot product gives $(a\cdot b)'=a'\cdot b+a\cdot b'$, because each coordinate product satisfies the scalar product rule. In three dimensions the same coordinate calculation gives $(a\times b)'=a'\times b+a\times b'$. Consequently a vector of constant length has derivative perpendicular to itself: differentiate $a\cdot a$ to obtain $2a\cdot a'=0$. This elementary observation will produce most moving-frame identities later.

**Definition 1.2 — Simple and closed.** A curve on an interval is simple if it is injective. A simple closed parametrized curve of period $L>0$ is a periodic map $\gamma:\mathbb R\to\mathbb R^n$ satisfying $\gamma(t+L)=\gamma(t)$ and injective on $[0,L)$. Smooth periodicity includes matching derivatives at the join. Equality of the two endpoint positions alone is a weaker condition: it can leave a corner or unequal velocities at the join.

When an image is called an embedded curve, the parametrization must be a homeomorphism onto that image as well as satisfy the differentiable rank condition. On a compact interval, a continuous injective map into Euclidean space is automatically a homeomorphism onto its image. On an unrestricted noncompact domain this conclusion needs a separate argument. Local regularity will give a local result without making an unsupported global claim.

## Regular changes of parameter

**Definition 1.3 — Regular reparametrization.** A $C^k$ change of parameter between open intervals is a $C^k$ diffeomorphism $\phi:J\to I$: it is bijective and both it and its inverse are $C^k$. For $k\ge1$, its derivative is nowhere zero. The new curve is $\beta=\gamma\circ\phi$. If $\phi'>0$ it preserves orientation; if $\phi'<0$ it reverses orientation.

A continuous nowhere-zero derivative on an interval has constant sign by the intermediate value theorem. Thus one regular change cannot preserve direction on one part of the interval and reverse it on another. The chain rule gives

$$\beta'(u)=\gamma'(\phi(u))\phi'(u),\qquad
\|\beta'(u)\|=\|\gamma'(\phi(u))\|\,|\phi'(u)|.$$

**Proposition 1.4 — What regular reparametrization preserves.** A regular change of parameter preserves the trace and regularity. It preserves the tangent line at corresponding points. Its unit tangent is $T_\beta=\operatorname{sgn}(\phi')T_\gamma\circ\phi$.

**Proof.** Surjectivity of $\phi$ gives equality of traces. The derivative formula expresses the new velocity as a nonzero scalar times the old one, proving the regularity equivalence and equality of the spanned lines. Dividing that formula by the positive speed gives the unit-tangent formula. $\square$

A differentiable increasing bijection need not be a regular change: $\phi(u)=u^3$ is strictly increasing and onto the line but has derivative zero at the origin. Its inverse is continuous but not differentiable there. Such a clock change can preserve the route while destroying regularity. Later, substitution will show that some changes with pauses still preserve length. The stronger hypotheses here are needed for differentiable geometric calculations, not for every conceivable statement about the image.

## A local graph theorem

**Theorem 1.5 — A regular curve is locally a graph.** Let $\gamma:I\to\mathbb R^n$ be $C^k$, $k\ge1$, and regular at an interior point $t_0$. Some coordinate, say $\gamma_j$, has nonzero derivative there. On a smaller open interval, $x=\gamma_j(t)$ is a $C^k$ parameter and the curve is an injective graph over the $j$th coordinate. It is a homeomorphism onto this local graph.

**Proof.** At least one component derivative is nonzero because the velocity vector is nonzero. Continuity makes this derivative retain its sign on some interval about $t_0$. The scalar mean value theorem makes that coordinate strictly monotone there. Its image is an open interval, and its inverse $t=\psi(x)$ is continuous. The inverse derivative follows from difference quotients, $\psi'(x)=1/\gamma_j'(\psi(x))$; repeated differentiation shows the stated $C^k$ regularity. Substitute $\psi$ into every other coordinate to express the image as a graph. Projection onto the $j$th coordinate and this graph map are continuous inverses. Injectivity follows already from injectivity of the selected coordinate. $\square$

This proof also identifies the tangent line without relying on a picture. In the new coordinate, the graph derivative has $j$th component one, so it cannot vanish. Any other regular parameter for the same local graph has velocity spanning that same line. The theorem is local: the interval must be chosen small enough that the selected coordinate remains monotone. Going once around a circle requires different coordinate choices near different points.

An important corollary concerns stability. On a compact interval a regular $C^1$ curve has a positive minimum speed $m$. If another $C^1$ curve satisfies $\sup_t\|\eta'(t)-\gamma'(t)\|<m/2$, then the reverse triangle inequality gives $\|\eta'(t)\|>m/2$. Regularity survives sufficiently small uniform changes of velocity. A small change of position alone does not give such a guarantee: a curve can oscillate very rapidly inside a narrow strip.

## Three worked examples

### Worked example 1 — The same line with a stopped clock

Compare $\alpha(s)=(s,2s,0)$ with $\beta(t)=(t^3,2t^3,0)$ on the real line. Both images are the line $y=2x,z=0$, and the clock $s=t^3$ is a strictly increasing bijection. However $\alpha'=(1,2,0)$ has speed $\sqrt5$, whereas $\beta'=(3t^2,6t^2,0)$ has speed $3\sqrt5\,t^2$. The second map is not regular at zero. Away from zero, its unit tangent is $(1,2,0)/\sqrt5$, and that direction has a perfectly good limit at zero. The undefined quotient at the stopped clock value does not make the underlying line singular. Using $s$ repairs the parametrization.

### Worked example 2 — A regular self-intersection

Let $\gamma(t)=(\sin t,\sin2t)$, with period $2\pi$. Its velocity is $(\cos t,2\cos2t)$. If the first component vanishes, then $t=\pi/2$ modulo $\pi$, so $\cos2t=-1$ and the second component does not vanish. Thus the curve is regular everywhere. Nevertheless $\gamma(0)=\gamma(\pi)=(0,0)$. The respective velocities are $(1,2)$ and $(-1,2)$, which span different lines. The image crosses itself at the origin. There is a well-defined tangent at each parameter value, but there is no single tangent line attached to the image point independently of the branch. Regularity and simplicity answer different questions.

### Worked example 3 — A cusp that is more than a clock failure

For $c(t)=(t^2,t^3)$ the velocity vanishes at zero. Its image near zero satisfies $y^2=x^3$ and $x\ge0$. Every secant direction approaching the origin tends to the horizontal line, so any regular parametrization of a full neighborhood in this image would have horizontal nonzero tangent. Its first-coordinate derivative would then be nonzero, forcing that coordinate to take values on both sides of zero near the parameter of the origin. But all image points have $x\ge0$. This contradiction proves there is no regular parametrization through the full cusp neighborhood. Unlike the stopped straight line, the failure cannot be removed simply by choosing a better clock covering both branches.

## Common mistakes and useful limits

The notation $\gamma'$ is a derivative of a map, while a tangent line is a geometric subspace. Speed is nonnegative and depends on timing; the tangent line is unchanged by a regular clock change. A zero velocity does not automatically mean zero curvature, because the usual curvature formulas divide by speed. A repeated image point does not automatically mean a singular parameter value. Before interpreting any derivative calculation, identify which of these objects the conclusion concerns.

Likewise, a plotted trace does not display traversal multiplicity. The maps $(\cos t,\sin t)$ and $(\cos2t,\sin2t)$ on $[0,2\pi]$ have the same trace and different journeys. The substitution $t\mapsto2t$ does not map that interval onto itself, so it does not meet the single-traversal reparametrization hypothesis. Domain and endpoint conditions are part of the mathematics.

## A regular immersion can revisit a point

Consider $\gamma(t)=(\sin t,\sin 2t)$ on the real parameter line. Its derivative is $(\cos t,2\cos 2t)$. These two components cannot vanish together: when the first vanishes the second is minus two. The curve is therefore regular everywhere, despite crossing itself at the origin. At parameter zero its tangent direction is $(1,2)$; at parameter $\pi$ it is $(-1,2)$. These vectors are not parallel, so the two visits give different tangent lines at the same image point.

The local graph theorem applies around either parameter separately. It does not produce one graph containing both crossing branches in a neighborhood of their common image point. Thus a tangent vector belongs initially to a parametrized visit, and treating it as uniquely attached to an image point requires the image to be a regular embedded curve there. This distinction is why regularity alone cannot replace injectivity in a theorem about embedded images. Restricting the parameter to a sufficiently small interval around either visit removes the other branch from that particular parametrized patch.

## Exercises

### Exercise 1.1
<a id="parametrised-curves-ex-1"></a>
Determine where $\gamma(t)=(t,t^2,t^3)$ is regular and find its tangent line at zero.

<details data-euler-reveal="hint"><summary>Hint 1</summary>
Differentiate all three components before looking for zeros.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
A vector cannot vanish if its first component is one.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
The velocity is $(1,2t,3t^2)$, whose first component is never zero, so the curve is regular on the whole line. At zero its point is the origin and its velocity is $(1,0,0)$. The tangent line is therefore $\{(a,0,0):a\in\mathbb R\}$. This conclusion does not assert that the curve itself lies in that line; it describes its first-order direction at the selected point.
</details>

### Exercise 1.2
<a id="parametrised-curves-ex-2"></a>
Is $\phi(u)=u^3$ a regular reparametrization of the real line? Explain every failed condition.

<details data-euler-reveal="hint"><summary>Hint 1</summary>
Strict monotonicity is weaker than having nonzero derivative.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Check the derivative of the inverse at zero.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
The map is a smooth increasing bijection, but $\phi'(0)=0$. Its inverse $s\mapsto s^{1/3}$ has no finite derivative at zero. Thus it fails to be a $C^1$ diffeomorphism and is not a regular reparametrization. On either open half-line its derivative is positive and its inverse is smooth, so the restriction there is a regular change. The exceptional point cannot be silently included in that restricted conclusion.
</details>

### Exercise 1.3
<a id="parametrised-curves-ex-3"></a>
Prove that a regular change of parameter has a constant orientation sign on an interval.

<details data-euler-reveal="hint"><summary>Hint 1</summary>
The derivative is continuous and never zero.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Apply the intermediate value theorem if two signs were present.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
Suppose $\phi'$ were positive at one point and negative at another. Continuity on the interval joining those points would give a point where $\phi'=0$, contradicting the regular-change hypothesis. Hence its sign is constant. The mean value theorem then gives strict monotonicity in the corresponding direction. Connectedness of the parameter interval is essential to this reasoning; on a disconnected domain different components could have different signs.
</details>

### Exercise 1.4
<a id="parametrised-curves-ex-4"></a>
For $\gamma(t)=(\cos t,\sin t)$ find intervals around zero on which the curve is a graph over one coordinate. Explain why the other coordinate is inconvenient there.

<details data-euler-reveal="hint"><summary>Hint 1</summary>
At zero inspect which coordinate derivative is nonzero.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Use the positive square-root branch near $(1,0)$.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
The second coordinate has derivative $\cos0=1$, so on $(-\pi/2,\pi/2)$ it is strictly increasing and can be used as coordinate $y$. The image is $x=\sqrt{1-y^2}$ with $-1<y<1$. The first coordinate derivative is zero at zero, and cosine takes the same value at $t$ and $-t$, so it cannot provide a one-to-one coordinate on any two-sided interval around zero. The curve itself remains regular there.
</details>

### Exercise 1.5
<a id="parametrised-curves-ex-5"></a>
Give a smooth map with equal endpoint positions whose periodic extension is not differentiable at the join.

<details data-euler-reveal="hint"><summary>Hint 1</summary>
Endpoint derivatives also have to agree for a differentiable periodic join.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
A scalar parabola on a symmetric interval already suffices.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
Take $\gamma(t)=(t^2,0)$ on $[-1,1]$. Its endpoints both equal $(1,0)$, but the endpoint velocities are $(-2,0)$ and $(2,0)$. Repeating this segment periodically makes the left derivative at a join equal $(2,0)$ and the right derivative equal $(-2,0)$. Hence the extension is not differentiable. Matching positions proves continuity of the join; it does not prove smooth periodicity.
</details>

### Exercise 1.6
<a id="parametrised-curves-ex-6"></a>
Prove the constant-length orthogonality rule and apply it to the unit tangent of a regular $C^2$ curve.

<details data-euler-reveal="hint"><summary>Hint 1</summary>
Differentiate the squared norm instead of the square root.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
The dot-product rule produces two equal terms.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
If $a\cdot a=c^2$ is constant, differentiating gives $2a\cdot a'=0$, so $a'$ is perpendicular to $a$. For a regular $C^2$ curve, $T=\gamma'/\|\gamma'\|$ is $C^1$ and has norm one. Therefore $T\cdot T'=0$. This does not force $T'$ to have norm one or even to be nonzero; its magnitude measures the turning of the tangent under the selected parameter.
</details>

### Exercise 1.7
<a id="parametrised-curves-ex-7"></a>
Show that reversing a regular parameter reverses the unit tangent but preserves its line.

<details data-euler-reveal="hint"><summary>Hint 1</summary>
Keep the absolute value in the speed transformation.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
A negative scalar changes a vector's direction, not its span.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
For decreasing $\phi$, the chain rule gives $\beta'=\gamma'(\phi)\phi'$ and $\|\beta'\|=\|\gamma'(\phi)\||\phi'|$. Dividing gives $T_\beta=-T_\gamma\circ\phi$. The spans of a nonzero vector and its negative agree, so the tangent line is preserved. The point at which the comparison is made must be $\beta(u)=\gamma(\phi(u))$; comparing arbitrary equal parameter numbers need not compare corresponding spatial points.
</details>

### Exercise 1.8
<a id="parametrised-curves-ex-8"></a>
For positive integer $m$, compare the trace and traversal of $(\cos mt,\sin mt)$ on $[0,2\pi]$ with the case $m=1$.

<details data-euler-reveal="hint"><summary>Hint 1</summary>
Count revolutions from the angle interval.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Check whether the proposed clock maps the original interval onto itself.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
Every positive integer $m$ gives the unit circle as trace, but the angle runs through $m$ complete revolutions. The velocity has constant speed $m$. For $m>1$ the clock $t\mapsto mt$ maps $[0,2\pi]$ onto $[0,2\pi m]$, not onto $[0,2\pi]$. Thus equal traces do not make these single-interval journeys equivalent by the stated regular reparametrization definition. The next chapter will quantify the difference by lengths $2\pi m$ and $2\pi$.
</details>

### Exercise 1.9
<a id="parametrised-curves-ex-9"></a>
Prove that sufficiently small uniform perturbations of the velocity preserve regularity on a compact interval.

<details data-euler-reveal="hint"><summary>Hint 1</summary>
Use the minimum of the original continuous positive speed.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Apply the reverse triangle inequality to the perturbed velocity.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
Compactness gives $m=\min\|\gamma'\|>0$. If $\sup\|\eta'-\gamma'\|<m/2$, then at every parameter value $\|\eta'\|\ge\|\gamma'\|-\|\eta'-\gamma'\|>m/2$. Hence the new curve is regular. Compactness supplies one lower bound working throughout the interval. Without it, the original speed may approach zero and there may be no single positive perturbation tolerance valid everywhere.
</details>

### Exercise 1.10
<a id="parametrised-curves-ex-10"></a>
Explain why the cusp $(t^2,t^3)$ cannot be made regular through its full two-branch neighborhood merely by another parameter.

<details data-euler-reveal="hint"><summary>Hint 1</summary>
Its secant slopes tend to zero at the origin.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
A nonzero horizontal tangent would make the first coordinate locally monotone through zero.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
Every point satisfies $x\ge0$ and $y/x=t$ away from zero, so any tangent line at the origin must be horizontal. A hypothetical regular parametrization through that point would have a nonzero horizontal velocity. Its first-coordinate derivative would be nonzero, and the local graph theorem would force that coordinate to take both smaller and larger values than zero on a two-sided interval. Negative first coordinates are absent from the cusp. The contradiction concerns a full neighborhood through both branches, rather than a one-sided path ending at the origin.
</details>

## Sources

The definitions, proofs, examples and exercises are original Euler prose under CC BY-SA 4.0. The preserved local seeds are the Unhurried readings [changing the clock](../../apps/unhurried/articles/ga-dg-parameterization/index.html) and [arc length](../../apps/unhurried/articles/ga-dg-arc-length/index.html), and Quarto Calculus Chapter 28; none is replaced. A primary author reference is Sucharit Sarkar's [UCLA differential-geometry notes](https://www.math.ucla.edu/~sucharit/120A-notes.html), Lecture 1. For book-scale comparison, see Andrew Pressley, [Elementary Differential Geometry, second edition](https://link.springer.com/book/10.1007/978-1-84882-891-9).

## Summary

A parametrised curve records an ordered traversal, while its image records only a point set. Regularity gives a nonzero velocity and a local graph description; it permits self-intersections and does not guarantee global injectivity. A regular change of parameter preserves the trace and tangent line, with orientation determined by the sign of the clock derivative. A stopped clock and a genuine cusp require different diagnoses. The next chapter constructs length from polygonal approximations and identifies the parameter measuring distance along the curve.
