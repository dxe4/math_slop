var e=`---
parent_id: book-partial-differential-equations
chapter_id: green-functions-duhamel
title: "Evolution Green Functions and Duhamel’s Principle"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Evolution Green Functions and Duhamel’s Principle

A source acts at every intermediate time. Duhamel's principle evolves each contribution from the time when it is applied and then adds the results. For a first-order evolution an impulse changes the state; for a second-order wave equation it changes the velocity. The distinction explains the different kernels and the endpoint terms that appear when differentiating a source integral.

We work first with smooth rapidly decreasing spatial data on the line. The source h(t) is continuous in the Schwartz seminorms on every bounded time interval. This gives the spatial decay and derivative bounds needed uniformly in the finite time integrals. The [transform-method chapter](fourier-transform-methods.md) supplies the homogeneous heat and wave evolutions; [Schwartz convolution](../fourier-analysis/schwartz-space-convolution.md) supplies their topology. Bounded-domain mode formulas are then interpreted with their stated regularity, rather than by substituting a whole-line kernel into a different boundary problem.

An elliptic Green function inverts a spatial boundary operator. An evolution Green function propagates data forward from a time of application. They are related, but they are not interchangeable. This chapter proves the time-source formulas, the jump interpretation, source stability and an exact relation between a damped heat propagator and the positive elliptic resolvent.

## 1. The finite-dimensional variation formula

For z'(t)=Az(t)+b(t), with a constant matrix A and continuous b, the formula is

\\[
 z(t)=e^{tA}z_0+\\int_0^te^{(t-s)A}b(s)ds.
\\]

The matrix exponential is differentiable, has value I at zero, and obeys d exp(tA)/dt=Aexp(tA). Differentiating the finite integral produces b(t) from its upper endpoint and A times the integral from its interior. Thus the formula solves the ODE and initial data. Uniqueness is the usual linear ODE uniqueness theorem. This is a complete calculation, not an analogy that by itself proves an infinite-dimensional PDE formula.

For a time-dependent matrix A(t), the propagator is Φ(t,s), solving ∂tΦ=A(t)Φ and Φ(s,s)=I. It has composition Φ(t,r)Φ(r,s)=Φ(t,s), by ODE uniqueness. In general it is not a function only of t−s and is not exp(∫A) unless the required matrix commutation holds. The corresponding source formula is Φ(t,0)z0+∫_0^tΦ(t,s)b(s)ds, verified by the same endpoint differentiation. This warns against carrying a constant-coefficient semigroup formula unchanged into a nonautonomous problem.

## 2. Heat forcing with a justified inverse

For u_t−κu_xx=h, u(0)=f∈S, Fourier transformation gives the scalar ODE uhat_t+κξ²uhat=hhat. Its solution is

\\[
 \\widehat u(t,\\xi)=e^{-\\kappa t\\xi^2}\\widehat f(\\xi)
 +\\int_0^te^{-\\kappa(t-s)\\xi^2}\\widehat h(s,\\xi)ds.
\\]

On a finite time interval, continuity of h in S bounds each of its seminorms. Derivatives of the heat multiplier have polynomial frequency bounds uniform for 0≤t−s≤T. Every weighted frequency derivative of the integrand therefore has a common integrable-in-time bound controlled by finitely many source seminorms. The time integral belongs to S and can be inverted and spatially differentiated there.

Differentiating in t gives hhat(t,ξ)−κξ² times the source integral, plus the derivative of the homogeneous part. The endpoint multiplier equals one, supplying exactly the source. Continuity in S justifies that differentiation by the finite integral rule and the same polynomial bounds. Consequently u is C1 in time with Schwartz values and solves the PDE classically. At zero, the source integral vanishes in every seminorm, so the initial state is f.

Inverting and using the proved convolution identity yields

\\[
 u(t)=H_{\\kappa t}*f+
 \\int_0^tH_{\\kappa(t-s)}*h(s)ds,
\\]

where the endpoint s=t is interpreted as h(t), the continuous zero-time limit of heat convolution. Its value at one integration endpoint does not affect the integral; the limit matters when differentiating. There is no singular source defect if that endpoint is treated through the semigroup limit rather than as a nonexistent ordinary kernel H0.

**Worked example 11.1: a fixed interval source mode.** With homogeneous endpoints and source Hsin(nπx/L), zero initial data give u=a(t)sin(nπx/L), where a'+κλna=H and λn=(nπ/L)². Hence a=H(1−e^−κλnt)/(κλn). It begins with derivative H and approaches the stationary amplitude H/(κλn). The denominator includes κ; omitting it changes the equilibrium equation.

## 3. Wave forcing and its different endpoint

Define frequency multipliers Ct(ξ)=cos(ctξ) and St(ξ)=sin(ctξ)/(cξ), with St(0)=t. They satisfy S0=0, ∂tSt=Ct and ∂tCt=−c²ξ²St. For f,g∈S and a continuous Schwartz source,

\\[
 \\widehat u(t)=C_t\\widehat f+S_t\\widehat g
 +\\int_0^tS_{t-s}\\widehat h(s)ds.
\\]

The multiplier bounds on finite time strips justify all the same spatial operations. Its first time derivative has no endpoint source term because S0=0. Its second time derivative gains hhat(t) because C0=1. The remaining terms give −c²ξ²uhat. Thus the formula solves u_tt−c²u_xx=h with both initial displacement f and initial velocity g.

The inverse source term is

\\[
 \\frac1{2c}\\int_0^t
 \\int_{x-c(t-s)}^{x+c(t-s)}h(s,y)dy\\,ds,
\\]

as proved by d'Alembert inversion. Only sources in the backward cone affect a point. Heat's Gaussian propagator is nonzero across all space at every positive elapsed time, so its influence geometry differs despite the similar outer time integral.

**Worked example 11.2: a wave mode under constant load.** On a fixed interval let the source be Hsin(nπx/L), with zero data. Its amplitude solves a''+ω²a=H, ω=cnπ/L. Duhamel gives a=H(1−cosωt)/ω². It does not settle to the static displacement H/ω² because an undamped wave retains oscillation. At zero its value and derivative vanish while its second derivative equals H.

**Worked example 11.3: resonant time forcing.** Replacing H by Hcosωt gives a=Ht sinωt/(2ω). This follows by integrating sin(ω(t−s))cos(ωs)/ω, or by differentiating the result. The growing envelope reflects continual resonant work. It is not a failure of the source formula or of homogeneous energy conservation, whose hypotheses exclude forcing.

## 4. A short pulse and the meaning of an impulse

Let ρ be smooth, supported in (0,1), nonnegative and of integral one. Apply hε(s,x)=ε^−1ρ(s/ε)F(x), F∈S, with zero initial data. For a fixed t>0 and ε<t, the heat source response is

\\[
 u_\\varepsilon(t)=\\int_0^1\\rho(r)H_{\\kappa(t-\\varepsilon r)}*F\\,dr.
\\]

Continuity of the heat evolution in S makes the integrand tend uniformly in r, in each seminorm, to Hκt*F. Hence uε(t) tends to that homogeneous heat evolution. The short unit time-integral source has created an initial state F.

For the wave equation the identical argument gives the limit StF, the homogeneous evolution with zero displacement and initial velocity F. A short source pulse supplies a velocity jump, not a displacement jump. That is exactly why the wave source formula uses S rather than C. These are rigorous regularized-pulse limits in S at every fixed positive observation time. A full space-time delta formulation is available in the distribution chapter, but is not needed to understand the effect here.

If the source is applied at a positive time s0, replace elapsed time by t−s0 and set the causal response to zero before s0. Heat then has a state jump in its impulse limit; wave has continuous displacement and a velocity jump. A time Green function must retain that causal ordering. A symmetric time kernel would describe a different problem requiring data from future as well as past.

## 5. Source stability through energy

For real Schwartz heat evolution, integration by parts on the line gives

\\[
 \\frac12\\frac d{dt}\\|u\\|_2^2
 =-\\kappa\\|u_x\\|_2^2+\\langle h,u\\rangle
 \\le\\|h\\|_2\\|u\\|_2.
\\]

To avoid division at a zero norm, differentiate sqrt(||u||2²+ε), integrate its bound by ||h||2, and let ε decrease to zero. The result is ||u(t)||2≤||f||2+∫_0^t||h(s)||2ds. Applied to a difference, it gives continuous dependence on initial state and time-integrated source size. Dissipation can improve the estimate when a spectral gap is available, but no such gap was assumed on the line.

For wave energy E=(||u_t||2²+c²||u_x||2²)/2, the identity is E'=Re∫h conjugate u_t. Cauchy–Schwarz and the same positive-ε device give

\\[
 \\sqrt{E(t)}\\le\\sqrt{E(0)}+
 \\frac1{\\sqrt2}\\int_0^t\\|h(s)\\|_2ds.
\\]

The source norm and coefficient are different from a displacement norm estimate. Energy sees velocity and strain, so initial displacement constants require separate information in settings where they are allowed. Schwartz decay excludes nonzero spatial constants on the whole line.

These proofs require the integrations by parts to have vanishing tails, supplied here by S. On a bounded domain they require boundary conditions eliminating flux, such as fixed or insulated homogeneous boundaries in the appropriate equation. Nonzero boundary work must be retained in the balance; it is not an interior source that can simply be omitted.

## 6. Elliptic inverse as integrated damped heat

For m>0 define, initially for f∈S,

\\[
 R_mf=\\int_0^\\infty e^{-m^2t}(H_t*f)dt.
\\]

This converges in every Schwartz seminorm. One way to see it is in frequency: differentiating e^−tξ² a fixed number of times introduces a polynomial in t and ξ, so the inverse continuity estimates bound each seminorm of Ht*f by a fixed polynomial in t times finitely many seminorms of f. The exponential e^−m²t makes that bound integrable. Thus the frequency integral can be taken with all needed derivatives, giving

\\[
 \\widehat{R_mf}(\\xi)=\\widehat f(\\xi)
 \\int_0^\\infty e^{-(\\xi^2+m^2)t}dt
 =\\frac{\\widehat f(\\xi)}{\\xi^2+m^2}.
\\]

It is exactly the unique Schwartz solution of −u''+m²u=f. A stationary spatial inverse has been constructed by integrating a damped evolution over all past elapsed times. The damping m²>0 provides convergence and excludes the zero-frequency obstruction.

The corresponding positive kernel is V(x)=∫_0^∞e^−m²tHt(x)dt. For x≠0, differentiation under the integral and ∂tHt=Ht'' give V''=m²V after integration by parts in time; both time boundary terms vanish there. It is even and decays at infinity. Decay follows, for example, by splitting m²t+x²/(4t) into halves: one half is at least m|x|/2, while the remaining Gaussian-in-time factor has finite integral bounded independently of x. At zero, substitution t=s² and the Gaussian integral give V(0)=1/(2m). Solving the decaying even ODE on the two half-lines therefore yields V(x)=e^−m|x|/(2m), the earlier resolvent kernel.

The representation is valid for m>0. Sending m to zero without additional moment conditions generally destroys convergence, consistently with the line Poisson compatibility conditions proved previously.

## 7. Boundaries belong to the propagator

On a fixed interval with zero Dirichlet values, heat propagation is built from sine modes and wave propagation from the corresponding oscillators. Duhamel then applies to each source coefficient. Passing from finite sums to an infinite classical solution requires the coefficient or seminorm bounds appropriate to that construction. A source which is already a finite sine combination provides an exact classical case without any infinite interchange.

Nonhomogeneous boundaries can first be lifted. Let ℓ(t,x)=A(t)+(B(t)−A(t))x/L match prescribed endpoint values. For heat, v=u−ℓ has homogeneous endpoints and source h−ℓt, since ℓxx=0. For waves its source is h−ℓtt. Its initial displacement is f−ℓ(0), and wave initial velocity is g−ℓt(0). Forgetting that velocity correction gives a different initial-boundary problem even if the later forcing is correct.

Corner compatibility must match the desired regularity. For a continuous heat solution, the initial endpoint values must agree with A(0),B(0). Higher derivatives require the PDE and differentiated boundary data to agree at the corners. The lifting does not remove a genuine incompatibility; it exposes it in the homogeneous data. On a general domain a suitable lifting and a domain-specific propagator take the place of this elementary line segment.

An elliptic boundary Green function enforces zero spatial boundary values, while an evolution propagator must enforce both the spatial boundary condition and forward time causality. The whole-line Gaussian cannot satisfy fixed interval endpoints unless it is combined through an appropriate reflection or mode construction. These are mathematical changes to the kernel, not cosmetic changes to its integration limits.

## 8. Equilibrium, zero modes and persistent forcing

If a bounded-domain positive operator A has a classical stationary solution us of Aus=h with time-independent source, then v=u−us obeys v_t+Av=0. A positive first eigenvalue makes its heat modes decay. Duhamel's constant-source formula and subtracting the equilibrium give the same result, providing two consistent viewpoints.

For Neumann heat flow, the constant spatial mode has eigenvalue zero. A source with nonzero spatial mean drives that mean linearly in time: integrating the PDE with zero normal derivative gives d∫u/dt=∫h. There can be no stationary state unless the source mean is zero. Dividing every modal source by its eigenvalue would miss this obstruction at the zero mode. If the mean is zero, the nonconstant modes can approach equilibrium while the initial mean remains as a free constant.

For an undamped wave equation, a stationary particular solution can be subtracted too, but the remaining homogeneous modes generally continue oscillating. Decay to equilibrium requires damping, dispersive escape under suitable norms or another mechanism. Duhamel organizes contributions; it does not supply a decay theorem independent of the homogeneous dynamics.

## 9. What the time integral means in Schwartz space

A continuous Schwartz-valued function on a compact time interval has a well-defined Riemann integral in S. For each fixed seminorm, uniform continuity in time makes sufficiently fine Riemann sums Cauchy: compare sums on a common refinement and bound the difference by interval length times the seminorm modulus of continuity. Since there are countably many seminorms, a sequence of partitions with mesh tending to zero is Cauchy in all of them. Completeness of S supplies its limit, and the same bound makes the limit independent of the partitions and sampling points.

Continuous linear operations with seminorm bounds commute with this integral, because they commute with every finite Riemann sum and preserve its limit. Fourier transformation, spatial differentiation and fixed convolution therefore pass through the finite time integrals used above. This is the precise meaning of the source integral in the strong test-function topology; no unmentioned Banach-valued integration theorem is required.

The same construction applies on any positive finite subinterval of the infinite resolvent integral. Its tail then converges in S by the exponential-versus-polynomial seminorm estimates. Merely knowing that each fixed-time integrand belongs to S would not prove either finite-interval continuity or infinite-tail convergence. Both types of control have been supplied separately.

## 10. The wave equation as a two-component evolution

The homogeneous wave propagator on displacement and velocity has frequency matrix

\\[
 W(t,\\xi)=\\begin{pmatrix}
 C_t&S_t\\\\
 -c^2\\xi^2S_t&C_t
 \\end{pmatrix}.
\\]

Trigonometric addition formulas give W(t+s)=W(t)W(s), W(0)=I and W(−t)=W(t)^−1. At ξ=0 the matrix is [[1,t],[0,1]], so the zero-frequency velocity still contributes linearly to displacement. This is the continuous limit of the oscillator matrix, not an exceptional mode to be discarded.

Polynomial frequency bounds make W(t) continuous on S×S on bounded time strips. The forced state is

\\[
 \\binom{\\widehat u(t)}{\\widehat u_t(t)}
 =W(t)\\binom{\\widehat f}{\\widehat g}
 +\\int_0^tW(t-s)\\binom0{\\widehat h(s)}ds.
\\]

The upper source entry is St−s hhat and the lower is Ct−s hhat. Thus the first-order vector variation formula reproduces precisely the second-order scalar endpoint calculation. The matrix is not uniformly bounded on a product of two identical unweighted square-norm spaces, because its lower-left entry includes a frequency factor. The natural energy weights displacement by its spatial derivative. Specifying those spaces matters when extending this matrix argument beyond S.

## 11. A source switched on at a finite time

Let a spatial Schwartz source F be absent before s0 and constant in time afterward, with zero earlier state. This source is piecewise continuous in time rather than continuous at s0. Apply the source formula separately on the two time intervals and match the traces. For heat, at elapsed time δ=t−s0>0 the response is ∫_0^δHκr*F dr. Schwartz continuity gives u=δF+o(δ) in S. The state is continuous across switching, while its time derivative jumps from zero to F.

For waves the response is ∫_0^δSrF dr. Since SrF=rF+o(r) in S, it has u=δ²F/2+o(δ²) and u_t=δF+o(δ). Both displacement and velocity are continuous at switching; acceleration changes by F. The equation is classical on either open time side, with the expected one-sided derivative traces. It is not globally C1 or C2 respectively across an abrupt source switch, so the original everywhere-continuous forcing theorem should not be quoted without this piecewise qualification.

A short source pulse and a permanently switched source therefore have different effects. The pulse keeps a fixed time integral while its height grows; the step has fixed height and a vanishing integral over a short onset interval. Their different limiting trace behavior follows directly from the same kernels and endpoint rules.

## 12. A quantitative time-sum approximation

If the source is C1 in time with Schwartz values, the integrand η(s)=T(t−s)h(s) for a fixed finite observation time is differentiable in S for the heat propagator. Its derivative is −κ∂xxT(t−s)h(s)+T(t−s)h'(s). The established seminorm bounds give a finite bound M for each chosen seminorm of that derivative. Approximating its integral by left-endpoint sums on a uniform partition of mesh Δ therefore has error at most MtΔ/2 in that seminorm: on each subinterval integrate the bound M times the distance from its left endpoint and sum the resulting triangles.

This is a proved approximation estimate for the authored integral, not a claim about observed computation. For less regular time dependence the Riemann integral still exists under continuity, but this first-order rate needs the derivative bound. A chosen discretization inherits only the regularity and estimates actually available for its integrand.

## Exercises

### PDE-DUH-E001 — ODE endpoint
Differentiate ∫_0^te^{−λ(t−s)}b(s)ds for continuous b.
<details><summary>Hint 1</summary>The upper endpoint multiplier is one.</details>
<details><summary>Hint 2</summary>The interior derivative multiplies by minus λ.</details>
<details><summary>Full solution</summary>The derivative is b(t)−λ∫_0^te^−λ(t−s)b(s)ds. This is the exact source term and homogeneous decay in the first-order forced equation.</details>

### PDE-DUH-E002 — Wave endpoint
Why is there no source endpoint contribution after just one time derivative of the wave Duhamel integral?
<details><summary>Hint 1</summary>Its kernel is S(t−s), not C(t−s).</details>
<details><summary>Hint 2</summary>S(0)=0.</details>
<details><summary>Full solution</summary>The first endpoint term is S0h(t)=0. Differentiating again gives C0h(t)=h(t), exactly appropriate for a source in the second time derivative equation.</details>

### PDE-DUH-E003 — Heat load
Solve a'+5a=10,a(0)=0.
<details><summary>Hint 1</summary>Integrate the exponential source response.</details>
<details><summary>Hint 2</summary>The equilibrium amplitude is two.</details>
<details><summary>Full solution</summary>a=2(1−e^−5t). Its derivative is 10e^−5t and adding 5a leaves ten. It begins at zero and tends to the steady value two.</details>

### PDE-DUH-E004 — Wave load
Solve a''+4a=8 with zero displacement and velocity.
<details><summary>Hint 1</summary>The oscillator frequency is two.</details>
<details><summary>Hint 2</summary>Subtract a homogeneous cosine from the constant particular solution.</details>
<details><summary>Full solution</summary>a=2(1−cos2t). Its initial value and derivative are zero and a''+4a=8. It oscillates about the static response two and does not converge to it.</details>

### PDE-DUH-E005 — Source pulse
A unit short-time pulse has spatial profile F. What homogeneous data does it create for heat and for waves?
<details><summary>Hint 1</summary>Use the zero-time value of the first-order propagator.</details>
<details><summary>Hint 2</summary>The wave source kernel has zero displacement and identity velocity at zero.</details>
<details><summary>Full solution</summary>In the regularized-pulse limit, heat receives state F. The wave receives zero displacement and velocity F. Their later responses are respectively Hκt*F and StF.</details>

### PDE-DUH-E006 — Heat stability
If ||f||2≤2 and ||h(t)||2≤3 on 0≤t≤4, bound ||u(4)||2.
<details><summary>Hint 1</summary>Use the integrated source norm.</details>
<details><summary>Hint 2</summary>The source integral is at most twelve.</details>
<details><summary>Full solution</summary>The estimate gives ||u(4)||2≤2+12=14. This is a robust bound that does not use any possible extra dissipation or cancellation.</details>

### PDE-DUH-E007 — Wave energy
For zero initial energy and ||h(t)||2≤2, give the source energy bound at time t.
<details><summary>Hint 1</summary>The square-root estimate has factor 1/sqrt2.</details>
<details><summary>Hint 2</summary>Square after integrating.</details>
<details><summary>Full solution</summary>sqrt E(t)≤sqrt2 t, so E(t)≤2t². It assumes no boundary energy influx and the regularity needed for the energy identity.</details>

### PDE-DUH-E008 — Resolvent multiplier
Evaluate ∫_0^∞e^−(ξ²+m²)t dt for m>0.
<details><summary>Hint 1</summary>The exponent coefficient is strictly positive.</details>
<details><summary>Hint 2</summary>Use the elementary exponential primitive.</details>
<details><summary>Full solution</summary>The value is 1/(ξ²+m²). This identifies integrated damped heat with the positive elliptic resolvent in the same Fourier convention.</details>

### PDE-DUH-E009 — Zero mode
For insulated heat flow on [0,L] with constant source H, find the mean's derivative.
<details><summary>Hint 1</summary>Integrate the PDE and cancel endpoint derivative fluxes.</details>
<details><summary>Hint 2</summary>Divide total amount by L.</details>
<details><summary>Full solution</summary>d∫u/dt=HL, so the mean derivative is H. Unless H=0 there is no stationary insulated solution. The constant mode has no diffusive damping to balance the source.</details>

### PDE-DUH-E010 — Wave lifting
If endpoints are A(t)=t² and B(t)=0, give the wave lifting source correction and initial velocity correction.
<details><summary>Hint 1</summary>ℓ=t²(1−x/L).</details>
<details><summary>Hint 2</summary>Use minus ℓtt and minus ℓt(0).</details>
<details><summary>Full solution</summary>The new source is h−2(1−x/L). The initial velocity correction is zero because ℓt(0)=0, and the displacement correction is also zero. At later times the nonzero lifting acceleration is essential.</details>

### PDE-DUH-E011 — Time-dependent matrices
Why is exp(∫_s^tA(r)dr) not automatically a propagator for matrix-valued A(t)?
<details><summary>Hint 1</summary>Matrix multiplication need not commute at distinct times.</details>
<details><summary>Hint 2</summary>Differentiating a matrix exponential does not give the scalar chain rule without commutation.</details>
<details><summary>Full solution</summary>Noncommuting matrices produce ordered products in the evolution that are not captured by a single exponential of their integral. The correct propagator solves Φt=A(t)Φ with identity initial value. Commutation assumptions can recover the simpler expression, but are additional hypotheses.</details>

### PDE-DUH-E012 — Causality
Why does integrating the source only over s≤t matter?
<details><summary>Hint 1</summary>A forward initial-value problem is determined by past data.</details>
<details><summary>Hint 2</summary>The elapsed propagator time is t−s.</details>
<details><summary>Full solution</summary>The causal response evolves each applied source forward from its application time to the observation time. Including future sources would impose a different, noncausal relation rather than solve the stated forward initial-value problem. The upper endpoint also determines the correct source term on differentiation.</details>

## Sources and scope

This original classical development uses variation of constants, the proved Fourier/Schwartz route and the Evans/Strauss syllabus benchmark. Source-integral differentiability, boundary lifting and causal pulse limits are stated in their actual classes. General distributional Green functions, rough forcing and nonautonomous unbounded-operator existence require further theory.

## Summary

Duhamel adds evolved source contributions with the kernel appropriate to the time order of the equation. Heat creates a state response; waves create a velocity response. Endpoint differentiation, source energy bounds and regularized pulses make those distinctions precise. Integrated damped heat recovers an elliptic Green inverse, while boundaries and zero modes determine compatibility and equilibrium. The method organizes forcing only after the homogeneous dynamics and its function class have been established.
`;export{e as default};