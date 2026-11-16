var e=`---
id: course-numerics-optimization-specialist
title: "Meshes, Random Gradients, and Numerical Reliability"
level: graduate
estimated_minutes: null
license: CC BY-SA 4.0
---

# Meshes, Random Gradients, and Numerical Reliability

<!-- euler-course-route -->

## Current course route

This is an Outline seminar in a selected theme. Use its [course page](/courses/atlas-numerics-optimization-specialist/) for the preparation courses, then attempt the mathematical investigations below. A general graduate chapter syllabus has not yet been assigned.

Preparation courses: [Numerical Proofs: Stability, Optimization, and Discretization](/courses/atlas-numerics-optimization-advanced/) · [Numerical analysis](/courses/atlas-numerical-mathematics-reliable-computation/).

The earlier mathematical explanations, proofs, assignments and complete solutions remain below with their original task identities. Their first-attempt, comparison and correction requirements still apply when you choose that earlier work. Existing notes and study marks keep their original scope.

A large computation needs a mathematical target, an algorithm that fits its
representation, and evidence that survives a change of mesh, conditioning or
sampling. This graduate course joins numerical PDE, large-scale and stochastic
optimization, and specialist reliability through three sustained, connected
studies. Full selected study time is unknown. The dimensions and iteration
limits below bound the supplied software; they do not estimate reading, proof,
debugging or repair time. Public models support comparison and self-study;
they are not observed learner work or a qualification.

## Preparation and required sequence

Complete the selected [advanced numerical proofs](#/item/course-numerics-optimization-advanced),
including its perturbation, optimization and discretization models. Complete
the weak-space bridge, approximation questions and point-load/Neumann/resonance
models in [Boundary Problems, Weak Fields, and Verified Approximation](#/item/course-differential-equations-advanced).
These are preparation: a small dense finite-element solve is not a large-scale
algorithm. Bring Hilbert norms, traces, Poincare and coercivity with their
hypotheses, basic probability, conditional finite expectation, and scientific
computing practice. The one-dimensional weak-space identification and general
Lax–Milgram theorem remain explicit imports from that preparation. The finite
SPD spectral theorem and the native exact-arithmetic CG theorem are imported;
their application and all error/noise estimates used here are proved below.

First attempt the [numerical prerequisites](#/item/book-numerical-mathematics-error-algorithms?section=front%3Aprerequisite-diagnostic-and-repair),
questions **5–7**, with their Answer/Repair paragraphs, and the
[optimization prerequisites](#/item/book-optimization-backprop-from-scratch?section=front%3Aprerequisite-diagnostic-and-repair),
questions **5–18**, with Answer notes and repair routes. Repair integration by
parts, Taylor remainder, shapes, conditional sampling and the distinction
between a realization and an expectation before proceeding. An absent repair
is a preparation gap, not evidence supplied by a checked box.

Work through the following groups in order. Exercise numbers belong to their
linked chapter. Every listed exercise has its native complete worked answer;
attempt first, then compare assumptions, intermediate reasoning and conclusion.
The named open projects outside this course remain open choices.

| Group | Required teaching and exact questions | Complete feedback and purpose |
| --- | --- | --- |
| NS-1: discretization | [Boundary-Value and Field Discretizations](#/item/book-numerical-mathematics-error-algorithms?chapter=boundary-value-pde-methods), weak-form and boundary sections; [Finite-Volume and Finite-Element Methods](#/item/book-numerical-mathematics-error-algorithms?chapter=finite-volume-element-methods), all ten **Practice with fully worked solutions**, Exercises **1–10**; [Local Defect to Global Trust](#/item/deep-dive-numerical-mathematics-discretization-verification), **Practice 1–3** | Native complete keys distinguish shared flux, cell versus nodal values, coercivity, quadrature, approximation and algebraic error. Do the PDE study below next. |
| NS-2: scalable systems | [Sparse and Iterative Methods](#/item/book-matrix-computation-applications?chapter=sparse-and-iterative-methods), **6.1–6.4**; [Krylov Subspace Methods](#/item/book-matrix-computation-applications?chapter=krylov-subspace-methods), **7.1–7.4**; [Preconditioning](#/item/book-matrix-computation-applications?chapter=preconditioning), **8.1–8.4**; [Scale to Large Data](#/item/book-matrix-computation-applications?chapter=project-scale-to-large-data), **15.1–15.4** | Adjacent complete Solutions give energy-norm bounds, conjugacy, storage, cost including preconditioner application, true residuals and failure boundaries. Do the full mesh/contrast study next. |
| NS-3: sampling and descent | [Expectation, Risk, and Sampling](#/item/book-optimization-backprop-from-scratch?chapter=expectation-risk-sampling), **3, 5–10, 12, 15–16**; [Smoothness, Descent, and Step Sizes](#/item/book-optimization-backprop-from-scratch?chapter=smoothness-descent-step-sizes), **1–7, 14–15, 17–18**; [Conditioning, Scaling, and Preconditioning](#/item/book-optimization-backprop-from-scratch?chapter=conditioning-scaling-preconditioning), **1–6, 10, 15, 17–18** | Native Full solutions retain support, conditional history, batch covariance, metric changes and full-gradient certificates. A small batch gradient is not a stopping certificate. |
| NS-4: stochastic dynamics | [Stochastic Gradients and Momentum](#/item/book-optimization-backprop-from-scratch?chapter=stochastic-gradients-momentum), all **Exercises 1–16** and **Full solutions 1–16** | Complete keys cover the nonconvex telescope, constant-step noise floor, diminishing-step series, scalar variance, momentum/Jury conditions, clipping bias, epsilon units, coupled penalty versus decay and loss denominators. Complete the scalar and field studies below. |
| NS-5: reliability and replay | [Reproducible Arithmetic and Intervals](#/item/book-numerical-mathematics-error-algorithms?chapter=reproducible-arithmetic-intervals), reduction order and interval-inclusion theorem; [Verification and Reproducibility](#/item/book-numerical-mathematics-error-algorithms?chapter=verification-reproducibility), **Practice 1–3**; [Numerical Capstone: Software Audit](#/item/book-numerical-mathematics-error-algorithms?chapter=numerical-capstone-software-audit), **Solved preparation 1–10**; [Training Pipelines and Reproducibility](#/item/book-optimization-backprop-from-scratch?chapter=training-pipelines-reproducibility), **1, 5–11, 14–16** with **Full solutions** | These complete keys supply independent checks, expected failures, semantic checkpoints, restart induction, denominators and bounded claims. The course's software implements its own mesh/scenario contract, not the broader ridge/logistic trainer brief. |

If a residual-to-error argument omits its norm, repeat NS-1/NS-2 and prove the
discrete inequality below. If an expectation argument treats reused draws as
fresh, repeat NS-3 and the scalar sampling repair below. If restart loses
velocity or the next draw, repeat NS-5 before accepting the return work.

Two specialist repairs qualify the matrix keys. Exercise 6.3 compares operation
counts; a ratio of arithmetic counts is not a measured runtime speedup.
For Exercise 15.4, take diag(1,1/1000,1/1000), rank 1 and target 1/1000000.
Any rank-one approximation has a nonzero null vector in span(e2,e3), so its
spectral error is at least 1/1000. Increasing power iterations or oversampling
at rank 1 cannot beat that floor. Rank 2 still leaves a tail 1/1000; rank 3 can
represent this matrix exactly. This explicit witness supplies the needed tail
test without importing a general low-rank theorem or promising that either
remedy automatically reaches the native target.

## Fixed questions before their public models

All data are fixed here before the models. Arrays of rational strings are
ascending polynomial coefficients. There are N intervals, h=1/N and N−1
interior **nodal** unknowns, with zero endpoints. Faces are interval midpoints.
This is a conservative nodal/dual-cell flux scheme, not the native cell-centered
unknown convention. In the PDE lane the source uses nodal midpoint values on
the dual cells. It is not exact integration of the source. No physical
measurement is claimed.

\`\`\`json
{
  "version": "numerics-specialist-1",
  "pde": {
    "meshes": [4, 8, 16, 32, 64, 128],
    "u": ["0", "1", "0", "0", "0", "-1"],
    "cases": {
      "P": {"a": ["1"], "f": ["0", "0", "0", "20"]},
      "C": {"a": ["1", "1"], "f": ["-1", "0", "0", "20", "25"]},
      "R": {"a": ["1"], "f": ["0", "0", "0", "20"]}
    },
    "algebraic_fraction": 4096,
    "return_floor": "1/1024",
    "fixture_P": {"N": 4, "matrix": [["32", "-16", "0"], ["-16", "32", "-16"], ["0", "-16", "32"]], "load": ["5/16", "5/2", "135/16"], "solution": ["115/512", "55/128", "245/512"]},
    "fixture_C": {"N": 4, "matrix": [["40", "-22", "0"], ["-22", "48", "-26"], ["0", "-26", "56"]], "load": ["-151/256", "49/16", "3929/256"], "solution": ["363683/1708032", "707036/1708032", "796379/1708032"]}
  },
  "large": {
    "meshes": [64, 256, 1024, 4096, 16384, 32768],
    "base": ["0", "1", "-1"],
    "sign_amplitude": "1/4",
    "cases": {"P": {"gamma": 4, "rho": 1, "shift": 0}, "C": {"gamma": 64, "rho": 4, "shift": 0}, "R": {"gamma": 4, "rho": 1, "shift": 1}},
    "residual_target": "1/256",
    "pcg_cap": 256,
    "cg_cap": 64,
    "fixtures": {
      "P": {"N": 4, "matrix": [["56", "-34", "0"], ["-34", "80", "-46"], ["0", "-46", "104"]], "witness": ["9/64", "3/16", "15/64"], "load": ["3/2", "-9/16", "63/4"]},
      "C": {"N": 4, "matrix": [["536", "-394", "0"], ["-394", "1040", "-646"], ["0", "-646", "1544"]], "witness": ["9/64", "3/16", "15/64"], "load": ["3/2", "-189/16", "963/4"]},
      "R": {"N": 4, "matrix": [["56", "-34", "0"], ["-34", "80", "-46"], ["0", "-46", "104"]], "witness": ["9/64", "5/16", "9/64"], "load": ["-11/4", "55/4", "1/4"]}
    }
  },
  "stochastic": {
    "meshes": [16, 64, 256],
    "steps": 1024,
    "batches": [1, 4],
    "streams": [1, 7, 19, 37, 73],
    "policies": ["sgd-constant", "sgd-diminishing", "momentum-constant"],
    "beta": "1/2",
    "eta_denominator": 2,
    "schedule_offset": 16,
    "restart_step": 17,
    "late_start": 512,
    "scalar": {"lambda": "5/2", "eta": "1/8", "rho": "1", "w": "1/4", "e0": "1", "v0": "0", "signs": [1, -1, 1, 1, -1, -1, 1, -1], "late_steps": 8192, "late_start": 4096}
  }
}
\`\`\`

For **P**, derive both the PDE consistency/error calculation and the scalable
SPD/PCG proof; run every prescribed mesh. State actual arithmetic and memory
costs. Complete the scalar stochastic checkpoint and all prescribed field runs,
retaining full-gradient diagnostics and sampler state. For **C**, change
coefficient/contrast and noise as printed. First diagnose the old step 1/8 on
the scalar changed curvature 65/2; then repair it. Recheck every bound and rerun
every mesh and stream. For **R**, return to the primary contrast with the shifted
witness. In the PDE lane add the stated floor times x(1−x) to a computed
solution, show the resulting error floor, then remove it and restore the
coupled tolerance. In the stochastic lane audit the N=16, stream-key-1 runs
for every P/C/R case, policy and batch size: interrupt at step 17, serialize
and restore the entire state, and compare **every** subsequent transition;
reset velocity as a rejected alternative. All five keys still run on every
prescribed field configuration. Retain first, comparison, repaired and
later return files with dates outside browser checkmarks.

Each portfolio must contain the target and exact data; derivation and hypotheses;
complete numerical text tables; a budget with separate discretization,
algebraic, arithmetic, sampling and data rows; failed controls with their
reasons; and a bounded conclusion. Software is required: hand calculations are
independent anchors, not a waiver. The reference below is complete for this
chosen study. Other open PDE, AMG, randomized-SVD and training projects have
not thereby been solved.

## PDE model: local defect, flux balance and field error

Put a_i=a((i+1/2)h), i=0,...,N−1. With U_0=U_N=0 define

\\[
(A_hU)_j=[a_{j-1}(U_j-U_{j-1})-a_j(U_{j+1}-U_j)]/h^2.
\\]

The shared right-oriented physical flux is q_i=−a_i(U_{i+1}−U_i)/h.
Then q_j−q_{j-1}=h f_j. Summation leaves q_{N−1}−q_0=h sum f_j.
These stored faces are at h/2 and 1−h/2: the balance concerns the union of
interior dual cells [h/2,1−h/2], with nodal midpoint source quadrature h sum f_j.
Its left outward flux is −q_0 and right outward flux is q_{N−1}; these are
not continuum boundary flux samples at 0 and 1. The sign convention itself
matches the native physical-flux convention −a grad u dot n, whose pure
Neumann compatibility is integral f=integral outward flux, component by
component. The present problem is Dirichlet and has no constant null mode.

For any zero-endpoint vector V,

\\[
hV^TA_hV=h\\sum_{i=0}^{N-1}a_i[(V_{i+1}-V_i)/h]^2=:E_a(V).
\\]

It is positive unless V=0, proving existence and uniqueness of the discrete
solution in finite dimension. Define D_hV on each interval by its difference
quotient. For the continuous linear interpolant, Cauchy on [0,x_j] and
[x_j,1] gives |V_j|²≤x_j(1−x_j)||D_hV||²≤||D_hV||²/4.
Thus ||V||∞≤sqrt(E_a(V))/(2sqrt(a_min)). If A_hV=tau,
E_a(V)=h sum tau_j V_j≤||tau||∞||V||∞, since h(N−1)<1.
Consequently

\\[
||V||_\\infty\\le ||\\tau||_\\infty/(4a_{\\min}),\\qquad
\\sqrt{E_a(V)}\\le ||\\tau||_\\infty/(2\\sqrt{a_{\\min}}).
\\]

This explicit, coarse stability constant is robust under the changed contrast;
it does not mistake a preconditioned residual for the original one.

The continuum solution in P and C is u=x−x^5. Direct differentiation gives
f_P=20x³ and f_C=−1+20x³+25x⁴. Expanding the midpoint flux exactly gives

\\[
\\tau_P=A_hR_hu-R_hf=10h^2x,
\\quad \\tau_C=h^2(10x+20x^2)+h^4.
\\]

For P, A_h(x³−x)=−6x, hence the **exact discrete solution** is
U_j=u(x_j)+(5/3)h²(x_j³−x_j). This is not exact reproduction of u.
For C, ||tau||∞≤30h²+h⁴ and the proved nodal bound is
(30h²+h⁴)/4. On N=4 the complete matrices, loads and solutions printed above
are exact rational keys; multiplication verifies every row.

For either coefficient, an independent exact solution uses fluxes. Write
t_i=a_i(U_{i+1}−U_i)/h and S_i=sum_{j=1}^i f_j, with S_0=0. Then

\\[
t_i=t_0-hS_i,\\quad
t_0=h\\frac{\\sum_{i=0}^{N-1}S_i/a_i}{\\sum_{i=0}^{N-1}1/a_i},\\quad
U_j=h\\sum_{i=0}^{j-1}t_i/a_i.
\\]

These finite rational sums specify **every** C answer on the fixed meshes,
without invoking PCG or its preconditioner. They are also the oracle's
independent method. The model comparison table is determined as follows:

| Quantity on every prescribed PDE mesh | Complete exact key or proved bound |
| --- | --- |
| P nodal error | max over j of (5/3)h²(x_j−x_j³) |
| C nodal error | max_j absolute value of U_j−(x_j−x_j^5), with U_j from the flux sum; upper bound (30h²+h⁴)/4 |
| Continuum-to-linear-interpolant error | at most (5/2)h², since max |u''|=20 and the linear interpolation remainder is h² max |u''|/8 |
| Total field error | nodal discretization bound plus (5/2)h² plus certified algebraic nodal bound |
| Energy discretization bound | 20 sqrt(a_max) h/sqrt7 + ||tau||∞/(2 sqrt(a_min)); add the analogous algebraic residual term |
| Original residual and global balance | recomputed from stored shared face fluxes; exact algebraic balance is zero, computed balance includes residual/rounding |

For the energy row, the slope of I_hu is the interval average of u'. The
elementary integral/Cauchy bound ||u'−(I_hu)'||₂≤h||u''||₂ and
||u''||₂=20/sqrt7 prove the first term; apply the discrete energy estimate to
the nodal difference for the second. This is an energy theorem, not an
inference from a maximum-norm plot. Rates here require this smooth u and
positive smooth coefficient. They say nothing about shocks, irregular meshes
or general adaptive contraction.

The algebraic target is nodal error at most h²/4096, so stop only when an
enclosure of the **original mathematical** residual has maximum at most
4h²/4096. For return work, an added d x(1−x), d=1/1024, creates a P residual
2d and a nodal shift approaching d/4. A tolerance that hides it cannot support
continued O(h²) accuracy. Remove the injected floor, rerun and retain both
tables. A forcing uncertainty ||delta f||∞≤epsilon contributes at most
epsilon/(4a_min) to nodal error; model discrepancy is unknown, not zero.
The injected field offset is algebraic contamination. If instead the frozen
load were changed to f+2d, the **exact** P discrete solution would shift by
d x(1−x). Tightening a solve tolerance cannot remove that data bias: restore
the original load or retain the declared uncertainty and changed target.

## Matrix-free model: a sustained mesh and contrast progression

Here a(x)=1+(gamma−1)x and the exact **discrete** witness is
v*_j=x_j(1−x_j)[1+s_j/4], s_j=(−1)^popcount(j+shift). Let b=A_hv*.
This is a non-single-mode, full-dimensional family with changing load and
mesh. No assertion that every spectral coefficient is nonzero is needed: the
bounds hold for every right-hand side. Its oscillatory mesh dependence means
this lane certifies a discrete solve, not convergence to one smooth PDE field.

Let P_h be the same operator with a=1. The energy identity proves
P_h≤A_h≤gamma P_h as quadratic forms. Therefore
B=P_h^(−1/2) A_h P_h^(−1/2) is SPD with spectrum in [1,gamma]. Original
conditioning still grows with mesh: the Laplacian eigenvalues are
4N² sin²(j pi/(2N)), so kappa(P_h) grows like N². Scalar Jacobi scaling
cannot remove this. The effective PCG condition bound is gamma, independent
of N, and the native exact-arithmetic energy bound is 2q^k with
q=(sqrt(gamma)−1)/(sqrt(gamma)+1).

Apply P_h^(−1) in O(N), without a dense matrix. The dimensionless tridiagonal
T has LDL pivots d_j=(j+1)/j, j=1,...,N−1, and lower entries
l_j=−j/(j+1), j=1,...,N−2. Forward substitution in L, division by d and
back substitution in L^T, with right-hand side scaled by h², give P_h^(−1).
All pivots are positive. Setup and each apply use linear storage and work.
This exact-model preconditioner is a particularly favorable **one-dimensional**
construction; it is not AMG or evidence about parallel/multidimensional speed.

The implementation keeps O(N) vectors, face coefficients and pivots, and uses
one stencil, one preconditioner application, two dot products and vector
updates per PCG step. It stores no N by N array. It counts stencil rows,
preconditioner rows, setup rows and interval residual rows separately; total
cost is setup plus applications, not iteration count alone. A diagnostic CG
comparison has cap 64 and may honestly reach its cap. It is not required to
fail on every data set. PCG cap 256 is a hard limit, not a successful certificate.

For the exact, uninterrupted PCG model, ||v*||∞≤5/16 and
lambda_max(A_h)≤4gamma N². The CG theorem and ||r||∞≤||r||₂ imply
||r_k||∞≤(5/2)gamma N^(5/2) q^k. For N≤2^15 and gamma≤64 this prefactor
is less than 2^45. Since q≤7/9<4/5 and (4/5)^4<1/2, k=256 gives a bound
below 2^(45−64), smaller than 1/256. This is an exact-arithmetic guarantee;
finite arithmetic retains the original-residual certificate as the acceptance
test. The reference diagnoses true/recursive residual differences without
restarting or replacing the CG recurrence, so no restarted-CG theorem is used.

The mathematical b is a rational expression in printed data. Its generated
binary64 image is a separate input to the iteration. Outward-rounded stencil
evaluation encloses b and b−A_h vhat, covering load-generation and residual
arithmetic. The target ||r||∞≤1/256 implies nodal error≤1/1024. At fine meshes
the stencil scales like N², so its arithmetic enclosure widens with contrast
and N. If the enclosure dominates the target or the cap is reached, report
failure and repair the arithmetic/budget; a tiny recursive residual is not an
override. No timing or achieved residual in this chapter is a claimed run.

## Stochastic model: conditioning, noise and exact feedback

On each selected matrix, w_j=x_j(1−x_j). The two equal-weight scenario
objectives are F_s(x)=h[.5 e^T A_h e+s rho (P_hw)^T e], s=±1,
where e=x−v*. Their mean F=h e^T A_h e/2 has unique minimizer v*.
Use direction P_h^(−1)A_he+rho s w and fresh signs. A sample still costs a
full O(N) stencil/preconditioner apply. This is a finite-scenario study, with
**no claimed stochastic data-pass speedup**.

Let H_t include parameters, all past draws, optimizer/schedule state and
accumulated metrics, excluding fresh modeled signs. Under fresh independent
uniform signs, the conditional mean direction is P_h^(−1)A_he. A batch b
averages b signs at the frozen iterate; its variance is divided by b. Put
z=sqrt(h) P_h^(1/2)e. Then F= z^T Bz/2, gradient Bz, strong-convexity lower
bound 1 and smoothness upper bound gamma. The transformed noise has covariance
h rho² P_h^(1/2)ww^T P_h^(1/2)/b and second moment

\\[
\\sigma_h^2/b=h\\rho^2w^TP_hw/b=\\rho^2(1-h^2)/(3b).
\\]

The last equality follows from P_hw=2 and sum j(N−j)=N(N²−1)/6. The h
factor matters: the unweighted w^TP_hw grows with N. Comparisons use the
printed h-weighted objective/energy, not a mixture of mesh-dependent norms.
The original Euclidean gradient, the preconditioned direction and Bz are
different quantities.

For SGD, z_next=(I−eta B)z−eta noise. Conditional mean zero removes the cross
term. If 0<eta≤1/gamma,

\\[
E||z_{t+1}||^2\\le(1-\\eta)^2 E||z_t||^2+\\eta^2\\sigma_h^2/b.
\\]

Thus constant step has the explicit upper bound
(1−eta)^(2t)||z_0||² + eta sigma_h²[1−(1−eta)^(2t)]/[b(2−eta)].
It is an upper bound, not the exact covariance for a nonscalar B. Exact mean is
(I−eta B)^t z_0; covariance is the finite matrix sum of propagated noise
covariances. No full dense covariance is stored in the large field experiment.

For diminishing SGD take eta_t=eta_0/(1+t/16), eta_0=1/(2gamma).
The steps have divergent sum and summable squares. Here there is a complete
mean-square argument beyond those series: V_next≤(1−eta_t)V_t+eta_t²sigma_h²/b.
For any epsilon>0, eventually eta_t sigma_h²/b≤epsilon. Iteration then bounds
limsup V_t by epsilon, because products of (1−eta_t) tend to zero. Let
epsilon decrease to zero. This proves mean-square convergence for this fixed
finite-dimensional, strongly convex, bounded-additive-noise model. It is not
a theorem about arbitrary nonconvex training or arbitrary diminishing momentum.

For general lower-bounded L-smooth objectives, NS-4's separate descent lemma
gives average expected squared gradient≤2(F_0−F_inf)/(eta T)+L eta sigma²,
under its Euclidean or explicitly transformed smoothness/noise hypotheses and
eta≤1/L. That nonconvex telescope is not a final-iterate or pathwise monotonicity
claim. In this field problem apply it in z coordinates with L=gamma.

Velocity momentum is v_next=beta v+direction, x_next=x−eta v_next,
beta=1/2. On a transformed eigenmode lambda the deterministic characteristic
polynomial is r²−(1+beta−eta lambda)r+beta. The second-order Jury conditions
give 0<eta lambda<2(1+beta). All selected repaired steps eta_0=1/(2gamma)
meet this. C's old eta=1/8 at N=2 has lambda=(1+64)/2=65/2,
eta lambda=65/16>3: it fails both SGD and momentum stability. The repair is
1/128. Constant-step momentum is studied with its own state/covariance
recurrence; no SGD noise-floor formula is borrowed for it.

### Complete scalar checkpoint and sampling repairs

The scalar data are the N=2 primary preconditioned curvature, with initial
error 1, velocity 0. Write r=11/16 and zeta_t=s_t/4. SGD gives
e_t=r^t−(1/32) sum_{k<t}r^(t−1−k)s_k. Mean is r^t and variance is
(1/1024)(1−r^(2t))/(1−r²); its limit is 1/540. For batch 4 divide the noise
variance by 4, not the mean term. Enumerate all 256 equally likely sign
histories through step 8 for batch 1. Batch 4's mean sign has binomial weights
1,4,6,4,1 over 16 on values −1,−1/2,0,1/2,1; use their moments rather than
enumerating 2^32 underlying histories.

For momentum put Y=(e,v)^T,
H=[[11/16,−1/16],[5/2,1/2]], q=(−1/8,1)^T.
Every fixed-trace state is H^t(1,0)^T+sum_{k<t}H^(t−1−k)q s_k/4.
Mean is H^t(1,0)^T and covariance obeys C_next=H C H^T+q q^T/(16b), C_0=0.
These formulas specify every iterate, mean and covariance, including all eight
printed signs, independently of the executable loop.

| Method | t | Mean error | Error variance | Mean velocity | Velocity variance | Error/velocity covariance |
| --- | --- | --- | --- | --- | --- | --- |
| SGD | 1 | 11/16 | 1/1024 | 0 | 0 | 0 |
| SGD | 2 | 121/256 | 377/262144 | 0 | 0 | 0 |
| Momentum | 1 | 11/16 | 1/1024 | 5/2 | 1/16 | -1/128 |
| Momentum | 2 | 81/256 | 617/262144 | 95/32 | 265/4096 | -313/32768 |

The scalar reference also runs SGD and momentum, batches 1 and 4, on each of
the five keyed streams for 8192 steps, retaining the late window t=4096,...,8191.
It prints each empirical mean/variance and their exact model's stationary
variance. SGD's limit is 1/(540b). For momentum the error is an AR(2) process
with c=1+beta−eta lambda. In stationarity its lag-one covariance is
c V/(1+beta); inserting this in
V=(c²+beta²)V−2c beta Cov(e_t,e_{t−1})+eta² sigma² gives
V=eta sigma²(1+beta)/[(1−beta)lambda(2(1+beta)−eta lambda)] =3/(860b).
This derives the model value; five empirical paths are not a proof of it or
a guarantee that a particular variance estimate lies close. The 20 scalar
runs add exactly 163840 bounded updates.

At the noiseless SGD boundary eta lambda=2 the error alternates without decay;
at eta lambda=3 it grows by factor−2. For momentum beta=1/2, eta lambda=3
has roots−1 and−1/2, so strict stability has already failed. Exact clipping of
the native noise estimator −1 with probability 9/10 and 9 with probability 1/10
at threshold 2 changes mean 0 to −7/10. The reference prints this enumeration.
Epsilon after a square root has gradient units; inside has squared-gradient
units. With D=diag(1,100), eta lambda_penalty=.01 and theta=(1,1), coupled
penalty gives(.99,0), decoupled decay(.99,.99). These are answered controls,
not unimplemented promises of adaptive optimizers.

A second repair makes sampling failures concrete. For two rows s=±1,
ell_s(theta)=(theta−s)², equal-row F=theta²+1, theta_0=1, eta=1/4, batch 2:

| Sampling at every update | Mean at t=2 | Variance at t=2 | Expected gap theta² at t=2 |
| --- | --- | --- | --- |
| fresh iid uniform | 1/4 | 5/32 | 7/32 |
| fresh iid p(+)=3/4, importance factor 1/(2p_s) | 1/4 | 71/192 | 83/192 |
| one initial uniform batch reused forever | 1/4 | 9/32 | 11/32 |

The complete uniform key is mean 2^(−t), variance (1−4^(−t))/6. For importance
sampling the single-gradient variance is (4/3)(theta+2)² and the batch variance
(2/3)(theta+2)²; unbiasedness alone does not give a global constant variance.
The three batch maps preserve [−1,1], supplying a bound 6 for this batch model.
The exact second moment is 4/17+(4/5)2^(−t)−(3/85)(7/24)^t. For reused batches
variance=(1−2^(−t))²/2; after step 1 the history reveals the batch mean, so
fresh conditional unbiasedness fails. Duplicating one draw inside batch 2
retains variance 4 rather than 2. Sampling only the plus row loses support and
cannot recover the missing minus gradient by weighting. At theta=1 a sampled
plus/plus batch has gradient 0 although full gradient 2 and gap 1: reject that
stopping rule. The public reference enumerates the complete finite histories.

## Complete bounded public reference

Software readiness is required before the execution work: JavaScript arrays,
functions and JSON; saving plain-text files; terminal working directories;
and separate standard output/error. For JavaScript repair use the
[CS core's CS-QUEUE and CS-SYSTEM-A complete references](#/item/course-mathematics-computer-science-standard),
which teach the arrays, state, validation and examples used here. If opening
a terminal, choosing a working directory, saving UTF-8 files or redirection is
unfamiliar, first obtain local setup help and practise those exact operations
in a learner-owned folder. Then complete the syntax check and full run below;
reading the model does not complete software preparation.
Use Node.js **20.19 or newer**, the
repository floor. In a POSIX shell such as bash or zsh, save the first JSON
block as \`numerics-specialist-data.json\` and the following JavaScript block as
\`numerics-specialist-reference.mjs\` in the same external working directory.
Then use these exact commands:

\`\`\`sh
node --version > numerics-specialist-node-version.txt
node --check numerics-specialist-reference.mjs
node numerics-specialist-reference.mjs < numerics-specialist-data.json > numerics-specialist-output.json 2> numerics-specialist-error.txt
\`\`\`

Check the saved version and command exit status. A missing Node command,
syntax error, nonzero exit or failure code needs repair before claiming
execution; retain the error and seek a terminal/JavaScript preparation repair.
Other shells require their documented redirection syntax. There is no exported
function to call: this is a complete command-line entry program reading stdin.
No package is required. Success has empty stderr and one JSON object on stdout
with \`version\`, \`pde\`, \`large\`, \`scalar\`, \`sampling\`, \`stochastic\`, \`costs\` and
\`probe\`. These contain all final PCG/PDE coefficient vectors (including N=4),
certified residual rows, all scalar trace states/moments, finite sampling
enumeration and stochastic summaries. The input above retains the complete
N=4 matrices, loads and exact keys as text.
This reference accepts only the printed fixed problem; altered data is refused
before numerical work. Reordering JSON object keys or changing whitespace
preserves its normalized identity. Designing another problem requires a new
mathematical budget, input identity and independent review.
The code uses fixed left-to-right reductions in binary64, rejects nonfinite
arithmetic, and encloses elementary stencil operations with adjacent binary64
numbers. This inclusion argument assumes correctly rounded +, −, × and ÷ in
the declared JavaScript execution environment; no transcendental function is
used by the interval certificate. The oracle independently checks the dyadic
endpoint arithmetic, rather than accepting a printed word \`certified\`.

Software limits are N≤32768, PCG≤256/diagnostic CG≤64, 18 PDE solves,
18 large PCG and 18 capped CG comparisons, and 270 stochastic runs of 1024
updates. The latter contain 30,689,280 interior-coordinate update positions.
The 18 suffix replay audits add 18126 transition comparisons and 271890
coordinate positions, for 30,961,170 total field-update positions. Each sampled field
step is O(N). Arrays and one output's final vectors are O(sum N), not N².
The single returned JSON is bounded by 16 MiB; it is a transient execution
result, not an archived benchmark. Actual elapsed time and peak process memory
must be measured by the executor if performance is claimed.

The five stream keys name deterministic xorshift32 experiments. The probability
proof models ideal iid signs; the generator/reduction contract gives replay,
not a proof of independent streams. Late coordinate means/variances are
empirical, and adjacent late iterates are correlated. Full state includes
parameters, velocity, step, next learning rate, generator, draw cursor,
configuration identity and metric numerators/counts. A checkpoint is accepted
only after complete validation into a new object, so rejection leaves the old
state untouched. The identity binds a SHA-256 of the complete key-normalized
problem and the named algorithm/operation-order version; retain the exact
program file as well. Changing a witness, coefficient, schedule or metric
input invalidates an old checkpoint. This is atomic **in-memory acceptance**, not a claim about
filesystem crash durability. Probe mode accepts a bounded JSON envelope
\`{"problem":...,"probe":{"config":...,"checkpoint":...}}\` and returns one
successor. \`--fault=coefficient\`, \`--fault=cap\`, \`--fault=false-stop\`,
\`--fault=checkpoint-config\`, \`--fault=checkpoint-velocity\` and
\`--fault=checkpoint-random\` must exit nonzero with a stable reason and no
success record. No failed vector is a solution certificate.

The general replay contract has a deterministic induction proof. Equal complete
states and the same model/operation identity give the same next generator
states, signs and batch denominator; the same current errors, stencil,
preconditioner and velocity; and then the same parameters, step, schedule and
metric updates. Therefore their successors are equal. Induction proves equal
future transitions for this fixed execution contract. Finite binary64 values
round-trip through the program's JSON serialization; zero is normalized to +0.
The 18 actual suffix comparisons are independent execution checks of this
contract's selected instances, not a proof of untested language environments.

\`\`\`javascript
import { readSync } from 'node:fs';
import { createHash } from 'node:crypto';
'use strict';
// Complete dependency-free Node reference. It reads only the supplied JSON.
const inputBytes=Buffer.alloc(200001);let used=0,chunk;
while(used<inputBytes.length&&(chunk=readSync(0,inputBytes,used,inputBytes.length-used,null))>0)used+=chunk;
const raw=inputBytes.subarray(0,used).toString('utf8');
const fail = code => { throw Object.assign(new Error(code), {code}); };
const finite = x => Number.isFinite(x) ? (x === 0 ? 0 : x) : fail('NONFINITE');
const rat = s => { const p=String(s).split('/').map(Number); return finite(p[0]/(p[1]??1)); };
const poly = (p,x) => p.reduceRight((v,c)=>finite(v*x+rat(c)),0);
const maxabs = x => x.reduce((m,v)=>Math.max(m,Math.abs(v)),0);
const dot = (x,y) => x.reduce((s,v,i)=>finite(s+v*y[i]),0);
const view = new DataView(new ArrayBuffer(8));
function adjacent(x,up) {
  finite(x); if (x===0) return up?Number.MIN_VALUE:-Number.MIN_VALUE;
  view.setFloat64(0,x,false); let u=view.getBigUint64(0,false);
  u += ((x>0)===up)?1n:-1n; view.setBigUint64(0,u,false);
  return finite(view.getFloat64(0,false));
}
const point = x=>[x,x];
const plus = (a,b)=>[adjacent(finite(a[0]+b[0]),false),adjacent(finite(a[1]+b[1]),true)];
const minus = (a,b)=>plus(a,[-b[1],-b[0]]);
function times(a,b) {
  const p=[a[0]*b[0],a[0]*b[1],a[1]*b[0],a[1]*b[1]].map(finite);
  return [adjacent(Math.min(...p),false),adjacent(Math.max(...p),true)];
}
function imv(a,x,N) {
  const n=N-1, out=[];
  for(let j=0;j<n;j++) {
    const left=times(point(a[j]),minus(point(x[j]),point(j?x[j-1]:0)));
    const right=times(point(a[j+1]),minus(point(j+1<n?x[j+1]:0),point(x[j])));
    out.push(times(point(N*N),minus(left,right)));
  }
  return out;
}
const costs = {setupRows:0,coefficientRows:0,stencilRows:0,preconditionerRows:0,intervalRows:0,dataIntervalRows:0};
function mv(a,x,N) {
  costs.stencilRows+=N-1;
  return x.map((v,j)=>finite(N*N*(a[j]*(v-(j?x[j-1]:0))-a[j+1]*((j+1<x.length?x[j+1]:0)-v))));
}
function setup(N) {
  costs.setupRows+=N-1;
  return Array.from({length:N-1},(_,j)=>(j+2)/(j+1));
}
function poisson(r,N,d) {
  const y=Array(r.length), z=Array(r.length), x=Array(r.length);
  costs.preconditionerRows+=3*r.length;
  for(let j=0;j<r.length;j++) y[j]=finite(r[j]/(N*N)+(j?(j/(j+1))*y[j-1]:0));
  for(let j=0;j<r.length;j++) z[j]=finite(y[j]/d[j]);
  for(let j=r.length-1;j>=0;j--) x[j]=finite(z[j]+(j+1<r.length?((j+1)/(j+2))*x[j+1]:0));
  return x;
}
function certificate(a,x,N,bounds) {
  const ax=imv(a,x,N); costs.intervalRows+=N-1;
  const intervals=ax.map((v,j)=>minus(bounds[j],v));
  const residualUpper=maxabs(intervals.flat());
  return {residualUpper,nodalUpper:adjacent(residualUpper/4,true),intervals};
}
function solve(a,b,bounds,N,d,cap,target,preconditioned) {
  let x=Array(N-1).fill(0),r=b.slice(),z=preconditioned?poisson(r,N,d):r.slice(),p=z.slice(),rz=dot(r,z);
  let cert=certificate(a,x,N,bounds), rows=[{iteration:0,residualUpper:cert.residualUpper,recursiveMax:maxabs(r)}];
  for(let k=0;k<cap;k++) {
    const ap=mv(a,p,N), curvature=dot(p,ap);
    if (!(curvature>0&&rz>0)) fail('CG_CURVATURE');
    const alpha=finite(rz/curvature);
    x=x.map((v,j)=>finite(v+alpha*p[j])); r=r.map((v,j)=>finite(v-alpha*ap[j]));
    if((k+1)%8===0||maxabs(r)<=target||k+1===cap) {
      cert=certificate(a,x,N,bounds);
      rows.push({iteration:k+1,residualUpper:cert.residualUpper,recursiveMax:maxabs(r)});
      if(cert.residualUpper<=target) return {status:'certified',iterations:k+1,x,certificate:cert,rows};
    }
    z=preconditioned?poisson(r,N,d):r.slice(); const next=dot(r,z);
    if(next===0) break;
    const beta=finite(next/rz); p=z.map((v,j)=>finite(v+beta*p[j])); rz=next;
  }
  cert=certificate(a,x,N,bounds);
  return {status:cert.residualUpper<=target?'certified':'cap',iterations:rows.at(-1).iteration,x,certificate:cert,rows};
}
function popsign(i) {let s=1;while(i){if(i&1)s=-s;i>>>=1;}return s;}
function witness(D,N,shift) {
  return Array.from({length:N-1},(_,j)=>poly(D.large.base,(j+1)/N)*(1+rat(D.large.sign_amplitude)*popsign(j+1+shift)));
}
function coefficients(N,gamma) {costs.coefficientRows+=N;return Array.from({length:N},(_,i)=>1+(gamma-1)*(i+.5)/N);}
const xs = s => {s^=s<<13;s^=s>>>17;s^=s<<5;return s>>>0;};
const clone = o=>JSON.parse(JSON.stringify(o));
const canonical = value=>Array.isArray(value)?'['+value.map(canonical).join(',')+']':value&&typeof value==='object'?'{'+Object.keys(value).sort().map(k=>JSON.stringify(k)+':'+canonical(value[k])).join(',')+'}':JSON.stringify(value);
let D,modelIdentity;
function configuration(c,N,batch,policy,stream) {
  if(!D.stochastic.meshes.includes(N)||!D.stochastic.batches.includes(batch)||!D.stochastic.policies.includes(policy)||!D.stochastic.streams.includes(stream)||!D.large.cases[c]) fail('CONFIG');
  const v=D.large.cases[c], seed=((stream^Math.imul(N,0x9e3779b1)^Math.imul(batch,0x85ebca6b)^Math.imul(c.charCodeAt(0),0xc2b2ae35)^Math.imul(policy.length,0x27d4eb2d))>>>0)||1;
  return {version:D.version,modelIdentity,case:c,N,batch,policy,stream,gamma:v.gamma,rho:v.rho,shift:v.shift,seed,steps:D.stochastic.steps};
}
function eta(cfg,t) {const e=1/(D.stochastic.eta_denominator*cfg.gamma);return cfg.policy==='sgd-diminishing'?e/(1+t/D.stochastic.schedule_offset):e;}
function initial(cfg) {return {version:1,identity:JSON.stringify(cfg),step:0,cursor:0,rng:cfg.seed,nextEta:eta(cfg,0),x:Array(cfg.N-1).fill(0),velocity:Array(cfg.N-1).fill(0),metrics:{count:0,sumGap:0,lateCount:0,lateSum:0,lateSquareSum:0}};}
function accept(candidate,cfg) {
  const canonical=configuration(cfg.case,cfg.N,cfg.batch,cfg.policy,cfg.stream);
  for(const k of Object.keys(canonical)) if(cfg[k]!==canonical[k]) fail('CHECKPOINT_CONFIG');
  const s=candidate;
  if(!s||s.version!==1||s.identity!==JSON.stringify(canonical)||!Number.isInteger(s.step)||s.step<0||s.step>cfg.steps||s.cursor!==s.step*cfg.batch||s.nextEta!==eta(cfg,s.step)) fail('CHECKPOINT_CONFIG');
  for(const name of ['x','velocity']) if(!Array.isArray(s[name])||s[name].length!==cfg.N-1||s[name].some(v=>!Number.isFinite(v))) fail('CHECKPOINT_VELOCITY');
  let rng=cfg.seed;for(let k=0;k<s.cursor;k++)rng=xs(rng);
  if(s.rng!==rng) fail('CHECKPOINT_RANDOM');
  const m=s.metrics, count=Math.max(0,s.step-D.stochastic.late_start);
  if(!m||m.count!==s.step||m.lateCount!==count||!['sumGap','lateSum','lateSquareSum'].every(k=>Number.isFinite(m[k]))||m.sumGap<0||m.lateSquareSum<0) fail('CHECKPOINT_METRICS');
  return clone(s);
}
function advance(s,cfg,a,d,star,w) {
  if(s.step>=cfg.steps) fail('STEP_LIMIT');
  const e=s.x.map((v,j)=>v-star[j]), ae=mv(a,e,cfg.N), direction=poisson(ae,cfg.N,d);
  const gap=finite(dot(e,ae)/(2*cfg.N));
  let signs=0;for(let k=0;k<cfg.batch;k++){s.rng=xs(s.rng);signs+=(s.rng>>>31)?1:-1;s.cursor++;}
  const meanSign=signs/cfg.batch, rate=s.nextEta, beta=cfg.policy==='momentum-constant'?rat(D.stochastic.beta):0;
  s.metrics.sumGap=finite(s.metrics.sumGap+gap);s.metrics.count++;
  if(s.step>=D.stochastic.late_start) {
    const coordinate=e[Math.floor(e.length/2)];s.metrics.lateCount++;s.metrics.lateSum=finite(s.metrics.lateSum+coordinate);s.metrics.lateSquareSum=finite(s.metrics.lateSquareSum+coordinate*coordinate);
  }
  for(let j=0;j<e.length;j++){s.velocity[j]=finite(beta*s.velocity[j]+direction[j]+cfg.rho*meanSign*w[j]);s.x[j]=finite(s.x[j]-rate*s.velocity[j]);}
  s.step++;s.nextEta=eta(cfg,s.step);return s;
}
function field(cfg) {
  const a=coefficients(cfg.N,cfg.gamma),d=setup(cfg.N),star=witness(D,cfg.N,cfg.shift),w=Array.from({length:cfg.N-1},(_,j)=>(j+1)/cfg.N*(1-(j+1)/cfg.N));
  let s=initial(cfg), restored=null, checkpoint=null, successor=null;
  const audit=cfg.N===16&&cfg.stream===1;
  for(let t=0;t<cfg.steps;t++) {
    if(t===D.stochastic.restart_step&&audit){checkpoint=clone(s);restored=accept(checkpoint,cfg);}
    s=advance(s,cfg,a,d,star,w);
    if(restored){restored=advance(restored,cfg,a,d,star,w);if(JSON.stringify(s)!==JSON.stringify(restored))fail('RESTART_MISMATCH');if(t===D.stochastic.restart_step)successor=clone(s);}
  }
  const e=s.x.map((v,j)=>v-star[j]),ae=mv(a,e,cfg.N),full=poisson(ae,cfg.N,d),pe=mv(Array(cfg.N).fill(1),e,cfg.N);
  return {config:cfg,state:s,gap:dot(e,ae)/(2*cfg.N),weightedPError:dot(e,pe)/cfg.N,transformedGradientSquared:dot(ae,full)/cfg.N,noiseSecondMoment:cfg.rho*cfg.rho*(1-1/(cfg.N*cfg.N))/(3*cfg.batch),restart:audit?{checkpoint,successor,comparedTransitions:cfg.steps-D.stochastic.restart_step}:null};
}
function scalar() {
  const c=D.stochastic.scalar, lam=rat(c.lambda),rate=rat(c.eta),rho=rat(c.rho),w=rat(c.w),beta=rat(D.stochastic.beta);
  function trace(signs,momentum) {let e=rat(c.e0),v=rat(c.v0);const out=[{e,v}];for(const s of signs){v=finite((momentum?beta*v:0)+lam*e+rho*w*s);e=finite(e-rate*v);out.push({e,v:momentum?v:0});}return out;}
  function moments(momentum,batch) {
    const H=momentum?[[1-rate*lam,-rate*beta],[lam,beta]]:[[1-rate*lam,0],[0,0]],q=momentum?[-rate,1]:[-rate,0];
    let m=[rat(c.e0),0],C=[[0,0],[0,0]],out=[];
    for(let t=0;t<=c.signs.length;t++) {
      out.push({t,mean:m.slice(),covariance:C.map(r=>r.slice())});
      const next=H.map(row=>dot(row,m)),nextC=H.map((_,i)=>H.map((__,j)=>{let v=0;for(let k=0;k<2;k++)for(let l=0;l<2;l++)v+=H[i][k]*C[k][l]*H[j][l];return v+rho*rho*w*w*q[i]*q[j]/batch;}));m=next;C=nextC;
    }
    return out;
  }
  const enumeration={};
  for(const method of ['sgd','momentum']) {let m=0,v=0,ee=0,vv=0,ev=0;for(let mask=0;mask<256;mask++){const signs=Array.from({length:8},(_,j)=>(mask>>j)&1?1:-1),last=trace(signs,method==='momentum').at(-1);m+=last.e/256;v+=last.v/256;ee+=last.e*last.e/256;vv+=last.v*last.v/256;ev+=last.e*last.v/256;}enumeration[method]={mean:[m,v],covariance:[[ee-m*m,ev-m*v],[ev-m*v,vv-v*v]]};}
  const late=[];
  for(const momentum of [false,true])for(const batch of D.stochastic.batches)for(const stream of D.stochastic.streams){let rng=((stream^Math.imul(batch,0x9e3779b1)^(momentum?0x85ebca6b:0xc2b2ae35))>>>0)||1,e=rat(c.e0),v=0,total=0,squares=0,count=0;for(let t=0;t<c.late_steps;t++){if(t>=c.late_start){total+=e;squares+=e*e;count++;}let signs=0;for(let j=0;j<batch;j++){rng=xs(rng);signs+=(rng>>>31)?1:-1;}v=finite((momentum?beta*v:0)+lam*e+rho*w*signs/batch);e=finite(e-rate*v);}const noiseVariance=rho*rho*w*w/batch,theoreticalLimit=momentum?rate*noiseVariance*(1+beta)/((1-beta)*lam*(2*(1+beta)-rate*lam)):rate*noiseVariance/(lam*(2-rate*lam));late.push({method:momentum?'momentum':'sgd',batch,stream,count,mean:total/count,variance:squares/count-(total/count)**2,finalError:e,theoreticalLimit});}
  return {sgdTrace:trace(c.signs,false),momentumTrace:trace(c.signs,true),moments:{sgd1:moments(false,1),sgd4:moments(false,4),momentum1:moments(true,1),momentum4:moments(true,4)},enumeration,late,clipping:[{value:-1,probability:9/10,clipped:-1},{value:9,probability:1/10,clipped:2}],clippingMean:(9/10)*(-1)+(1/10)*2};
}
function sampling() {
  const result={};
  for(const mode of ['uniform','importance','reuse']) {
    const paths=[];const count=mode==='reuse'?4:16;
    for(let mask=0;mask<count;mask++) {
      const signs=Array.from({length:mode==='reuse'?2:4},(_,j)=>(mask>>j)&1?1:-1);let theta=1,probability=1,trace=[theta];
      for(const s of signs)probability*=mode==='importance'?(s===1?3/4:1/4):1/2;
      for(let t=0;t<2;t++) {const batch=signs.slice(mode==='reuse'?0:2*t,(mode==='reuse'?0:2*t)+2);let g=0;for(const s of batch)g+=2*(theta-s)/(mode==='importance'?2*(s===1?3/4:1/4):1);theta-=g/8;trace.push(theta);}
      paths.push({signs,probability,trace});
    }
    const mean=paths.reduce((v,p)=>v+p.probability*p.trace[2],0),second=paths.reduce((v,p)=>v+p.probability*p.trace[2]**2,0);result[mode]={paths,mean,variance:second-mean*mean,second};
  }
  return result;
}
function main() {
  if(used>200000)fail('INPUT_LIMIT');const input=JSON.parse(raw);D=input.problem??input;
  modelIdentity=createHash('sha256').update('matrix-free-scenario-operations-v1\\n'+canonical(D)).digest('hex');
  if(modelIdentity!=='86dbc009c55eb2ba791b8801f1db6b809257559c428ae0fff2dbcb39e409c838')fail(input.probe?'CHECKPOINT_CONFIG':'PROBLEM_DATA');
  if(D.version!=='numerics-specialist-1')fail('VERSION');
  const meshes=[...D.pde.meshes,...D.large.meshes,...D.stochastic.meshes];
  if(meshes.some(N=>!Number.isInteger(N)||N<4||N>32768||(N&(N-1))))fail('MESH');
  if(D.pde.meshes.length!==6||D.large.meshes.length!==6||D.stochastic.meshes.length!==3||[D.pde.meshes,D.large.meshes,D.stochastic.meshes].some(a=>new Set(a).size!==a.length))fail('MESH');
  if(D.stochastic.batches.length!==2||D.stochastic.batches.some(b=>b!==1&&b!==4)||new Set(D.stochastic.batches).size!==2||D.stochastic.policies.length!==3||D.stochastic.policies.some(p=>!['sgd-constant','sgd-diminishing','momentum-constant'].includes(p))||new Set(D.stochastic.policies).size!==3||new Set(D.stochastic.streams).size!==5||D.stochastic.streams.some(s=>!Number.isSafeInteger(s)||s<1||s>0xffffffff))fail('LIMITS');
  if(D.stochastic.eta_denominator!==2||rat(D.stochastic.beta)!==.5||D.stochastic.schedule_offset!==16||D.stochastic.restart_step!==17||D.stochastic.late_start!==512||D.stochastic.scalar.signs.length!==8||D.stochastic.scalar.signs.some(s=>s!==1&&s!==-1)||D.stochastic.scalar.late_steps!==8192||D.stochastic.scalar.late_start!==4096)fail('LIMITS');
  const fault=process.argv.find(s=>s.startsWith('--fault='))?.slice(8);
  if(fault==='coefficient')D.large.cases.P.gamma=0;
  if(Object.values(D.large.cases).some(c=>!(c.gamma>=1&&c.gamma<=64&&c.rho>0)))fail('COEFFICIENT');
  if(D.large.pcg_cap!==256||D.large.cg_cap!==64||D.stochastic.steps!==1024||D.stochastic.streams.length!==5)fail('LIMITS');
  if(input.probe){const cfg=input.probe.config,s=accept(input.probe.checkpoint,cfg),N=cfg.N;return {state:advance(s,cfg,coefficients(N,cfg.gamma),setup(N),witness(D,N,cfg.shift),Array.from({length:N-1},(_,j)=>(j+1)/N*(1-(j+1)/N)))};}
  if(fault==='cap'){const N=4,a=coefficients(N,4),v=witness(D,N,0),b=mv(a,v,N),s=solve(a,b,imv(a,v,N),N,setup(N),0,rat(D.large.residual_target),true);if(s.status!=='certified')fail('SOLVER_CAP');}
  if(fault==='false-stop') {const N=4,a=coefficients(N,4),v=witness(D,N,0),b=imv(a,v,N);if(certificate(a,Array(N-1).fill(0),N,b).residualUpper>rat(D.large.residual_target))fail('FALSE_STOP');}
  if(fault?.startsWith('checkpoint-')){const cfg=configuration('P',16,1,'momentum-constant',1),sample=field(cfg),candidate=clone(sample.restart.checkpoint);if(fault==='checkpoint-config')candidate.identity='stale';else if(fault==='checkpoint-velocity')delete candidate.velocity;else if(fault==='checkpoint-random')candidate.rng^=1;accept(candidate,cfg);fail('FAULT_NOT_REJECTED');}
  const pde=[];
  for(const name of ['P','C','R'])for(const N of D.pde.meshes){const c=D.pde.cases[name],a=Array.from({length:N},(_,i)=>poly(c.a,(i+.5)/N)),b=Array.from({length:N-1},(_,j)=>poly(c.f,(j+1)/N)),bounds=b.map(point),d=setup(N),target=4/(N*N*D.pde.algebraic_fraction),s=solve(a,b,bounds,N,d,D.large.pcg_cap,target,true);if(s.status!=='certified')fail('PDE_CAP');const exact=Array.from({length:N-1},(_,j)=>poly(D.pde.u,(j+1)/N)),q=Array.from({length:N},(_,i)=>-a[i]*((i+1<N?s.x[i]:0)-(i?s.x[i-1]:0))*N),out={case:name,N,...s,nodalObserved:maxabs(s.x.map((v,j)=>v-exact[j])),flux:q,balance:q.at(-1)-q[0]-b.reduce((v,f)=>v+f/N,0)};if(name==='R'){const contaminated=s.x.map((v,j)=>v+rat(D.pde.return_floor)*(j+1)/N*(1-(j+1)/N));out.contaminated={x:contaminated,certificate:certificate(a,contaminated,N,bounds),nodalObserved:maxabs(contaminated.map((v,j)=>v-exact[j]))};}pde.push(out);}
  const large=[];
  for(const name of ['P','C','R'])for(const N of D.large.meshes){const c=D.large.cases[name],a=coefficients(N,c.gamma),v=witness(D,N,c.shift),b=mv(a,v,N),bounds=imv(a,v,N),d=setup(N),pcg=solve(a,b,bounds,N,d,D.large.pcg_cap,rat(D.large.residual_target),true),cg=solve(a,b,bounds,N,d,D.large.cg_cap,rat(D.large.residual_target),false);costs.dataIntervalRows+=N-1;if(pcg.status!=='certified')fail('SOLVER_CAP');delete pcg.certificate.intervals;delete cg.certificate.intervals;large.push({case:name,N,pcg,cg:{status:cg.status,iterations:cg.iterations,certificate:cg.certificate,rows:cg.rows},witnessError:maxabs(pcg.x.map((x,j)=>x-v[j]))});}
  const stochastic=[];
  for(const name of ['P','C','R'])for(const N of D.stochastic.meshes)for(const policy of D.stochastic.policies)for(const batch of D.stochastic.batches)for(const stream of D.stochastic.streams)stochastic.push(field(configuration(name,N,batch,policy,stream)));
  const probe=stochastic.find(r=>r.config.case==='P'&&r.config.N===16&&r.config.policy==='momentum-constant'&&r.config.batch===1&&r.config.stream===1);
  return {version:D.version,pde,large,scalar:scalar(),sampling:sampling(),stochastic,costs,probe:{config:probe.config,checkpoint:probe.restart.checkpoint,successor:probe.restart.successor}};
}
try {const output=JSON.stringify(main());if(output.length>16*1024*1024)fail('OUTPUT_LIMIT');process.stdout.write(output+'\\n');}
catch(error){process.stderr.write(String(error.code??'INVALID_INPUT')+'\\n');process.exitCode=2;}
\`\`\`

## Comparison, repair and later return record

Before revealing a model, date and retain a first derivation and software
output. Compare each equation, boundary sign, norm, conditioning factor,
sampling assumption and acceptance comparison with the public model and
independent oracle. Record the first mismatch, its cause, the source/key that
repaired it, a revised derivation/output, and a later return using the changed
data. Keep original and revised work as separate external files. A portfolio
may contain a proof, source data, command/environment, complete text tables,
failure log and checkpoint; it contains no inferred grade or new learner-store
schema. Self-reported study marks are not mathematical or execution evidence.

For PDE R retain the deliberately contaminated and repaired field budgets.
For large R retain the changed witness identity and prove a stale P load is
rejected by its exact residual. For stochastic R retain the serialized step 17
state and every subsequent equality comparison, plus the velocity-reset
counterexample: for a=2, beta=1/2, eta=1/4, e0=1,v0=0, the first state is
(1/2,2), the next correct state is(0,2), while resetting velocity gives(1/4,1).
If a final certificate fails, retain the failure and change arithmetic,
tolerance or algorithm with a reason; do not relabel it success.

The completed selection proves smooth one-dimensional conservative convergence,
mesh-independent preconditioned spectral bounds for a stated contrast class,
and exact finite-scenario stochastic results with complete reproducible models.
It does not supply general nonlinear/adaptive PDE theory, AMG implementation,
distributed scaling, variance-reduction algorithms, population generalization
or the broader native trainer/capstone projects. Those limits preserve the
meaning of the specialist sources while making this chosen route complete.
`;export{e as default};