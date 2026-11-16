var e=`---
parent_id: book-partial-differential-equations
chapter_id: wave-equation
title: "The Wave Equation: Propagation, Energy and Forcing"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# The Wave Equation: Propagation, Energy and Forcing

A wave equation evolves both position and velocity. Information travels at a finite speed, energy moves through space, and a boundary reflects or absorbs the arriving signal according to its condition. These features differ from heat diffusion: the wave equation does not generally smooth nonsmooth initial profiles, and its natural uniqueness argument measures energy rather than an interior maximum.

Our principal model is u_tt−c²u_xx=h on the real line, with constant c>0. Initial displacement is f(x)=u(0,x), and initial velocity is g(x)=u_t(0,x). For the homogeneous classical formula assume f∈C2(R), g∈C1(R). These assumptions give a C2 solution in time and space. For the displayed forced construction, taking h∈C2 on the relevant time-space region is a convenient sufficient hypothesis. We state any compact-support or boundary regularity assumptions needed by energy arguments separately.

The preparation is ordinary integration, the chain rule and [characteristics](first-order-characteristics.md). Fourier series later construct bounded-interval modes systematically. The present chapter proves the line solution and its local uniqueness directly, so existence is not being inferred from a formal infinite expansion.

## 1. Factorization and traveling profiles

The operator factors as (∂t−c∂x)(∂t+c∂x). Introduce characteristic coordinates ξ=x−ct, η=x+ct. If u(t,x)=U(ξ,η), calculation gives u_tt−c²u_xx=−4c²U_ξη. Thus every C2 homogeneous solution on a full characteristic rectangle has the form U(ξ,η)=F(ξ)+G(η): U_ξη=0 makes U_ξ independent of η, and integration leaves a function of each coordinate.

A right-traveling profile F(x−ct) keeps its shape and moves toward increasing x; a left-traveling G(x+ct) moves toward decreasing x. The labels describe motion, not the signs of the values. A negative pulse can move right. The factorization applies to constant c; variable coefficients generate additional terms and do not obey the same unmodified formula.

At t=0, F+G=f and −cF'+cG'=g. Solving for their derivatives and integrating yields d'Alembert's formula

\\[
 u(t,x)=\\frac{f(x-ct)+f(x+ct)}2
 +\\frac1{2c}\\int_{x-ct}^{x+ct}g(y)\\,dy.
\\]

Additive constants in F,G cancel in u. Differentiating verifies the equation and initial data. The formula has two arbitrary initial functions, as expected for second order in time. Specifying only f leaves the velocity undetermined and therefore does not specify a unique evolution.

## 2. Existence, uniqueness and dependence region

The displayed expression is C2 under the stated f,g assumptions. The f terms can be differentiated twice directly. For the integral term, first differentiation uses endpoint values of g; second differentiation uses g', which is continuous. It solves the equation and data pointwise.

For uniqueness, apply the characteristic representation to the difference of two solutions on any region containing the backward characteristic triangle of a point (t,x). Its value is determined by its initial displacement and velocity on [x−ct,x+ct]. Zero data there give zero value. One may also obtain this result from the shrinking-cone energy proof below, which generalizes beyond a globally rectangular characteristic-coordinate domain.

Thus the value at (t,x) depends only on the initial interval [x−ct,x+ct]. If f,g vanish outside [a,b], the solution vanishes outside [a−ct,b+ct]. This is finite propagation. In the interval term a signal can persist inside the cone even after the initial endpoint displacement pulses have passed; the whole initial velocity interval contributes. One-dimensional propagation should not be summarized as a universal assertion that all wave influence lies only on the cone surface.

For bounded f,g, the formula also gives

\\[
 |u(t,x)|\\le\\|f\\|_\\infty+t\\|g\\|_\\infty.
\\]

Applied to differences it supplies continuous dependence in the displacement supremum norm on bounded time intervals. Derivative bounds require corresponding derivative data. A bound for amplitudes alone does not control energy, which depends on g and f'.

**Worked example 7.1: a split pulse.** If g=0 and f is a C2 compactly supported bump, the evolution is half the bump moving each way. After the supports separate, each has half the original amplitude. That does not mean energy has been lost: each moving pulse has both kinetic and strain energy, and the total energy calculation below accounts for both contributions.

**Worked example 7.2: a velocity pulse.** If f=0 and g is supported in [−1,1], then u=(2c)^−1∫_{x−ct}^{x+ct}g. At a fixed x and sufficiently large t this becomes the constant (2c)^−1∫g. If that integral is nonzero, a displacement plateau remains between two outgoing fronts. The solution is still zero outside its expanding influence cone. There is no conflict between finite propagation and a nonvanishing late displacement at a fixed point.

## 3. Forced evolution and Duhamel's principle

For a source h, define

\\[
 v(t,x)=\\frac1{2c}\\int_0^t
 \\int_{x-c(t-s)}^{x+c(t-s)}h(s,y)\\,dy\\,ds.
\\]

For fixed s, the inner expression is the homogeneous solution at elapsed time t−s with zero displacement and initial velocity h(s,·). Its value at elapsed time zero is zero and its elapsed-time derivative there is h(s,x). Differentiating the outer integral twice, the first endpoint contribution is zero and the second is h(t,x). The remaining differentiated integrand satisfies the homogeneous wave equation. Therefore v_tt−c²v_xx=h, with v(0,x)=v_t(0,x)=0.

All differentiations are justified on finite characteristic triangles by the C2 source assumption. Adding v to the homogeneous formula gives a classical solution. The double integral lies over the backward cone, so sources outside that cone have no influence at the observation point. If |h|≤H there, its magnitude is at most Ht²/2, because the inner interval length is 2c(t−s). This agrees with the elementary spatially constant acceleration model.

**Worked example 7.3: uniform forcing.** With zero data and h=H constant, the solution is Ht²/2. Substitution gives u_tt=H and u_xx=0. For a source h(t,x)=sin(ωt) independent of x, the same construction reduces to the ordinary equation u_tt=sin(ωt) with zero data, giving u=t/ω−sin(ωt)/ω² when ω≠0. The linear term is required by the zero initial velocity condition.

## 4. Local and global energy

Define energy density e=(u_t²+c²u_x²)/2 and flux q=−c²u_tu_x for a real solution. Product differentiation gives

\\[
 e_t+q_x=u_t(u_{tt}-c^2u_{xx})=u_t h.
\\]

For a complex solution use absolute squares and the real part of h times the conjugate u_t. The same estimates follow. On a fixed interval the energy derivative equals incoming flux minus outgoing flux plus source work.

For a homogeneous solution with smooth compactly supported initial data on the line, finite propagation keeps the support compact on bounded time intervals. Integrating gives E(t)=∫e dx=E(0). There are no boundary terms at infinity. For more general finite-energy solutions, passing from compact integrals to the full line requires a cutoff or approximation argument; it is not justified solely by writing an infinite integration range.

On [0,L] with homogeneous Dirichlet conditions u(t,0)=u(t,L)=0 and enough smoothness up to the boundary, differentiation in time gives u_t=0 at the endpoints. Thus q=0 there and energy is conserved when h=0. Homogeneous Neumann data u_x=0 also eliminate flux. An absorbing boundary condition instead removes energy: at the right endpoint u_t+c u_x=0 gives q(L)=c u_t(L)²≥0, representing outward energy flow. At the left endpoint the corresponding outgoing condition is u_t−c u_x=0.

**Worked example 7.4: a standing mode.** Let k=nπ/L and u=Acos(ckt)sin(kx) with n≥1. Its energy is

\\[
 E(t)=\\frac{A^2c^2k^2L}{4}
 \\bigl(\\sin^2(ckt)+\\cos^2(ckt)\\bigr)
 =\\frac{A^2c^2k^2L}{4}.
\\]

Kinetic and strain parts exchange periodically. At maximum displacement velocity is zero but energy is not; at zero displacement all energy is kinetic. This rules out diagnosing energy by amplitude at one instant alone.

## 5. A shrinking-cone proof of finite propagation

Let u solve the homogeneous equation on a triangle 0≤t≤T with a+ct≤x≤b−ct and T<(b−a)/(2c). Define E(t) as the integral of e over this shrinking interval. The moving-endpoint differentiation rule and the local energy identity give

\\[
 E'(t)=-\\frac c2(u_t+c u_x)^2(t,a+ct)
       -\\frac c2(u_t-c u_x)^2(t,b-ct)\\le0.
\\]

If f'=0 and g=0 on [a,b], E(0)=0; nonnegativity forces u_t=u_x=0 throughout the triangle. Hence u is the same constant as f there. In particular zero initial displacement and velocity give zero solution in the cone. Applying this to a difference proves local uniqueness with exactly the relevant initial interval, without imposing artificial conditions on distant spatial boundaries.

The sign computation is instructive. At the moving left boundary the contribution is q−ce=−c(u_t+c u_x)²/2; at the right boundary it is −q−ce=−c(u_t−c u_x)²/2. Reversing one flux sign would destroy the conclusion. The cone slopes are the characteristic speeds; arbitrary shrinking speeds do not produce the same identity.

A source vanishing inside the cone leaves this argument unchanged. In several dimensions the same reasoning uses balls shrinking at speed c, energy density (u_t²+c²|∇u|²)/2 and flux −c²u_t∇u. Cauchy–Schwarz makes the moving-sphere boundary contribution nonpositive. Thus smooth solutions have finite propagation in all dimensions, even though their explicit formulas and the distribution of influence inside the cone differ.

## 6. Fixed ends by reflection

Suppose f,g are smooth and supported strictly inside (0,L). Extend each oddly across zero and then periodically with period 2L. Because the data vanish near the endpoints, these extensions are smooth at every reflection seam. Apply d'Alembert's formula to the extended data. Odd symmetry and 2L-periodicity make u(t,0)=u(t,L)=0. Restriction to [0,L] gives a smooth fixed-end solution, unique by the interval energy identity.

For more general data, seam compatibility must be checked. A C2 odd extension of f requires f(0)=f(L)=0 and f''(0)=f''(L)=0. A C1 odd extension of g requires g(0)=g(L)=0; its first derivative reflects evenly and needs no zero condition there. These are sufficient compatibility conditions for the C2 d'Alembert construction. A weaker solution class can accept less compatible data, but should not be described as a smooth solution on the full initial-boundary closure.

An odd reflection changes the sign of a reflected pulse at a fixed end; an even reflection fits a free, Neumann end and preserves its sign. The reflection construction explains these rules rather than treating them as conventions detached from boundary conditions. Fourier sine and cosine expansions will encode the same parity choices in the next chapter.

## 7. Resonance and the lack of heat smoothing

For forcing h(t,x)=Hsin(kx)cos(ckt) on a fixed interval, seek u=a(t)sin(kx). Then a''+(ck)²a=Hcos(ckt). With zero data the solution is a=Ht sin(ckt)/(2ck). Its linearly growing envelope is resonance. Direct differentiation verifies the formula. Energy is not conserved because the source does work; the work term in the energy identity accounts for its growth.

For homogeneous evolution, high spatial frequencies keep oscillating rather than acquiring the exponential damping of the heat equation. A traveling profile F(x−ct) has exactly the spatial regularity of F. If F has a corner, the corner travels; the formula is not a C2 classical solution across that moving line. It can be studied in a weaker class, but the wave operator does not instantly turn it into a smooth profile. By contrast the Gaussian heat convolution smooths bounded initial data at positive times under the earlier chapter's construction.

Energy estimates also control forced stability. On a bounded interval with no boundary flux, E'=∫u_t h≤sqrt(2E)||h||2. To avoid division by zero, differentiate sqrt(E+ε), obtain a bound by ||h||2/sqrt2, integrate, and let ε decrease to zero. Thus

\\[
 \\sqrt{E(t)}\\le\\sqrt{E(0)}+
 \\frac1{\\sqrt2}\\int_0^t\\|h(s,\\cdot)\\|_2\\,ds.
\\]

The integral norms here are classical finite-interval square norms for smooth functions. Applying the estimate to differences gives energy continuous dependence. A displacement constant has zero strain energy, so for Neumann or whole-line problems an energy seminorm alone does not determine the displacement mean. Initial displacement information or a boundary condition resolves that remaining constant.

## 8. First-order wave variables and physical units

Define R=u_t+c u_x and L=u_t−c u_x. The wave equation is equivalent, for a C2 displacement, to the pair

\\[
 R_t-cR_x=h,\\qquad L_t+cL_x=h.
\\]

Thus R moves left and L moves right in the homogeneous problem. Their initial values are g+cf' and g−cf'. The names of these variables should not be confused with their motion: the sign in a first-order transport equation determines the direction. In terms of them, the energy and flux are

\\[
 e=(R^2+L^2)/4,\\qquad q=c(L^2-R^2)/4.
\\]

A pure right-traveling displacement has R=0 and outward positive flux. These identities give a second independent way to check the signs in the cone-energy calculation.

Conversely, C1 solutions R,L of this pair satisfy compatibility for the proposed derivatives u_t=(R+L)/2 and u_x=(R−L)/(2c): differentiating shows ∂x u_t=∂t u_x. On a simply connected rectangle, integrating these derivatives along a horizontal and a vertical segment reconstructs a displacement u up to an additive constant. The initial derivative relation and one initial value then recover f. This explains why first-order characteristic information determines derivatives and still needs a displacement reference value.

For a uniform string with mass density ρ>0 and tension τ>0, the physical equation is ρu_tt−τu_xx=F. Dividing by ρ gives c²=τ/ρ and h=F/ρ. The physical energy density is ρu_t²/2+τu_x²/2, and physical flux is −τu_tu_x. The normalized mathematical energy used earlier is physical energy divided by ρ. Keeping that factor matters when comparing strings with different densities or interpreting the work term F u_t. The propagation speed has units of length divided by time, whereas a mode frequency ck has units of inverse time.

For example, doubling the tension at fixed density multiplies c and every fixed-end mode frequency by sqrt2. Doubling the length at fixed material parameters halves the fundamental angular frequency cπ/L. These statements concern a linear model with constant coefficients; they do not assert amplitude-dependent frequency shifts for a nonlinear string.

In several dimensions, a unit vector e gives a plane wave u(t,x)=A(e·x−ct): the Laplacian is A'' because |e|=1, and the time second derivative is c²A''. Such a profile generally has infinite total energy on the whole space because it is constant in transverse directions. It remains an exact local classical solution when A is C2. This distinction between a local exact model and a finite-total-energy state prevents using a plane-wave calculation as an unjustified full-space energy integral.

## 9. A radial three-dimensional construction

A smooth radial solution in three dimensions can be reduced to the one-dimensional formula with an extra geometric factor. Write u(t,x)=U(t,r), r=|x|. For r>0 its Laplacian is Urr+2Ur/r. Set v(t,r)=rU(t,r). Direct differentiation gives vtt−c²vrr=r(Utt−c²(Urr+2Ur/r)). Thus v solves the ordinary one-dimensional wave equation when u is radial and homogeneous.

Take smooth even radial profiles F,G on the whole real r-axis, with compact support, giving the initial displacement and velocity. Then A(r)=rF(r) and B(r)=rG(r) are odd and smooth. Solve the line wave problem for v using these data. Its oddness persists, so v(t,0)=0. The quotient v/r extends smoothly through r=0 as an even function, and its even Taylor expansion supplies the smooth radial spatial extension. This construction gives an explicit classical radial three-dimensional solution; general nonsymmetric data require another representation.

For r>0 the formula is

\\[
 U(t,r)=\\frac{(r-ct)F(r-ct)+(r+ct)F(r+ct)}{2r}
 +\\frac1{2cr}\\int_{r-ct}^{r+ct}sG(s)\\,ds.
\\]

Even extension of F and G is understood when an argument is negative. Taking the derivative of v at zero gives the center value

\\[
 U(t,0)=F(ct)+ctF'(ct)+tG(ct).
\\]

The apparent division by r in the first expression is removable under the symmetry and smoothness assumptions; it is not a physical singularity.

If F,G vanish for |r|>R, the center is zero once ct>R. More generally the entire solution is zero when ct>r+R: both endpoint terms vanish, and the odd velocity integrand is integrated over its full symmetric support, giving zero. It is also zero for r>ct+R by ordinary finite propagation. Thus after the pulse has left the origin its support is confined to the outward shell ct−R≤r≤ct+R. The one-dimensional velocity example earlier can retain a plateau, so that conclusion must not be generalized indiscriminately across dimensions. The shell property here is proved for smooth compactly supported radial three-dimensional data by the explicit formula.

## 10. Frequency and propagation are different measurements

Substituting a complex mode exp(i(kx−ωt)) into the line wave equation gives ω²=c²k². On the right-moving branch ω=ck, every Fourier component moves with the same speed c. A superposition of two nearby right-moving frequencies can show a broad envelope, but that envelope also translates with speed c. The identity cos(kz)+cos((k+δ)z)=2cos(δz/2)cos((k+δ/2)z), with z=x−ct, proves the assertion directly. Slow oscillation of the envelope at a fixed observation point is not evidence that the two underlying characteristics have different speeds.

A standing mode on an interval instead combines right- and left-traveling waves constrained by reflections. Its angular frequency c nπ/L describes temporal oscillation, while the spatial wavelength is 2L/n. The quotient of angular frequency by spatial wave number is still c. These distinctions prevent confusing a high temporal frequency with a larger signal speed. Finite propagation follows from the PDE cone geometry, independently of the particular modal decomposition selected for a solution.

## Exercises

### PDE-WAVE-E001 — Direction
Which direction does F(x+ct) travel when c>0?
<details><summary>Hint 1</summary>Track a fixed argument x+ct=α.</details>
<details><summary>Hint 2</summary>Solve for x as a function of time.</details>
<details><summary>Full solution</summary>The fixed feature has position x=α−ct, decreasing with time. Thus it travels left at speed c. The sign of F's amplitude does not change this direction.</details>

### PDE-WAVE-E002 — Initial velocity
Verify that the g-integral in d'Alembert's formula has initial time derivative g(x).
<details><summary>Hint 1</summary>Differentiate its two moving endpoints.</details>
<details><summary>Hint 2</summary>Both contributions have a positive sign.</details>
<details><summary>Full solution</summary>The derivative is [g(x+ct)+g(x−ct)]/2. At t=0 this equals g(x). The integral itself is zero initially, so it contributes velocity without initial displacement.</details>

### PDE-WAVE-E003 — Support cone
If f,g vanish outside [2,5] and c=3, where must the solution vanish at t=2?
<details><summary>Hint 1</summary>Expand the support interval by ct in both directions.</details>
<details><summary>Hint 2</summary>ct equals six.</details>
<details><summary>Full solution</summary>The solution vanishes outside [−4,11]. This is a guaranteed support enclosure, not necessarily the exact nonzero support, since cancellations or zero total velocity can leave smaller regions.</details>

### PDE-WAVE-E004 — Pure right motion
What relation between g and f gives u(t,x)=f(x−ct)?
<details><summary>Hint 1</summary>Differentiate the traveling profile at time zero.</details>
<details><summary>Hint 2</summary>Its time derivative is minus c times its spatial derivative.</details>
<details><summary>Full solution</summary>One needs g=−cf'. Substituting into d'Alembert's integral gives −[f(x+ct)−f(x−ct)]/2, which cancels the left-moving part and leaves f(x−ct).</details>

### PDE-WAVE-E005 — Forced bound
With zero data and |h|≤4, bound |u(3,x)| by the cone formula.
<details><summary>Hint 1</summary>Use Ht²/2.</details>
<details><summary>Hint 2</summary>The wave speed cancels against the cone width.</details>
<details><summary>Full solution</summary>The bound is 4·9/2=18. It is attained by the spatially and temporally constant source h=4, whose zero-data solution is 2t².</details>

### PDE-WAVE-E006 — Boundary flux
At the right boundary impose u_t+c u_x=0. Show the energy leaves the interval there.
<details><summary>Hint 1</summary>Substitute u_x=−u_t/c into q=−c²u_tu_x.</details>
<details><summary>Hint 2</summary>The interval energy derivative includes minus q at the right endpoint.</details>
<details><summary>Full solution</summary>q=c u_t²≥0, so the right endpoint contributes −c u_t² to E'. It removes energy. The opposite sign condition at that same endpoint would represent incoming rather than outgoing behavior.</details>

### PDE-WAVE-E007 — Zero-energy freedom
Why can zero strain and kinetic energy fail to determine a displacement uniquely under Neumann conditions?
<details><summary>Hint 1</summary>Test a spatial and temporal constant.</details>
<details><summary>Hint 2</summary>The energy sees u_t and u_x, not u itself.</details>
<details><summary>Full solution</summary>Every constant u=K has u_t=u_x=0 and therefore zero energy, and satisfies homogeneous Neumann conditions. Its initial displacement mean distinguishes the constants. Under fixed zero Dirichlet values only K=0 is allowed.</details>

### PDE-WAVE-E008 — Standing energy
For A=2,c=1,L=π,n=1, calculate the standing mode's total energy.
<details><summary>Hint 1</summary>k=nπ/L equals one.</details>
<details><summary>Hint 2</summary>Use A²c²k²L/4.</details>
<details><summary>Full solution</summary>The total energy is π. It is independent of time; the kinetic and strain contributions are πsin²t and πcos²t respectively.</details>

### PDE-WAVE-E009 — Reflection compatibility
Why is f(x)=x(L−x) not covered by the smooth odd-extension construction for C2 data?
<details><summary>Hint 1</summary>Its values vanish at the two endpoints.</details>
<details><summary>Hint 2</summary>Check the second derivative at those endpoints.</details>
<details><summary>Full solution</summary>Although f(0)=f(L)=0, its second derivative is −2 at both ends. The odd extension's second derivative changes sign across a seam, so it is not continuous there. A weaker or less regular construction may still solve the problem, but the stated smooth seam theorem does not apply.</details>

### PDE-WAVE-E010 — Resonance check
Verify that a(t)=Ht sin(ωt)/(2ω) solves a''+ω²a=Hcos(ωt) with zero data.
<details><summary>Hint 1</summary>Differentiate the product t sin(ωt) twice.</details>
<details><summary>Hint 2</summary>The terms proportional to t cancel.</details>
<details><summary>Full solution</summary>One has a'=Hsin(ωt)/(2ω)+Htcos(ωt)/2 and a''=Hcos(ωt)−Hωt sin(ωt)/2. Adding ω²a cancels the final term and leaves Hcos(ωt). Both a(0) and a'(0) are zero.</details>

### PDE-WAVE-E011 — No instantaneous smoothing
Explain why a traveling corner disproves a general smoothing claim for wave evolution.
<details><summary>Hint 1</summary>Consider F(x−ct) with F continuous but not differentiable at zero.</details>
<details><summary>Hint 2</summary>The singular location moves to x=ct.</details>
<details><summary>Full solution</summary>The profile remains nondifferentiable at x=ct for every positive time. In an appropriate weak interpretation it is still a traveling wave, but it is not a classical C2 solution there. The homogeneous wave mechanism transports existing spatial irregularity instead of automatically smoothing it.</details>

### PDE-WAVE-E012 — Forced energy stability
If E(0)=0 and ||h(t,·)||2≤M on a flux-free interval, bound E(t).
<details><summary>Hint 1</summary>Integrate the square-root energy estimate.</details>
<details><summary>Hint 2</summary>Square the resulting nonnegative inequality.</details>
<details><summary>Full solution</summary>The estimate gives sqrt E(t)≤Mt/sqrt2, hence E(t)≤M²t²/2. Its assumptions include enough smoothness for the energy identity and boundary conditions eliminating endpoint flux.</details>

## Sources and scope

This original classical development follows the standard Evans/Strauss syllabus. The line formula, cone dependence, forced construction and energy identities are proved explicitly. General finite-energy existence, distributional traveling profiles and multidimensional representation formulas require their own regularity arguments; they are not inferred from the formal factorization.

## Summary

The wave equation needs displacement and velocity. Characteristics give d'Alembert's solution, forcing fills a backward cone, and local energy proves finite propagation and uniqueness. Boundary flux explains fixed, free and absorbing ends. Reflections construct smooth interval solutions under explicit compatibility, while standing modes show energy exchange and resonance. Unlike heat diffusion, wave propagation preserves rather than automatically smooths profile irregularity.
`;export{e as default};