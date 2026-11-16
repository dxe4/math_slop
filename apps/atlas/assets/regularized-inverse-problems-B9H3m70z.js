var e=`---
id: recipe-regularized-inverse-problems
title: "Regularize and Audit an Inverse Problem"
license: CC BY-SA 4.0
---

# Recipe: Regularize and Audit an Inverse Problem

**Before reading.** Read [Linear Maps, Isomorphism, and Rank–Nullity](/resources/library:book-linear-algebra-structure-proofs:linear-maps-isomorphism-rank-nullity/), [Matrices, Equivalence, and Change of Basis](/resources/library:book-linear-algebra-structure-proofs:matrices-and-change-of-basis/).

An inverse problem asks for a hidden cause from indirect observations: infer an interior image from line integrals, a source from a blurred field, material properties from boundary measurements, or model parameters from time series. Solving the forward equations backward is often unstable. Regularization makes the question more precise by declaring which solutions are plausible and which data features are trustworthy.

## Output of the recipe

Produce more than one reconstructed vector. A defensible output includes:

- a forward model and observation model with units;
- an identifiability or singular-spectrum analysis;
- a stated regularizer and its scientific interpretation;
- a parameter-selection rule that does not reuse evidence silently;
- residual, stability, and synthetic-recovery diagnostics;
- uncertainty or resolution information;
- failure conditions under which the reconstruction should not be interpreted.

## Step 1 — Separate forward physics from measurement

In a discretized linear problem write

$y=A x+\\varepsilon$.

Here $x$ contains unknown parameters or field coefficients, $A$ maps them into ideal observations, $y$ contains measured values, and $\\varepsilon$ combines measurement noise and unmodeled discrepancy. Record the units of every component. If entries of $x$ mix, for example, metres and pascals, an unscaled Euclidean penalty $\\lVert x\\rVert^2$ gives physically arbitrary weight to the numerical unit choices.

The observation covariance $\\Gamma$ supplies a dimensionless weighted residual:

$\\lVert A x-y\\rVert_{\\Gamma^-1}^2=(Ax-y)^T \\Gamma^-1(Ax-y)$.

Whitening with $W^T W=Gamma^-1$ gives residual $W(Ax-y)$. Correlated errors require a nondiagonal covariance or another explicit likelihood; pretending they are independent changes the objective.

## Step 2 — Ask Hadamard's three questions

A well-posed problem has a solution, a unique solution, and continuous dependence on data. Inverse problems can fail any of these.

- *Existence:* noisy $y$ may not lie in the range of $A$.
- *Uniqueness:* a nonzero null vector $z$ with $Az=0$ makes $x$ and $x+z$ observationally indistinguishable.
- *Stability:* very small changes in $y$ can cause large changes in a nominal inverse.

Do not call a parameter identifiable merely because an optimizer returns one value. Optimization chooses a point; identifiability asks whether observations distinguish alternatives.

## Step 3 — Inspect singular directions

For a whitened matrix, take a singular value decomposition

$WA=U Sigma V^T$.

With positive singular values $\\sigma_{j}$, the formal least-squares inverse contains terms

$(u_j^T Wy/sigma_j)v_j$.

Small $\\sigma_{j}$ amplify the data component and noise along $u_j$. Right singular vectors $v_j$ describe poorly observed combinations of unknowns. Exact zero singular values span the nullspace.

### Worked instability example

#### Worked example: a small singular direction

Let

$A=diag(1,0.01)$ and $y=(1,0.011)^T$.

Suppose the noiseless hidden vector is $(1,1)^T$, giving exact data $(1,0.01)^T$; the second observation has only $0.001$ additive error. Direct inversion gives

$x_naive=(1,1.1)^T$.

A one-thousandth data perturbation became a one-tenth parameter error because it was divided by $0.01$. If the second singular value were $10^-6$, the same absolute noise would be catastrophic. Reporting a small data residual alone would miss this instability.

## Step 4 — State a regularized objective

Tikhonov regularization solves

$x_lambda=\\operatorname*{arg,min}_{x} \\{\\lVert W(Ax-y)\\rVert^2 + \\lambda^2 \\lVert L(x-x_ref)\\rVert^2\\}$.

The first term requests agreement at the noise scale. The second favors a reference or structure. Choices of $L$ have meanings:

- $L=I$: small deviation from $x_ref$ in scaled coordinates;
- first differences: small changes between neighboring values (a squared penalty generally smooths rather than preserves sharp jumps);
- second differences: small curvature;
- a physics operator: approximate satisfaction of a constitutive relation.

$\\lambda$ is not merely a numerical knob. It sets a tradeoff between evidence and prior structure. The objective's two terms must be commensurate; nondimensionalize or scale them before interpreting $\\lambda$.

With $W=I$, $L=I$, $x_ref=0$, and an SVD, each singular component is multiplied by filter

$sigma_j/(sigma_j^2+\\lambda^2)$

rather than $1/sigma_j$. The recovered coefficient relative to the formal inverse is shrunk by

$sigma_j^2/(sigma_j^2+\\lambda^2)$.

For the worked diagonal example and $\\lambda=0.02$,

$x_lambda,1=1/(1+0.0004) approximately 0.9996$,

$x_lambda,2=(0.01 times 0.011)/(0.0001+0.0004)=0.22$.

The unstable direction is suppressed, but the estimate is strongly biased toward zero. Regularization trades variance for bias; it does not magically recover information missing from the data. A scientifically suitable nonzero reference or structural $L$ may perform better.

## Step 5 — Choose $\\lambda$ by a declared rule

Reasonable rules depend on available information.

- **Discrepancy principle:** if a reliable noise level is known, choose a solution whose weighted residual is statistically compatible with it. Do not drive residuals far below expected noise.
- **Held-out prediction:** fit using some measurements and select $\\lambda$ on genuinely held-out observations. Account for spatial or temporal dependence when splitting.
- **Generalized cross-validation:** estimate predictive performance from linear smoother traces under its assumptions.
- **Hierarchical Bayes or evidence:** place a model on prior and noise scales, then infer them while checking prior sensitivity.
- **L-curve:** inspect residual norm against penalty norm, but do not assume a visually attractive corner is uniquely correct.

Report a path over plausible $\\lambda$ values. If the scientific conclusion changes across equally defensible values, that sensitivity is part of the answer.

## Step 6 — Understand the Bayesian correspondence

Assume

$\\varepsilon \\sim N(0,\\Gamma)$

and a Gaussian prior density of the form

$p(x) \\propto exp[-(\\lambda^2/2)\\lVert L(x-x_ref)\\rVert^2]$.

When this density has a finite normalizing constant—for example, when $L$ has full column rank in the finite-dimensional formulation—the negative log posterior is, up to constants, one half the Tikhonov objective. Thus $x_lambda$ is a maximum a posteriori estimate. If $L$ has a nullspace, as first- and second-difference operators usually do, the displayed penalty alone defines an improper prior unless the nullspace is constrained or given a separate proper prior. The optimization problem may still have a unique minimizer because the data term supplies information in those directions, but that fact does not by itself turn the prior into a probability distribution.

This connection clarifies assumptions but does not make them true. A Gaussian smoothness prior can erase edges. The posterior covariance in a linear Gaussian model describes uncertainty conditional on $A$, $\\Gamma$, prior family, and hyperparameters; it does not automatically include structural model error.

## Step 7 — For nonlinear maps, localize carefully

If $y=F(x)+\\varepsilon$, linearize near current estimate $x_k$:

$F(x_k+\\delta) approximately F(x_k)+J_k \\delta$,

where $J_k$ is the Jacobian. A regularized Gauss-Newton step solves a linearized penalized problem, often with a trust region or line search.

Local singular values of $WJ_k$ reveal nearby weak directions but not global uniqueness. Multiple remote parameter sets can produce similar outputs. Start from multiple defensible initial points, test nonlinear forward residuals after each step, and avoid claiming global identifiability from one Hessian.

## Step 8 — Validate with resolution and simulation

For linear zero-reference Tikhonov, the reconstruction from noiseless data is

$x_lambda=R_lambda x_true$,

where

$R_lambda=(A^T Gamma^-1 A+\\lambda^2 L^T L)^-1 A^T Gamma^-1 A$

when the inverse exists. $R_lambda$ is a resolution matrix: its rows show how a reported component averages true components. It is generally not the identity.

Perform synthetic tests at several plausible truths, including sharp features the regularizer disfavors. Simulate noise from the proposed observation model, refit without seeing the truth, and summarize bias, spread, coverage, and failure frequency. An “inverse crime” occurs when synthetic data are generated and inverted with exactly the same discretization and physics; use a finer or independently implemented forward simulation where feasible.

Inspect residuals in measurement coordinates. Patterns correlated with time, detector, or predicted magnitude signal model inadequacy. A reconstruction can look smooth and plausible while structured residuals show that it explains the wrong mechanism.

## Accessible diagram description

Picture an ellipse representing all parameter vectors with nearly equal data fit. It is narrow along a well-observed horizontal direction and extremely long along a weak vertical direction. Circular contour lines centered at a reference point represent an identity regularizer. Their first tangency with the ellipse marks the regularized solution. Arrows label “data constrain strongly” and “data constrain weakly”; solid, dashed, and dotted lines distinguish structures without color.

## Failure modes and stop conditions

- Stop if the forward model cannot reproduce calibration data within known discrepancy.
- Unit-dependent penalties make results change when metres are replaced by millimetres.
- Positivity or conservation constraints must be encoded, not repaired by clipping afterward.
- Selecting $\\lambda$ on the same residual used for fitting without adjustment encourages overfit.
- Smoothness can manufacture broad features and hide discontinuities.
- A condition number depends on scaling and norm; report those choices.
- Very fine discretization can introduce more unresolved directions without adding information.
- Posterior or bootstrap intervals conditional on a wrong forward model can be confidently narrow.
- A single best reconstruction hides multimodality and tradeoffs relevant to decisions.

## Exercises with hints and complete solutions

### Exercise 1
<a id="regularized-inverse-problems-ex-1"></a>

For $A=diag(2,0.1)$, find its singular values and condition number in the Euclidean norm.

<details><summary>Hint 1</summary>

For a positive diagonal matrix the diagonal entries are singular values.

</details>
<details><summary>Hint 2</summary>

Divide the largest by the smallest for the Euclidean condition number.

</details>
<details><summary>Solution</summary>

The singular values are $2$ and $0.1$; the condition number is $2/0.1=20$.

</details>

### Exercise 2
<a id="regularized-inverse-problems-ex-2"></a>

If $z=(0,1)^T$ and $A=[[1,0],[0,0]]$, explain the nonuniqueness generated by $z$.

<details><summary>Hint 1</summary>

Multiply the matrix by the stated vector.

</details>
<details><summary>Hint 2</summary>

Adding a kernel vector changes parameters without changing observations.

</details>
<details><summary>Solution</summary>

$Az=0$, so for any scalar $a$, $A(x+az)=Ax$. Observations cannot determine the second component without additional information.

</details>

### Exercise 3
<a id="regularized-inverse-problems-ex-3"></a>

With scalar $A=2$, $y=5$, $L=1$, $x_ref=0$, and $\\lambda=1$, minimize $(2x-5)^2+x^2$.

<details><summary>Hint 1</summary>

Expand the quadratic or differentiate it.

</details>
<details><summary>Hint 2</summary>

Check the second derivative to establish that its stationary point is a minimum.

</details>
<details><summary>Solution</summary>

Differentiate: $4(2x-5)+2x=0$, so $10x=20$ and $x=2$. Equivalently $(A^TA+\\lambda^2)x=A^Ty$ gives $5x=10$.

</details>

### Exercise 4
<a id="regularized-inverse-problems-ex-4"></a>

Derive the component filter $\\sigma/(\\sigma^2+\\lambda^2)$ for $L=I$ in an SVD basis.

<details><summary>Hint 1</summary>

Write the squared objective in a single singular coordinate.

</details>
<details><summary>Hint 2</summary>

Differentiate that scalar quadratic and solve for the coordinate.

</details>
<details><summary>Solution</summary>

In one singular direction minimize $(\\sigma x-y_j)^2+\\lambda^2x^2$. Setting the derivative to zero gives $(\\sigma^2+\\lambda^2)x=\\sigma y_j$, hence the filter.

</details>

### Exercise 5
<a id="regularized-inverse-problems-ex-5"></a>

Explain why an almost-zero residual can be evidence against, rather than for, a reconstruction when measurement noise is known.

<details><summary>Hint 1</summary>

Compare the fitted residual with the assumed measurement uncertainty.

</details>
<details><summary>Hint 2</summary>

An inverse procedure can spend unstable parameter variation fitting noise.

</details>
<details><summary>Solution</summary>

The model is expected to leave residuals comparable with noise. Fitting them nearly to zero often means noise has been interpreted as signal, creating an unstable estimate.

</details>

### Exercise 6
<a id="regularized-inverse-problems-ex-6"></a>

Name one way to avoid an inverse crime in synthetic validation.

<details><summary>Hint 1</summary>

Separate how synthetic data are generated from how they are inverted.

</details>
<details><summary>Hint 2</summary>

Change a discretization or forward solver while retaining a declared comparison target.

</details>
<details><summary>Solution</summary>

Generate data on a finer mesh, with a distinct forward solver, or with additional physical effects not present in the inversion, then assess robustness.

</details>

## Connections and computational ladder

This recipe combines **functional analysis**, **statistical inference**, **convex optimization**, **numerical linear algebra**, and **Bayesian inference**. Continue to compact operators for infinite-dimensional ill-posedness, sparsity penalties and **compressed sensing**, or adjoint methods for PDE-constrained inversion. A programmable companion should expose the singular spectrum, filter factors, residual table, regularization path, and resolution kernels; every plot should have downloadable numeric data and text summaries for nonvisual inspection.
`;export{e as default};