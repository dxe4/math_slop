var e=`---
id: recipe-stable-linear-algebra-workflow
title: "A Stable Linear-Algebra Workflow: From Model to Verified Answer"
license: CC BY-SA 4.0
---

# A Stable Linear-Algebra Workflow: From Model to Verified Answer

**Before reading.** Read [Matrices, Equivalence, and Change of Basis](/resources/library:book-linear-algebra-structure-proofs:matrices-and-change-of-basis/), [Linear Maps, Isomorphism, and Rank–Nullity](/resources/library:book-linear-algebra-structure-proofs:linear-maps-isomorphism-rank-nullity/).

Use this recipe when a matrix result will support a scientific, engineering, statistical, or software decision. The workflow begins before selecting a solver and ends after an independently checkable residual, conditioning statement, and sensitivity experiment exist.

It assumes systems, norms, factorizations, singular values, floating-point basics, and access to an implementation appropriate to the application. The steps are algorithm-independent.

## Step 0 — State the mathematical question

Write the requested object and decision tolerance:

- solve $Ax=b$;
- minimize $\\lVert Ax-b\\rVert$;
- find a few eigenpairs;
- estimate rank or a low-dimensional subspace;
- apply a matrix function;
- propagate a state repeatedly.

Do not substitute a nearby task silently. Solving normal equations is a way to approach least squares, not the definition of least squares. Computing all eigenvectors is not necessary when only a dominant invariant subspace is needed.

Record units and the meaning of rows and columns. Adding temperatures to costs or mixing meters with millimeters can create a mathematically legal but meaningless matrix.

## Step 1 — Audit dimensions and structure

Check shapes before values. For $A\\in F^{m\\times n}$ and $x\\in F^n$, $Ax\\in F^m$. Then ask:

- dense, sparse, banded, block, Kronecker, or implicit?
- square, tall, or wide?
- symmetric/Hermitian, triangular, positive definite, stochastic, or orthogonal?
- one right-hand side or many?
- exact entries, measurements, or discretization output?

Verify structural claims numerically with scale-aware residuals. For symmetry, inspect $\\lVert A-A*\\rVert/\\lVert A\\rVert$. Do not call a matrix positive definite because it “looks diagonal-dominant”; use a theorem whose hypotheses hold or a factorization that detects failure.

**Stop condition.** If the representation cannot distinguish absent entries from zeros, or units and indexing are unknown, repair the data pipeline before solving.

## Step 2 — Scale the problem without changing it accidentally

Rows with wildly different units or columns with vastly different magnitudes can harm conditioning and stopping tests. Choose diagonal scalings $D_r,D_c$ and solve an equivalent problem

$(D_r A D_c)y=D_r b$, $x=D_c y$.

Document the transformation. Centering predictors in a regression preserves the fitted affine subspace only when the intercept and coefficient conversion are handled correctly. Normalizing every column to length one changes the meaning of regularization unless penalties are transformed too.

Report results in original units as well as scaled coordinates.

## Step 3 — Estimate conditioning or identifiability

Before promising digits, estimate singular extremes or a relevant condition number. For a square solve, $κ_{2}=\\sigma _max/\\sigma _min$; for least squares, inspect singular values of the design. Compare small singular directions with measurement noise and modelling uncertainty.

Rank needs a tolerance. A typical numerical threshold has the form

$tol = c \\cdot \\max(m,n) \\cdot \\varepsilon \\cdot \\sigma _max$,

but this is a floating-point resolution heuristic, not a scientific noise threshold. If the data are known only to $10^{-3}$, resolving a singular value of $10^{-12}$ is not meaningful merely because double precision can store it.

**Stop condition.** If the desired quantity lies primarily in an unresolved singular direction, report nonidentifiability or regularize with an explicit changed estimand. Do not describe arbitrary digits as recovered information.

## Step 4 — Match factorization to structure

Use a decision table:

\`\`\`text
task / verified structure                 usual first candidate
general dense square solve                pivoted LU
symmetric positive-definite solve         Cholesky
symmetric indefinite solve                pivoted LDL*
tall full-rank least squares              Householder QR
rank-deficient or rank-uncertain fit       pivoted QR or SVD
many sparse SPD unknowns                   preconditioned conjugate gradients
large nonsymmetric sparse solve            GMRES/BiCG-family after analysis
few symmetric eigenpairs                   Lanczos-type method
few nonsymmetric eigenpairs                Arnoldi-type method
\`\`\`

This table is not a universal benchmark. Memory traffic, sparsity ordering, hardware, multiple right-hand sides, and reproducibility requirements may change the choice.

## Step 5 — Define error measures before running

For a solve, choose a residual and scale:

$r=b-Ax̂$,

$\\eta =\\lVert r\\rVert/(\\lVert A\\rVert\\lVert x̂\\rVert+\\lVert b\\rVert)$.

This normwise backward error asks how much relative perturbation could explain the computed solution. If entries have different scales, also use componentwise error.

For least squares, check both residual magnitude and normal-equation orthogonality $\\lVert A* r\\rVert$ (or $\\lVert Aᵀr\\rVert$ over the reals). For an eigenpair $(\\lambda ̂,v̂)$, use

$\\lVert Av̂-\\lambda ̂v̂\\rVert/(\\lVert A\\rVert\\lVert v̂\\rVert)$.

For $A\\approx QR$, check factorization residual and $\\lVert I-Q^{*}Q\\rVert$. Predeclare tolerances based on input uncertainty and decision needs, not whatever the first run happens to achieve.

## Step 6 — Run with diagnostics, not just an answer

Capture:

- algorithm and implementation version;
- numeric precision and hardware-relevant settings;
- pivoting, ordering, preconditioner, and random seed;
- iteration count and full stop reason;
- residual history or factorization errors;
- overflow, underflow, NaN, stagnation, and warning flags;
- elapsed time and peak memory when scale matters.

A solver that stops because it reached a maximum iteration count did not “converge.” A flat residual may indicate the precision floor, a poor preconditioner, loss of orthogonality, or an incompatible system.

## Step 7 — Verify independently

Use at least two checks that do not merely repeat the same code path:

1. substitute the result into the original unscaled equation;
2. compare a small subproblem with exact arithmetic or hand calculation;
3. compare factorization families, such as QR and SVD;
4. verify invariants: trace versus eigenvalue sum, determinant sign, conserved mass, symmetry, or orthogonality;
5. test a manufactured solution by choosing $x_true$ and setting $b=Ax_true$.

Manufactured solutions test implementation but not whether the model matches reality. Keep those questions separate.

## Step 8 — Stress the fragile directions

Perturb input within credible error bounds, repeat the computation, and compare the decision-relevant output. Include perturbations aligned with small singular vectors when they can be estimated. Change scaling, tolerance, and algorithm. For iterative methods, vary initial guess and preconditioner.

If a rank choice is central, make a table over candidate thresholds:

\`\`\`text
relative cutoff     retained rank    residual      solution norm
1e-4                     7            0.021            12.4
1e-6                     9            0.019            84.7
1e-8                    10            0.019          9200.0
\`\`\`

Nearly unchanged residual with exploding solution norm signals an unstable direction. The correct cutoff depends on signal, noise, and loss—not aesthetics.

## Step 9 — Translate back to the claim

A precise computation can answer the wrong question. State:

- what exact mathematical problem the output approximates;
- forward or backward error evidence;
- conditioning and unresolved directions;
- effects of scaling, regularization, and stopping;
- sensitivity within plausible data uncertainty;
- which modelling assumptions were not tested by linear algebra.

“The solver converged” is a computational statement. It does not establish causal identification, physical adequacy, or representative sampling.

Before interpreting a numerical rank decision, separate exact information
loss from sensitivity. The
[linear-information investigation](#/item/visual-lab-linear-information)
asks whether a target is constant on every measurement fiber, proves the
kernel-containment criterion, and constructs explicit collisions when it
fails. That exact proof does not supply a noise tolerance; the numerical
audit below asks the additional question of which distinctions survive the
stated measurement uncertainty.

## Worked case — nearly dependent sensors

### Worked example: what the singular spectrum can resolve

Three sensors produce columns of a calibration matrix. Sensors 1 and 2 are almost duplicates, so singular values are $12.0,1.7,0.00004$. Measurement error is about $0.001$ in the same scaled units.

An unregularized solve reports large opposite coefficients for sensors 1 and 2. The residual is tiny, but perturbing readings at the known noise scale changes those coefficients drastically.

The audit concludes:

1. the combined direction of sensors 1 and 2 is resolved;
2. their difference direction is below measurement resolution;
3. individual coefficients are not identifiable at the claimed precision;
4. a truncated SVD can estimate the resolved combination, but changes the target;
5. collecting a differently oriented measurement is preferable when individual effects matter.

This is not algorithm failure. The singular values reveal missing information in the experiment.

## Exercises with hints and complete solutions

### Exercise 1: Algorithm choice
<a id="stable-linear-algebra-workflow-ex-1"></a>

A dense $5000\\times 50$ design matrix is plausibly rank-deficient. Choose an initial factorization and justify it.

<details><summary>Hint 1</summary>

The matrix has many more rows than columns.

</details>
<details><summary>Hint 2</summary>

Choose a factorization that exposes rank without squaring the condition number.

</details>
<details><summary>Solution</summary>

Pivoted QR is an efficient first diagnostic; SVD gives the clearest singular spectrum and minimum-norm solutions when cost permits. Normal equations are unattractive because they square conditioning and obscure rank.

</details>

### Exercise 2: Structural failure
<a id="stable-linear-algebra-workflow-ex-2"></a>

Cholesky stops at a negative pivot for a matrix expected to be positive definite. What should happen next?

<details><summary>Hint 1</summary>

A failed positivity assumption is information about the stated problem.

</details>
<details><summary>Hint 2</summary>

Inspect assembly and structure before introducing an unreported regularizer.

</details>
<details><summary>Solution</summary>

Do not add a silent diagonal jitter and proceed. Check symmetry, units, assembly, and the modelling reason for definiteness. Use an eigenvalue or pivoted $LDL*$ diagnostic. If regularization is scientifically justified, record it as a changed problem and stress-test its size.

</details>

### Exercise 3: Small residual
<a id="stable-linear-algebra-workflow-ex-3"></a>

Can a small eigenpair residual certify that all eigenvalues are accurate?

<details><summary>Hint 1</summary>

An eigenpair residual concerns one vector and one proposed eigenvalue.

</details>
<details><summary>Hint 2</summary>

Forward spectral error also depends on separation and nonnormal sensitivity.

</details>
<details><summary>Solution</summary>

No. It supports one approximate eigenpair. Other eigenvalues may be uncomputed, and nonnormal matrices can have sensitive spectra. The residual-to-forward-error relation needs separation and conditioning information.

</details>

### Exercise 4: Reproducibility
<a id="stable-linear-algebra-workflow-ex-4"></a>

Name four details needed to reproduce an iterative sparse solve.

<details><summary>Hint 1</summary>

Record the choices that determine the iteration path.

</details>
<details><summary>Hint 2</summary>

Include both the preconditioner and the precise stopping rule.

</details>
<details><summary>Solution</summary>

Acceptable details include matrix/operator construction, ordering, preconditioner, initial guess, stopping norm and tolerance, maximum iterations, numeric precision, implementation version, and random seed if randomized.

</details>

### Exercise 5: Stop rather than solve
<a id="stable-linear-algebra-workflow-ex-5"></a>

When should this workflow return “not identifiable” instead of a coefficient vector?

<details><summary>Hint 1</summary>

Compare the requested decision tolerance with the effect of credible data perturbations.

</details>
<details><summary>Hint 2</summary>

A returned coefficient is not informative if an unresolved direction can move it arbitrarily far within that uncertainty.

</details>
<details><summary>Solution</summary>

When credible perturbations move the requested coefficient beyond its decision tolerance because the data do not resolve the corresponding singular direction, and no justified constraint or additional data restore identifiability.

</details>

## Deliverables and continuation

Ship the problem statement, structure audit, scaling map, conditioning/rank evidence, algorithm rationale, diagnostics, independent checks, perturbation table, and bounded claim. Continue to numerical linear algebra for error theorems, inverse problems for regularization, sparse methods for ordering and preconditioning, and verified numerics when rigorous enclosures are required.
`;export{e as default};