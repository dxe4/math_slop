var e=`---
parent_id: book-differential-equations-verified-dynamics
matter_id: retained-periodic-planar-reading
title: Periodic Orbits and Planar Limit Sets
level: graduate
estimated_minutes: 320
license: CC BY-SA 4.0
---

# Periodic Orbits and Planar Limit Sets

An equilibrium repeats because it never moves. A periodic orbit repeats while moving, and this small distinction changes the right notion of stability. A nearby trajectory need not return to the same point at the same clock time; it may approach the same closed curve with a shifted phase.

This chapter develops the tools special to continuous planar flows: transverse return maps, Floquet multipliers, divergence exclusions, trapping regions, and the Poincare–Bendixson alternative. It also separates conservative families of closed curves from isolated attracting cycles and turns numerical pictures into auditable period claims.

Prerequisites are matrix flows and planar classification from [Linear Systems and Phase Geometry](#/item/book-differential-equations-verified-dynamics?chapter=linear-systems-phase), invariant sets and Lyapunov arguments from [Nonlinear Stability and Bifurcation](#/item/book-differential-equations-verified-dynamics?chapter=nonlinear-stability-bifurcation), and continuation from [Models, Well-Posedness, and Continuation](#/item/book-differential-equations-verified-dynamics?chapter=models-wellposedness).

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

## 5. Bendixson's divergence exclusion

Suppose f is continuously differentiable on a simply connected planar region D and divergence f has one sign throughout D and is not identically zero on any open subset relevant to the argument. Then no periodic orbit lies entirely in D.

**Proof.** If Gamma were a periodic orbit, its simplicity would bound a region R contained in D. Along Gamma, f is tangent, so the outward flux is zero:

$$\\int_\\Gamma f\\cdot n\\,ds=0.$$

The divergence theorem gives

$$\\iint_R\\operatorname{div}f\\,dA=0,$$

contradicting the one-sign hypothesis.

Simple connectivity matters because the interior of Gamma must remain in the region where the divergence hypothesis holds. A puncture can hide an excluded equilibrium or singularity.

Constant negative divergence rules out cycles; it does not by itself prove that every solution approaches an equilibrium. Solutions can escape, reach a domain boundary, or have other limiting behavior when compactness is absent.

## 6. Dulac multipliers

Raw divergence often changes sign. Choose a continuously differentiable scalar B and apply the flux argument to the modified field Bf. If

$$\\operatorname{div}(Bf)$$

has one strict sign on a simply connected region and Bf has the required regularity, the **Bendixson–Dulac criterion** excludes periodic orbits there.

B is an analytical multiplier, not a time rescaling that may be ignored at its zeros or singularities. The theorem region must exclude such points and remain simply connected, or the boundary calculation needs additional terms.

For the positive-quadrant competitive system

$$x'=x(a-bx-cy),\\qquad y'=y(d-ex-fy),$$

take B=1/(xy). Then

$$Bx'=\\frac ay-\\frac{bx}y-c,\\qquad By'=\\frac dx-e-\\frac{fy}x,$$

and

$$\\operatorname{div}(Bf)=-\\frac by-\\frac fx<0$$

when b and f are positive. Thus there is no periodic orbit contained in the positive quadrant. A bounded positive trajectory still needs a limit-set argument before one concludes convergence to an equilibrium.

## 7. The Poincare–Bendixson theorem

The plane has a remarkable restriction unavailable in dimension three.

**Poincare–Bendixson theorem, useful form.** Let f be continuously differentiable and let the positive orbit of z0 remain in a compact subset of the open flow domain. If its omega-limit set contains no equilibrium, then that omega-limit set is a periodic orbit.

The omega-limit set consists of limits of Phi_{t_n}(z0) along sequences t_n tending to infinity. Compact containment supplies nonemptiness and continuation. Planar noncrossing and local transverse sections prevent an equilibrium-free recurrent set from weaving with arbitrary complexity.

The theorem does not say every bounded planar trajectory approaches a cycle. Its omega-limit set may contain:

- a stable or nonhyperbolic equilibrium;
- equilibria joined by homoclinic or heteroclinic connections;
- a periodic orbit;
- in more detailed variants, a connected graph of equilibria and connecting orbits under additional finiteness assumptions.

It does not apply directly to discrete maps, nonunique flows, projected higher-dimensional systems, delay equations, or three-dimensional ODEs. Planar autonomous ODEs cannot support a compact equilibrium-free strange attractor, but a planar discrete map can.

## 8. Trapping annuli produce cycles

Let A be a compact annular region contained in the flow domain. Suppose the vector field points strictly into A on both boundary curves and A contains no equilibrium. Every trajectory starting in A remains there. Its omega-limit set is nonempty, compact, and contains no equilibrium, so Poincare–Bendixson supplies a periodic orbit in A.

This is an existence proof, not a uniqueness proof. Several nested cycles can occupy one trapping region. Nor does inward pointing automatically give attraction from both sides of a particular cycle.

For a boundary described by g(z)=constant, inward direction is checked by

$$\\frac{d}{dt}g(\\Phi_t(z))=\\nabla g(\\Phi_t(z))\\cdot f(\\Phi_t(z)).$$

The sign reverses between inner and outer boundaries of an annulus. Drawing arrows by eye is not a substitute for evaluating both signs.

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

## 11. Predator–prey closed curves

The Lotka–Volterra system

$$x'=x(a-by),\\qquad y'=y(-c+dx)$$

with positive parameters preserves

$$H(x,y)=dx-c\\log x+by-a\\log y$$

in the positive quadrant. Direct differentiation gives H'=0. The positive equilibrium is (c/d,a/b), and H has a strict minimum there. Nearby regular level curves are closed and produce periodic solutions.

These cycles are neutral, not attracting. A simulated spiral usually signals numerical energy drift, insufficient resolution, or a modified model. Biological data also require observation and process assumptions; an exact first integral of the ideal model is not empirical validation.

Adding self-limitation can destroy the conserved family and create convergence to an equilibrium. Small structural changes can therefore alter the long-time mechanism, not merely the numerical values.

## 12. Isolated cycles and the van der Pol mechanism

For

$$x'=y,\\qquad y'=\\mu(1-x^2)y-x,$$

with mu>0, the quadratic energy E=(x squared+y squared)/2 satisfies

$$E'=\\mu(1-x^2)y^2.$$

Energy is injected when |x|<1 and removed when |x|>1. This explains why small motions tend to grow and sufficiently large motions tend to contract. The sign-changing energy derivative alone does not construct a trapping annulus or prove uniqueness.

The Lienard theorem, after verifying its symmetry, monotonicity, and growth hypotheses for this specific equation, gives one stable periodic orbit for every mu>0. For large mu, slow segments and fast jumps create a relaxation oscillation. A uniform time grid can underresolve those jumps even when the plotted loop looks smooth.

The logical order is:

1. an inward trapping argument supplies compactness;
2. equilibrium analysis rules out an equilibrium omega-limit for a selected orbit;
3. Poincare–Bendixson supplies a cycle;
4. a Lienard or return-map argument supplies uniqueness and stability.

Each step answers a different question.

## 13. Hopf bifurcation is a local cycle theorem

An equilibrium with eigenvalues plus or minus i omega at one parameter value is not enough to assert a Hopf bifurcation. A standard local theorem also requires:

- a smooth parameterized vector field;
- a simple conjugate eigenvalue pair and no other imaginary-axis eigenvalues;
- transverse crossing of the real parts through zero;
- a nonzero first Lyapunov coefficient.

Under these nondegeneracy conditions, a branch of small periodic orbits emerges on one side of the parameter. The first Lyapunov coefficient determines the leading amplitude equation and, together with crossing direction, the cycle's stability.

If the coefficient vanishes, higher-order terms decide. If a conserved quantity forces a center, a whole family of cycles may exist without an isolated Hopf branch. Eigenvalue pictures cannot distinguish these cases by themselves.

## 14. Homoclinic loops are not periodic orbits

A homoclinic trajectory approaches the same equilibrium as time tends to both negative and positive infinity. Its image may form a closed-looking loop, but the equilibrium is reached only asymptotically, so the moving trajectory has no finite period.

A heteroclinic connection joins distinct equilibria. Networks of such connections can be omega-limit sets when equilibria are present, precisely the case excluded from the simple Poincare–Bendixson conclusion.

Near a separatrix, an apparent oscillation period can grow without bound. Numerical event detection may falsely close the loop if a solver steps across a stable manifold or rounds a near-equilibrium state.

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

For every computed cycle, publish:

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

For a conservative center, reporting one attractive-looking spiral without the invariant drift is a failed audit. For a relaxation oscillator, reporting only equally spaced plot points can hide unresolved fast motion.

## Exercises with worked solutions

### 1. Minimal period and self-intersection

Suppose an autonomous solution satisfies z(t1)=z(t2) with t2>t1. What can be concluded?

**Solution.** Uniqueness gives z(t1+s)=z(t2+s) wherever both sides exist. Thus T=t2-t1 is a period of the solution through that point. If the solution is nonconstant, its minimal period divides any return period in the usual integer-multiple sense. A claimed self-intersection before the minimal period contradicts uniqueness.

### 2. Exact radial multiplier

For r'=r(1-r), theta'=2, find the period and transverse multiplier of r=1.

**Solution.** One revolution takes T=2pi/2=pi. Linearizing the radial equation at one gives eta'=-eta, so eta(T)=exp(-pi)eta(0). The transverse multiplier is exp(-pi), strictly below one, hence the cycle is orbitally attracting.

### 3. Damped oscillators have no cycles

Use Bendixson's criterion for

$$x'=y,\\qquad y'=-x-cy$$

with c>0.

**Solution.** Divergence is 0-c=-c, strictly negative on the simply connected plane. Therefore no nonconstant periodic orbit exists. The theorem does not by itself prove convergence, but the energy derivative -c y squared plus LaSalle's principle does.

### 4. A trapping annulus

For r'=r(1-r squared), theta'=1, show that 1/2<=r<=2 traps forward trajectories and infer a periodic orbit.

**Solution.** At r=1/2, r'=(1/2)(3/4)>0, pointing into the annulus. At r=2, r'=2(1-4)<0, also pointing inward. The annulus is compact and contains no equilibrium because theta'=1 and r>0. Poincare–Bendixson supplies a periodic orbit. Direct analysis identifies it as r=1, but the trapping proof alone does not establish uniqueness.

### 5. Why a center is not asymptotically stable

Can the unit circle of the harmonic oscillator attract the circle of radius 1+epsilon?

**Solution.** No. Energy H=r squared/2 is constant, so the second trajectory remains on its own circle. Its set distance from the unit circle stays |epsilon|. The periodic orbit is orbitally stable within the family but not orbitally asymptotically stable.

### 6. Verify the predator–prey integral

Differentiate H=d x-c log x+b y-a log y along the Lotka–Volterra field.

**Solution.** Using x'/x=a-by and y'/y=-c+dx,

$$H'=dx'-c\\frac{x'}x+by'-a\\frac{y'}y=dx(a-by)-c(a-by)+by(-c+dx)-a(-c+dx)=0.$$

The dx, xy, constant, and y terms cancel. Conservation rules out attraction between distinct regular level curves.

### 7. Return multiplier from divergence

For a planar periodic orbit, suppose integral_0^T divergence f(gamma(t))dt=-0.4. Classify the transverse linear behavior.

**Solution.** The nontrivial multiplier is rho=exp(-0.4), between zero and one. The cycle is transversely linearly attracting and, under the regular hyperbolic-cycle hypotheses used to construct the return map, locally orbitally asymptotically stable. The integral does not establish global attraction.

### 8. Repair a bounded-orbit claim

“Every bounded trajectory of a planar autonomous ODE approaches a periodic orbit.” Repair the statement.

**Solution.** Boundedness should be strengthened to compact containment in the flow domain, and the omega-limit set must contain no equilibrium. Under a continuously differentiable unique planar flow, Poincare–Bendixson then says the omega-limit set is a periodic orbit. Stable equilibria and homoclinic networks show why the omitted condition matters.

### 9. Why periodic shooting needs a phase condition

Explain the singular direction in Phi_T(z0)-z0=0.

**Solution.** If z0 represents a cycle, so does Phi_s(z0) for every small phase shift s. Differentiating this family at s=0 gives tangent f(z0), a null direction of the periodicity equations associated with the unit Floquet multiplier. A transverse section or scalar phase condition removes that representation freedom.

### 10. A refinement table

A computed period is 6.41, 6.287, and 6.2833 at steps h, h/2, and h/4. Is 6.2833 a verified period?

**Solution.** No. The sequence supports convergence, perhaps toward 2pi, but gives neither a rigorous error bound nor proof that an exact cycle exists. Report the section residual, event interpolation, additional refinement, state error benchmark or defect, and structural theorem. If 2pi is conjectured, compare against it without silently treating rounded agreement as equality.

## Chapter synthesis

- A periodic orbit is a geometric closed trajectory; phase makes its stability orbital.
- A transverse return map removes the neutral flow direction.
- The planar nontrivial multiplier is the exponential of integrated divergence.
- Bendixson–Dulac excludes cycles; it does not produce convergence without compactness and limit-set logic.
- Poincare–Bendixson turns a compact equilibrium-free omega-limit set into a cycle.
- Conservative systems can have families of neutral cycles; dissipative systems can have isolated attracting cycles.
- Hopf, Lienard, trapping, and shooting arguments answer distinct existence, uniqueness, and stability questions.
- Numerical closure, period, and multiplier claims require event, refinement, residual, and structural audits.

## Dependency ledger

- Uniqueness prevented trajectory crossing and made periodic planar orbits simple.
- Compact continuation made omega-limit sets nonempty and kept the theorem inside its flow domain.
- Transversality and smooth dependence constructed the local return map.
- The variational equation and Liouville formula produced Floquet multipliers.
- The divergence theorem powered Bendixson–Dulac exclusions.
- Poincare–Bendixson used planar topology and the absence of equilibria.
- First integrals distinguished conservative centers from attracting limit cycles.
- Trapping, nondegeneracy, and phase conditions remained separate hypotheses rather than consequences of a plot.
`;export{e as default};