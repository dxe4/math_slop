var e=`---
parent_id: book-pde-weak-theory-waves-patterns
chapter_id: hyperbolic-conservation-laws
title: Hyperbolic Equations and Energy
level: graduate
estimated_minutes: 320
license: CC BY-SA 4.0
---

# Hyperbolic Equations and Energy

Hyperbolic equations transport information at finite speed. Even smooth initial data can steepen into shocks, after which classical derivatives fail and conservation alone admits too many weak solutions. This chapter develops transport, wave energy, finite propagation and symmetric hyperbolic structure. Its original conservation-law exercises remain as a bridge; their complete earlier teaching source is retained as registered supporting matter.

## 1. Linear transport and domains of dependence

For constant c,

$$u_t+cu_x=0,\\qquad u(0,x)=u_0(x),$$

characteristics satisfy $x'=c$ and u is constant along them. Hence

$$u(t,x)=u_0(x-ct).$$

The value at $(t,x)$ depends only on the foot $x-ct$. Boundary data are required only where characteristics enter the domain. Prescribing both ends of a one-way transport interval generally overdetermines the problem.

For variable smooth speed $a(t,x)$, solve $X'=a(t,X)$ and transport u along X while the characteristic flow exists uniquely. Crossing characteristics for a scalar linear field would contradict uniqueness of this characteristic ODE; nonlinear laws behave differently because speed depends on u.

## The wave equation needs two initial data and one energy

For constant positive speed c, consider $u_{tt}-c^2\\Delta u=f$ with zero Dirichlet boundary condition on a bounded Lipschitz domain. The finite-energy initial data are $u_0\\in H_0^1$ and $u_1\\in L^2$. The displacement has one spatial derivative, while its velocity is square integrable. Both are needed: prescribing displacement alone cannot distinguish a stationary initial string from one already moving through the same shape.

For a smooth solution multiply by its time derivative and integrate by parts. The zero boundary displacement implies zero time derivative of that trace in the smooth calculation. The result is

$$\\frac d{dt}E(t)=(f,u_t)_{L^2},\\qquad
E(t)=\\frac12\\bigl(\\|u_t\\|_2^2+c^2\\|\\nabla u\\|_2^2\\bigr).$$

In particular unforced energy is constant, unlike the dissipating heat energy. The equation transports and exchanges kinetic and gradient energy rather than removing it. An energy estimate with a nonincreasing right side would be valid here only as an equality or with an actual damping mechanism included.

For a forced solution, the norm $\\sqrt{2E}$ is bounded by its initial value plus the integral of the forcing norm. To avoid dividing by zero energy, apply the derivative calculation first to $\\sqrt{2E+\\epsilon}$ and then let epsilon decrease to zero. Thus an integrable H-valued load suffices for this finite-energy estimate. The estimate says nothing about classical second derivatives of the displacement.

## A complete finite-energy construction uses spectral tails

Use the orthonormal Dirichlet Laplacian basis with positive eigenvalues. Its existence is the same compact-embedding/spectral input identified in the parabolic chapter. Each coefficient solves a forced oscillator with frequency $c\\sqrt{\\lambda_j}$. For zero load the coefficients are

$$u_j(t)=a_j\\cos(c\\sqrt{\\lambda_j}t)
+\\frac{b_j}{c\\sqrt{\\lambda_j}}\\sin(c\\sqrt{\\lambda_j}t).$$

Each mode preserves $|u_j'|^2+c^2\\lambda_j|u_j|^2$. Summing this identity over a finite set gives the approximate energy. The initial tail sums tend to zero because the initial data belong to the stated energy spaces. Hence the finite sums form a Cauchy sequence uniformly in time in the displacement gradient norm and velocity square-integrable norm.

The limit therefore belongs to $C([0,T];H_0^1)$ with velocity in $C([0,T];L^2)$. Its initial data are attained in those norms. The second time derivative lies continuously in the energy dual for zero load, and its equation follows first against individual eigenvectors and then against every energy test by density. This proves existence without assuming a classical initial derivative of the velocity.

For a load in $L^1(0,T;L^2)$, add each oscillator's sine convolution. The finite-dimensional energy estimate bounds differences by the initial tail energy plus the integral norm of the load's projected tail. The latter tends to zero by strong convergence of the spectral projections and dominated convergence. Thus the same construction gives an energy solution with the same strong state and velocity continuity. Its acceleration lies in the sum of a continuous dual-valued term and the integrable load.

Uniqueness can be proved without illegitimately testing by a velocity known only in $L^2$. Pair the difference equation with each fixed eigenvector. Each coefficient satisfies a scalar homogeneous oscillator with zero initial data, hence vanishes. Completeness gives zero displacement and velocity. The integrated energy identity follows by passing the finite-sum identities to the limit: uniform velocity convergence and the integrable load control their product, and uniform energy convergence controls the endpoints.

This proof also identifies the relevant approximation topology. Weak convergence of a displacement sequence alone would neither recover the velocity data nor preserve its squared energy as an equality. The uniform tail control is stronger and is available here because the linear autonomous operator diagonalizes in the chosen basis. Variable coefficients and nonlinear systems require their own replacement for that construction.

### Worked example: a vibrating string mode

On $(0,\\pi)$ take initial displacement $\\sin(nx)$ and zero velocity. The solution is $\\cos(cnt)\\sin(nx)$. Its kinetic energy is proportional to $c^2n^2\\sin^2(cnt)$ and its gradient energy to $c^2n^2\\cos^2(cnt)$. Their sum is constant. At one quarter of a modal period the displacement vanishes but the velocity is largest, so displacement size alone is not a state-energy measure.

Starting instead with zero displacement and velocity $\\sin(nx)$ gives $\\sin(cnt)\\sin(nx)/(cn)$. The factor dividing the velocity coefficient by frequency is required by the initial derivative. Omitting it would produce the wrong initial velocity even though the displayed function still solves the wave equation. The two initial-data slots are therefore mathematically distinct.

Any finite sum of these modes gives an exact classical solution. An infinite finite-energy sum need not have the same pointwise second derivatives, but it remains the unique energy solution proved above. Conservation of its total energy follows by the tail limit, so roughness is compatible with a precise dynamical balance.

## A shrinking-cone estimate proves finite propagation

Work first with a smooth unforced wave solution on a region containing a backward cone. Its energy density is $e=(u_t^2+c^2|\\nabla u|^2)/2$ and its flux identity is $e_t=\\operatorname{div}(c^2u_t\\nabla u)$. Integrate over a ball whose radius decreases at speed c. Differentiating the moving-domain integral adds the boundary loss $-c\\int e$.

The remaining outward flux is bounded pointwise by c times the energy density, since $|c^2u_t\\partial_nu|\\le c(u_t^2+c^2|\\nabla u|^2)/2$. Thus the energy in that shrinking ball cannot increase. If the displacement and velocity vanish in the initial ball, its energy stays zero in the cone. The displacement itself remains zero because its time derivative vanishes and its initial value is zero along each vertical segment contained in the cone.

Applying the argument to a difference proves the domain-of-dependence statement: two solutions with identical initial data on a ball agree on the smaller future cone, provided it stays inside the physical domain and any forcing also agrees there. Boundary reflections require incorporating the actual boundary conditions rather than allowing the cone to cross an unspecified boundary.

For energy data the result extends by smooth approximation on slightly smaller cones. One can preserve a zero initial region up to a small loss of its radius by cutting off and smoothing the data with a scale smaller than that loss. The energy estimate passes the resulting solution differences to the limit. Letting the radius loss decrease gives the finite-energy version. This is a local statement in a norm-defined solution class; it does not require a pointwise representative at every spacetime location.

Heat flow has a different behavior: its kernel can carry a localized initial disturbance to every spatial point at every positive time. The wave cone proof depends on the hyperbolic flux inequality and a moving boundary of finite speed. It is not a generic consequence of having a PDE, a solution operator or an energy estimate.

### Worked example: d'Alembert data and a causal interval

On the real line, for sufficiently regular initial data the wave solution is

$$u(t,x)=\\frac{u_0(x-ct)+u_0(x+ct)}2
+\\frac1{2c}\\int_{x-ct}^{x+ct}u_1(s)ds.$$

Direct differentiation verifies the wave equation and the two initial data. The first term consists of two oppositely moving copies of the initial displacement. The integral term records the initial velocity throughout the backward interval. Data outside that interval do not affect the point, matching the cone estimate.

If the initial velocity is the indicator of an interval and the displacement is zero, the velocity contribution equals the length of intersection of that interval with the backward interval divided by twice c. It is a continuous piecewise-affine profile in x with corners along propagating characteristic lines. The formula gives an energy interpretation without manufacturing classical differentiability at those corners. Smooth approximations and the energy bound identify it with the corresponding weak solution.

## Symmetric systems carry a boundary energy flux

Consider a first-order system $U_t+\\sum_j A_jU_{x_j}=0$ with constant real symmetric matrices. Its energy density is $|U|^2/2$, and multiplication by U gives the local conservation identity with flux component $U^TA_jU/2$. On a bounded domain the energy rate is minus the outward normal flux. A boundary condition should therefore control the components that carry energy into the domain.

In one spatial dimension, diagonalizing the symmetric coefficient separates real characteristic speeds. At a left boundary positive speeds enter the interval and need incoming data; negative speeds leave and are determined by the interior. At a right boundary the roles reverse. A zero characteristic speed requires a separate compatibility analysis rather than an arbitrary inflow assignment. Prescribing all components at both ends can overdetermine the system.

A positive symmetrizer can extend the energy calculation when its product with each principal coefficient is symmetric. A constant positive symmetrizer gives an equivalent state norm directly. Variable symmetrizers introduce derivatives in the energy identity, which must be bounded and included in a Gronwall estimate. Merely having real eigenvalues at each point does not automatically provide a uniformly bounded, sufficiently regular symmetrizer.

### Worked example: one-dimensional acoustics

Let pressure and velocity satisfy $p_t+Kv_x=0$ and $\\rho v_t+p_x=0$, with positive density and bulk modulus. The energy is $p^2/(2K)+\\rho v^2/2$ and the flux is pv. Define sound speed $c=\\sqrt{K/\\rho}$ and impedance $Z=\\sqrt{K\\rho}$. The combinations $p+Zv$ and $p-Zv$ travel with speeds plus c and minus c respectively, as direct substitution shows.

At the left endpoint of a half-line, the plus-speed variable is incoming and the minus-speed variable is outgoing. A rigid wall imposes zero velocity and therefore equates the two characteristic values there; the pressure wave reflects with the same sign. A pressure-release wall instead imposes zero pressure and equates them with opposite signs. The energy flux vanishes under either homogeneous wall condition.

An absorbing condition sets the incoming variable to zero. At the left boundary that means $p+Zv=0$, giving $pv=-Zv^2\\le0$. The outward normal points left, so the outward energy flux is minus pv and is nonnegative: energy leaves rather than enters. Keeping the normal sign visible prevents confusing an absorbing relation with an energy-injecting one.

## Hyperbolicity alone does not choose nonlinear shocks

For a nonlinear system the principal matrix is the flux Jacobian at the current state. Strict hyperbolicity means real distinct characteristic speeds in the stated region. Smooth solutions can still develop unbounded gradients, and after that event a weak formulation needs additional admissibility structure. The linear wave energy argument does not establish entropy uniqueness for an arbitrary nonlinear conservation system.

Even in a scalar law, Rankine–Hugoniot balance determines the speed of a proposed jump without selecting its admissibility. The original twenty bridge exercises below retain those conservation and numerical distinctions. Their full earlier derivations, including Burgers shocks and fans, are preserved in the [registered hyperbolic/conservation reading](back-matter/retained-hyperbolic-conservation-reading.md). The separate conservation-law chapter develops the entropy argument in its own bounded solution class.

Finite-volume conservation, consistency and a monotone update also answer different questions. Shared fluxes cancel algebraically, while consistency identifies the intended physical flux and an entropy/compactness theorem identifies the admissible limit. Numerical mathematics owns detailed approximation-error analysis. No linear energy identity here is advertised as a general shock-capturing convergence theorem.

## Exercises with complete worked solutions

### 1. Transport solution
Solve $u_t+3u_x=0$, $u(0,x)=\\sin x$.

<details><summary>Hint 1</summary>

Translate the initial profile along the transport characteristics.

</details>

<details><summary>Hint 2</summary>

The backward characteristic foot is x minus speed times time.

</details>

<details><summary>Full solution</summary>

**Solution.** Translate the initial profile: $u(t,x)=\\sin(x-3t)$.

</details>

### 2. Inflow boundary
For c>0 on $(0,1)$, which boundary needs data?

<details><summary>Hint 1</summary>

Follow the sign of the characteristic speed.

</details>

<details><summary>Hint 2</summary>

Only the boundary from which characteristics enter needs prescribed values.

</details>

<details><summary>Full solution</summary>

**Solution.** Characteristics enter at x=0 and leave at x=1, so prescribe the left boundary only, plus compatible initial data.

</details>

### 3. Characteristic invariant
For $u_t+u u_x=0$, show u is constant on $x'=u$.

<details><summary>Hint 1</summary>

Differentiate the state along its characteristic path.

</details>

<details><summary>Hint 2</summary>

Substitute the chosen path speed into the PDE.

</details>

<details><summary>Full solution</summary>

**Solution.** Along x(t), $d u/dt=u_t+x'u_x=u_t+u u_x=0$.

</details>

### 4. Breaking time
For Burgers with $u_0(x)=-\\sin x$, find first positive breaking time.

<details><summary>Hint 1</summary>

Differentiate the initial profile.

</details>

<details><summary>Hint 2</summary>

Locate its most negative slope.

</details>

<details><summary>Full solution</summary>

**Solution.** $a'(u)=1$, and $\\min u_0' = \\min(-\\cos x)=-1$, so $t_*=1$.

</details>

### 5. No breaking case
If Burgers initial data are nondecreasing, what does the formula predict?

<details><summary>Hint 1</summary>

Inspect the label-map derivative.

</details>

<details><summary>Hint 2</summary>

A nonnegative initial slope keeps it positive for all forward times.

</details>

<details><summary>Full solution</summary>

**Solution.** $u_0'\\geq 0$, so $1+t u_0'>0$ for positive time. Characteristics spread rather than cross; no forward gradient catastrophe follows from this mechanism.

</details>

### 6. Shock speed
For Burgers states $u_L=2,u_R=0$, find s.

<details><summary>Hint 1</summary>

Insert the two states in the flux-jump ratio.

</details>

<details><summary>Hint 2</summary>

Burgers flux is half the squared state.

</details>

<details><summary>Full solution</summary>

**Solution.** $s=[f(2)-f(0)]/(2-0)=(2-0)/2=1$, equivalently $(u_L+u_R)/2=1$.

</details>

### 7. Lax check
Check entropy for Exercise 6.

<details><summary>Hint 1</summary>

Compare the shock speed to the two characteristic speeds.

</details>

<details><summary>Hint 2</summary>

Compression means characteristics enter the moving jump.

</details>

<details><summary>Full solution</summary>

**Solution.** Burgers characteristic speed is f'(u)=u. We have $0<s=1<2$; characteristics enter from both sides, so it is an entropy shock.

</details>

### 8. Expansion jump
For $u_L=0,u_R=2$, why is the jump inadmissible?

<details><summary>Hint 1</summary>

Compute the balanced jump speed first.

</details>

<details><summary>Hint 2</summary>

Then inspect whether characteristics enter or leave it.

</details>

<details><summary>Full solution</summary>

**Solution.** Its Rankine–Hugoniot speed is one, but characteristics have speeds 0 on the left and 2 on the right and move away from the jump. The entropy solution is a rarefaction.

</details>

### 9. Rarefaction value
For Exercise 8, find u at $(t,x)$ with $x/t=1.5$.

<details><summary>Hint 1</summary>

Compare the similarity ratio with the two fan-edge speeds.

</details>

<details><summary>Hint 2</summary>

Inside the fan the state equals that ratio.

</details>

<details><summary>Full solution</summary>

**Solution.** The ratio lies inside the fan $(0,2)$, so $u=x/t=1.5$.

</details>

### 10. Weak not unique
Why is Rankine–Hugoniot insufficient?

<details><summary>Hint 1</summary>

Separate conservation from admissibility.

</details>

<details><summary>Hint 2</summary>

Expansion and compression can both obey the same jump balance.

</details>

<details><summary>Full solution</summary>

**Solution.** Both compressive and expansion jumps can satisfy balance. Entropy inequality or vanishing viscosity selects the compressive shock and rarefaction alternative for convex flux.

</details>

### 11. Upwind convexity
Rewrite the c>0 upwind update.

<details><summary>Hint 1</summary>

Collect the coefficients of the current and upstream cells.

</details>

<details><summary>Hint 2</summary>

A bound-preserving convex combination needs both coefficients nonnegative.

</details>

<details><summary>Full solution</summary>

**Solution.** $U_j^{n+1}=(1-\\nu)U_j^n+\\nu U_{j-1}^n$. It is a convex combination exactly when $0\\leq \\nu\\leq 1$.

</details>

### 12. Discrete mass
Show interior finite-volume fluxes cancel.

<details><summary>Hint 1</summary>

Sum the updates over adjacent cells.

</details>

<details><summary>Hint 2</summary>

Each shared interior face has two opposite signs.

</details>

<details><summary>Full solution</summary>

**Solution.** Sum updates over j. Each $F_{j+1/2}$ appears once with minus sign and once from the neighboring cell with plus sign. Only boundary fluxes remain.

</details>

### 13. Consistency
Why require $F(u,u)=f(u)$?

<details><summary>Hint 1</summary>

Examine varying nearby traces approaching the same smooth state.

</details>

<details><summary>Hint 2</summary>

Constant-state cancellation alone also holds for a completely wrong zero flux.

</details>

<details><summary>Full solution</summary>

**Solution.** Consistency makes the numerical interface flux approach the physical flux in a smooth local limit: when both traces approach $u$, one needs $F(u,u)=f(u)$. Constant-state preservation alone cannot establish this condition, because any translation-invariant shared flux gives identical fluxes at the two faces of every constant cell and their difference cancels. For example, $F(v,w)=0$ preserves every constant grid state but freezes all nonconstant data even when the physical flux $f$ is nonzero. Thus consistency concerns approximation of the intended conservation law on varying smooth profiles, not merely preservation of constants.

</details>

### 14. CFL failure
What goes wrong for upwind nu=1.2?

<details><summary>Hint 1</summary>

Evaluate the two update weights.

</details>

<details><summary>Hint 2</summary>

A negative weight destroys the convexity proof.

</details>

<details><summary>Full solution</summary>

**Solution.** Weight $1-\\nu=-0.2$ is negative, so bound preservation and the convex-combination stability proof fail. Oscillations or growth can occur.

</details>

### 15. Shock norm
Why prefer L1 to pointwise error for a shifted shock?

<details><summary>Hint 1</summary>

A shifted jump differs only on the strip between its two locations.

</details>

<details><summary>Hint 2</summary>

Its integral error is jump height times strip length.

</details>

<details><summary>Full solution</summary>

**Solution.** A small location error creates order-one pointwise error near the jump, while its L1 error scales with shift times jump height and reflects convergence meaningfully.

</details>

### 16. Smooth manufactured limit
What does a smooth convergence test miss?

<details><summary>Hint 1</summary>

List features absent from a smooth profile.

</details>

<details><summary>Hint 2</summary>

A smooth construction does not trigger shock entropy or limiter behavior.

</details>

<details><summary>Full solution</summary>

**Solution.** It does not test entropy selection, limiter activation, shock speed, discontinuity smearing, or post-shock positivity.

</details>

### 17. Strict hyperbolicity
If a two-by-two flux Jacobian has a repeated eigenvalue and one eigenvector, is it strictly hyperbolic?

<details><summary>Hint 1</summary>

Recall both the distinct-speed and diagonalization requirements.

</details>

<details><summary>Hint 2</summary>

A defective repeated eigenvalue fails even the stronger decomposition property.

</details>

<details><summary>Full solution</summary>

**Solution.** No. Strict hyperbolicity requires real distinct eigenvalues; the missing eigenbasis also blocks characteristic decomposition.

</details>

### 18. Entropy residual sign
For a convex entropy, what sign should total entropy production have in a closed entropy solution?

<details><summary>Hint 1</summary>

Retain boundary entropy flux when integrating the inequality.

</details>

<details><summary>Hint 2</summary>

The remaining production has the sign selected by convex entropy dissipation.

</details>

<details><summary>Full solution</summary>

**Solution.** The distributional inequality is nonpositive after accounting for boundary entropy flux. A numerical diagnostic must use matching sign and boundary terms.

</details>

### 19. Numerical Riemann audit
Design a verification for Burgers $u_L=2,u_R=0$.

<details><summary>Hint 1</summary>

Use the exact moving jump as a reference.

</details>

<details><summary>Hint 2</summary>

Separate finite computations from an all-refinements theorem.

</details>

<details><summary>Full solution</summary>

**Solution.** Use the exact shock at speed one. Run meshes $dx,dx/2,dx/4$ with fixed CFL below the flux’s stability limit. At common time, report total mass with boundary accounting, L1 cell-average error, shock location, minimum/maximum, and discrete entropy production. Verify the numerical flux is consistent and boundary states remain exact. Convergence supports the scheme; only an applicable theorem establishes convergence for all refined meshes.

</details>

### 20. Claim repair
Repair: “The method conserves mass, so it converges to the physical shock.”

<details><summary>Hint 1</summary>

State what flux cancellation actually proves.

</details>

<details><summary>Hint 2</summary>

Consistency and admissibility are extra conditions, not synonyms for conservation.

</details>

<details><summary>Full solution</summary>

**Solution.** Conservation is necessary but does not select the entropy solution or ensure stability/compactness. Add consistency, a suitable entropy/stability property, CFL control, and refinement evidence or a convergence theorem.

</details>


## Wave and system exercises

### 21. Modal velocity data

For speed two on $(0,\\pi)$, find the solution with displacement zero and initial velocity $\\sin(3x)$.

<details><summary>Hint 1</summary>

The angular frequency is speed times spatial frequency.

</details>
<details><summary>Hint 2</summary>

Normalize the sine-in-time factor to give unit initial derivative.

</details>
<details><summary>Full solution</summary>

The answer is $\\sin(6t)\\sin(3x)/6$. It has zero initial displacement and its time derivative at zero is exactly $\\sin(3x)$. The temporal frequency squared matches four times the spatial frequency squared, so it solves the wave equation and the endpoint data.

</details>

### 22. A modal energy

Compute the conserved energy of $u=\\cos(cnt)\\sin(nx)$ on $(0,\\pi)$.

<details><summary>Hint 1</summary>

Both squared sine and squared cosine integrate to $\\pi/2$ on this interval for integer frequency.

</details>
<details><summary>Hint 2</summary>

Add the kinetic and gradient contributions before simplifying.

</details>
<details><summary>Full solution</summary>

The energy is $c^2n^2\\pi[\\sin^2(cnt)+\\cos^2(cnt)]/4=c^2n^2\\pi/4$. Each contribution varies, but their sum does not. The displacement can vanish at a time of maximal kinetic energy, so its norm alone cannot replace the full phase-space energy.

</details>

### 23. Forced energy norm

If the initial energy is zero and the load norm is at most one over an interval of length T, bound the final energy.

<details><summary>Hint 1</summary>

Use the integrated bound for the square root of twice the energy.

</details>
<details><summary>Hint 2</summary>

Square only after bounding the forcing integral.

</details>
<details><summary>Full solution</summary>

The energy norm is at most T, so $E(T)\\le T^2/2$. This is a sufficient forcing bound, not necessarily an attained maximum for the chosen spatial load. It uses a load in the square-integrable state space; a general dual load requires a different estimate.

</details>

### 24. A causal cone

Two speed-three waves agree initially on a ball of radius six and have matching zero forcing there. For how long does the shrinking-ball argument give a nonempty interior region of agreement?

<details><summary>Hint 1</summary>

The radius decreases at the wave speed.

</details>
<details><summary>Hint 2</summary>

The cone must also remain inside the physical domain.

</details>
<details><summary>Full solution</summary>

They agree on the concentric ball of radius $6-3t$ for $0\\le t<2$, provided the relevant cone is contained in the domain. At time two that ball degenerates, so this particular open-region conclusion ends. Boundary data or forcing differences inside the cone would require additional terms.

</details>

### 25. A velocity pulse

On the line take speed one, zero initial displacement and initial velocity the indicator of $[-1,1]$. Find $u(t,0)$ for positive t.

<details><summary>Hint 1</summary>

Use the length of the backward interval's intersection with the pulse.

</details>
<details><summary>Hint 2</summary>

That length is twice t until the interval covers the entire pulse.

</details>
<details><summary>Full solution</summary>

The d'Alembert integral is half the intersection length of $[-t,t]$ and $[-1,1]$. Thus $u(t,0)=\\min(t,1)$. The change in derivative at time one reflects a characteristic front; it does not invalidate the finite-energy solution interpretation of the pulse data.

</details>

### 26. Acoustic characteristics

Derive the transport equations for $p\\pm Zv$ when $Z=\\sqrt{K\\rho}$.

<details><summary>Hint 1</summary>

Differentiate each combination in time using the two acoustic equations.

</details>
<details><summary>Hint 2</summary>

Use $cZ=K$ and $c=Z/\\rho$.

</details>
<details><summary>Full solution</summary>

For the plus combination its time derivative is $-Kv_x-(Z/\\rho)p_x=-c(p+Zv)_x$, so it travels with plus c. For the minus combination the derivative is $-Kv_x+(Z/\\rho)p_x=c(p-Zv)_x$, giving speed minus c. Both identities require positive density and bulk modulus to define real nonzero c and Z.

</details>

### 27. An absorbing wall sign

At a left boundary, show that $p+Zv=0$ does not inject acoustic energy.

<details><summary>Hint 1</summary>

The physical flux is pv.

</details>
<details><summary>Hint 2</summary>

The outward normal at the left endpoint is minus one.

</details>
<details><summary>Full solution</summary>

The relation gives $pv=-Zv^2$. Outward flux is minus this value, hence nonnegative. Its contribution to the domain energy rate is nonpositive. Reversing the relation to $p-Zv=0$ at that same left boundary would instead control the outgoing variable and can inject energy; boundary orientation matters.

</details>

### 28. A two-speed interval

For a diagonal system with speeds two and minus one on $(0,1)$, identify which component needs data at each endpoint.

<details><summary>Hint 1</summary>

Trace each family backward from a nearby interior point.

</details>
<details><summary>Hint 2</summary>

Positive speed enters from the left, negative speed from the right.

</details>
<details><summary>Full solution</summary>

Prescribe the speed-two component at the left and the speed-minus-one component at the right, together with initial data. The other endpoint values are outgoing and determined by the solution. Prescribing all four endpoint components independently generally imposes incompatible demands along characteristics.

</details>

### 29. An energy tail

Explain why finite initial energy makes partial wave-mode sums Cauchy uniformly in time in the phase-space norm.

<details><summary>Hint 1</summary>

The difference of two partial sums consists of a spectral tail.

</details>
<details><summary>Hint 2</summary>

That tail preserves its own modal energy.

</details>
<details><summary>Full solution</summary>

The difference's squared phase-space norm is twice its tail energy, constant in the unforced problem. The initial tail energies tend to zero because the displacement gradient and velocity coefficients are square summable. Therefore the same small bound holds at every time, producing convergence in continuous displacement-energy and velocity-state norms. This is stronger than weak coefficientwise convergence.

</details>

### 30. A forbidden energy test

Why should one not simply insert $u_t$ into the weak wave equation when the energy solution only has $u_t\\in L^2$ spatially?

<details><summary>Hint 1</summary>

The elliptic form expects a test with one spatial derivative.

</details>
<details><summary>Hint 2</summary>

Use finite spectral sums, where that test is legitimate, and then pass their identities to the limit.

</details>
<details><summary>Full solution</summary>

The test space is $H_0^1$, and a merely square-integrable velocity need not belong to it. The displayed pairing with its gradient can therefore be undefined. Finite spectral approximations have sufficiently regular velocities; their energy identities pass through the uniform phase-space convergence and integrable forcing bound. This justifies the energy identity without assuming the missing regularity of the final solution.

</details>

## Chapter synthesis

Characteristics explain finite propagation and classical breaking; weak forms preserve balance through jumps; entropy selects among weak solutions; finite-volume fluxes preserve discrete conservation. Shock accuracy requires L1 refinement, location, entropy, invariant-domain, and boundary audits.

## Dependency ledger

- Characteristic formulas require sufficient smoothness before crossing.
- Weak solutions use distributional balance and initial traces.
- Entropy uniqueness here relies on scalar convex-flux theory.
- Rankine–Hugoniot gives jump speed, not admissibility.
- Monotone finite-volume convergence requires consistency, CFL stability, and compactness hypotheses.
- System claims require hyperbolicity and system-specific entropy/invariant-region theory.
`;export{e as default};