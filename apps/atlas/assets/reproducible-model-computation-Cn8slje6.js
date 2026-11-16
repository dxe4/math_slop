var e=`---
parent_id: book-applied-modeling-proof-reference
matter_id: reproducible-model-computation
title: "Reproducible Model Computation and Exact Laboratories"
level: advanced-undergraduate
estimated_minutes: 110
license: CC BY-SA 4.0
---

# Reproducible Model Computation and Exact Laboratories

## Dependencies and purpose

This chapter depends on the model-contract, sensitivity, and validation chapters plus basic programming. It treats code as a mathematical implementation with representations, invariants, error models, and falsification tests.

## A computational contract

Every model computation should record:

- input schema, units, allowed ranges, and missing-value behavior;
- mathematical equations and sign/index conventions;
- data structures and exact-versus-floating representation;
- algorithm, stopping rule, tolerance, and complexity expectation;
- deterministic seed or complete random-stream protocol;
- outputs, status values, certificates, and failure modes;
- unit, property, regression, and independent cross-check tests;
- environment and reproducible command.

A function returning \`NaN\` after violating $λ<μ$ hides a mathematical boundary. A typed status such as \`unstable\` with the failed inequality is part of the result.

## Exact arithmetic where it clarifies

Integer network capacities make max-flow conservation and cut certificates exact. Rational arithmetic can represent finite probabilities and small LP certificates. Floating point remains appropriate for large numerical work, but tests should use exact cases and scale-aware tolerances.

Do not compare floating values with an arbitrary universal epsilon. A tolerance should reflect problem scale, algorithmic error, and conditioning. Report residual norms and, when possible, forward-error bounds.

## Property-based mathematical tests

Even without a property-testing package, enumerate or deterministically generate small inputs and test invariants:

- max flow never exceeds any returned cut and equals its certificate at termination;
- queue outputs satisfy $L=λW$ in stable M/M/1 cases and reject $λ≥μ$;
- a covariance quadratic form is nonnegative up to a justified tolerance;
- unit rescaling leaves dimensionless outputs unchanged;
- inventory balance holds row by row;
- serialize/parse round trips sanitize invalid URL state.

Examples test points; properties test families.

## Verification ladder

1. **Hand case:** a tiny input with a derived answer.
2. **Boundary:** zero, equality, singularity, infeasibility, and capacity saturation.
3. **Invariant:** conservation, positivity, symmetry, dual bound, or normalization.
4. **Independent method:** enumeration versus algorithm, analytic formula versus simulation.
5. **Refinement:** decreasing step size or tolerance with predicted convergence behavior.
6. **Stress:** large scale differences, malformed input, and near-boundary parameters.

Passing this ladder verifies implementation relative to its mathematics. It does not validate the model for a real system.

## Accessible interactive instruments

An interactive lab needs semantic controls with labels, keyboard operation, visible focus, and a status region. A visual chart must have a complete numerical or textual alternative. Color must not carry meaning alone. Motion should be absent or respect reduced-motion preferences. Shareable URL state must validate inputs before use.

The Decision Systems lab uses native ranges/selects and tables. Its max-flow engine returns augmenting results and a min-cut certificate; queue mode returns formulas only in the stable region; portfolio mode reports declared scenario moments and an explicit non-advice boundary. No random sampling is required, so repeated state gives identical output.

## Simulation reproducibility

When randomness is essential, name the pseudorandom generator, seed, stream splitting, warm-up, horizon, replication count, and estimator. Events within one simulation run are dependent observations, not independent replications. Confidence intervals quantify Monte Carlo error conditional on the simulated model, not discrepancy from reality.

### Worked Monte Carlo audit

To estimate mean wait under a queue model, run $R$ independent replications and compute replication means $W_r$. Estimate standard error using sample standard deviation across the $R$ means divided by $\\sqrt{R}$. Treating all customer waits as iid underestimates uncertainty because waits share the same queue history.

## Numerical provenance

For every displayed result retain input hash or exact state, code revision, algorithm status, and any warnings. A rounded table should not be the only source for downstream calculation. Export machine-readable full-precision values with units and conventions.

## Exercises

1. Specify boundary tests for an EOQ function.
2. Explain why exact max-flow capacity integers do not make the road-capacity data exact.
3. Design an invariant test for a discrete SIR update.
4. Diagnose an experiment that changes a random seed for every policy and compares one run each.

## Answers

1. Reject nonpositive $D,K,h$; verify units externally; test the analytic optimum, equality of setup/holding costs, square-root scaling, and large/small values.
2. Arithmetic exactness concerns representation and algorithm; measured or estimated real capacities still have uncertainty and model discrepancy.
3. Check nonnegativity under a step-size condition and verify $S+I+R$ remains constant to the declared numerical tolerance.
4. One run confounds policy difference with Monte Carlo noise. Use multiple independent replications and preferably common random numbers for paired comparison.

## Chapter project

Implement one pure dependency-free engine with typed failure results, at least eight mathematical tests, deterministic serialized state, and a full text table. Write separate verification and validation statements.

`;export{e as default};