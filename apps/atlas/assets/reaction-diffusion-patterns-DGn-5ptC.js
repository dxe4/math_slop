var e=`---
parent_id: book-differential-equations-verified-dynamics
chapter_id: reaction-diffusion-patterns
title: Reaction-Diffusion and Pattern Selection
level: advanced-undergraduate
estimated_minutes: 320
license: CC BY-SA 4.0
---

# Reaction-Diffusion and Pattern Selection

Diffusion smooths each species, yet coupled diffusion can destabilize a reaction-stable equilibrium. This chapter derives the spectral test for diffusion-driven instability, distinguishes linear mode growth from nonlinear pattern existence, and audits simulations against domain, boundary, mesh, and positivity choices.

## 1. Model and homogeneous equilibrium

For two fields on a bounded domain,

$$u_t=d_u\\Delta u+f(u,v),\\qquad v_t=d_v\\Delta v+g(u,v),$$

specify positive diffusivities, boundary conditions, domain, units, and initial data. A spatially homogeneous equilibrium $(u_*,v_*)$ satisfies $f=g=0$. Reaction stability is determined by the Jacobian

$$J=\\left.\\begin{pmatrix}f_u&f_v\\\\g_u&g_v\\end{pmatrix}\\right|_{(u_*,v_*)}.$$

For the two-by-two **linearized** reaction system, $\\operatorname{Tr}J<0$ and $\\det J>0$ are exactly the Hurwitz conditions. For a nonlinear reaction equilibrium they imply local asymptotic stability under the usual differentiability hypothesis, but they are not necessary: nonhyperbolic equilibria with zero-real-part eigenvalues can still be asymptotically stable by nonlinear terms.

## 2. Laplacian modes

Let $-\\Delta \\phi_k=\\lambda_k \\phi_k$ under the declared boundary condition, with $\\lambda_k\\geq 0$. Linear perturbations proportional to phi_k evolve under

$$M_k=J-\\lambda_kD,\\qquad D=\\operatorname{diag}(d_u,d_v).$$

Under periodic or no-flux boundary conditions, a compatible spatially homogeneous equilibrium is admissible and the homogeneous mode has $\\lambda_0=0$. Homogeneous Dirichlet perturbations generally have no zero mode, and nonhomogeneous boundary data may not admit the same constant base state. A Turing instability occurs when the admissible homogeneous reaction mode is stable but some admissible positive $\\lambda_k$ makes $M_k$ unstable. Thus the base state, domain, and boundary spectrum jointly select possible wavelengths.

For two species,

$$\\operatorname{tr}M_k=\\operatorname{tr}J-(d_u+d_v)\\lambda_k<0,$$

so instability requires $\\det M_k<0$. Expanding,

$$\\det M(\\lambda)=\\det J-(d_vf_u+d_ug_v)\\lambda+d_ud_v\\lambda^2.$$

A continuum unstable band is not enough: at least one discrete domain eigenvalue must lie inside it.

## 3. Necessary Turing inequalities

Besides $\\operatorname{Tr} J<0$, $\\det J>0$, a diagonal-diffusion two-species candidate requires

$$d_vf_u+d_ug_v>0,\\qquad(d_vf_u+d_ug_v)^2>4d_ud_v\\det J.$$

These make the determinant quadratic dip below zero for some positive lambda. They are necessary and, for continuous lambda, sufficient for a band; the actual domain spectrum remains decisive. Equal diffusivities give $M=J-d \\lambda I$, shifting all eigenvalues left and preventing classical Turing instability.

## 4. Fastest linear mode

For each admissible lambda_k, compute the spectral abscissa $\\sigma_k=\\max \\operatorname{Re} eig(M_k)$. The fastest linear mode maximizes sigma_k. Its wavelength predicts early growth, not necessarily the final pattern. Nonlinear saturation, mode interaction, symmetry, conservation, noise, and domain geometry can select a different steady or time-dependent state.

Near onset, center-manifold and amplitude equations may justify a reduced pattern equation when eigenvalue simplicity, spectral separation, smoothness, and nondegeneracy hold. A fitted cubic saturation term without that derivation is a model, not a theorem.

## 5. Energy and positivity boundaries

Scalar diffusion with suitable reactions can admit comparison principles and invariant intervals. Cross reactions can still drive negative numerical values. Standard centered discretization plus explicit stepping preserves positivity only under method- and mesh-dependent restrictions. An implicit stable solver need not preserve positivity.

Mass conservation occurs only when reactions and boundary fluxes support it. With no-flux boundaries,

$$\\frac{d}{dt}\\int_\\Omega(u+v)\\,dx=\\int_\\Omega(f+g)\\,dx.$$

Therefore total mass is conserved if $f+g=0$, not merely because diffusion is present.

## 6. Discretization audit

For a uniform one-dimensional grid, explicit diffusion requires roughly $d_{\\max} dt/dx^2\\leq 1/2$. Reactions may impose a stricter stability or positivity restriction. Report grid, boundary stencil, solver splitting, nonlinear tolerance, initial perturbation spectrum, and at least three refinements.

Separate tests:

- compare computed early growth rates with eigenvalues of discrete linearized modes;
- refine mesh while keeping the same physical initial condition;
- check positivity and mass/reaction balance;
- perturb amplitude to confirm a linear regime;
- vary domain size to test discrete mode selection;
- distinguish stationary patterns, traveling waves, oscillations, and transient texture.

## Exercises with complete worked solutions

### 1. Reaction stability
If $\\operatorname{Tr} J=-3$, $\\det J=2$, classify the reaction equilibrium.

**Solution.** Both two-dimensional Hurwitz conditions hold, so the homogeneous reaction ODE is asymptotically stable.

### 2. Equal diffusion
Why can $d_u=d_v=d$ not cause classical Turing instability?

**Solution.** $M_k=J-d \\lambda_k I$; every eigenvalue is shifted left by a nonnegative amount, so a stable J remains stable.

### 3. Mode matrix
For $J=\\begin{pmatrix}1&2\\\\-3&-4\\end{pmatrix}$, $d_u=1,d_v=10$, write M(lambda).

**Solution.** $M=\\begin{pmatrix}1-\\lambda&2\\\\-3&-4-10\\lambda\\end{pmatrix}$.

### 4. Reaction check
Is J in Exercise 3 stable?

**Solution.** Trace is -3 and determinant is $-4+6=2$, so yes.

### 5. Determinant polynomial
Compute det M for Exercise 3.

**Solution.** It is $2-(10*1+1*(-4))\\lambda+10\\lambda^2=2-6\\lambda+10\\lambda^2$. Its discriminant is 36-80<0, so no Turing band despite unequal diffusion.

### 6. Candidate inequalities
If the weighted diagonal sum is negative, can a band occur?

**Solution.** No. The determinant quadratic begins positive and initially increases, with positive leading coefficient, so it cannot dip below zero at positive lambda.

### 7. Discrete spectrum
For Neumann conditions on $(0,L)$, what are lambda_k?

**Solution.** $\\lambda_k=(k \\pi/L)^2$, k=0,1,... . The zero mode is homogeneous.

### 8. Domain size
What happens to positive eigenvalues as L grows?

**Solution.** They decrease and become more densely spaced, so a continuum unstable band may capture different mode indices.

### 9. Fastest mode boundary
Does maximum linear growth prove the final wavelength?

**Solution.** No. It predicts early infinitesimal growth only; nonlinear interactions and constraints determine later selection.

### 10. Homogeneous perturbation
Which matrix controls it?

**Solution.** Lambda zero gives M_0=J, so reaction stability prevents growth of the homogeneous mode.

### 11. Mass balance
Under no flux, when is integral(u+v) conserved?

**Solution.** Exactly when the spatial integral of f+g vanishes along the solution; the pointwise sufficient condition is f+g=0.

### 12. Explicit CFL
With d_max=2 and dx=0.1 in one dimension, give the diffusion step bound.

**Solution.** $dt\\leq dx^2/(2d_{\\max})=0.01/4=0.0025$, before considering reactions.

### 13. Implicit boundary
Does A-stability guarantee nonnegative concentrations?

**Solution.** No. Absolute stability controls linear growth, not monotonicity or invariant domains. Matrix and nonlinear solve properties must be checked.

### 14. Noise seed
Why record the initial perturbation?

**Solution.** Its modal content determines which unstable modes are seeded and affects transient selection. Random seeds are part of reproducibility.

### 15. Linear regime
How test it numerically?

**Solution.** Repeat with perturbation amplitudes epsilon and epsilon/2. Before saturation, normalized modal amplitudes should agree and grow at the predicted exponential rate under time refinement.

### 16. Boundary effects
Can a periodic-domain wavelength be reused for Neumann boundaries?

**Solution.** Not automatically. The eigenfunctions and allowed wave numbers differ, changing the discrete selection set.

### 17. Stationary versus transient
A snapshot has spots. What is missing?

**Solution.** Time history, residual $\\lVert dU/dt\\rVert$, longer horizons, multiple starts, and mesh/tolerance checks are needed before calling it a stationary pattern.

### 18. Cross diffusion
Do the diagonal-diffusion inequalities apply unchanged?

**Solution.** No. A nondiagonal or state-dependent diffusion matrix changes the mode matrix and may affect parabolicity; rederive the determinant and well-posedness conditions.

### 19. Project: mode-selection audit
Given stable J and diffusivities, design a reproducible Turing test on $(0,L)$.

**Solution.** Compute Neumann $\\lambda_k$ through the mesh resolution, form each exact M_k, and tabulate spectral abscissae. Select small deterministic initial data containing several normalized cosine modes. Simulate at $dx,dx/2,dx/4$ with time errors reduced below spatial errors. During early time, regress log modal amplitude and compare to the discrete linear eigenvalue; report residual and amplitude-halving agreement. Continue through saturation while tracking positivity, mass/reaction balance, stationarity residual, and final spectrum. Repeat at a nearby L. This verifies the implementation and linear prediction; it does not prove a nonlinear patterned equilibrium.

### 20. Claim repair
Repair: “Diffusion destabilized the equilibrium, therefore a stable pattern exists.”

**Solution.** A positive linear mode proves local instability of the homogeneous equilibrium under the model. Existence, stability, and form of a nonlinear patterned state require separate bifurcation/global analysis or carefully bounded evidence.

## Chapter synthesis

Turing analysis subtracts diffusion-weighted Laplacian eigenvalues from the reaction Jacobian. The domain selects discrete modes; linear growth predicts onset, not nonlinear fate. Positivity, mass, mesh, amplitude, and mode-growth audits keep simulations accountable.

## Dependency ledger

- Reaction stability uses the two-dimensional trace–determinant criterion.
- Spatial reduction assumes a valid Laplacian eigenbasis for the boundary problem.
- Turing inequalities here assume two species and diagonal positive diffusion.
- Nonlinear pattern claims need bifurcation or global arguments beyond linearization.
- Numerical evidence requires physical-grid refinement and modal/residual checks.
`;export{e as default};