var e=`---
parent_id: book-partial-differential-equations
chapter_id: laplace-mean-value-maximum
title: "Laplace’s Equation, Mean Value and Maximum Principles"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Laplace’s Equation, Mean Value and Maximum Principles

Harmonic functions describe equilibrium without an interior source. Their value at a point is an average of surrounding values. This local identity forces smoothness, comparison and strong restrictions on interior extrema. It also explains why the natural classical problem prescribes values on a boundary rather than an initial position and velocity.

Throughout, Ω is an open subset of R^d, d≥2, and Δu is the sum of the d pure second partial derivatives. A real function u is harmonic when u∈C2(Ω) and Δu=0. A C2 function is subharmonic here when Δu≥0 and superharmonic when Δu≤0. More general semicontinuous definitions exist, but are not being used without notice. Complex harmonic functions are treated componentwise; order statements concern real functions.

The preparation is multivariable differentiation, the divergence theorem on balls and elementary integration. The [classification chapter](classification-model-problems.md) introduced equilibrium boundary data. The next chapter constructs selected solutions through Green functions and Poisson kernels. Maximum principles in this chapter prove estimates and uniqueness; they do not, by themselves, prove that every continuous boundary datum has a classical extension on every domain.

## 1. Ball notation and spherical averages

Write B(a,r) for the open ball of radius r, ωd for the volume of the unit ball, and σd−1=dωd for its surface area. The volume and surface area at radius r are ωdr^d and σd−1r^{d−1}. The outward normal on its sphere is (x−a)/r.

For a C2 function near the closed ball, define the spherical average

\\[
 M(r)=\\frac1{\\sigma_{d-1}}\\int_{S^{d-1}}u(a+r\\theta)\\,dS(\\theta).
\\]

Differentiation under this fixed compact surface integral and rescaling the surface give

\\[
 M'(r)=\\frac1{\\sigma_{d-1}r^{d-1}}
 \\int_{\\partial B(a,r)}\\partial_\\nu u\\,dS
 =\\frac1{\\sigma_{d-1}r^{d-1}}
 \\int_{B(a,r)}\\Delta u\\,dx.
\\]

The last equality is the divergence theorem. All derivatives and boundaries are smooth enough for its classical application. Continuity gives M(r)→u(a) as r decreases to zero.

**Theorem 4.1: mean value.** If u is harmonic on a neighborhood of the closed ball, its spherical average equals u(a) for every allowed radius. Its ball average also equals u(a).

The derivative formula makes M constant. Taking the zero-radius limit identifies the constant. Integrating the spherical averages in polar coordinates from zero to r then gives ∫_B u=ωdr^d u(a), which is the ball statement. If Δu≥0 the same argument gives M'(r)≥0, hence both spherical and ball averages are at least u(a). Reversing signs gives the corresponding superharmonic inequality.

The hypotheses are local. One needs the whole ball inside the harmonicity region, not just a center and a few sampled points on the sphere. A sphere that crosses a source or a removed singularity does not support this application.

## 2. The converse and interior smoothness

Suppose u is continuous on Ω and satisfies the spherical mean-value identity for every sufficiently small ball centered at each point, with all radii up to the distance to the boundary allowed. Then u is smooth and harmonic. We supply the regularity step before differentiating u.

Choose a nonnegative smooth radial function ρ supported in the unit ball with integral one. Such a function is obtained by normalizing exp(−1/(1−|x|²)) inside the unit ball and zero outside. Set ρε(x)=ε^−dρ(x/ε). For points with their closed ε-ball in Ω, polar integration and the mean-value identity give

\\[
 (\\rho_\\varepsilon*u)(x)
 =\\int\\rho_\\varepsilon(y)u(x-y)\\,dy=u(x).
\\]

The radial weight is a weighted sum of spherical averages, each equal to u(x), and its total weight is one. On any smaller neighborhood, differentiation can be placed on the smooth compactly supported kernel: write the convolution with variable kernel ρε(x−y) over a fixed compact region. Continuity of u bounds it there, so every kernel derivative can be integrated and is continuous. The convolution, and hence u, is C∞ locally.

Now expand u(a+rθ) by Taylor's theorem. The average linear term is zero. Symmetry gives average θiθj=δij/d. Therefore

\\[
 M(r)=u(a)+\\frac{r^2}{2d}\\Delta u(a)+o(r^2).
\\]

Since M(r)=u(a), division by r² and passage to zero yield Δu(a)=0. This proves the converse. The same convolution argument applied to an already harmonic C2 function proves its interior smoothness. Analyticity is stronger and is not a consequence claimed merely from the word “smooth.”

**Worked example 4.2: a harmonic polynomial.** In two dimensions u(x,y)=x²−y² is harmonic because its two pure second derivatives are two and minus two. Its average over every disk centered at (a,b) equals a²−b². One can verify this independently by expansion: the first-order terms average to zero, and the equal averages of the two squared displacements cancel. The polynomial is unbounded on the plane, which will matter for the bounded harmonic Liouville theorem.

## 3. Weak maximum and comparison

**Theorem 4.3: bounded-domain maximum principle.** Let Ω be bounded and open, and u∈C2(Ω)∩C(Ωbar) be real with Δu≥0. Then max over Ωbar of u is attained on ∂Ω, and

\\[
 \\sup_{\\overline\\Omega}u\\le\\sup_{\\partial\\Omega}u.
\\]

There is no boundary smoothness assumption in this statement. Compactness of Ωbar and continuity ensure a maximum exists. For ε>0 let uε(x)=u(x)+ε|x|². Its Laplacian is strictly positive. It cannot have an interior local maximum, because at such a point each pure second derivative would be nonpositive and their sum nonpositive. Therefore its maximum lies on the boundary. Boundedness of |x|² on Ωbar and then ε→0 prove the inequality for u.

If Δu≤0, apply the theorem to −u to obtain the minimum principle. If u,v are continuous on the closure, C2 inside, and Δu≥Δv with u≤v on the boundary, the difference is subharmonic and is nonpositive throughout. In particular two harmonic functions with the same continuous boundary values agree. Their difference has both zero maximum and zero minimum bounds.

One should apply the comparison theorem to the difference with the correct sign. A subharmonic function lies below its harmonic comparison with the same boundary values; a superharmonic function lies above it. The example |x|² has positive Laplacian and its maximum on a ball lies at the boundary, not at the center.

**Worked example 4.4: disk data with a polynomial solution.** On the unit disk prescribe g(cosθ,sinθ)=cos(2θ). The function u=x²−y² is harmonic and takes those values. The maximum principle gives −1≤u≤1, and proves it is the unique solution in C2 of the disk interior and continuous on the closed disk. The explicit polynomial provides existence; the maximum principle supplies uniqueness. These are distinct parts of the argument.

## 4. Strong maximum principle

**Theorem 4.5.** If Ω is connected, u∈C2(Ω), Δu≥0, and u attains its global maximum M at an interior point, then u is constant.

For any sufficiently small ball centered at a point where u=M, the subharmonic mean inequality gives M≤average u≤M. Since u≤M and is continuous, equality of the average implies u=M throughout that ball: if u were smaller at one point, continuity would give a positive-volume neighborhood with a strict deficit. Thus the set E={u=M} is open in Ω. It is closed relative to Ω by continuity, nonempty by hypothesis, and Ω is connected, so E=Ω.

For harmonic functions the same conclusion holds for an attained interior minimum by changing signs. The maximum in the theorem is a global upper bound over Ω. An interior maximum supplied by the bounded-domain theorem has precisely that property. The applications here use this stated version; no additional unique-continuation theorem is needed.

A nonconstant harmonic function on a bounded connected domain with continuous closure therefore has every interior value strictly between its boundary minimum and maximum, provided those boundary extrema differ. On a disconnected domain a solution may be constant on one component and different on another. Connectedness cannot be omitted from a global constancy conclusion.

**Worked example 4.6: positivity from nonnegative data.** Suppose u is harmonic in a bounded connected domain, continuous on its closure, and its boundary values are nonnegative and not identically zero. The minimum principle gives u≥0. If u vanished at an interior point, the strong minimum principle would make u identically zero inside and by continuity on the boundary, contradicting the data. Thus u>0 in the interior. This assertion assumes a solution exists; it does not assert solvability for the chosen domain.

## 5. Harnack comparison by overlapping balls

Let h≥0 be harmonic on a neighborhood of B(0,R)bar. For |x|≤R/4, ball means and nonnegativity give

\\[
 h(x)=\\frac1{|B(x,R/2)|}\\int_{B(x,R/2)}h
 \\le 2^d h(0),
\\]

because B(x,R/2) is contained in B(0,R). Conversely B(0,R/4) is contained in B(x,R/2), so

\\[
 |B(0,R/4)|h(0)\\le |B(x,R/2)|h(x),
 \\qquad h(0)\\le2^d h(x).
\\]

Thus 2^−d h(0)≤h(x)≤2^d h(0) on the smaller ball. These constants are convenient rather than optimal. The argument uses no boundary integral formula and is valid for nonnegative, not just strictly positive, harmonic functions.

A polygonal path between two points in a connected open set can be covered by finitely many such small balls whose closures stay inside the set. Applying the local estimate along overlapping centers compares h at the two points by a finite positive factor depending on the chosen chain. In particular a nonnegative harmonic function that vanishes once vanishes everywhere. On a compact subset one can obtain a uniform factor using a finite cover and a connected network of balls in the domain. The factor deteriorates when paths approach the boundary; no uniform boundary Harnack claim follows from this elementary interior result.

The ball estimate also gives Liouville's theorem for a nonnegative entire harmonic function after a sharper argument or gradient estimate, supplied next. A fixed comparison factor alone does not force equality of two values. One must not replace the missing limiting step by saying that all radii are available.

## 6. Derivative estimates and Liouville

Interior smoothness permits differentiation of the ball-mean identity. For a closed ball B(a,r)bar inside Ω, differentiating with respect to its center and then using the divergence theorem yields

\\[
 \\partial_i u(a)=\\frac1{|B(a,r)|}
 \\int_{\\partial B(a,r)}u(y)\\nu_i(y)\\,dS(y).
\\]

One can first use a slightly smaller radius to ensure nearby centers are allowed. The formula then holds for every interior radius by continuity. Subtracting a constant K changes no derivative, because the normal integral is zero. Hence

\\[
 |\\partial_i u(a)|\\le\\frac d r\\sup_{B(a,r)}|u-K|.
\\]

If u is bounded harmonic on all of R^d, take K=0 and let r tend to infinity. Every first derivative is zero, so u is constant. If h is merely nonnegative entire harmonic, the earlier Harnack estimate applied to B(a,4r) bounds sup on B(a,r) by 2^d h(a), independently of r. The derivative estimate now also tends to zero. Therefore every nonnegative entire harmonic function is constant.

**Worked example 4.7: a growth restriction.** If an entire harmonic u satisfies sup_{|x|≤R}|u(x)|=o(R), then u is constant. At a fixed center a, the radius-r ball lies in B(0,r+|a|), so the derivative estimate is at most d o(r+|a|)/r, tending to zero. Linear functions show that growth of order R cannot be replaced by little-o without changing the conclusion: coordinate functions are nonconstant harmonic with exactly linear growth.

## 7. Source estimates by a quadratic barrier

Suppose Ω is bounded with Ωbar⊂B(a,R)bar, w∈C2(Ω)∩C(Ωbar), |Δw|≤F inside and |w|≤δ on the boundary. Put q(x)=F(R²−|x−a|²)/(2d), so q≥0 on Ωbar and −Δq=F. The function w−δ−q has nonnegative Laplacian and nonpositive boundary values, hence is nonpositive. Applying the same reasoning to −w gives

\\[
 |w(x)|\\le\\delta+q(x)\\le\\delta+\\frac{FR^2}{2d}.
\\]

This is a stability estimate for Poisson problems. If two solutions have boundary discrepancy at most δ and forcing discrepancy at most F in their −Δ equations, their difference satisfies exactly these hypotheses. The estimate has the expected length-squared scale. It uses an enclosing ball, so it is usually not the sharpest domain-dependent constant.

For −Δu=f≥0 with zero boundary values, the minimum principle gives u≥0. If f is not identically zero and Ω is connected, u is actually positive inside: u is superharmonic, so an interior zero would be a global minimum forcing constancy. A nonzero source contradicts constancy. The nonhomogeneous strong principle follows by applying the proved subharmonic theorem to −u, whose Laplacian is f≥0.

## 8. Boundaries, infinity and limitations

Boundedness in the maximum theorem is essential without additional conditions at infinity. On the upper half-plane u(x,y)=y is harmonic, continuous up to its finite boundary and zero there, yet positive inside. There is no contradiction because the domain is unbounded and values grow at infinity. Similarly a removed singularity can act as an additional boundary component: one cannot use only the outer boundary of a punctured region while ignoring behavior at the puncture.

For rough domains, existence of a continuous harmonic extension for every continuous boundary function can fail at irregular boundary points. The present maximum principles remain valid for any solution in the stated class because their proofs use interior derivatives, compactness and continuity on the actual closure. Constructing solutions, identifying regular boundary points and extending the theory to weak formulations require further work. The next chapter gives a complete constructive model on balls, where the geometry supports an explicit Poisson kernel.

## 9. A boundary derivative: the interior-ball lemma

The strong minimum principle says a nonconstant nonnegative harmonic function is positive inside. Under an interior-ball condition one can say more at a boundary point where its value is zero. Suppose B(a,R) lies inside the harmonicity domain and its sphere touches the boundary at ζ. Assume u is positive inside that ball, nonnegative on its closed sphere, u(ζ)=0, and u has a directional derivative along ν=(ζ−a)/R at ζ. We will prove ∂νu(ζ)<0. If the domain has a smooth boundary there and the ball is tangent, ν is its outward normal.

On the annulus R/2<|x−a|<R use the barrier v(x)=exp(−α|x−a|²)−exp(−αR²). It is positive inside the outer sphere and zero on it. Direct differentiation gives

\\[
 \\Delta v=(4\\alpha^2|x-a|^2-2\\alpha d)
 e^{-\\alpha|x-a|^2}>0
\\]

when α>2d/R². On the inner sphere u has a positive minimum, by continuity, compactness and interior positivity. Choose ε>0 small enough that u≥εv there. On the outer sphere the same inequality holds because u≥0 and v=0. The difference u−εv is superharmonic, so the minimum principle on the annulus gives u≥εv throughout it.

Approach ζ along the inward radius: x=ζ−tν. Since u(ζ)=v(ζ)=0, division by t>0 and the inward derivative limit give

\\[
 -\\partial_\\nu u(\\zeta)
 \\ge 2\\varepsilon\\alpha R e^{-\\alpha R^2}>0.
\\]

This is the claimed strict outward derivative sign. The proof uses an explicit barrier and an existing derivative; it does not manufacture boundary differentiability from continuity. Nor can the interior-ball assumption be discarded in favor of an arbitrary sharp or irregular boundary.

For −Δu=f≥0 with u nonnegative and positive inside, the same comparison works because Δ(u−εv)=−f−εΔv<0. In physical potential models the nonzero outward derivative represents a strictly signed boundary flux. In a uniqueness argument it can rule out a nontrivial nonnegative solution having both zero value and zero normal derivative at such a touching point. These are local conclusions at a boundary point satisfying the stated geometry and regularity, not a general global Cauchy solvability theorem for elliptic equations.

## 10. Comparing domains for a nonnegative source

Suppose Ω1 lies inside Ω2, both are bounded, and classical continuous-closure solutions uj of −Δuj=1 have zero boundary values on their respective domains. Assume the first closure is contained in the second domain so the comparison traces are defined directly. The minimum principle gives u2≥0. On Ω1 the difference u2−u1 is harmonic, and on its boundary it equals u2≥0. Hence u2≥u1 throughout Ω1. If u2 is positive on that boundary, the difference is strictly positive inside by the minimum principle.

This is a conditional domain comparison: the solutions are assumed to exist in the stated class. Enlarging a zero-boundary equilibrium domain can increase the response to a fixed positive source. For concentric balls, the exact formulas (Rj²−|x|²)/(2d) show that the difference is the positive constant (R2²−R1²)/(2d), providing a direct check of the sign.

## Exercises

### PDE-LAP-E001 — Harmonicity
Which of x²+y², x²−y² and xy are harmonic in the plane?
<details><summary>Hint 1</summary>Compute the two pure second derivatives.</details>
<details><summary>Hint 2</summary>Mixed derivatives do not occur in the Laplacian.</details>
<details><summary>Full solution</summary>The Laplacians are four, zero and zero respectively. Thus x²+y² is strictly subharmonic, while x²−y² and xy are harmonic. The existence of a nonzero mixed second derivative for xy does not affect this conclusion.</details>

### PDE-LAP-E002 — Ball average
Find the average of 3+2x−y over any disk centered at (a,b).
<details><summary>Hint 1</summary>The function is harmonic.</details>
<details><summary>Hint 2</summary>The mean-value identity evaluates it at the center.</details>
<details><summary>Full solution</summary>The average is 3+2a−b. Alternatively translate the disk to the origin: the displacement coordinates have zero average by symmetry, leaving precisely the center value.</details>

### PDE-LAP-E003 — Subharmonic comparison
If Δu≥0 in the unit ball and u≤5 on its boundary, what bound holds inside?
<details><summary>Hint 1</summary>Compare with the constant harmonic function five.</details>
<details><summary>Hint 2</summary>Apply the maximum principle to u−5.</details>
<details><summary>Full solution</summary>Assuming u is continuous on the closed ball and C2 inside, u−5 has nonnegative Laplacian and nonpositive boundary values. Therefore u≤5 throughout. No corresponding lower bound follows from these hypotheses alone.</details>

### PDE-LAP-E004 — Strict interior range
A harmonic function on a bounded connected domain has continuous boundary values ranging from zero to one. Can it equal one inside?
<details><summary>Hint 1</summary>The weak maximum principle first bounds it by one.</details>
<details><summary>Hint 2</summary>An attained interior global maximum forces constancy.</details>
<details><summary>Full solution</summary>It cannot. If it equaled one at an interior point, the strong maximum principle would make it identically one, contradicting a boundary value zero by continuity. Thus every interior value is strictly below one, and the analogous minimum argument makes it strictly above zero.</details>

### PDE-LAP-E005 — Connectedness
Give a nonconstant harmonic function on a disconnected bounded open set that attains an interior maximum.
<details><summary>Hint 1</summary>Take two disjoint balls.</details>
<details><summary>Hint 2</summary>Choose a different constant on each component.</details>
<details><summary>Full solution</summary>On two disjoint balls define u=1 on one and u=0 on the other. It is smooth and harmonic on the union and continuous on its closure when the closed balls are disjoint. Its global maximum one is attained throughout the first ball, but it is not constant on the whole disconnected domain.</details>

### PDE-LAP-E006 — A source bound
In dimension three, suppose Ωbar lies in a radius-two ball, |Δw|≤6 and |w|≤1 on the boundary. Give the barrier bound.
<details><summary>Hint 1</summary>Use δ+FR²/(2d).</details>
<details><summary>Hint 2</summary>Here δ=1,F=6,R=2,d=3.</details>
<details><summary>Full solution</summary>The bound is 1+6·4/6=5 throughout Ω. It holds for w in the stated classical continuous-closure class. The local quadratic q can improve the pointwise bound if the center and position are known.</details>

### PDE-LAP-E007 — Entire bounded functions
Prove that a harmonic function on the plane with |u|≤100 is constant.
<details><summary>Hint 1</summary>Use arbitrarily large balls in the derivative estimate.</details>
<details><summary>Hint 2</summary>At each fixed point, |∂i u|≤200/r.</details>
<details><summary>Full solution</summary>The derivative estimate in dimension two gives |∂i u(a)|≤200/r for every r>0. Letting r grow makes each derivative zero. Since the plane is connected, integrating along line segments gives a single constant value everywhere.</details>

### PDE-LAP-E008 — Positive harmonic comparison
For nonnegative harmonic h on a neighborhood of a radius-eight ball in R³, compare h(x) and h(0) when |x|≤2.
<details><summary>Hint 1</summary>This is the R/4 region.</details>
<details><summary>Hint 2</summary>The comparison factor is 2^d.</details>
<details><summary>Full solution</summary>One has h(0)/8≤h(x)≤8h(0). These inequalities follow from nested ball averages and nonnegativity. If h(0)=0 they force h to vanish on the smaller ball, after which connected propagation gives vanishing on its connected harmonicity component.</details>

### PDE-LAP-E009 — A puncture
Why does log|x| on a planar annulus not contradict the maximum principle?
<details><summary>Hint 1</summary>Check its Laplacian away from zero.</details>
<details><summary>Hint 2</summary>The annulus has two boundary circles.</details>
<details><summary>Full solution</summary>For r>0, the radial Laplacian is (log r)''+(log r)'/r=−1/r²+1/r²=0. On an annulus a<r<b its minimum and maximum are log a and log b on the inner and outer circles. Ignoring the inner boundary would discard part of the actual boundary data.</details>

### PDE-LAP-E010 — Unbounded domains
Give a harmonic function on the upper half-plane with zero finite-boundary data that is nonzero inside.
<details><summary>Hint 1</summary>A coordinate function is harmonic.</details>
<details><summary>Hint 2</summary>The boundary is y=0.</details>
<details><summary>Full solution</summary>u(x,y)=y is harmonic, zero on y=0 and positive for y>0. It grows at infinity. This demonstrates why bounded-domain maximum or uniqueness conclusions cannot be transferred to an unbounded domain without controlling infinity.</details>

### PDE-LAP-E011 — Source sign
For −Δu=1 in a ball with zero continuous boundary values, determine the sign of u and give an exact formula.
<details><summary>Hint 1</summary>Use a constant minus |x|².</details>
<details><summary>Hint 2</summary>Δ|x|²=2d.</details>
<details><summary>Full solution</summary>In B(0,R), u=(R²−|x|²)/(2d) has −Δu=1, zero boundary values and is strictly positive inside. Uniqueness follows from harmonic comparison of two solutions. The formula also shows the quadratic barrier constant is attained at the center in this model.</details>

### PDE-LAP-E012 — Conjugate components
On a bounded domain Ω, let a complex-valued function be harmonic in Ω and continuous on its closure. If it has real and imaginary boundary values bounded in absolute value by one, what interior modulus bound follows directly?
<details><summary>Hint 1</summary>Apply the real maximum and minimum principles separately.</details>
<details><summary>Hint 2</summary>Combine the two component bounds using Euclidean modulus.</details>
<details><summary>Full solution</summary>Each component lies between minus one and one, so |u|≤sqrt2 inside. A sharper bound from a circular modulus boundary condition requires an additional argument; one cannot apply an ordered real maximum theorem directly to a complex value.</details>

## Sources and scope

This is original classical exposition using the divergence theorem and elementary smooth-kernel averaging. Evans and Strauss provide syllabus benchmarks. The proofs state regularity and domain assumptions locally. No general Dirichlet existence theorem, boundary regularity theorem, distributional harmonicity theorem or analyticity claim is smuggled into the mean-value identity.

## Summary

Spherical flux gives the mean-value identity and its subharmonic inequality. Radial smoothing proves interior regularity and the converse. Maximum principles then give comparison, uniqueness and strict interior bounds on connected domains. Ball averages yield Harnack comparison; derivative estimates yield Liouville theorems. Quadratic barriers control source perturbations, while unbounded domains and punctures show why boundary and infinity hypotheses must remain explicit.
`;export{e as default};