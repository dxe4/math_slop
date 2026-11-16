var e=`---
id: visual-lab-linear-dynamics-audit
title: Flow, Feedback, and Invariant-Measure Audit
level: undergraduate
estimated_minutes: 130
license: CC BY-SA 4.0
---

# Flow, Feedback, and Invariant-Measure Audit

[Launch the live laboratory](#/labs?lab=visual-lab-linear-dynamics-audit).

This laboratory keeps two kinds of evidence visibly separate.

1. Exact rational arithmetic forms a two-state closed-loop matrix and computes trace, determinant, discriminant, controllability determinant, and observability determinant.
2. Classical fourth-order Runge–Kutta approximates a trajectory, repeats the endpoint with half the step, and tabulates finite-time averages and invariant drift.

Changing the numerical step cannot change an exact rank or stability row. Agreement of trajectories cannot repair a singular controllability matrix. Conversely, exact matrix structure does not make a plotted trajectory exact.

Connect the lab to the [first encounter](#/item/deep-dive-differential-equations-first-encounter), [standard course](#/item/course-differential-equations-dynamics-standard), [control deep dive](#/item/deep-dive-stability-control-observability), and [solver audit](#/item/recipe-differential-model-solver-audit).

## 1. State-feedback contract

Each preset has

$$
z'=Az+Bu,\\qquad y=Cz,\\qquad u=-Kz.
$$

The closed-loop matrix is

$$
A_{\\mathrm{cl}}=A-BK.
$$

All displayed structural coefficients are reduced integer fractions. The feedback slider moves in quarter units, so no binary floating-point approximation is needed for these rows.

For a real two by two matrix, characteristic polynomial is

$$
\\lambda^2-\\operatorname{tr}(A_{\\mathrm{cl}})\\lambda+\\det A_{\\mathrm{cl}}.
$$

The exact rules used are:

- determinant negative: one positive and one negative real eigenvalue, an unstable saddle;
- determinant positive and trace negative: both eigenvalues have negative real parts, asymptotic stability;
- determinant positive and trace positive: at least one positive real part, instability;
- determinant positive and trace zero: spectral boundary, not asymptotic stability;
- determinant zero: nonhyperbolic boundary.

The discriminant trace squared minus four determinant distinguishes real and complex pairs. At repeated or zero roots, Jordan and nonlinear structure may matter.

## 2. Exact reachability and visibility

For two states and one input, controllability matrix is

$$
\\begin{pmatrix}B&AB\\end{pmatrix}.
$$

Its determinant is nonzero exactly when the two columns span the state plane. For one output, observability matrix has rows

$$
\\begin{pmatrix}C\\\\CA\\end{pmatrix}.
$$

Its determinant is nonzero exactly when noiseless output history distinguishes every initial state in this ideal linear model.

The ranks are computed from the declared open-loop A, B, and C. State feedback does not create missing controllability. Observers do not create information absent from the output.

Rank is a structural yes/no result for exact matrices. In estimated large systems, singular values, scaling, uncertainty, and controllability or observability Gramians are more informative than a raw determinant.

## 3. Preset A — Rotation and invariant circles

At feedback gain g,

$$
x'=-gx-y,\\qquad y'=x.
$$

The input enters x and output measures x. At g=0:

$$
A=\\begin{pmatrix}0&-1\\\\1&0\\end{pmatrix},\\quad\\operatorname{tr}A=0,\\quad\\det A=1,\\quad\\Delta=-4.
$$

The eigenvalues are plus and minus i. The exact derivative of

$$
I=x^2+y^2
$$

is zero, so each circle is invariant. The origin is stable but not attracting.

The controllability determinant is 1 and the observability determinant is -1. Positive g gives negative trace and positive determinant, hence asymptotic stability. Negative g creates positive trace and instability.

For the unit-circle start (1,0), x=cos t and y=sin t at zero gain. Therefore:

$$
\\text{long-time average of }x=0,\\qquad\\text{long-time average of }x^2=\\frac12.
$$

The numerical table estimates both and reports maximum drift of I.

This correct time average does not prove ergodicity for uniform area on the disk. Radius is invariant, and the inner disk of radius one half has area probability one quarter. That nontrivial invariant set rules out disk-area ergodicity. On one named invariant circle, uniform arc length is a different measure.

## 4. Preset B — Controllable second-order plant

The double integrator is

$$
x'=v,\\qquad v'=u,\\qquad u=-g(x+v).
$$

Thus

$$
A=\\begin{pmatrix}0&1\\\\0&0\\end{pmatrix},\\quad B=\\begin{pmatrix}0\\\\1\\end{pmatrix},\\quad C=\\begin{pmatrix}1&0\\end{pmatrix}.
$$

The controllability columns are B and AB:

$$
B=\\begin{pmatrix}0\\\\1\\end{pmatrix},\\qquad AB=\\begin{pmatrix}1\\\\0\\end{pmatrix},
$$

with determinant -1. Observability rows C and CA form the identity. At g=1,

$$
A_{\\mathrm{cl}}=\\begin{pmatrix}0&1\\\\-1&-1\\end{pmatrix},\\quad\\operatorname{tr}A_{\\mathrm{cl}}=-1,\\quad\\det A_{\\mathrm{cl}}=1,\\quad\\Delta=-3.
$$

The closed loop is an asymptotically stable spiral. At g=0, determinant is zero and position can drift with constant velocity. At negative gain, the determinant is negative, producing a saddle.

Investigate how gain changes the exact classification and trajectory. Larger positive gain is not automatically better: this ideal preset has no saturation, noise, delay, uncertainty, or control-energy cost.

## 5. Preset C — Stable but hidden

The third model is

$$
x'=u,\\qquad z'=-z,\\qquad y=x,\\qquad u=-gx.
$$

The actuator and sensor touch only x. Both exact rank determinants are zero. For positive g, eigenvalues are -g and -1, so the origin is asymptotically stable. The z mode remains unreachable and invisible, but it decays on its own.

This is stabilizable and detectable rather than fully controllable and observable. If the hidden equation were z'=z, the inaccessible mode would be unstable and no feedback through this B could stabilize it.

## 6. Numerical contract

The engine uses RK4. For state rate F(z)=A_cl z and step h:

$$
\\begin{aligned}k_1&=F(z),\\\\k_2&=F(z+hk_1/2),\\\\k_3&=F(z+hk_2/2),\\\\k_4&=F(z+hk_3),\\\\z_{\\mathrm{next}}&=z+\\frac h6(k_1+2k_2+2k_3+k_4).\\end{aligned}
$$

The run is deterministic. The engine:

- validates gain as an integer count of quarters;
- validates finite positive step and duration;
- requires an integer number of steps;
- preserves preset data;
- stores every trajectory row;
- samples deterministic rows for the HTML table;
- repeats the endpoint with h/2;
- reports Euclidean distance between endpoints;
- uses trapezoidal time integration for running averages;
- checks squared-radius drift only when it is an exact invariant.

For a smooth fixed-time linear problem, RK4 endpoint differences should decrease at roughly fourth order in the asymptotic range. Step-halving discrepancy is not a rigorous error bound: both runs could share implementation or model error.

Unstable presets can magnify truncation and rounding rapidly. A large plotting window is evidence of the chosen trajectory, not a proof of global behaviour.

## 7. Reading the Canvas

The Canvas shows:

- pale arrows for the closed-loop vector field;
- a gold numerical trajectory;
- a coral circle at the initial state;
- a gold square at the final state;
- axes and a printed window extent.

Colour is redundant with arrow, path, circle, and square shapes. There is no animation or pointer-only state. The instrument therefore respects reduced-motion preferences without a separate mode.

The Canvas has a complete text label with preset, exact trace, determinant, discriminant, stability classification, rank results, endpoint, and step-halving discrepancy. If Canvas initialization fails, a live status points to the unaffected tables.

The exact structural HTML table is authoritative for matrix claims. The numerical table lists time, both state coordinates, squared radius, running x average, and running x-squared average.

## 8. Investigations

### Investigation 1 — Exact versus numerical

Select rotation at zero gain. Change h from 0.2 to 0.05. Record:

- unchanged exact trace, determinant, discriminant, and ranks;
- endpoint step-halving discrepancy;
- maximum squared-radius drift;
- error of the finite-time x-squared average from 1/2.

Explain why structural rows are exact while the last three are numerical.

### Investigation 2 — Cross a stability boundary

Select the double integrator and sweep gain from -1 through 0 to 1. Predict the determinant before viewing it. At g=0, explain why the trace–determinant test reports a nonhyperbolic boundary. At positive g, compare transient shapes.

### Investigation 3 — Stable is not controllable

Select the hidden-mode model at gain 1. Verify both eigenvalues decay and both rank determinants vanish. Write one sentence each for stability, controllability, observability, stabilizability, and detectability.

### Investigation 4 — Long-time evidence

On rotation with g=0, extend duration from 10 to 40. The x-squared average approaches 1/2. Explain why this supports the analytic circle calculation but does not establish:

- disk-area ergodicity;
- mixing;
- a convergence rate for arbitrary observables;
- accuracy beyond the numerical audit.

### Investigation 5 — Aggressive feedback

Increase positive gain. The ideal trajectory may settle faster under some metrics. List at least four missing effects that a practical conclusion needs: actuator limit, input energy, measurement noise, delay, sampling, parameter uncertainty, or unmodeled modes.

<a id="9-tested-engine-boundaries"></a>
## 9. Model boundaries

The exact rows use reduced fractions with a positive denominator. They describe
the rotation's trace, determinant, discriminant and rank determinants, the
unit-gain double integrator's closed-loop matrix and stability, and stable
hidden dynamics that are neither fully controllable nor observable.

The numerical rows approximate conservation and invariant-circle averages for
rotation. On a smooth stable plant, step refinement can reveal the expected
fourth-order regime, subject to roundoff and a sufficiently small step. These
observations do not replace the exact invariant or a general error theorem.
The controls require a valid gain and integration grid; an input rejection is
separate from a mathematical claim about a trajectory.

## Practice with worked solutions

### 1. Exact classification

A closed-loop matrix has trace -3 and determinant 2. What can be concluded?

**Solution.** Its characteristic polynomial is lambda squared+3lambda+2, with roots -1 and -2. The linear origin is asymptotically stable. This does not establish controllability, observability, constraints, or nonlinear global stability.

### 2. Hidden mode

A mode is unobservable but has eigenvalue -5. Can an observer recover its initial amplitude exactly?

**Solution.** No. Distinct initial amplitudes produce identical outputs, so exact reconstruction is impossible. Because the hidden error decays, the pair can still be detectable and an observer estimate can converge.

### 3. Numerical drift

The zero-gain rotation’s squared radius drifts by 10 to the minus 5. Is the differential equation dissipative?

**Solution.** No. The equation conserves squared radius exactly. The drift belongs to numerical approximation and rounding unless the coded equation differs. Refine h and compare a structure-preserving method.

## Accessible route

Every preset, gain, step, and duration choice is a labelled native control. The state-space drawing has an explicit text description, while the exact audit table, numerical diagnostic table, and trajectory samples expose the quantities needed for each investigation without requiring colour or pointer input. Keyboard users can reach the same model states through the controls. The canvas summarizes trajectories; it is not the sole source for stability, rank, invariant, or error conclusions.
`;export{e as default};