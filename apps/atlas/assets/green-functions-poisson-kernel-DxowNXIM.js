var e=`---
parent_id: book-partial-differential-equations
chapter_id: green-functions-poisson-kernel
title: "Green Functions and the Poisson Kernel"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Green Functions and the Poisson Kernel

A Green function records the response to a concentrated source while respecting boundary conditions. Its normal derivative produces a boundary averaging kernel. On a ball these objects can be written explicitly, making it possible to prove existence of a harmonic extension for every continuous boundary datum. This supplies a construction to accompany the uniqueness and estimates of the preceding chapter.

Our sign convention is −Δu=f. The Dirichlet Green function G is positive in the interior and vanishes at the boundary. Its Poisson kernel is P(x,ζ)=−∂νζG(x,ζ), with the normal pointing out of the domain in the second variable. Changing the sign of the differential operator changes corresponding formulas. Mixing a fundamental solution for Δ with a representation for −Δ reverses the source term.

The main domain is the unit ball B in R^d, d≥2. Write σd−1 for the unit sphere area. Surface integrals use its ordinary Euclidean area measure. The inputs are the divergence theorem, Green's identity and the [harmonic maximum chapter](laplace-mean-value-maximum.md). We derive the identities needed here. General-domain solvability, distribution theory and rough-data potential estimates are not assumed.

## 1. Fundamental radial solutions and their flux

For z≠0 define

\\[
 \\Phi(z)=\\begin{cases}
 \\displaystyle\\frac{|z|^{2-d}}{(d-2)\\sigma_{d-1}},&d\\ge3,\\\\[4pt]
 \\displaystyle-\\frac1{2\\pi}\\log|z|,&d=2.
 \\end{cases}
\\]

For a radial function H(r), direct differentiation gives ΔH=H''+(d−1)H'/r. Both displayed functions are harmonic away from zero. Their radial derivative is −1/(σd−1r^{d−1}), including dimension two. Consequently

\\[
 -\\int_{\\partial B(0,r)}\\partial_\\nu\\Phi\\,dS=1.
\\]

The unit flux is the defining source normalization. Although Φ is singular, its absolute value is integrable near zero: in dimensions at least three the radial integral behaves as ∫_0^εr dr, and in dimension two as ∫_0^εr|log r|dr. This explains why a volume potential can be finite at its source point. Integrability alone does not justify taking two classical derivatives under that singular integral.

The phrase “fundamental solution” can be expressed distributionally as −ΔΦ=δ0. Here we use only the proved harmonicity and flux, together with excision of a small ball, so the representation proof remains classical. The flux calculation also fixes constants that cannot be recovered by merely solving the radial equation away from zero.

## 2. Green's identity with signs exposed

For C2 functions v,w on a smooth bounded domain D, the divergence of v∇w−w∇v is vΔw−wΔv. The divergence theorem yields

\\[
 \\int_D(v\\Delta w-w\\Delta v)\\,dy
 =\\int_{\\partial D}(v\\partial_\\nu w-w\\partial_\\nu v)\\,dS.
\\]

Suppose G(x,y) is harmonic as a function of y except at y=x, has the same singular part as Φ(y−x), and vanishes on ∂D. Assume its remaining part is smooth near x. For u∈C2(Dbar), apply this identity on D with a small closed ball about x removed, using v=u and w=G. The outward normal of the punctured domain on that small sphere points toward x, the reverse of its usual radial direction.

Write f=−Δu. In the punctured interior the volume integrand is Gf. The outer boundary term is u∂νG, because G=0 there. On the inner boundary, the term u∂νG tends to u(x): the reversed normal changes the singular flux to plus one, and continuity makes the error tend to zero. The other term −G∂νu tends to zero, since its area factor times the singular size is O(ε) in d≥3 and O(ε|log ε|) in d=2. The smooth correction contributes vanishing terms. Thus

\\[
 u(x)=\\int_DG(x,y)f(y)\\,dy
 -\\int_{\\partial D}u(\\zeta)\\partial_{\\nu_\\zeta}G(x,\\zeta)\\,dS(\\zeta).
\\]

The volume integral converges by the local integrability just proved. This is a representation for an already classical solution under the stated smoothness assumptions. It is not yet an existence theorem for arbitrary volume forcing, because regularity of a newly defined singular potential would need its own proof.

## 3. The unit-ball Green function

Fix x∈B with x≠0 and put x*=x/|x|², outside the closed ball. For d≥3 define

\\[
 G(x,y)=\\Phi(x-y)-|x|^{2-d}\\Phi(x^*-y).
\\]

For d=2 define

\\[
 G(x,y)=\\frac1{2\\pi}\\log
 \\frac{|x|\\,|x^*-y|}{|x-y|}.
\\]

The correction is harmonic in y throughout the ball because its pole lies outside. On |y|=1, the identity |x−y|=|x| |x*−y| makes G zero. Its singular part at y=x is exactly Φ(x−y). At x=0 use G(0,y)=(|y|^{2−d}−1)/((d−2)σd−1) in higher dimensions and −log|y|/(2π) in the plane. These are the continuous limits in the pole variable away from y=0.

The correction is sometimes described as an image source. That phrase is a useful geometric memory, not a proof. The three necessary facts are verified above: the correct singularity, harmonicity elsewhere and zero boundary trace. Uniqueness of the correction follows from the maximum principle for the difference of two nonsingular harmonic corrections with zero boundary data.

For fixed x, G(x,y)>0 when y∈B and y≠x. To see this, remove a sufficiently small ball about x. G is zero on the outer sphere and positive on the small inner sphere because its positive singularity dominates its bounded correction. The minimum principle gives nonnegativity between the boundaries. The strong minimum principle gives positivity there, since G is not identically zero. Let the removed radius shrink to include any specified y≠x.

## 4. Differentiating at the sphere

Differentiate the explicit G in the outward y direction at y=ζ with |ζ|=1. In dimensions at least three the derivative of Φ(z) is −z/(σd−1|z|^d). Combining the direct and image terms with |x−ζ|=|x||x*−ζ| gives

\\[
 P(x,\\zeta)=-\\partial_{\\nu_\\zeta}G(x,\\zeta)
 =\\frac{1-|x|^2}{\\sigma_{d-1}|x-\\zeta|^d}.
\\]

Differentiating the logarithmic expression in dimension two gives the same formula with d=2 and σ1=2π. In particular P is positive for x inside and ζ on the boundary. At the center it is the constant 1/σd−1.

Here is an independent harmonicity check that avoids assuming a representation theorem for the new kernel. With z=x−ζ and A=1−|x|², one has ∇A=−2x, ΔA=−2d, ∇|z|^−d=−dz|z|^−d−2 and Δ|z|^−d=2d|z|^−d−2. Product differentiation gives Δ(A|z|^−d)=2d|z|^−d−2 times

\\[
 -|z|^2+(1-|x|^2)+2x\\cdot z=0,
\\]

using |ζ|=1. Thus P is harmonic in x. All denominators stay away from zero on compact interior sets, permitting any fixed number of derivatives under the boundary integral for continuous data.

Its mass is one. Indeed H(x)=∫_∂B P(x,ζ)dS is smooth, harmonic and rotationally invariant. A smooth radial harmonic function on the whole ball is constant: its radial derivative satisfies (r^{d−1}H')'=0, and boundedness of H' at zero forces that constant to vanish. At x=0 the kernel integrates to one, hence H=1 everywhere. This proves the normalization without presuming the Dirichlet existence theorem we are about to establish.

## 5. The Poisson existence theorem

**Theorem 5.1.** For every real or complex continuous function g on the unit sphere,

\\[
 u(x)=\\int_{\\partial B}P(x,\\zeta)g(\\zeta)\\,dS(\\zeta),\\qquad x\\in B,
\\]

is smooth and harmonic in B, extends continuously to Bbar with boundary values g, and is the unique such harmonic extension.

Interior harmonicity follows from differentiating under the integral on compact subsets, using the preceding calculation. Fix a boundary point ζ0 and write

\\[
 u(x)-g(\\zeta_0)=\\int_{\\partial B}
 P(x,\\zeta)\\bigl(g(\\zeta)-g(\\zeta_0)\\bigr)\\,dS.
\\]

For a given ε>0, continuity makes the data difference less than ε when |ζ−ζ0|<δ. Positivity and unit mass bound that near contribution by ε. If x is within δ/2 of ζ0, the denominator on the complementary part is at least (δ/2)^d. Its contribution is therefore bounded by a constant times ||g||∞(1−|x|²)δ^−d, tending to zero as x approaches ζ0 from any interior direction. This proves the full boundary limit, not merely a radial limit. Continuity of g on the compact sphere makes the same choice of δ available uniformly in ζ0. Defining u=g at the boundary gives continuity on the closed ball. Uniqueness is the harmonic maximum principle applied to differences of real and imaginary components.

For real g, positivity and unit mass also give min g≤u≤max g directly. For complex g, the triangle inequality gives |u(x)|≤||g||∞. The latter conclusion is stronger than bounding real and imaginary parts separately. If g is nonconstant real, strict interior range follows from the strong maximum principle.

## 6. Worked constructions

**Worked example 5.2: constants and coordinates.** Constant boundary data K extend to K, since the kernel has mass one. Boundary data g(ζ)=ζj extend to xj: the coordinate function is harmonic and continuous on the closed ball with those data, so uniqueness identifies its Poisson integral. Thus the kernel reproduces affine functions, not just constants. This provides a useful check on normalization and orientation.

**Worked example 5.3: a planar Fourier mode.** In the disk write x=re^{iθ}, ζ=e^{iφ}. The kernel becomes

\\[
 P(x,\\zeta)=\\frac1{2\\pi}
 \\frac{1-r^2}{1-2r\\cos(\\theta-\\phi)+r^2}.
\\]

The absolutely convergent geometric expansion is (2π)^−1[1+2Σ_{n≥1}r^n cos(n(θ−φ))]. Integrating against cos(mφ) gives r^m cos(mθ), for positive integer m, by trigonometric orthogonality. This is also the harmonic polynomial Re(z^m). Each fixed r<1 permits termwise integration by uniform absolute convergence; no assertion of uniform convergence of the geometric series up to r=1 is needed.

**Worked example 5.4: a constant source.** For −Δu=1 in the unit ball with zero boundary values, u=(1−|x|²)/(2d). The Green representation therefore gives the exact identity ∫_B G(x,y)dy=(1−|x|²)/(2d). In particular at x=0 the integral is 1/(2d). This can also be checked by inserting the radial G(0,y) and integrating in polar coordinates. The positive answer checks the sign of the source representation.

**Worked example 5.5: the interval bridge.** For −u''=f on (0,L) with zero endpoint values, the one-dimensional Green function is G(x,y)=min(x,y)(L−max(x,y))/L. It is continuous in y, linear on either side of x, zero at the endpoints, and its y derivative jumps by minus one. Splitting the integral at x and differentiating by the fundamental theorem verifies that u(x)=∫_0^L G(x,y)f(y)dy satisfies −u''=f for continuous f. This model shows the same flux normalization without a singular power or logarithm.

## 7. Scaling and geometric limits

On B(a,R) the Poisson kernel with respect to physical surface area is

\\[
 P_R(x,\\zeta)=\\frac{R^2-|x-a|^2}
 {\\sigma_{d-1}R|x-\\zeta|^d},\\qquad |\\zeta-a|=R.
\\]

This follows by changing variables to the unit ball and including the surface Jacobian R^{d−1}. Its dimension is inverse surface area. Omitting the factor R gives the wrong total mass. At the center it equals 1/(σd−1R^{d−1}), recovering spherical averaging.

The unit-ball Green function is symmetric in x,y. For d≥3, the squared quantity |x|²|x*−y|² equals 1−2x·y+|x|²|y|², which is symmetric; the direct singular term is symmetric too. The logarithmic formula has the same symmetric expression in its numerator. This algebra proves symmetry for the explicit ball formula without invoking a general operator theory. Symmetry matters when interchanging the roles of source and observation, but it is not a license to exchange a boundary normal derivative in one variable with an ordinary derivative in the other without calculation.

The ball formulas do not extend unchanged to an arbitrary region. One can define a Green function by solving for a harmonic correction, but existence of that correction is itself a Dirichlet problem. On a ball the image construction provides it explicitly. On a rough domain or for rough source data, further potential or weak methods are needed. The classical route keeps these dependencies visible.

## 8. A second geometry: the planar half-plane

For the upper half-plane, reflection across the line supplies another explicit kernel. With observation point z=(x,y), y>0, and source w=(s,t), t>0, let wbar=(s,−t). The difference Φ(z−w)−Φ(z−wbar) is zero when y=0, harmonic away from w and has the required logarithmic singularity. Symmetry can be checked directly by comparing the two Euclidean distances. Differentiating at a boundary source point in the outward direction, which is minus the vertical direction, gives

\\[
 P_y(x-s)=\\frac1\\pi\\frac{y}{(x-s)^2+y^2}.
\\]

The sign is positive. Substitution r=(s−x)/y and the arctangent primitive show that its integral over the whole boundary line is one. The infinite boundary length therefore causes no normalization problem: the kernel is integrable and decays quadratically in the tangential coordinate.

For bounded continuous data g on R, the improper integral u(x,y)=∫_R P_y(x−s)g(s)ds converges absolutely. It is harmonic for y>0. On a compact interior region, y stays between two positive constants and x stays bounded; all kernel derivatives through order two have an integrable bound independent of (x,y) there. On a finite s interval differentiation is ordinary differentiation under a continuous integral, and on the complementary tails those common integrable bounds make the differentiated tails uniformly small. Thus differentiation is justified without treating an infinite integral as though its domain were compact. The kernel's direct harmonicity in (x,y) then proves Δu=0.

To show the boundary value at x0, split the line into |s−x0|<δ and its complement. The near contribution to u−g(x0) is small by continuity of g and unit mass. For (x,y) tending to (x0,0), with |x−x0|<δ/2, the far contribution is bounded by a constant times ||g||∞ times y/δ: integrate y/((x−s)^2+y²) outside |s−x|≥δ/2. It tends to zero. This proves a continuous extension at every finite boundary point. If g is uniformly continuous, the same split gives uniform boundary convergence as y decreases to zero.

For a continuous compactly supported datum, the estimate P_y≤1/(πy) further gives |u(x,y)|≤||g||1/(πy), where ||g||1 is the finite absolute integral of the datum. Thus this particular extension decays uniformly with height. Constant nonzero boundary data instead extend to a constant. These two cases show why decay at infinity is an additional property determined by the data and the selected solution class.

The construction is valid although the domain is unbounded. It also produces |u|≤||g||∞. Uniqueness in an unbounded domain needs a stated condition at infinity and a separate proof; the bounded-domain maximum theorem cannot simply be quoted. The earlier example u(x,y)=y shows nonuniqueness if unrestricted growing solutions are admitted. The ball theorem above already supplies the complete existence-and-uniqueness model required by this chapter; this half-plane construction illustrates which parts survive directly under a change of geometry and which require new arguments.

## 9. Boundary perturbations and interior resolution

Positivity of the Poisson kernel provides a stability estimate stronger than separate component bounds. If two continuous boundary data differ by at most δ, their harmonic extensions differ by at most δ on the whole closed ball. This follows by applying unit mass and the triangle inequality to their difference. It is a construction-level estimate, so it also holds for complex data. For real data ordered pointwise at the boundary, the extensions preserve that order.

One can also measure the effect of an error confined to a small part of the boundary. Fix an interior radius r0<1 and a boundary patch E of surface area A. Suppose the data difference vanishes outside E and has magnitude at most M. For |x|≤r0, the distance from x to every boundary point is at least 1−r0. The Poisson formula gives

\\[
 |u_1(x)-u_2(x)|
 \\le\\frac{MA}{\\sigma_{d-1}(1-r_0)^d}.
\\]

This estimate is crude but rigorous. It says that a bounded error on a sufficiently small patch has a small effect on a fixed compact interior ball. Its constant worsens near the boundary, where a narrow patch can strongly affect nearby values. The uniform δ bound remains available at the same time, so the smaller of the two bounds can be used. The surface area A is ordinary geometric area for a patch with, for example, piecewise smooth boundary; no arbitrary-set measure theorem is needed for this version.

If nonnegative data satisfy g≥m>0 on such a patch, the opposite kernel bound gives a quantitative interior positivity estimate. For |x|≤r0 one has 1−|x|²≥1−r0² and |x−ζ|≤1+r0. Therefore

\\[
 u(x)\\ge
 \\frac{mA(1-r_0^2)}{\\sigma_{d-1}(1+r_0)^d}.
\\]

Both estimates express harmonic averaging in terms of boundary geometry. Neither says that the harmonic extension preserves the detailed shape of the boundary signal. The planar mode example shows instead that fine oscillations are strongly attenuated before reaching a fixed interior radius: the nth mode is multiplied by r^n. Recovering high-frequency boundary data from an interior measurement can consequently amplify small errors by r^−n. Exact forward uniqueness and unstable reverse reconstruction are compatible properties.

For example at radius r=1/2, two boundary signals differing by cos(nθ) differ by only 2^−ncos(nθ) on that observation circle. Their boundary discrepancy has amplitude one for every n, while the interior discrepancy tends uniformly to zero. This is a complete quantitative instability example for the reverse map in supremum norms, even though the forward extension has operator norm one.

## Exercises

### PDE-GREEN-E001 — Radial Laplacian
Verify that r^{2−d} is harmonic away from zero when d≥3.
<details><summary>Hint 1</summary>Differentiate twice as a radial function.</details>
<details><summary>Hint 2</summary>Use H''+(d−1)H'/r.</details>
<details><summary>Full solution</summary>H'=(2−d)r^{1−d} and H''=(2−d)(1−d)r^−d. Adding (d−1)(2−d)r^−d gives zero. This says nothing about the source at zero, whose normalization requires the separate flux calculation.</details>

### PDE-GREEN-E002 — The flux constant
Compute the outward flux of ∇Φ through a radius-r sphere.
<details><summary>Hint 1</summary>The normal derivative is −1/(σd−1r^{d−1}).</details>
<details><summary>Hint 2</summary>Multiply by sphere area.</details>
<details><summary>Full solution</summary>The integral is minus one, since the area is σd−1r^{d−1}. Thus the negative Laplacian convention has positive unit source. The value is independent of radius and is the same in dimension two.</details>

### PDE-GREEN-E003 — Image geometry
Prove |x−ζ|=|x||x*−ζ| for |ζ|=1 and x*=x/|x|².
<details><summary>Hint 1</summary>Square both sides.</details>
<details><summary>Hint 2</summary>Use |ζ|²=1.</details>
<details><summary>Full solution</summary>The left square is |x|²−2x·ζ+1. The right square is |x|²(|x|^−2−2x·ζ/|x|²+1), the same number. Both lengths are nonnegative, so equality of squares gives the identity.</details>

### PDE-GREEN-E004 — Center value
What is the harmonic extension's value at the center for continuous boundary data g?
<details><summary>Hint 1</summary>At x=0 the kernel is constant.</details>
<details><summary>Hint 2</summary>Its integral must have total mass one.</details>
<details><summary>Full solution</summary>It is σd−1^−1∫_∂B g dS, the spherical average. On a radius-R ball replace the denominator by the sphere's actual area σd−1R^{d−1}. This agrees with the harmonic mean-value theorem.</details>

### PDE-GREEN-E005 — Complex data bound
Prove ||u||∞≤||g||∞ from the Poisson formula for complex g.
<details><summary>Hint 1</summary>Use positivity before the triangle inequality.</details>
<details><summary>Hint 2</summary>The kernel has total mass one.</details>
<details><summary>Full solution</summary>For every interior x, |∫Pg|≤∫P|g|≤||g||∞∫P=||g||∞. Continuity carries the estimate to the closure. No ordered comparison of complex numbers was used.</details>

### PDE-GREEN-E006 — A mode
Find the harmonic disk extension of sin(3φ).
<details><summary>Hint 1</summary>Use the imaginary part of z³.</details>
<details><summary>Hint 2</summary>Check its boundary values and harmonicity.</details>
<details><summary>Full solution</summary>The extension is r³sin(3θ)=3x²y−y³. Its Laplacian is 6y−6y=0 and its boundary trace is the prescribed sine. Uniqueness identifies it with the Poisson integral.</details>

### PDE-GREEN-E007 — Scaling factor
At the center of a radius-two ball in R³, what is the Poisson kernel density with respect to surface area?
<details><summary>Hint 1</summary>The sphere area is 4πR².</details>
<details><summary>Hint 2</summary>The constant density is its reciprocal.</details>
<details><summary>Full solution</summary>It is 1/(16π). Multiplication by the area 16π gives mass one. A formula missing the radius factor in the general kernel would fail this check.</details>

### PDE-GREEN-E008 — Boundary concentration
Why does the far part of the Poisson integral vanish as x approaches ζ0?
<details><summary>Hint 1</summary>Keep |ζ−ζ0|≥δ and x within δ/2 of ζ0.</details>
<details><summary>Hint 2</summary>The denominator is bounded below while 1−|x|² tends to zero.</details>
<details><summary>Full solution</summary>Then |x−ζ|≥δ/2. The kernel is at most (1−|x|²)/(σd−1(δ/2)^d), uniformly on the far set. Its integral against bounded data is bounded by this quantity times the finite sphere area and the data bound, hence tends to zero.</details>

### PDE-GREEN-E009 — Interval positivity
Prove positivity of the interval Green kernel for 0<x,y<L.
<details><summary>Hint 1</summary>Both min(x,y) and L−max(x,y) are positive.</details>
<details><summary>Hint 2</summary>The denominator L is positive.</details>
<details><summary>Full solution</summary>All three factors have the required positive sign, so G(x,y)>0. Consequently a nonnegative continuous nonzero source has a strictly positive solution at every interior x, as can also be concluded from the minimum principle.</details>

### PDE-GREEN-E010 — A source integral
Compute ∫_0^L G(x,y)dy for the interval kernel.
<details><summary>Hint 1</summary>Split the integral at y=x.</details>
<details><summary>Hint 2</summary>The result solves −u''=1 with zero endpoints.</details>
<details><summary>Full solution</summary>The two integrals are (L−x)x²/(2L) and x(L−x)²/(2L). Their sum is x(L−x)/2, the unique quadratic solution of the stated boundary problem.</details>

### PDE-GREEN-E011 — Representation versus existence
Why does the volume representation proof not alone establish a C2 solution for every bounded source f?
<details><summary>Hint 1</summary>It began with an already classical u.</details>
<details><summary>Hint 2</summary>Two derivatives of a singular integral require additional control.</details>
<details><summary>Full solution</summary>The excision identity proves a necessary representation for a C2 solution. Defining a candidate by ∫Gf gives a finite integral under boundedness, but does not justify differentiating twice through the singularity or obtaining continuous second derivatives. Additional source regularity and a potential estimate are needed for a classical existence theorem.</details>

### PDE-GREEN-E012 — Boundary source response
For real g≥0 not identically zero on the sphere, prove its Poisson extension is positive inside.
<details><summary>Hint 1</summary>Continuity makes g positive on a nonempty boundary patch.</details>
<details><summary>Hint 2</summary>The kernel is strictly positive for every interior x.</details>
<details><summary>Full solution</summary>Choose a patch where g≥ε>0. It has positive surface area, and for fixed interior x the continuous positive kernel has a positive minimum on a smaller closed patch. Its contribution to the integral is therefore positive, while all other contributions are nonnegative. Thus u(x)>0.</details>

## Sources and scope

This original exposition uses the classical ball construction and the Evans/Strauss syllabus benchmark. Green's identity, singular flux and Poisson boundary convergence are proved with the stated regularity. General-domain Green existence, rough volume-potential regularity and distributional extensions remain separate results, rather than being inferred from the explicit ball formula.

## Summary

Unit singular flux fixes the fundamental solution's sign and constant. Excision yields the classical representation formula; image geometry constructs the ball Green function. Its outward normal derivative gives a positive unit-mass Poisson kernel, which constructs and uniquely determines the continuous harmonic extension of sphere data. Scaling, Fourier modes and interval kernels connect the construction to earlier analysis while keeping existence and representation logically distinct.
`;export{e as default};