var e=`---
parent_id: book-partial-differential-equations
chapter_id: heat-equation
title: "The Heat Equation and the Parabolic Maximum Principle"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# The Heat Equation and the Parabolic Maximum Principle

Heat flow combines local balance with smoothing. Its differential equation describes how a temperature profile changes, but a forward problem also needs an initial state and suitable spatial boundary data. The maximum principle makes one central fact rigorous: with positive diffusivity and no positive interior source, a classical solution cannot create a new maximum above the prescribed past and lateral boundary values.

Read [Classification and Model Problems](classification-model-problems.md) for the distinction between heat evolution, wave propagation and elliptic boundary data. Single-variable differentiation, multivariable second derivatives and integration are sufficient for the maximum proof. The Gaussian construction on the whole space additionally uses change of variables and the Gaussian integral. Fourier series later give another construction on bounded intervals; this chapter does not infer existence for arbitrary domains from a uniqueness estimate.

## Cylinders and the exact classical class

Fix a bounded open set \\(\\Omega\\subseteq\\mathbb R^d\\), a final time \\(T>0\\), and a constant \\(\\kappa>0\\). Write
\\[
 Q=\\Omega\\times(0,T),\\qquad
 \\overline Q=\\overline\\Omega\\times[0,T].
\\]
The parabolic boundary is
\\[
 \\partial_pQ=(\\overline\\Omega\\times\\{0\\})\\cup(\\partial\\Omega\\times[0,T]).
\\]
It includes the initial slice and the lateral spatial boundary, including their corners. It does **not** include the interior of the final-time slice. Future temperatures are conclusions of the forward problem, not an additional freely prescribed Dirichlet boundary.

**Definition 6.1 (Classical subsolution).** A function is in the class used here when it is continuous on \\(\\overline Q\\), twice continuously differentiable in space and once in time on \\(Q\\), and satisfies
\\[
 Lu:=u_t-\\kappa\\Delta u\\le0\\quad\\text{on }Q.
\\]
No boundary smoothness of \\(\\Omega\\) is needed for the maximum argument. Nor do we assume derivatives extend to time zero or to the spatial boundary. Extra regularity will be named separately when an integration-by-parts calculation needs it.

Since \\(\\Omega\\) is bounded, its closure times the closed time interval is compact. Continuity therefore gives finite attained boundary and full-cylinder maxima. If the spatial domain were unbounded, that compactness argument would be missing; a later barrier proof supplies the result under a bounded-growth assumption instead.

## The weak maximum principle, with the final-time issue resolved

**Theorem 6.2 (Parabolic maximum principle).** In the preceding class,
\\[
 \\max_{\\overline Q}u\\le\\max_{\\partial_pQ}u.
\\]
Thus equality holds because the parabolic boundary is a subset of the closure.

*Proof.* Let \\(M=\\max_{\\partial_pQ}u\\), choose \\(\\varepsilon>0\\), and set \\(v=u-\\varepsilon t\\). Then \\(Lv\\le-\\varepsilon\\). Fix \\(0<S<T\\) and maximize \\(v\\) on \\(\\overline\\Omega\\times[0,S]\\). If its value exceeded \\(M\\), the maximizing point would have spatial coordinate inside \\(\\Omega\\) and time \\(t_0>0\\), because on the initial and lateral boundary \\(v\\le u\\le M\\).

At that spatial maximum the Hessian is nonpositive, so \\(\\Delta v\\le0\\). If \\(t_0<S\\), the time derivative is zero; if \\(t_0=S\\), its derivative is nonnegative because the value is at least all immediately preceding times. This left comparison is legitimate since \\(S<T\\) and the derivative exists at that point in the original open cylinder. Hence \\(Lv\\ge0\\), contradicting the strict negative inequality. Therefore \\(v\\le M\\) up to time \\(S\\).

For each \\(t<T\\), choose such an \\(S\\ge t\\), obtaining \\(u(x,t)\\le M+\\varepsilon t\\). Let \\(\\varepsilon\\downarrow0\\). Continuity then extends the bound to time \\(T\\) and the spatial boundary. We never needed a derivative at the final time itself. ∎

Subtracting the small time term is essential: a nonstrict differential inequality at a maximum would only give zero at most zero, not a contradiction. The proof also identifies why \\(\\kappa\\) must be positive. At a spatial maximum the Laplacian has the useful sign only when multiplied by a positive diffusivity in this operator.

**Corollary 6.3 (Comparison and uniqueness).** If \\(Lu\\le Lv\\) on \\(Q\\) and \\(u\\le v\\) on \\(\\partial_pQ\\), for functions in the stated classical class, then \\(u\\le v\\) throughout the closure. In particular two classical solutions with the same equation, initial values and lateral Dirichlet values coincide.

*Proof.* Apply Theorem 6.2 to \\(u-v\\). For uniqueness apply it in both directions, since the difference and its negative have zero forcing and zero parabolic-boundary data. ∎

The word weak in weak maximum principle refers to the nonstrict bound, not to a Sobolev weak solution. The regularity here is classical. Weak-solution maximum principles belong to the L4 continuation and require their own function-space argument.

## Error bounds for data and sources

**Proposition 6.4 (Supremum stability).** Suppose \\(Lu=f\\), \\(Lv=g\\), the boundary difference has modulus at most \\(\\delta\\), and \\(|f-g|\\le F\\) throughout \\(Q\\), where \\(F\\ge0\\) is finite. Then
\\[
 |u(x,t)-v(x,t)|\\le\\delta+Ft.
\\]

*Proof.* Set \\(w=u-v\\). The function \\(w-\\delta-Ft\\) has nonpositive parabolic-boundary values and operator value \\(f-g-F\\le0\\). Comparison gives its nonpositivity. Apply the same argument to \\(-w-\\delta-Ft\\) for the opposite bound. ∎

Thus the homogeneous Dirichlet heat problem, when a classical solution exists, has continuous dependence in the uniform data norm. With identical sources the solution difference is at most the largest initial or lateral error. An approximate function with residual bounded by \\(F\\) can be compared in exactly this way if it has the required regularity and controlled boundary discrepancy. A small residual without those hypotheses is not the theorem's premise.

**Worked example 6.5 (A bound and a sharper explicit decay).** On \\((0,L)\\), the solution
\\[
 u(x,t)=e^{-\\kappa\\pi^2t/L^2}\\sin(\\pi x/L)
\\]
has zero lateral values and initial values between zero and one. Comparison with constants gives \\(0\\le u\\le1\\). Its exact formula gives the stronger time-dependent maximum \\(e^{-\\kappa\\pi^2t/L^2}\\). The maximum principle alone gives the first bound; it does not supply the precise exponential rate without additional spectral or energy information.

**Worked example 6.6 (Time growth from a positive source).** With spatially constant \\(u(x,t)=t\\), the operator value is one, the initial state is zero, and lateral boundary values are \\(t\\). For the problem with source \\(F\\), zero initial values and lateral values \\(Ft\\), the function \\(Ft\\) is an exact solution and also its own comparison barrier. This does not claim a sharp zero-lateral-data estimate, since those prescribed lateral values are nonzero. Positive interior forcing cannot be discarded from a data-only maximum estimate: \\(L(t)=1\\), so this function is not a homogeneous subsolution.

A useful counterpoint is negative diffusivity. For \\(\\kappa=-a<0\\), \\(u(x,t)=e^{a\\pi^2t}\\sin(\\pi x)\\) solves \\(u_t=\\kappa u_{xx}\\) on the unit interval with zero lateral data. Its later maximum exceeds the initial maximum one. The positive-diffusivity hypothesis has a concrete failure example.

## Mass and energy require their own boundary assumptions

For the following calculations on \\([0,L]\\), assume enough regularity up to the spatial endpoints to differentiate the integral and use the fundamental theorem, for positive times. Integrating the heat equation gives
\\[
 \\frac d{dt}\\int_0^L u(x,t)dx
 =\\kappa[u_x(L,t)-u_x(0,t)].
\\]
Zero Neumann derivatives conserve total mass. Zero Dirichlet values do not in general conserve it: the sine solution's integral is \\((2L/\\pi)e^{-\\kappa\\pi^2t/L^2}\\), which decays.

For zero Dirichlet endpoints, the quadratic energy satisfies
\\[
 E(t)=\\tfrac12\\int_0^L u^2dx,
 \\qquad E'(t)=-\\kappa\\int_0^L u_x^2dx.
\\]
Integration by parts removes the endpoint term because the values of \\(u\\) vanish there. This is different information from the supremum maximum principle. It quantifies decay in a square-integral norm and can be used even when a sharp pointwise formula is unavailable.

One elementary estimate already gives a decay rate. Since \\(u(x)=\\int_0^x u_x(s)ds\\), Cauchy–Schwarz implies \\(\\int_0^L u^2\\le L^2\\int_0^L u_x^2\\). Hence \\(E'\\le-2\\kappa E/L^2\\), and differentiating \\(e^{2\\kappa t/L^2}E(t)\\) yields
\\[
 E(t)\\le E(0)e^{-2\\kappa t/L^2}
\\]
when the initial energy is approached continuously. The constant is not sharp; Fourier sine analysis later improves it. The estimate is proved from the displayed boundary and regularity conditions, not from a generic claim that every heat flow loses every kind of energy.

## The Gaussian kernel constructs whole-space solutions

For \\(t>0\\), define
\\[
 G_t(x)=(4\\pi\\kappa t)^{-d/2}
 \\exp\\left(-\\frac{|x|^2}{4\\kappa t}\\right).
\\]
Direct differentiation gives
\\[
 \\partial_tG_t=\\left(-\\frac d{2t}+\\frac{|x|^2}{4\\kappa t^2}\\right)G_t,
 \\qquad
 \\Delta G_t=\\left(-\\frac d{2\\kappa t}+\\frac{|x|^2}{4\\kappa^2t^2}\\right)G_t,
\\]
so it solves the heat equation. The Gaussian integral and the substitution \\(x=\\sqrt{4\\kappa t}\\,z\\) give \\(\\int_{\\mathbb R^d}G_t=1\\).

**Theorem 6.7 (Bounded continuous initial data on the whole space).** For bounded continuous \\(f\\),
\\[
 u(x,t)=\\int_{\\mathbb R^d}G_t(x-y)f(y)dy
\\]
is classical for positive time, solves heat, and tends to \\(f(x)\\) at each point as \\(t\\downarrow0\\). If \\(f\\) is uniformly continuous, that convergence is uniform in space.

*Proof.* The integral exists absolutely because the kernel is nonnegative of mass one and \\(f\\) bounded. On compact positive-time intervals, derivatives of the kernel are bounded by integrable Gaussian tails times polynomials, locally uniformly in the evaluation point. Integrating first over finite balls permits differentiation there; the common integrable tail bounds then pass those derivatives to the full improper integral. The kernel identity proves the equation.

For initial convergence write the error as \\(\\int G_t(y)[f(x-y)-f(x)]dy\\). In a small ball continuity at \\(x\\) makes the bracket uniformly small. Outside it, bound the bracket by \\(2\\|f\\|_\\infty\\); the kernel tail tends to zero after the scaling substitution, since the rescaled ball radius tends to infinity and the Gaussian is integrable. This proves pointwise convergence. Uniform continuity provides one small-ball radius for every \\(x\\), yielding the uniform conclusion. ∎

**Worked example 6.8 (A spreading Gaussian pulse).** For \\(f(x)=e^{-a|x|^2}\\), \\(a>0\\), completing the square in the convolution gives
\\[
 u(x,t)=(1+4a\\kappa t)^{-d/2}
 \\exp\\left(-\\frac{a|x|^2}{1+4a\\kappa t}\\right).
\\]
The squared exponent has its center at \\(x/(1+4a\\kappa t)\\) as a function of the integration variable; integrating that Gaussian leaves the displayed factor and residual exponent. The maximum decreases while the width grows like \\(\\sqrt{1+4a\\kappa t}\\). Its total mass remains \\((\\pi/a)^{d/2}\\), as the widening volume exactly compensates the amplitude factor. Pointwise decay and conservation of total mass are compatible.

For uniqueness on the whole space a growth condition is needed. Suppose a classical subsolution is bounded on \\(\\mathbb R^d\\times[0,T]\\), continuous through the initial slice, and initially nonpositive. Subtract \\(\\varepsilon(|x|^2+2d\\kappa t+1)\\), whose heat-operator value is zero. On a large ball's lateral boundary the quadratic term dominates the common bound, and the initial values are negative. The bounded-cylinder principle gives nonpositivity of the modified function there. For any fixed point choose such a ball, then let \\(\\varepsilon\\downarrow0\\). The original function is nonpositive. Applying this to both signs of a bounded solution difference proves uniqueness in the bounded whole-space class, without pretending the original unbounded cylinder was compact.

## Smooth forcing and a time-integrated kernel

For a whole-space source \\(F(x,t)\\), the heat-specific Duhamel expression is
\\[
 u(x,t)=G_t*f(x)+\\int_0^tG_{t-s}*F(\\cdot,s)(x)ds.
\\]
Here convolution is the ordinary spatial integral, without a periodic normalization factor. To make a direct classical proof, assume \\(F\\) and its spatial derivatives through order two are bounded and continuous on the time strip, with the relevant uniform bounds, and continuous dependence on time. These are sufficient conditions, not the weakest possible hypotheses.

For each fixed source time \\(s\\), integration by parts transfers spatial derivatives from the Gaussian to \\(F\\). Its tails and bounded source derivatives make the boundary terms vanish. Therefore
\\(\\partial_r(G_r*F_s)=\\kappa G_r*\\Delta F_s\\), where \\(r>0\\). The right side is bounded in norm by \\(\\kappa\\|\\Delta F_s\\|_\\infty\\), uniformly even as \\(r\\downarrow0\\). This integrable bound permits differentiating the time integral. Its upper endpoint contributes \\(F(x,t)\\), because the kernel is an approximate identity at that continuous input. The remaining integral is \\(\\kappa\\Delta\\) of the forcing contribution. Thus the formula solves \\(u_t-\\kappa\\Delta u=F\\) for positive time and approaches the prescribed initial state.

The same positivity and mass-one identity give the explicit bound
\\[
 \\left\\|\\int_0^tG_{t-s}*F_s\\,ds\\right\\|_\\infty
 \\le\\int_0^t\\|F_s\\|_\\infty ds.
\\]
This agrees with comparison using a time-dependent scalar barrier. More generally, on a bounded cylinder, if a difference source has modulus at most a continuous nonnegative function \\(a(t)\\), replace the linear barrier \\(Ft\\) by \\(\\int_0^t a(s)ds\\). Its heat-operator value is exactly \\(a(t)\\), so the previous comparison proof gives boundary error plus that accumulated source bound.

These statements separate construction and estimation. The kernel formula constructs a solution under explicit smooth-source assumptions on the whole space. The bounded-cylinder comparison estimates any two classical solutions without requiring a kernel for that domain. Neither result, by itself, constructs arbitrary Dirichlet solutions on an irregular spatial region. That distinction prevents an existence claim from being smuggled into a uniqueness or stability argument.

## Convex integral decay and what it measures

The maximum principle controls extreme values; heat flow also dissipates many integral quantities. Assume now that Ω is a smooth bounded domain, u is sufficiently smooth through the boundary to integrate by parts, and either homogeneous Neumann data are imposed or a stated entropy derivative vanishes on homogeneous Dirichlet data. For a C2 real convex function η, multiplication by η'(u) gives

\\[
 \\frac d{dt}\\int_\\Omega\\eta(u)
 =\\kappa\\int_{\\partial\\Omega}\\eta'(u)\\partial_\\nu u
 -\\kappa\\int_\\Omega\\eta''(u)|\\nabla u|^2.
\\]

Under Neumann data the boundary integral is zero. Under zero Dirichlet data it is zero if η'(0)=0. Convexity makes the remaining term nonpositive. For η(s)=s²/2 this is the energy identity. For η(s)=s^4 it gives d∫u^4/dt=−12κ∫u²|∇u|². These formulas require no claim that u itself decreases pointwise. A temperature can rise at one location while a convex global integral decreases.

For a positive Neumann solution bounded away from zero on the time interval under discussion, choose η(s)=s log s. Mass M=∫u is preserved, and

\\[
 \\frac d{dt}\\int_\\Omega u\\log u
 =-\\kappa\\int_\\Omega\\frac{|\\nabla u|^2}{u}\\le0.
\\]

Let m=M/|Ω|>0. The relative integral ∫u log(u/m) is nonnegative: writing z=u/m, the elementary inequality z log z−z+1≥0 and the identity ∫(u−m)=0 prove it. Its derivative is the same negative quantity. This establishes monotonicity and a lower bound. It does not by itself prove convergence to equilibrium or give a decay rate; those require an additional coercive inequality. The positive lower bound used for the chain rule must also be justified if one wants to extend the argument to data with zeros.

A nonzero source adds ∫η'(u)h to the formula, and nonhomogeneous boundary conditions add the displayed boundary term. Either contribution can increase the integral. In particular a declining energy conclusion cannot be transferred from an insulated unforced problem to a heated boundary experiment without accounting for the incoming energy. This is another reason to record source and boundary hypotheses beside every estimate.

## Exercises

### Exercise 6.1 {#heat-equation-ex-1}

Identify the parabolic boundary of \\((0,L)\\times(0,T)\\). Is the final interior segment included?

<details><summary>Hint 1</summary>
Separate the initial slice from the two lateral edges.
</details>
<details><summary>Hint 2</summary>
A forward problem predicts its final state.
</details>
<details><summary>Solution</summary>
It consists of \\([0,L]\\times\\{0\\}\\), \\(\\{0\\}\\times[0,T]\\), and \\(\\{L\\}\\times[0,T]\\). The segment \\((0,L)\\times\\{T\\}\\) is excluded. Its values are bounded by the maximum principle but are not an additional freely prescribed boundary for the forward problem. The initial endpoints belong to both adjacent pieces and need compatible data.
</details>

### Exercise 6.2 {#heat-equation-ex-2}

Why does the proof replace \\(u\\) by \\(u-\\varepsilon t\\)?

<details><summary>Hint 1</summary>
Compute the heat operator of the new function.
</details>
<details><summary>Hint 2</summary>
At a positive interior-time maximum, only a nonnegative operator value is forced.
</details>
<details><summary>Solution</summary>
The new operator value is at most \\(-\\varepsilon\\), a strict negative number. At an excluded-boundary maximum the spatial and time derivative signs force a nonnegative value, a contradiction. Without strictness both facts could merely give zero, so no contradiction would follow. Letting \\(\\varepsilon\\) tend to zero recovers the original bound.
</details>

### Exercise 6.3 {#heat-equation-ex-3}

Explain why no derivative at final time \\(T\\) is assumed in Theorem 6.2.

<details><summary>Hint 1</summary>
The maximum argument is first applied only up to \\(S<T\\).
</details>
<details><summary>Hint 2</summary>
Continuity supplies the limiting final-time values.
</details>
<details><summary>Solution</summary>
For \\(S<T\\), the time derivative at the top of that smaller cylinder exists inside the original open cylinder, allowing the left-derivative sign argument. The resulting bound covers every time below \\(T\\). Continuity of the function, rather than continuity of its derivatives, then passes the bound to \\(T\\). This keeps the theorem within its actual interior regularity class.
</details>

### Exercise 6.4 {#heat-equation-ex-4}

If the parabolic-boundary error is at most \\(0.01\\), the source difference at most \\(0.02\\), and \\(T=3\\), bound the solution difference.

<details><summary>Hint 1</summary>
Use \\(\\delta+Ft\\) at each time.
</details>
<details><summary>Hint 2</summary>
The largest displayed bound occurs at final time.
</details>
<details><summary>Solution</summary>
The pointwise error is at most \\(0.01+0.02t\\), hence at most \\(0.07\\) through time three. The estimate assumes both functions have the stated classical regularity and the bounds hold on the full prescribed boundary and interior source, not just at sampled points.
</details>

### Exercise 6.5 {#heat-equation-ex-5}

Show negative diffusivity defeats the forward maximum conclusion using \\(e^{a\\pi^2t}\\sin(\\pi x)\\).

<details><summary>Hint 1</summary>
Use \\(\\kappa=-a\\), with \\(a>0\\).
</details>
<details><summary>Hint 2</summary>
Compare its value at the midpoint with the maximum initial data.
</details>
<details><summary>Solution</summary>
The second spatial derivative is \\(-\\pi^2u\\), so \\(\\kappa u_{xx}=a\\pi^2u=u_t\\). The lateral values are zero and the initial maximum is one. At the midpoint the later value is \\(e^{a\\pi^2t}>1\\). Thus positivity of diffusivity is essential, exactly as the spatial second-derivative sign in the proof indicated.
</details>

### Exercise 6.6 {#heat-equation-ex-6}

Under zero Neumann data, derive conservation of the spatial integral on an interval.

<details><summary>Hint 1</summary>
Integrate \\(u_t=\\kappa u_{xx}\\) in space.
</details>
<details><summary>Hint 2</summary>
Use the endpoint derivative values after the fundamental theorem.
</details>
<details><summary>Solution</summary>
With sufficient endpoint regularity, the time derivative of the integral is \\(\\kappa[u_x(L,t)-u_x(0,t)]\\), which vanishes under the two zero derivative conditions. Hence the integral is constant. Zero Dirichlet values would not remove this flux term; they are different boundary information.
</details>

### Exercise 6.7 {#heat-equation-ex-7}

Prove the displayed energy identity for zero Dirichlet endpoints.

<details><summary>Hint 1</summary>
Differentiate half the square integral.
</details>
<details><summary>Hint 2</summary>
Integrate \\(u u_{xx}\\) by parts and inspect the boundary term.
</details>
<details><summary>Solution</summary>
Differentiation gives \\(E'=\\int u u_t=\\kappa\\int u u_{xx}\\). Integration by parts gives \\(\\kappa[u u_x]_0^L-\\kappa\\int u_x^2\\). The endpoint values of \\(u\\) make the first term zero, yielding the identity. The calculation assumes enough regularity for these operations; it is stronger than merely the maximum theorem's boundary continuity.
</details>

### Exercise 6.8 {#heat-equation-ex-8}

Verify the time derivative of the Gaussian kernel from its logarithm.

<details><summary>Hint 1</summary>
Differentiate \\(-\\frac d2\\log t-|x|^2/(4\\kappa t)\\).
</details>
<details><summary>Hint 2</summary>
Multiply the logarithmic derivative by the kernel.
</details>
<details><summary>Solution</summary>
The logarithmic derivative is \\(-d/(2t)+|x|^2/(4\\kappa t^2)\\). Multiplying by \\(G_t\\) gives the displayed time derivative. Combined with the explicitly differentiated spatial Laplacian, it proves \\(\\partial_tG_t=\\kappa\\Delta G_t\\) for positive time, not a statement about a classical pointwise value at time zero.
</details>

### Exercise 6.9 {#heat-equation-ex-9}

Show convolution with the heat kernel preserves constant initial functions.

<details><summary>Hint 1</summary>
Pull the constant outside the integral.
</details>
<details><summary>Hint 2</summary>
The kernel has total mass one.
</details>
<details><summary>Solution</summary>
For \\(f=c\\), the convolution is \\(c\\int G_t=c\\). It solves heat because both relevant derivatives vanish. This verifies the normalization and shows that whole-space bounded solutions need not decay pointwise if their initial state has a nonzero constant component; the Gaussian pulse's decay was a property of that localized datum.
</details>

### Exercise 6.10 {#heat-equation-ex-10}

Why does uniform continuity of the initial datum strengthen pointwise initial convergence to uniform convergence?

<details><summary>Hint 1</summary>
The near-field radius can then be chosen independently of the evaluation point.
</details>
<details><summary>Hint 2</summary>
The kernel tail estimate already has no dependence on that point.
</details>
<details><summary>Solution</summary>
Uniform continuity makes \\(|f(x-y)-f(x)|\\) small for all \\(x\\) whenever \\(|y|\\) is below one common radius. The complementary integral is bounded by \\(2\\|f\\|_\\infty\\) times a Gaussian tail depending only on that radius and time. Both estimates are uniform in \\(x\\), so their sum tends uniformly to zero. Ordinary continuity supplies a radius depending on the chosen point instead.
</details>

### Exercise 6.11 {#heat-equation-ex-11}

Let a nonnegative triangular initial pulse on the line have height one and area \\(1/n\\). Bound its later heat solution at fixed positive time using kernel size.

<details><summary>Hint 1</summary>
The kernel maximum is \\((4\\pi\\kappa t)^{-1/2}\\).
</details>
<details><summary>Hint 2</summary>
Bound the convolution by that maximum times the initial integral.
</details>
<details><summary>Solution</summary>
The solution is nonnegative and at most \\(1/[n\\sqrt{4\\pi\\kappa t}]\\), uniformly in space. At any fixed positive time this tends to zero even though all initial pulse maxima are one. The maximum principle's bound one remains valid but is coarser. Different data norms yield different useful controls, and fixed positive time is essential to the displayed smoothing estimate.
</details>

### Exercise 6.12 {#heat-equation-ex-12}

In whole-space uniqueness, why does the quadratic barrier need a boundedness assumption on the solution difference?

<details><summary>Hint 1</summary>
A large sphere must have nonpositive modified boundary values.
</details>
<details><summary>Hint 2</summary>
One common bound lets the negative quadratic dominate there.
</details>
<details><summary>Solution</summary>
If \\(|w|\\le M\\) throughout the time strip, choosing a radius with \\(\\varepsilon R^2>M\\) makes \\(w-\\varepsilon(|x|^2+2d\\kappa t+1)\\) nonpositive on the lateral sphere. The bounded-cylinder maximum principle then applies. Without a specified growth bound, no such domination follows from the formula alone. The proof establishes uniqueness in the bounded whole-space class, not every conceivable unbounded solution class.
</details>

## Sources and scope

This is original exposition and supported exercise development. Local source lineage is the Quarto heat/PDE introduction and the retained Atlas energy/Fourier chapter. Evans and Strauss are syllabus benchmarks. The maximum and comparison proofs give their exact bounded-cylinder regularity and parabolic boundary. Whole-space uniqueness states its bounded-growth hypothesis. Weak solution theory and Sobolev maximum principles are reserved for the L4 PDE continuation.

## Summary

Positive diffusivity and the past/lateral boundary control classical heat subsolutions. Strict time perturbation proves the maximum principle without assuming a final-time derivative, and comparison supplies uniqueness and uniform data/source stability. Mass and energy depend on separate boundary and regularity hypotheses. Gaussian convolution constructs bounded whole-space solutions and demonstrates smoothing, while a growth barrier gives uniqueness there. Fourier and boundary methods next adapt these ideas to eigenfunction expansions and bounded spatial geometries.
`;export{e as default};