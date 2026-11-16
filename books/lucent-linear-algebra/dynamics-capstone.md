# 20. Linear dynamics and a simulation capstone

**Learning goals.** Solve x′=Ax, connect eigenvalues with stability, recognize transient growth, and build a calibrated simulation with explicit validation. Prerequisites: eigenvectors, least squares, QR and SVD, derivatives, and elementary differential equations. Plan two study sessions plus a capstone investigation.

**Point-of-use preparation.** Reconstruct a derivative as a local rate in [The derivative](../lucent-calculus/derivative.md), then use [Differential equations](../lucent-calculus/differential-equations.md) for initial-value problems, the integrating-factor argument, and numerical step refinement. Before the matrix exponential, verify by differentiation that y(t)=ce^(−2t) solves y′=−2y; before the capstone, explain how an initial state differs from its derivative. Return to those worked scalar examples if either check is unclear.

A matrix can describe continuous change as well as a static transformation. In x′(t)=Ax(t), the state x(t) belongs to Rⁿ and Ax(t) is its instantaneous velocity. Temperature differences, coupled concentrations, small mechanical vibrations, and electrical circuits all produce linear models near equilibrium. The model is an assumption about a system; solving its equations accurately does not establish that the assumption is appropriate.

## The matrix exponential connects algebra and calculus

For any square matrix A, define

e^(tA) = I+tA+t²A²/2!+t³A³/3!+⋯.

Use a submultiplicative matrix norm: the term norms are bounded by the scalar exponential series e^(|t|‖A‖), so the series converges absolutely. On bounded time intervals, the derivative series also converges uniformly, justifying termwise differentiation. Consequently (e^(tA))′=Ae^(tA), and e^(0A)=I. Thus x(t)=e^(tA)x₀ solves the initial-value problem x′=Ax, x(0)=x₀. Standard uniqueness for linear differential equations makes it the solution.

If A=VΛV⁻¹ is diagonalizable, powers simplify to Aᵏ=VΛᵏV⁻¹, giving e^(tA)=V diag(e^(λ₁t),…,e^(λₙt))V⁻¹. The coefficients of x₀ in the eigenbasis evolve independently. Diagonalizability makes computation convenient, but the exponential exists even when no eigenbasis exists.

**Worked example: coupled decay.** Let A=[[-1,2],[0,-2]]. Eigenvectors v₁=(1,0) and v₂=(-2,1) have eigenvalues −1 and −2. Since (0,1)=2v₁+v₂, the solution from x₀=(0,1) is

x(t)=(2e^(−t)−2e^(−2t), e^(−2t)).

Differentiate this expression and substitute it into the equation. Both components ultimately tend to zero, but the first initially increases. “Every eigenvalue is negative” describes long-term decay, not monotonic decay of every coordinate.

## Stability requires precise language

The equilibrium zero is **Lyapunov stable** if arbitrarily small initial states remain arbitrarily small for all t≥0. It is **asymptotically stable** if it is stable and all sufficiently small initial states tend to zero. For linear systems, asymptotic stability holds exactly when every eigenvalue has strictly negative real part. An eigenvalue with positive real part makes zero unstable.

At zero real part, inspect the eigenspaces: stability requires that all eigenvalues have nonpositive real parts and every eigenvalue on the imaginary axis be semisimple, meaning it has no nontrivial Jordan blocks. For example, A=[[0,1],[0,0]] has A²=0, so e^(tA)=I+tA. The initial state (0,ε) becomes (tε,ε), eventually leaving any fixed neighborhood. Both eigenvalues are zero, yet the equilibrium is unstable.

In R³, diag(−1,−2,0) is stable but not asymptotically stable: x(t)=(e^(−t)x₁(0),e^(−2t)x₂(0),x₃(0)). The third coordinate remembers its initial value. Strictly negative real parts, rather than merely nonpositive ones, remove every persistent mode.

## Visual laboratory: classify the equilibrium

```mathviz
scene "Two independent modes";
domain -3 3;
range -3 3;
coordinates equal;
param a = -1 from -2 to 1;
param b = -0.4 from -2 to 1;
field velocity(x,y) = (a*x,b*y);
flow velocity from (2,2) time 4 steps 160 color teal;
flow velocity from (-2,2) time 4 steps 160 color rose;
flow velocity from (2,-2) time 4 steps 160 color amber;
```

**Predict →** Classify the four sign combinations of a and b before moving the sliders. **Manipulate →** Make one parameter positive, then exactly zero; edit an initial point onto a coordinate axis. **Explain →** Why can one trajectory approach zero even when the equilibrium is unstable? Stability concerns all nearby initial states. **Transfer →** Write the exact R³ solution after appending a third diagonal entry c and classify c=0 versus c<0. Numerical flow uses an approximate Runge–Kutta method; trajectories leaving the viewport have not disappeared mathematically.

## Transient growth: a second timescale

For A=[[-1,k],[0,-2]], solve the second equation first: y(t)=v e^(−2t). Multiplying x′+x=kv e^(−2t) by eᵗ and integrating gives

x(t)=e^(−t)[u+kv(1−e^(−t))].

This integrating-factor derivation agrees with eigenvector algebra. Large k makes eigenvectors nearly parallel and can amplify a state before eventual decay. At u=0, v=1 and t=ln 2, the state is (k/4,1/4). Its norm exceeds the initial norm whenever |k|>√15. Asymptotic stability permits substantial short-term growth; engineering limits may be exceeded during that interval.

```mathviz
scene "Stable eigenvalues with transient growth";
domain -2 5;
range -2 3;
coordinates equal;
param k = 6 from -8 to 12;
param u = 0 from -1 to 1;
param v = 1 from -1 to 1;
param t = 0 from 0 to 5;
field velocity(x,y) = (-x+k*y,-2*y);
parametric exact(x) = (exp(-x)*(u+k*v*(1-exp(-x))),v*exp(-2*x)) from 0 to 5 color teal;
flow velocity from (u,v) time 5 steps 160 color rose;
point state = (exp(-t)*(u+k*v*(1-exp(-t))),v*exp(-2*t)) color amber;
animate t from 0 to 5 duration 10;
```

**Predict →** Does changing k change either eigenvalue? **Manipulate →** Increase k while keeping u=0 and v=1; scrub `t` and compare the exact curve with the numerical flow. Then change the initial coordinates u and v; both curves update together. **Explain →** Locate the maximum first coordinate by differentiating the exact formula. **Transfer →** Change the numerical step count and report a position error at a specified time, rather than judging accuracy by overlapping pixels.

## Capstone: identify, simulate, and challenge a model

### LA20-CAP-P — Calibration dossier: givens and deliverables

Calibrate a constant real 2×2 matrix in \(x'(t)=Ax(t)\) from the supplied deterministic synthetic observations, then challenge the fitted model with reserved observations. State coordinates are dimensionless, time t is in seconds, derivatives have units s⁻¹, and matrix entries have units s⁻¹. Assume no forcing and exact reset states. Preparation is the course's least-squares, QR and SVD work and this chapter's point-of-use derivative and differential-equation preparation. Preserve a first attempt before opening the complete public reference.

Each calibration row is a separate exact reset at t=0; measure the instantaneous derivative at that reset. Use only these four rows to fit both rows of A:

| Reset state | Observed x₁′ (s⁻¹) | Observed x₂′ (s⁻¹) |
| --- | --- | --- |
| (1,0) | −0.8 | 0 |
| (0,1) | 1.9 | −2 |
| (1,1) | 0.95 | −2 |
| (1,−1) | −3.15 | 2 |

Fix the validation split before fitting or choosing the model: reserve a separate reset to (2,−1), whose observed derivative is (−3.9,1.95) s⁻¹, and reserve the whole trajectory from the exact initial state (2,1):

| t (s) | Observed x₁ | Observed x₂ |
| --- | --- | --- |
| 0 | 2 | 1 |
| 1/2 | 1.710363757 | 0.357879441 |
| 1 | 1.190847198 | 0.155335283 |

Calibration-rate observation offsets are bounded by 0.2 s⁻¹ per coordinate; the reserved derivative offsets by 0.1 s⁻¹ per coordinate; the noninitial trajectory observation offsets by 0.02 per coordinate. The reset observation at t=0 is exact. These are specified deterministic bounds, not estimated standard deviations or confidence intervals; they do not automatically bound fitted-model error. Calibration and reserved-derivative decimals are exact supplied inputs. Each noninitial trajectory coordinate is displayed to nine decimal places, so its underlying observation lies within ±5×10⁻¹⁰ of the printed value. Keep this display uncertainty separate from the 0.02 observation-offset bound.

For a displayed trajectory coordinate d and your prediction p, compare I=[d−5×10⁻¹⁰,d+5×10⁻¹⁰] with B=[p−0.02,p+0.02]. Report certified compatible at display precision when I⊆B, incompatible when I∩B is empty, and unresolved at display precision for partial overlap. An unresolved coordinate is a valid result. Account separately for any numerical error in evaluating p. For vector comparisons, derive the Euclidean tolerance from the coordinate bounds rather than comparing a vector norm directly with 0.02.

Submit one dossier containing the following work:

1. State the model assumptions, units, reset protocol and fixed calibration/validation split. Organize the calibration design matrix and two response vectors without fitting the reserved observations.
2. Fit each row by QR, show both calibration-residual vectors, their orthogonality to the design columns and the total residual sum of squares. Compute the singular values, explain uniqueness of the least-squares estimate, and distinguish this from determining the true generating matrix under bounded observation offsets.
3. Predict the reserved derivative and trajectory, define observation residuals as observed minus predicted, and compare coordinate and Euclidean errors with the stated bounds. Retain any unresolved display-precision conclusions and distinguish model discrepancy from solver error.
4. Derive an exact fitted trajectory from (2,1), verifying both its initial value and differential equation. At final time 1 s, perform simultaneous forward-Euler updates with four and eight equal steps; compare each endpoint against the exact fitted endpoint and explain what two refinements establish.
5. Produce an editable scene for the fitted model and reserved initial state over 0≤t≤1. Adapt the earlier transient-growth scene and distinguish its Runge–Kutta flow from your forward-Euler calculation; record method and step count.
6. Add +0.03 s⁻¹ to the first calibration row's first response, refit using the same design matrix, and report the resulting change in the reserved derivative prediction and residual. Explain structurally why resets confined to (s,0) cannot identify all matrix entries; supply two distinct compatible matrices and address the all-zero-reset case.
7. State what the synthetic construction, finite observations, deterministic bounds and numerical comparisons support, and what they leave untested. Compare your saved first attempt with the complete public reference and use its 100-point rubric to repair specific gaps.

### LA20-CAP-P — Complete public reference

Imagine an engineering test rig with two measured state variables, dynamics x′=Ax, and unknown A. Reset the rig to four states (1,0), (0,1), (1,1), (1,−1). The measured values of x₁′ are y=(-0.8,1.9,0.95,−3.15), while the measured values of x₂′ are z=(0,−2,−2,2). Each row of A is a separate least-squares problem with

X=[[1,0],[0,1],[1,1],[1,−1]].

**Worked calibration.** The columns of X are orthogonal with squared length 3. Its thin QR factorization is Q=X/√3, R=√3 I. Solve Rθ=Qᵀy to obtain θ=(−1,2); solving against z gives (0,−2). Thus Â=[[-1,2],[0,-2]]. The first-response residual y−Xθ=(0.2,−0.1,−0.05,−0.15) is orthogonal to both columns of X. Its norm is √0.075; the second response fits exactly.

In this carefully designed example XᵀX=3I. For general data, use a QR solver instead of explicitly inverting the normal equations. An SVD X=UΣVᵀ exposes missing or weakly observed directions: zero singular values prevent unique identification, and small singular values amplify measurement errors. Here both singular values are √3. In an n-state model, X has n columns and each of the n response coordinates supplies one regression; the reasoning is unchanged.

Validation must use information beyond the fitted residual. Reserve new states or whole trajectories before calibration. For the held-out state (2,−1), the model predicts derivative (−4,2). Compare this with a new measurement and its uncertainty. Compare simulated trajectories against observations at later times; perturb measurements and refit to estimate sensitivity. If derivatives were estimated from noisy time samples, acknowledge that differencing amplifies noise and can create correlated errors.

### A complete synthetic validation reference

The following no-hardware option completes the supplied calibration. It is deterministic synthetic data, with a public known generating model, rather than an empirical test-rig measurement or an unseen assessment. For this reference the state coordinates are dimensionless, t is measured in seconds, derivatives have units s⁻¹, and the entries of A have units s⁻¹. The model assumes constant coefficients, no forcing, and exact reset states.

Fix the split before fitting: the original four reset states supply calibration derivatives only; reserve the derivative at (2,−1) and the entire trajectory from (2,1) at t=0, 1/2, 1. The trajectory is not used to select A. Synthetic calibration offsets are bounded by 0.2 per derivative coordinate, the held-out derivative offsets by 0.1, and the trajectory observation offsets by 0.02 per state coordinate. These are specified deterministic bounds, not estimated standard deviations or confidence intervals. The initial state is exact.

Run the following bounded JavaScript with the existing Node.js runtime, or reproduce its arithmetic by hand. It uses no packages, files, random numbers, network, or real learner data. Decimal displays below are rounded; the generator supplies the reference numbers.

```javascript
const A = [[-1, 2], [0, -2]];
const rate = ([u, v]) => [-u + 2 * v, -2 * v];
const exact = (t, [u, v]) => [
  Math.exp(-t) * (u + 2 * v * (1 - Math.exp(-t))),
  v * Math.exp(-2 * t),
];
const add = (values, offset) => values.map((value, i) => value + offset[i]);
const resetStates = [[1, 0], [0, 1], [1, 1], [1, -1]];
const calibrationOffsets = [[0.2, 0], [-0.1, 0], [-0.05, 0], [-0.15, 0]];
const calibration = resetStates.map((state, i) => ({
  state, observedRate: add(rate(state), calibrationOffsets[i]),
}));
const heldOutDerivative = {
  state: [2, -1], observedRate: add(rate([2, -1]), [0.1, -0.05]),
  boundPerCoordinate: 0.1,
};
const trajectoryInitial = [2, 1];
const times = [0, 0.5, 1];
const trajectoryOffsets = [[0, 0], [0.02, -0.01], [-0.01, 0.02]];
const heldOutTrajectory = times.map((t, i) => ({
  t, observedState: add(exact(t, trajectoryInitial), trajectoryOffsets[i]),
  boundPerCoordinate: i === 0 ? 0 : 0.02,
}));
function eulerAtOne(steps) {
  const h = 1 / steps;
  let state = [...trajectoryInitial];
  for (let i = 0; i < steps; i++) {
    const velocity = rate(state);
    state = state.map((value, j) => value + h * velocity[j]);
  }
  return { steps, h, state };
}
console.log(JSON.stringify({
  A, calibration, heldOutDerivative, trajectoryInitial, heldOutTrajectory,
  eulerAtOne: [eulerAtOne(4), eulerAtOne(8)],
}, null, 2));
```

**Worked held-out derivative.** The original QR fit remains Â=[[-1,2],[0,−2]], with calibration residual sum of squares 0.075. At the reserved state the prediction is (−4,2), while the supplied synthetic response is (−3.9,1.95). Define an observation residual as observed minus predicted: (0.1,−0.05), with Euclidean norm √0.0125≈0.111803399. Both coordinate errors lie within the stated bound 0.1, including equality in the first coordinate; the corresponding Euclidean bound is √2·0.1≈0.141421356. Do not compare a vector norm with a one-coordinate bound. Calibration orthogonality does not imply zero held-out error.

**Worked whole-trajectory check.** From the reserved initial state (2,1), the fitted exact solution is x(t)=(4e^(−t)−2e^(−2t),e^(−2t)). It has the correct initial state, and differentiation gives x₁′=−4e^(−t)+4e^(−2t)=−x₁+2x₂ and x₂′=−2x₂, verifying the differential equation.

| t | Exact fitted prediction | Synthetic observation | Observation residual |
| --- | --- | --- | --- |
| 0 | (2,1) | (2,1) | (0,0) |
| 1/2 | (1.690363757,0.367879441) | (1.710363757,0.357879441) | (0.02,−0.01) |
| 1 | (1.200847198,0.135335283) | (1.190847198,0.155335283) | (−0.01,0.02) |

**Display-precision clarification.** The trajectory observations printed above carry a rounding interval of ±5×10⁻¹⁰ in each noninitial coordinate, separate from the 0.02 observation-offset bound. Using those displayed intervals, the first coordinate at t=1/2 and the second at t=1 are unresolved at their 0.02 boundary; the other two noninitial coordinates are certified within the bound. Both noninitial Euclidean comparisons remain within √2·0.02 even allowing the displayed rounding intervals. An unresolved coordinate is a valid first-attempt conclusion. The unrounded public construction defines the reference observations and exact offsets used for the stated reference comparison. Finite JavaScript output is a numerical representation of that construction and may also carry floating-point rounding; it does not remove either distinction.

Each noninitial residual has norm √0.0005≈0.022360680 and each coordinate meets the 0.02 bound. The exact reset has residual zero. This initial state excites both exponential modes; the derivative check alone would not supply a trajectory test. Agreement here checks calculations against a known synthetic construction. It supplies no evidence that an actual physical system has this model or these uncertainty bounds.

**Worked numerical refinement.** Use the fitted model, the same initial state, and final time 1. Forward Euler takes simultaneous component updates x_(j+1)=x_j+hÂx_j; do not update the second component before calculating the first from the old state. For n steps with h=1/n, its endpoint is (4(1−h)^n−2(1−2h)^n,(1−2h)^n). Four steps give (1.140625,0.0625), with Euclidean error 0.094507627 against the exact fitted endpoint. Eight give (1.174209833,0.100112915), with error 0.044160666. The smaller error is consistent with first-order convergence; two refinements alone do not prove an order or supply a guaranteed bound. These solver errors compare against the exact fitted model, separately from observation residuals.

For the editable scene, adapt the preceding transient-growth source: set k=2, set u=2 with its slider range expanded to −3…3, keep v=1, and change the exact curve interval, numerical flow time, t slider maximum, and animation endpoint to 1. Its exact default curve is the one just verified. The scene's numerical flow uses Runge–Kutta, so the Euler endpoint values above belong to the supplied generator, not to that flow. Record the method and step count when comparing numerical values.

**Sensitivity and failure reference.** Perturb the first calibration response by +0.03 in its first coordinate and refit with the same X. Since XᵀX=3I, the fitted first row changes by (0.01,0), while the second row is unchanged. The reserved derivative prediction consequently changes by (0.02,0), and the observation residual becomes (0.08,−0.05). This is one specified sensitivity calculation, not a probabilistic uncertainty estimate. If all reset states instead lie on x₂=0, X has rank at most one; its second singular value is zero and no second column of A can be identified. The two matrices in Exercise 6 supply an explicit failure pair.

**Failure-case clarification.** For a reset (s,0), Ax=s(a₁₁,a₂₁). With exact derivative data and at least one nonzero s, the first column is structurally identifiable; the second column does not affect these predictions. The matrices [[−1,2],[0,−2]] and [[−1,100],[0,5]] both produce (−s,0) for every such reset, while disagreeing elsewhere. If every reset is zero, the design matrix is zero and no entries of A are identified. With noisy observations, a nonzero s makes the first-column least-squares estimate unique; uniqueness of that estimate does not establish the true generating matrix.

#### LA20-CAP-P — Self-review rubric

Use this 100-point self-review or optional reader-review rubric: units, state/rate distinction and model assumptions (10); an explicit calibration/validation split with all observations and bounds (15); QR fit, singular values and identifiability (20); calibration residuals and orthogonality (10); held-out derivative and trajectory residuals with correct component/norm comparisons and synthetic-data limits (20); exact-solution verification and numerical refinement with the methods distinguished (15); the specified perturbation/refit and rank-deficient failure case (10). A picture or checkmark alone does not satisfy any mathematical criterion. The worked reference supplies every requested calculation; use the public models after preserving your own first attempt.

Deliver an editable scene, the data table, your fitted matrix, residuals, singular values, a held-out error, and a paragraph stating units and assumptions. Include an exact-solution check and a numerical step-refinement comparison. Record a failure case: for example, calibrating only along x₂=0 cannot determine the second column of A. A compelling animation should make the model easier to interrogate, while the report supplies its evidence.

## Exercises

1. **Foundation.** For A=diag(−2,3), solve x′=Ax with x₀=(4,−1), and classify zero.
2. **Foundation.** For N=[[0,1],[0,0]], calculate e^(tN) from the series and solve for x₀=(2,−1).
3. **Core.** Show that A=[[0,−1],[1,0]] preserves ‖x(t)‖. Is zero asymptotically stable?
4. **Core.** In the transient-growth family with x₀=(0,1) and k>0, find the time and value of the maximum first coordinate.
5. **Core.** Verify the capstone QR fit by computing Xᵀy and Xᵀ(y−Xθ). Compute the residual sum of squares.
6. **Core.** If every calibration state is (s,0), which entries of A are identifiable? Give two different compatible matrices.
7. **Stretch.** For A=diag(−1,−2,0), characterize all initial states that converge to zero. Explain why this does not give asymptotic stability in R³.
8. **Stretch.** For constant forcing x′=Ax+b and invertible A, derive the equilibrium and solution. State what negative-real-part eigenvalues imply, and design one held-out validation test.

9. **Core.** For A=[[-2,5],[0,-2]] and x(0)=(1,1), derive the exact solution and prove its squared Euclidean norm initially increases, despite both eigenvalues being negative.
10. **Stretch.** Let H be symmetric positive definite and suppose AᵀH+HA≤−2βH as quadratic forms, β>0. Prove ‖x(t)‖≤√(λ_max(H)/λ_min(H))e^(−βt)‖x(0)‖ for every solution of x′=Ax and t≥0. State which hypothesis controls the conversion back to Euclidean norm.

<details><summary>Hints</summary>

1. Solve each scalar equation. 2. N²=0. 3. Differentiate xᵀx. 4. Differentiate k(e^(−t)−e^(−2t)). 5. The columns of X are (1,0,1,1) and (0,1,1,−1). 6. Inspect Ax. 7. Examine the constant coordinate. 8. Subtract the equilibrium before solving.


9. **Hint 1.** Write A=−2I+N with N²=0. **Hint 2.** Differentiate e^(−4t)((1+5t)²+1) at zero.
10. **Hint 1.** Differentiate E(t)=x(t)ᵀHx(t), then multiply by e^(2βt). **Hint 2.** Bound that energy above and below using the extremal eigenvalues of H.

</details>

<details><summary>Full solutions</summary>

1. x(t)=(4e^(−2t),−e^(3t)). The eigenvalue 3 is positive, so zero is unstable. Initial states on the first coordinate axis do decay, but stability requires control of all sufficiently small perturbations.
2. All powers from N² onward vanish, giving e^(tN)=[[1,t],[0,1]]. Therefore x(t)=(2−t,−1), which also satisfies x′=(−1,0)=Nx and the initial condition.
3. Since Aᵀ=−A, (xᵀx)′=xᵀ(Aᵀ+A)x=0. Every initial norm stays fixed, so zero is stable. Nonzero trajectories cannot converge to zero, hence it is not asymptotically stable.
4. The derivative k(−e^(−t)+2e^(−2t)) vanishes at t=ln 2. It is positive before and negative afterward, giving the global maximum k/4 for t≥0. This concerns the first coordinate; the time of maximum total norm may differ.
5. Xᵀy=(−0.8+0.95−3.15,1.9+0.95+3.15)=(−3,6). Dividing by 3 gives θ=(−1,2). The residual products are 0.2−0.05−0.15=0 and −0.1−0.05+0.15=0. Squaring its entries and summing gives 0.04+0.01+0.0025+0.0225=0.075.
6. Ax=s(a₁₁,a₂₁), so only the first column is identifiable, provided at least one nonzero s is observed. Matrices [[−1,2],[0,−2]] and [[−1,100],[0,5]] agree at every sampled state but make radically different predictions elsewhere.
7. The solution converges to (0,0,x₃(0)); it tends to zero exactly on the plane x₃(0)=0. Every ball around zero contains points outside this plane whose third coordinates persist. Thus no full neighborhood is attracted to zero.
8. Equilibrium requires Ax*+b=0, so x*=−A⁻¹b. For u=x−x*, u′=Au, hence x(t)=x*+e^(tA)(x₀−x*). Negative real parts imply convergence to x* from every initial state. One validation test reserves a new initial state, predicts its entire trajectory before observing it, and reports errors at fixed measurement times alongside sensor uncertainty and the numerical step-refinement error. Agreement only at equilibrium would leave transient behavior untested.


9. Commutation with −2I and N²=0 give e^(tA)=e^(−2t)(I+tN). Thus x(t)=e^(−2t)(1+5t,1). Its squared norm is e^(−4t)((1+5t)²+1), with derivative at zero −4·2+10=2>0. Both eigenvalues are −2, so the state eventually decays, but Euclidean norm grows for a short initial interval. The calculation tests norm growth directly rather than inferring it from a single coordinate.
10. Differentiation gives E′=xᵀ(AᵀH+HA)x≤−2βE. Therefore (e^(2βt)E(t))′≤0 and E(t)≤e^(−2βt)E(0). Positive definiteness gives λ_min(H)‖x(t)‖²≤E(t) and E(0)≤λ_max(H)‖x(0)‖². Combine and take nonnegative square roots to obtain the bound. The positive lower eigenvalue is necessary to turn energy control into control of every Euclidean direction; a semidefinite H could ignore nonzero invisible directions.

</details>


## Optional clinic: when does the model certify a tolerance?

This untimed clinic extends the chapter's existing transient-growth example. It sits outside the original two-session-plus-capstone study promise; no completion time or marking calibration is supplied. The aim is to prove a statement about every initial state, then choose a waiting time that certifies a fixed tolerance for every later state. Work through the written argument even if you use the diagrams.

### Fix the clock, scale and norm first

We use normalized time \(\theta\ge0\). Every prime in this clinic means differentiation with respect to \(\theta\). The model is
\[
z'=A_kz,\qquad z=(x,y)^{\mathsf T},
\]
\[
A_k=\begin{pmatrix}-1&k\\0&-2\end{pmatrix}.
\]
The known parameter \(k\) is any fixed finite real number. The two state coordinates are dimensionless and use one fixed Euclidean norm. We do not change that norm to make a target easier.

For a physical interpretation, fix a reference time \(T_\star>0\) and a common state scale \(S>0\). Let \(q=(q_1,q_2)\) contain commensurate quantities measured in the same unit, and set
\[
\theta=t/T_\star,\qquad z=q/S.
\]
The specified physical family is
\[
\frac{dq}{dt}=\frac1{T_\star}A_kq.
\]
Its normalized rates and \(k\) are dimensionless. The same \(S\) divides both components, so
\[
\|q\|_2=S\|z\|_2.
\]
A physical tolerance \(\delta\) becomes \(\tau=\delta/S\); a normalized waiting time \(\Theta\) becomes physical time \(T_\star\Theta\). The clock, scale, norm, initial state and model remain fixed while time changes. All logarithms are natural, and their arguments below are dimensionless ratios.

If two state components have different physical units, first justify a fixed nondimensionalization and state which norm it defines. That is a modeling choice. Here we use the common-scale convention above. The adapted coordinate introduced later is a proof device; its energy is not asserted to be physical stored energy. No parameter uncertainty, time-varying coefficient or numerical-solver guarantee is part of this exact model.

### Saved investigation: from a sign to a certificate

Save your prediction before exploring each stage, then compare and revise it after reading the reasoning. The stage checklists record self-assessment. Each stage has its own controls; changing one does not silently reset the mathematical assumptions of another.

```visual-story
{
  "id": "norm-energy-certificate",
  "title": "What certifies every later state?",
  "prompt": "Save a prediction before exploring each diagram, then compare it with a proof. A selected state or time tests one case; a written inequality supplies the claim about every initial state or every later time. The first diagram uses the original state plane, the second an explicitly adapted plane, and the third a time graph.",
  "stages": [
    {
      "title": "Classify the original norm",
      "body": "These are the fixed original coordinates (x,y), with equal scales. Blue is the circle with the selected initial radius; amber ends at (u,v). The rose segment is one quarter of the initial velocity, anchored at that state, and its tip is marked. This is a tangent construction, not the exact state after one quarter of a time unit. The tip can lie outside the circle even when the initial norm derivative is zero. Use the derivative readout and radial dot product, rather than the tip's distance, to decide initial growth. The witness readout is for the separate analytic initial state (k/2,1); it need not describe your selected (u,v).",
      "question": "At the default k=3 and (u,v)=(3/2,1), compute the initial squared-norm derivative despite the negative eigenvalues. Derive exactly which k make norm nonincreasing for every initial state, and provide a violating initial state otherwise. Include equality and the origin. Why can k=2 from (0,1) have an increasing first coordinate while norm decreases?",
      "checkpoint": {
        "hint": "Differentiate E=x²+y² and complete the square. For necessity, choose an initial state. The squared distance of the tangent tip contains an extra positive term, so it does not give the derivative's sign.",
        "explanation": "Differentiation gives E′ = −2x² + 2kxy − 4y². Completing the square gives E′ = −2(x − ky/2)² + (k²/2 − 4)y². Hence E′≤0 at every state exactly when k²≤8. If k²>8, initial (k/2,1) gives E′(0)=k²/2−4>0; continuity yields an interval of actual growth. Both eigenvalues remain −1 and −2, so all solutions eventually decay even when norm can first grow. At the default E′(0)=1/2. For k=2, E′ = −2(x−y)² − 2y² is negative at every nonzero state, although x′(0)=2 at (0,1). At k²=8, the zero-derivative line is x=ky/2. With h=x−ky/2, h′=(3k/2)y on h=0, so that line is not invariant away from zero. A nonzero solution cannot have constant norm on a positive interval. The critical signs are included in nonincrease; the origin is stationary. The tangent tip has squared radius E0 + E′0/4 + ||A z0||²/16, which explains why an outside tip alone proves no growth claim.",
        "criteria": [
          "Derives the original squared-norm derivative.",
          "Proves both directions of the all-initial-state criterion.",
          "Includes the critical values and stationary origin.",
          "Separates coordinate growth, tangent geometry and a universal norm claim."
        ]
      },
      "scene": "scene \"A sign test for the original norm\";\ndomain -4 4; range -4 4; coordinates equal;\nparam k=3 from -4 to 4;\nparam u=1.5 from -2 to 2;\nparam v=1 from -2 to 2;\nlet rad=sqrt(u^2+v^2);\nparametric initial_circle(x)=(rad*cos(x),rad*sin(x)) from 0 to 2*pi color blue;\nvector initial=(u,v) color amber;\nsegment quarter_velocity from (u,v) to (u+0.25*(-u+k*v),v-0.5*v) color rose;\npoint velocity_tip=(u+0.25*(-u+k*v),v-0.5*v) color rose;\nmeasure initial_squared_norm=u^2+v^2;\nmeasure initial_squared_norm_rate=-2*u^2+2*k*u*v-4*v^2;\nmeasure universal_nonincrease_margin=8-k^2;\nmeasure witness_squared_norm_rate=k^2/2-4;\n",
      "focus": [
        "arrow-initial",
        "line-quarter_velocity",
        "point-velocity_tip"
      ]
    },
    {
      "title": "Prove decay in adapted coordinates",
      "body": "This plane has coordinates (w,y)=(x+ky,y), with equal scales. Its radius is sqrt(V), where V=w²+y², rather than the original Euclidean norm. Blue is the initial energy circle; amber is the initial adapted vector. Teal shows the exact adapted trajectory and current vector; rose is the certified radius sqrt(V0) exp(−theta). The control theta is normalized time. The curve's local argument is an angle for a circle and normalized time for the path. The path is sampled from an exact expression; the proof establishes the inequality beyond the sampled points.",
      "question": "Derive w′ and prove V is positive for every nonzero original state. Prove V(theta)≤exp(−2theta)V0. Why does a contracting circle here fail to prove contraction of the original Euclidean norm? State a bound in that original norm using the smallest eigenvalue m of P.",
      "checkpoint": {
        "hint": "Use w′=x′+ky′, and multiply V′≤−2V by the integrating factor exp(2theta). The coordinate change is invertible but generally not orthogonal. Use m||z||²≤V(z) to return to the original norm.",
        "explanation": "The equations give w′ = −x + ky − 2ky = −w and y′=−2y. The map (x,y)↦(x+ky,y) is invertible for every finite k, so V=(x+ky)²+y² is positive away from the origin. Its derivative is V′ = −2w² − 4y² ≤ −2V. Thus exp(2theta)V(theta) is nonincreasing and V(theta)≤exp(−2theta)V0. Explicitly V(theta)=w0² exp(−2theta)+v² exp(−4theta), which checks the bound. The symmetric matrix P=[[1,k],[k,1+k²]] has determinant 1. If m and M are its smallest and largest eigenvalues, m||z||²≤V(z)≤M||z||², giving ||z(theta)||≤sqrt(V0/m) exp(−theta). Here m=1/M>0. The factor sqrt(V0/m) converts back to the original norm; the adapted coordinate change does not preserve Euclidean lengths. At the default V0=85/4 and the energy margin is exp(−2)−exp(−4). At theta=0 the two circles coincide; at the origin all energies are zero. Neither coincidence is a proof of the general claim.",
        "criteria": [
          "Derives the adapted differential equations.",
          "Proves the energy is positive away from zero.",
          "Derives and integrates the energy inequality.",
          "Converts back to the original norm without an orthogonality or sharpness claim."
        ]
      },
      "scene": "scene \"A decaying energy in adapted coordinates\";\ndomain -11 11; range -11 11; coordinates equal;\nparam k=3 from -4 to 4;\nparam u=1.5 from -2 to 2;\nparam v=1 from -2 to 2;\nparam theta=1 from 0 to 4;\nlet w0=u+k*v;\nlet V0=w0^2+v^2;\nlet rho=sqrt(V0);\nlet Vnow=w0^2*exp(-2*theta)+v^2*exp(-4*theta);\nlet envelope=V0*exp(-2*theta);\nparametric initial_circle(x)=(rho*cos(x),rho*sin(x)) from 0 to 2*pi color blue;\nparametric adapted_path(x)=(w0*exp(-x),v*exp(-2*x)) from 0 to 4 color teal;\nvector initial_adapted=(w0,v) color amber;\nvector current_adapted=(w0*exp(-theta),v*exp(-2*theta)) color teal;\nparametric certified_circle(x)=(rho*exp(-theta)*cos(x),rho*exp(-theta)*sin(x)) from 0 to 2*pi color rose;\nmeasure initial_energy=V0;\nmeasure current_energy=Vnow;\nmeasure certified_energy=envelope;\nmeasure energy_margin=envelope-Vnow;\n",
      "focus": [
        "arrow-current_adapted",
        "curve-certified_circle",
        "curve-adapted_path"
      ]
    },
    {
      "title": "Choose an all-later waiting time",
      "body": "The target again uses the fixed original norm, with initial (u,v)=(3/2,1). The horizontal axis is normalized time; the vertical axis is ln(norm/tau), so zero marks the tolerance. Blue is the log of the proved envelope C0 exp(−time), divided by tau; teal is the log of the exact original norm divided by tau. The two points mark the selected time. This is a time graph, not a state plane. A bound above zero is inconclusive, while an actual point below zero concerns only that time. The positive tau controls and fixed nonzero initial state keep these logarithms defined; zero cases are handled in the written proof.",
      "question": "At theta=4 and tau=1/4, compare the actual norm and the proved bound. What does each comparison establish? Derive a sufficient time after which every later state meets the target and choose a later time with positive certificate margin. Explain why this is not necessarily the earliest entry time. Convert the time and tolerance using the fixed reference time and common state scale.",
      "checkpoint": {
        "hint": "Solve C0 exp(−theta)≤tau, then use the decreasing envelope for every later time. The log argument is a dimensionless ratio. For a zero initial state, decide the claim before evaluating a logarithm.",
        "explanation": "With m=1/M and C0=sqrt(M V0), the proved original-norm bound is ||z(theta)||≤C0 exp(−theta). For nonzero initial state and tau>0, Theta=max(0,ln(C0/tau)) is sufficient for that time and every later time. At the default C0≈15.2250 and Theta≈4.10924. At time 4 the actual norm is about 0.0814147<1/4, but the bound is about 0.278856>1/4. The bound has not yet certified success; it has not proved actual failure. Choosing time Theta+1/4 gives bound (1/4)exp(−1/4) and positive margin (1/4)(1−exp(−1/4)). This is a sufficient certificate, not an earliest-entry or sharp-peak claim. The zero initial state meets every nonnegative target from time zero. A nonzero solution cannot reach target zero in finite time because the matrix exponential is invertible; negative tolerance is inadmissible. Physical time is T_star times the normalized waiting time, and physical tolerance is S*tau, with model and scales fixed throughout.",
        "criteria": [
          "Uses the original norm and a dimensionless logarithm ratio.",
          "Derives a sufficient time for every later state.",
          "Separates an inconclusive bound from actual failure or a one-time sample.",
          "Handles zero cases and converts the fixed time and state scales."
        ]
      },
      "scene": "scene \"A waiting time with an all-later certificate\";\ndomain 0 8; range -17 7;\nparam k=3 from -4 to 4;\nparam tau=0.25 from 0.05 to 1;\nparam theta=4 from 0 to 8;\nlet u=1.5; let v=1;\nlet M=(k^2+2+abs(k)*sqrt(k^2+4))/2;\nlet V0=(u+k*v)^2+v^2;\nlet C0=sqrt(M*V0);\nlet raw=ln(C0/tau);\nlet Tcert=(raw+abs(raw))/2;\nfn log_bound(x)=ln(C0/tau)-x;\nfn log_actual(x)=ln(sqrt((exp(-x)*(u+k*v*(1-exp(-x))))^2+(v*exp(-2*x))^2)/tau);\nfn threshold(x)=0;\nplot log_bound color blue;\nplot log_actual color teal;\nplot threshold color amber;\npoint certified_now=(theta,log_bound(theta)) color blue;\npoint actual_now=(theta,log_actual(theta)) color teal;\nsegment time_marker from (theta,-17) to (theta,7) color rose;\nmeasure selected_time=theta;\nmeasure actual_norm=sqrt((exp(-theta)*(u+k*v*(1-exp(-theta))))^2+(v*exp(-2*theta))^2);\nmeasure certified_norm=C0*exp(-theta);\nmeasure target_margin=tau-C0*exp(-theta);\nmeasure sufficient_time=Tcert;\n",
      "focus": [
        "point-certified_now",
        "point-actual_now",
        "line-time_marker"
      ]
    }
  ]
}
```

### Why the norm criterion is sharp

Put \(E=\|z\|_2^2=x^2+y^2\). Differentiating squared norm also works at the origin:
\[
E'=z^{\mathsf T}(A_k^{\mathsf T}+A_k)z.
\]
More generally, for a constant real matrix, norm is nonincreasing along every solution exactly when its symmetric sum \(A^{\mathsf T}+A\) is negative semidefinite. One direction follows by differentiating along every trajectory. For the other, every vector can be chosen as the initial state, so its derivative at time zero must be nonpositive. Taking square roots preserves comparisons of the nonnegative squared norms.

For this family, complete the square:
\[
\begin{aligned}
E'&=-2x^2+2kxy-4y^2\\
&=-2(x-ky/2)^2\\
&\quad +(k^2/2-4)y^2.
\end{aligned}
\]
Thus the exact universal condition is
\[
\boxed{k^2\le8.}
\]
If \(k^2>8\), choose the initial state
\[
z_0=(k/2,1).
\]
It gives
\[
E'(0)=k^2/2-4>0.
\]
Continuity then gives an initial interval of increasing norm. This proves necessity for both signs of \(k\), rather than relying on a finite angle search.

At the default \(k=3\), \(z_0=(3/2,1)\) gives \(E'(0)=1/2\). By contrast, for \(k=2\),
\[
E'=-2(x-y)^2-2y^2<0
\]
at every nonzero state. Starting at \((0,1)\), the first coordinate has \(x'(0)=2>0\) while the norm decreases. Growth of one coordinate and growth of norm are different questions.

The tangent segment in Stage 1 is also different from a trajectory step. For \(p=z_0+A_kz_0/4\),
\[
\begin{aligned}
\|p\|_2^2
&=E_0+\tfrac14E'_0\\
&\quad+\tfrac1{16}\|A_kz_0\|_2^2.
\end{aligned}
\]
Its tip can lie outside the initial circle even when \(E'_0=0\). The radial dot product, or the derivative readout, establishes the instantaneous sign.

The eigenvalues stay \(-1,-2\) for every \(k\). The already derived exact solution is
\[
y(\theta)=v e^{-2\theta},
\]
\[
\begin{aligned}
x(\theta)
&=e^{-\theta}\bigl[u\\
&\qquad+kv(1-e^{-\theta})\bigr].
\end{aligned}
\]
Every solution tends to zero. This eventual convergence does not force norm nonincrease at every earlier time. The earlier chapter's comparison uses \((u,v)=(0,1)\) and \(\theta=\ln2\). Its condition \(|k|>\sqrt{15}\) remains a correct sufficient growth witness for that state and time. It is not the sharp threshold over all initial states.

### Include the critical line and the origin

If \(k^2<8\), the completed-square expression is negative at every nonzero state. At \(k^2=8\),
\[
E'=-2(x-ky/2)^2\le0.
\]
Both exact critical signs \(k=\pm2\sqrt2\) belong to the nonincrease regime. A zero instantaneous derivative occurs on \(x=ky/2\), but it does not produce a nonzero constant-norm trajectory. Indeed, with \(h=x-ky/2\),
\[
h'=-x+2ky,
\]
and on \(h=0\),
\[
h'=(3k/2)y.
\]
The zero-derivative line is not invariant away from the origin. If norm were constant on a positive interval, integrating its continuous nonpositive squared-norm derivative would force \(h=0\) throughout that interval, a contradiction. Every nonzero trajectory therefore decreases in norm between distinct times at the critical values, despite possible zero instantaneous derivative.

For \(k=0\), the coordinates decay independently. For \(z_0=0\), the state stays zero; no strict-decrease claim applies to it. A nearby decimal control value is not an exact test of an irrational critical parameter.

### A positive energy, then a bound in the original norm

Set \(w=x+ky\). The differential equations give
\[
w'=(-x+ky)-2ky=-w.
\]
The change \((x,y)\mapsto(w,y)\) is invertible for every finite \(k\). Consequently
\[
V=(x+ky)^2+y^2
\]
is positive at every nonzero original state. It satisfies
\[
V'=-2w^2-4y^2\le-2V.
\]
Multiplying by \(e^{2\theta}\) and integrating gives
\[
V(\theta)\le e^{-2\theta}V(z_0).
\]
The exact expression checks the same conclusion:
\[
\begin{aligned}
V(\theta)
&=(u+kv)^2 e^{-2\theta}\\
&\quad+v^2 e^{-4\theta}.
\end{aligned}
\]
This argument uses this family's distinct decay modes. It does not assume that every stable matrix has an eigenbasis.

Stage 2 measures radius in the adapted \((w,y)\) plane. To return to the original norm, use the positive matrix
\[
P=\begin{pmatrix}1&k\\k&1+k^2\end{pmatrix},
\]
for which \(V=z^{\mathsf T}Pz\) and \(\det P=1\). Let \(m,M\) be its smallest and largest eigenvalues. Chapter 16 gives
\[
m\|z\|_2^2\le V(z)\le M\|z\|_2^2.
\]
Here
\[
2M=k^2+2+|k|\sqrt{k^2+4},
\]
\[
m=1/M>0.
\]
Define
\[
C_0=\sqrt{V(z_0)/m}.
\]
The resulting bound uses the fixed original norm:
\[
\boxed{\|z(\theta)\|_2\le C_0e^{-\theta}.}
\]
The coordinate change is generally not orthogonal. A shrinking adapted circle therefore does not show that the original norm is contractive. This estimate includes a prefactor and is not asserted to be the sharp transient gain.

At the Stage 2 default, \(V(z_0)=85/4\). At \(\theta=1\),
\[
V(1)=\tfrac{81}{4}e^{-2}+e^{-4},
\]
while the certified energy is \((85/4)e^{-2}\). Their difference is \(e^{-2}-e^{-4}>0\). These are energy values rather than original norms. At time zero the energy circles coincide; at the zero state all energies vanish. Those cases check the formulas but do not replace the proof.

### What a waiting time actually certifies

For nonzero \(z_0\) and a target \(\tau>0\), the inequality
\[
C_0e^{-\theta}\le\tau
\]
is guaranteed once
\[
\Theta=\max\{0,\ln(C_0/\tau)\}.
\]
The decreasing envelope then certifies the target for every later time, not only at one displayed point.

At the Stage 3 default, put
\[
C_0=\sqrt{\frac{85(11+3\sqrt{13})}{8}}.
\]
This is approximately \(15.2250\). The selected time \(4\) gives these separate comparisons:

- Actual norm: approximately \(0.0814147<1/4\).
- Proved upper bound: approximately \(0.278856>1/4\).
- Certificate margin: approximately \(-0.0288564\).
- Sufficient time: \(\ln(4C_0)\), approximately \(4.10924\).

The actual point already meets the target. The selected upper bound has not certified it yet; that does not establish actual failure. Nor does one small actual point supply an all-later argument. The proof provides that quantifier through its decreasing envelope. The sufficient time is not claimed to be the earliest actual entry time or the time of a sharp peak.

For \(z_0=0\), choose time zero before evaluating any logarithm. For nonzero \(z_0\) and \(\tau=0\), no finite time reaches zero: a matrix exponential is invertible. Negative tolerance is inadmissible. Arbitrarily small positive tolerances remain covered by the theorem although the controls have a positive lower bound.

In physical units the same result reads
\[
\|q(t)\|_2\le SC_0e^{-t/T_\star}.
\]
With \(\delta=S\tau\), a sufficient physical time is \(T_\star\Theta\). All scales, model coefficients and the original norm remain fixed.

The finite controls illustrate the exact proofs. Stage 3 plots the dimensionless log ratio \(\ln(\text{norm}/\tau)\), not another state coordinate. Zero marks the target. With its fixed \(v=1\) and positive \(\tau\), every plotted logarithm is defined. Numerically sampled curves and approximate readouts do not prove a claim for all real \(k\), initial states or later times.

### Notebook: change the waiting-time decision

Keep the model, initial state, norm and target fixed. Predict the six numeric show outputs before running. The notebook also displays definition cards; six numeric outputs does not mean six total cards. Both functions below are unary and use their argument as normalized time.

```notebook
param k=3 from -4 to 4;
param tau=0.25 from 0.05 to 1;
let u=1.5; let v=1;
let M=(k^2+2+abs(k)*sqrt(k^2+4))/2;
let V0=(u+k*v)^2+v^2;
let C0=sqrt(M*V0);
let raw=ln(C0/tau);
let Tcert=(raw+abs(raw))/2;
fn bound(x)=C0*exp(-x);
fn actual(x)=sqrt((exp(-x)*(u+k*v*(1-exp(-x))))^2+(v*exp(-2*x))^2);
let wait=4;
show C0;
show Tcert;
show wait;
show actual(wait);
show bound(wait);
show tau-bound(wait);

```

**Waiting-time edit.** Replace only

```text
let wait=4;
```

by

```text
let wait=Tcert+0.25;
```

Keep all six show statements. Explain which two numeric outputs remain fixed, which four are evaluated at a changed time, and what gives an all-later conclusion. The positive interval of \(1/4\) avoids teaching the decision from a tiny rounding residual at an exact equality boundary.

<details><summary>Waiting-time hint</summary>

The first two outputs depend on the unchanged model, initial state and target. The actual norm addresses one time. The proved decreasing envelope converts a sufficiently small bound into a statement about every later time. Do not change the initial state or target to force success.

</details>

<details><summary>Waiting-time full answer</summary>

At the default, the outputs are:

- \(C_0\approx15.2250434\).
- Sufficient time: \(\ln(4C_0)\), about 4.1092360.
- Waiting time \(4\).
- Actual norm \(\approx0.0814147\).
- Certified norm \(\approx0.2788564\).
- Target margin \(\approx-0.0288564\).

After the single edit, the first two numeric outputs stay fixed. Put
\[
a=\ln(4C_0)+1/4.
\]
The remaining outputs are:

- Waiting time \(a\approx4.3592360\).
- Actual norm \(\approx0.0570563\).
- Certified norm: \((1/4)e^{-1/4}\), about 0.1947002.
- Positive margin: \((1/4)(1-e^{-1/4})>0\), about 0.0552998.

The exact actual norm at that time is
\[
p=9/2-3e^{-a},
\]
\[
\|z(a)\|_2=e^{-a}\sqrt{p^2+e^{-2a}}.
\]
For the authored notebook controls, the comparison already proved gives \(C_0\ge\|z_0\|_2\). Here \(\|z_0\|_2=\sqrt{13}/2>1\), while \(\tau\le1\), so \(\ln(C_0/\tau)>0\). Thus the edited bound is exactly \(\tau e^{-1/4}\) in the real mathematics throughout that control box. In the general theorem, where the maximum defining \(\Theta\) could choose zero, waiting \(\Theta+1/4\) instead yields a bound at most \(\tau e^{-1/4}\).

The proof certifies this target at the edited time and every later time. It does not claim the earliest entry time. Physical waiting time is \(T_\star a\). The written zero-state and zero-tolerance branches remain necessary; the positive-domain notebook does not approximate those cases by adding a small number inside a logarithm.

</details>

### Independent changed task: all weights for a defective family

This task has no new diagram or controls. Work in the same normalized time and fixed original norm. Let
\[
B_k=\begin{pmatrix}-1&k\\0&-1\end{pmatrix},
\qquad z'=B_kz,
\]
with known fixed finite real \(k\).

Derive the exact solution from \(z_0=(u,v)\). Find exactly when every initial state has nonincreasing Euclidean norm, including the critical values. Find **all** \(c>0\) for which
\[
W_c=x^2+cy^2
\]
satisfies \(W_c'\le-W_c\) at every state, proving necessity and sufficiency. Discuss \(k=0\) and the equality \(c=k^2\).

Then take \(k=3\), \(z_0=(1,1)\), and target \(1/10\). Choose the smallest valid weight and certify a normalized time after which the original norm is at most the target for every later time. State its physical interpretation and compare with the exact solution. A small sampled norm is not an all-later argument.

<details><summary>Defective-family hint</summary>

Solve the second equation, then use an integrating factor for the first. Differentiate squared norm and complete the square. For the energy, complete \(W_c'+W_c\); to prove necessity, try the initial state \((k,1)\). When converting back to Euclidean norm, retain the factor \(\min(1,c)\).

</details>

<details><summary>Defective-family full answer</summary>

The integrating-factor calculation gives
\[
y(\theta)=v e^{-\theta},
\]
\[
x(\theta)=e^{-\theta}(u+kv\theta).
\]
For \(k\ne0\), the eigenvalue \(-1\) has only one eigendirection; no eigenbasis justified the calculation. At \(k=0\), the matrix is \(-I\) and every direction is an eigendirection. Every solution tends to zero because both \(e^{-\theta}\) and \(\theta e^{-\theta}\) tend to zero. The special trajectories with \(v=0\) have no polynomial term and cannot settle a universal claim.

Differentiating \(E=x^2+y^2\) gives
\[
\begin{aligned}
E'&=-2(x-ky/2)^2\\
&\quad +(k^2/2-2)y^2.
\end{aligned}
\]
Thus the sharp all-initial-state criterion is
\[
\boxed{|k|\le2.}
\]
When \(|k|>2\), the initial state \((k/2,1)\) makes \(E'(0)>0\). When \(|k|<2\), the derivative is negative at every nonzero state. At \(k=\pm2\), write \(h=x-ky/2\). Then \(E'=-2h^2\); on \(h=0\),
\[
h'=-x+(3k/2)y=ky.
\]
The zero-derivative line is not invariant away from zero. As in the main proof, no nonzero trajectory keeps constant norm on a positive interval; norm decreases between distinct times despite possible zero instantaneous derivative. At \(k=0\), \(E'=-2E\). The origin is stationary.

For a positive weight \(c\),
\[
\begin{aligned}
W_c'+W_c
&=-x^2+2kxy-cy^2\\
&=-(x-ky)^2\\
&\quad -(c-k^2)y^2.
\end{aligned}
\]
Consequently the complete set of valid weights is
\[
\boxed{c>0,\qquad c\ge k^2.}
\]
These conditions suffice because both squared terms have nonpositive coefficients. If \(c<k^2\), the state \((k,1)\) gives
\[
W_c'+W_c=k^2-c>0,
\]
which proves necessity.

Equality \(c=k^2\) is allowed when \(k\ne0\). Even when its residual square vanishes, \(W_c'\le-W_c<0\) at every nonzero state. At \(k=0\), every positive \(c\) works, but there is **no smallest positive valid weight**. Its infimum is zero; \(c=0\) is excluded because the energy would not be positive definite.

Integrating the energy inequality yields
\[
W_c(\theta)\le e^{-\theta}W_c(z_0).
\]
The comparison with the original norm is
\[
\min(1,c)\|z\|_2^2\le W_c(z).
\]
Therefore
\[
\begin{aligned}
\|z(\theta)\|_2
&\le\sqrt{\frac{W_c(z_0)}{\min(1,c)}}\\
&\qquad\cdot e^{-\theta/2}.
\end{aligned}
\]
The denominator matters for valid weights below one.

For \(k=3\), \(z_0=(1,1)\), the initial squared-norm derivative is
\[
E'(0)=-2+6-2=2>0.
\]
The smallest valid weight is \(c=9\), and \(W_9(z_0)=10\). Hence
\[
\|z(\theta)\|_2\le\sqrt{10}\,e^{-\theta/2}.
\]
The right side is at most \(1/10\) once
\[
\boxed{\theta\ge\ln1000.}
\]
It decreases thereafter, giving the requested all-later certificate. The exact solution is
\[
z(\theta)=e^{-\theta}(1+3\theta,1).
\]
It verifies the model and initial growth. The certificate gives a sufficient time, not necessarily the earliest entry time or a sharp peak.

With physical matrix \(B_k/T_\star\), sufficient physical time is \(T_\star\ln1000\), and the physical tolerance is \(S/10\). For zero initial state choose time zero. For nonzero initial state and zero tolerance there is no finite arrival; negative tolerance is inadmissible.

</details>

### What the investigation has established

You now have a sharp universal sign criterion, an explicit violating state when it fails, and an energy proof that yields a sufficient all-later tolerance certificate in the original norm. Neither finite controls nor sampled exact curves establish the universal statements. The changed task shows that the certificate operation remains meaningful when an eigenbasis is unavailable.

For the general quadratic-energy method, see Stephen Boyd's [EE363 Lecture 13](https://ee363.stanford.edu/archive/lectures/lq-lyap.pdf) and [Lyapunov theory notes](https://ee363.stanford.edu/archive/notes/lq-lyap-notes.pdf). The critical semidefinite cases here are settled by the explicit arguments above; strict negative definiteness is a sufficient condition, not a necessary condition for norm nonincrease.

## Core development: norm certificates and uniqueness of evolution

The complete calibration dossier above remains the core synthesis, with its original observations, response units, reserved comparisons and worked reference. The optional inference unit [Inference from linear data](inference-linear-data.md) develops the later tolerance clinics separately. The following arguments strengthen the main mathematical distinction between eventual stability and monotone change of a specified norm.

**Theorem 20.1 (Euclidean contraction criterion).** For a real square matrix A, every solution of x′=Ax has nonincreasing Euclidean norm for t≥0 if and only if its symmetric part S=(A+Aᵀ)/2 is negative semidefinite. If S≤−αI with α>0, then ‖x(t)‖≤e^(−αt)‖x(0)‖ for every initial state and t≥0.

*Proof.* Along a solution, (‖x‖²)′=xᵀ(Aᵀ+A)x=2xᵀSx. If S is negative semidefinite, this derivative is nonpositive at every state and time, proving nonincrease. Conversely, if every initial state has a nonincreasing norm, its squared norm has nonpositive right derivative at t=0. Since the initial state is arbitrary, 2uᵀSu≤0 for every u, exactly negative semidefiniteness.

Under the stronger bound, differentiate e^(2αt)‖x(t)‖². Its derivative is e^(2αt)(2α‖x‖²+2xᵀSx)≤0. Its initial value is ‖x(0)‖², so division by the positive exponential and taking square roots gives the asserted estimate. ∎

A zero derivative at one state need not mean its whole trajectory has constant norm: the state may move into a direction where the derivative is negative. Also, negative real parts of eigenvalues do not imply S≤0. They settle an eventual stability question, whereas this theorem settles a monotonicity question in a particular metric.

### Worked example 2: defective decay with immediate norm growth

Let A=[[-1,3],[0,-1]]. Write A=−I+N, where N²=0. The exact exponential is e^(tA)=e^(−t)(I+tN), so x(0)=(1,1) gives x(t)=e^(−t)(1+3t,1). Its squared norm has initial derivative −2·2+6=2, strictly positive.

The symmetric part is [[−1,3/2],[3/2,−1]], with eigenvalues 1/2 and −5/2, so it is not negative semidefinite. Nevertheless both eigenvalues of A are −1, and both coordinates tend to zero. A negative repeated eigenvalue can coexist with short-term norm growth because its nontrivial coupling is multiplied by t before exponential decay dominates.

### Worked example 3: a sharp bound for a symmetric decay

For A=[[-2,1],[1,-2]], symmetry gives S=A. Its eigenvalues are −1 and −3, so S≤−I and the theorem yields ‖x(t)‖≤e^(−t)‖x(0)‖. Equality occurs for an initial vector along (1,1), since that mode decays exactly at rate one. An initial vector along (1,−1) decays at rate three and therefore cannot establish the slowest rate for all initial states.

If an initial norm bound R and a positive tolerance τ are supplied, T=max{0,log(R/τ)} is the least uniform waiting time when R>0. This is a statement over all permitted initial states and all later times, justified by the sharp mode. The optional clinic treats zero bounds and more general nonnormal systems, where a larger coordinate-conversion constant may be required.

### Worked example 4: constant forcing changes the equilibrium

Take B=diag(−2,−1), forcing b=(4,−1), and x(0)=0 in x′=Bx+b. The equilibrium is x*=(2,−1). Subtracting it gives a homogeneous equation, so

x(t)=(2−2e^(−2t),−1+e^(−t)).

Its derivative is (4e^(−2t),−e^(−t)); substituting the state into Bx+b gives exactly that pair. The state tends to x*, not to zero. The error x−x* obeys ‖x(t)−x*‖≤e^(−t)√5. Confusing equilibrium location with stability would misinterpret an entirely correct solution.

## The exponential's group law and a direct uniqueness argument

**Proposition 20.2 (One fixed generator).** For a fixed square matrix A and real s,t, e^(sA)e^(tA)=e^((s+t)A). In particular e^(−tA) is the inverse of e^(tA), and x(t)=e^(tA)x₀ is the unique differentiable solution of x′=Ax with that initial state.

*Proof.* Absolute convergence in a submultiplicative norm permits the Cauchy product of the two series. The total coefficient of Aᵏ is Σⱼ₌₀ᵏsʲtᵏ⁻ʲ/(j!(k−j)!)=(s+t)ᵏ/k!, by the scalar binomial theorem. This proves the group law and inverse assertion. If x solves the equation, differentiating y(t)=e^(−tA)x(t) gives y′=−Ae^(−tA)x+e^(−tA)Ax=0, because A commutes with its power series. Hence y(t)=x₀ and multiplication by e^(tA) gives the unique solution. ∎

The fixed-generator hypothesis matters. For unrelated noncommuting matrices, e^(A+B)=e^Ae^B need not hold. Let A=[[0,1],[0,0]] and B=[[0,0],[1,0]]. Their separate exponentials are I+A and I+B, with product [[2,1],[1,1]]. But (A+B)²=I, so every even term of its exponential has equal diagonal entries and every odd term has zero diagonal. Thus e^(A+B) has equal diagonal entries and cannot equal the displayed product. The counterexample identifies a hypothesis rather than relying on numerical rounding.

## Sources

The additional proofs and examples are original. Complementary primary background is Gilbert Strang, MIT OpenCourseWare, [Diagonalization and Powers of A](https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/least-squares-determinants-and-eigenvalues/diagonalization-and-powers-of-a/), and the original sources retained with the optional quadratic-energy clinic, consulted 13 November 2026.

## Summary

The matrix exponential solves every finite constant-coefficient linear initial-value system, including defective cases. Eigenvalues determine eventual stability under the stated structural conditions, while the symmetric part characterises Euclidean norm nonincrease. Positive definite weighted energies can provide useful bounds in another metric. Constant forcing shifts the equilibrium and must be handled before interpreting convergence. The capstone combines exact solutions, regression, uncertainty assumptions and held-out comparisons; none can replace the others. The optional inference unit extends its certificate questions, and the assessment studio provides the next core synthesis.
