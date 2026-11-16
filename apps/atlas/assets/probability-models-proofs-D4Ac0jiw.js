var e=`---
id: book-probability-models-proofs
title: "Probability: Models, Bounds, and Proofs"
level: advanced-undergraduate
estimated_minutes: 6805
license: CC BY-SA 4.0
---

# Probability: Models, Bounds, and Proofs {#section-1-probability-models-bounds-and-proofs}

Probability is a language for reasoning from a model of uncertainty. The arithmetic is often easy; the difficult work is deciding what the outcomes are, which events are meaningful, which dependence assumptions have actually been made, and which theorem justifies a claimed approximation. This volume develops those habits from the axioms upward. It treats a probability calculation as a proof with a model contract, not as a formula chosen by resemblance.

This is an L3 probability text. The intended reader has completed [Introduction to Probability](introduction-to-probability.md), the [Atlas Calculus course](#/item/course-calculus-change), and the [Lucent linear algebra book](/lucent/web/#/course/linear-algebra), and has seen sequences, sets, functions, and direct proof. Measure theory is not assumed at entry. Sigma-algebras and measurable maps are introduced when they first become necessary; integration is then built in a later chapter rather than hidden behind density notation. The book is designed both for a rigorous second course in probability and for long-term reference before statistics, stochastic processes, randomized algorithms, or mathematical learning theory.

 Its twenty chapters lead to the process treatments in Stochastic Processes.

<a id="section-7-what-makes-this-treatment-distinct"></a>
## What makes this treatment distinct {#section-9-what-makes-this-treatment-distinct}

Math Atlas has neighbouring books with different jobs.

- *Principles of Statistical Inference* starts with data-generating procedures and asks what a statistical method can legitimately conclude.
- *Computational Bayesian Modeling* focuses on hierarchical models, posterior computation, diagnostics, and model criticism.
- *Stochastic Processes: States, Arrivals, Paths, and Fair Games* studies time-indexed random systems after the probability foundations are in place.
- [Introduction to Probability](introduction-to-probability.md) provides the earlier L2 route through the central syllabus.

This volume instead concentrates on theorem architecture: constructing laws, identifying exact hypotheses, proving finite and countable results, finding counterexamples to tempting converses, and attaching approximation error to asymptotic claims. Applications appear to test the mathematics, not to replace it.

The book does not attempt a full measure-theory course, a complete stochastic-processes course, or a complete statistics course. It builds enough measure and integration to state probability results honestly and then supplies explicit onward routes.

<a id="section-20-prerequisite-diagnostic-and-repair-route"></a>
## Prerequisite diagnostic and repair route {#section-22-prerequisite-diagnostic-and-repair-route}

Try these questions before beginning.

1. If $A\\subseteq B$, can you prove $B=A\\cup (B\\setminus A)$ is a disjoint union?
2. Can you negate “for every $\\varepsilon >0$ there exists $N$ such that for every $n\\ge N$…” without changing the quantifier order incorrectly?
3. Can you sum a finite geometric series and identify the excluded parameter value?
4. Can you differentiate and integrate elementary powers and exponentials, including checking an improper integral by a limit?
5. Can you explain why a function is determined by its inputs, outputs, and rule rather than by a familiar formula alone?

If Questions 1, 2, or 5 are unstable, repair sets, functions, quantifiers, and proof patterns through the mathematical toolkit and logic material. If Question 3 is unstable, review sequences and series. If Question 4 is unstable, take the integration route before Chapters 6 and 8. Chapters 1–5 need only finite algebra, limits of monotone numerical sequences, and patient set reasoning; the later convergence chapters require real analysis at the level of sequences, continuity, and integration.

<a id="section-32-conventions-and-ambiguity-policy"></a>
## Conventions and ambiguity policy {#section-34-conventions-and-ambiguity-policy}

- A probability space is $(\\Omega , F, P)$: $\\Omega$ is the outcome space, $F$ the sigma-algebra of events, and $P$ the probability measure.
- Complements are relative to the current $\\Omega$. We write $A^{c}$ only after the ambient model is fixed.
- $\\mathbb{P}_{X}$ or $\\operatorname{Law}(X)$ denotes the pushforward law of $X$; uppercase letters denote random variables and lowercase letters possible values unless stated otherwise.
- $\\mathbf{1}_{A}$ denotes the indicator of event $A$. The book uses $\\mathbb{E}[X]$, $\\operatorname{Var}(X)$, and $\\operatorname{Cov}(X,Y)$ only after existence conditions have been checked.
- “Independent” always names the objects and the governing law. Different labels, separate physical devices, or zero covariance do not establish independence.
- $X=Y$ means pointwise equality as functions when the underlying space matters; $X=Y$ almost surely permits a null exceptional set; $X$ and $Y$ having the same law is weaker still.
- A numerical simulation is evidence about an implementation and a finite sample. It is never called a proof of a distributional identity or limit theorem.
- Asymptotic notation always names the variable tending to its limit and keeps fixed parameters visible.

<a id="section-43-architecture-and-dependency-map"></a>
## Architecture and dependency map {#section-45-architecture-and-dependency-map}

<a id="section-45-part-i-models-events-and-information"></a>
### Part I — Models, events, and information {#section-47-part-i-models-events-and-information}

1. **Event Models, Sigma-Algebras, and Probability Axioms** derives the basic calculus of events from countable additivity.
2. **Counting, Conditioning, and Bayes' Rule** turns observed information into a changed law and audits base-rate reasoning.
3. **Independence, Product Models, and Repeated Trials** distinguishes pairwise, mutual, and conditional independence and constructs repeated experiments.
4. **Random Variables, Laws, and Transformations** studies measurable numerical summaries through their pushforward distributions.
5. **Discrete Laws and Probability Generating Functions** derives named count laws from mechanisms and uses generating functions to combine them.

<a id="section-53-part-ii-laws-expectation-and-dependence"></a>
### Part II — Laws, expectation, and dependence {#section-55-part-ii-laws-expectation-and-dependence}

6. **Continuous Laws and Change of Variables** separates continuous CDFs from densities and singular laws, then derives monotone, multibranch, and simulation transformations.
7. **Joint Laws, Conditional Laws, and Dependence** develops marginalisation, conditional laws, independence factorisation, convolution, vector Jacobians, and singular dependence.
8. **Expectation, Integration, and Moments** builds the integral from simple variables and treats convergence theorems as explicit licences for interchanging limits, sums, and expectations.
9. **Conditional Expectation and Information Projection** proves the tower and pull-out laws, total variance, conditional Jensen, and the optimal-prediction interpretation in $L^{2}$.
10. **Covariance Geometry, Regression, and Moment Inequalities** connects covariance matrices and least-squares projection with Hölder, Minkowski, Paley–Zygmund, and Cantelli bounds.

<a id="section-61-part-iii-gaussian-laws-transforms-convergence-and-limit"></a>
### Part III — Gaussian laws, transforms, convergence, and limit theorems {#section-63-part-iii-gaussian-laws-transforms-convergence-and-limit}

11. **[Gaussian Vectors and the Multivariate Normal](probability-models-proofs/gaussian-vectors-and-multivariate-normal.md)** develops affine Gaussian constructions, singular covariance, the positive-definite density, linear maps, independent Gaussian blocks, conditional laws, characteristic functions, and an orthogonal chi-square decomposition.
12. **Generating Transforms and Characteristic Functions** compares transform domains, uniqueness and inversion claims, moment differentiation, independent sums, and weak-convergence boundaries.
13. **Modes of Convergence and Uniform Integrability** proves the main implications, subsequence criteria, and expectation-convergence licences.
14. **Weak and Strong Laws of Large Numbers** develops Chebyshev, truncation, Borel–Cantelli, and non-iid routes with dependence and heavy-tail failures.
15. **Central Limit Theorems and Approximation Error** proves the iid result, states the triangular-array theorem, and makes finite approximation error explicit.
16. **Exponential Moments and Concentration Inequalities** develops Chernoff, sub-Gaussian, Bernstein, bounded-difference, union-bound, and net arguments with dependence boundaries.

<a id="section-70-part-iv-randomized-estimation"></a>
### Part IV — Randomized estimation {#section-72-part-iv-randomized-estimation}

17. **Monte Carlo and Randomized Estimation** audits iid and dependent error, variance reduction, support and moment conditions for weights, stopping, and reproducibility.

<a id="section-74-part-v-existence-inference-and-synthesis"></a>
### Part V — Existence, inference, and synthesis {#section-76-part-v-existence-inference-and-synthesis}

18. **The Probabilistic Method and Random Structures** uses first moments, alteration, second moments, and a proved local lemma to establish deterministic existence.
19. **Sampling Laws and the Bridge to Statistical Inference** separates estimator risk, likelihood, coverage, testing, resampling, and Bayesian conditioning.
20. **Counterexample Atlas, Synthesis Problems, and Capstones** closes the main route with proof repair and a cumulative sequential-selection audit.

<a id="section-80-process-continuations"></a>
### Process continuations {#section-82-process-continuations}

Three former chapters now continue in the process book, with their original identities preserved as aliases:

- **[Martingales, Stopping, and Dependent Concentration](stochastic-processes-paths/martingales-and-stopping.md)** develops filtrations, optional-stopping boundaries, maximal inequalities, and conditional-MGF bounds.
- **[Coupling, Total Variation, and Comparison](stochastic-processes-paths/coupling-and-convergence.md)** turns distribution distance into joint construction and contraction.
- **[Finite Markov Chains, Recurrence, and Mixing](stochastic-processes-paths/finite-markov-chains.md)** connects path laws, stationary structure, hitting, periodicity, coupling, and spectra.

Their full original source files remain, and their complementary arguments and exercises are combined with the process chapters. A main-route discussion that uses one of their advanced tools states the required result and its hypotheses locally or identifies the continuation explicitly.

The main spine is

$events \\to conditioning \\to independence \\to random variables \\to laws \\to expectation \\to convergence \\to limit theorems$.

Several branches rejoin it. Joint laws are needed before conditional expectation; characteristic functions and convergence in distribution meet in the central limit theorem; conditional expectation and concentration meet again in martingale bounds.

<a id="section-96-how-to-work-through-a-chapter"></a>
## How to work through a chapter {#section-98-how-to-work-through-a-chapter}

Each chapter begins with a mathematical question and a small prerequisite list. Definitions precede theorems. Proofs distinguish the model assumption from the algebraic consequence. Worked examples expose intermediate choices, and counterexamples mark the boundary of each result. An audit near the end of the chapter collects errors worth learning to recognize.

The exercise sets mix four kinds of work:

1. retrieval and notation checks;
2. exact calculations that reveal a mechanism;
3. proof construction, hypothesis repair, and counterexample design;
4. transfer questions whose surface form differs from the worked examples.

The chapters give complete solutions to their exercises and include cumulative investigations in coupling, concentration, Markov-chain mixing, Monte Carlo, random structures, and sampling design.

<a id="section-109-a-proof-and-model-checklist"></a>
## A proof-and-model checklist {#section-111-a-proof-and-model-checklist}

Before accepting a probability argument, ask:

1. What exactly are the outcomes, events, and governing law?
2. Is equal likelihood a stated model feature or an unsupported symmetry guess?
3. Is conditioning on an event of positive probability, or is a more general conditional-law construction required?
4. Which variables or events are independent, under which probability measure, and in what sense?
5. Does the sum, integral, moment, or transform exist in the claimed sense?
6. Is a limit passage justified by monotone, dominated, uniform-integrability, or another named control theorem?
7. Is an asymptotic approximation accompanied by a finite-sample error or a warning that none has been established?
8. Does a simulation test the claimed invariant and report random error, or merely produce a persuasive picture?

The book returns to this list at increasing levels of sophistication.

Begin with [Event Models, Sigma-Algebras, and Probability Axioms](#/item/book-probability-models-proofs?chapter=event-models-and-axioms). Readers who can already prove continuity of probability and countable subadditivity may use its audit and exercises diagnostically, then continue to [Counting, Conditioning, and Bayes' Rule](#/item/book-probability-models-proofs?chapter=counting-conditioning-and-bayes).
`;export{e as default};