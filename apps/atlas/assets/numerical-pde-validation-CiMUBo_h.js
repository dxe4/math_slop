var e=`---
parent_id: book-differential-equations-verified-dynamics
chapter_id: numerical-pde-validation
title: Numerical PDEs and Validation
level: advanced-undergraduate
estimated_minutes: 320
license: CC BY-SA 4.0
---

# Numerical PDEs and Validation

A PDE computation couples a continuous model, spatial representation, time method, algebraic solver, and output functional. Refining only one layer can create false confidence. This chapter connects finite differences, volumes, and elements through consistency, stability, conservation, residuals, and independent benchmarks.

## 1. Discrete problem ledger

Record domain geometry, coefficients, initial and boundary data, solution class, mesh cells and quality, basis/reconstruction, quadrature, numerical flux, time method, tolerances, linear/nonlinear solvers, precision, and requested output. Boundary implementation is part of the method, not post-processing.

## 2. Finite differences

On a uniform grid,

$$u_{xx}(x_j)\\approx\\frac{u_{j-1}-2u_j+u_{j+1}}{h^2}$$

with second-order local truncation error for four-times differentiable u. At a corner, interface, or nonsmooth solution, this Taylor claim can fail. Consistency means the discrete residual of a sufficiently smooth exact solution tends to zero; it does not imply convergence without stability.

For heat flow with forward Euler, $r=k dt/h^2$, the update is

$$U_j^{n+1}=(1-2r)U_j^n+rU_{j-1}^n+rU_{j+1}^n.$$

When $0\\leq r\\leq 1/2$, it is a convex combination, giving maximum-norm stability and positivity. Crank–Nicolson is unconditionally linearly stable but can oscillate for unresolved nonsmooth modes.

## 3. Finite volume

Integrate conservation laws over control volumes and approximate face fluxes. Shared fluxes cancel exactly, preserving global balance up to boundary flux and solve tolerance. Consistency, entropy stability, invariant domains, and shock resolution are separate. Mesh refinement comparisons should project both solutions to a common representation and use norms suitable for discontinuities.

## 4. Finite elements

Choose conforming $V_h$ and solve the weak form. For bounded coercive linear elliptic problems, Céa’s lemma bounds the trial-space norm error by the best approximation times the continuity/coercivity ratio. For a symmetric positive-definite form, Galerkin orthogonality gives exact best approximation in the energy norm. Aubin–Nitsche duality can give a higher L2 rate only if the dual problem has sufficient regularity. Adaptive methods estimate local residual contributions, mark, refine, and repeat. An estimator needs reliability/efficiency theory or calibration.

## 5. Method of manufactured solutions

Choose smooth u, substitute it into the PDE to derive forcing and compatible boundary/initial data, then compare numerically. This tests code paths and designed order. It does not validate the physical model or demonstrate performance for shocks, singular corners, discontinuous coefficients, or unknown exact data.

## 6. Grid convergence and error budgets

For scalar output $Q_h=Q+C h^p+\\dots$, three grids estimate

$$p_{\\mathrm{obs}}=\\log_2\\frac{|Q_h-Q_{h/2}|}{|Q_{h/2}-Q_{h/4}|}.$$

Time error, iteration error, quadrature, geometry, and roundoff must be smaller or refined independently. Near cancellation, the ratio is unreliable. Report raw values and differences, not just p_obs.

## 7. Residual and conservation checks

An algebraic residual tests the assembled discrete equations. A strong PDE residual may be undefined for low-order finite elements; element residuals and flux jumps form an a posteriori indicator. Global mass can be exact while local solution is wrong. Energy, entropy, positivity, boundary flux, and benchmark outputs provide independent axes.

## 8. Validation versus verification

**Verification** asks whether equations were solved correctly. **Validation** asks whether those equations represent the intended system for the use. Parameter calibration on the same data is not validation. Compare against held-out regimes, quantify observational and model discrepancy, and avoid turning numerical precision into physical certainty.

## Exercises with complete worked solutions

### 1. Difference order
What smoothness supports the centered second derivative’s second order?

**Solution.** A bounded fourth derivative near the stencil supports the Taylor remainder giving order h squared.

### 2. Heat CFL
With k=3,h=0.1, bound dt for explicit heat stepping.

**Solution.** $3dt/0.01\\leq 1/2$, so $dt\\leq 1/600$, approximately 0.001667.

### 3. Convex combination
Why does the heat update preserve bounds under CFL?

**Solution.** Its nonnegative weights sum to one, so each new value lies between neighboring old extrema.

### 4. Crank–Nicolson boundary
Does unconditional stability mean monotonicity?

**Solution.** No. Its stiff multiplier approaches -1, so nonsmooth high-frequency modes may alternate.

### 5. Conservation cancellation
Why use one shared face flux?

**Solution.** The same number leaves one cell and enters its neighbor, so interior contributions cancel exactly.

### 6. Cea conclusion
What must be added for an h-rate?

**Solution.** Solution regularity, element degree, and mesh approximation estimates converting best approximation into a power of h.

### 7. Duality boundary
Why might L2 superconvergence fail on a reentrant corner?

**Solution.** The dual elliptic solution may lack the regularity required by the Aubin–Nitsche estimate.

### 8. Manufactured forcing
For heat equation $u_t-u_xx=f$, choose $u=e^{-t}\\sin(\\pi x)$. Find f.

**Solution.** $u_t=-e^{-t}\\sin(\\pi x)$ and $u_xx=-\\pi^2e^{-t}\\sin(\\pi x)$, so $f=(\\pi^2-1)e^{-t}\\sin(\\pi x)$.

### 9. Boundary compatibility
What boundary data accompany Exercise 8 on $(0,1)$?

**Solution.** Homogeneous Dirichlet values because sin(pi x) vanishes at both endpoints; initial data are sin(pi x).

### 10. Observed order
Differences are 0.04 and 0.01. Estimate p.

**Solution.** $\\log2(4)=2$, consistent with second order if other errors are smaller and the asymptotic regime holds.

### 11. Cancellation warning
If both differences are near roundoff, is p meaningful?

**Solution.** No. Ratios amplify noise; use higher precision or a different output/grid range.

### 12. Solver residual
Does $\\lVert Ax-b\\rVert=10^{-12}$ bound PDE error?

**Solution.** Only algebraic error relative to scaling/conditioning is addressed. Discretization and model errors remain.

### 13. Common grid
Why project solutions before comparison?

**Solution.** Values from different meshes represent different discrete functions; a declared projection/interpolation prevents comparing unrelated coordinates.

### 14. Shock norm
Which common norm is robust to small shock shifts?

**Solution.** L1; pointwise or maximum errors remain order one near a shifted discontinuity.

### 15. Adaptive marking
What does a large local indicator prove?

**Solution.** It identifies a large term in the chosen estimator, not necessarily exact local error unless reliability/efficiency theory applies.

### 16. Mass-only failure
Can a constant wrong solution conserve mass?

**Solution.** Yes. Global conservation is one scalar constraint and cannot determine the field.

### 17. Verification benchmark
Name two independent benchmarks.

**Solution.** A manufactured smooth solution and an exact Riemann/energy balance test exercise different code structures.

### 18. Validation split
Why hold out regimes?

**Solution.** Fitting and evaluating on the same observations measures calibration flexibility, not predictive adequacy under new conditions.

### 19. Geometry error
Can refining elements fix a wrongly specified domain?

**Solution.** No. It converges more accurately to the PDE on the wrong geometry unless the geometry representation itself converges to the intended domain.

### 20. Claim repair
Repair: “Three meshes agree, so the simulation is validated.”

**Solution.** Agreement supports numerical verification for a declared output if other errors are controlled. Model validation additionally requires relevant independent empirical comparison and uncertainty assessment.

## Chapter synthesis

Finite differences approximate derivatives, finite volumes preserve flux balance, and finite elements approximate weak solutions. Manufactured solutions, refinement, residuals, invariants, and independent benchmarks form a verification matrix; physical validation remains a separate evidence problem.

## Dependency ledger

- Taylor consistency needs solution smoothness.
- Stability restrictions depend on PDE, method, mesh, and norm.
- Finite-element rates require primal and sometimes dual regularity.
- Residuals must match the discrete/weak representation.
- Verification controls numerical error; validation addresses model relevance.
`;export{e as default};