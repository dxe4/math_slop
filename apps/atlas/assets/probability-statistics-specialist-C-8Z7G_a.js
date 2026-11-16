var e=`---
id: course-probability-statistics-specialist
title: "Stochastic Integration, Diffusions, and Inference Validation"
level: graduate
estimated_minutes: null
license: CC BY-SA 4.0
---

# Stochastic Integration, Diffusions, and Inference Validation

<!-- euler-course-route -->

## Current course route

This is an Outline seminar in a selected theme. Use its [course page](/courses/atlas-probability-statistics-specialist/) for the preparation courses, then attempt the mathematical investigations below. A general graduate chapter syllabus has not yet been assigned.

Preparation courses: [Statistical Experiments, Processes, and Bayesian Decisions](/courses/atlas-probability-statistics-advanced/) · [Measure and integration](/courses/course-measure-integration/).

The earlier mathematical explanations, proofs, assignments and complete solutions remain below with their original task identities. Their first-attempt, comparison and correction requirements still apply when you choose that earlier work. Existing notes and study marks keep their original scope.

**Selection ID:** \`probability-statistics-specialist-construction\`.

A stochastic integral must exist as a continuous adapted process before it can
define an SDE. A numerical scheme for that SDE need not preserve its invariant
law. A confidence procedure for observed diffusion data and a Monte Carlo error
bar for a sampler also describe different repetitions. This course constructs
the missing objects and then makes those distinctions testable.

The scope joins measure probability, stochastic calculus, advanced inference
and specialist validation. It supplies a Brownian predictable-integral
construction, localization, a proved Itô formula and scalar globally Lipschitz
strong SDE existence/uniqueness, followed by exact diffusion inference and
failure investigations. General jump integration, rough paths, non-Lipschitz
uniqueness theory and every inference specialty are later study. Study time depends on the selected reading, attempts and corrections. No reading mark or numerical agreement qualifies a book
or certifies mastery.

## Published preparation and the required route

Use the completed advanced probability/statistics portfolio if available,
including its original software records. It is preparation, not a new set of
88/56 core questions or a repeated Bayesian capstone. This course does not rely
on an unfinished analysis course. The exact published repairs below have
adjacent complete keys and can be reused with actual earlier worksheets.

| Preparation source | Required explanation and exact questions | Complete feedback |
| --- | --- | --- |
| [Measure and Lebesgue Integration](#/item/course-measure-lebesgue-integration) | Modules 1–6 and Exercises 1–8 if the entry checks expose basic measure/integration gaps | Adjacent worked answers; this is repair before the proof sequence below |
| [Outer measure](#/item/book-proof-safe-real-analysis?chapter=outer-measure-and-measurability) | §§1–10; ANA-CH16-E001–E006, E012, E014, E016, E018 | Adjacent identified solutions; the full Carathéodory construction theorem remains an explicitly imported measure-theory result |
| [Lebesgue integration](#/item/book-proof-safe-real-analysis?chapter=lebesgue-integration) | §§1–10 and product-integral hypotheses; ANA-CH17-E001–E006, E010, E012, E014, E016, E018, E020 | Complete adjacent keys; simple approximation and signed integrability |
| [Convergence theorems](#/item/book-proof-safe-real-analysis?chapter=measure-convergence-theorems) | §§2,4,5,9–11 and their proofs; ANA-CH18-E001–E007, E009, E012, E015, E016, E018–E020 | Complete keys; genuine MCT/Fatou/DCT proofs and failed-limit repairs |
| [Lp completeness](#/item/book-proof-safe-real-analysis?chapter=lp-and-banach-spaces) | §§1–9, especially Riesz–Fischer; ANA-CH19-E007, E010, E012–E015, E018–E020 | Complete keys; projection existence is supplied locally below |
| [Conditional expectation](#/item/book-probability-models-proofs?chapter=conditional-expectation-and-projection) | §§1–6; Exercises 1–7,14–17,19 | Adjacent complete solutions; the native RN existence input is replaced here by a direct construction |
| [Convergence and UI](#/item/book-probability-models-proofs?chapter=modes-of-convergence-and-uniform-integrability) | Definitions, implications, counterexamples and UI/Vitali; Exercises 1–6,9,10,12,13,16,18,20 | Adjacent complete solutions |
| [Martingales and stopping](#/item/book-probability-models-proofs?chapter=martingales-stopping-and-concentration) | Definitions, predictable transforms, bounded stopping and maximal statements; Exercises 1,4,5,7–10,13–15,17 | Complete keys; the L2 maximal proof is supplied below rather than inferred from a stated inequality |

Check before beginning: define an a.e. equivalence class; explain why L2
convergence has an a.s.-convergent subsequence; distinguish a fixed-time version
from indistinguishability; state conditional expectation's event-integral
identity; identify a predictable coefficient; and name the hypothesis that
permits a claimed limit under an expectation.

**Answers and repair.** Null modifications represent one Lp element. A subsequence
with summable squared errors has an a.s. limit by Markov/Borel–Cantelli.
Fixed-time equality has a potentially time-dependent null set; continuous
versions equal at all rational times are indistinguishable. Conditional
expectation Z is information-measurable and integrates like Y on every event
in that information. A left-time measurable coefficient is known before its
increment; adaptedness without suitable joint measurability is insufficient.
MCT, DCT, UI or another specified theorem is needed for the last check. Use
the matching published repair, then redo a comparable example.

Study the next five theory sections in order and attempt local T01–T08 before
their complete models. Finish the two inference chapters and MCMC19, then
SPS-P/C including required T09. Reserve MCMC13/14/34 and their numerical
investigations as intervening work before blank-page SPS-R. The source roster
below gives each exact assignment and key; this is its required order. Keep first,
comparison and corrected work for every required assignment. A previous answer
may be reused with its assumptions and exposure record, not replaced by a
claim that a checkmark proves readiness.

Work on a filtered probability space with every P-null set in F_0 and a
right-continuous filtration, carrying a Brownian motion B relative to it: increments
after s are independent of F_s, centered Gaussian with variance their duration.
Brownian existence is an explicit imported input: use [Brownian Motion](#/item/book-stochastic-processes-paths?chapter=brownian-motion),
Definition/existence paragraph, Covariance structure and Exercises 1–3 with
their adjacent complete keys. That chapter imports Kolmogorov extension and
Kolmogorov–Chentsov; it does not prove their full existence/modification theorems.
No such proof is assumed here or deduced from a plotted path. All local theory is real-valued
on a fixed finite horizon [0,T]; time zero has zero dt measure.

## Conditional expectation and maximal control

**T01 — Required proof.** Construct conditional expectation without silently
assuming a projection exists. Extend from L2 to L1 and prove the contraction
and tower facts used below.

**Complete model.** For a closed linear subspace V of a Hilbert space and y,
let d=inf_(v∈V)||y−v||. Choose v_n with squared errors approaching d².
The parallelogram identity gives

$$\\|v_n-v_m\\|^2=2\\|y-v_n\\|^2+2\\|y-v_m\\|^2-4\\|y-(v_n+v_m)/2\\|^2\\longrightarrow0.$$

Completeness and closedness give v∈V attaining d. Minimizing the quadratic
||y−v−th||² for every h∈V forces ⟨y−v,h⟩=0. Orthogonality gives uniqueness
and Pythagoras. In L2(P), V=L2(G) is closed: an L2-convergent sequence has an
a.s.-convergent subsequence, and a measurable limit version lies in L2(G).
Project Y onto V. Testing orthogonality against 1_A for A∈G gives
E[Z1_A]=E[Y1_A]. Thus Z is conditional expectation.

Positivity follows by testing the negative set of Z when Y≥0. Linearity and
the tower identity follow by the same event integrals and uniqueness. Bounded
G-measurable pull-out follows first for simple multipliers, then by bounded
approximation. Using sign(Z), E|Z|=E[Y sign(Z)]≤E|Y|, so conditioning is an
L1 contraction on L2 variables. For Y∈L1, truncate Y_n to [−n,n]. Their
conditional expectations are Cauchy in L1, hence have a G-measurable L1 limit
Z. Pass the event integrals by L1 convergence. This constructs E[Y|G], with
the same positivity/contraction/tower facts. Uniqueness uses the sets where
two versions differ by more than 1/k. L2 contraction also follows from the
orthogonal projection. Conditional Cauchy–Schwarz/Jensen for the square follows
by conditioning nonnegative (Y−q)², first for rational q and then by continuity.

**T02 — Required proof.** Establish E max_(k≤n)|M_k|²≤4E|M_n|² for an L2
martingale, including the stopping-event step rather than citing the bound.

**Complete model.** Put M*=max|M_k| and partition {M*≥λ} by its first crossing
time j. Conditional Jensen gives |M_j|≤E[|M_n||F_j]. Multiplying by each
first-crossing indicator and summing yields
λP(M*≥λ)≤E[|M_n|1_{M*≥λ}]. Integrating in λ and Tonelli gives
E(M*)²≤2E[|M_n|M*]≤2||M_n||2||M*||2, hence the claimed constant4. Each
finite-grid maximum is in L2, so division is legitimate unless its norm is
zero, when the result is immediate. For continuous martingales apply this
on increasing finite dense grids containing T, then use path continuity and
MCT. No uncountable intersection of probability-one events is needed.

## Predictable integrands and a genuine density argument

The predictable sigma-algebra P on Ω×(0,T] is generated by rectangles
A×(s,t], A∈F_s. An elementary integrand is a finite sum of their indicators
with bounded real coefficients. Refining all time endpoints rewrites it as
H=Σ ξ_k1_(t_k,t_(k+1)], with bounded F_(t_k)-measurable ξ_k. Put
||H||²_H=E∫_0^T H_t²dt and identify product-measure null modifications.

**T03 — Required proof.** Prove elementary density in L2(P,P×dt); ordinary
scalar simple-function density alone does not preserve past measurability.

**Complete model.** Intersections of generating rectangles are generating
rectangles or empty: the event intersection belongs to F_max(s,u).
Complements in Ω×(0,T] are finite unions of such rectangles. Finite unions
therefore form an algebra whose indicators are elementary. Let D be the
sets whose indicators belong to the L2 closure of elementary integrands.
It contains that algebra, is closed under complements, and under disjoint
countable unions: finite partial-union indicators converge in L2 because
P×dt has finite mass T. Thus D is a Dynkin class containing a generating
intersection-stable family, hence contains P. The elementary π–λ fact used
here is proved by fixing one generating set and closing the class of sets
whose intersections stay in D, then repeating with an arbitrary member of D;
this makes D intersection-stable and therefore a sigma-algebra. Every
predictable indicator is approximable. Truncation and quantization approximate
any predictable L2 function by finite simple functions; combining the finite
indicator approximations proves the assertion. This is density in the correct
information sigma-algebra, not approximation by arbitrary product sets.

Continuous adapted processes are predictable: their left-step samples converge
pointwise for t>0. Every stochastic integrand used here must be predictable,
or have an explicitly proved predictable representative; joint measurability
and adaptedness alone are not substituted for that requirement. The construction integrates all
predictable L2 classes; a right-endpoint anticipating rule belongs to a
different problem.

## Constructing the continuous stochastic integral

For elementary H define I_t(H)=Σ ξ_k(B_(t∧t_(k+1))−B_(t∧t_k)). This is
continuous and adapted. Conditioning on the past proves the martingale property.
Expanding the square makes cross terms vanish and gives the terminal isometry

$$E|I_T(H)|^2=E\\int_0^T H_t^2dt.$$

**T04 — Required proof.** Extend this into a continuous adapted process,
independent of the elementary approximation, and prove its martingale and
isometry properties. A terminal L2 limit alone is insufficient.

**Complete model.** For H_n→H in the predictable L2 space, apply T02 to the
continuous elementary martingale differences:

$$E\\sup_{t\\le T}|I_t(H_n)-I_t(H_m)|^2\\le4E\\int_0^T|H_n-H_m|^2dt.$$

Choose a fast subsequence for which the sum of expected sup-norm differences
is finite (e.g. squared errors at most 2^(−4j)). Tonelli makes the sup-norm
differences summable a.s., so the paths converge uniformly a.s. to continuous
paths. At each fixed time the limit is adapted; completeness allows one common
exceptional-set modification to zero. Fatou and the displayed bound show the
whole original sequence converges in S2, the norm (E sup|X|²)^(1/2).
Different approximations have zero S2 difference by interleaving, giving
indistinguishability. Passing E[I_t1_A]=E[I_s1_A], A∈F_s, in L2/L1 proves
the limit is a martingale. The terminal isometry passes by L2 convergence;
the bound E sup|I(H)|²≤4||H||²_H follows too. This both proves S2 completeness
for this construction and identifies a continuous version, rather than merely
one unrelated version at each t.

Multiplication and stopping are consistent. For bounded F_s-measurable Y,
I_t(Y1_(s,u]H)=Y(I_(t∧u)(H)−I_(t∧s)(H)); prove it for elementary H,
then pass by isometry. For a bounded stopping time τ, approximate τ from above
by finite-grid stopping times. Elementary stopped identities, continuous
integral paths, and dominated product-norm convergence give
I_(t∧τ)(H)=I_t(1_(0,τ]H). The latter indicator is predictable: it is
left-continuous and adapted. These identities will justify local patching.

Check a concrete T04 approximation before continuing. With two independent
N(0,1/2) increments U,V, the left rule for H=B is L=UV. The right rule is
R=U²+UV+V²; R−L is the quadratic sum. Gaussian moments give the following
complete finite certificate, which is not a simulated output.

| Integral check | Horizon T | Equal increments n | Expected left rule | Left-rule variance | Expected right rule | Squared L2 error of left rule versus integral |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Brownian H=B | 1 | 2 | 0 | 1/4 | 1 | 1/4 |

Indeed the exact integral is ((U+V)²−1)/2 by the partition/QV identity proved
in T06 below; the left error is (1−U²−V²)/2. Gaussian second/fourth moments
give its squared L2 norm1/4. This later identity checks the construction; it
is not used to prove T04. An anticipating coefficient H_t=B_T would instead
give the naive product B_T² with mean T and second moment3T², while its
energy expectation is T². It violates the predictability assumption and
therefore is not a counterexample to the stated Itô isometry.

## Localization, quadratic variation and Itô formula

**T05 — Required proof and boundary.** Construct the integral when H is
predictable and ∫_0^T H²dt<∞ a.s., and explain exactly which martingale
claim survives without E∫H²<∞.

**Complete model.** Let τ_n=inf{t:∫_0^t H²ds≥n}∧T. The cumulative energy is
continuous adapted, so these are stopping times; the stopped integrand has
expected energy at most n. Construct its S2 integral. T04's stopping identity
makes the versions agree up to τ_n. Since τ_n↑T and each sample's finite
energy is eventually below n, patch the continuous processes. On every bounded
horizon this defines a continuous local martingale, uniquely up to
indistinguishability. It need not be a true mean-zero martingale or possess a
finite terminal second moment; expectations require extra integrability or UI.

For example take an F_0-measurable finite random variable Z independent of B
with P(Z=2^k)=2^(−k), k≥1. H_t=Z has finite pathwise energy T Z² but
E Z=∞ and E Z²=∞. Its local integral ZB_t is not even integrable for t>0,
since E|ZB_t|=E Z E|B_t|=∞. Localization cannot turn that variable into a
true mean-zero martingale. This is an integrability failure, not a numerical
roundoff issue.

**T06 — Required proof.** If X=X_0+A+I(H), with A_t=∫_0^t b_sds,
∫(|b|+H²)<∞ a.s., and f∈C²(R), prove

$$f(X_t)=f(X_0)+\\int_0^tf'(X_s)b_sds+\\int_0^tf'(X_s)H_s\\,dB_s+\\frac12\\int_0^tf''(X_s)H_s^2ds.$$

Here b is progressively measurable, H predictable and X continuous adapted;
the stochastic term is understood locally. The next argument supplies the
quadratic limit and remainder, rather than manipulating symbols (dB)²=dt.

**Complete model: weighted quadratic variation.** First H∈H² and G bounded,
continuous adapted. For a partition π, write M=I(H). Approximate H in H²
by bounded elementary H^j and put M^j=I(H^j). Cauchy–Schwarz on the increment
vectors and isometry give, uniformly over π,

$$E\\left|\\sum_iG_{t_i}\\{(\\Delta M_i)^2-(\\Delta M_i^j)^2\\}\\right|
\\le\\|G\\|_\\infty\\|H-H^j\\|_H(\\|H\\|_H+\\|H^j\\|_H).$$

The analogous difference of integrals ∫G(H²−(H^j)²) has the same bound.
Choose partitions containing the breakpoints of the first n approximants and
dyadics of level n; mesh tends to zero. For fixed j and n≥j, each interval
has elementary coefficient ξ known at its left endpoint. The weighted terms
G_left ξ²((ΔB)²−Δt) are orthogonal martingale differences; their summed
variance is at most 2||G||∞²||H^j||∞⁴ T mesh. It tends to zero. Continuity
of G makes ΣG_left ξ²Δt converge to ∫G(H^j)² by pathwise continuity and
domination. First let n→∞ for fixed j, then j→∞, using the uniform L1
bounds. Thus ΣG_left(ΔM)²→∫GH² in probability. In particular its unweighted
quadratic sums are tight.

For continuous finite-variation A, Σ(ΔA)²≤max|ΔA| TV(A)→0 pathwise.
Cross sums with M vanish in probability by Cauchy–Schwarz and tightness.
Consequently the same weighted quadratic limit for X is ∫GH².

**Complete model: the formula.** Stop when energy, drift variation, |X_0| or
sup|X| reaches a fixed bound, and use a C² cutoff agreeing with f on that
range. Taylor's theorem on each partition interval has remainder bounded by
(1/2)ω(max|ΔX|)Σ(ΔX)², where ω is the modulus of continuity of f'' on the
compact range. Continuity makes the modulus tend to zero and quadratic-sum
tightness makes the remainder vanish in probability. Weighted quadratic
variation gives the second-order term. The drift linear sums converge by
continuity against finite variation. The stochastic linear sums equal
I(f'(X_left)H) by T04's interval multiplication identity; product-norm DCT
and isometry give convergence to I(f'(X)H). The telescoping left side
therefore converges to f(X_t)−f(X_0). Equality in probability of these limits
proves the formula for each rational t; continuity yields all t on one common
event. Remove the stopping levels by T05 consistency. No interchange of an
uncountable collection of null events has been assumed.

For f(x)=x² the formula gives X_t²=X_0²+2∫Xb ds+2∫XH dB+∫H²ds.
For deterministic finite-variation c(t), integration by parts follows from
partition telescoping; its quadratic cross term is zero. These identities
will solve the linear diffusion below. They also explain why right-endpoint
integration of B differs from the Itô integral by quadratic variation.

## Constructing strong SDE solutions

**T07 — Required construction.** Let b(t,x),σ(t,x) be Borel, globally
Lipschitz in x with common constant L, and |b(t,0)|+|σ(t,0)|≤C on bounded
horizons. Given an F_0-measurable X_0∈L², construct a continuous adapted
solution of X=X_0+∫b(s,X_s)ds+∫σ(s,X_s)dB_s and prove pathwise uniqueness.

**Complete model.** Continuous adapted X is predictable, so the integrands
are predictable for these deterministic Borel coefficients (time Borel
functions are predictable). Linear growth and S2 control make the drift
integrable and diffusion square integrable. The space S2 of continuous adapted
processes is complete: use the fast-subsequence/uniform-limit argument of T04.
For the Picard map Γ and X,Y, Cauchy–Schwarz for drift and the maximal
integral bound give

$$\\|\\Gamma X-\\Gamma Y\\|_{S^2}^2\\le2L^2T(T+4)\\|X-Y\\|_{S^2}^2.$$

On an interval δ≤1 with 10L²δ<1 this is a contraction; when L=0 any δ≤1
works. Starting from constant X_0, Picard iterates are Cauchy, and the same
estimates pass the limit through both integrals. This yields a strong solution:
it is built on the given Brownian space and initial variable, with no extra
randomness. The map also maps S2 into itself by linear growth. Repeat over
finitely many intervals of this length, using the preceding L2 endpoint as
the next initial variable. This constructs every finite horizon without
explosion. The same contraction forces two S2 solutions with the same B and
X_0 to agree on each interval, hence be indistinguishable.

Any continuous adapted solution under these coefficients has the needed S2
bound: stop on |X|, use linear growth, T02 and Gronwall, then Fatou to remove
the stops. Gronwall follows by iterating u(t)≤a+c∫u to obtain
u(t)≤aΣ_(k≥0)(ct)^k/k!=ae^(ct). This extends uniqueness beyond a secretly
assumed bounded solution class. This is pathwise uniqueness, not equality
of unrelated simulations or a discretisation theorem.

If coefficients are only locally Lipschitz, truncated globally Lipschitz
equations can be patched up to exit times; nonexplosion needs a separate
growth/Lyapunov bound. The deterministic SDE dX=X²dt from X_0=1 explodes
at t=1, and dX=2sqrt(|X|)dt from zero has solutions that wait then follow
(t−c)², so continuity alone gives neither global existence nor uniqueness.
We have proved the stated globally Lipschitz theorem, not every SDE.

**T08 — Required worked solution.** For dX=(m−X)dt+sqrt(2)dB, derive the
strong solution, transition law and invariant law from the construction.

**Complete model.** Coefficients satisfy T07. Multiply by e^t using deterministic
integration by parts, integrate, then divide:

$$X_t=m+(X_0-m)e^{-t}+\\sqrt2\\int_0^te^{-(t-s)}dB_s.$$

The deterministic-integrand integral is centered Gaussian: elementary sums
are Gaussian with variances converging by isometry, and L2 convergence gives
the limiting characteristic function. Its variance is
2∫_0^te^(−2(t−s))ds=1−e^(−2t). Future increments are independent of F_0,
so X_t given X_0=x is N(m+(x−m)e^(−t),1−e^(−2t)). If X_0∼N(m,1)
independent of future B, the same computation preserves N(m,1); a fixed
initial state has a transient. Invariance, existence, convergence from fixed
start and an accurate finite simulation are different assertions.

## Advanced inference and validation source work

Complete the following actual assignments with their full native keys. Reuse
previously completed exact work with its source version and correction record.

| Source | Required reading and questions | Full feedback and execution |
| --- | --- | --- |
| [Consistency and delta methods](#/item/book-principles-statistical-inference?chapter=consistency-asymptotic-normality-and-delta-methods) | Entire chapter, Exercises 1–20 | Complete adjacent solutions; retain exact hypotheses, rates, nonuniform and boundary failures |
| [Confidence sets and inversion](#/item/book-principles-statistical-inference?chapter=confidence-sets-and-test-inversion) | Entire chapter, Exercises 1–20 | Complete adjacent solutions; coverage, strict rejection convention and confidence versus prediction |
| [MCMC19 Langevin](/mcmc_book/site/chapters/19-langevin.html) | §§2–8 and10, Exercises 1–7 | Adjacent expandable solutions; fixed SPD/Cholesky preparation before §7; complete its bounded funnel-geometry activity, then run the existing \`examples/ch19.py\`, retain its actual output, seeds/settings and exact/Monte Carlo distinction |
| [MCMC13 Monte Carlo error](/mcmc_book/site/chapters/13-mc-error.html) | §§13.1–13.7,13.8.3; Exercises 1,3,6,8 | §13.11 complete keys; run its existing \`examples/ch13.py\` for the selected numerical investigation |
| [MCMC14 Diagnostics](/mcmc_book/site/chapters/14-diagnostics.html) | §§14.1–14.7,14.9–14.10; Exercises 4–7 | §14.11 complete keys and actual \`examples/ch14.py\` output; rank/folded Rhat and bulk/tail ESS definitions precede their use; diagnostic evidence is not an invariance proof |
| [MCMC34 Scalable methods](/mcmc_book/site/chapters/34-scalable.html) | §§34.1–34.5,34.10.1; Exercises 2–3 | Adjacent complete keys, actual \`examples/ch34.py\` output and the bounded §34.10.1 interactive lab below; finite perturbation proof and the changed target; its half-score convention differs from Chapter19 |

For MCMC readiness, try each selected definition and worked calculation first.
If unfamiliar, complete these exact repairs with the native chapters' complete
exercise keys before the work using them: [Chapter2](/mcmc_book/site/chapters/02-probability.html)
§§3–8, Exercises2,3,5; [Chapter4](/mcmc_book/site/chapters/04-numerics.html)
§§4.1–4.3, first endpoint/log1p paragraph of4.5,4.8–4.10, Exercises4–6; [Chapter5](/mcmc_book/site/chapters/05-monte-carlo.html)
§§05.2–05.4, Exercises1–3,6; [Chapter8](/mcmc_book/site/chapters/08-convergence.html)
§§8.1–8.8 and final interpretation paragraphs of8.10, Exercises1,3–5;
[Chapter9](/mcmc_book/site/chapters/09-metropolis-hastings.html) §§9.1–9.3,9.6–9.7,
Exercises1–3,5–6; and fixed SPD/Cholesky [Chapter16](/mcmc_book/site/chapters/16-geometry.html)
§§16.2–16.3, Exercise2. These slices omit their executable sections and assign
no additional software runs. They repair Gaussian conditioning, expectation,
invariance/convergence, actual MH densities and matrix geometry. Chapter19's example uses
Python's standard library and bounded seeded runs; follow its native command
instructions from that module. Preserve public artifacts and keep personal
outputs in your worksheet directory. Optional wider HMC/particle investigations
retain their own preparation and execution. Manual comparison leaves an
assigned program pending; extra code execution is not a proof of ergodicity.

For Chapter19 §7, vary the funnel v-scale, inspect its independent-draw
coordinate cloud and predict which Gaussian axis constrains an unpreconditioned
step before Python. Those independent funnel draws are geometry evidence,
not ULA/MALA efficiency measurements. For Chapter34 §34.10.1's lab, vary
AR1 correlation and Samples/iterations, repeat seeds, and compare empirical
and theoretical ACF, finite-run mean ESS, long-run ESS and theoretical SE.
Explain why a smaller MCSE does not remove its 26% variance inflation. Save
settings, output and interpretations with the later-return intervening work.

Keep this explicit qualification with the asymptotics source's discussion of
n^(-1/2)-scale bias: a limit sqrt(n)(E T_n−tau)→b alone does not force a shifted
normal law. Also require the centered CLT sqrt(n)(T_n−E T_n)⇒N(0,v), then
Slutsky gives N(b,v). For a counterexample take independent Z∼N(0,1) and
B_n∼Bernoulli(1/n), and T_n=Z/sqrt(n)+sqrt(n)B_n. The scaled bias is1,
but sqrt(n)T_n=Z+nB_n⇒N(0,1), since P(B_n=1)→0. The native Exercise17
already assumes N(b,v), so its key remains applicable. Keep this correction
with the reading rather than infer a distributional limit from expectations.
For its Exercise3, log(T_n) needs T_n>0; if positivity holds only with
probability tending1, declare an arbitrary extension on the nonpositive event
and use its vanishing probability. Do not silently log an undefined value.

The conditional-ratio example assumes two independent binary Markov chains;
thresholded OU samples do not acquire that law. The finite-state Dobrushin
TV bound assumes a uniform row error and contraction below1; it cannot simply
be transferred to unbounded-space OU/Euler kernels, whose global coefficient
can be1. Statistical observation uncertainty, posterior uncertainty, chain
initialization, discretisation bias, finite-run MCSE and model/transport error
must have separate ledgers.

## Fixed data and the primary investigation

**SPS-OU-v1** is original literal synthetic mathematics, version1. The model is
the T08 diffusion with θ=1, noise sqrt2 and unknown long-run mean m. The initial
value is conditioned on, not assigned a parameter-dependent stationary density.
Observed values are in one declared state unit, time in model hours. All data
are complete; there is no exclusion, censoring, stopping or measurement error.

| Case | Data design | Decay a=exp(-Delta) | Initial/current pairs x to y | Next prediction starts at x |
| --- | --- | ---: | --- | ---: |
| SPS-P | Four independent reset paths, Delta=log2 | 1/2 | 0:0,0:1,0:1,0:2 | 0 |
| SPS-C | One sequential path 0,0,1,1,2, Delta=log2 | 1/2 | 0:0,0:1,1:1,1:2 | 2 |
| SPS-R | Same sequential values, actual Delta=log4 | 1/4 | 0:0,0:1,1:1,1:2 | 2 |

The declared prior is m∼N(0,1), independent of the future driving Brownian
motion. It is proper and has finite second moment. Never treat identical
recorded numbers with changed design/cadence as the same likelihood.

| Validation case | Target calibration mean m | Euler step h | Number N for stationary moment certificate |
| --- | ---: | ---: | ---: |
| SPS-P | 0 | 1/2 | 4 |
| SPS-C | 0 | 1 | 4 |
| SPS-R | 0 | 5/2 | 4 |

This calibration sets m=0 to test known target N(0,1); it is not another
observation estimating the unknown m in the preceding data. Chapter19's
convention is dX=−Xdt+sqrt2dB, Euler X_(k+1)=(1−h)X_k+sqrt(2h)Z_k.
The last row is a deliberate unstable input, not an invitation to claim a
negative stationary variance.

**SPS-P — Required primary portfolio.** Attempt before the model below.

1. Reconstruct T01–T08's hypotheses and OU solution; prove the Gaussian
   transition rather than infer it from a finite sample.
2. Write the conditional reset-data likelihood for m, find its exact MLE and
   sampling variance, and give a known-variance 95% confidence procedure.
3. Derive the proper posterior and one future reset observation's predictive
   mean/variance. Distinguish these from the confidence procedure.
4. Derive Euler stability and invariant variance; compare exact OU at the
   same elapsed step. Separate initialization, stationary bias and finite-run
   variation. Calculate stationary mean and second-moment estimator variances
   and squared-error decomposition at the supplied finite N.
5. Prove the actual forward/reverse MALA flux identity, check the h=1/2,
   x=0,y=1 move, and diagnose use of the wrong proposal-noise covariance.
6. Run the bounded public reference below and the assigned Chapter19 program;
   retain commands/output. Supply hand or independent checks of the numbers.
   The deterministic reference's shock card is not a random sample.
7. Write a validation memo linking every claim to a theorem, exact reference
   or actual numerical observation. Explain what a clean dashboard cannot prove.

## Changed design and later public return

**SPS-C — Changed portfolio.** Keep the same recorded y values but use the
sequential design in its row. Derive the joint conditional likelihood through
innovations, its exact estimator, posterior and next-state prediction from
current state2. Show exactly why resetting all x values to0 is wrong.
For the changed Euler h=1 calibration, derive its independent draws, variance
and second-moment bias/MSE. Explain why low autocorrelation can accompany an
incorrect invariant law. Record separate first/comparison/revised responses.

**SPS-R — Later public return.** After P/C, complete the reserved MCMC13/14/34
assignments, programs and bounded lab, then start on a blank page, declaring earlier exposure. Use actual
Delta=log4, keeping the recorded sequential values. Derive the new likelihood,
estimator, posterior and next prediction. Reject the unstable Euler stationary
claim and compute the wrong-density MALA flux defect. Then complete these
two explicitly separate finite validation transfers from the native keys:

| Companion | Declared input |
| --- | --- |
| Conditional ratio | Independent stationary binary Markov chains B,Z, each marginal Bernoulli1/2, autocorrelations beta^k,zeta^k; beta=0,zeta=-1/2,N=12000; target P(Z=1 given B=1) |
| Kernel perturbation | P=[[1-a,a],[b,1-b]], Q=[[1-a-d,a+d],[b-d,1-b+d]], a=1/50,b=3/50,d=1/200; stationary TV tolerance1/100 |

For the ratio derive its linearized influence, long-run variance and MCSE;
explain a finite run with no eligible state and why iid eligible-row counting
loses dependence. For the finite kernels derive both invariant laws, row-TV
error, contraction, same-start finite discrepancy and maximum admissible d.
Explain why neither formula automatically applies to thresholded OU output.
Repair the memo: “Every row is independent; Euler's good mixing proves the
right target; more warmup removes all bias; local martingale means zero
expectation; a drift OLS fit is always the OU parameter MLE; more steps at
fixed elapsed time give the same information as longer observation.”

## Complete primary model and inference certificate

For a known decay a, put c=1−a and v=1−a². Each exact transition is
y_i=a x_i+c m+epsilon_i, with independent N(0,v) innovations under the
specified design. In a sequential path the innovation transformation is
triangular with Jacobian1; raw state rows are not independent. In reset data,
different paths supply independent innovations by design.

Writing r_i=y_i−a x_i, I=Σc²/v and S=Σc r_i/v gives
log L(m)=constant−(I/2)(m−S/I)². Hence mhat=S/I, exact sampling variance
V=1/I, and (mhat−m)/sqrt(V) is standard normal. With z the standard-normal
0.975 quantile, mhat±z sqrt(V) has exactly95% coverage conditional on the
fixed observation schedule and initial state under this known-parameter
Gaussian model. For the sequential cases it does not condition simultaneously
on every realized lagged x_i: those states are random and shared across rows.
It is not a probability that the
fixed m lies in this realized interval. A proper N(0,1) prior instead gives
posterior N(S/(1+I),1/(1+I)); squared loss selects its mean. A future transition
from known x has predictive mean a x+c E[m|data] and variance v+c²Var(m|data).

| Case | Innovation values r_i | I | S | mhat | Sampling variance V | Posterior mean | Posterior variance | Predictive mean | Predictive variance |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| SPS-P | 0,1,1,2 | 4/3 | 8/3 | 2 | 3/4 | 8/7 | 3/7 | 4/7 | 6/7 |
| SPS-C | 0,1,1/2,3/2 | 4/3 | 2 | 3/2 | 3/4 | 6/7 | 3/7 | 10/7 | 6/7 |
| SPS-R | 0,1,3/4,7/4 | 12/5 | 14/5 | 7/6 | 5/12 | 14/17 | 5/17 | 19/17 | 75/68 |

For P, I=4(1/2)²/(3/4)=4/3 and S=(2/3)(4)=8/3. This supplies the full
first row, including the fresh-reset prediction x=0. No asymptotic CLT is
needed for these normal facts. If θ were unknown in dX=−θ(X−m)dt+σdB,
both a=e^(−θDelta) and v=σ²(1−e^(−2θDelta))/(2θ) would depend on θ.
OLS for an unrestricted AR coefficient is therefore not automatically that
constrained θ-MLE. Increasing grid density over fixed elapsed horizon also
does not justify iid drift-information scaling; name the actual experiment.

**T09 — Required continuous-path inference proof.** Explain what changes if
the entire OU path on [0,T] is observed, and why finer sampling at fixed T
is not the same experiment as increasing T.

**Complete model.** The parameter-free path transformation
Y_t=X_t−X_0+∫_0^tX_sds equals mt+sqrt2 B_t. It is invertible on continuous
paths by the deterministic Volterra equation X_t=X_0+Y_t−∫_0^tX_sds;
its explicit inverse is X_t=e^(−t)X_0+Y_t−∫_0^t e^(−(t−s))Y_sds.
Substitution/Fubini checks this continuous, measurable inverse; subtracting
two solutions and applying Gronwall proves uniqueness.
For finite partitions of Y, multiply the independent Gaussian-increment
density ratios relative to m=0. The result is exp(mY_T/2−m²T/4), independent
of the partition and with expectation1 under the zero-drift Gaussian law.
It defines a probability change of measure. Completing the square verifies
the shifted finite-dimensional increment laws; cylinder events at rational
times generate the continuous-path law, so the same likelihood applies to
the complete path. This is a proved constant-drift case, not an assumed
general Girsanov theorem.

Thus mhat_path=Y_T/T is exactly N(m,2/T). With prior N(0,1), posterior mean
is Y_T/(T+2), variance2/(T+2). For r equally spaced exact transitions over
T=rDelta, the discrete likelihood has I_r=r(1−e^(−Delta))/(1+e^(−Delta)).
As Delta=T/r decreases, I_r→T/2, matching the path likelihood. The estimator's
variance tends to2/T rather than zero. This directly disproves an iid
information-growth argument for fixed-horizon infill. The discrete fixtures
do not reveal ∫X ds, so do not replace their exact discrete likelihood with
the continuous-path formula using an unreported interpolation.

For validation at m=0, exact OU coefficient b=e^(−h) and innovation variance
1−b² preserve target variance1 for every h>0. Euler coefficient A=1−h
and innovation variance2h give stationary variance v_h=2h/(1−A²)=1/(1−h/2)
only when |A|<1, namely0<h<2. At h=1/2 this is4/3, not1. From zero,
the first two second moments are1 and5/4; an early target match is a transient,
not stationarity. Longer warmup converges to the wrong limiting variance.

For N stationary Euler states, Gaussian pair moments give
Cov(X_0,X_l)=v_h A^l and Cov(X_0²,X_l²)=2v_h² A^(2l). Count the N diagonal
and 2(N−l) lagged pairs to obtain

$$V_{\\rm mean}=\\frac{v_h}{N^2}\\left[N+2\\sum_{l=1}^{N-1}(N-l)A^l\\right],$$
$$V_{\\rm square}=\\frac{2v_h^2}{N^2}\\left[N+2\\sum_{l=1}^{N-1}(N-l)A^{2l}\\right].$$

The squared-error risk for estimating target E X²=1 is (v_h−1)²+V_square.
The standard error sqrt(V_square) concerns Monte Carlo variation about the
Euler expectation, not model uncertainty or its persistent target bias.

| Case | Euler A | Invariant variance | N | Mean-estimator variance | Square-estimator variance | Square bias | Square MSE |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| SPS-P | 1/2 | 4/3 | 4 | 11/16 | 185/144 | 1/3 | 67/48 |
| SPS-C | 0 | 2 | 4 | 1/2 | 2 | 1 | 3 |
| SPS-R | -3/2 | none | 4 | not stationary | not stationary | undefined | undefined |

MALA uses q(y|x)=N((1−h)x,2h). Accepted off-diagonal flux is
min{π(x)q(y|x),π(y)q(x|y)}, symmetric in x,y; rejection adds the diagonal
mass. Thus the complete kernel preserves π in exact arithmetic. This proves
invariance, not fast convergence. For target N(0,1), cancellation gives
log r=h(x²−y²)/4, so the specified move has log r=−1/8 and acceptance e^(−1/8).
Correct noise and actual forward/reverse densities are both required.

## Complete changed and return models

C's sequential innovations sum to3 rather than the reset sum4; the displayed
I,S yield mhat3/2 and posterior N(6/7,3/7). The next prediction starts from
current state2, giving mean1+3/7=10/7, not the fresh-reset4/7. Reusing P's
reset likelihood changes both sampling design and prediction target.
At changed validation h=1, Euler produces iid N(0,2) after one step: low
autocorrelation does not repair its variance. Its square MSE is1+8/N,
equal3 atN=4. Exact OU still targets N(0,1) but is correlated at finite h.

For R, a=1/4,c=3/4,v=15/16 give innovation sum7/2, I=12/5 and S=14/5.
The table follows, and next predictive mean1/2+(3/4)(14/17)=19/17.
The change is actual observation time, not an alternative labeling of the
old clock. At Euler h=5/2 the multiplier is−3/2; its noise variance5 is
amplified, so no stationary finite-variance law exists. The formal negative
solution of the variance equation is invalid. Do not report stationary MCSE
or a target bias based on that nonexistent law.

For the deliberate wrong-noise proposal N((1−h)x,h), the correct MH log ratio
at h=1/2,x=0,y=1 is+1/4, while evaluating the density as covariance2h gives
−1/8. The wrong accepted forward/reverse log-flux difference is−3/8, not0.
Using the actual h covariance would recover a valid MH kernel, although it
would no longer be the stated Euler discretisation. A gradient convention,
proposal law and acceptance accounting are separate mathematical objects.

For the binary companion, B,Z have stationary uniform marginals and transition
flip probabilities (1−beta)/2 and (1−zeta)/2. Linearizing the ratio gives
h(B,Z)=B(2Z−1), since E B=1/2. With S(r)=(1+r)/(1−r), its asymptotic
covariance at lag k≥1 is [zeta^k+(beta zeta)^k]/4 by independence of the
two entire chains, and its lag-zero variance is1/2. Thus its asymptotic
variance is [S(zeta)+S(beta zeta)]/4. At beta0,zeta−1/2 this is1/3;
MCSE at12000 is1/sqrt36000. Iid eligible-count arithmetic gives the different
1/sqrt24000. Here P(no eligible row)=2^(−N)>0 at every finite N; an empty
denominator is undefined, not a probability estimate0. These are exact model
and asymptotic-variance calculations for the binary model, not OU threshold
results or a finite-sample coverage theorem.

For the finite P,Q companion, invariant state1 probabilities are1/4 and5/16,
row-TV error1/200 and contraction23/25 for both. The same-start discrepancy
after n steps is (1/16)[1−(23/25)^n]; limiting TV error is1/16. The sufficient
perturbation bound epsilon/(1−rho) is attained here. Tolerance1/100 requires
d≤1/1250; more iterations with original d=1/200 do not meet it. A scalar
OU kernel on all R has global Dobrushin coefficient1, so this finite-state
bound does not automatically certify an OU approximation.

The repaired memo names the conditional Gaussian innovation likelihood,
correct target/cadence, exact versus Euler law and mean versus nonlinear
estimand. It withholds unproved coverage, global-TV contraction, causal
transport and integrability claims. Finite validation detects specified bugs;
it cannot validate every drift or prove general SDE convergence.

## A bounded public calculation reference

Run the following self-contained JavaScript in a separate worksheet script
with Node. It has three fixed cases, no external packages, no learner-data
input and bounded loops. It computes exact-formula floating-point references
and a deterministic four-shock path card; those shocks are not claimed random
normal draws. Its printed output is not an authored prior execution record.
The root oracle executes this actual listing and compares independent
calculations. Native chapter13/19 stochastic software runs are still required.

\`\`\`javascript
// EULER-SPECIALIST-REFERENCE-V1
(() => {
  'use strict';
  const cases = Object.freeze([
    { id: 'SPS-P', a: 1/2, pairs: [[0,0],[0,1],[0,1],[0,2]], next: 0, h: 1/2 },
    { id: 'SPS-C', a: 1/2, pairs: [[0,0],[0,1],[1,1],[1,2]], next: 2, h: 1 },
    { id: 'SPS-R', a: 1/4, pairs: [[0,0],[0,1],[1,1],[1,2]], next: 2, h: 5/2 }
  ]);
  const shocks = Object.freeze([0,1,-1,1/2]);
  function solve(card) {
    const c = 1-card.a, v = 1-card.a*card.a;
    const residuals = card.pairs.map(([x,y]) => y-card.a*x);
    const information = card.pairs.length*c*c/v;
    const score = residuals.reduce((s,r) => s+c*r/v,0);
    const postVariance = 1/(1+information);
    const postMean = score*postVariance;
    const A = 1-card.h, stable = Math.abs(A)<1;
    const invariant = stable ? 2*card.h/(1-A*A) : null;
    let meanVariance = null, squareVariance = null;
    if (stable) {
      let meanSum = 4, squareSum = 4;
      for (let lag=1;lag<4;lag++) {
        meanSum += 2*(4-lag)*A**lag;
        squareSum += 2*(4-lag)*A**(2*lag);
      }
      meanVariance = invariant*meanSum/16;
      squareVariance = 2*invariant*invariant*squareSum/16;
    }
    let euler = 0, exact = 0;
    const exactA = Math.exp(-card.h);
    const path = shocks.map(z => {
      euler = A*euler+Math.sqrt(2*card.h)*z;
      exact = exactA*exact+Math.sqrt(-Math.expm1(-2*card.h))*z;
      return { euler, exact };
    });
    return { id:card.id, residuals, information, score,
      estimate:score/information, samplingVariance:1/information,
      postMean, postVariance, predictiveMean:card.a*card.next+c*postMean,
      predictiveVariance:v+c*c*postVariance, A, stable, invariant,
      meanVariance, squareVariance,
      squareBias:stable?invariant-1:null,
      squareMSE:stable?(invariant-1)**2+squareVariance:null, path };
  }
  const result = cases.map(solve);
  const h=1/2,x=0,y=1,A=1-h;
  const logTarget = q => -q*q/2;
  const logQ = (to,from,variance) => -((to-A*from)**2)/(2*variance)-Math.log(variance)/2;
  const ratio = variance => logTarget(y)-logTarget(x)+logQ(x,y,variance)-logQ(y,x,variance);
  const correctRatio = ratio(2*h), actualWrongNoiseRatio = ratio(h);
  const wrongForward = logTarget(x)+logQ(y,x,h)+Math.min(0,correctRatio);
  const wrongReverse = logTarget(y)+logQ(x,y,h)+Math.min(0,-correctRatio);
  globalThis.eulerSpecialistReference = Object.freeze({ result, shocks,
    correctRatio, actualWrongNoiseRatio, wrongLogFlux:wrongForward-wrongReverse });
  console.log(JSON.stringify(globalThis.eulerSpecialistReference));
})();
\`\`\`

## Feedback, records and theorem boundaries

Use unscored criteria for each T-proof and portfolio: every existence step and
hypothesis is named; approximation stays in the predictable space; process
versions and null sets are handled; local integrability is not mean-zero
integrability; likelihood matches the actual data design; finite and limiting
variance formulas use the correct estimand/initialization; actual generated
proposal densities appear in MH; and code outputs are distinguished from
proofs. Repair the first broken link before recomputing downstream numbers.

Keep dated \`SPS-P-first-YYYY-MM-DD.txt\`, \`SPS-P-comparison-YYYY-MM-DD.txt\` and
\`SPS-P-revised-YYYY-MM-DD.txt\`, and corresponding C/R files, plus all source
question/proof worksheets. Preserve earlier versions and record public models,
hints and other help already seen. Save actual code, commands, outputs,
runtime/seeds, frozen settings and diagnostic failures beside the writing.
Test backup by reopening files and rerunning the final assigned analysis.
A mutable reading note does not retain this portfolio. These tasks add no
shared writing contract or grade. Public return means a separate response
after intervening work; timestamps do not verify delay or unseen status.

The stated global-Lipschitz Brownian construction is a genuine selected
stochastic-integral/SDE course, not a claim to all semimartingales or every
inference method. No total timing has been authored. Native source estimates
refer to their own scopes and overlap preparation; do not sum them as this
course's workload. Proof, repair, execution and later return effort remain
unknown. Native rubric/edition/assessment boundaries are preserved.

The arguments and finite fixtures here are original CC BY-SA4.0 teaching
material. For checked construction conventions and further theory, see
[Fehrman's Oxford notes, §§2.5,3.2–3.4,7.3](https://people.maths.ox.ac.uk/fehrman/SDENotes.pdf)
and [Miller's Cambridge notes, §§3,4,6](https://www.statslab.cam.ac.uk/~jpm205/teaching/lent2016/lecture_notes.pdf).
These primary teaching references corroborate the construction architecture;
they do not constitute an examination, external approval or observed learning.
The published native sources remain linked at their exact assignments above.
`;export{e as default};