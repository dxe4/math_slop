var e=`---
parent_id: book-differential-geometry-curves-surfaces
chapter_id: global-plane-curves
title: "Global Plane Curves: Turning Number and the Isoperimetric Inequality"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Global Plane Curves: Turning Number and the Isoperimetric Inequality

Local curvature tells how a tangent turns at one point. Around a closed curve its integral becomes an integer multiple of a full revolution. Simplicity imposes a stronger condition: an embedded loop has exactly one signed tangent revolution. Length and area obey another global restriction, the isoperimetric inequality, whose equality case singles out a circle.

We prove both results, including the finite-corner version of turning needed for Gauss–Bonnet later. The preparation is the plane-curvature chapter, compactness of a closed interval, and Green's theorem from the linked vector-calculus prerequisite. One topological input is named explicitly: the Jordan separation theorem supplies the bounded inside of a simple closed plane curve. Its proof is not supplied in this differential-geometry chapter. Positive boundary orientation means that this inside lies to the left. The tangent-turning and length–area results themselves are proved below.

## Rotation index and a lifting lemma

**Definition 6.1 — Rotation index.** Let $\\alpha$ be a regular closed $C^2$ plane curve with arc-length period $L$. Choose its continuous tangent angle $\\theta$ on $[0,L]$. Because $T(L)=T(0)$, the difference $\\theta(L)-\\theta(0)$ is $2\\pi m$ for an integer $m$. Define the rotation index to be $m$. The tangent-angle theorem gives

$$\\int_0^L k\\,ds=2\\pi m.$$

Changing the initial angle by $2\\pi$ does not change this difference. Reversing traversal changes its sign. A loop traced several times can have an index larger than one, so regularity and closure alone do not give the simple-curve conclusion.

We need an elementary angle-lifting fact in two parameters. Identify the unit circle with complex numbers of modulus one only for this lemma; multiplication expresses addition of angles, and no complex-analysis theorem is used.

**Lemma 6.2 — Continuous angle on a convex compact set.** If $D$ is a compact convex set and $e:D\\to S^1$ is continuous, then a chosen angle for $e(p_0)$ extends uniquely to a continuous real angle on $D$.

**Proof.** Uniform continuity gives $\\delta>0$ such that images of points less than $\\delta$ apart differ in angle by less than $\\pi/2$. Choose an integer $N$ so large that $\\operatorname{diam}(D)/N<\\delta$. For $p\\in D$, set $p_j=p_0+(j/N)(p-p_0)$. Every ratio $e(p_j)/e(p_{j-1})$ lies in the open right half-circle, where there is a single continuous angle $\\operatorname{Arg}$ in $(-\\pi/2,\\pi/2)$. Define

$$\\Theta(p)=\\Theta_0+\\sum_{j=1}^N\\operatorname{Arg}\\bigl(e(p_j)/e(p_{j-1})\\bigr).$$

This is continuous. Multiplying the ratios telescopes, so exponentiating its angle gives $e(p)$. At $p_0$ every ratio is one, giving the prescribed value. Two possible lifts differ by a continuous integer multiple of $2\\pi$; convexity implies connectedness, so the integer is constant and the initial condition makes it zero. $\\square$

The finite formula is useful: it avoids assuming covering-space theory or an unspecified path-independence assertion. Convexity keeps each radial segment in the domain, and uniform continuity supplies one subdivision size valid for all radial segments.

## Full turning theorem for a simple curve

**Theorem 6.3 — Turning theorem.** A simple closed regular $C^2$ plane curve has rotation index plus or minus one. With positive boundary orientation it is plus one.

**Proof.** Reparametrize by arc length. Choose a lowest point as the initial point; compactness supplies one. Its tangent is horizontal, because its height has a minimum. Reverse traversal if necessary so that the unit tangent there points right. Write the period as $L$ and consider the triangle $D=\\{(u,v):0\\le u\\le v\\le L\\}$.

For $u<v$, except at $(0,L)$, define the unit chord direction

$$e(u,v)=\\frac{\\alpha(v)-\\alpha(u)}{\\|\\alpha(v)-\\alpha(u)\\|}.$$

Simplicity makes every denominator positive. On the diagonal set $e(u,u)=T(u)$, and at the remaining corner set $e(0,L)=-T(0)$. This extends continuously. Near a diagonal point, the chord divided by $v-u$ is the average of $T$ on that interval and tends uniformly to the tangent. Near $(0,L)$, write $u=a$ and $v=L-b$ with $a,b\\ge0$. Differentiability and periodic matching give $\\alpha(L-b)-\\alpha(a)=-(a+b)T(0)+o(a+b)$, so its unit direction tends to $-T(0)$.

Apply Lemma 6.2 to give this chord field a continuous angle with value zero at $(0,0)$. On the side $(0,v)$, all chords point from a lowest point to points at equal or greater height. Their directions remain in the closed upper half-circle. Starting at angle zero, the lift stays in $[0,\\pi]$ and ends at $\\pi$ at $(0,L)$. On the next side $(u,L)$, chords point back down toward the lowest point, so their directions remain in the closed lower half-circle. The continuous lift starting at $\\pi$ stays in $[\\pi,2\\pi]$ and ends at $2\\pi$ at $(L,L)$. The diagonal is the tangent field; its angle difference is therefore $2\\pi$. Our chosen traversal has index one; reversing it has index minus one.

For the orientation assertion, the regular graph near a lowest point has its bounded inside on the upper side. A rightward tangent has that side on its left. Thus the chosen traversal is the positive boundary orientation. $\\square$

Simplicity entered only to exclude a zero chord between distinct parameter values. The theorem does not say curvature is positive pointwise. A nonconvex simple curve can have intervals of negative curvature, compensated by additional positive turning elsewhere. Nor may unsigned curvature replace signed curvature in the integral. The theorem yields the total absolute curvature bound $\\int|k|\\,ds\\ge2\\pi$, with strict inequality whenever both signs contribute on sets of positive length.

## Corners and piecewise regular boundaries

**Definition 6.4 — Exterior angle.** For a piecewise-$C^2$ regular boundary with finitely many corners, assume the incoming and outgoing unit tangents are not opposite. The exterior angle at a corner is their signed angle in $(-\\pi,\\pi)$. It is positive for a left turn and can be negative at a nonconvex corner. The periodic join counts as a corner if its tangents differ.

**Theorem 6.5 — Piecewise turning.** A positively oriented simple closed piecewise-$C^2$ regular plane boundary with these nonreversing corners satisfies

$$\\sum_{\\text{arcs}}\\int k\\,ds+\\sum_{\\text{corners}}\\varepsilon_j=2\\pi.$$

**Proof.** Here are the smoothing details. Extend a periodic parametrization periodically and convolve it with a smooth nonnegative averaging kernel supported in an interval of radius $h$, with integral one. Such a kernel is obtained by normalizing $\\exp(-1/(1-t^2))$ on $(-1,1)$, setting it zero outside, then rescaling. The smoothed position converges uniformly to the original. Its derivative is the average of the piecewise velocity: integration by parts on each smooth piece cancels the internal boundary terms because position is continuous.

Near any noncorner point, choose a direction having positive dot product with velocity throughout a small parameter window. At a corner, the two nonopposite one-sided tangent directions have a common open half-plane; their bisector has positive dot product with both velocities on a sufficiently small two-sided window. For small $h$, averaged velocities still have positive dot product with the chosen direction on a smaller window. Thus the smoothing is regular and its projection on that direction is strictly increasing there, proving local injectivity. A finite collection of these windows covers the parameter circle. Pairs of parameters separated by a fixed positive circular distance have a positive minimum spatial separation by original simplicity and compactness; uniform positional convergence preserves their distinctness. Combining this with the local projection windows proves the smoothed closed curve is simple for all sufficiently small $h$.

Its orientation remains positive. Its signed Green area converges to the original positive area: velocities converge in integral norm on finitely many smooth pieces, since only shrinking corner neighborhoods have uncontrolled pointwise approximation, and position converges uniformly. Thus the smooth simple boundary has positive area and positive orientation. Theorem 6.3 gives total turning $2\\pi$ for every such smoothing.

Away from small corner neighborhoods, position derivatives converge through order two, so their signed turning integrals converge to those of the original arcs. In a corner window all smoothed tangent directions remain in the chosen common open half-plane. Their turning integral is therefore the difference of one continuous angle at its endpoints, without extra full revolutions. First take $h\\downarrow0$, then shrink the corner window. This difference tends to exactly the signed principal angle between the original one-sided tangents. Adding the finitely many arc and corner limits proves the identity. $\\square$

This theorem allows precisely the signed corner bookkeeping used later for a triangulated surface. It does not assert a value for a reversing cusp, where the angle could be either $\\pi$ or $-\\pi$ and the common-half-plane smoothing argument fails.

## An analytic inequality proved from finite trigonometric sums

We next need a periodic form of the Poincare inequality. We give its proof to avoid importing a Fourier-analysis prerequisite.

**Lemma 6.6 — Wirtinger's inequality.** If a real $C^1$ function $f$ has period $2\\pi$ and mean zero, then $\\int_0^{2\\pi}f^2\\le\\int_0^{2\\pi}(f')^2$. For period $L$, the right side is multiplied by $(L/2\\pi)^2$.

**Proof.** First take a finite trigonometric polynomial of mean zero, $p=\\sum_{n=1}^N(a_n\\cos nt+b_n\\sin nt)$. Integrating products of sines and cosines gives

$$\\int p^2=\\pi\\sum(a_n^2+b_n^2),\\qquad
\\int(p')^2=\\pi\\sum n^2(a_n^2+b_n^2).$$

The required inequality follows term by term. To extend it to $C^1$ functions, define the nonnegative averaging kernel

$$F_N(u)=\\frac1{N+1}\\left|\\sum_{j=0}^N e^{iju}\\right|^2.$$

Expanding the finite square shows its integral over $[-\\pi,\\pi]$ is $2\\pi$ and it is a finite trigonometric polynomial. The geometric-sum formula gives $F_N(u)\\le1/((N+1)\\sin^2(\\delta/2))$ whenever $\\delta\\le|u|\\le\\pi$. Set $p_N(t)=(2\\pi)^{-1}\\int_{-\\pi}^{\\pi}F_N(u)f(t-u)\\,du$. It is a trigonometric polynomial with mean zero.

For any continuous periodic function, these averages converge uniformly to that function. Indeed split the integral of $F_N(u)(f(t-u)-f(t))$ at $|u|=\\delta$. Uniform continuity makes the inside difference arbitrarily small, uniformly in $t$; the displayed bound makes the outside mass tend to zero for fixed $\\delta$. Applying the same argument to continuous $f'$ shows $p_N'\\to f'$ uniformly, since differentiation under this continuous integral gives the convolution with $f'$. Hence both squared integrals for $p_N$ converge to those for $f$. Passing the finite-polynomial inequality to the limit proves the claim. A linear change of variable from period $L$ to period $2\\pi$ supplies the scale factor. $\\square$

No infinite-series orthogonality identity has been assumed. Only finite sums, elementary trigonometric integrals, and the explicitly proved approximation property are used. The mean-zero hypothesis removes constant functions, which otherwise immediately contradict the inequality.

## Isoperimetry and its equality case

**Theorem 6.7 — Isoperimetric inequality.** A simple closed regular $C^2$ plane curve of length $L$ enclosing area $A$ satisfies $4\\pi A\\le L^2$. Equality holds exactly for a circle traversed once.

**Proof.** Use arc length and translate the coordinate means to zero. Translation changes neither length nor the Green area formula

$$A=\\frac12\\int_0^L\\det(\\alpha,\\alpha')\\,ds$$

for positive orientation. Apply integral Cauchy–Schwarz to $J\\alpha$ and $\\alpha'$, then apply Lemma 6.6 to both coordinates:

$$2A\\le\\left(\\int\\|\\alpha\\|^2\\int\\|\\alpha'\\|^2\\right)^{1/2}
\\le\\frac L{2\\pi}\\int\\|\\alpha'\\|^2=\\frac{L^2}{2\\pi}.$$

The integral Cauchy–Schwarz inequality follows by integrating $\\|U-cV\\|^2\\ge0$ and minimizing the resulting quadratic in the constant $c$; thus it needs no function-space machinery.

If equality holds, equality in that quadratic inequality forces $\\alpha'=cJ\\alpha$ for one positive constant $c$. Continuity changes the resulting almost-everywhere equality into equality everywhere. It gives constant $\\|\\alpha\\|$, and the unit-speed condition gives radius $1/c$. Integrating the rotation equation makes the curve a circle with possibly several laps. Simplicity excludes repeated laps, so its length is $2\\pi/c$ and its area is $\\pi/c^2$. Conversely a circle has these values and attains equality. $\\square$

The inequality concerns the actual enclosed area of a simple boundary. For a self-intersecting regular loop the same analytic argument bounds the absolute algebraic Green area, which counts signed overlaps; that quantity is not automatically the ordinary area of the union of enclosed lobes. Finite nonreversing piecewise-$C^2$ boundaries also satisfy the inequality by the smoothing construction: lengths and signed areas converge because velocities converge in integral norm and positions uniformly. We need no unsupported maximizer-existence argument.

## Worked examples

### Worked example 1 — Repeated circles

The map $\\gamma(t)=(R\\cos mt,R\\sin mt)$ on $[0,2\\pi]$, for positive integer $m$, has speed $mR$ and signed curvature $1/R$. Its length is $2\\pi mR$ and total signed curvature is $2\\pi m$, giving rotation index $m$. For $m>1$ it is not a simple closed parametrization. Its algebraic Green area is $m\\pi R^2$, while its trace encloses the ordinary disk area $\\pi R^2$. This example distinguishes the multiplicity-sensitive integral from the area of the image's bounded region.

### Worked example 2 — A regular figure eight

For $\\gamma(t)=(\\sin t,\\sin2t)$ the earlier chapter proved regularity. Its velocity–acceleration determinant is $-2\\sin t(1+2\\cos^2t)$ and its squared speed is $\\cos^2t+4\\cos^22t$. Replacing $t$ by $2\\pi-t$ changes the determinant's sign and preserves the speed. Thus the integrand $k\\,ds=\\det(\\gamma',\\gamma'')/\\|\\gamma'\\|^2\\,dt$ cancels over the full period. The rotation index is zero, consistent with the failure of simplicity at the crossing. Neither regularity nor a closed image can replace simplicity in the turning theorem.

### Worked example 3 — Area bounds from a fixed fence

Suppose a smooth simple fence has length $12$. Isoperimetry gives $A\\le144/(4\\pi)=36/\\pi$. A circle of radius $6/\\pi$ attains this bound. A square with the same perimeter has side three and area nine, strictly smaller than $36/\\pi$. Its straight sides have zero curvature, but its four exterior angles are each $\\pi/2$, so the piecewise turning theorem still gives total turning $2\\pi$. Equality of total turning does not imply equality of area: the two global theorems measure different restrictions.

## Exercises

### Exercise 6.1
<a id="global-plane-curves-ex-1"></a>
Show that the rotation index is independent of the initial tangent-angle choice.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Two continuous angle choices differ by a constant.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Subtract their endpoint differences.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
The tangent-angle uniqueness theorem says the choices differ by a constant integer multiple of $2\\pi$. This constant is added at both endpoints, so it cancels in $\\theta(L)-\\theta(0)$. The quotient by $2\\pi$ is therefore unchanged. Returning the angle to a principal interval at every point would introduce discontinuities and is not an allowed replacement for a continuous lift.
</details>

### Exercise 6.2
<a id="global-plane-curves-ex-2"></a>
Compute the rotation index of a radius-two circle traversed three times clockwise.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Clockwise traversal has negative signed curvature.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
The travelled length counts all three revolutions.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
Its signed curvature is $-1/2$ and its length is $3(4\\pi)=12\\pi$. Their integral is $-6\\pi$, so its index is minus three. Its trace is just one circle, but the parametrized journey is not simple on the three-lap period. The simple-curve index theorem therefore makes no contradictory assertion.
</details>

### Exercise 6.3
<a id="global-plane-curves-ex-3"></a>
Deduce a lower bound for total absolute curvature of a simple closed regular plane curve.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Compare the absolute value of an integral with the integral of the absolute value.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
The signed integral has magnitude $2\\pi$.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
The triangle inequality for integrals gives $\\int|k|\\,ds\\ge|\\int k\\,ds|=2\\pi$. Equality requires no cancellation between positive and negative curvature contributions. In particular a continuous curvature function taking both positive and negative values on arcs gives strict inequality. The bound is about the entire loop; it does not force a lower positive curvature at each point.
</details>

### Exercise 6.4
<a id="global-plane-curves-ex-4"></a>
Find the sum of signed exterior angles of a positively oriented simple polygon with no reversing corner.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Each open edge has zero curvature.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Apply the piecewise turning theorem, including negative turns at reflex vertices.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
All arc integrals vanish because the tangent is constant on an edge. The piecewise turning identity therefore gives exterior-angle sum $2\\pi$. At a reflex vertex the exterior angle is negative, and replacing it by its absolute value would change the theorem. This conclusion applies to nonconvex simple polygons as well as convex ones; self-intersecting polygons require their rotation index instead.
</details>

### Exercise 6.5
<a id="global-plane-curves-ex-5"></a>
Why must the mean-zero condition appear in Wirtinger's inequality?
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Try a constant nonzero function.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Its derivative has zero squared integral.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
For $f\\equiv1$, the squared-function integral is $2\\pi$ while the derivative integral is zero, so the proposed inequality fails. Subtracting the mean removes this constant component without changing the derivative. The finite trigonometric proof then involves only frequencies $n\\ge1$, where $n^2\\ge1$. In the geometric application, translating position by its mean implements exactly this subtraction.
</details>

### Exercise 6.6
<a id="global-plane-curves-ex-6"></a>
State the period-$L$ Wirtinger inequality and derive its scale factor.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Use $t=2\\pi s/L$.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
One derivative introduces a factor $L/(2\\pi)$ when going to the normalized variable.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
For $g(t)=f(Lt/(2\\pi))$, the normalized inequality is $\\int_0^{2\\pi}g^2\\le\\int_0^{2\\pi}(g')^2$. Substitution gives the common measure factor $2\\pi/L$ on the left, and the additional derivative-square factor $(L/(2\\pi))^2$ on the right. Cancelling the measure factor yields $\\int_0^L f^2\\le(L/(2\\pi))^2\\int_0^L(f')^2$, assuming period $L$ and zero mean.
</details>

### Exercise 6.7
<a id="global-plane-curves-ex-7"></a>
What is the smallest possible perimeter of a smooth simple plane region of area $9\\pi$, and when is it attained?
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Rearrange $L^2\\ge4\\pi A$.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Check the radius of the equality circle.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
The inequality gives $L\\ge\\sqrt{4\\pi(9\\pi)}=6\\pi$, since length is nonnegative. A circle of radius three has area $9\\pi$ and perimeter $6\\pi$, so the bound is attained. The equality theorem forces any attaining simple smooth boundary to be a circle. A different parametrization may change speed but cannot change these geometric length and area values.
</details>

### Exercise 6.8
<a id="global-plane-curves-ex-8"></a>
Explain the role of simplicity in the chord-direction proof of turning.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Look for a zero denominator inside its triangle.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Different parameter values at a crossing produce equal positions.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
The normalized chord field divides by $\\|\\alpha(v)-\\alpha(u)\\|$ for distinct parameters away from the closing pair. Simplicity guarantees this is nonzero. A self-intersection produces an additional zero chord inside the domain, so the continuous field on the whole triangle no longer exists and the lifting lemma cannot be applied as written. The regular figure eight shows that the conclusion itself can fail, not just this proof.
</details>

### Exercise 6.9
<a id="global-plane-curves-ex-9"></a>
Identify the topology input and the analytic input in converting a positively oriented simple boundary into its area integral.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
One theorem supplies an inside; another converts its integral to a boundary integral.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Keep the regularity and orientation requirements of Green's theorem.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
Jordan separation supplies the bounded inside of a simple closed boundary, an explicitly imported topological fact here. Green's theorem for the sufficiently regular positively oriented region gives $A=\\tfrac12\\oint(x\\,dy-y\\,dx)$. The inside must be on the left, and the boundary regularity must meet that theorem's hypotheses. Neither a numerical plot nor the tangent-turning theorem by itself establishes this area formula.
</details>

### Exercise 6.10
<a id="global-plane-curves-ex-10"></a>
For an ellipse with positive semiaxes $a,b$, deduce a lower perimeter bound and identify when equality can hold.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Its enclosed area is $\\pi ab$ by linear change of variables from the disk.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Use the circle equality case of isoperimetry.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
Writing the ellipse as the image of the unit disk under diagonal scaling gives area $\\pi ab$. Its smooth simple boundary therefore has $L\\ge2\\pi\\sqrt{ab}$. Equality requires the ellipse to be a circle, which occurs exactly when $a=b$. No elementary expression for the ellipse's full perimeter integral is needed to obtain this sharp lower bound and its equality condition.
</details>

## Sources

This chapter's proofs, examples and exercises are original Euler prose under CC BY-SA 4.0. Classical turning and isoperimetry are discussed in Sucharit Sarkar's verified [UCLA notes](https://www.math.ucla.edu/~sucharit/120A-notes.html), Lectures 8–9; the length–area proof here uses a separately developed finite-trigonometric approximation argument. Green's theorem is supplied by the preserved [Quarto vector-calculus chapter](/textbooks/calculus/_output/chapters/15-vector-calculus.html). The existing [polygon-turning computational clinic](../analytic-computational-geometry/curvature-turning-and-certified-orientation.md) remains unchanged. Jordan separation is an explicitly imported topology input, not claimed as proved here.

## Summary

A closed regular tangent returns with an integer rotation index. Simplicity forces one signed revolution, and a proved smoothing argument adds finite nonreversing corner angles to the same identity. A periodic mean-zero inequality, established from finite trigonometric sums, bounds enclosed area by length squared and singles out the circle in the equality case. These global conclusions require their stated closure, simplicity and orientation hypotheses. The next chapter moves from one parameter to regular surface patches; the turning formula will return in Gauss–Bonnet.
`;export{e as default};