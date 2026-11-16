var e=`---
parent_id: book-differential-equations-verified-dynamics
matter_id: glossary-theorem-and-algorithm-finder
title: Glossary, Theorem, and Algorithm Finder
license: CC BY-SA 4.0
---

# Glossary, Theorem, and Algorithm Finder

This finder points to stable chapter identifiers rather than changing page numbers. It is not a substitute for the full theorem statement.

## Foundations and scalar equations

**Absolute stability.** A numerical test-equation property defined by $|R(h \\lambda)|\\leq 1$; it is not Lyapunov stability of the model. See \`verified-computation-long-time\` and \`stiff-geometric-integrators\`.

**Blow-up.** Escape of a solution norm or component in finite time, usually detected through comparison or a reciprocal integral. It is distinct from numerical overflow. See \`scalar-comparison-invariant-regions\`.

**Continuation criterion.** A local solution extends while it remains in a compact subset of the vector field’s domain under the theorem’s regularity. See \`models-wellposedness\` and \`boundary-value-continuation\`.

**Gronwall inequality.** Converts an integral error inequality into an exponential bound. It supports uniqueness and dependence but can be very conservative. See \`models-wellposedness\`, \`scalar-comparison-invariant-regions\`, and \`verified-computation-long-time\`.

**Invariant region.** A set the flow cannot leave under declared boundary direction or comparison hypotheses. See \`scalar-comparison-invariant-regions\`.

**Local Lipschitz condition.** A sufficient state-regularity condition for local uniqueness; continuity alone generally gives only existence. See \`models-wellposedness\`.

**Shooting method.** Converts a boundary-value problem into root finding over initial data. A small shooting residual does not establish uniqueness or global branch coverage. See \`boundary-value-continuation\`.

## Linear and nonlinear dynamics

**Center manifold.** A local invariant graph tangent to center spectrum, used to reduce nonhyperbolic dynamics. It need not be globally unique or globally attracting. See \`center-manifolds-normal-forms\`.

**Floquet multiplier.** Eigenvalue of the period map’s variational matrix. One multiplier is neutral for an autonomous periodic orbit; transverse multipliers determine local orbital behavior. See \`periodic-orbits-planar-limits\`.

**Hartman–Grobman boundary.** Hyperbolic equilibria are locally topologically equivalent to their linearization; nonhyperbolic equilibria require nonlinear analysis. See \`nonlinear-stability-bifurcation\`.

**Hopf bifurcation.** A local periodic-orbit theorem requiring a simple imaginary pair, transverse crossing, spectral isolation, and nonzero first Lyapunov coefficient. See \`periodic-orbits-planar-limits\` and \`center-manifolds-normal-forms\`.

**Lyapunov function.** A scalar function whose sign and orbital derivative certify stability or attraction under domain and invariance conditions. Failure to find one is not evidence of instability. See \`nonlinear-stability-bifurcation\`.

**Matrix exponential.** Fundamental solution $e^{At}$ of a constant linear system, defined by a convergent series or equivalent constructions. See \`linear-systems-phase\`.

**Nonnormal transient growth.** Finite-time norm amplification possible even when every eigenvalue is stable. See \`linear-systems-phase\` and \`robust-sampled-control\`.

**Normal form.** A local polynomial vector field after near-identity coordinate changes removing nonresonant terms through a declared order. See \`center-manifolds-normal-forms\`.

**Poincare–Bendixson theorem.** Restricts compact planar omega-limit sets; an equilibrium-free such limit set is periodic under the stated flow hypotheses. See \`periodic-orbits-planar-limits\`.

**Return map.** A local map from a transverse section to its next intersection, removing the neutral phase direction. See \`periodic-orbits-planar-limits\`.

## Control and optimization

**Controllability.** Exact reachability in the ideal state-space model. Rank may hold while energy and robustness are poor. See \`control-reachability-observation\`.

**Detectability.** Every unobservable mode is stable; sufficient for observer convergence without full observability. See \`control-reachability-observation\`.

**Dynamic programming.** Optimization through the value function and Bellman principle. Its HJB equation may require viscosity solutions. See \`optimal-control-variations\`.

**Input-to-state stability.** A bound separating decaying initial-state influence from persistent input influence. See \`robust-sampled-control\`.

**LQR/Riccati equation.** The finite-horizon linear-quadratic optimum under positive-semidefinite state cost and positive-definite control cost. Infinite-horizon claims need stabilizability and detectability. See \`optimal-control-variations\`.

**Observability.** Ability to distinguish ideal initial states from outputs. Noise and conditioning govern practical recovery. See \`control-reachability-observation\`.

**Pontryagin principle.** State-costate and Hamiltonian necessary conditions for an optimal control, including constrained and abnormal possibilities. See \`optimal-control-variations\`.

**Small-gain theorem.** A sufficient robust-stability result when a product of induced operator gains is below one in a named signal space. See \`robust-sampled-control\`.

**Zero-order hold.** Holds control constant between samples, producing exact matrices $A_d$ and $B_d$. See \`robust-sampled-control\`.

## PDE and variations

**Coercivity.** A lower bound of a bilinear form by a squared norm, central to Lax–Milgram existence. See \`elliptic-parabolic-weak-theory\`.

**Cea lemma.** Bounds conforming Galerkin error by best approximation times continuity/coercivity ratio. It gives no mesh rate without regularity. See \`elliptic-parabolic-weak-theory\` and \`numerical-pde-validation\`.

**Direct method.** Existence architecture using a minimizing sequence, coercivity, weak compactness, constraint closure, and lower semicontinuity. See \`variational-direct-methods\`.

**Entropy solution.** A weak conservation-law solution satisfying admissibility inequalities. See \`hyperbolic-conservation-laws\`.

**Euler–Lagrange equation.** Necessary stationarity equation derived from first variations; not by itself an existence or minimality theorem. See \`variational-direct-methods\`.

**Finite-volume method.** Evolves cell averages through shared numerical face fluxes, giving discrete conservation. See \`hyperbolic-conservation-laws\` and \`numerical-pde-validation\`.

**Galerkin method.** Enforces a weak residual against a finite test space. Stability and approximation properties govern convergence. See \`elliptic-parabolic-weak-theory\`.

**Lax–Milgram theorem.** Gives a unique Hilbert-space weak solution for a bounded coercive bilinear form and bounded functional. See \`elliptic-parabolic-weak-theory\`.

**Rankine–Hugoniot condition.** Conservation balance determining discontinuity speed; entropy is still needed for selection. See \`hyperbolic-conservation-laws\`.

**Reaction–diffusion instability.** Growth of a spatial Laplacian mode although the homogeneous reaction equilibrium is stable. See \`reaction-diffusion-patterns\`.

**Weak derivative.** A derivative defined through test-function integration by parts. See \`elliptic-parabolic-weak-theory\`.

## Numerical algorithms and audits

**A-stability/L-stability.** Left-half-plane stability, with L-stability additionally damping infinitely stiff modes. See \`stiff-geometric-integrators\`.

**Backward error.** Interpretation of a numerical trajectory as solving a nearby modified equation. Formal modified series need not converge. See \`verified-computation-long-time\`.

**CFL condition.** A method-dependent step/mesh restriction reflecting propagation or diffusion stability. See \`hyperbolic-conservation-laws\` and \`numerical-pde-validation\`.

**Manufactured solution.** A chosen exact field used to derive forcing and test code/order; it does not validate a physical model. See \`numerical-pde-validation\`.

**Residual.** Defect in a differential, weak, or algebraic equation. Its interpretation depends on norm, stability, and representation. See \`verified-computation-long-time\` and \`numerical-pde-validation\`.

**Step doubling.** Compares outputs at h, h/2, and h/4 to estimate observed order in an asymptotic regime. See \`verified-computation-long-time\`.

**Symplectic integrator.** Preserves the canonical symplectic form, often nearly preserving a modified Hamiltonian over long regular intervals. See \`stiff-geometric-integrators\`.

**Verification versus validation.** Verification tests correct solution of declared equations; validation tests model relevance to intended use. See \`numerical-pde-validation\`.

## Chaos and statistics

**Birkhoff theorem.** Almost-everywhere convergence of time averages for integrable observables under a measure-preserving transformation; under ergodicity the limit is the space mean. See \`ergodic-theorems-statistics\`.

**Ergodic measure.** An invariant probability whose invariant sets have measure zero or one. See \`ergodic-theorems-statistics\`.

**Horseshoe.** An invariant hyperbolic set with shift-like symbolic dynamics. A folded numerical image is not a proof. See \`chaos-symbolic-entropy\`.

**Invariant measure.** A probability unchanged by pullback under the dynamics. It may be nonunique. See \`ergodic-theorems-statistics\`.

**Lyapunov exponent.** Asymptotic tangent growth rate under differentiability and limiting/measure hypotheses. Finite-time estimates are diagnostics. See \`chaos-symbolic-entropy\`.

**Mixing.** Decay of dependence of separated events/observables; stronger than ergodicity. See \`ergodic-theorems-statistics\`.

**Poincare recurrence.** Almost every point of a positive-measure set returns to that set in a finite measure-preserving system; this is not periodicity or a short-time guarantee. See \`ergodic-theorems-statistics\`.

**Semiconjugacy.** A continuous onto factor map intertwining dynamics but possibly collapsing distinct orbits. See \`chaos-symbolic-entropy\`.

**Topological entropy.** Exponential growth rate of distinguishable orbit segments; distinct from measure-theoretic entropy. See \`chaos-symbolic-entropy\`.

**Transfer operator.** Density-evolution operator dual to Koopman observable evolution. Finite partition approximations require convergence theory. See \`ergodic-theorems-statistics\`.

## Claim finder

- Need local existence or uniqueness: \`models-wellposedness\`.
- Need a global scalar bound or blow-up test: \`scalar-comparison-invariant-regions\`.
- Need boundary solvability or shooting: \`boundary-value-continuation\`.
- Need phase classification or transient linear growth: \`linear-systems-phase\`.
- Need equilibrium or periodic-orbit stability: \`nonlinear-stability-bifurcation\`, \`periodic-orbits-planar-limits\`.
- Need nonhyperbolic reduction: \`center-manifolds-normal-forms\`.
- Need reachability, observation, robustness, or optimal design: [Control Theory](../../control-theory.md), whose available seed readings retain these topics during expansion.
- Need weak PDE existence, shocks, variational minimizers, or spatial patterns: [weak PDE theory](../../pde-weak-theory-waves-patterns.md), with actual sources distinguished from planned continuations.
- Need method choice or PDE error evidence: [Numerical Mathematics](../../numerical-mathematics-error-algorithms.md).
- Need a precise chaos, entropy, ergodic, or statistical statement: [symbolic dynamics](../chaos-symbolic-entropy.md), [invariant measures](../ergodic-theorems-statistics.md) and [attractors/exponents](../attractors-lyapunov-exponents.md).
- Need a proved local hyperbolic classification: [stable manifolds](../hyperbolic-equilibria-stable-manifolds.md) and [Hartman–Grobman](../structural-stability-hartman-grobman.md).
- Need compact planar limits and divergence/trapping arguments: [Planar Limit Sets](../planar-limit-sets.md).

## Theorem dependency and failure-boundary matrix

Use this matrix when retrieving a result from memory. Each entry names the minimum contract to recheck and one conclusion the result does not supply.

### 1. Local contraction solution

**Retrieve from:** \`models-wellposedness\`.

**Contract.** The vector field is continuous in time, locally Lipschitz in state on a closed rectangle or tube, and the Picard operator maps a complete closed function-space ball into itself with contraction factor below one.

**Gives.** One local integral/classical solution and uniqueness within the theorem’s class, together with dependence bounds when the constants are controlled.

**Does not give.** Global existence, empirical adequacy, a closed form, or uniqueness after the path reaches a domain boundary.

### 2. Scalar comparison

**Retrieve from:** \`scalar-comparison-invariant-regions\`.

**Contract.** Ordered scalar dynamics, regularity sufficient for the chosen comparison theorem, compatible initial ordering, and correct inequality direction at possible first contact.

**Gives.** A forward order bound while both solutions exist in the comparison domain.

**Does not give.** Vector comparison without a quasimonotone structure, or continuation unless the bound also prevents every escape mechanism.

### 3. Boundary-value uniqueness

**Retrieve from:** \`boundary-value-continuation\`.

**Contract.** The boundary operator, solution class, coefficients, and nonresonance/coercivity assumptions match the theorem; IVP uniqueness alone is insufficient.

**Gives.** Uniqueness for that boundary problem, often through an energy identity, Green operator, or invertible shooting derivative.

**Does not give.** Existence at resonance, uniqueness on other branches, or stable numerical recovery from an ill-conditioned shooting map.

### 4. Linear phase classification

**Retrieve from:** \`linear-systems-phase\`.

**Contract.** A constant real matrix and an equilibrium translated to zero; eigenvalue multiplicity and Jordan/nonnormal structure are included.

**Gives.** Exact linear asymptotics and invariant subspaces.

**Does not give.** Nonlinear conclusions at nonhyperbolic equilibria or small transient amplification from stable eigenvalues alone.

### 5. Lyapunov stability certificate

**Retrieve from:** \`nonlinear-stability-bifurcation\`.

**Contract.** V is positive definite on a named neighborhood; its orbital derivative has the required sign; the relevant sublevel set stays inside the domain. Attraction generally needs a strict sign or an invariant-set theorem.

**Gives.** A local stability or attraction conclusion within the certified set.

**Does not give.** The largest basin, robustness to arbitrary model perturbation, or instability when no candidate V was found.

### 6. Planar periodic-limit theorem

**Retrieve from:** \`periodic-orbits-planar-limits\`.

**Contract.** A unique continuously differentiable planar flow, a precompact forward orbit, and an omega-limit set containing no equilibrium.

**Gives.** A periodic omega-limit set.

**Does not give.** Uniqueness or stability of the cycle, higher-dimensional analogues, or a finite numerical period error.

### 7. Center reduction

**Retrieve from:** \`center-manifolds-normal-forms\`.

**Contract.** A sufficiently smooth vector field, spectral split, local coordinates, and an invariance residual controlled to a declared order.

**Gives.** Local reduced dynamics and a center-manifold jet through the justified order.

**Does not give.** A unique global manifold, dynamics after exit, or correctness of a normal-form coefficient computed with an unresolved small divisor.

### 8. Controllability/observability rank tests

**Retrieve from:** \`control-reachability-observation\`.

**Contract.** A declared finite-dimensional linear time-invariant state-space model with consistent scaling and exact or uncertainty-aware rank.

**Gives.** Ideal finite-horizon reachability or distinguishability.

**Does not give.** Low energy, robustness, constraint feasibility, noise resistance, or validity of the state representation.

### 9. Robust Lyapunov margin

**Retrieve from:** \`robust-sampled-control\`.

**Contract.** A positive-definite Lyapunov solution, a named norm, and perturbations inside the exact additive/structured uncertainty set used in the inequality.

**Gives.** A sufficient uniform stability radius.

**Does not give.** The exact margin; failure of the sufficient inequality does not prove instability.

### 10. Optimal-control conditions

**Retrieve from:** \`optimal-control-variations\`.

**Contract.** Well-posed state dynamics, admissible measurable controls, differentiability/constraint qualifications, endpoint conditions, and a consistent Hamiltonian sign.

**Gives.** Necessary extremal conditions. Convex LQR or a valid HJB verification theorem can add sufficiency.

**Does not give.** Global optimality from a solved two-point boundary system alone.

### 11. PDE energy uniqueness

**Retrieve from:** \`pde-energy-fourier\`.

**Contract.** A named domain and solution class, enough regularity or weak justification for testing by the solution/difference, and all boundary work terms retained.

**Gives.** Uniqueness or stability when the resulting energy inequality closes.

**Does not give.** Existence, regularity, or correct boundary modeling.

### 12. Lax–Milgram weak solution

**Retrieve from:** \`elliptic-parabolic-weak-theory\`.

**Contract.** A Hilbert trial space, bounded coercive bilinear form, and bounded linear functional.

**Gives.** One weak solution and a norm estimate.

**Does not give.** Classical derivatives, pointwise boundary values, or a mesh convergence rate.

### 13. Entropy shock selection

**Retrieve from:** \`hyperbolic-conservation-laws\`.

**Contract.** A scalar conservation law, declared flux and data, distributional balance, and the relevant entropy inequality/convex-flux framework.

**Gives.** Admissible uniqueness and shock/rarefaction selection in that theory.

**Does not give.** A componentwise theorem for systems or convergence of an arbitrary conservative discretization.

### 14. Direct-method minimizer

**Retrieve from:** \`variational-direct-methods\`.

**Contract.** A bounded-below functional, coercive minimizing sequence, weak compactness, weakly closed admissible set, and weak lower semicontinuity.

**Gives.** Attainment of the infimum.

**Does not give.** Uniqueness without strict convexity or smooth Euler–Lagrange regularity.

### 15. Turing instability

**Retrieve from:** \`reaction-diffusion-patterns\`.

**Contract.** A reaction-stable homogeneous equilibrium, positive declared diffusion, a valid Laplacian spectrum, and at least one admissible spatial eigenvalue making the mode matrix unstable.

**Gives.** Linear instability of the homogeneous state to a spatial mode.

**Does not give.** A stable nonlinear pattern, its final wavelength, or a biological mechanism validated by data.

### 16. One-step convergence

**Retrieve from:** \`verified-computation-long-time\`.

**Contract.** Consistency, a stability/Lipschitz estimate on a fixed interval, sufficient exact-solution smoothness, and exact/numerically controlled step operations.

**Gives.** Global error convergence on the stated fixed horizon.

**Does not give.** Reliable chaotic phase forever or small model error.

### 17. Geometric long-time behavior

**Retrieve from:** \`stiff-geometric-integrators\`.

**Contract.** Canonical Hamiltonian structure, a symplectic method, smooth regular dynamics, and step/nonresonance assumptions used by backward-error theory.

**Gives.** Preservation of symplectic form and often bounded modified-energy behavior over a long conditional interval.

**Does not give.** Exact energy, exact phase, collision handling, or eternal accuracy.

### 18. PDE discretization convergence

**Retrieve from:** \`numerical-pde-validation\`.

**Contract.** Consistency, stability/coercivity/entropy structure appropriate to the scheme, boundary consistency, approximation regularity, and algebraic errors below the discretization scale.

**Gives.** Convergence in a specified norm or output when an applicable theorem closes.

**Does not give.** Physical model validation or convergence in a stronger unproved norm.

### 19. Symbolic chaos package

**Retrieve from:** \`chaos-symbolic-entropy\`.

**Contract.** A verified invariant set and conjugacy or precisely bounded semiconjugacy to a shift, with topology and coding stated.

**Gives.** Shift-derived orbit complexity, periodic points, transitivity, and entropy conclusions allowed by the coding strength.

**Does not give.** A global chaotic attractor or a physical invariant measure from a finite itinerary plot.

### 20. Ergodic time averages

**Retrieve from:** \`ergodic-theorems-statistics\`.

**Contract.** A named invariant probability, a measure-preserving transformation, and an integrable observable; ergodicity is required to identify the limit with the global space mean.

**Gives.** Almost-everywhere asymptotic convergence.

**Does not give.** A generic finite-time rate, convergence for every initial state, mixing, a CLT, or invariance of the numerical integrator.

## Algorithm selection and verification matrix

**Smooth nonstiff IVP.** Begin with an adaptive explicit Runge–Kutta method. Verify fixed-output tolerance refinement, event residuals, and an exact/invariant benchmark. Switch only after diagnosing stability or cost, not because “implicit is safer.”

**Stiff dissipative IVP.** Use an L-stable implicit method or a justified IMEX split. Audit Jacobian/linear solves, rejected steps, fast-mode damping, and output refinement. A-stable trapezoidal oscillation is a specific failure test.

**Hamiltonian trajectory.** Use a symplectic splitting or Runge–Kutta method compatible with the Hamiltonian. Report energy and phase separately, plus symplectic/reversibility defects and long-horizon step refinement.

**Periodic orbit.** Combine event-located return maps or shooting with a phase condition and variational equation. Report closure residual, event residual, period refinement, and transverse multiplier; numerical closure alone is not existence.

**Linear feedback.** Form exact continuous or zero-order-held matrices, run controllability/observability tests with scaling, design the gain, and then stress saturation, delay, uncertainty, intersample peaks, and state-estimation error.

**Coercive elliptic PDE.** Use conforming finite elements or a compatible difference/volume method. Report energy residual, mesh quality, estimator or manufactured convergence, boundary flux, and output error. Algebraic residual is only one row.

**Parabolic diffusion.** Choose time stepping jointly with the spatial spectrum. Explicit methods need a mesh-dependent restriction; implicit stability does not ensure positivity or time accuracy. Refine time and space independently.

**Scalar conservation law.** Use a consistent conservative entropy-aware finite-volume flux under its CFL condition. Report mass, bounds, entropy residual, L1 refinement, and shock position.

**Reaction–diffusion pattern.** Compute continuous and discrete mode growth first, seed controlled modal perturbations, check positivity/mass, and refine the physical mesh. Final texture is not a linear theorem.

**Chaotic or ergodic output.** Treat trajectory, tangent growth, and statistics as different outputs. Refine step/precision, divide horizons into blocks, use multiple basins, report defects and dependence, and cite a theorem before assigning asymptotic confidence intervals.
`;export{e as default};