# Differential equations problems

Initial and boundary values, first-order methods, linear systems, transforms, stability and numerical steps.

150 problems with hints and worked solutions. Answers are checked in your browser; nothing you enter is stored.

## ODE: models, linear structure and phase geometry

Move from mass balances and cooling to Wronskians, impulses, resonant boundary conditions and nonlinear phase geometry. Finite observations are accompanied by complete models; proof entries ask for a written argument and personal rubric reflection. Initial model calculations begin at L2.

- [Separate incoming mass from outgoing concentration](ode.extension.instantaneous-mixing-mass-balance.md) · easy
- [Evaluate a stated density-dependent growth law](ode.extension.logistic-local-growth-slope.md) · easy
- [Apply a half-life to the temperature excess](ode.extension.cooling-repeated-half-life.md) · easy
- [Account for a changing dilution volume](ode.extension.expanding-tank-salt-solution.md) · medium
- [Recover a hitting time through a logarithmic clock](ode.extension.logistic-midcapacity-hitting-clock.md) · medium
- [Locate the parameter at which positive equilibria merge](ode.extension.constant-harvest-fold-threshold.md) · medium
- [Exclude a periodic scalar orbit through uniqueness](ode.extension.autonomous-periodic-orbits-on-line.md) · hard
- [Determine when a continuous equilibrium admits delayed departure](ode.extension.osgood-logarithmic-departure-threshold.md) · hard
- [Prove global bounds without a constant carrying capacity](ode.extension.nonautonomous-logistic-invariant-bounds.md) · hard
- [Propagate a Wronskian without solving two solutions](ode.extension.abel-wronskian-decay.md) · easy
- [Read a state jump from a concentrated forcing](ode.extension.impulse-velocity-jump.md) · easy
- [Use the trace to obtain volume change](ode.extension.liouville-fundamental-determinant.md) · easy
- [Separate a forcing pulse from the free drift after it](ode.extension.finite-pulse-double-integration.md) · medium
- [Use a known solution to expose the Euler-Cauchy basis](ode.extension.euler-cauchy-second-solution.md) · medium
- [Superpose shifted oscillator responses with their phases](ode.extension.two-impulse-phase-superposition.md) · medium
- [Construct and justify a Dirichlet Green representation](ode.extension.dirichlet-green-kernel-construction.md) · hard
- [Derive the solvability condition at a resonant boundary length](ode.extension.resonant-dirichlet-compatibility.md) · hard
- [Compare zero locations through a signed Wronskian](ode.extension.sturm-strict-zero-comparison.md) · hard
- [Check infinitesimal area change in a nonlinear oscillator](ode.extension.nonlinear-oscillator-area-divergence.md) · easy
- [Evaluate the conserved quartic energy](ode.extension.quartic-oscillator-energy-level.md) · easy
- [Find an interior equilibrium without counting boundary states](ode.extension.positive-lotka-volterra-equilibrium.md) · easy
- [Recover the period of an invariant circle from Cartesian equations](ode.extension.radial-cycle-period.md) · medium
- [Locate a homoclinic turning point from its energy level](ode.extension.double-well-separatrix-turning-point.md) · medium
- [Read a small-oscillation scale at a nonlinear equilibrium](ode.extension.predator-prey-linear-frequency.md) · medium
- [Integrate a variable angular speed around an invariant cycle](ode.extension.nonuniform-circle-period.md) · hard
- [Prove amplitude-dependent periods at a nonhyperbolic center](ode.extension.degenerate-center-period-scaling.md) · hard
- [Exclude predator-prey cycles using an integrating density](ode.extension.dulac-positive-quadrant-exclusion.md) · hard

## ODE: numerical structure and global flows

Study amplification factors, local defects and modified energies before moving to nonlinear stable graphs, center manifolds, gradient convergence and finite-time extinction. Numerical iterates are distinguished from exact solutions throughout. The weighted-space stable-graph construction uses L4 methods; proof entries support a written draft and personal reflection.

- [Compute a signed amplification before taking its magnitude](ode.extension.euler-dissipative-amplification.md) · easy
- [Solve the implicit trapezoidal amplification equation](ode.extension.trapezoidal-exactly-annihilated-test-mode.md) · easy
- [Evaluate stability off the negative real axis](ode.extension.rk2-complex-stability-value.md) · medium
- [Find a preserved quadratic form with a cross term](ode.extension.symplectic-euler-cross-energy-coefficient.md) · medium
- [Separate a local truncation defect from a global error](ode.extension.euler-local-defect-leading-coefficient.md) · medium
- [Keep exact starting values in a multistep defect](ode.extension.adams-bashforth-local-defect-coefficient.md) · medium
- [Prove A-stability by bounding the reciprocal root disk](ode.extension.bdf2-left-half-plane-root-proof.md) · hard
- [Propagate local defects on an arbitrary positive mesh](ode.extension.nonuniform-euler-global-error.md) · hard
- [Find the full bounded-orbit window of a symplectic discretization](ode.extension.symplectic-euler-sharp-stability-window.md) · hard
- [Count decaying modes with an explicit spectral hypothesis](ode.extension.hyperbolic-stable-direction-count.md) · easy
- [Preserve the sign in a Riccati reduction](ode.extension.riccati-linear-quotient-sign.md) · easy
- [Linearize a nonlinear oscillator before discussing nearby behavior](ode.extension.lienard-origin-linear-growth-rate.md) · medium
- [Use the invariance equation rather than the nullcline](ode.extension.center-manifold-cubic-coefficient.md) · medium
- [Cancel a growing mode to find an exact stable manifold](ode.extension.exact-nonlinear-stable-graph.md) · medium
- [Exhibit distinct smooth invariant graphs with the same Taylor series](ode.extension.flat-center-manifold-nonuniqueness.md) · hard
- [Prove convergence to one critical point rather than only to a critical set](ode.extension.proper-gradient-flow-single-limit.md) · hard
- [Construct a stable invariant graph in a weighted path space](ode.extension.lyapunov-perron-stable-graph.md) · hard
- [Separate forward uniqueness from invertibility of the solution map](ode.extension.finite-extinction-forward-semigroup.md) · hard

## ODE: singular series, spectra and solution dependence

Connect Frobenius recurrences and logarithmic branches with spectral boundary conditions, nodal geometry and solution dependence. Worked arguments distinguish formal expansions from convergent solutions and bounded states from compact continuation. The compact Green-operator completeness argument uses L4 methods. Proof entries support written reasoning and personal reflection.

- [Read the indicial quadratic with the derivative shift](ode.extension.euler-indicial-root-sum.md) · easy
- [Discard higher-order coefficients only at the indicial step](ode.extension.regular-singular-leading-root.md) · easy
- [Read a Taylor coefficient from the initial equation](ode.extension.analytic-recurrence-first-even-coefficient.md) · easy
- [Refute an overstrong Frobenius rule with exact Euler powers](ode.extension.integer-root-gap-no-forced-log.md) · medium
- [Track the leading Frobenius exponent through a recurrence](ode.extension.frobenius-shifted-third-coefficient.md) · medium
- [Keep both neighboring indices in a coefficient recurrence](ode.extension.variable-coefficient-even-jet.md) · medium
- [Prove the logarithmic second branch from reduction of order](ode.extension.repeated-root-unavoidable-logarithm.md) · hard
- [Promote a formal singular-point expansion to a genuine solution](ode.extension.frobenius-recurrence-convergence.md) · hard
- [Show how a vanishing leading coefficient permits a flat branch](ode.extension.irregular-singularity-flat-nontrivial-solution.md) · hard
- [Retain the constant mode under Neumann data](ode.extension.neumann-zero-ground-mode.md) · easy
- [Find the first half-integer mode from mixed boundary data](ode.extension.mixed-endpoint-ground-frequency.md) · easy
- [Count interior nodes without counting prescribed endpoint zeros](ode.extension.dirichlet-mode-interior-node-count.md) · easy
- [Compute a variational eigenvalue bound from an admissible trial](ode.extension.rayleigh-polynomial-upper-bound.md) · medium
- [Keep the outward-normal sign in Robin boundary conditions](ode.extension.robin-zero-mode-compatibility.md) · medium
- [Derive the correct weight in spectral orthogonality](ode.extension.weighted-sturm-orthogonality.md) · medium
- [Prove the sharp interval inequality through the first mode](ode.extension.sharp-wirtinger-ground-state-identity.md) · hard
- [Obtain a complete eigenbasis from a compact inverse](ode.extension.green-operator-sine-completeness.md) · hard
- [Prove exact interlacing for one self-adjoint equation](ode.extension.sturm-separation-independent-solutions.md) · hard
- [Distinguish an existence guarantee from a maximal lifetime](ode.extension.picard-rectangle-guaranteed-time.md) · easy
- [Evaluate a stated continuous-dependence estimate](ode.extension.gronwall-amplified-initial-error.md) · easy
- [Read the interval length in a contraction estimate](ode.extension.picard-contraction-factor.md) · easy
- [Differentiate the actual solution with respect to a parameter](ode.extension.nonlinear-parameter-sensitivity.md) · medium
- [Show why a discontinuous field can destroy a classical initial solution](ode.extension.discontinuous-field-classical-nonexistence.md) · medium
- [Preserve a state-domain boundary in the continuation question](ode.extension.bounded-state-domain-exit-time.md) · medium
- [Construct local existence and uniqueness through a complete function space](ode.extension.picard-contraction-construction.md) · hard
- [Derive the initial-state derivative of a flow](ode.extension.differentiable-flow-variational-equation.md) · hard
- [Strengthen finite maximal time to eventual norm escape](ode.extension.finite-time-escape-continuation.md) · hard

## ODE: stability and periodic evolution

Explore Lyapunov estimates, attraction basins, invariant sets and matrix stability before studying periodic forcing and variational return maps. The switching and neutral-Jordan examples expose limits of spectral shortcuts. The Floquet factorization proof uses L4 methods; proof entries support personal rubric reflection.

- [Differentiate a Lyapunov candidate along a vector field](ode.extension.quadratic-energy-directional-decay.md) · easy
- [Integrate a supplied energy inequality](ode.extension.comparison-exponential-energy-bound.md) · easy
- [Use both neighboring signs to classify an equilibrium](ode.extension.three-equilibrium-phase-line-stability.md) · easy
- [Solve a matrix Lyapunov equation with off-diagonal coupling](ode.extension.symmetric-lyapunov-matrix.md) · medium
- [Distinguish global attraction from an exponential estimate](ode.extension.asymptotic-without-exponential-stability.md) · medium
- [Determine complete basins while retaining the separating equilibrium](ode.extension.bistable-scalar-attraction-basins.md) · medium
- [Use the largest invariant zero-derivative set](ode.extension.lasalle-damped-quartic-oscillator.md) · hard
- [Prove the matrix energy criterion in both directions](ode.extension.hurwitz-quadratic-lyapunov-equivalence.md) · hard
- [Expose growth hidden by every instantaneous spectrum](ode.extension.stable-instantaneous-spectra-unstable-switching.md) · hard
- [Read volume evolution from specified period multipliers](ode.extension.period-map-volume-factor.md) · easy
- [Integrate one full coefficient period](ode.extension.zero-mean-scalar-period-multiplier.md) · easy
- [Remove the decaying transient to select a periodic response](ode.extension.unique-periodic-forced-value.md) · easy
- [Show why unit-modulus multipliers need a Jordan condition](ode.extension.unit-multipliers-jordan-growth.md) · medium
- [Linearize the radial return rather than the angular motion](ode.extension.radial-cycle-transverse-multiplier.md) · medium
- [Analyze a repeated jump through its discrete return map](ode.extension.impulsive-return-contraction.md) · medium
- [Construct Floquet coordinates from a matrix logarithm](ode.extension.floquet-periodic-factorization.md) · hard
- [Classify periodic solvability at and away from resonance](ode.extension.scalar-periodic-forcing-alternative.md) · hard
- [Relate the transverse cycle multiplier to accumulated divergence](ode.extension.planar-return-divergence-formula.md) · hard

## Differential equations: first 60 problems

Twelve skills cover initial and boundary values, exact equations, linear systems, transforms, stability, numerical steps and local series. Polynomial representations retain the original equation domains. Numerical observations state their absolute tolerance; method steps are identified as approximations.

- [Integrate a prescribed slope](ode.separable.quadratic-initial-solution.md) · easy
- [Retain the integration constant](ode.separable.cubic-initial-solution.md) · easy
- [Evaluate an exponential initial-value solution](ode.separable.exponential-value.md) · medium
- [Evaluate before a finite blow-up](ode.separable.riccati-half-time.md) · medium
- [Evaluate a Gaussian-shaped solution](ode.separable.gaussian-decay-value.md) · medium
- [Separate equilibrium and transient](ode.linear-first.decaying-transient.md) · medium
- [Combine a polynomial particular solution and a transient](ode.linear-first.linear-forcing-value.md) · medium
- [Initial data can eliminate a transient](ode.linear-first.polynomial-transient-choice.md) · medium
- [Recognize a product derivative](ode.linear-first.product-derivative.md) · medium
- [Use a singular integrating factor on its domain](ode.linear-first.logarithmic-over-time.md) · medium
- [Determine an exact-equation constant](ode.exact-equations.quadratic-potential.md) · medium
- [Recover an explicit branch from a potential](ode.exact-equations.product-potential-value.md) · medium
- [Construct a mixed polynomial potential](ode.exact-equations.mixed-potential.md) · medium
- [Normalize an integrating factor](ode.exact-equations.normalized-integrating-factor.md) · hard
- [An exact trigonometric equation](ode.exact-equations.trigonometric-potential.md) · medium
- [Use two initial conditions after two integrations](ode.homogeneous-second.integrate-second-derivative.md) · easy
- [Choose the sine branch of an oscillator](ode.homogeneous-second.sine-initial-data.md) · medium
- [Choose a decaying exponential branch](ode.homogeneous-second.negative-exponential-branch.md) · medium
- [Handle a repeated characteristic root](ode.homogeneous-second.repeated-root.md) · medium
- [Combine two decaying modes](ode.homogeneous-second.two-decay-rates.md) · medium
- [Separate a forced equilibrium](ode.forced-second.constant-forced-oscillator.md) · medium
- [Initial data select a constant particular solution](ode.forced-second.constant-particular-solution.md) · easy
- [Integrate polynomial forcing with nonzero initial slope](ode.forced-second.quartic-forcing.md) · easy
- [Evaluate a resonant oscillator response](ode.forced-second.resonant-observation.md) · hard
- [Match forcing at a repeated root](ode.forced-second.repeated-root-forcing.md) · hard
- [Solve independent scalar modes](ode.systems.independent-decay-growth.md) · easy
- [Follow an oscillator in the phase plane](ode.systems.clockwise-rotation.md) · medium
- [A triangular system with repeated growth rate](ode.systems.triangular-growing-mode.md) · medium
- [Combine two decay rates in a triangular system](ode.systems.triangular-decaying-mode.md) · medium
- [Extract a radial growth law](ode.systems.radial-growth-invariant.md) · hard
- [Read the slowest exponential rate](ode.stability.spectral-abscissa.md) · easy
- [Find a stable-node spectrum](ode.stability.stable-node-spectrum.md) · medium
- [Isolate the stable direction of a saddle](ode.stability.saddle-stable-direction.md) · medium
- [Identify the attracting logistic equilibrium](ode.stability.logistic-equilibria.md) · medium
- [Measure a nonhyperbolic decay rate](ode.stability.nonhyperbolic-decay-rate.md) · hard
- [Evaluate a polynomial Laplace transform](ode.laplace.quadratic-transform-value.md) · easy
- [Invert a shifted simple transform](ode.laplace.inverse-decay-value.md) · easy
- [Retain initial values in a transformed oscillator](ode.laplace.include-initial-transform-terms.md) · medium
- [Invert a product transform](ode.laplace.partial-fraction-step-response.md) · medium
- [Keep a transform time delay](ode.laplace.delayed-response.md) · medium
- [Select a delayed branch of a nonunique equation](ode.existence.delayed-nonunique-branch.md) · hard
- [Keep a singular time out of the solution interval](ode.existence.singular-time-interval.md) · medium
- [Normalize a finite blow-up time](ode.existence.tangent-blowup.md) · medium
- [A non-Lipschitz equation with a forced forward value](ode.existence.restoring-non-lipschitz.md) · hard
- [Distinguish a solution formula from the equation domain](ode.existence.domain-versus-polynomial-extension.md) · medium
- [Compute one forward Euler step](ode.numerical.forward-euler-step.md) · easy
- [Use a midpoint predictor](ode.numerical.explicit-midpoint-step.md) · medium
- [Correct a nonlinear Euler predictor](ode.numerical.heun-nonlinear-step.md) · medium
- [Solve an implicit numerical update](ode.numerical.implicit-euler-step.md) · medium
- [Keep all four Runge-Kutta stages](ode.numerical.classical-rk4-step.md) · hard
- [Determine an affine boundary solution](ode.boundary-values.affine-dirichlet.md) · easy
- [Use two endpoint conditions for an oscillator](ode.boundary-values.oscillator-dirichlet.md) · medium
- [Normalize a nonunique boundary family](ode.boundary-values.resonant-boundary-normalization.md) · medium
- [Find a first boundary eigenvalue](ode.boundary-values.first-dirichlet-eigenvalue.md) · medium
- [Combine a derivative and a position condition](ode.boundary-values.mixed-affine-boundary.md) · easy
- [Extract a local coefficient from a first-order equation](ode.series.linear-series-coefficient.md) · medium
- [A frequency-dependent Taylor coefficient](ode.series.oscillator-series-coefficient.md) · medium
- [Match coefficients in a variable-coefficient equation](ode.series.airy-local-coefficient.md) · hard
- [Integrate a geometric slope series](ode.series.integrated-geometric-series.md) · medium
- [A coefficient after polynomial cancellation](ode.series.inhomogeneous-series-coefficient.md) · medium
