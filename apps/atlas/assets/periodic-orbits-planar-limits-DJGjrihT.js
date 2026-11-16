var e=`---
parent_id: book-differential-equations-verified-dynamics
chapter_id: periodic-orbits-planar-limits
title: Periodic Orbits and Floquet Theory
level: graduate
estimated_minutes: 320
license: CC BY-SA 4.0
---

# Periodic Orbits and Floquet Theory

A periodic solution repeats while moving. Its phase direction is neutral, so stability concerns the orbit as a set and contraction transverse to that orbit. This L4 chapter develops local return maps, periodic linear equations, Floquet multipliers, continuation and periodic shooting. It retains the stable \`periodic-orbits-planar-limits\` identity and every original exercise and solution.

The complete earlier combined source remains a [registered supporting reading](back-matter/retained-periodic-planar-reading.md). Planar limit-set topology, trapping and divergence exclusions are developed in [Planar Limit Sets](planar-limit-sets.md). The retained exercises include cross-topic bridges to that material; their solutions remain here so earlier exercise identities and learning records are preserved.

## 1. Closed trajectories and minimal period

Let z'=f(z) generate a unique autonomous flow Phi_t on an open subset of the plane. A nonconstant solution through z0 is **periodic** if

$$\\Phi_T(z_0)=z_0$$

for some T>0. The least such positive T is its minimal period. The **periodic orbit** is the geometric set

$$\\Gamma=\\{\\Phi_t(z_0):0\\le t<T\\}.$$

All starting points on Gamma trace the same orbit with different phases. The function t maps to Phi_t(z0) and the set Gamma are therefore not interchangeable.

An autonomous periodic trajectory cannot cross itself before completing its minimal period. If Phi_s(z0)=Phi_t(z0) for 0<=s<t<T, uniqueness and the flow property make t-s a smaller period. Hence a planar periodic orbit is a simple closed curve.

Time-dependent equations require a different state space. A T-periodic forcing can be made autonomous by adding clock phase modulo T; a periodic response is then a closed orbit in the extended space. A closed curve seen in the original state plane may otherwise be a projection that crosses itself.


## 2. Stability is orbital

A periodic orbit Gamma is **orbitally stable** if trajectories starting sufficiently near Gamma remain near the set. It is **orbitally asymptotically stable** if they also approach the set as time tends to infinity. A stronger statement can include an asymptotic phase: there is a shift tau such that

$$\\|\\Phi_t(z)-\\Phi_{t+\\tau}(z_0)\\|\\longrightarrow0.$$

Ordinary pointwise asymptotic stability is impossible along a nonconstant autonomous cycle. A small displacement in phase remains a phase displacement; there is a neutral direction tangent to the flow.

This neutral direction will appear as a Floquet multiplier equal to one. Stability depends on contraction transverse to the orbit, not contraction in every state direction.


## 3. A transverse return map

Choose p on Gamma with f(p) nonzero. A short curve Sigma through p is a **transverse section** if its tangent is not parallel to f(p). Nearby trajectories cross Sigma again after a return time tau(s), where s is a coordinate along the section. The **Poincare return map** is

$$P(s)=\\operatorname{coord}_{\\Sigma}\\bigl(\\Phi_{\\tau(s)}(z(s))\\bigr).$$

The cycle corresponds to a fixed point s star with P(s star)=s star.

If P is differentiable, one-dimensional fixed-point theory gives:

- |P'(s star)|<1 implies local orbital attraction;
- |P'(s star)|>1 implies transverse instability;
- |P'(s star)|=1 is inconclusive without higher-order information.

This reduction removes the neutral phase direction. It also converts a continuous-time stability question into a discrete recurrence.

The construction needs a regular orbit, a transverse section, unique flow, and a locally well-defined first return. A trajectory that hits a section tangentially or leaves before returning does not define the same smooth map.


## 4. Variational flow and Floquet multipliers

Along a T-periodic solution gamma(t), perturbations satisfy

$$\\eta'=Df(\\gamma(t))\\eta.$$

Let X(t) be the fundamental matrix with X(0)=I. The eigenvalues of X(T) are **Floquet multipliers**. Differentiating gamma(t+s) with respect to s at zero shows that gamma'(t)=f(gamma(t)) solves the variational equation and repeats after T. Therefore one multiplier is exactly 1.

For a planar system, Liouville's determinant formula gives

$$\\det X(T)=\\exp\\left(\\int_0^T\\operatorname{div}f(\\gamma(t))\\,dt\\right).$$

Since one multiplier is 1, the other is

$$\\rho=\\exp\\left(\\int_0^T\\operatorname{div}f(\\gamma(t))\\,dt\\right).$$

This positive multiplier equals the derivative of a consistently oriented local return map at its fixed point. A negative integral gives rho<1 and transverse attraction; a positive integral gives rho>1 and repulsion; a zero integral leaves a nonhyperbolic cycle.

The formula is planar and autonomous as stated. In higher dimensions there are several nontrivial multipliers. For a forced system there need not be a neutral multiplier unless clock phase is included in the autonomous extension.


## 9. Exact radial example

In polar coordinates consider

$$r'=r(1-r),\\qquad\\theta'=1,$$

for r>0. The circle r=1 is periodic with minimal period 2pi. Radii below one increase and radii above one decrease, so the cycle is orbitally asymptotically stable away from the equilibrium at r=0.

The radial equation is logistic. Starting at r0, after one turn,

$$P(r_0)=\\frac1{1+(1/r_0-1)e^{-2\\pi}}.$$

Thus P(1)=1 and

$$P'(1)=e^{-2\\pi}<1.$$

The linear radial perturbation eta satisfies eta'=-eta at r=1, giving the same multiplier. Agreement among the exact return map, variational equation, and phase portrait is a structural cross-check.

A trapping annulus 1/2<=r<=3/2 also proves existence without using the explicit solution: r' is positive on the inner circle and negative on the outer circle.


## 10. Centers are not attracting cycles

For the harmonic oscillator

$$q'=p,\\qquad p'=-q,$$

energy H=(q squared+p squared)/2 is constant. Every nonzero energy level is a periodic circle with period 2pi. No one circle attracts a neighboring circle because energy separates them.

More generally, a planar Hamiltonian system

$$q'=H_p,\\qquad p'=-H_q$$

has zero divergence and preserves H. A compact connected regular level component is a closed curve; if the vector field is nonzero there, its orbit is periodic. Such cycles typically occur in families and have transverse multiplier one.

Zero divergence does not prove periodicity. It merely makes the divergence multiplier neutral when a cycle exists. Level sets may be unbounded, contain equilibria, or form separatrices.


## 15. Computing a return map

To approximate a planar return map:

1. define a section by g(z)=0 and an orientation condition gradient g dot f>0;
2. start just after or away from the section to avoid recording time zero;
3. integrate with event location based on a bracket and dense output;
4. record return time and section coordinate;
5. repeat at h, h/2, and h/4 or with tightened tolerances;
6. perturb the section coordinate on both sides to estimate P';
7. compare P' with the integrated divergence multiplier when applicable.

The event-time error and state-integration error are coupled. Linear interpolation across a curved, long step can dominate an otherwise high-order integrator. Report both the event residual |g(z_return)| and refinement of the return coordinate.

For an attracting cycle, discarding a fixed number of periods is not a universal transient rule. Use contraction evidence, multiple starts, and a declared stationarity criterion.


## 16. Periodic shooting and phase conditions

A periodic orbit can be posed as

$$\\Phi_T(z_0)-z_0=0$$

with unknown z0 and T. In the plane this is one two-component vector equation for three scalar unknowns: the two components of z0 and the period T. The missing scalar condition reflects time translation, because shifting z0 along the same orbit gives another representation.

Add a phase condition, for example

$$\\langle z_0-z_{\\mathrm{reference}},f(z_{\\mathrm{reference}})\\rangle=0,$$

or fix a transverse section. Newton correction then solves for the orbit modulo phase. The Jacobian contains the monodromy matrix X(T)-I and a period column f(Phi_T(z0)).

A small shooting residual proves only that one numerical representation nearly closes. It does not prove an exact orbit, uniqueness, stability, or global attraction. Validated shooting additionally bounds the residual and inverse linearization in a neighborhood.


## 17. Period and multiplier audit

For every computed cycle, report:

- the immutable vector field, parameters, state domain, and units;
- the section equation and crossing orientation;
- solver, tolerance or step, event locator, and interpolation order;
- return state, event residual, and period at three refinements;
- a transverse multiplier from the return map or variational equation;
- divergence-integral cross-check in planar autonomous cases;
- invariant or energy drift where an exact invariant exists;
- multiple initial states and transient-discard rule;
- distance-to-cycle definition rather than phase-locked point error;
- explicit separation of existence, uniqueness, stability, and numerical evidence.

For a conservative centre, reporting one attractive-looking spiral without the invariant drift is a failed audit. For a relaxation oscillator, reporting only equally spaced plot points can hide unresolved fast motion.


## Smooth return times follow from transversality

The local return construction has a short implicit-function proof. Assume the vector field is continuously differentiable and the nonconstant periodic orbit has minimal period $T$. Write a section near its base point as the zero set of a continuously differentiable scalar function whose derivative on the flow vector is nonzero there. Parametrise the section smoothly by a coordinate near zero. Evaluate the section function after flowing for time $t$ from that parameterised starting point.

At the base point and time $T$, this scalar expression is zero. Its time derivative is the section normal paired with the nonzero flow vector, hence is nonzero. The implicit function theorem produces a unique nearby return time depending smoothly on the starting coordinate. Substituting that time into the flow gives the smooth return map. To identify it as the first return after leaving the section, shrink the section and use compact separation of the intervening regular orbit segment from the base point, excluding its short initial and final pieces. Tangential contact would destroy the nonzero derivative on which the argument rests.

Differentiating the return identity separates two effects: variation in the initial state and variation in return time. The latter contributes a multiple of the flow vector. Projecting along that vector onto the section tangent removes it. Thus the derivative of the return map is the monodromy action on tangent displacements, taken modulo the phase direction. It is not generally obtained by reading one coordinate entry of the monodromy matrix without this projection.

In the plane choose a basis whose first vector is the flow vector and whose second vector is tangent to the section. The monodromy fixes the first vector. In this basis it is upper triangular, with diagonal entries one and the return derivative. Its determinant is therefore the return derivative. Liouville's positive determinant formula proves that a planar autonomous return map preserves local orientation. In particular its derivative at a regular cycle cannot pass through minus one. A flip bifurcation of an arbitrary interval map is not automatically an available bifurcation of such a planar flow cycle.

## Periodic linear equations admit a Floquet representation

Let a continuous matrix coefficient have period $T>0$, and let its fundamental matrix start at the identity. Uniqueness of the linear initial-value problem gives

$$X(t+T)=X(t)M,\\qquad M=X(T).$$

Both sides solve the same shifted equation and agree at the initial time after the appropriate multiplication. The fundamental matrix is invertible because evolving the linear equation backward in time provides its inverse state transition. Thus the monodromy is invertible too.

Over the complex numbers every invertible matrix has a logarithm. One way to see the finite-dimensional statement is to put it in Jordan form, choose a complex logarithm of each nonzero eigenvalue, and apply the finite nilpotent logarithm series to each Jordan block after factoring out its eigenvalue. Choose such a logarithm and divide it by the period to obtain a constant matrix $B$. Define $P(t)=X(t)e^{-tB}$. The period identity and the commutation of $M=e^{TB}$ with its chosen logarithm imply that this matrix is periodic. Hence

$$X(t)=P(t)e^{tB},\\qquad P(t+T)=P(t).$$

This is a Floquet representation. A complex representation is sufficient for analysing a real equation by complexification. It does not assert that every real monodromy has a real logarithm over the same period. The choice of logarithm is not unique: characteristic exponents can differ by integer multiples of the corresponding imaginary frequency while their multipliers agree. Stability should therefore be expressed first through multiplier magnitudes.

Because the periodic matrix and its inverse are bounded on one compact period, exponential stability of the periodic linear equation is equivalent to all monodromy eigenvalues having magnitude strictly below one. To justify sufficiency, write elapsed time as an integer number of periods plus a bounded remainder. The powers of a matrix whose spectrum is strictly inside the unit circle decay geometrically, with polynomial Jordan factors absorbed by any slightly larger decay factor. The bounded remainder transition only changes the constant. Conversely, an exponentially decaying evolution makes every repeated-period eigenmode decay, forcing each multiplier strictly inside the circle.

At the unit circle, Jordan structure matters. A semisimple unit multiplier can give bounded neutral motion; a nontrivial Jordan block gives polynomial growth along a generalised eigenvector. A list of eigenvalue magnitudes without algebraic structure does not settle boundedness on that boundary.

**Worked example: stable average with alternating instantaneous growth.** Consider the scalar periodic equation $v'=(a+b\\cos t)v$. Its fundamental solution is $\\exp(at+b\\sin t)$. The coefficient has period $2\\pi$, and the multiplier over that period is $\\exp(2\\pi a)$. The periodic factor is $\\exp(b\\sin t)$. When $a<0$ the equation is exponentially stable even if the instantaneous coefficient is positive during part of each period. This exact calculation shows why inspecting one instant of a periodic coefficient is different from examining its one-period evolution.

## A return contraction gives orbital attraction and asymptotic phase

Suppose the scalar return derivative has magnitude less than one. By continuity, choose a smaller section interval on which its derivative has magnitude at most a fixed number $q<1$. The mean value theorem makes the return a contraction toward its fixed point and keeps that smaller interval invariant. Successive section displacements decay at least as $q^k$.

The flow over one return remains in a compact local tube, and the return times are bounded above and below by positive constants near the base period. Continuous differentiability gives a uniform bound converting a small section displacement into a small distance from the intervening orbit segment. Therefore contraction of section intersections gives local orbital attraction in continuous time. The upper return-time bound turns the geometric factor in the return index into an exponential bound in elapsed time. The conclusion uses a regular local tube; it does not describe starts in a distant basin.

Smooth return time also gives asymptotic phase. Let the successive return times differ from the base period by amounts $\\delta_k$. Local Lipschitz dependence bounds each such amount by a constant times the corresponding section displacement, so their absolute sum converges. The cumulative return time is the number of turns times $T$ plus a correction converging to a finite limit. That limiting correction determines a phase shift. The tail of the convergent sum tends to zero, and the within-turn flow bounds then show that the trajectory converges to the appropriately shifted periodic solution.

This proof explains both why phase must be removed from the stability test and why a phase shift can be recovered afterwards. It does not assert convergence to the unshifted clocked orbit. A small persistent frequency error in an approximate model can accumulate a large clock error even when the geometric orbit remains close.

## Hyperbolic cycles persist, while neutral families need another argument

Let the vector field and section depend smoothly on a parameter. The return construction is then smooth jointly in the section coordinate and parameter. A periodic orbit is a fixed point of that return map. If its derivative is different from one, the derivative of the fixed-point equation with respect to the section coordinate is invertible. The implicit function theorem gives a unique nearby fixed-point branch and a smoothly varying period. If the original multiplier lies strictly inside the unit circle, it remains there for sufficiently small parameter changes by continuity.

In higher dimensions the same argument uses the section Jacobian minus the identity. A hyperbolic cycle has no transverse multipliers on the unit circle and automatically meets the fixed-point persistence condition. The condition excluding multiplier one alone gives local persistence, but does not exclude other unit-circle stability changes. These are related but distinct assumptions.

The conservative oscillator family illustrates failure of isolation. Its return derivative is one, so the fixed-point equation has a continuum of solutions rather than one isolated branch. An arbitrarily small dissipative perturbation can turn the centre into a spiral and remove those periodic circles. Calling all of them stable without the orbital and structural qualifications would hide this difference.

## Why the phase-bordered shooting matrix becomes invertible

At a regular periodic solution, let the unit monodromy multiplier be simple and let the chosen phase row have nonzero pairing with the flow vector. The derivative of the periodicity equations with respect to the starting state and period, together with that phase row, has the bordered form

$$\\begin{pmatrix}M-I&f(p)\\\\n^T&0\\end{pmatrix}.$$

To prove invertibility, solve its homogeneous system. A left eigenvector of the monodromy for multiplier one pairs nontrivially with the right eigenvector $f(p)$ when the eigenvalue is simple. Otherwise the right eigenvector would lie in the range of $M-I$, producing a generalised eigenvector and contradicting simplicity. Multiplying the top row by that left eigenvector forces the period correction to vanish. The remaining state correction lies in the kernel of $M-I$, hence is a multiple of the flow vector. The phase row then forces that multiple to vanish. A square finite-dimensional linear map with trivial kernel is invertible.

This proves removal of the phase degeneracy under explicit hypotheses. It does not prove convergence of an arbitrary numerical Newton iteration: that requires a nearby start and control of nonlinear and algebraic errors. Near a second unit multiplier the bordered system can become badly conditioned before exact singularity is reached. Such sensitivity is mathematical information about the periodic solution family, not merely an inconvenience to hide with a loose stopping tolerance.

## Exercises with worked solutions

<a id="periodic-orbits-planar-limits-ex-1"></a>

### 1. Minimal period and self-intersection

Suppose an autonomous solution satisfies z(t1)=z(t2) with t2>t1. What can be concluded?

<details><summary>Hint 1</summary>

Apply uniqueness to the solution restarted at each equal state.

</details>

<details><summary>Hint 2</summary>

The two time-shifted solutions then agree, making their positive time difference a period.

</details>

<details><summary>Full solution</summary>

**Solution.** Uniqueness gives z(t1+s)=z(t2+s) wherever both sides exist. Thus T=t2-t1 is a period of the solution through that point. If the solution is nonconstant, its minimal period divides any return period in the usual integer-multiple sense. A claimed self-intersection before the minimal period contradicts uniqueness.

</details>

<a id="periodic-orbits-planar-limits-ex-2"></a>

### 2. Exact radial multiplier

For r'=r(1-r), theta'=2, find the period and transverse multiplier of r=1.

<details><summary>Hint 1</summary>

Compute one turn from the angular speed before evaluating transverse decay.

</details>

<details><summary>Hint 2</summary>

The radial derivative at radius one is minus one; integrate that scalar rate over the actual period.

</details>

<details><summary>Full solution</summary>

**Solution.** One revolution takes T=2pi/2=pi. Linearizing the radial equation at one gives eta'=-eta, so eta(T)=exp(-pi)eta(0). The transverse multiplier is exp(-pi), strictly below one, hence the cycle is orbitally attracting.

</details>

<a id="periodic-orbits-planar-limits-ex-3"></a>

### 3. Damped oscillators have no cycles

Use Bendixson's criterion for

$$x'=y,\\qquad y'=-x-cy$$

with c>0.

<details><summary>Hint 1</summary>

Compute both partial derivatives entering divergence on the whole plane.

</details>

<details><summary>Hint 2</summary>

A negative constant divergence excludes cycles; convergence uses the separate compact energy argument.

</details>

<details><summary>Full solution</summary>

**Solution.** Divergence is 0-c=-c, strictly negative on the simply connected plane. Therefore no nonconstant periodic orbit exists. The theorem does not by itself prove convergence, but the energy derivative -c y squared plus LaSalle's principle does.

</details>

<a id="periodic-orbits-planar-limits-ex-4"></a>

### 4. A trapping annulus

For r'=r(1-r squared), theta'=1, show that 1/2<=r<=2 traps forward trajectories and infer a periodic orbit.

<details><summary>Hint 1</summary>

Check the radial velocity on both boundaries with the annulus orientation.

</details>

<details><summary>Hint 2</summary>

Angular speed is nonzero everywhere in the positive-radius annulus, so it contains no equilibrium.

</details>

<details><summary>Full solution</summary>

**Solution.** At r=1/2, r'=(1/2)(3/4)>0, pointing into the annulus. At r=2, r'=2(1-4)<0, also pointing inward. The annulus is compact and contains no equilibrium because theta'=1 and r>0. Poincare–Bendixson supplies a periodic orbit. Direct analysis identifies it as r=1, but the trapping proof alone does not establish uniqueness.

</details>

<a id="periodic-orbits-planar-limits-ex-5"></a>

### 5. Why a center is not asymptotically stable

Can the unit circle of the harmonic oscillator attract the circle of radius 1+epsilon?

<details><summary>Hint 1</summary>

Compare the conserved energy of the two circles.

</details>

<details><summary>Hint 2</summary>

A constant difference in radius gives a constant positive distance between their orbit sets.

</details>

<details><summary>Full solution</summary>

**Solution.** No. Energy H=r squared/2 is constant, so the second trajectory remains on its own circle. Its set distance from the unit circle stays |epsilon|. The periodic orbit is orbitally stable within the family but not orbitally asymptotically stable.

</details>

<a id="periodic-orbits-planar-limits-ex-6"></a>

### 6. Verify the predator–prey integral

Differentiate H=d x-c log x+b y-a log y along the Lotka–Volterra field.

<details><summary>Hint 1</summary>

Differentiate each linear and logarithmic term before substituting the equations.

</details>

<details><summary>Hint 2</summary>

Use the per-capita velocities to cancel the mixed and single-population contributions.

</details>

<details><summary>Full solution</summary>

**Solution.** Using x'/x=a-by and y'/y=-c+dx,

$$H'=dx'-c\\frac{x'}x+by'-a\\frac{y'}y=dx(a-by)-c(a-by)+by(-c+dx)-a(-c+dx)=0.$$

The dx, xy, constant, and y terms cancel. Conservation rules out attraction between distinct regular level curves.

</details>

<a id="periodic-orbits-planar-limits-ex-7"></a>

### 7. Return multiplier from divergence

For a planar periodic orbit, suppose integral_0^T divergence f(gamma(t))dt=-0.4. Classify the transverse linear behaviour.

<details><summary>Hint 1</summary>

Liouville gives a positive exponential multiplier for a planar autonomous cycle.

</details>

<details><summary>Hint 2</summary>

A negative integrated divergence makes the transverse multiplier smaller than one, with a local scope.

</details>

<details><summary>Full solution</summary>

**Solution.** The nontrivial multiplier is rho=exp(-0.4), between zero and one. The cycle is transversely linearly attracting and, under the regular hyperbolic-cycle hypotheses used to construct the return map, locally orbitally asymptotically stable. The integral does not establish global attraction.

</details>

<a id="periodic-orbits-planar-limits-ex-8"></a>

### 8. Repair a bounded-orbit claim

“Every bounded trajectory of a planar autonomous ODE approaches a periodic orbit.” Repair the statement.

<details><summary>Hint 1</summary>

Locate the compactness and equilibrium-free hypotheses in the theorem statement.

</details>

<details><summary>Hint 2</summary>

A stable equilibrium or a saddle connection is a counterexample to the unqualified claim.

</details>

<details><summary>Full solution</summary>

**Solution.** Boundedness should be strengthened to compact containment in the flow domain, and the omega-limit set must contain no equilibrium. Under a continuously differentiable unique planar flow, Poincare–Bendixson then says the omega-limit set is a periodic orbit. Stable equilibria and homoclinic networks show why the omitted condition matters.

</details>

<a id="periodic-orbits-planar-limits-ex-9"></a>

### 9. Why periodic shooting needs a phase condition

Explain the singular direction in Phi_T(z0)-z0=0.

<details><summary>Hint 1</summary>

Shift the starting point slightly along the same geometric orbit.

</details>

<details><summary>Hint 2</summary>

Its derivative is the flow vector, which the monodromy fixes; a transverse phase row removes that freedom.

</details>

<details><summary>Full solution</summary>

**Solution.** If z0 represents a cycle, so does Phi_s(z0) for every small phase shift s. Differentiating this family at s=0 gives tangent f(z0), a null direction of the periodicity equations associated with the unit Floquet multiplier. A transverse section or scalar phase condition removes that representation freedom.

</details>

<a id="periodic-orbits-planar-limits-ex-10"></a>

### 10. A refinement table

A computed period is 6.41, 6.287, and 6.2833 at steps h, h/2, and h/4. Is 6.2833 a verified period?

<details><summary>Hint 1</summary>

A finite sequence of decimal values does not include a rigorous remainder estimate.

</details>

<details><summary>Hint 2</summary>

Event location, state integration and exact periodic-orbit existence are separate claims.

</details>

<details><summary>Full solution</summary>

**Solution.** No. The sequence supports convergence, perhaps toward 2pi, but gives neither a rigorous error bound nor proof that an exact cycle exists. Report the section residual, event interpolation, additional refinement, state error benchmark or defect, and structural theorem. If 2pi is conjectured, compare against it without silently treating rounded agreement as equality.

</details>

## Chapter synthesis

A transverse section removes phase, a monodromy matrix records one-period tangent evolution, and Floquet structure separates periodic coordinates from exponential rates. Existence, orbital stability, period selection and numerical closure remain different claims.
`;export{e as default};