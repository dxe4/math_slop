
# A Differential Model and Solver Audit

**Before reading.** Read [Models and Direction Fields](#/books/ode-first-course/models-direction-fields), [Separable and Linear First-Order Equations](#/books/ode-first-course/separable-linear-first-order).

Use this recipe before trusting a trajectory, controller, PDE field, bifurcation diagram, or long-time average. It separates model error, analytical scope, discretization error, algebraic error, floating-point error, and inferential uncertainty.

The workflow is dependency-free. Pseudocode uses arrays and arithmetic only. It is not a replacement for a mature stiff, event-aware, or PDE solver; it is an inspectable reference against which a production computation can be audited.

## Step 1 — Freeze the question

Write one primary output before choosing a method:

- state at a fixed time;
- threshold-crossing time;
- equilibrium or stability margin;
- control energy or tracking error;
- heat flux or conserved mass;
- wave arrival time;
- bifurcation parameter;
- long-time average of a named observable.

Pointwise trajectories, event times, invariant statistics, and qualitative phase structure have different error sensitivities. A chaotic path can lose pointwise predictability while a carefully defined statistic remains stable.

State the permitted conclusion: ideal-model calculation, calibrated prediction, scenario comparison, or causal intervention claim. Differential equations do not identify parameters or causal effects by themselves.

## Step 2 — Build a model ledger

Record:

| item | questions |
|---|---|
| state | Is it sufficient to determine the model future? What are its units and bounds? |
| time and space | What interval and domain? Continuous approximation to what mechanism? |
| rates | Which conservation, constitutive, empirical, or control laws define them? |
| data | Initial, boundary, input, and parameter values; measured or assumed? |
| closure | Which unresolved processes were compressed into coefficients? |
| events | Switching, impacts, depletion, saturation, discontinuity, topology change? |
| target | Which functional of the solution is reported? |

Check dimensions term by term. Set forcing and coupling to zero and recover known limiting models. Check signs at physical boundaries. If a population rate points negative at zero or a diffusion coefficient is negative, decide whether the model or its domain is wrong.

## Step 3 — Nondimensionalize

Choose characteristic state X, time T, and length L. Replace

$$
x=X\widehat x,\qquad t=T\widehat t,\qquad\text{position}=L\widehat s.
$$

Collect dimensionless groups. This:

- reveals dominant balances;
- reduces parameter count;
- makes tolerances meaningful;
- identifies fast and slow scales;
- supplies natural plotting and stopping ranges.

Keep the inverse conversion with units. A dimensionless result is not a unitless reporting license.

## Step 4 — State the analytical contract

For ODEs, identify:

- continuity and local Lipschitz region;
- local existence and uniqueness theorem;
- invariant region or positivity argument;
- a priori bound and continuation interval;
- event or state-boundary handling.

For PDEs, add:

- equation type and coefficient signs;
- boundary and initial compatibility;
- classical, weak, mild, entropy, or viscosity solution;
- energy or maximum estimate;
- known existence, uniqueness, and regularity scope.

For control, state controllability, observability, stabilizability, detectability, saturation, delay, and sampling assumptions.

For an ergodic claim, name state space, transformation or flow, invariant probability, observable, and theorem. If no theorem is being applied, label the output numerical evidence.

## Step 5 — Make hand benchmarks

Before a large run, construct at least two:

- equilibrium and its exact residual;
- constant or linear solution;
- conservation or monotonicity identity;
- decoupled parameter limit;
- one eigenmode;
- manufactured solution with derived forcing;
- exactly solvable scalar or linear subsystem;
- symmetry or scaling relation.

### Manufactured heat solution

Choose

$$
u(x,t)=e^{-t}\sin(\pi x)
$$

on 0<x<1 with zero endpoints. For proposed PDE u_t=kappa u_xx+s, compute

$$
s=u_t-\kappa u_{xx}=(-1+\kappa\pi^2)e^{-t}\sin(\pi x).
$$

Feed this source and exact boundary/initial data to the solver. The comparison tests implementation and observed order, not the truth of a physical heat model.

## Step 6 — Implement an inspectable RK4 reference

For vector f(t,z):

```text
function rk4_step(t, z, h):
    k1 = f(t, z)
    k2 = f(t+h/2, z+h*k1/2)
    k3 = f(t+h/2, z+h*k2/2)
    k4 = f(t+h, z+h*k3)
    return z+h*(k1+2*k2+2*k3+k4)/6
```

Validate:

- every state and derivative is finite;
- dimensions match;
- h is positive and lands exactly on requested output or uses interpolation;
- input discontinuities and events are step boundaries;
- arrays supplied by the caller are not mutated;
- failures include time, state, and reason.

RK4 is a nonstiff smooth-problem reference. It is not appropriate merely because it is fourth order. Compare against an implicit method when stiffness is plausible.

## Step 7 — Produce a step-refinement table

Run h, h/2, and h/4. For primary output Q report:

| grid | Q | difference from next finer | invariant or residual |
|---|---:|---:|---:|
| h | ... | | ... |
| h/2 | ... | | ... |
| h/4 | ... | — | ... |

Estimate observed order

$$
p=\log_2\left(\frac{|Q_h-Q_{h/2}|}{|Q_{h/2}-Q_{h/4}|}\right).
$$

Only interpret p when differences are above roundoff and the leading error term dominates. Repeat after changing solver family. For a PDE refine space and time separately or along a declared coupled path; otherwise an apparent plateau cannot be assigned.

## Step 8 — Audit absolute stability and stiffness

Linearize along representative states or inspect known fast rates. For Euler, a negative real eigenvalue lambda requires |1+h lambda|<=1 for absolute stability. Explicit RK methods have larger but bounded stability regions.

Warning signs:

- many rejected steps despite smooth slow output;
- step size controlled by a decayed fast component;
- eigenvalue magnitudes spanning orders;
- explicit and implicit methods disagree until tiny h;
- Jacobian nearly singular or strongly nonnormal.

If using an implicit solver, report nonlinear iteration tolerance, Jacobian strategy, linear-solver residual, and failure count. An implicit method is not automatically accurate because it is stable.

## Step 9 — Track mathematical structure

Choose diagnostics matching the continuum:

- mass balance including boundary flux;
- nonnegativity or invariant interval;
- energy conservation or dissipation;
- phase-space area or symplectic form;
- maximum principle;
- entropy inequality across shocks;
- divergence or volume contraction;
- control constraint and Lyapunov decrease;
- exact trace, determinant, controllability, and observability structure.

Plot error can hide structure. Publish a numerical table.

For rotation x'=-y, y'=x, track

$$
I=x^2+y^2.
$$

Report maximum |I_n-I_0|, not only final drift; cancellation can make the endpoint look good.

## Step 10 — Treat events as root problems

An event g(t,z)=0 may represent impact, threshold, switch, extinction, or saturation. A robust audit:

1. brackets sign changes during accepted steps;
2. interpolates the numerical solution with a method-compatible dense output;
3. solves the bracketed scalar root to an event tolerance;
4. applies a declared state reset or mode switch;
5. restarts integration and records event order.

Tangential events may touch zero without a sign change. Simultaneous events need priority rules. Event-time error can dominate the state error after a discontinuous reset.

## Step 11 — Separate model and parameter uncertainty

Numerical refinement conditions on fixed equations and parameters. It does not measure:

- uncertainty in calibrated rates;
- structural alternatives;
- unresolved spatial heterogeneity;
- unknown boundary or initial fields;
- sensor error;
- treatment-confounding or selection bias.

Perform parameter and structural sensitivity outside the inner solver audit. Re-run the full calibration and validation pipeline when parameters are estimated. Avoid perturbing each parameter independently when constraints or correlations link them.

## Step 12 — Audit control claims

For z'=Az+Bu, y=Cz:

1. compute rank using a scale-aware factorization;
2. identify unreachable and unobservable modes;
3. check stabilizability and detectability;
4. report closed-loop eigenvalues and transient gain;
5. simulate actuator amplitude/rate saturation;
6. add sensor noise, delay, sample-and-hold, and parameter uncertainty;
7. report state/output constraint violations;
8. test safe fallback.

The determinant in the [live laboratory](../apps/atlas/index.html#/labs?lab=visual-lab-linear-dynamics-audit) is exact because its examples are two-state rational matrices. Larger estimated systems need singular values relative to uncertainty, not literal exact rank from floating point.

## Step 13 — Audit bifurcation and chaos plots

For a bifurcation diagram:

- solve equilibria or periodic orbits independently of one forward sweep;
- continue branches in both parameter directions;
- inspect stability multipliers or eigenvalues;
- reduce step and transient dependence;
- detect hysteresis and coexisting attractors;
- treat nonhyperbolic points with normal-form hypotheses.

For chaos:

- vary initial conditions and precision;
- refine integrator and tangent equation;
- report finite-time Lyapunov convergence;
- check invariant or absorbing region;
- distinguish true periodic windows from too-short transients;
- remember that finite-precision orbits eventually repeat.

A positive exponent estimate does not prove ergodicity or mixing.

## Step 14 — Audit long-time averages

For observable phi, publish the running average

$$
A_T=\frac1T\int_0^T\varphi(z(t))\,dt
$$

or its discrete equivalent. Vary:

- transient cutoff;
- horizon and block length;
- initial condition across suspected invariant components;
- time step, sampling interval, and precision;
- integrator family;
- model parameters.

Name the candidate invariant measure. Birkhoff gives almost-sure convergence under invariance and integrability; equality with the space mean also needs ergodicity. It supplies no generic finite-T error bar. Serial dependence changes uncertainty.

## Step 15 — Residual and balance packet

Publish:

- ODE dense-output residual z_h'-f(t,z_h);
- PDE discrete residual in the claimed weak or strong norm;
- boundary residual;
- initial-data residual;
- nonlinear and linear solve residuals;
- conservation balance with all sources and fluxes;
- refinement table for the primary output.

A residual answers “how well does this approximation satisfy the equation?” Error additionally needs stability or an a posteriori theorem connecting residual to distance from a true solution.

## Step 16 — Reproducible report

Include:

- immutable equations and units;
- parameter/data provenance;
- algorithm, version, precision, and hardware-sensitive choices;
- mesh, step, tolerance, and stopping rules;
- random seeds if any;
- benchmark and refinement tables;
- event log;
- structural diagnostics;
- model and uncertainty sensitivities;
- strongest supported claim and explicit nonclaims.

Keep raw tables accessible without animation or colour.

## Worked mini-audit

### Worked example: stable decay and an unstable interpretation

For x'=-2x, x(0)=1, Euler gives multiplier 1-2h.

At h=0.25, successive values from t=0 through t=1 are 1, 0.5, 0.25,
0.125, 0.0625. The exact endpoint value is exp(-2), about 0.1353, so the
endpoint error is about 0.0728.

At h=0.125, the multiplier is 0.75 and eight steps give about 0.1001, reducing error. At h=1, the multiplier is -1 and the method alternates forever: exact decay, numerical nondecay.

The model has invariant sign for positive initial data and energy x squared decreasing. Euler preserves both only for a restricted h range. The audit therefore reports model stability, method stability, endpoint refinement, and monotonicity separately.

## A sharper conclusion from the decay audit

For the displayed decay equation, an Euler step multiplies the current
value by one minus twice the step size. A step size strictly between
zero and one gives multiplier of absolute value less than one, so
squared magnitude decreases. Preserving a positive sign is more restrictive:
the step size must be less than one half. At exactly one half,
the first step becomes zero even though the exact solution is still
positive; above one half the numerical sign alternates while the magnitude
may continue to decay.

Thus a plot of decreasing squared magnitude can pass its chosen structural
check and still violate the model's positive-sign property. State which
quantity each check observes. Refinement can then address a specific error,
such as the wrong sign or the endpoint discrepancy, rather than turning
several distinct mathematical claims into one unexplained pass label. These
conclusions follow from the multiplier calculation; they do not require running
a solver or treating a displayed sample as a general stability theorem.

## Exercises with hints and complete solutions

### Exercise 1: Coupled PDE refinement
<a id="differential-model-solver-audit-ex-1"></a>

You halve spatial mesh width for explicit heat but leave time step fixed. Why might the computation fail?

<details><summary>Hint 1</summary>

Write the explicit heat method's stability ratio.

</details>
<details><summary>Hint 2</summary>

A halved spatial step changes its square by a factor of four.

</details>
<details><summary>Solution</summary>

The stability ratio kappa dt/dx squared grows by four. It may cross the standard one-dimensional forward-Euler bound one half, making high-frequency grid modes grow. Refine time proportionally to dx squared or use an appropriate stable time integrator and still check accuracy.

</details>

### Exercise 2: Two agreeing wrong runs
<a id="differential-model-solver-audit-ex-2"></a>

Why can h and h/2 agree despite a wrong result?

<details><summary>Hint 1</summary>

Ask which errors are unchanged when only the time step changes.

</details>
<details><summary>Hint 2</summary>

Two computations can share the same wrong equation or dominant spatial error.

</details>
<details><summary>Solution</summary>

Both can solve the same incorrectly coded equation, use wrong units or boundary data, lie outside an event bracket, or share dominant spatial/model error. Add independent benchmarks, residuals, structure checks, and a second method.

</details>

### Exercise 3: Chaotic endpoint
<a id="differential-model-solver-audit-ex-3"></a>

Two refined Lorenz trajectories disagree after a long time. Is the solver necessarily wrong?

<details><summary>Hint 1</summary>

Compare fixed short-time accuracy with long-time sensitivity.

</details>
<details><summary>Hint 2</summary>

Small initial or rounding differences can amplify without invalidating the method's local consistency.

</details>
<details><summary>Solution</summary>

No. Sensitive dependence amplifies tiny truncation and roundoff differences. Verify convergence on shorter fixed horizons, invariants or residuals, and carefully defined statistics. Do not claim the intended initial trajectory is accurate after its predictability horizon.

</details>

### Exercise 4: Tolerance units
<a id="differential-model-solver-audit-ex-4"></a>

Why is one absolute tolerance unsuitable for states measured near 10 to the minus 9 and 10 to the 6?

<details><summary>Hint 1</summary>

Compare the tolerance with the scale of each component.

</details>
<details><summary>Hint 2</summary>

A single absolute threshold has different relative meanings at these two magnitudes.

</details>
<details><summary>Solution</summary>

It can ignore the small component or overresolve the large one. Scale states nondimensionally or use componentwise absolute tolerances plus a relative tolerance tied to the required outputs.

</details>
