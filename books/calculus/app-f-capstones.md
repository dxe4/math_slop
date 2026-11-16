# Extended Capstone Briefs

These projects integrate modeling, calculus, computation, uncertainty, and
communication. Each brief has a minimal complete version and optional extensions.
A project is complete only when another reader can regenerate its tables and
Plotnine figures from the documented inputs.

## Capstone 1: asymptotic versus numerical accuracy

### Question

When does an asymptotic approximation outperform a convergent local series or a
direct numerical method?

### Choose one model

- factorials and Stirling corrections;
- Gaussian tail probability and its integration-by-parts expansion;
- pendulum period and its small-amplitude series;
- a Laplace-type concentration integral with large parameter.

### Required work

1. Define the exact quantity and limiting parameter.
2. Derive at least two approximations, including their predicted leading error.
3. Compute a high-accuracy reference by a justified method.
4. Evaluate absolute and relative error over a logarithmically spaced parameter
   range.
5. Plot error against cost or term count.
6. Locate any optimal truncation and explain why later terms hurt.
7. State the domain in which each conclusion is supported.

### Minimum deliverables

Provide the derivation, a data table, two Plotnine figures, source code, and a
one-page recommendation explaining which method to use in three parameter
regimes. A visually close curve is not an error analysis.

### Extensions

Estimate the next asymptotic coefficient from data; compare ordinary and
arbitrary precision; or test how cancellation changes the preferred formula.

## Capstone 2: signal, system, and sampling

### Question

How do dynamics and measurement choices reshape a signal's visible spectrum?

### Model

Build a signal containing two or three known components and pass it through one
linear system:

- mass–spring–damper;
- first-order low-pass filter;
- damped electrical RLC model;
- convolution with a measured or designed impulse response.

### Required work

1. State units, continuous-time equations, initial conditions, and parameters.
2. Derive the transfer function and predict gain and phase at each component.
3. Simulate the transient and steady response.
4. Sample above and below the relevant Nyquist rate.
5. Compare at least two finite windows and explain leakage versus peak width.
6. Reconstruct or filter the data and quantify error against the known signal.
7. Include a deliberate alias and identify the competing continuous frequencies.

### Minimum deliverables

Include a block diagram, response derivation, time and frequency Plotnine panels,
a parameter table with units, and a reproducible audio-free or data-only
workflow. Do not infer continuous frequency solely from a discrete Fourier peak
without mentioning bin spacing and the observation window.

### Extensions

Estimate parameters from noisy response data; design a notch or low-pass filter;
or compare Fourier and Laplace descriptions of the same transient.

## Capstone 3: variational path and discrete approximation

### Question

Does a discrete optimizer converge to the intended continuum extremal?

### Choose one model

- shortest path in a spatially varying cost field;
- brachistochrone with a regularised initial point;
- hanging chain with fixed length;
- minimal-energy interpolation with an obstacle;
- geodesic on a sphere or another parametrized surface.

### Required work

1. Define the functional, admissible class, and units.
2. Derive Euler–Lagrange or multiplier equations where possible.
3. Identify whether convexity supports global minimality or only stationarity.
4. Construct piecewise-linear discretisations on at least four mesh sizes.
5. Optimize from several initial guesses.
6. Track objective value, constraint residual, and distance between successive
   refined solutions.
7. Compare against an analytic solution or a separately justified reference.
8. Investigate one false minimum or mesh artifact.

### Minimum deliverables

Provide an equation audit, convergence table, Plotnine path family, energy/error
plot, and a distinction among solver convergence, mesh convergence, and
continuum existence.

### Extensions

Add inequality constraints and KKT conditions; compare direct transcription with
shooting; or examine second-variation stability numerically.

## Capstone 4: a continuum model

### Question

Which qualitative properties of a PDE survive discretisation?

### Choose one model

- one-dimensional heat conduction with mixed boundary data;
- vibrating string with a localised initial displacement;
- transport with inflow boundary;
- Poisson equation on a rectangle;
- advection–diffusion with a declared dimensionless Peclet number.

### Required work

1. Derive the PDE from a balance law and constitutive assumption.
2. State the domain, initial data, boundary data, units, and parameter signs.
3. Identify an exact solution, separated-series solution, or manufactured
   solution for verification.
4. Implement a finite-difference scheme.
5. Derive or cite within the book its stability restriction.
6. Perform simultaneous and separate refinements in space and time.
7. Monitor a qualitative invariant: mass, energy, maximum principle, or domain
   of dependence.
8. Explain discrepancies between observed and formal convergence order.

### Minimum deliverables

Include a derivation diagram, grid definition, stability calculation, three
Plotnine figures, error table, and a clear statement of what the finite
computation does not prove.

### Extensions

Compare explicit and implicit time stepping; add a discontinuity and study
numerical diffusion; or infer a parameter with uncertainty.

## Capstone 5: differentiation and sensitivity audit

### Question

When can a computed gradient be trusted?

### Model choices

- a nonlinear least-squares fit;
- terminal-state sensitivity of an ODE;
- a small neural computational graph;
- an implicitly defined equilibrium;
- geometric parameter sensitivity of area or curvature.

### Required work

1. Draw the computational graph and declare all differentiable primitives.
2. Derive one forward-mode Jacobian–vector product.
3. Derive or implement one reverse-mode vector–Jacobian product.
4. Compare against centered finite differences over at least ten step sizes.
5. Use an inner-product adjoint test where dimensions permit.
6. Test a well-conditioned point, an ill-conditioned point, and a branch or
   boundary point.
7. Report runtime and memory scaling as input dimension changes.
8. If a solver is differentiated, vary its residual tolerance and monitor the
   gradient.

### Minimum deliverables

Provide the graph, analytic checkpoint, Plotnine error curve, timing table, code,
and an explicit policy for nondifferentiable inputs.

### Extensions

Compare continuous and discrete ODE adjoints; compute Hessian–vector products;
or use implicit differentiation instead of tracing iterations.

## Capstone 6: Monte Carlo and model uncertainty

### Question

Which source of uncertainty dominates a model prediction, and can simulation
reduce it honestly?

### Model choices

- rare-event probability;
- reliability of a series or parallel system;
- uncertain projectile or cooling parameters;
- Bayesian-style parameter propagation with a declared prior;
- random-walk hitting time.

### Required work

1. Separate aleatory variability, parameter uncertainty, numerical error, and
   model discrepancy.
2. Define the estimand before simulation.
3. Construct a baseline independent estimator.
4. Verify standard error across multiple independent seeds.
5. Add one variance-reduction method and derive why it should help.
6. Diagnose weight concentration or correlation when relevant.
7. Perform a sensitivity analysis to distributional assumptions.
8. Report both sampling intervals and limitations of the model.

### Minimum deliverables

Include a preregistered simulation plan, seed ledger, convergence figure,
variance comparison, uncertainty budget, and reproducible code. A large sample
does not compensate for a biased estimator or an invalid model.

### Extensions

Use sequential stopping with valid coverage; compare quasi-Monte Carlo; or
construct a deliberately infinite-variance importance sampler and diagnose its
failure.

## Capstone 7: operator, solver, conservation, and inference chain

### Question

Can one mathematical claim survive the full passage from a continuum model to
a discrete solver, an optimized design, and an uncertainty statement?

### Choose one chain

- heat transfer with an unknown conductivity and optimized sensor locations;
- traffic flow with an unknown flux parameter and optimized observation times;
- a compact integral equation with noisy data and a regularized reconstruction;
- resource dispatch with uncertain demand and a statistically calibrated load
  model.

### Required work

1. Declare the measure space, function space, norms, physical units, and target
   estimand. State whether equality is pointwise, almost everywhere, weak, or
   numerical to a tolerance.
2. Derive the continuous balance, variational equation, or operator equation.
   Verify the hypotheses of one convergence, boundedness, coercivity, or entropy
   result used to interpret it.
3. Construct a finite-dimensional approximation. Report matrix structure,
   conditioning evidence, residual, backward error, stopping tolerance, and a
   refinement comparison against an independently justified reference.
4. Formulate one design or calibration objective. Compare two appropriate
   algorithms and record accepted steps, gradient or KKT residuals, constraint
   violations, and objective decrease rather than presenting only the final
   parameter.
5. Specify a sampling model and derive the likelihood or estimating equation.
   Distinguish numerical approximation, sampling variability, parameter
   uncertainty, and model discrepancy in a single uncertainty ledger.
6. Include one deliberate failure: missing domination, an ill-conditioned
   discretisation, a rejected line search, a non-entropic shock, a weakly
   identified parameter, or invalid optional stopping. Repair it and document
   exactly which claim changes.
7. Reproduce at least one deterministic Plotnine diagnostic from Chapters
   38–43 with a new parameter regime, labeled axes and units, alternative
   text, and a caption whose scope does not exceed the evidence.

### Minimum deliverables

Submit the derivation and theorem audit; a parameter-and-units table; executable
code; a mesh, iteration, or sample-size convergence table; three Plotnine
figures; a solver certificate; an inferential interval with its design
conditions; and a two-page claim ledger. The ledger must map each conclusion to
an identity, theorem, computed tolerance, simulation, or modeling assumption.
At least one conclusion must be narrowed after the deliberate failure test.

### Extensions

Compare strong and weak convergence; replace a direct solve by a preconditioned
Krylov method; optimize the observation design through Fisher information;
compare a first-order finite-volume method with a limited higher-order scheme;
or derive an adjoint gradient and verify it with directional differences.

## Shared reproducibility rubric

Each project is assessed in six categories.

| Category | Complete evidence |
|---|---|
| Mathematical definition | Variables, domains, units, hypotheses, and target quantity are explicit |
| Derivation | Major formulas follow from named rules, with approximation steps marked |
| Verification | At least one analytic check, limiting case, or manufactured solution |
| Error and uncertainty | Discretisation, sampling, and model errors are separated |
| Reproduction | Inputs, versions, seeds, parameters, and commands are recorded |
| Communication | Captions, alternative text, tables, and conclusions match the actual evidence |

A polished figure cannot compensate for an undefined target or missing units.
Conversely, a correct derivation is incomplete if the numerical result cannot be
reproduced.

## Peer-review checklist

Review another project in this order.

1. **Claim:** underline every sentence that asserts accuracy, convergence,
   optimality, causation, or generality.
2. **Scope:** locate the domain, parameter range, and data-generating assumptions
   supporting each claim.
3. **Mathematics:** check dimensions, signs, boundary terms, and theorem
   hypotheses.
4. **Computation:** rerun from a clean output directory and compare checksums or
   declared tolerances.
5. **Stress test:** change one mesh, step, seed, initial guess, or plotting
   window.
6. **Visual audit:** verify labels, units, color accessibility, alternative
   text, and whether scales could conceal error.
7. **Uncertainty:** confirm intervals correspond to the actual dependence and
   stopping rules.
8. **Revision request:** name the smallest change that would make each unsupported
   claim supportable.

The reviewer should distinguish a demonstrated defect from a possible risk. The
author should respond with evidence or narrower wording, not merely agreement.
