# Textbooks and course design for the Euler mathematics collection

Research date: 2026-10-20.

The next curriculum investment should be a small set of bridges between kinds of mathematical work: calculation and proof, an example and a counterexample, a finite experiment and a universal claim, a probability model and a decision. The collection already has substantial content in all of these areas. Give each bridge one principal home, then connect the other readers and practice banks to it. Adding another broad textbook would make the collection harder to navigate before it established a new educational contribution.

This report examines ten author or university resources, with selected chapters, exercises, scripts, contents and course plans. It does not review ten complete books. The source notes below identify the inspected portions; 18 annotated primary URLs close the report. Textbook organization is evidence about an author's design, not evidence that adopting that organization will improve these local courses. The existing [tools review](tools-and-textbooks.md) covers Wolfram, Mathematica, computational environments and publishing systems; this report concentrates on mathematical content and course structure.

## Ten useful content designs

### Hammack and the move from calculating to proving

Richard Hammack's *Book of Proof*, edition 3.4, builds sets and logic before direct, contrapositive and contradiction proofs. Relations and functions come after work on disproof and induction; a later chapter connects proof methods to calculus. Its introduction supplies a dependency tree and distinguishes optional branches from the core. In Chapter 9, a numerical table motivates a conjecture, then a counterexample settles its falsity. Subsequent problems ask for a proof or a disproof without announcing which is appropriate. That last change matters: selecting a method becomes part of the mathematical task. Inspected: introduction/dependency plan, Chapter 9 opening and counterexample section, and the contents of Chapter 13. [Book PDF](https://richardhammack.github.io/BookOfProof/Main.pdf).

Local use: provide short repairs for quantifiers, implication and functions, followed by an unlabelled claim requiring a decision. The present collection does not need every beginner to complete a whole proof course before seeing an interesting problem. It does need an explicit route back when a learner cannot explain why one witness disproves a universal claim.

### Strang and the relationship between a calculation and its structure

MIT's 18.06 syllabus joins elimination to column/null spaces, then basis and dimension, projections, orthogonalization, determinants, eigenvalues and applications. Its stated institutional prerequisite is multivariable calculus; the local collection should not silently replace that statement with an assertion that the archived MIT course has no prerequisites. Some homework uses MATLAB, while written solutions remain the student's responsibility. [18.06 syllabus](https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/pages/syllabus/).

The first problem-set solution packet mixes coordinate calculations, geometric interpretation, construction of examples, consistency conditions and a Markov-matrix experiment. The experiment asks for repeated multiplication from different initial vectors, a conjectured steady state, and an exact check of the fixed-vector equation. Inspected: syllabus and problem-set 1 solution packet, especially the dependence, consistency and Markov-matrix problems. [Problem-set PDF](https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/22297c2a6dcf06d82e93ee4af115e91a_MIT18_06S10_pset1_s10_soln.pdf).

Local use: every selected matrix computation should produce an interpretation and a checkable claim. Propagating a probability vector and generating a random sample path deserve separate outputs: they answer different questions.

### Axler and a second encounter with linear algebra

*Linear Algebra Done Right*, fourth edition, begins with vector spaces, span, independence and dimension, then linear maps; matrices appear after null spaces and ranges. Determinants arrive near the end. The student preface asks readers to fill omitted steps and look for examples explaining theorem hypotheses. Section 3B moves through examples, a subspace proof, injectivity and dimension results, then proof exercises. Its examples include differentiation on polynomials, making a useful connection to calculus without reducing a linear map to an array. Although the book starts with definitions, its prefaces position the typical reader at a second encounter with the subject and expect mathematical maturity. Inspected: both prefaces, contents, Section 3B and its exercises. [Fourth-edition PDF](https://linear.axler.net/LADR4e.pdf).

Local use: keep computational linear algebra and structural linear algebra as distinct entry routes with a bridge between them. A novice who can row-reduce should test readiness by explaining kernel, image and basis dependence. Lucent's linear-algebra files are archived and absent from its active route, so extending that archive would be a separate scope decision.

### MIT calculus and the design of a complete independent-study session

MIT 18.01SC specifies algebra and trigonometry as preparation. Its five units move through differentiation, applications, the definite integral, techniques, and infinite processes. The course separates short sessions, worked problems, problem sets and unit examinations, with solutions available for checking an attempt. No textbook is required. [18.01SC syllabus](https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/pages/syllabus/).

The opening derivative session connects tangent geometry, limits of secants and the defining formula. It then offers a worked problem with a separate solution, a secant Mathlet and recitation material. Inspected: syllabus, the first part's session sequence, and Session 1's resource organization; the lecture and recitation videos were not watched in full. [Derivative session](https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/pages/1.-differentiation/part-a-definition-and-basic-rules/session-1-introduction-to-derivatives/).

Local use: the reusable unit is a complete mathematical sitting, including something the learner produces. The local calculus readers already supply much of this organization. Improve a specific weak transition before adding more example counts or another session framework.

### Active Calculus and questions that precede exposition

The second edition of *Active Calculus* organizes sections around preview work, discussion and activities, followed by formative online exercises and written work. Its instructor preface describes a section as roughly two classroom hours; that is an author planning convention, not a measured local self-study time. [Instructor preface](https://activecalculus.org/single2e/preface-for-instructors.html).

Section 1.1 begins with questions about position, average velocity and instantaneous velocity. Its preview asks readers to graph a position function, interpret its behavior and explain a difference quotient geometrically and with units before the formal average-velocity definition appears. Later practice changes the representation to a graph and table. Inspected: instructor preface and Section 1.1, including its preview and exercises. [Velocity section](https://activecalculus.org/single2e/sec-1-1-vel.html).

Local use: ask for an interpretable prediction using familiar mathematics, then introduce the formal language needed to refine it. Preserve a static version of the task. A control panel should neither answer the preview automatically nor require operation before the learner understands the question.

### Lebl and abstraction after concrete analysis

Jiří Lebl's *Basic Analysis* explicitly requires a basic proof course. Volume I proceeds through real numbers, sequences/series, continuity, derivatives, Riemann integration and function sequences before metric spaces. The author offers slower and faster routes and identifies Picard's theorem as a possible synthesis. His companion online questions supplement written homework rather than replace it. [Author's course and book page](https://www.jirka.org/ra/).

Section 7.1 motivates metrics by unifying earlier limits, then compares standard and nonstandard real-line metrics, Euclidean spaces, the discrete metric and the supremum metric on continuous functions. It warns against interpreting every metric through a Euclidean drawing. Exercises require checking axioms and constructing examples. Inspected: author introduction/route description, online-homework description, Section 7.1 and its exercise list. [Metric-space section](https://www.jirka.org/ra/html/sec_metric.html).

Local use: a reader should first recognize what an abstraction preserves and what it changes. Contrast two metrics on the same underlying set before adding a page of general theorems. The analysis routes already contain the ingredients; a focused synthesis can connect them.

### Hatcher and geometric motivation with explicit prerequisites

Allen Hatcher's *Algebraic Topology* assumes undergraduate algebra and point-set topology, especially quotient spaces. Its preface permits different orders through homology and homotopy and treats additional topics as optional continuations. This is an advanced destination, not an immediate continuation for everyone who enjoyed a loop animation. [Preface](https://pi.math.cornell.edu/~hatcher/AT/at1pref.html).

Chapter 1 first uses linking pictures to motivate loop composition, then distinguishes the allowed self-intersections of a loop from crossing an excluded object. Section 1.1 formalizes paths, homotopies and the circle's fundamental group through lifting; later covering-space results refer back to those lifting arguments. Inspected: preface; Chapter 1 opening, Section 1.1's definitions and circle argument, and the statements/dependencies of the covering homotopy and path-lifting results in Section 1.3. [Chapter 1 PDF](https://pi.math.cornell.edu/~hatcher/AT/ATch1.pdf).

Local use: keep the beginner lecture focused on a few maps and their conditions. Offer the lifting proof as a named next step. Avoid adding general covering classification before learners can check one proposed homotopy's codomain, endpoints and continuity.

### Blitzstein and Hwang and choosing probability methods

Harvard Stat 110 names mainly single-variable calculus and matrix familiarity as preparation. Its scope moves from events and conditioning to random variables, joint laws, transformations, limit theorems and Markov chains. [Course description](https://stat110.hsites.harvard.edu/about).

Its strategic practice identifies the concept being practiced; homework typically requires identifying and combining concepts. Both have solutions. This supplies a clear distinction between learning a tool and selecting it independently. [Practice design](https://stat110.hsites.harvard.edu/strategic-practice-problems).

The official selected textbook solutions show several representations of the same result: Chapter 8 exercises 29–30 use transformations, Gamma-variable interpretations, convolution and moment-generating functions; Chapter 11 exercise 8 constructs a degree-corrected Metropolis chain. Inspected: official course/practice descriptions and these selected exercises/solutions. The accessible solution packet identifies its 2014 copyright; it is not evidence of a complete review of the current book edition. [Selected solutions](https://stat110.hsites.harvard.edu/sites/g/files/omnuum10111/files/stat110/files/selected_solutions_blitzstein_hwang_probability_01.pdf).

Local use: after guided conditional-probability work, remove the method label. Ask for a justified choice of sample space, conditioning information and solution method before arithmetic or simulation.

### McElreath and modeling before software syntax

The official 2024 *Statistical Rethinking* course combines lectures with weekly problems and discussion. Its sequence connects inference and regression to confounding, overfitting/MCMC, discrete outcomes, multilevel models, networks, and measurement/missingness. It expects substantial scripting; its README does not provide a formal mathematical prerequisite list. [Author's course repository](https://github.com/rmcelreath/stat_rethinking_2024).

The posterior-predictive teaching script repeatedly draws a probability from a Beta posterior, generates a new binomial outcome conditional on that draw, and builds a predictive histogram beside the posterior display. These are visibly two stages of uncertainty. Inspected: course README/calendar and the predictive-simulation script. The book itself and homework PDF bodies were not inspected. [Predictive script](https://github.com/rmcelreath/stat_rethinking_2024/blob/main/scripts/02_predictive_simulation.r).

Local use: require a generative statement, observation mechanism and predictive target before fitting. A script should help answer a question about that model. Reproducing a plotting command is a programming exercise unless the learner also explains what is random at each stage and what a changed assumption does.

### Betancourt and HMC as a means to estimate expectations

Michael Betancourt's *A Conceptual Introduction to Hamiltonian Monte Carlo*, version 2, begins with expectations and high-dimensional probability geometry before constructing momentum-augmented dynamics. It then develops metric/integration-time choices, numerical integration and correction, and diagnostics. The presentation deliberately favors conceptual understanding over complete rigor. It emphasizes that density height and probability mass differ and that its diagnostic conditions are necessary rather than sufficient. Inspected: Sections 1.1–1.4, 3.3, 4.1–4.2, 5.1–5.2 and 6.1–6.3. Its 2018 software discussion is historical rather than current implementation guidance. [Paper](https://arxiv.org/html/1701.02434v2).

Local use: name the expectation being estimated before showing a moving trajectory. Distinguish integrator states, accepted chain states and summary estimates. A new HMC companion should extend the existing local resonance and diagnostic lessons, with a new target or estimand, rather than repeat them.

## How to sequence the local collection

The following routes are proposed selections, not equivalence claims or new mandatory courses. Begin with a short attempt so a reader can bypass material they can already use. A missing prerequisite should point to one exact repair activity, followed by another attempt at the original task.

| Reader's immediate goal | Preparation to demonstrate | Proposed core sequence | Optional continuation |
| --- | --- | --- | --- |
| Understand why a loop cannot be contracted | Functions, continuous motion, intervals; explain what must stay in a set | Maths, Unhurried exploration → shared homotopy lecture → one written domain/basepoint audit | Topology book's lifting proof, then Hatcher with algebra and quotient-space preparation |
| Move from calculus procedures to analysis | Inequalities; negate a quantified statement; derive a simple derivative | Selected calculus examples → proof bridge → real sequences and continuity → uniform convergence → metrics | Fixed-point and approximation synthesis; later measure theory in the separate book |
| Understand linear algebra beyond row reduction | Solve a small system; explain span and dependence | Concrete matrix interpretation → abstract linear maps → kernel/image → a basis-change task | Spectral structure and least squares; application to regression or chains |
| Learn Bayesian modeling | Algebra, conditional probability; distinguish mass from density; basic programming for executable labs | Exact finite update → simple continuous posterior → prediction and loss → Monte Carlo checks → regression/model criticism | Hierarchical modeling, experimental design and specialist modules |
| Understand MCMC mathematically | Expectation, conditional laws and matrix multiplication; limits for convergence arguments | Finite chain → invariant law versus convergence → Metropolis correction → estimand-specific error | Gradient-based methods, geometry, difficult targets and specialist theory |

These paths intentionally reuse existing work. In particular, the Bayesian core already distinguishes required and optional reading, and Lucent already schedules independent proof work and retrieval. Do not append every external topic to those schedules. Substitute a new transfer task for a routine example and state the displaced activity.

A useful content record for each bridge would contain: prerequisite attempt, exact local reading, a worked case, a changed case, an unaided task, instructor checkpoints, and one later retrieval prompt. This record is smaller and more maintainable than a ninth general textbook. Keep source-of-truth ownership for the prose and problem; other projects can supply short audience-specific introductions and direct links.

## Proposed modules and transfer tasks

Implementation update, 20 October 2026: four sequences below now have local
versions: [Lucent lesson 11](../../lucent/courses/analysis/11-exchanging-limits.md),
[Math Atlas Units 3–4](../../atlas/content/courses/linear-algebra-standard.md),
[stationary risk and finite decisions](../../bayesian/extensions/stationary_risk_v2/index.html),
and the [MCMC proposal-correction lab](../../mcmc/site/chapters/09-metropolis-hastings.html#991-proposal-correction-a-mean-that-hides-the-error).
The [homotopy clinic](../homotopy.html#continuity-clinic) connects the sampling
question to joint continuity. The proposals remain below as the research-to-design
record; the linked lessons and their source notes state the current mathematical
choices and proof dependencies. They have not yet been evaluated with learners.

These are original local task designs. The mathematical checkpoints below make them reviewable; they are not results of learner trials. They extend the source comparisons without copying textbook exercises.

### A quantified claim that changes its truth when the domain changes

Start with functions g:A→B and f:B→C. Decide whether injectivity of f∘g implies injectivity of g, injectivity of f, both, or neither. Require a proof for the true conclusion and an explicit example for a false one. Then change the hypothesis by making g surjective.

Instructor checkpoints: equality g(a)=g(a′) implies equality of the composite outputs and hence a=a′. Injectivity of f need only hold on g(A); it need not hold on all B. For a counterexample take A={0}, B={0,1}, C={0}, g(0)=0 and f constant. If g is also surjective, the composite's injectivity does force f injective: lift any pair in B to A. The learner must specify all three sets; an unlabeled arrow picture is insufficient.

Transfer: explain the analogous argument for a retraction r:X→A with inclusion i:A→X and r∘i=id_A. At the function level i is injective and r is surjective. Topology adds continuity and further structure; those do not follow merely from the set-theoretic equation. This is a useful proof bridge into induced maps on fundamental groups after those maps have been defined.

### A numerical estimate and a statement about every input

Use f_n(x)=max(1−n|x−1/n|,0) on [0,1], for integers n≥2. Ask the learner to predict what a fixed finite plotting grid will show for large n, then determine pointwise convergence, uniform convergence and the integral. Permit geometry for the integral.

Instructor checkpoints: the support is [0,2/n], f_n(0)=0, and f_n(1/n)=1. At every fixed x>0, eventually n>2/x, so f_n(x)=0; thus the pointwise limit is zero. The supremum distance from zero stays one, so convergence is not uniform. The triangle has base 2/n and height one, so its integral is (1/2)(2/n)=1/n. For any fixed finite grid, let δ be its smallest positive coordinate, if one exists, and choose n>2/δ. Every positive sample then lies beyond the support, and the sample at zero is also zero. Thus all displayed samples are zero although the actual maximum remains one. A grid containing no positive coordinate needs no such bound. A computed zero is a claim about the samples, not the function.

Transfer: compare two stopping rules, one based on the sampled maximum and one based on a proved uniform error bound. Then explain why a small integral error need not imply small worst-case error. This connects analysis to numerical modeling while keeping the exact function available independently of the plot.

### Differentiation as a linear map rather than an array

Define D:P₂(R)→P₁(R), Dp=p′. Find its kernel and image, prove their dimensions, and compute its matrix in the monomial bases. Recompute using the domain basis (1,1+x,(1+x)²). Explain which conclusions change.

Instructor checkpoints: the kernel is the constant polynomials and the image is all of P₁(R), giving dimensions one and two. The first matrix has rows (0,1,0) and (0,0,2). With the changed domain basis and codomain basis (1,x), the rows are (0,1,2) and (0,0,2). The arrays change; the map, kernel and surjectivity do not. A zero determinant is not the right starting test for this rectangular map.

Transfer: extend D to P(R)→P(R). It is surjective and not injective. Ask exactly why an injective-if-and-only-if-surjective theorem for endomorphisms of finite-dimensional spaces does not apply. This gives a concrete purpose to a theorem's dimension hypothesis and prepares readers to interpret matrices as representations in Bayesian regression.

### The same stationary distribution with different computational precision

Use the row-stochastic chain on states {0,1}, in that order,

P = ((1−a,a),(b,1−b)), with 0<a,b≤1 and a+b<2.

Ask for its stationary distribution, the behavior of probability vectors, and the sampling uncertainty of the fraction of time in state 1. Compare (a,b)=(1/20,3/20) with (3/20,9/20). Then remove a+b<2 and inspect a=b=1.

Instructor checkpoints: π=(b,a)/(a+b), so both examples have state-1 probability p=1/4. The other eigenvalue is λ=1−a−b, respectively 4/5 and 2/5. In stationarity the indicator autocovariance at lag k is p(1−p)λ^k. Writing Ī_N for the stationary sample mean, lim_{N→∞} N Var(Ī_N)=p(1−p)(1+λ)/(1−λ), giving 27/16 and 7/16. These are asymptotic variance calculations, not exact finite-N confidence guarantees. At a=b=1 the stationary law exists, but a point-start distribution alternates and does not converge.

Transfer: protecting a system costs 3/10; leaving it unprotected loses one unit in state 1 and zero otherwise. Exact stationary expected loss favors leaving it unprotected, by a margin of 1/20. Ask how Monte Carlo error affects the estimated choice, what a longer run changes, and what it cannot fix if the transition law is wrong. The simulation should estimate decision risk, while the exact calculation supplies a reference.

### A sampler that gives a plausible histogram of the wrong target

Four states form the path 1–2–3–4, with desired unnormalized weights w=(1,3,3,1). A proposal selects a neighbor uniformly. A learner uses acceptance min(1,w_j/w_i). Ask whether it samples the target, require a detailed-balance argument, then repair it. Retain rejected states in the recorded chain.

Instructor checkpoints: let d_i be the degree. The correct acceptance is min(1,w_j d_i/(w_i d_j)). The intended stationary law is (1,3,3,1)/8. The incorrect rule instead targets probabilities proportional to w_i d_i, namely (1,6,6,1)/14. Thus the total boundary-state probability is 1/4 under the desired law and 1/7 under the erroneous one. Exact enumeration verifies balance; a finite trace can check its predictions without proving convergence.

Transfer: change the middle weights or graph and predict which states become overrepresented before running. This extends the uniform-target construction inspected in Stat 110 into a nonuniform target. It also connects graph structure, probability, linear algebra and algorithm auditing without adding a new inference framework.

## Distinct responsibilities across the eight projects

The table describes proposed responsibilities, not implementation status. The [study map](../index.html) links the current learner materials; their source notes state the mathematical scope.

| Project and existing content | Proposed responsibility | Concrete learner product |
| --- | --- | --- |
| math_free_from: short discoveries, refreshers and adult-reader routes | Supply the approachable entry to domain restrictions and a one-witness disproof; link into the longer proof/homotopy material | A short explanation identifying one forbidden point and one failed deformation, using words before notation |
| leet_math: skill graph, graduated hints and reasoning notebooks | Host short unlabelled claim-selection and delayed retrieval variants of the composition task; link to its canonical explanation | A preserved first attempt, explicit counterexample sets and revised justification; checked choices remain separate from proof review |
| math_test: broad library and commissioned textbook/course workflow | Give a developed linear-map bridge its principal home through the existing commissioning process; first check current assignments and catalog content | The derivative-map calculation, a basis-change explanation and the infinite-dimensional counterexample |
| [calculus](../../calculus/chapters/manifest.json): existing domain, limit, quadrature and error chapters | Connect Chapters 3–5, 14 and 17 with one estimate-versus-certificate transfer sequence, replacing overlapping routine practice | A mathematical error guarantee, its hypotheses and a separate report of the observed numerical error |
| [grraphics_maths](../../lucent/courses/analysis/00-proof-course-route.md): active proof route and editable investigations | Own the moving-spike lesson and its exact pointwise/uniform argument; use its existing saved prediction/revision flow | A proof, a plotting-grid failure explanation and a changed sampling strategy with its limits |
| math_books: static and PDF proof-oriented books | Own the advanced written continuation of homotopy/lifting and the abstract metric comparison; link to the beginner entry | An explicit map audit and a reconstruction of the proof dependency; complete work remains possible in the PDF |
| [bay_inference_boook](../../bayesian/course/syllabus.md): exact updating, prediction and decisions before computation | Own the loss specification and exact reference in the stationary-risk task; keep any new numerical work in a separately versioned extension | A decision memo distinguishing model assumptions, exact risk, simulation error and sensitivity to the loss threshold |
| mcmc_book: chains, diagnostics, estimand precision and HMC | Own finite-chain balance and error analysis, including the asymmetric graph proposal; reuse existing lab infrastructure | An exact balance proof, wrong-target diagnosis and finite-run comparison with uncertainty |

Audience-specific views may differ in length, notation and scaffolding. They should agree on the underlying mathematical claim and link to the same canonical task. Avoid forcing a shared runtime or a common storage model across these projects merely to share content.

## Prioritized course work

1. **Join the existing entry routes.** Make a compact bridge index connecting the current beginner exploration, proof repairs, shared homotopy lecture and topology chapters. Include an attempt-based entry choice and a precise next task. Review the actual destination and prerequisite for each link. This contributes navigation and coherence without another introduction.
2. **Develop one analysis transfer sequence.** Place the moving-spike argument in Lucent, connect the calculus error discussions to it, and put a delayed unlabelled question in the practice bank. Keep the exact solution and static figure sufficient without animation. Replace a routine assignment so the route's workload does not grow silently.
3. **Develop one probability-to-decision sequence.** Connect the exact stationary-risk problem to the MCMC precision material, then use the graph-proposal problem as a failure audit. The Bayesian course owns the decision question; the MCMC book owns sampler validity. Do not refit or overwrite sealed Bayesian release artifacts to add this work.
4. **Commission structural linear algebra after checking overlap.** Search the Math Atlas commissioning queue and existing books before authoring the derivative-map bridge. Publish one developed unit with independent problems and solutions before expanding its topic list. Keep Lucent focused on its active calculus/analysis scope.
5. **Observe the mathematical work.** Ask learners to attempt the changed-domain, moving-spike and wrong-proposal tasks without open solutions, then return after a delay. Record the actual arguments, prerequisite errors and assistance used. Correct mathematical content and functioning interfaces are necessary inputs; they do not establish learning effects by themselves.

## Annotated primary sources

All URLs were opened on 2026-10-20. Inspection is limited to the portions identified above; these annotations are a source ledger, not a whole-book endorsement.

1. [Hammack, Book of Proof PDF](https://richardhammack.github.io/BookOfProof/Main.pdf) — Edition 3.4; dependency tree, proof/disproof ordering and the inspected counterexample sequence.
2. [Axler, Linear Algebra Done Right PDF](https://linear.axler.net/LADR4e.pdf) — Fourth edition; prefaces, operator-centered sequence, Section 3B examples and proof exercises.
3. [MIT 18.06 syllabus](https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/pages/syllabus/) — Official prerequisite, calculation/structure goals and written/computational work.
4. [MIT 18.06 problem-set 1 solutions](https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/22297c2a6dcf06d82e93ee4af115e91a_MIT18_06S10_pset1_s10_soln.pdf) — Actual dependence, consistency and Markov-matrix task design.
5. [MIT 18.01SC syllabus](https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/pages/syllabus/) — Independent-study organization, preparation, units and assessment resources.
6. [MIT introductory derivative session](https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/pages/1.-differentiation/part-a-definition-and-basic-rules/session-1-introduction-to-derivatives/) — Geometry, defining formula, separate worked solution and Mathlet arrangement.
7. [Active Calculus instructor preface](https://activecalculus.org/single2e/preface-for-instructors.html) — Second-edition activity sequence, written work and formative exercise organization.
8. [Active Calculus Section 1.1](https://activecalculus.org/single2e/sec-1-1-vel.html) — Actual preview, units/interpretation questions and later representation changes.
9. [Lebl, Basic Analysis author page](https://www.jirka.org/ra/) — Proof prerequisite, slower/faster content routes and companion online-homework role.
10. [Lebl, metric spaces](https://www.jirka.org/ra/html/sec_metric.html) — Generalization from earlier limits, contrasting metrics and axiom-checking exercises.
11. [Hatcher preface](https://pi.math.cornell.edu/~hatcher/AT/at1pref.html) — Point-set/algebra prerequisites, flexible core order and optional topics.
12. [Hatcher Chapter 1](https://pi.math.cornell.edu/~hatcher/AT/ATch1.pdf) — Geometric motivation, allowed deformations, circle argument and lifting dependencies.
13. [Harvard Stat 110 course description](https://stat110.hsites.harvard.edu/about) — Prerequisites and scope from conditioning through Markov chains.
14. [Harvard strategic practice design](https://stat110.hsites.harvard.edu/strategic-practice-problems) — Concept-labelled practice versus homework requiring independent method selection.
15. [Blitzstein and Hwang selected solutions](https://stat110.hsites.harvard.edu/sites/g/files/omnuum10111/files/stat110/files/selected_solutions_blitzstein_hwang_probability_01.pdf) — Inspected transformation/Gamma arguments and degree-corrected Metropolis construction; dated solution packet.
16. [McElreath's 2024 course repository](https://github.com/rmcelreath/stat_rethinking_2024) — Official lecture/problem sequence and computational course expectations.
17. [McElreath's predictive-simulation script](https://github.com/rmcelreath/stat_rethinking_2024/blob/main/scripts/02_predictive_simulation.r) — Actual nested posterior and conditional-data draws used in teaching.
18. [Betancourt, A Conceptual Introduction to HMC](https://arxiv.org/html/1701.02434v2) — Expectations-first geometry, integrator/correction distinction and diagnostic limitations.


## Cross-subject proof and observation boundaries

The following distinctions qualify the connected source material independently
of the dates of its implementation:

- A directional derivative test does not by itself establish an all-perturbation
  Fréchet bound. The matrix-computation solutions give the uniform remainder
  argument and a changed task.
- An operator identity for every initial state differs from agreement along one
  trajectory. The linear-systems and phase-plane material states the universal
  initial-state condition explicitly.
- Membership in a proposed solution family is distinct from completeness, and
  local continuation is distinct from maximality at a domain exit. The ODE
  well-posedness material supplies the joins and domain hypotheses.
- Uniqueness of a low-rank approximation depends on the chosen norm; a strict
  singular-value gap must be used within the stated norm-specific result.
- Correct marginals, a correct mean or a favorable effective-sample-size
  diagnostic do not determine a joint simulation-rank law. The three-draw
  copy/refresh example in the MCMC workflow gives the exact rank probabilities.

When observing use of these materials, inspect independent written annulus and
reparametrization arguments and a later retrieval attempt. Distinguish a missing
prerequisite from interface confusion. Carry the domain, continuity, target and
basepoint checklist from geometric deformations into word and covering arguments.

Ask a learner to distinguish an exact contraction from its rounded implementation
and to justify a fresh evaluation-error budget. Read the explanation before
judging only a numerical answer; extra prompt text is not evidence that an error
has been repaired. In unseen transition-law cases, distinguish a wrong target
from finite-run variance, starting bias and threshold decision error. Observe
whether an argument transfers between subjects without a cue naming its theorem.

These are interpretation and task-design safeguards, not measured learning
effects or completed learner, instructor or assistive-technology evaluations.
Finite calculations check implementations; the source proofs and their stated
hypotheses establish universal mathematical conclusions. An unexecuted CAS
example is a mathematical expectation, not an observed software result.
