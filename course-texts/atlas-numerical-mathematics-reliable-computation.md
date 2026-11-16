
# Numerical analysis

<!-- euler-course-route -->

## Current course route

Use the [current chapter syllabus](#/courses/atlas-numerical-mathematics-reliable-computation) for the ordered readings, preparation courses and exercises. The earlier explanations and worked tasks below retain their original identities and remain available for study and saved work.

## Purpose and entry diagnostic

This 13-module course teaches learners to formulate, approximate, implement, and audit numerical problems. It assumes algebra, derivatives, integrals, matrices, and the ability to read a short loop. It does not assume prior numerical analysis or optimization.

Before Module 1, verify that you can:

1. differentiate $x^3-2x$ and expand a second-order Taylor formula;
2. compute a definite integral of a polynomial;
3. solve a two-by-two linear system and interpret a residual;
4. distinguish a theorem from evidence produced by finitely many examples.

If derivatives or integrals are unfamiliar, repair those topics first. If matrix elimination is unfamiliar, complete a standard linear-systems unit before Module 6.

## Course outcomes

By the capstone, you will be able to:

- separate conditioning, approximation, arithmetic, implementation, data, and model error;
- derive and audit root, interpolation, quadrature, linear-algebra, and differential-discretization methods;
- select stopping criteria that match units and the error floor;
- formulate convex, nonlinear, and bounded integer optimization problems;
- use duality, relaxations, and search bounds as certificates;
- implement a small deterministic experiment with invariant tests and a text/table alternative;
- write a conclusion that stops exactly where its evidence stops.

The 780-minute route uses selected chapters rather than the whole reference:

| Stage | Modules | Sustained reading | Evidence |
| --- | --- | --- | --- |
| 1. Error and scalar problems | 1–3 | [Finite precision and conditioning](../books/numerical-mathematics-error-algorithms/finite-precision-conditioning.md) and [root certificates](../books/numerical-mathematics-error-algorithms/nonlinear-equations.md) | Error ledger and certified root bracket |
| 2. Approximation | 4–5 | [Interpolation and least squares](../books/numerical-mathematics-error-algorithms/interpolation-splines-least-squares.md) and [differentiation and quadrature](../books/numerical-mathematics-error-algorithms/differentiation-quadrature.md) | Node comparison and truncation/roundoff study |
| 3. Linear systems and evolution | 6–9 | [Linear algebra](#/books/numerical-mathematics-error-algorithms), [initial-value methods](../books/numerical-mathematics-error-algorithms/initial-value-methods.md), and [field discretizations](../books/numerical-mathematics-error-algorithms/boundary-value-pde-methods.md) | Residual/forward-error comparison and refinement table |
| 4. Optimization and differentiation | 10–13 | The matching chapters in the optimization-by-structure reference plus the automatic-differentiation material named below | Primal/dual or branch bound and directional derivative audit |
| 5. Synthesis | Midcourse and capstone | [Verification and reproducibility](#/books/numerical-mathematics-error-algorithms) and [software audit capstones](../books/numerical-mathematics-error-algorithms/numerical-capstone-software-audit.md) | Certified algorithm study |

## Module 1 — Finite arithmetic and the error ledger

Study representable numbers, unit roundoff, cancellation, overflow, and summation order. Build a ledger with columns for input, mathematical target, finite approximation, arithmetic path, and diagnostic.

**Workshop.** Compare $\sqrt{1+x}-1$ with $x/(\sqrt{1+x}+1)$ over decreasing positive x. Explain why the exact identity does not imply equal floating-point behavior.

**Checkpoint.** Given a small residual, state what conditioning information is needed before claiming small forward error.

## Module 2 — Conditioning and backward stability

Derive scalar relative condition numbers and matrix condition estimates. Distinguish unstructured and componentwise perturbations. Interpret backward stability as solving nearby data.

**Checkpoint.** Diagnose $1/(1-x)$ near x=1: is the principal difficulty problem sensitivity, algorithm design, or both?

## Module 3 — Certified scalar roots

Use continuity to bracket roots; derive bisection work bounds. Analyze fixed-point contractions, Newton's local quadratic convergence, multiplicity, secant updates, and safeguarded hybrids.

**Checkpoint.** Return a bracket, point, residual, location bound, and stop reason for one nonlinear equation. Explain why each field differs.

## Module 4 — Interpolation and approximation

Prove uniqueness of polynomial interpolation. Compare monomial, Newton, and barycentric forms; test equally spaced and Chebyshev nodes on the Runge function. Introduce splines, least squares, orthogonality, and norm choice.

**Checkpoint.** Show a case where interpolation error worsens with degree, then explain why this does not contradict uniqueness.

## Module 5 — Differentiation and integration

Derive forward and centered differences, including the truncation-versus-noise balance. Derive degrees of exactness for trapezoidal and Simpson rules. Implement bounded adaptive Simpson and audit a nonsmooth or narrowly peaked integrand.

**Checkpoint.** Produce a table separating analytic reference value, uniform-rule error, adaptive estimate, estimated error, actual error, and work.

## Module 6 — Direct numerical linear algebra

Match structure to LU, Cholesky, QR, and SVD. Explain why normal equations square conditioning. Compute scaled residual and backward error; diagnose rank relative to a declared tolerance.

**Checkpoint.** A tiny residual accompanies a large solution change under small perturbation. Use a two-by-two example to explain rather than merely observe it.

## Module 7 — Sparse and iterative methods

Represent a matrix by its nonzeros or action. Study stationary iteration, conjugate gradients for symmetric positive-definite systems, GMRES orientation, preconditioning, and stopping floors.

**Checkpoint.** Specify original and preconditioned residuals, preconditioner cost, and termination reason for a small iterative solve.

## Module 8 — Initial-value algorithms

Derive Euler local and global error under stated smoothness and Lipschitz bounds. Use the test equation for absolute stability. Compare explicit and implicit behavior, embedded estimates, adaptivity, and structure-preserving diagnostics.

**Boundary.** The differential equation is treated as already posed; qualitative dynamics and modeling are outside this module.

**Checkpoint.** Construct a stable continuous decay whose Euler discretization grows or oscillates, and identify the step restriction.

## Module 9 — Boundary and field discretization

Build a central-difference boundary problem, a cell-flux balance, and a weak-form orientation. Separate consistency, stability, algebraic solve error, and convergence. Use a manufactured solution and refinement order.

**Checkpoint.** Explain why solver tolerance reduction on a fixed mesh is not a mesh-convergence study.

## Module 10 — Convexity and continuous optimization

Use supporting-hyperplane inequalities, smoothness, strong convexity, gradient descent, and dual bounds. Derive a descent step and a rate on a quadratic. Introduce projected gradients for simple constraints.

**Checkpoint.** Supply a primal feasible value and a dual feasible value, interpret their bound directions, and state when a zero gap is expected.

## Module 11 — Nonlinear and constrained optimization

Audit gradients directionally. Study Newton, quasi-Newton, trust regions, active constraints, KKT conditions, constraint qualifications, penalties, and barriers. Keep local stationarity separate from global optimality.

**Checkpoint.** Give a boundary optimum with nonzero ordinary gradient but zero projected-gradient residual.

## Module 12 — Automatic differentiation

Trace forward directional derivatives and reverse adjoints through a small computational graph. Compare complexity when inputs or outputs dominate. Test the result against finite directional differences and branch boundaries.

**Checkpoint.** Reverse-differentiate a scalar composition by hand, then identify one way AD can accurately differentiate the wrong program.

## Module 13 — Integer relaxations and certificates

Formulate binary logic, inspect a linear relaxation, compute an integrality gap, add a valid inequality, and complete a bounded branch-and-bound tree. Use incumbent and node-bound invariants rather than operational case studies.

**Checkpoint.** For a maximization tree, label every node with relaxation upper bound, incumbent lower bound, branch, and pruning reason.

## Weekly audit rhythm

Each module produces four artifacts:

1. a one-page theorem-and-hypothesis ledger;
2. one hand-worked example with intermediate steps;
3. one deterministic program or table and focused test;
4. one failure report in which a tempting method or claim is rejected.

Peer review should try to break the conclusion by changing scale, boundary input, tolerance, or representation while remaining inside the stated problem.

## Midcourse synthesis

Approximate $\int_0^1\exp(-\theta x)\,dx$ for a positive parameter
$\theta$ that is itself found from a scalar equation. The project must:

- bracket and solve the parameter with a location certificate;
- choose a quadrature rule and error strategy across small and large theta;
- compare a direct analytic expression with a cancellation-safe version near theta zero;
- report parameter error separately from quadrature and rounding error.

The exact integral $(1-\exp(-\theta))/\theta$ supplies a benchmark but has its own cancellation issue near zero. This synthesis joins root finding, conditioning, approximation, and stable evaluation.

## Capstone — A certified algorithm study

Choose one of three mathematical targets:

- interpolate and integrate a difficult known function;
- solve a discretized boundary problem with a sparse linear method;
- solve a bounded convex or integer optimization problem with transparent certificates.

Deliver:

1. exact formulation and prerequisites;
2. conditioning or relaxation analysis before computation;
3. dependency-free core implementation or precise pseudocode;
4. deterministic examples including an adversarial boundary case;
5. exact/reference small case;
6. refinement, residual, invariant, or bound table;
7. accessibility-ready text and numerical alternative to every visual;
8. reproducibility record and stop reasons;
9. error budget separating mathematical, statistical/input, and implementation sources;
10. a bounded conclusion plus the next experiment that could falsify it.

## Assessment standard

A correct decimal with no argument is incomplete. Full credit requires a target, hypotheses, algorithm, diagnostic, failure mode, and interpretation. A well-justified “unknown” or “tolerance not met” is stronger than an unsupported answer.

### Feedback map

If Modules 1–3 fail, separate problem conditioning from the arithmetic path
and return a bracket or backward-error certificate. If Modules 4–9 fail,
compare at least three refinements and state which asymptotic regime the rate
claim uses. If Modules 10–13 fail, label primal feasibility, dual or
relaxation bounds, derivative checks, and stopping reasons separately. A
smaller residual on one fixed discretization does not repair a missing
consistency or model argument.

## Continue through the numerical shelf

Use [From Error to Algorithms](#/books/numerical-mathematics-error-algorithms) for the first-course derivations and [Optimization by Structure](#/books/numerical-mathematics-optimization-by-structure) for continuous and integer certificates. The [error-landscape deep dive](../articles/numerical-mathematics-error-landscapes.md) provides an accessible repair, while [discretization verification](../articles/numerical-mathematics-discretization-verification.md) and [integer certificates](../articles/numerical-mathematics-integer-certificates.md) provide advanced routes. Apply the [method-selection recipe](../articles/recipe-numerical-mathematics-method-selection.md), test approximation choices in the [live laboratory](../apps/atlas/index.html#/labs?lab=visual-lab-numerical-error-approximation), and finish with the [solved exercise studio](../problems/atlas/numerical-mathematics-certified-methods/index.md).


## Required selected work across thirteen modules

This is an explicit introductory assignment selection, not the whole of either numerical textbook. Keep all thirteen modules, their explanations, and the weekly four-artifact rhythm above. A deterministic hand table with a focused check is a valid alternative to writing a program. The original 780 minutes describes the earlier outline; it is an authored planning estimate and has not been validated for the 74 questions and portfolios below. Do not silently add these minutes to another course allowance.

Attempt each listed question before opening its complete public Solution. Keep the first response, the comparison/help used, and a distinct corrected response in a learner-owned dated worksheet. Native reading marks and a mutable shared note do not preserve every worksheet or establish a grade, unseen work, or a verified delay. The assignment labels NUM-M01 through NUM-M13 below are local course labels, not new registered shared-writing records or programme allocations.

### Reading and complete-key addresses

Use these exact source labels throughout the assignment table. A printed question number belongs to its named chapter or supplement, not to a global exercise index.

- **EI:** [From Error to Algorithms, Solved Exercise Program, Part I](#/books/numerical-mathematics-error-algorithms). Every selected Exercise has its complete Solution immediately below its question.
- **EII:** [From Error to Algorithms, Solved Exercise Program, Part II](#/books/numerical-mathematics-error-algorithms), with the same question-then-Solution convention.
- **OI:** [Optimization by Structure, Solved Exercise Program, Part I](#/books/numerical-mathematics-optimization-by-structure).
- **OII:** [Optimization by Structure, Solved Exercise Program, Part II](#/books/numerical-mathematics-optimization-by-structure).
- **MC-C:** [Matrix Computation, Conditioning and Stability](../books/matrix-computation-applications/conditioning-and-stability.md), Exercise 2.3 and its Solution.
- **MC-F:** [Matrix Computation, Floating-Point and Factorization](../books/matrix-computation-applications/floating-point-and-factorization.md), Exercise 3.1 and its complete Cholesky solution.
- **MC-Q:** [Matrix Computation, QR, Least Squares, and SVD](../books/matrix-computation-applications/qr-least-squares-svd.md), Exercise 4.2 and its Solution.
- **MC-P:** [Matrix Computation, Preconditioning](../books/matrix-computation-applications/preconditioning.md), Exercise 8.3 and its setup/application-cost Solution.

The Matrix Computation questions are explicit additional textbook selections. They are not silently counted as assignments already present in the original thirteen-module outline.

Before the relevant work, use the complete Answers and Repair notes in the [error-book diagnostic](#/books/numerical-mathematics-error-algorithms) and the [optimization diagnostic](#/books/numerical-mathematics-optimization-by-structure). The former is denoted ED and the latter OD below. Their answers route preparation; they are not an admission score.

### The thirteen required assignments and feedback

| Assignment | Count | Exact existing questions and complete keys | Preparation and retained reading | Checkpoint evidence |
| --- | --- | --- | --- | --- |
| NUM-M01 | 3 | EI 1.1; EI 1.3; EI 1.6 | ED 1–2; finite-precision chapter | Toy spacing, nonassociative rounding, and an exact cancellation-safe identity. |
| NUM-M02 | 3 | EI 1.4; EI 1.5; EI 1.10 | ED 4 and 6; finite-precision chapter | Forward/backward error, relative conditioning and the limits of stability. |
| NUM-M03 | 3 | Nonlinear Equations, Practice 1; Practice 2; Practice 3, each with its Solution | ED 4–6; continuity and the full root-certificate chapter | Repeated-root boundary, bisection budget, and a residual-to-location certificate with a derivative bound. |
| NUM-M04 | 5 | Interpolation, Splines, and Least Squares, Practice 1; Practice 2; Practice 3; EI 5.6; EI 5.12 | ED 5 and 9; distinct nodes and the full interpolation chapter | Uniqueness versus error, perturbation amplification, projection, spline boundary conditions and barycentric evaluation. |
| NUM-M05 | 6 | Numerical Differentiation and Quadrature, Practice 1; Practice 2; Practice 3; EI 8.2; EI 8.3; EI 8.5 | ED 5–7; Taylor remainders and the full differentiation/quadrature chapter | Centered-difference order and noise, step balance, a trapezoid certificate, and the adaptive blind spot. |
| NUM-M06 | 9 | EI 1.13; EI 10.2; EI 10.3; EI 10.6; EI 5.9; EII 7; MC-C Exercise 2.3; MC-F Exercise 3.1; MC-Q Exercise 4.2 | ED 9–12; matrices and the full direct/iterative chapter | A two-by-two residual/error example, elimination/pivoting, Cholesky, QR/normal equations, numerical rank and scaled backward error. |
| NUM-M07 | 10 | EI 10.5; EI 10.7; EI 10.8; EI 10.10; EI 10.11; EI 10.13; EI 10.14; Direct and Iterative Linear Algebra, Practice 2; Practice 3; MC-P Exercise 8.3 | NUM-M06; SPD structure, sparse action, stationary/Krylov and preconditioning sections | Convergence hypotheses, sparse fill, original versus preconditioned residuals, setup/application cost and stopping floors. |
| NUM-M08 | 6 | EII 31; EII 33; EII 36; EII 37; EII 40; Initial-Value Methods, Practice 3 | NUM-M03 and NUM-M06; ED 21–22; full initial-value chapter | Amplification, local/global error assumptions, step doubling, invariant drift, controller exponent and component scales. |
| NUM-M09 | 7 | EII 61; EII 62; EII 68; EII 72; EII 74; EII 75; EII 78 | NUM-M06–07; ED 7, 23–24 and 26; full boundary/field chapter including weak forms | A stencil and actual Poisson system, manufactured forcing, refinement order, flux balance, algebraic/discretization separation and a reference-element stiffness matrix. |
| NUM-M10 | 5 | OI 2.3; OI 2.11; OI 5.1; OI 5.2; OI 5.8 | OD 4 and 6–7; convexity/duality and gradient/Newton chapters | A global convex certificate, actual primal/dual values and strong-duality hypotheses, descent and a quadratic rate. |
| NUM-M11 | 5 | Constraints, KKT, and Globalization, Practice 2; OI 5.12; OI 8.2; OI 8.3; OI 8.14 | NUM-M10; chain rule and constraint qualifications; retain Newton, trust-region, penalty and barrier reading | A boundary optimum with nonzero gradient and zero projected residual, directional audit, KKT, qualification failure and nonglobal stationarity. |
| NUM-M12 | 6 | OI 7.1; OI 7.2; OI 7.3; OI 7.5; OI 7.6; OI 7.10 | NUM-M06 and NUM-M11; chain rule/transposes and the automatic-differentiation chapter | A full forward/reverse sweep, JVP/VJP dimensions, branches, finite-trace versus intended-target differentiation, and a difference audit. |
| NUM-M13 | 6 | OII 1; OII 5; OII 10; OII 29; OII 39; OII 79 | OD 16–20 and 21–26; formulation, relaxation, branch-and-bound and certificate chapters | Binary logic, LP/IP gap, a valid cut, complete branch coverage, a finite exact tree and an honest timeout. |

The counts are 3, 3, 3, 5, 6, 9, 10, 6, 7, 5, 5, 6 and 6: 74 distinct existing questions. The three checkpoint keys below and the fixed portfolio are additional course work, not extra questions hidden inside that count. Optional repair sets are not silently made required.

For NUM-M03 use [Nonlinear Equations and Root Certificates](../books/numerical-mathematics-error-algorithms/nonlinear-equations.md); for NUM-M04 use [Interpolation, Splines, and Least Squares](../books/numerical-mathematics-error-algorithms/interpolation-splines-least-squares.md); for NUM-M05 use [Numerical Differentiation and Quadrature](../books/numerical-mathematics-error-algorithms/differentiation-quadrature.md); for NUM-M06–07 use [Direct and Iterative Linear Algebra](#/books/numerical-mathematics-error-algorithms). The remaining primary readings are [initial-value methods](../books/numerical-mathematics-error-algorithms/initial-value-methods.md), [boundary/field discretizations](../books/numerical-mathematics-error-algorithms/boundary-value-pde-methods.md), [convexity and duality](../books/numerical-mathematics-optimization-by-structure/convexity-optimality-duality.md), [gradient/Newton methods](../books/numerical-mathematics-optimization-by-structure/gradient-newton-quasi-newton.md), [constraints/KKT](../books/numerical-mathematics-optimization-by-structure/constraints-kkt-globalization.md), [automatic differentiation](#/books/numerical-mathematics-optimization-by-structure), [integer formulations](#/books/numerical-mathematics-optimization-by-structure), [branch-and-bound](#/books/numerical-mathematics-optimization-by-structure) and [certificate diagnostics](#/books/numerical-mathematics-optimization-by-structure).

Some important boundaries survive the selection. For $1/(1-x)$, the relative condition number is $|x/(1-x)|$; uncertain input near one is intrinsically sensitive. Subtraction of exactly stored nearby numbers can nevertheless be exact, so sensitivity alone does not prove an unstable evaluation algorithm. Simpson Practice 1 checks the printed odd cubic, not by itself the entire degree-three theorem. The initial-value example $y'=-2y$ with $h=1$ has multiplier $-1$: it alternates without decaying, while strict decay requires $0<h<1$. AD differentiates the executed finite trace, which need not be the intended converged mathematical target. Neither an adaptive-rule agreement nor a tiny fixed-mesh algebraic residual certifies the missing continuous error.

### NUM-M04 checkpoint — a complete finite interpolation comparison

**Task.** Use $f(x)=1/(1+25x^2)$. Compare the degree-one interpolant at nodes $-1,1$ with the degree-two interpolant at nodes $-1,0,1$, at $x=1/2$. Explain whether higher degree must improve the error.

#### NUM-M04 complete key

The two endpoint data are both $1/26$, so $p_1(x)=1/26$. Symmetry and the central value one give $p_2(x)=1-25x^2/26$. At $x=1/2$,

\[
f(1/2)=4/29,\qquad p_1(1/2)=1/26,\qquad p_2(1/2)=79/104.
\]

Thus

\[
|f-p_1|=75/754=300/3016,\qquad |f-p_2|=1875/3016.
\]

The second error is larger. Each polynomial is still the unique interpolant for its own distinct nodes; uniqueness says nothing about between-node error. This is a finite pointwise counterexample, not a proof of asymptotic Runge divergence or an observed comparison with Chebyshev nodes.

### NUM-M07 checkpoint — one complete preconditioned audit

**Task.** For $A=\operatorname{diag}(2,8)$, $b=(2,8)^{\mathsf T}$, $M=\operatorname{diag}(2,4)$ and $x_0=0$, use

\[
r_k=b-Ax_k,\quad z_k=M^{-1}r_k,\quad x_{k+1}=x_k+\tfrac12z_k.
\]

Declare an original absolute infinity-residual tolerance $1/8$. Supply original and preconditioned residuals, cost conventions, and a termination reason. Compare stopping on $\|z_k\|_\infty\le1/8$ alone.

#### NUM-M07 complete key

The exact solution is $x_*=(1,1)^{\mathsf T}$. The error matrix is

\[
I-\tfrac12M^{-1}A=\operatorname{diag}(1/2,0).
\]

At $k=0$, $r_0=(2,8)$ and $z_0=(1,2)$. For $k\ge1$,

\[
x_k=(1-2^{-k},1),\quad r_k=(2^{1-k},0),\quad z_k=(2^{-k},0).
\]

The complete exact hand table is:

| $k$ | $x_k$ | $\Vert r_k\Vert _\infty$ | $\Vert z_k\Vert _\infty$ | Original tolerance |
| --- | --- | --- | --- | --- |
| 0 | $(0,0)$ | $8$ | $2$ | not met |
| 1 | $(1/2,1)$ | $1$ | $1/2$ | not met |
| 2 | $(3/4,1)$ | $1/2$ | $1/4$ | not met |
| 3 | $(7/8,1)$ | $1/4$ | $1/8$ | not met |
| 4 | $(15/16,1)$ | $1/8$ | $1/16$ | met |

Stop at $k=4$ because the declared original residual meets its threshold. The preconditioned-only rule stops at $k=3$ and fails that original requirement. The two residuals have different scales; neither label may be omitted.

With fixed reciprocal diagonal entries, each preconditioner application uses two diagonal scalings; compute and record setup separately. Each update needs one $A$ action and one $M^{-1}$ application. Recomputing the final original residual and its preconditioned diagnostic is extra work, not free work hidden in the update count. The table above is exact hand arithmetic, not an observed runtime or operation-counter transcript. A program must count the operations it actually executes, including its chosen final diagnostics.

### NUM-M13 checkpoint — the complete field-labelled replay

**Task.** Complete OII Exercise 39: maximize $3x+2y$ subject to $2x+2y\le5$, $x,y\in\mathbb Z_{\ge0}$. Label bounds and incumbents in the maximization direction. Keep an LP upper bound distinct from a complete integer-enumeration bound.

#### NUM-M13 complete key

Start with feasible incumbent $(0,0)$, value zero. Process nodes in the displayed order:

| Node and branch restrictions | Relaxation upper bound | Incumbent before / after | Exact reason |
| --- | --- | --- | --- |
| Root | $15/2$ at $(5/2,0)$ | $0/0$ | Split $x\le2$ or $x\ge3$. |
| $x\ge3$ | infeasible | $0/0$ | $2x>5$; close. |
| $x\le2$ | $7$ at $(2,1/2)$ | $0/0$ | Split $y\le0$ or $y\ge1$. |
| $x\le2,y\le0$ | $6$ at $(2,0)$ | $0/6$ | Integer feasible relaxation optimum; close. |
| $x\le2,y\ge1$ | $13/2$ at $(3/2,1)$ | $6/6$ | Integer $y$ is 1 or 2. At $y=1$ the best is $(1,1)$, value 5; at $y=2$ it is $(0,2)$, value 4. Complete enumeration gives upper bound 5; close. |

Each split covers every integer possibility. There are five node rows, two splits and three closed leaves. The last LP bound is $13/2$, not 5; five is a separate exact enumeration bound. The feasible incumbent value six is a lower bound, and every closed region has no better integer point. This proves optimum six. It does not promise a general polynomial-time branch-and-bound algorithm. The following chosen capstone supplies all ten original deliverables for this one instance.

## A fixed root-to-quadrature portfolio and chosen capstone

The following primary, changed and later public-return questions fix the previously unspecified parameter problem. The complete public models are for self-study. Keep separate first, comparison and corrected responses; opening a public answer does not verify independent work, and a later return is not an observed delay.

### NUM-RQ-P — Primary root-to-quadrature question

Take $c=2$, $f_c(t)=t^2-c$ on $[1,2]$, and let $\theta_c$ be its root. The target is

\[
F(\theta_c)=\int_0^1e^{-\theta_c x}\,dx.
\]

1. Prove existence and uniqueness, maintain a root interval, derive a bisection budget and report a point, residual, location bound and root stop reason.
2. Prove $|F'(\theta)|\le1/2$ for nonnegative $\theta$. Separate parameter error from exact composite-trapezoid error.
3. Use midpoint $m$ after 20 bisections and equal-panel trapezoids for $N=8,16,32,64,128,256,512,1024$. Supply a hand table or use the optional audit below. Label every numerical entry as calculated or observed; a blank row is not run evidence.
4. For target absolute error $\varepsilon=10^{-6}$, budget parameter, quadrature and arithmetic contributions separately. Compare a cancellation-safe analytic expression with the direct formula. Give an independent reference check and separate stop reasons.
5. State exactly what is proved and what still depends on actual evaluation, arithmetic and implementation checks.

#### NUM-RQ-P complete public model

The endpoint signs are $1-c<0<4-c$. Continuity gives a root; $f_c'(t)=2t\ge2$ on $[1,2]$ makes it unique. After $n$ bisections the width is $w=2^{-n}$, and the final midpoint $m$ satisfies

\[
|m-\theta_c|\le w/2,\qquad |m-\theta_c|\le |m^2-c|/2.
\]

The second bound uses the mean value theorem between two points in $[1,2]$. It is not the book Practice 3 bound with derivative lower bound three. A non-strict sign invariant $f_c(a)\le0\le f_c(b)$ permits a root endpoint: if a midpoint residual is zero, retain it as the lower endpoint, continue the fixed updates, and do not throw the root away.

On a compact nonnegative parameter interval the integrand and its parameter derivative are continuous, so differentiating under this finite integral is justified. Hence

\[
F'(\theta)=-\int_0^1xe^{-\theta x}\,dx,\qquad |F'(\theta)|\le\int_0^1x\,dx=1/2.
\]

Consequently $|F(\theta_c)-F(m)|\le w/4$. For $g_m(x)=e^{-mx}$,

\[
0\le g_m''(x)=m^2e^{-mx}\le m^2.
\]

Convexity and the composite-trapezoid theorem give

\[
0\le T_N(m)-F(m)\le\frac{m^2}{12N^2}\le\frac1{3N^2},
\qquad
|F(\theta_c)-T_N(m)|\le\frac w4+\frac{m^2}{12N^2}.
\]

With 20 bisections and $N=1024$, the conservative mathematical contributions are $2^{-22}$ and $1/(3\cdot2^{20})$. Their sum is

\[
\frac7{12582912}<\frac{3}{4}\,10^{-6}.
\]

Thus parameter error is at most $\varepsilon/4$, trapezoid error at most $\varepsilon/2$, and an independently justified arithmetic contribution at most $\varepsilon/4$ suffices. The inequality is a mathematical budget, not a measured floating-point error. Smaller panels do not automatically settle the arithmetic term.

For $\theta>0$,

\[
F(\theta)=\frac{1-e^{-\theta}}{\theta}
         =-\frac{\operatorname{expm1}(-\theta)}{\theta}.
\]

The second evaluation avoids subtracting nearby numbers near zero. A library function's name alone is not a proof of its error bound. For a computed $\widehat T$, separate

\[
|F(\theta_c)-\widehat T|
\le w/4+m^2/(12N^2)+E_{\rm arithmetic}.
\]

Positive trapezoid weights sum to one: a common absolute sample error at most $\eta$ contributes at most $\eta$. Accumulation and scaling need their own stated arithmetic assumptions or independent check. Agreement of two formulas using the same library is not independent validation.

One independent exact-rational reference is available. Define

\[
E_p(z)=\sum_{k=0}^p\frac{(-z)^k}{k!},\qquad
P_p(t)=\sum_{k=0}^p\frac{(-t)^k}{(k+1)!}.
\]

Taylor's signed remainder for nonnegative arguments gives

\[
E_{25}(z)\le e^{-z}\le E_{24}(z),\qquad
P_{25}(t)\le F(t)\le P_{24}(t).
\]

In general the integral-polynomial remainder has magnitude at most $t^{p+1}/(p+2)!$. At exact dyadic bracket endpoints, monotonicity gives

\[
P_{25}(b)\le F(\theta_c)\le P_{24}(a).
\]

An independent checker can compare the exact binary rational represented by a saved finite floating-point value with these rational endpoints. Applying the positive-weight trapezoid to $E_{25}$ and $E_{24}$ separately encloses exact $T_N(m)$ and bounds the computed value's arithmetic discrepancy. This checker need not trust the same exponential implementation. It must actually run before any numerical pass or observed error table is claimed.

Keep root location, residual, quadrature budget, arithmetic validation, work limit, stagnation and nonfinite states separate. A successful residual or agreement of nested rules cannot overwrite a failed location or arithmetic check. Refinement near an error floor is evidence to diagnose, not a reason to assert second-order behavior forever.

#### NUM-RQ-P self-review criteria

Compare the complete response against five requirements: a unique-root proof and preserved bracket; both correctly qualified location bounds; the parameter-plus-trapezoid derivation; a stable evaluation with an independent arithmetic check or an explicit unknown; and a labelled table, work convention, stop reasons and bounded conclusion. These are public self-review criteria, not a learner grade or evidence of execution.

### NUM-RQ-C — Changed root-to-quadrature question

Change only the parameter equation to $t^2=3$ on $[1,2]$. Retain the same integral, 20 updates, panel grid and $\varepsilon=10^{-6}$ budget. Rebuild the bracket and every calculated or observed table rather than copying the primary numbers. Explain which proof constants remain valid and which actual values must change.

#### NUM-RQ-C complete public model

Now $f_3(1)=-2$ and $f_3(2)=1$. The derivative is still $2t\ge2$, so the root is again unique and remains in $[1,2]$. Width $2^{-20}$, radius $2^{-21}$, parameter bound $2^{-22}$ and conservative trapezoid bound $1/(3N^2)$ remain valid. They depend on the interval, not on a copied approximation to $\sqrt2$.

The final midpoint, residual, samples, quadrature values and actual errors belong to $c=3$ and must be recomputed or calculated. No observed decimal table is supplied here. The independent endpoints are $P_{25}(b_3)$ and $P_{24}(a_3)$, and the exact-trapezoid enclosure uses this changed midpoint. Use the five primary criteria with the changed equation and its own evidence; primary run results do not certify this case.

### NUM-RQ-R — Later public return at a removable limit

Without treating a remembered decimal as evidence, take the fixed small positive parameter $\delta=2^{-20}$. Extend $F$ to zero, prove a quadratic Taylor bound, and compare the direct quotient, the cancellation-safe quotient and a Horner polynomial. Keep the mathematical remainder separate from rounded evaluation error. This task has no parameter root to solve and does not require the primary root trace.

#### NUM-RQ-R complete public model

For $\theta\ge0$, $0\le1-e^{-\theta x}\le\theta x$. Integration gives $|F(\theta)-1|\le\theta/2$, so define $F(0)=1$ continuously. Taylor expansion under the integral gives

\[
P_2(\delta)=1-\delta/2+\delta^2/6,\qquad
P_2(\delta)-\delta^3/24\le F(\delta)\le P_2(\delta).
\]

The bound is $\delta^3/24=2^{-60}/24$. Horner evaluation is $1+\delta(-1/2+\delta/6)$; the stable analytic quotient is $-\operatorname{expm1}(-\delta)/\delta$. Neither its rounding error nor the polynomial's rounding error is bounded merely by quoting the mathematical Taylor remainder.

For a numerical check, convert each actual finite result to its exact binary rational and bound its distance from both exact Taylor endpoints. A proposed case-specific rounded-evaluation tolerance is $2^{-50}$; report whether the actual calculation meets it. Do not require a rounded result literally to lie inside the much narrower real-function enclosure, and do not invent the direct formula's observed error before evaluating it. The conclusion applies to this fixed parameter and its checked arithmetic, not every library call or every near-zero scale.

#### NUM-RQ-R self-review criteria

Compare the continuous extension proof, the signed Taylor remainder, and the separation of mathematical and rounded errors with an honestly labelled comparison and conclusion. No primary bisection requirement, separately opened hint event, verified delay or unseen-work claim is added to this narrower return.

### NUM-CAP — A completely worked chosen integer capstone

This is the chosen bounded integer option among the original capstone targets. It instantiates OII Exercise 39; it does not declare every open-choice capstone or software-audit blueprint complete. The following ten deliverables form its complete public reference. A handwritten exact ledger is sufficient; implementing the pseudocode is optional.

#### 1. Exact formulation and prerequisites

Maximize $3x+2y$ subject to $2x+2y\le5$, $x,y$ nonnegative integers. Algebra, integer branching, linear-relaxation bound directions and NUM-M13 are preparation. The integer domain is bounded by $x,y\in\{0,1,2\}$ because either coordinate at least three violates the constraint.

#### 2. Relaxation analysis before computation

The continuous relaxation has optimum $(5/2,0)$, value $15/2$, since one unit of capacity gives $3/2$ objective through $x$ and one through $y$. The feasible point $(2,0)$ gives lower bound six. The additive LP/IP gap is $15/2-6=3/2$.

The valid integer inequality $x+y\le2$ follows by rounding the original bound $x+y\le5/2$ for an integer sum. With this cut the relaxation optimum is $(2,0)$, value six. The cut does not remove any original integer-feasible point. This supplies an independent bound certificate, not a heuristic rounded answer.

#### 3. Bounded deterministic pseudocode

Use exact small-integer arithmetic and the fixed lexicographic order below. A program is optional; the same nine rows can be checked by hand.

```text
bestPoint := (0, 0); bestValue := 0
for x in [0, 1, 2]:
    for y in [0, 1, 2]:
        feasible := (2*x + 2*y <= 5)
        if feasible:
            value := 3*x + 2*y
            if value > bestValue:
                bestPoint := (x, y); bestValue := value
        record x, y, feasible, value-or-not-applicable, bestValue
return bestPoint, bestValue, all nine rows
```

The fixed bounds prevent an unbounded search. An implementation must not silently replace integer feasibility by an unspecified floating tolerance.

#### 4. Deterministic and adversarial cases

The point $(1,1)$ is feasible with value five. The tempting point $(2,1)$ has objective eight but violates $2x+2y\le5$ because its left side is six. The relaxation point $(5/2,0)$ is continuous-feasible but is not integer-feasible. A checker that admits either invalid candidate fails the original specification, even if it reports a larger objective.

#### 5. Complete exact reference and independent check

The feasible set is exactly $(0,0),(0,1),(0,2),(1,0),(1,1),(2,0)$, with values $0,2,4,3,5,6$. Thus the unique optimum is $(2,0)$ with value six. The valid cut above independently upper-bounds every feasible objective by six; feasibility of the witness supplies the matching lower bound.

#### 6. Finite work and invariant ledger

This is an exhaustive exact hand replay, not a claimed executed program log:

| Pair in fixed order | Constraint left side | Feasible? | Objective if feasible | Incumbent after row |
| --- | --- | --- | --- | --- |
| $(0,0)$ | $0$ | yes | $0$ | $0$ |
| $(0,1)$ | $2$ | yes | $2$ | $2$ |
| $(0,2)$ | $4$ | yes | $4$ | $4$ |
| $(1,0)$ | $2$ | yes | $3$ | $4$ |
| $(1,1)$ | $4$ | yes | $5$ | $5$ |
| $(1,2)$ | $6$ | no | not applicable | $5$ |
| $(2,0)$ | $4$ | yes | $6$ | $6$ |
| $(2,1)$ | $6$ | no | not applicable | $6$ |
| $(2,2)$ | $8$ | no | not applicable | $6$ |

The specified replay has nine feasibility rows, six objective calculations and four strict incumbent improvements from its initial value zero. At every row the incumbent is a feasible lower bound and never decreases. The separate five-node branch ledger in NUM-M13 has two splits and three closed leaves. These are two different proof paths: do not add their hand counts and label the sum one implementation's observed work. If code is run, preserve its actual counters and check them against its own declared path.

#### 7. Accessible numerical alternative

The two complete text tables and the exact feasible-set list provide the entire argument; no plot, color, animation or pointer interaction is needed. Each row names its restriction or pair, bound direction, feasibility and incumbent. A figure would be an optional illustration of these same values.

#### 8. Reproduction and stopping record

Freeze the displayed coefficients, integer domains, pair order and comparison directions. The hand replay stops only after all nine candidates have been checked; the branch proof stops only after all three leaves have been closed for their stated reasons. No timeout is success. A supplied program must record the same inputs and its actual rows/counters before claiming reproduction. This reference supplies exact hand calculations, not an observed environment, timing or run receipt.

#### 9. Error budget and scope

For this finite mathematical instance the coefficients and integer candidates are exact; there is no statistical sampling or empirical input model. Small-integer evaluation in the pseudocode can be exact, but a different floating LP solver still needs its own bound validation. Relaxation error is not rounding error: the root LP upper bound is $3/2$ above the integer optimum, and the valid cut closes it. Model applicability to an external situation is not asserted.

#### 10. Bounded conclusion and next falsification check

The proof establishes optimum six for precisely the displayed problem. It does not qualify a general optimization package. As a next implementation experiment, change only the right-hand-side capacity to six: $(3,0)$ is then feasible with value nine, so an implementation that silently keeps the old search ceiling or old answer six is falsified on that new instance. The changed instance needs its own certificate and is outside this chosen capstone's proved input.

### Optional executable audit — recorded numerical work

The following optional, dependency-free JavaScript exposes a callable audit API. It does not run itself, import modules, read or write files, access a network, or save learner records. Its results are observations only when someone actually calls it. The counters cover exactly the named operations, not every machine operation or elapsed time. The complete mathematical models above remain usable with hand tables.

Bisection accepts finite $1<c<4$ and 0–20 updates. It always performs the requested updates, including when an exact midpoint root becomes an endpoint: residual at most zero updates the lower endpoint, positive residual updates the upper. Root-evaluation counters include both initial endpoints and the final residual diagnostic; midpoint counters include the final reported midpoint. Trapezoid panels must be powers of two from 1 through 1024, with $0\le\theta\le2$. Each fresh row evaluates all $N+1$ samples, adds their weighted values left to right starting from zero, then divides once. It does not hide sample reuse. Near-zero comparison accepts finite $0<\theta\le2$.

Actual tables from a run should retain the root trace, samples, named counters, analytic bounds, independent-check result and separate stop reasons. In the fixed audit, the root reason is fixed-bisection-updates; a caller still needs the mathematical and arithmetic budget checks before claiming total_bound_met. No observed table is fabricated in this source.

```js
// EULER-NUMERICS-AUDIT-V1
function bisectParameter(c, updates = 20) {
  if (!Number.isFinite(c) || !(c > 1 && c < 4) ||
      !Number.isInteger(updates) || updates < 0 || updates > 20) {
    throw new RangeError('Expected finite 1 < c < 4 and integer updates from 0 to 20.');
  }
  const work = { updates: 0, rootEvaluations: 0, midpointEvaluations: 0 };
  const evaluate = x => {
    work.rootEvaluations += 1;
    const value = x * x - c;
    if (!Number.isFinite(value)) throw new RangeError('Nonfinite root evaluation.');
    return value;
  };
  const midpoint = (a, b) => {
    work.midpointEvaluations += 1;
    return (a + b) / 2;
  };
  let a = 1, b = 2;
  const initialA = evaluate(a), initialB = evaluate(b);
  if (!(initialA < 0 && initialB > 0)) throw new RangeError('Invalid initial bracket.');
  const trace = [];
  for (let index = 0; index < updates; index += 1) {
    const previousA = a, previousB = b;
    const point = midpoint(a, b), value = evaluate(point);
    if (value <= 0) a = point;
    else b = point;
    work.updates += 1;
    trace.push({ a: previousA, b: previousB, midpoint: point,
      residual: value, nextA: a, nextB: b });
  }
  const theta = midpoint(a, b), residual = evaluate(theta), width = b - a;
  return { c, a, b, theta, width, radius: width / 2, residual,
    residualLocationBound: Math.abs(residual) / 2,
    stopReason: 'fixed-bisection-updates', trace, work };
}

function compositeTrapezoid(theta, panels) {
  if (!Number.isFinite(theta) || theta < 0 || theta > 2 ||
      !Number.isInteger(panels) || panels < 1 || panels > 1024 ||
      (panels & (panels - 1)) !== 0) {
    throw new RangeError('Expected theta in [0, 2] and power-of-two panels from 1 to 1024.');
  }
  const work = { expEvaluations: 0, sumAdditions: 0, finalDivisions: 0 };
  const samples = [];
  let sum = 0;
  for (let index = 0; index <= panels; index += 1) {
    const x = index / panels, argument = -theta * x;
    const value = Math.exp(argument);
    work.expEvaluations += 1;
    if (!Number.isFinite(value)) throw new RangeError('Nonfinite exponential sample.');
    const weight = index === 0 || index === panels ? 0.5 : 1;
    sum += weight * value;
    work.sumAdditions += 1;
    if (!Number.isFinite(sum)) throw new RangeError('Nonfinite trapezoid sum.');
    samples.push({ index, x, argument, value, weight });
  }
  const value = sum / panels;
  work.finalDivisions += 1;
  if (!Number.isFinite(value)) throw new RangeError('Nonfinite trapezoid result.');
  return { theta, panels, value, samples, work };
}

function nearZero(theta) {
  if (!Number.isFinite(theta) || !(theta > 0 && theta <= 2)) {
    throw new RangeError('Expected finite theta in (0, 2].');
  }
  const work = { expEvaluations: 0, expm1Evaluations: 0 };
  const exponential = Math.exp(-theta);
  work.expEvaluations += 1;
  const exponentialMinusOne = Math.expm1(-theta);
  work.expm1Evaluations += 1;
  const direct = (1 - exponential) / theta;
  const stable = -exponentialMinusOne / theta;
  const horner = 1 + theta * (-0.5 + theta / 6);
  if (![direct, stable, horner].every(Number.isFinite)) {
    throw new RangeError('Nonfinite near-zero comparison.');
  }
  return { theta, direct, stable, horner, work };
}

function runAudit() {
  const grid = [8, 16, 32, 64, 128, 256, 512, 1024];
  const cases = [2, 3].map(c => {
    const root = bisectParameter(c, 20);
    return { root, rows: grid.map(panels => compositeTrapezoid(root.theta, panels)) };
  });
  return { epsilon: 1e-6, cases, nearZero: nearZero(2 ** -20) };
}

globalThis.numericsAudit = Object.freeze({
  bisectParameter, compositeTrapezoid, nearZero, runAudit
});
```

### Observed root-to-quadrature audit — one local execution

These values come from one local binary64 execution of the optional code using Node.js 20.20.2 on 3 November 2026. Independent exact-rational bounds check the arithmetic; the exact hand fractions above remain distinct from these observed floating-point values.

Here Q_N is the actual returned floating-point approximation to exact T_N(m). The error interval encloses the absolute distance between Q_N and F(m) at the FIXED reported midpoint; it is suitable for examining refinement without mixing in parameter-location error. The arithmetic column bounds distance from exact T_N(m), and the total column adds arithmetic, location and discretization bounds. Displayed bounds and interval endpoints were rounded outward by the checker. They are not exact errors or a claim about every platform's exponential library.

For c=2, the reported midpoint was 1.4142136573791504. The root used 23 root evaluations and 20 updates. The common parameter contribution was at most 0.000000238418579102. Each row is a fresh sum; its paired work entry gives actual exponential calls / sum additions.

| N | Computed Q_N | Fixed-midpoint error interval | exp / additions | Discretization bound | Arithmetic bound | Total bound | Target-error upper bound |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | 0.5365902877360754 | [0.001393017709693287,0.001393017709693288] | 9 / 9 | 0.002604167016559523 | 0.000000000000000040 | 0.002604405435138664 | 0.001393116191873491 |
| 16 | 0.5355456604350617 | [0.000348390408679553,0.000348390408679554] | 17 / 17 | 0.000651041754139881 | 0.000000000000000061 | 0.000651280172719043 | 0.000348488890859757 |
| 32 | 0.5352843761333084 | [0.000087106106926236,0.000087106106926237] | 33 / 33 | 0.000162760438534971 | 0.000000000000000115 | 0.000162998857114186 | 0.000087204589106440 |
| 64 | 0.5352190470847538 | [0.000021777058371628,0.000021777058371629] | 65 / 65 | 0.000040690109633743 | 0.000000000000000156 | 0.000040928528213000 | 0.000021875540551832 |
| 128 | 0.5352027143242037 | [0.000005444297821609,0.000005444297821610] | 129 / 129 | 0.000010172527408436 | 0.000000000000000228 | 0.000010410945987766 | 0.000005542780001813 |
| 256 | 0.5351986311029142 | [0.000001361076532078,0.000001361076532079] | 257 / 257 | 0.000002543131852109 | 0.000000000000000227 | 0.000002781550431438 | 0.000001459558712282 |
| 512 | 0.5351976102956445 | [0.000000340269262365,0.000000340269262366] | 513 / 513 | 0.000000635782963028 | 0.000000000000000532 | 0.000000874201542661 | 0.000000438751442568 |
| 1024 | 0.5351973550937057 | [0.000000085067323561,0.000000085067323562] | 1025 / 1025 | 0.000000158945740757 | 0.000000000000000292 | 0.000000397364320150 | 0.000000183549503765 |

For c=3, the reported midpoint was 1.7320504188537598. The root used 23 root evaluations and 20 updates. The common parameter contribution was at most 0.000000238418579102. Each row is a fresh sum; its paired work entry gives actual exponential calls / sum additions.

| N | Computed Q_N | Fixed-midpoint error interval | exp / additions | Discretization bound | Arithmetic bound | Total bound | Target-error upper bound |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | 0.4770596494809844 | [0.001854819442044870,0.001854819442044871] | 9 / 9 | 0.003906248246681621 | 0.000000000000000060 | 0.003906486665260782 | 0.001854901560129939 |
| 16 | 0.47566880643471343 | [0.000463976395773908,0.000463976395773909] | 17 / 17 | 0.000976562061670406 | 0.000000000000000069 | 0.000976800480249576 | 0.000464058513858977 |
| 32 | 0.47532084112659145 | [0.000116011087651930,0.000116011087651931] | 33 / 33 | 0.000244140515417602 | 0.000000000000000117 | 0.000244378933996820 | 0.000116093205736999 |
| 64 | 0.4752338338729245 | [0.000029003833984981,0.000029003833984982] | 65 / 65 | 0.000061035128854401 | 0.000000000000000036 | 0.000061273547433538 | 0.000029085952070050 |
| 128 | 0.4752120810638195 | [0.000007251024879990,0.000007251024879991] | 129 / 129 | 0.000015258782213601 | 0.000000000000000112 | 0.000015497200792814 | 0.000007333142965059 |
| 256 | 0.4752066427993086 | [0.000001812760369052,0.000001812760369053] | 257 / 257 | 0.000003814695553401 | 0.000000000000000047 | 0.000004053114132548 | 0.000001894878454121 |
| 512 | 0.475205283229291 | [0.000000453190351485,0.000000453190351486] | 513 / 513 | 0.000000953673888351 | 0.000000000000000121 | 0.000001192092467573 | 0.000000535308436554 |
| 1024 | 0.4752049433365427 | [0.000000113297603149,0.000000113297603150] | 1025 / 1025 | 0.000000238418472088 | 0.000000000000000975 | 0.000000476837052164 | 0.000000195415688218 |

At N=1024 both cases met the separate one-quarter parameter, one-half discretization and one-quarter arithmetic allocations for absolute target 10^-6. A coarser row having a total bound below 10^-6 does not by itself meet those predeclared separate allocations. The fixed-midpoint errors approach the expected second-order regime in this run; this does not prove all future refinement or nonsmooth cases have that behavior.

For the later return, the actual parameter was 9.5367431640625e-7, exactly 2^-20. The following are outward-rounded error upper bounds from the same execution, not guessed decimal answers:

| Comparison | Observed independently checked upper bound |
| --- | --- |
| Direct quotient versus F(delta) | 0.000000000000151583 |
| Stable expm1 quotient versus F(delta) | 0.000000000000000037 |
| Horner evaluation versus exact P2 | 0.000000000000000038 |
| Mathematical Taylor remainder | 0.000000000000000000036141 |
| Horner result versus F(delta) | 0.000000000000000038 |

There was one exponential call and one expm1 call. The stable and Horner results passed the declared 2^-50 case bound; the direct quotient's larger error is a measured comparison on this fixed input. No universal correctly-rounded-library or learner-execution claim follows.


### NUM-M05 — A complete adaptive Simpson checkpoint

This fourth fixed checkpoint closes the original Module 5 table requirement for a named smooth integrand and a named failure. It leaves all 74 selected questions, the three earlier checkpoint keys and the root-to-quadrature audit unchanged. Learner code remains optional: the complete exact hand table below is valid work. A generic adaptive estimate is still not a universal error certificate.

#### Fixed question and absolute-error convention

On $[0,1]$ take $f(x)=x^4$, with analytic reference $I=1/5$. Compare a fresh composite Simpson rule with even panel count $N$ and an adaptive Simpson calculation at absolute tolerances $10^{-3},10^{-4},10^{-5}$. Tolerance and error use integral units, dimensionless here, not relative error.

For one interval of length $L$, let $S$ be its endpoint/midpoint Simpson value. Compute the two half-interval Simpson values using only the two new quarter-point samples. Put

\[
R=S_{\rm left}+S_{\rm right},\qquad \eta=(R-S)/15.
\]

Accept when $|\eta|\le\text{local tolerance}$ and return $R+\eta$; otherwise split the absolute tolerance in half and process both children. Retain inherited samples. Record the raw refined sum, signed correction, estimated error, corrected actual error against $1/5$, distinct function evaluations, completed interval checks, accepted leaves, deepest visited interval and stop reason. Stop only when every leaf accepts; an evaluation budget or depth limit is a failure, not tolerance success.

#### Complete quartic derivation and hand table

For composite Simpson with even $N$ and exact samples/arithmetic, the rule minus the integral is

\[
S_N-I=\frac{2}{15N^4}.
\]

For example this follows from the Simpson error formula $S_N-I=(b-a)h^4 f^{(4)}/180$, with $h=1/N$, $f^{(4)}=24$; the fourth derivative is constant, so the formula is exact. On an interval of length $L$, its one-panel Simpson rule has error $L^5/120$ and the two-child refined rule has error $L^5/1920$. Therefore

\[
\eta=\frac{L^5/1920-L^5/120}{15}=-L^5/1920.
\]

The correction cancels the entire quartic error in exact arithmetic. At recursion depth $d$, $L=2^{-d}$ and local tolerance is $\varepsilon 2^{-d}$. The acceptance comparison is $2^{-5d}/1920\le\varepsilon2^{-d}$. Thus the three tolerances first accept at depths 0, 1 and 2. Because the fourth derivative is constant, all leaves at a depth behave alike.

| Absolute tolerance | Equivalent refined uniform $N$ | Exact raw Simpson value | $\vert \eta\vert $ summed / raw actual error | Corrected value | Corrected actual error | Distinct evaluations | Completed checks | Accepted leaves | Maximum depth |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| $10^{-3}$ | $4$ | $77/384$ | $1/1920$ | $1/5$ | $0$ | $5$ | $1$ | $1$ | $0$ |
| $10^{-4}$ | $8$ | $1229/6144$ | $1/30720$ | $1/5$ | $0$ | $9$ | $3$ | $2$ | $1$ |
| $10^{-5}$ | $16$ | $19661/98304$ | $1/491520$ | $1/5$ | $0$ | $17$ | $7$ | $4$ | $2$ |

These are exact hand-derived fractions and counts, not observed floating-point outputs. Each local signed $\eta$ is negative. The global estimate sums absolute local corrections; the signed sum is its negative for this quartic. Corrected floating-point values need not equal the real number $1/5$ exactly.

There are three initial samples and two new samples per completed check, giving 5, 9 and 17 distinct calls under the stated inherited-sample policy. The binary check tree has 1, 3 and 7 completed interval checks and 1, 2 and 4 accepted leaves. A fresh uniform Simpson calculation on the corresponding grid separately uses $N+1$ calls. Do not add the uniform and adaptive counts and call the sum one method's work; their actual counters are reported separately.

#### Complete missed-bump counterexample and repair

Now use the triangular bump

\[
B(x)=\max(0,1-16|x-1/8|).
\]

Its support is $[1/16,3/16]$, peak one at $1/8$, and exact integral is half its base $1/8$ times height one, namely $1/16$. The five initial adaptive samples $0,1/4,1/2,3/4,1$ all return zero. Consequently $S=R=\eta=0$, and the estimator accepts a returned value zero even though the true absolute error is $1/16$. A small estimate is therefore not an independent certificate.

The triangle is not globally four times continuously differentiable; a bounded-fourth-derivative Simpson theorem cannot be applied across its corners. More generally, sampled agreement alone supplies no regularity information excluding an unseen feature.

If the breakpoints are known, split at $0,1/16,1/8,3/16,1$. On each resulting interval the function is affine, so Simpson is exact in exact arithmetic. The four areas are $0,1/32,1/32,0$, totaling $1/16$. This is a repair using known structure, not a claim that the adaptive algorithm discovers arbitrary missed bumps.

#### Optional adaptive audit API and honest failure records

The following separate optional JavaScript has no imports, I/O, automatic run or learner-record effects. Its frozen adaptiveSimpsonAudit API leaves numericsAudit unchanged. The integrate method accepts a callback, finite $0\le a<b\le1$, positive finite absolute tolerance, and only the options maxEvaluations (integer 3–4097, default 129) and maxDepth (integer 0–12, default 12). Unknown options are refused. A caller's programming exception is propagated; a returned nonfinite sample becomes nonfinite-evaluation.

Successful status estimated-tolerance describes the algorithm's estimator, not guaranteed actual accuracy for an arbitrary callback. Any numerical failure returns value, raw and errorEstimate all null while retaining the observed partial samples/checks/leaves. Distinguish evaluation-budget, depth-limit, stagnation, nonfinite-evaluation and nonfinite-arithmetic. Stagnation includes collapsed geometric sample points or an underflowed half-tolerance. Initial midpoint collapse is checked before any samples; a nonfinite initial Simpson arithmetic result can stop after three evaluations and zero completed checks.

Every actual callback call is counted, including a nonfinite sample. Cached values are not called again. A completed five-node check records coarse/refined values and eta; an incomplete budget failure does not invent a check. A depth-zero interval may accept; if its estimate fails, maxDepth zero refuses a split. Accepted partial leaves are evidence about those intervals only, never a partial top-level success.

The runCases method compares the three fixed quartic tolerances with fresh uniform grids 4, 8 and 16, and returns both the blind bump result and the four known-breakpoint repairs. Each repair call has its own cache and one quarter of the absolute tolerance. Actual decimals and counters become observed evidence only after running the code and independent checks; the hand reference above does not pretend that run has occurred.

```js
// EULER-ADAPTIVE-SIMPSON-AUDIT-V1
function integrate(f, a, b, tolerance, options = {}) {
  if (typeof f !== 'function') throw new TypeError('Expected a function.');
  if (!Number.isFinite(a) || !Number.isFinite(b) ||
      !(0 <= a && a < b && b <= 1) ||
      !Number.isFinite(tolerance) || !(tolerance > 0)) {
    throw new RangeError('Expected 0 <= a < b <= 1 and positive finite absolute tolerance.');
  }
  if (options === null || typeof options !== 'object' || Array.isArray(options) ||
      Object.prototype.toString.call(options) !== '[object Object]' ||
      Reflect.ownKeys(options).some(key => key !== 'maxEvaluations' && key !== 'maxDepth')) {
    throw new TypeError('Expected only maxEvaluations and maxDepth options.');
  }
  const { maxEvaluations = 129, maxDepth = 12 } = options;
  if (!Number.isInteger(maxEvaluations) || maxEvaluations < 3 || maxEvaluations > 4097 ||
      !Number.isInteger(maxDepth) || maxDepth < 0 || maxDepth > 12) {
    throw new RangeError('Invalid evaluation or depth budget.');
  }
  const work = { evaluations: 0, intervalChecks: 0, acceptedLeaves: 0, maxDepth: 0 };
  const samples = [], checks = [], leaves = [], cache = new Map();
  let failure = null;
  const fail = reason => { if (failure === null) failure = reason; return null; };
  const result = answer => ({
    a, b, tolerance,
    value: failure === null ? answer.value : null,
    raw: failure === null ? answer.raw : null,
    errorEstimate: failure === null ? answer.errorEstimate : null,
    stopReason: failure === null ? 'estimated-tolerance' : failure,
    work, samples, checks, leaves
  });
  const sample = x => {
    if (cache.has(x)) return cache.get(x);
    if (work.evaluations >= maxEvaluations) return fail('evaluation-budget');
    work.evaluations += 1;
    const value = f(x);
    samples.push({ x, value });
    if (!Number.isFinite(value)) return fail('nonfinite-evaluation');
    cache.set(x, value);
    return value;
  };
  const simpson = (left, right, fl, fm, fr) =>
    (right - left) * (fl + 4 * fm + fr) / 6;
  const visit = (left, right, fl, fm, fr, coarse, localTolerance, depth) => {
    work.maxDepth = Math.max(work.maxDepth, depth);
    const middle = (left + right) / 2;
    const leftMiddle = (left + middle) / 2, rightMiddle = (middle + right) / 2;
    if (middle === left || middle === right || leftMiddle === left ||
        leftMiddle === middle || rightMiddle === middle || rightMiddle === right) {
      return fail('stagnation');
    }
    const fLeftMiddle = sample(leftMiddle);
    if (failure !== null) return null;
    const fRightMiddle = sample(rightMiddle);
    if (failure !== null) return null;
    const leftValue = simpson(left, middle, fl, fLeftMiddle, fm);
    const rightValue = simpson(middle, right, fm, fRightMiddle, fr);
    const refined = leftValue + rightValue, eta = (refined - coarse) / 15;
    work.intervalChecks += 1;
    const check = { a: left, b: right, depth, tolerance: localTolerance,
      coarse, refined, eta, accepted: false };
    checks.push(check);
    if (![leftValue, rightValue, refined, eta].every(Number.isFinite)) {
      return fail('nonfinite-arithmetic');
    }
    const corrected = refined + eta, estimate = Math.abs(eta);
    if (!Number.isFinite(corrected)) return fail('nonfinite-arithmetic');
    if (estimate <= localTolerance) {
      check.accepted = true;
      work.acceptedLeaves += 1;
      leaves.push({ a: left, b: right, depth, tolerance: localTolerance,
        raw: refined, eta, corrected, errorEstimate: estimate });
      return { raw: refined, value: corrected, errorEstimate: estimate };
    }
    if (depth >= maxDepth) return fail('depth-limit');
    const halfTolerance = localTolerance / 2;
    if (!(halfTolerance > 0)) return fail('stagnation');
    const lower = visit(left, middle, fl, fLeftMiddle, fm,
      leftValue, halfTolerance, depth + 1);
    if (failure !== null) return null;
    const upper = visit(middle, right, fm, fRightMiddle, fr,
      rightValue, halfTolerance, depth + 1);
    if (failure !== null) return null;
    const answer = { raw: lower.raw + upper.raw, value: lower.value + upper.value,
      errorEstimate: lower.errorEstimate + upper.errorEstimate };
    if (![answer.raw, answer.value, answer.errorEstimate].every(Number.isFinite)) {
      return fail('nonfinite-arithmetic');
    }
    return answer;
  };
  const middle = (a + b) / 2;
  if (middle === a || middle === b) return result(fail('stagnation'));
  const fa = sample(a);
  if (failure !== null) return result(null);
  const fm = sample(middle);
  if (failure !== null) return result(null);
  const fb = sample(b);
  if (failure !== null) return result(null);
  const coarse = simpson(a, b, fa, fm, fb);
  if (!Number.isFinite(coarse)) return result(fail('nonfinite-arithmetic'));
  return result(visit(a, b, fa, fm, fb, coarse, tolerance, 0));
}

function runCases() {
  const quartic = x => x ** 4;
  const uniform = panels => {
    const samples = [];
    let evaluations = 0, sum = 0;
    for (let index = 0; index <= panels; index += 1) {
      const x = index / panels, value = quartic(x);
      evaluations += 1;
      samples.push({ x, value });
      const weight = index === 0 || index === panels ? 1 : index % 2 === 1 ? 4 : 2;
      sum += weight * value;
    }
    const value = sum / (3 * panels);
    if (!Number.isFinite(value)) throw new RangeError('Nonfinite uniform Simpson result.');
    return { panels, value, evaluations, samples };
  };
  const quarticRows = [[1e-3, 4], [1e-4, 8], [1e-5, 16]].map(([tolerance, panels]) => ({
    tolerance, adaptive: integrate(quartic, 0, 1, tolerance), uniform: uniform(panels)
  }));
  const bump = x => Math.max(0, 1 - 16 * Math.abs(x - 1 / 8));
  const blind = integrate(bump, 0, 1, 1e-6);
  const breaks = [0, 1 / 16, 1 / 8, 3 / 16, 1];
  const repairPieces = breaks.slice(0, -1).map((left, index) =>
    integrate(bump, left, breaks[index + 1], 1e-6 / 4));
  const repairValue = repairPieces.every(piece => piece.stopReason === 'estimated-tolerance')
    ? repairPieces.reduce((sum, piece) => sum + piece.value, 0) : null;
  return { quartic: quarticRows, bump: { blind, repairPieces, repairValue } };
}

globalThis.adaptiveSimpsonAudit = Object.freeze({ integrate, runCases });
```

### Observed adaptive checkpoint — one local execution

These values come from one local binary64 execution of the optional adaptive code using Node.js 20.20.2 on 3 November 2026. Independent exact-rational bounds check the arithmetic; the hand-derived fractions above describe exact mathematics rather than observed floating-point results.

The estimate column is the returned sum of absolute local eta values, not their signed sum and not a general rigorous bound. The actual-error column bounds distance of the returned corrected binary64 value from the exact real number 1/5. The last column is a case-specific arithmetic bound reconstructed independently from the exact binary rationals: it sums each leaf's raw-value discrepancy, correction discrepancy and final-addition discrepancy, then the aggregation discrepancy. Its validity here uses the separately proved exact quartic cancellation. All printed error bounds were rounded outward by the checker.

| Absolute tolerance | Observed adaptive raw | Observed corrected value | Reported estimate | evaluations / checks / leaves / depth | Actual-error upper bound | Reconstructed arithmetic upper bound |
| --- | --- | --- | --- | --- | --- | --- |
| 0.001 | 0.20052083333333331 | 0.19999999999999998 | 0.0005208333333333352 | 5 / 1 / 1 / 0 | 0.00000000000000001666 | 0.00000000000000002403 |
| 0.0001 | 0.20003255208333334 | 0.20000000000000004 | 0.00003255208333333154 | 9 / 3 / 2 / 1 | 0.00000000000000003886 | 0.00000000000000004013 |
| 0.00001 | 0.20000203450520834 | 0.20000000000000004 | 0.000002034505208333277 | 17 / 7 / 4 / 2 | 0.00000000000000003886 | 0.00000000000000003890 |

The separate fresh uniform-Simpson calculations produced:

| Uniform N | Observed value | Actual fresh function evaluations |
| --- | --- | --- |
| 4 | 0.20052083333333334 | 5 |
| 8 | 0.20003255208333334 | 9 |
| 16 | 0.20000203450520834 | 17 |

The N=4 uniform and adaptive raw values differ in their last displayed digits because their arithmetic grouping differs. They approximate the same exact 77/384; the equality of the mathematical rules does not promise identical floating-point paths. Neither corrected floating-point value is asserted to equal exact 1/5.

The blind triangular-bump run returned value 0, estimate 0 and five evaluations, while its independently known integral is 1/16. The known-breakpoint repair returned 0.0625. Thus estimated-tolerance was satisfied even in the blind failure; the successful repaired value depends on supplying the known piecewise-affine structure. This execution tests the named functions, budgets and failure records. It establishes no universal adaptive-quadrature guarantee, library qualification, learner result or observed independence.
