
# Numerical Proofs: Stability, Optimization, and Discretization

<!-- euler-course-route -->

## Current course route

Follow the [current chapter syllabus](#/courses/atlas-numerics-optimization-advanced) through [Convex Optimisation: Structure, Duality and Algorithms](#/books/numerical-mathematics-optimization-by-structure). All twelve current core chapters are assigned. Earlier numerical and discrete selections keep their registered destinations and original study identities.

Preparation courses: [Numerical analysis](#/courses/atlas-numerical-mathematics-reliable-computation) · [Linear algebra II](#/courses/atlas-linear-algebra-standard) · [Real analysis](#/courses/course-lucent-analysis) · [Optimisation](#/courses/course-optimisation).

The earlier mathematical explanations, proofs, assignments and complete solutions remain below with their original task identities. Their first-attempt, comparison and correction requirements still apply when you choose that earlier work. Existing notes and study marks keep their original scope.

An accurate-looking output is a proposal. A numerical proof identifies its
exact problem, controls amplification and arithmetic, and supplies a witness
whose claim can be checked independently. This advanced route connects
stability, verified computation, convex and nonlinear optimization, and
discretization. It builds on the undergraduate reliable-computation course.
Full selected study time is unknown; no hours, credit or learner grade is
inferred from the linked books' estimates. The source books remain working
editions, and existing PDFs may predate their current explanations.

## Preparation and diagnostic release

Bring real multivariable calculus, Taylor's theorem with remainder, the mean
value theorem, integration by parts, matrix/vector norms, linear systems,
positive-definite quadratic forms and elementary proofs with inequalities.
The contraction certificates use completeness and Banach's theorem on a closed
box. The fixed field example is a classical one-dimensional boundary problem
with an elementary discrete proof. The linked finite-element reading uses
Hilbert/Sobolev spaces, traces, Poincaré and coercive-form existence; it does
not prove a general nonlinear weak-PDE existence theorem.

Attempt these exact source questions before their complete public answers:

| Release | Required questions and complete key | Repair before proceeding |
| --- | --- | --- |
| NA-PREP-REAL | [Real-analysis diagnostic](#/books/proof-safe-real-analysis), A4–A5, B1–B3, C3–C5, D1–D4, E1–E2; adjacent answers | Bounds, domains, geometric series, real convergence and completeness. For Taylor repair use **Taylor Theory and Convexity**, §§1–3 and ANA-CH11-E001/E002; for contraction use **Fixed Points and Complete Spaces**, §§1–3 and §14, ANA-CH20-E001–E007, each with its complete solution |
| NA-PREP-ERROR | [Numerical-error diagnostic](#/books/numerical-mathematics-error-algorithms), Questions 1–17 and 21–28; every question has an Answer and Repair | Scales, Taylor remainder, norms, conditioning and contraction before NA-01–03; boundary and verification vocabulary before NA-05 |
| NA-PREP-OPT | [Optimization diagnostic](#/books/numerical-mathematics-optimization-by-structure), Questions 1–15 and 21–26; **Answer notes** and **Repair routes** follow | Dimensions, SPD/rank/projection, gradients/Hessians, convexity/subgradients, multipliers, exact versus outward arithmetic |
| NA-PREP-MATRIX | [Matrix diagnostic](#/books/matrix-computation-applications), Questions 1–7 and their adjacent answers; then **Conditioning and Stability**, Exercises 2.1–2.4 with adjacent Solutions | Residual scaling, the finite perturbation denominator and its nonzero-reference assumptions; do not classify an algorithm from one backward-error value |

The real-analysis questions diagnose preparation; they do not replace all the
required real-analysis teaching. If convexity is new, read optimization
**Formulations and Claim Boundaries**, **Convexity, Optimality, and Duality**,
and **Separation, Conjugacy, and Supporting Geometry** before relying on KKT
sufficiency. Before interval proofs read numerical **Reproducible,
Mixed-Precision, and Interval Arithmetic** and **Verification,
Reproducibility, and Responsible Experiments**.

Use the corrected online matrix statements: finite perturbations retain a
denominator; effective positive-rank conditioning and the zero matrix need
separate conventions; power iteration requires eigendirection overlap and
phase/sign alignment, and subspace iteration needs target overlap as well as
a gap. These last spectral statements are preparation boundaries, not extra
unnamed assignments or evidence obtained from a determinant or one plot.

## Required sequence and native complete keys

Work in order. Every source group names its exact questions and full feedback.
The three small optimization projects are already fully solved. The larger
fixed capstone below separately completes the existing **Capstone I: convex
primal–dual portfolio** option, rather than treating its general brief as a model.

| Group | Required teaching and questions | Complete feedback |
| --- | --- | --- |
| NA-01: stability | [Conditioning and Stability](../books/matrix-computation-applications/conditioning-and-stability.md), Exercises 2.1–2.4; the finite-perturbation question below | Adjacent Solutions and the complete model below |
| NA-02: arithmetic | [Reproducible arithmetic](#/books/numerical-mathematics-error-algorithms), Practice 1–4; [Verified and Interval Computation](../books/numerical-mathematics-error-algorithms/verified-interval-computation.md), **Solved exercises 1–10** | Adjacent full Solutions, including zero division, dependency, local/global and algebraic/discretization boundaries |
| NA-03: nonlinear verification | **Verified and Interval Computation**, Worked examples 3–5 and the Krawczyk contraction proof; all three fixed local certificates below | Native proofs/examples and exact P/C/R enclosure models below; self-map, norm and nonsingular-preconditioner checks are required |
| NA-04: optimization | Optimization chapters **Gradient, Newton, and Quasi-Newton Methods**, **Constraints, KKT Systems, and Globalization**, **Automatic Differentiation and Linearized Systems**; Part I Exercises **5.1, 5.2, 5.4, 5.6–5.8, 5.12, 8.2–8.5, 8.9, 8.12, 8.14** | Each named Exercise has an adjacent full Solution in [Exercise Program, Part I](#/books/numerical-mathematics-optimization-by-structure) |
| NA-04P: three solved projects | Part I **Project 1 (Chapter 2): a bounded convex certificate portfolio**, **Project 2 (Chapter 7): bounded derivative-audit laboratory**, **Project 3 (Chapter 9): a bounded nonsmooth primal-dual certificate** | Their adjacent **Complete solution** paragraphs: optimizer/value, parameter-box definiteness/adjoint, and subgradient/dual/proximal arguments |
| NA-05: discretization | [Boundary-Value and Field Discretizations](../books/numerical-mathematics-error-algorithms/boundary-value-pde-methods.md), Practice 1–3; [Finite-Volume and Finite-Element Methods](../books/numerical-mathematics-error-algorithms/finite-volume-element-methods.md), Exercises 1–10; the fixed field model below | All thirteen native Solutions plus the complete stencil, barrier, error and refinement model below |
| NA-06: proof logs | [Verified Optimization Software and Proof Logs](#/books/numerical-mathematics-optimization-by-structure), Exercises 1–10; [Optimization Proof-Log Capstones](#/books/numerical-mathematics-optimization-by-structure), preparation Exercises 1–12; the fixed P/C/R portfolio below | Adjacent complete Solutions for all twenty-two native questions, and all seven portfolio artifacts below |

The derivative project's analytic answer and bounded directional-audit
protocol are complete; they are not evidence that a learner executed the step
sweep. The numerical arithmetic summation project and unchosen separation or
global-tree capstones remain additional briefs. No complete execution or
model for every open choice is claimed here.

## Finite perturbation: question and complete model

In the infinity norm take $A=\operatorname{diag}(1,4)$, $b=(1,4)^T$,
$\Delta A=\operatorname{diag}(-1/4,0)$ and $\Delta b=(1/2,0)^T$.
Find both exact solutions and compare first-order and finite error bounds.

**Complete model.** $x=(1,1)^T$ and $x+\Delta x=(2,1)^T$, so relative
forward error is $1$. Also $\kappa_\infty(A)=4$, $\epsilon_A=1/16$ and
$\epsilon_b=1/8$. The first-order expression is $4(1/16+1/8)=3/4$ and
underestimates the actual error. Retaining the perturbation product gives
$$\frac{\|\Delta x\|_\infty}{\|x\|_\infty}
\le\frac{\kappa_\infty(A)(\epsilon_A+\epsilon_b)}{1-\kappa_\infty(A)\epsilon_A}=1.$$
The denominator is $3/4>0$, so this finite bound applies and is sharp here.
It concerns exact changes of data, not a claim about a floating-point solver.

## Fixed P/C/R problem data and deliverables

Attempt each case before its public model. P is primary, C changes equality
and cap data, and R returns to the same family with a different active set.
The nonlinear and field companions connect the proof log to the other units.
These are mathematical test problems, not experimental observations. All
variables are dimensionless. Every number in the canonical data is exact.

Minimize $f(x)=x^TQx/2+c^Tx$ subject to $Ax=b$, $Gx\le t$ and
$\ell\le x\le u$, in column order $(x_1,x_2,x_3,x_4)$. Thus
$x_1+x_2=b$, $x_3\le t$ and $0\le x_i\le3$. Rational strings preserve
the mathematical data without pretending ordinary decimal computation is
outward-rounded interval arithmetic.

```json
{
  "family": "NUM-ADV-QP-v1",
  "variables": ["x1","x2","x3","x4"],
  "R": [["1","0","0","0"],["0","2","0","0"],["0","0","1","0"],["0","0","0","1"]],
  "Q": [["1","0","0","0"],["0","4","0","0"],["0","0","1","0"],["0","0","0","1"]],
  "c": ["1","-2","-3/2","1"],
  "A": [["1","1","0","0"]],
  "G": [["0","0","1","0"]],
  "lower": ["0","0","0","0"],
  "upper": ["3","3","3","3"],
  "cases": [
    {"id":"P","b":"2","cap":"1/2","epsilon":"0"},
    {"id":"C","b":"3","cap":"1","epsilon":"0"},
    {"id":"R","b":"1","cap":"2","epsilon":"0"}
  ]
}
```

Submit **seven artifacts for each case**, following native Capstone I:

1. **Model:** common data plus the complete case, variable order, minimization
   direction and tolerance. A case letter alone does not identify a model.
2. **Witness:** a feasible vector, equality multiplier $y$, inequality
   multiplier $\lambda\ge0$, lower/upper multipliers $\alpha,\beta\ge0$,
   and lower bound. Check $Q=R^TR$ and nonsingularity of $R$.
3. **Checker contract:** dimensions, rational domains, model identity,
   Lagrangian signs and all mathematical acceptance predicates.
4. **Check results:** every feasibility, stationarity and complementary
   residual; primal/dual values and gap; exact conclusion and exclusions.
5. **Rejected mutations:** at least four logically different corruptions with
   the failed predicate and a recomputable counterexample.
6. **Report:** derive the answer and global bound, distinguish uniqueness from
   value equality, and identify arithmetic/trusted assumptions.
7. **Trace:** exact comparison points $z_0=(0,b,0,1)$,
   $z_1=(z_0+x^*)/2$, $z_2=x^*$, with all residuals, values and gaps. These
   are declared hand calculations, not observed optimizer iterations.

For NA-03 certify exactly one zero of $F(s,v)=(s^2-a,v-d)$ in each box $X$,
using center $(m_s,d)$ and $C=\operatorname{diag}(c_s,1)$. Compute the
Krawczyk enclosure and infinity-norm contraction bound, and limit the conclusion
to the specified box.

| Case | a | d | s lower | s upper | v lower | v upper | m_s | c_s |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| P | 2 | 3 | 7/5 | 3/2 | 299/100 | 301/100 | 29/20 | 10/29 |
| C | 3 | 2 | 17/10 | 9/5 | 199/100 | 201/100 | 7/4 | 2/7 |
| R | 2 | 3 | -3/2 | -7/5 | 299/100 | 301/100 | -29/20 | -10/29 |

For NA-05 solve $-u''=12a_f x^2$ on $[0,1]$, with $u(0)=u(1)=0$,
$u(x)=a_f(x-x^4)$ and $h=1/N$. The discrete operator is
$A_h=N^2\operatorname{tridiag}(-1,2,-1)$ on the $N-1$ interior nodes and
the load is sampled forcing. P has $a_f=1$, C has $a_f=2$, R has $a_f=-1$.
Give the $N=4$ matrix/load and exact discrete solution, a uniform inverse bound,
and nodal errors for $N=4,8,16$. Add a verified inexact-solve residual bound
$\eta$ to the error budget. Explain what a reconstructed-field claim adds.

## Complete chosen capstone model and witness

$Q=R^TR$ and $R$ is nonsingular. For nonzero $z$,
$z^TQz=z_1^2+4z_2^2+z_3^2+z_4^2>0$. Thus $f$ is strictly convex.
Each displayed witness proves feasibility; the feasible set is a nonempty
compact convex box slice. Continuity gives existence and strict convexity
gives uniqueness.

Substitute $x_2=b-x_1$: the derivative is $5x_1-4b+3$, hence
$x_1=(4b-3)/5$, $x_2=(b+3)/5$. Both are strictly between 0 and 3 in all
three cases. Independently minimize $x_3^2/2-3x_3/2$ on $[0,t]$ to get
$x_3=\min(t,3/2)$, and $x_4^2/2+x_4$ on $[0,3]$ to get $x_4=0$.
This directly derives the answer without invoking KKT necessity.

Use the sign convention
$$\mathcal L=f+y(Ax-b)+\lambda(Gx-t)+\alpha^T(\ell-x)+\beta^T(x-u).$$
Stationarity is $Qx+c+A^Ty+G^T\lambda-\alpha+\beta=0$.

```json
{
  "witnesses": [
    {"id":"P","family":"NUM-ADV-QP-v1","b":"2","cap":"1/2","x":["1","1","1/2","0"],"y":"-2","lambda":"1","alpha":["0","0","0","1"],"beta":["0","0","0","0"],"value":"7/8","lowerBound":"7/8"},
    {"id":"C","family":"NUM-ADV-QP-v1","b":"3","cap":"1","x":["9/5","6/5","1","0"],"y":"-14/5","lambda":"1/2","alpha":["0","0","0","1"],"beta":["0","0","0","0"],"value":"29/10","lowerBound":"29/10"},
    {"id":"R","family":"NUM-ADV-QP-v1","b":"1","cap":"2","x":["1/5","4/5","3/2","0"],"y":"-6/5","lambda":"0","alpha":["0","0","0","1"],"beta":["0","0","0","0"],"value":"-49/40","lowerBound":"-49/40"}
  ]
}
```

Equality and stationarity residuals are exactly zero. Cap slacks $t-x_3$ are
$0,0,1/2$. All lower slacks except $x_4$ and all upper slacks are positive;
every complementary product is zero. Some constraints are active and others
slack. In R the positive cap slack requires zero multiplier, changing P/C's
active-set conclusion rather than merely rescaling the old answer.

An independent lower bound comes from completing the square. Put
$v=c+A^Ty+G^T\lambda-\alpha+\beta$. The dual function is
$$g=-\tfrac12v^TQ^{-1}v-yb-\lambda t+\alpha^T\ell-\beta^Tu.$$
Nonnegative inequality multipliers give $g\le f(x)$ for every feasible $x$.
At these witnesses $v=-Qx^*$, yielding $g=7/8,29/10,-49/40$, respectively.
The feasible primal values equal those bounds, so the rational gaps are zero
and all three points are globally optimal. Positive definiteness proves
uniqueness separately; tiny residuals alone would not establish these bounds.

The exact checker contract rejects unknown/mismatched model identities,
wrong dimensions, non-rational data and zero denominators before arithmetic.
It checks $Q=R^TR$, nonsingularity, original constraints, multiplier signs,
stationarity, every complementary product, recomputed objectives and bound
direction. Exact acceptance requires zero KKT residuals and primal/dual
equality. Ordinary floating approximations with small residuals are
**inconclusive** for this exact contract unless an enclosure theorem supplies
the needed guarantee. Hand checking or rational arithmetic suffices; no
particular optimizer is required.

### Claim matrix and dependency ledger

This completes the native report's claim matrix. Each row identifies its own
witness and arithmetic; a successful check in another row cannot replace it.

| Claim | Witness | Checker test | Arithmetic | Result | Limitation |
| --- | --- | --- | --- | --- | --- |
| Original QP feasibility | Each case's canonical data and primal vector | Recompute equality, cap and every bound | Exact rationals | All three are feasible | A case name or transformed problem alone is insufficient |
| Global QP optimum | Primal point, nonnegative multipliers and dual value | Factorization, stationarity, complementarity and primal/dual equality | Exact rationals | P: 7/8; C: 29/10; R: -49/40; gap zero | These three rational models only; no runtime or physical claim |
| Unique QP minimizer | Nonsingular R and Q=R^TR | Show every nonzero quadratic form is positive | Exact algebra | Each displayed optimum is unique | Value equality alone would not prove uniqueness |
| One root in each stated box | Center, nonsingular C, exact K and derivative bound | Self-map plus q<1 on the full box | Exact rational enclosures | q is 1/29, 1/35, 1/29 for P,C,R | Local uniqueness only; P and R concern different roots of the same function |
| Nodal field accuracy | Correct Dirichlet stencil/load, barrier and verified residual eta | Residual, inverse bound and quartic truncation identity | Exact algebra; eta must be an enclosure | Error at most absolute(a_f) h^2/4 + eta/8 | Not yet a reconstructed-field or physical-validation bound |
| Reconstructed uniform accuracy | Piecewise-linear representation plus the previous row | Add the interpolation remainder using the second-derivative bound | Exact inequality | Error at most 7 absolute(a_f) h^2/4 + eta/8 | Smooth quartic, uniform mesh and stated boundary data only |

Dependencies are explicit: the QP model feeds the factorization, primal and
dual checks; those checks feed global optimality, while strict convexity feeds
uniqueness. A model change invalidates its old witness even if the numbers
still look plausible. The local-root result additionally depends on its own
box, interval Jacobian, nonzero preconditioner and Banach hypotheses. The field
result instead depends on the continuous forcing/boundary contract, discrete
assembly, inverse estimate and declared reconstruction. Preserve these inputs
beside each first/comparison/revised report; none of the branches certifies
the others automatically.

### Complete trace and rejected mutations

Use the final valid dual multipliers at each candidate. Feasibility violation
is zero throughout. Stationarity is $Q(z_k-x^*)$; complementarity norm is the
largest absolute complementary product. The dual lower bound stays valid
even when candidate stationarity is nonzero.

| Case | k | Candidate x | Primal feasibility violation | Primal value U | Dual lower L | Gap U-L | Stationarity infinity norm | Complementarity infinity norm |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| P | 0 | 0,2,0,1 | 0 | 11/2 | 7/8 | 37/8 | 4 | 1 |
| P | 1 | 1/2,3/2,1/4,1/2 | 0 | 77/32 | 7/8 | 49/32 | 2 | 1/2 |
| P | 2 | 1,1,1/2,0 | 0 | 7/8 | 7/8 | 0 | 0 | 0 |
| C | 0 | 0,3,0,1 | 0 | 27/2 | 29/10 | 53/5 | 36/5 | 1 |
| C | 1 | 9/10,21/10,1/2,1/2 | 0 | 237/40 | 29/10 | 121/40 | 18/5 | 1/2 |
| C | 2 | 9/5,6/5,1,0 | 0 | 29/10 | 29/10 | 0 | 0 | 0 |
| R | 0 | 0,1,0,1 | 0 | 3/2 | -49/40 | 109/40 | 3/2 | 1 |
| R | 1 | 1/10,9/10,3/4,1/2 | 0 | -47/160 | -49/40 | 149/160 | 3/4 | 1/2 |
| R | 2 | 1/5,4/5,3/2,0 | 0 | -49/40 | -49/40 | 0 | 0 | 0 |

The following complete failure ledger applies to every case unless specified:

| Mutation | Failed predicate and exact reason |
| --- | --- |
| Change the witness's b by 1 while keeping its case identity | Model identity fails before arithmetic on a witness for the wrong problem |
| Add 1/10 to its x1 | Equality residual is 1/10 in P, C and R |
| Set lambda=-1 | Dual nonnegativity fails in every case |
| Set alpha4=0 | Fourth stationarity coordinate becomes 1 in every case |
| Increase its lowerBound by 1/8 | Values become 1, 121/40, -11/10 for P,C,R: each is above the known feasible optimum and its recomputed dual value |
| Delete its fourth primal coordinate | Dimension fails; padding or truncating silently is forbidden |
| Set Q33=-1 while retaining R | Q=R^TR fails, invalidating the convex certificate's hypothesis |
| Reuse lambda=1 in case R | Complementarity is -1/2 and stationarity also fails |

Thus each case has more than four fully specified rejected mutations. Keep
the complete model, witness and trace with its report; a witness proves only
this rational instance, not physical calibration, solver speed or reliability
on other inputs. Without convexity, KKT is generally only stationary evidence:
Part I Exercise 8.14 supplies the counterexample, while 5.4 and 5.7 supply
distinct line-search and curvature safeguards.

## Complete nonlinear certificate companion

For $T(z)=z-CF(z)$ the second component is exactly $d$, with derivative zero.
The first derivative is $1-2c_s s$. Its largest absolute endpoint value gives
the infinity-norm contraction bound throughout the box. A centered enclosure
is $T_1(m)+[-q,q]([s_-,s_+]-m_s)$. All following endpoints are exact rational
results, so the proof does not assume an unverified floating interval library.

| Case | T1(m) | q | K lower | K upper | K second component |
| --- | --- | --- | --- | --- | --- |
| P | 1641/1160 | 1/29 | 1639/1160 | 1643/1160 | 3 |
| C | 97/56 | 1/35 | 2423/1400 | 2427/1400 | 2 |
| R | -1641/1160 | 1/29 | -1643/1160 | -1639/1160 | 3 |

Every $q<1$, $c_s\ne0$ and $K\subset\operatorname{int}X$. Banach on the
complete closed box gives exactly one fixed point; nonsingular $C$ makes it
exactly a zero of $F$. P and R certify different roots of the same function:
this is not a count of all real zeros. A bound $q=1$ supplies no contraction
theorem; singular $C$ loses the fixed-point-to-zero implication; a range leaving
the box fails this self-map certificate. Native interval Exercises 4,5,7,8 give
further complete adverse-case feedback.

## Complete discretization and error companion

Taylor's formula is exact on this quartic:
$A_hu_h=f_h+2a_fh^2\mathbf1$. Since $w(x)=x(1-x)$ has
$A_hw_h=2\mathbf1$ exactly,
$$U_j=a_f[x_j-x_j^4-h^2x_j(1-x_j)],\qquad
U_j-u(x_j)=-a_fh^2x_j(1-x_j).$$
This proves the result on every uniform mesh, rather than fitting an order to
two observations. The zero-endpoint matrix is positive definite because
$v^TA_hv=N^2\sum_{j=0}^{N-1}(v_{j+1}-v_j)^2$. For its discrete maximum
principle, an interior positive maximum of a vector with zero endpoints cannot
satisfy $A_hv\le0$ unless equality propagates the same value to a boundary,
a contradiction. Comparison with the positive barrier $w/2$ therefore gives
$\|A_h^{-1}\|_\infty\le1/8$ uniformly in $N$.

For N=4 the common matrix is
$$A_4=\begin{pmatrix}32&-16&0\\-16&32&-16\\0&-16&32\end{pmatrix}.$$

| Case | a_f | N=4 forcing vector | N=4 exact discrete U | Maximum nodal error, N=4 | N=8 | N=16 |
| --- | --- | --- | --- | --- | --- | --- |
| P | 1 | 3/4,3,27/4 | 15/64,27/64,27/64 | 1/64 | 1/256 | 1/1024 |
| C | 2 | 3/2,6,27/2 | 15/32,27/32,27/32 | 1/32 | 1/128 | 1/512 |
| R | -1 | -3/4,-3,-27/4 | -15/64,-27/64,-27/64 | 1/64 | 1/256 | 1/1024 |

All matrix residuals are exactly zero. Even N has a midpoint node, so maximum
nodal error is exactly $|a_f|h^2/4$ and each refinement ratio is 4. If the
verified inexact-solve residual is at most $\eta$, total nodal error is at most
$|a_f|h^2/4+\eta/8$. For P with $N=8$, $\eta=1/10000$, this is
$1/256+1/80000=627/160000$. Tightening a solve cannot remove the first term.

To claim uniform accuracy of piecewise-linear reconstruction, add an
interpolation estimate. Here $\|u''\|_\infty\le12|a_f|$ gives interpolation
error at most $3|a_f|h^2/2$, hence a valid (not sharp) uniform budget
$7|a_f|h^2/4+\eta/8$. Wrong boundary data invalidate this barrier proof.
Pure Neumann diffusion requires compatibility/gauge on each component;
finite-element coercivity requires connected-domain anchoring or appropriate
control on every component. The corrected native FV/FE chapter states these
qualifications. This smooth fixed example supplies no general nonlinear-PDE,
irregular-mesh or physical-model validation claim.

## Comparison, repair and retained work

For every required group and each P/C/R portfolio, keep dated external `first`,
`comparison` and `revised` text files. Record source version, original attempt,
models/help already seen, failed claims, exact support used and corrected
derivation. Preserve first work before opening further answers. These manually
retained files are not new shared-writing tasks. A mutable note, reading mark
or current export does not create immutable per-question history. R is a later
public reconstruction without a verified delay or unseen-work claim.

Self-review seven descriptive dimensions: precise problem/norm/domain;
released preparation; sound arithmetic/trusted assumptions; theorem
hypotheses; independently recomputed witness/error budget; adverse cases; and
a conclusion limited to the data. No points or grades are assigned. Repair
until signs, factorization, all residuals, bound directions and active sets
agree. An inconclusive check calls for the missing hypothesis, not a claimed
certificate. The complete keys support those repairs; actual learner work and
any execution must be retained separately.

This route completes one fixed larger convex proof-log family, its changed and
return feedback, and the named nonlinear/field companions. It does not finish
unchosen briefs, whole working books, stochastic/large-scale specializations,
every nonlinear/PDE method, or native publication gates.
